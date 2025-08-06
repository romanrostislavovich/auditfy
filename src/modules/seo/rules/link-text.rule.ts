import {Message} from "../../../models/message.model";
import {MessageType} from "../../../enum/message.enum";
import {RuleInterface} from "../../../models/rule.model";
import {CheerioAPI} from "cheerio";
import {Result as AuditResult} from "lighthouse/types/lhr/audit-result";
import {LightHouseAuditType} from "../../../types/modules.type";

export class LinkTextRule implements RuleInterface {
    dom: CheerioAPI;
    id: string = 'link-text';
    tags: string[] = ['html', 'seo'];
    ruleFlow!: MessageType;
    lightHouse: LightHouseAuditType;
    description: string = 'Links have descriptive text';
    ruleUrl: string = 'https://developer.chrome.com/docs/lighthouse/seo/link-text/'

    constructor(dom: CheerioAPI, lightHouse: Record<string, AuditResult>) {
        this.dom = dom;
        this.lightHouse = lightHouse;
    }

    check(): Message[] {
        const linkTextRuleScore = this.lightHouse[this.id].score;
        return [
            Message.create(
                `${this.description}. Score is ${linkTextRuleScore}`,
                linkTextRuleScore || 0 >= 0.9 ? MessageType.passed : this.ruleFlow
            ),
        ]
    }
}


