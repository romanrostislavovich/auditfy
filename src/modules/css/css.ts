import * as stylelint from 'stylelint';
import {Message} from "../../models/message.model";
import {MessageType} from "../../enum/message.enum";
import {CheerioAPI} from "cheerio";
import {Audit} from "../../models/audit.model";
import {RunnerResult} from "lighthouse";
import {Result} from "html-validate";
import {ClassPatternRule} from "./rules/class-pattern.rule";
import {IdPatternRule} from "./rules/id-pattern.rule";
import {NoInlineStyleRule} from "./rules/no-inline-style.rule";
import {NoStyleTagRule} from "./rules/no-style-tag.rule";
import {SourceModel} from "../../models/source.model";
import {globSync} from "glob";
import {ESLint} from "eslint";
import {URLUtils} from "../../utils/url.utils";
import path from "node:path";
import {LinterResult} from "stylelint";

export class CssAudit extends Audit {
    constructor(source: SourceModel, dom: CheerioAPI, lightHouse: RunnerResult, htmlValidator: Result[]) {
        super();
        this.dom = dom;
        this.source = source;
        this.lighthouse = lightHouse;
        this.htmlValidator = htmlValidator;
        this.name = "CSS"
    }

   async check(): Promise<Message[]> {
        const cssFiles: string[] = this.getCSSFiles();
        if (cssFiles.length === 0) {
            return []
        }

        const stylelintConfig = {
            config: {
                extends: "stylelint-config-standard",
            },
        }

       const styleLintResult: stylelint.LinterResult[] = [];
       const urlFileList = cssFiles.filter(x => (x.includes('http') || x.includes('https')));
       const staticFileList = cssFiles.filter(x => !(x.includes('http') && x.includes('https')))
       const urlFilesContent = urlFileList.map(async (x) => await URLUtils.download(x))

       if(urlFilesContent.length !== 0) {
           for (const urlFile of urlFilesContent) {
               const index = urlFilesContent.indexOf(urlFile);
               const lintFileResult = await stylelint.lint({
                   code: await urlFile,
                   codeFilename:  path.basename(urlFileList[index]),
                   ...stylelintConfig,
               })
               styleLintResult.push(lintFileResult);
           }
       }


       if (staticFileList.length !== 0) {
           styleLintResult.push(await stylelint.lint({
               files: staticFileList,
               ...stylelintConfig,
           }));
       }

       const result: Message[] = [];
       const messages = styleLintResult.map((x) => x.results.reduce<Message[]>((m, item, index) => {
           m.push(...item.parseErrors.map(x => Message.create(`${x.text} at line ${x.line}.`, MessageType.warning)))
           m.push(...item.warnings.map(x => Message.create(`${x.text} at line ${x.line}. Rule ${x.rule}`, MessageType.warning)))
           return m;
       },[]))
       result.push(...messages.reduce((a, item) => {
           a.push(...item)
           return a;
       }, []))

       const rules = [
           IdPatternRule,
           NoStyleTagRule,
           ClassPatternRule,
           NoInlineStyleRule,
       ]

       const htmlStyles = rules.reduce<Message[]>((messages, rule, i) => {
           const instance = new rule(this.dom, this.lighthouse.lhr.audits, this.htmlValidator);
           messages.push(...instance.check());
           return messages;
       }, []);
       result.push(...htmlStyles);
       return result;
    }

    private getCSSFiles(): string[] {
        const cssFiles: string[] = [];

        if(!this.source.isURL) {
            cssFiles.push(...globSync(`${this.source.file.dir}/**/*.css`))
        }

        this.dom('link[rel="stylesheet"]').each((i, elem) => {
            const href = this.dom(elem).attr('href');
            if (href) {
                if (href?.startsWith("http") || href?.startsWith("https")) {
                    cssFiles.push(href);
                } else {
                    const prefixPath = this.source.isURL ? this.source.url : this.source.file.dir;
                    cssFiles.push(`${prefixPath}/${href}`);
                }
            }
        });

        return [...new Set(cssFiles)];
    }
}
