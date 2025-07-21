import {Message} from "../../../models/message.model";
import {MessageType} from "../../../enum/message.enum";
import {RuleInterface} from "../../../models/rule.model";
import {CheerioAPI} from "cheerio";
import {Result as AuditResult} from "lighthouse/types/lhr/audit-result";
import {LightHouseAuditType} from "../../../types/modules.type";

export class HrefLangRule implements RuleInterface {
    dom: CheerioAPI;
    id: string = 'hreflang';
    tags: string[] = ['html', 'seo'];
    ruleFlow: MessageType = MessageType.error;
    lightHouse: LightHouseAuditType;
    description: string = 'Document has a valid `hreflang`';
    ruleUrl: string = 'https://developer.chrome.com/docs/lighthouse/seo/hreflang/';

    constructor(dom: CheerioAPI, lightHouse: LightHouseAuditType) {
        this.dom = dom;
        this.lightHouse = lightHouse;
    }

    check(): Message[] {
        const hrefLangRuleScore = this.lightHouse[this.id].score;
        return [
            Message.create(
                `${this.description}. Score is ${hrefLangRuleScore}`,
                hrefLangRuleScore || 0 >= 0.9 ? MessageType.passed : MessageType.warning
            ),
        ]
    }
}




