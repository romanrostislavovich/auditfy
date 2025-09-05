import {Message} from "../../models/message.model";
import {Cheerio, CheerioAPI} from "cheerio";
import {Audit} from "../../models/audit.model";
import {RunnerResult} from "lighthouse";
import {Result} from "html-validate";
import {SourceModel} from "../../models/source.model";
import { Linter, ESLint} from 'eslint';
import {MessageType} from "../../enum/message.enum";
import * as pluginTypescript from 'typescript-eslint';
import {IConfig} from "../../config/default";

export class TypescriptAuditModule extends Audit {
    constructor(
        source: SourceModel,
        config: IConfig,
        dom: CheerioAPI,
        lightHouse: RunnerResult,
        htmlValidator: Result[],
        eslint: ESLint.LintResult[],
    ) {
        super();
        this.dom = dom;
        this.name = 'TypeScript';
        this.config = config;
        this.source = source;
        this.eslint = eslint;
        this.lighthouse = lightHouse;
        this.htmlValidator = htmlValidator;
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