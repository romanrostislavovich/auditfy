import lighthouse, { Gatherer, RunnerResult} from 'lighthouse';
import {Result as AuditResult} from "lighthouse/types/lhr/audit-result";
import {Message} from "../../models/message.model";
import {TotalBlockingTimeRule} from "./rules/total-blocking-time.rule";
import {CumulativeLayoutShiftRule} from "./rules/cumulative-layout-shift.rule";
import { File } from '../../models/file.model'
import {CheerioAPI} from "cheerio";
import {Audit} from "../../models/audit.model";
import {SpeedIndexRule} from "./rules/speed-index.rule";
import {LargestContentfulPaintRule} from "./rules/largest-contentful-paint.rule";
import {FirstContentfulPaintRule} from "./rules/first-contentful-paint.rule";
import {Result} from "html-validate";
import {SourceModel} from "../../models/source.model";
import {RuleInterface} from "../../models/rule.model";
import chalk from "chalk";
import {IConfig} from "../../config/default";

export class PerformanceAudit extends Audit {
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
        this.lighthouse = lightHouse;
        this.name = "Performance";
        this.config = config;
    }
    async check(): Promise<Message[]> {
        const result: Message[] = [];

        const configRules = this.getConfigRules();
        const ruleImportList = await this.getRuleImportList(__dirname);

        const ruleInstanceList = ruleImportList.reduce<{[key: string]: RuleInterface }>((list, rule: any) => {
            const instance = new rule(this.dom, this.lighthouse.lhr.audits, this.htmlValidator);
            list[instance.id] = instance;
            return list;
        }, {})

        for(const [rule, flow] of Object.entries(configRules)) {
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



