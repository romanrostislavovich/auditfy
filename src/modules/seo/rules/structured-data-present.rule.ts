import {Message} from "../../../models/message.model";
import {MessageType} from "../../../enum/message.enum";
import {RuleInterface} from "../../../models/rule.model";
import {CheerioAPI} from "cheerio";
import {Result as AuditResult} from "lighthouse/types/lhr/audit-result";
import {LightHouseAuditType} from "../../../types/modules.type";

export class StructuredDataPresentRule implements RuleInterface {
    dom: CheerioAPI;
    id: string = 'structured-data-present';
    tags: string[] = ['html', 'seo'];
    ruleFlow: MessageType = MessageType.error;
    lightHouse: LightHouseAuditType;
    description: string = 'Structured data is present';
    ruleUrl: string = 'https://developer.chrome.com/docs/lighthouse/seo/structured-data/'

    constructor(dom: CheerioAPI, lightHouse: Record<string, AuditResult>) {
        this.dom = dom;
        this.lightHouse = lightHouse;
    }

    check(): Message[] {
        const structuredData = this.dom('script[type="application/ld+json"]');
        const present = structuredData.length;
        return [
            Message.create(
                `${present} structured data block(s) found`,
                present > 0 ? MessageType.passed : MessageType.warning
            )
        ]
    }
}


