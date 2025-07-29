import {Message} from "../../models/message.model";
import {Cheerio, CheerioAPI} from "cheerio";
import {Audit} from "../../models/audit.model";
import {RunnerResult} from "lighthouse";
import {Result} from "html-validate";
import {SourceModel} from "../../models/source.model";
import { Linter, ESLint, loadESLint} from 'eslint';
import {MessageType} from "../../enum/message.enum";
import * as pluginTypescript from 'typescript-eslint';

export class TypescriptAuditModule extends Audit {
    constructor(source: SourceModel, dom: CheerioAPI, lightHouse: RunnerResult, htmlValidator: Result[]) {
        super();
        this.dom = dom;
        this.source = source;
        this.lighthouse = lightHouse;
        this.htmlValidator = htmlValidator;
        this.name = "JavaScript"
    }

    async check(): Promise<Message[]> {
        // TODO: from html, files (local), files (url)

        if(this.source.isURL) {
            return []
        }
        const eslint = new ESLint({
            // @ts-ignore
            overrideConfigFile: true,
            // @ts-ignore
            baseConfig: pluginTypescript.configs.recommended,
        })
        const results = await eslint.lintFiles([`${this.source.file.dir}/**/*.ts`]);

        return results.reduce<Message[]>((messages, lintResult: ESLint.LintResult) => {
            messages.push(...lintResult.messages.map((error) =>
                Message.create(`${error.message}. Rule: ${error.ruleId}. Line ${error.line}. File ${lintResult.filePath}`, MessageType.warning)))
            return messages;
        },[])
    }
}