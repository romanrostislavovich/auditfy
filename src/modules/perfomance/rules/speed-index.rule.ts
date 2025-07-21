import { RuleInterface} from "../../../models/rule.model";
import {Message} from "../../../models/message.model";
import {MessageType} from "../../../enum/message.enum";
import {Result as AuditResult} from "lighthouse/types/lhr/audit-result";
import {CheerioAPI} from "cheerio";
import {LightHouseAuditType} from "../../../types/modules.type";

export class SpeedIndexRule  implements RuleInterface {
    dom: CheerioAPI;
    id: string = 'speed-index';
    tags: string[] = ['performance'];
    lightHouse: LightHouseAuditType;
    ruleFlow: MessageType = MessageType.warning;
    description: string = 'Speed index';
    ruleUrl: string = 'https://developer.chrome.com/docs/lighthouse/performance/speed-index/';

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