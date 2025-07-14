import {Message} from "../../../models/message.model";
import {MessageType} from "../../../enum/message.enum";
import {LightHouseAuditType, RuleInterface} from "../../../models/rule.model";
import {CheerioAPI} from "cheerio";
import {Result as AuditResult} from "lighthouse/types/lhr/audit-result";

export class LinkTextRule implements RuleInterface {
    dom: CheerioAPI;
    ruleFlow: MessageType = MessageType.error;
    lightHouse: LightHouseAuditType;
    description: string = 'Links have descriptive text';
    ruleUrl: string = 'https://developer.chrome.com/docs/lighthouse/seo/link-text/'

    constructor(dom: CheerioAPI, lightHouse: Record<string, AuditResult>) {
        this.dom = dom;
        this.lightHouse = lightHouse;
    }

    check(): Message[] {
        const linkTextRuleScore = this.lightHouse['link-text'].score;
        return [
            Message.create(
                `${this.description}. Score is ${linkTextRuleScore}`,
                linkTextRuleScore || 0 >= 0.9 ? MessageType.passed : MessageType.error
            ),
        ]
    }
}


