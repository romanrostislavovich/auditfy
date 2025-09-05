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
import {ESLint} from "eslint";

export class PerformanceAudit extends Audit {
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
        this.name = 'Performance';
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



