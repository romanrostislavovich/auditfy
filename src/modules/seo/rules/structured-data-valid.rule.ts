import {Message} from "../../../models/message.model";
import {MessageType} from "../../../enum/message.enum";
import {RuleInterface} from "../../../models/rule.model";
import {CheerioAPI} from "cheerio";
import {Result as AuditResult} from "lighthouse/types/lhr/audit-result";
import {LightHouseAuditType} from "../../../types/modules.type";

// TODO: This rule mb doesn't work
export class StructuredDataValidRule implements RuleInterface {
    dom: CheerioAPI;
    id: string = 'structured-data-valid';
    tags: string[] = ['html', 'seo'];
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


