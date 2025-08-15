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
import {glob, globSync} from "glob";
import {RuleInterface} from "../../models/rule.model";
import chalk from "chalk";
import {IConfig} from "../../config/default";

export class SecurityModule extends Audit {
    constructor(
        source: SourceModel,
        dom: CheerioAPI,
        lightHouse: RunnerResult,
        htmlValidator: Result[],
        config: IConfig
    ) {
        super();
        this.dom = dom;
        this.source = source;
        this.config = config;
        this.lighthouse = lightHouse;
        this.htmlValidator = htmlValidator;
        this.name = 'Security';
    }


    async check(): Promise<Message[]> {
        const eslintResult = await this.getEsLintResults();
        const ruleImportList = await this.getRuleImportList(__dirname);


        const ruleInstanceList = ruleImportList.reduce<{[key: string]: RuleInterface }>((list, rule: any) => {
            const instance = new rule(this.dom, this.lighthouse.lhr.audits, this.htmlValidator, eslintResult);
            list[instance.id] = instance;
            return list;
        }, {})

        return this.runRules(ruleInstanceList)
    }


    private async getEsLintResults():  Promise<ESLint.LintResult[]> {
        const eslint = new ESLint({
            overrideConfigFile: true,
            overrideConfig: {
                ...pluginSecurity.configs.recommended
            }
        });

        const jsFiles = this.getJavaScriptFiles();
        if (jsFiles.length === 0) {
            return [];
        }
        const eslintResult: ESLint.LintResult[] = [];
        const urlFileList = jsFiles.filter(x => (x.includes('http') || x.includes('https')));
        const staticFileList = jsFiles.filter(x => !(x.includes('http') && x.includes('https')))
        const urlFilesContent = urlFileList.map(async (x) => await URLUtils.download(x))

        for (const urlFile of urlFilesContent) {
            const index = urlFilesContent.indexOf(urlFile);
            const lintFileResult = await eslint.lintText(await urlFile, {
                filePath: path.basename(urlFileList[index])
            });
            eslintResult.push(...lintFileResult);
        }


        eslintResult.push(...await eslint.lintFiles(staticFileList));
        return eslintResult;
    }

    private getJavaScriptFiles(): string[] {
        const jsFiles: string[] = [];

        if(!this.source.isURL) {
            jsFiles.push(...globSync(`${this.source.file.dir}/**/*.js`))
        }

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

        return [...new Set(jsFiles)];
    }
}