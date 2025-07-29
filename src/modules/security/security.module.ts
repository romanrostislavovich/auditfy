import {Audit} from "../../models/audit.model";
import {File} from "../../models/file.model";
import {CheerioAPI} from "cheerio";
import {RunnerResult} from "lighthouse";
import {Message} from "../../models/message.model";
import { Result} from "html-validate";
import {RequireCspNonceRule} from "./rules/require-csp-nonce.rule";
import {RequireSriRule} from "./rules/require-sri.rule";
import {SourceModel} from "../../models/source.model";
import {ESLint} from "eslint";
import * as pluginSecurity from "eslint-plugin-security";
import {MessageType} from "../../enum/message.enum";
import {URLUtils} from "../../utils/url.utils";
import path from "node:path";

export class SecurityModule extends Audit {
    constructor(source: SourceModel, dom: CheerioAPI, lightHouse: RunnerResult, htmlValidator: Result[]) {
        super();
        this.dom = dom;
        this.source = source;
        this.lighthouse = lightHouse;
        this.htmlValidator = htmlValidator;
        this.name = 'Security';
    }

    async check(): Promise<Message[]> {
        // TODO: check security by url

        const jsFiles: string[] = [];
        this.dom('script').each((i, elem) => {
            const src = this.dom(elem).attr('src');
            if (src) {
                if (src?.startsWith("http") || src?.startsWith("https")) {
                    jsFiles.push(src);
                } else {
                    const prefixPath = this.source.isURL ? this.source.url : this.source.file.dir;
                    jsFiles.push(`${prefixPath}/${src}`);
                }
            }
        });

        const eslint = new ESLint({
            overrideConfigFile: true,
            overrideConfig: {
                ...pluginSecurity.configs.recommended
            }
        });

        const eslintResult: ESLint.LintResult[] = [];
        const urlFilesList = jsFiles.filter(x => (x.includes('http') || x.includes('https')));
        const urlFilesContent = urlFilesList.map(async (x) => await URLUtils.download(x))
        for (const urlFile of urlFilesContent) {
            const index = urlFilesContent.indexOf(urlFile);
            eslintResult.push(...await eslint.lintText(await urlFile, {
                filePath: path.basename(urlFilesList[index])
            }));
        }

        const staticFiles = jsFiles.filter(x => !(x.includes('http') && x.includes('https')))
        eslintResult.push(...await eslint.lintFiles([...staticFiles]));


        const jsResults = eslintResult.reduce<Message[]>((messages, lintResult: ESLint.LintResult) => {
            messages.push(...lintResult.messages.map((error) =>
                Message.create(`${error.message}. Rule: ${error.ruleId}. Line ${error.line}. File ${lintResult.filePath}`, MessageType.warning)))
            return messages;
        },[])

        // HTML
        const rules = [
            RequireSriRule,
            RequireCspNonceRule,
        ]

        const htmlResults = rules.reduce<Message[]>((messages, rule, i) => {
            const instance = new rule(this.dom, this.lighthouse.lhr.audits, this.htmlValidator);
            messages.push(...instance.check());
            return messages;
        }, [])

        return [...jsResults, ...htmlResults]
    }
}