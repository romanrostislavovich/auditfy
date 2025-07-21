import {RuleInterface} from "../../../models/rule.model";
import {Message} from "../../../models/message.model";
import {MessageType} from "../../../enum/message.enum";
import {Result as AuditResult} from "lighthouse/types/lhr/audit-result";
import {CheerioAPI} from "cheerio";
import {LightHouseAuditType} from "../../../types/modules.type";

export class TotalBlockingTimeRule  implements RuleInterface {
    dom: CheerioAPI;
    id: string = 'total-blocking-time'
    tags: string[] = ['performance'];
    lightHouse:  LightHouseAuditType;
    ruleFlow: MessageType = MessageType.warning;
    description: string = 'Total blocking time';
    ruleUrl: string = 'https://developer.chrome.com/docs/lighthouse/performance/lighthouse-total-blocking-time/';

    constructor(dom: CheerioAPI, lightHouse: LightHouseAuditType) {
        this.dom = dom;
        this.lightHouse = lightHouse;
    }

    check(): Message[] {
        const score = this.lightHouse[this.id].score || 0;
        return [
            Message.create(
                `${this.description} score is ${score}`,
                score >= 0.9 ? MessageType.passed : MessageType.warning
            )
        ];
    }
}