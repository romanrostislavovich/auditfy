import {Message} from "../../../models/message.model";
import {MessageType} from "../../../enum/message.enum";
import {LightHouseAuditType, RuleInterface} from "../../../models/rule.model";
import {CheerioAPI} from "cheerio";
import {Result as AuditResult} from "lighthouse/types/lhr/audit-result";

export class StructuredDataValidRule implements RuleInterface {
    dom: CheerioAPI;
    ruleFlow: MessageType = MessageType.warning;
    lightHouse: LightHouseAuditType;
    description: string = 'Structured data is valid';
    ruleUrl: string = 'https://developers.google.com/search/docs/appearance/structured-data'

    constructor(dom: CheerioAPI, lightHouse: Record<string, AuditResult>) {
        this.dom = dom;
        this.lightHouse = lightHouse;
    }

    check(): Message[] {
        const structuredDataValidRule = this.lightHouse['structured-data'].score;
        return [
            Message.create(
                `${this.description}. Score is ${structuredDataValidRule}`,
                structuredDataValidRule || 0 >= 0.9 ? MessageType.passed : MessageType.warning
            )
        ]
    }
}


