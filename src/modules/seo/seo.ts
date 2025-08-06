import {Message} from "../../models/message.model";
import {Cheerio, CheerioAPI} from "cheerio";
import {Audit} from "../../models/audit.model";
import {RunnerResult} from "lighthouse";

import {Result} from "html-validate";
import {SourceModel} from "../../models/source.model";
import {IConfig} from "../../config/default";
import {RuleInterface} from "../../models/rule.model";
import chalk from "chalk";


export class SeoAudit extends Audit {
    constructor(
        source: SourceModel,
        dom: CheerioAPI,
        lightHouse: RunnerResult,
        htmlValidator: Result[],
        config: IConfig
    ) {
        super();
        this.dom = dom;
        this.name = "SEO";
        this.config = config;
        this.source = source;
        this.lighthouse = lightHouse;
        this.htmlValidator = htmlValidator;
    }

    async check(): Promise<Message[]> {
        const result: Message[] = [];

        const seoConfigRules = this.getConfigRules();
        const ruleImportList = await this.getRuleImportList(__dirname);

        const ruleInstanceList = ruleImportList.reduce<{[key: string]: RuleInterface }>((list, rule: any) => {
            const instance = new rule(this.dom, this.lighthouse.lhr.audits, this.htmlValidator);
            list[instance.id] = instance;
            return list;
        }, {})

        for(const [rule, flow] of Object.entries(seoConfigRules)) {
            try {
                const instance = ruleInstanceList[rule];
                instance.ruleFlow = flow;
                result.push(...instance.check())
            } catch (e) {
                console.log( `\n${chalk.red('✘')} can't find rule  ${rule} on ${this.name} module`)
            }
        }
        return result;
    }
}