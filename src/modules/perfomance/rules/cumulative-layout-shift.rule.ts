import {LightHouseAuditType, RuleInterface} from "../../../models/rule.model";
import {Message} from "../../../models/message.model";
import {MessageType} from "../../../enum/message.enum";
import {Result as AuditResult} from "lighthouse/types/lhr/audit-result";
import {CheerioAPI} from "cheerio";

export class CumulativeLayoutShiftRule  implements RuleInterface {
    dom: CheerioAPI;
    ruleFlow: MessageType = MessageType.error;
    lightHouse: LightHouseAuditType;
    description: string = 'LCP';

    constructor(dom: CheerioAPI, lightHouse: LightHouseAuditType) {
        this.dom = dom;
        this.lightHouse = lightHouse;
    }

    check(): Message[] {
        const score = this.lightHouse['cumulative-layout-shift'].score || 0;
        return [
            Message.create(
                `${this.description} score is ${score}`,
                score >= 0.9 ? MessageType.passed : MessageType.error
            )
        ];
    }
}