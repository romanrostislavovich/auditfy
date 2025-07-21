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

export class PerformanceAudit extends Audit {
    constructor(file:File, dom:CheerioAPI, lightHouse: RunnerResult) {
        super();
        this.dom = dom;
        this.file = file;
        this.lighthouse = lightHouse;
        this.name = "Performance";
    }
    async check(): Promise<Message[]> {
        const rules = [
            SpeedIndexRule,
            TotalBlockingTimeRule,
            FirstContentfulPaintRule,
            CumulativeLayoutShiftRule,
            LargestContentfulPaintRule,
        ]

        return rules.reduce<Message[]>((messages, rule, i) => {
            const instance = new rule(this.dom, this.lighthouse?.lhr.audits);
            messages.push(...instance.check());
            return messages;
        }, [])
    }
}



