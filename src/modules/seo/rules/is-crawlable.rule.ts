import {Message} from "../../../models/message.model";
import {MessageType} from "../../../enum/message.enum";
import {LightHouseAuditType, RuleInterface} from "../../../models/rule.model";
import {CheerioAPI} from "cheerio";
import {Result as AuditResult} from "lighthouse/types/lhr/audit-result";

export class IsCrawlableRule implements RuleInterface {
    dom: CheerioAPI;
    ruleFlow: MessageType = MessageType.error;
    lightHouse: LightHouseAuditType;
    description: string = 'Page isn’t blocked from indexing';
    ruleUrl: string = 'https://developer.chrome.com/docs/lighthouse/seo/is-crawlable/';

    constructor(dom: CheerioAPI, lightHouse: Record<string, AuditResult>) {
        this.dom = dom;
        this.lightHouse = lightHouse;
    }

    check(): Message[] {
        const isCrawlableRule = this.lightHouse['is-crawlable'].score || 0 >= 0.9;
        return [
            Message.create(
                `${this.description}. Score is ${isCrawlableRule}`,
                isCrawlableRule ? MessageType.passed : MessageType.error
            ),
        ]
    }
}


