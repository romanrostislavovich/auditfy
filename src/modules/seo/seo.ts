import {Message} from "../../models/message.model";
import {Cheerio, CheerioAPI} from "cheerio";
import {Audit} from "../../models/audit.model";
import {RunnerResult} from "lighthouse";

import {Result} from "html-validate";
import {SourceModel} from "../../models/source.model";
import {IConfig} from "../../config/default";
import {RuleInterface} from "../../models/rule.model";
import chalk from "chalk";
import {ESLint} from "eslint";


export class SeoAudit extends Audit {
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
        this.name = 'SEO';
        this.config = config;
        this.source = source;
        this.eslint = eslint;
        this.lighthouse = lightHouse;
        this.htmlValidator = htmlValidator;
    }

    async check(): Promise<Message[]> {
        const ruleImportList = await this.getRuleImportList(__dirname);

        const ruleInstanceList = ruleImportList.reduce<{[key: string]: RuleInterface }>((list, rule: any) => {
            const instance = new rule(this.dom, this.lighthouse.lhr.audits, this.htmlValidator);
            list[instance.id] = instance;
            return list;
        }, {})

        return this.runRules(ruleInstanceList)
    }
}