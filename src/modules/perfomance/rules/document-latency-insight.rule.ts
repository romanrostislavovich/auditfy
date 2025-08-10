import { RuleInterface} from "../../../models/rule.model";
import {Message} from "../../../models/message.model";
import {MessageType} from "../../../enum/message.enum";
import {Result as AuditResult} from "lighthouse/types/lhr/audit-result";
import {CheerioAPI} from "cheerio";
import {LightHouseAuditType} from "../../../types/modules.type";
import {LighthouseHelper} from "../../../linters/lighthouse.helper";

export class DocumentLatencyInsightRule  implements RuleInterface {
    dom: CheerioAPI;
    id: string = 'document-latency-insight'
    tags: string[] = ['performance'];
    ruleFlow!: MessageType;
    lightHouse: LightHouseAuditType;
    description: string = 'Your first network request is the most important.  Reduce its latency by avoiding redirects, ensuring a fast server response, and enabling text compression.';
    ruleUrl: string = 'https://developer.chrome.com/docs/performance/insights/document-latency';

    constructor(dom: CheerioAPI, lightHouse: LightHouseAuditType) {
        this.dom = dom;
        this.lightHouse = lightHouse;
    }

    check(): Message[] {
        return LighthouseHelper.identifyRule(this.id, this.ruleFlow, this.lightHouse);
    }
}