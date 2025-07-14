import {Message} from "../../../models/message.model";
import {MessageType} from "../../../enum/message.enum";
import {RuleInterface, LightHouseAuditType} from "../../../models/rule.model";
import {CheerioAPI} from "cheerio";

export class CanonicalPresentRule implements RuleInterface{
    dom: CheerioAPI;
    ruleFlow: MessageType = MessageType.error;
    lightHouse: LightHouseAuditType;
    description: string = 'Canonical tag';
    ruleUrl: string = 'https://developer.chrome.com/docs/lighthouse/seo/canonical'

    constructor(dom: CheerioAPI, lightHouse: LightHouseAuditType) {
        this.dom = dom;
        this.lightHouse = lightHouse;
    }

    check(): Message[] {
        const canonicalPresentRule = this.lightHouse['canonical'].score || 0 >= 0.9;
        return [
            Message.create(
                `${this.description} is ${canonicalPresentRule ? 'present' : 'missing'}`,
                canonicalPresentRule ? MessageType.passed : MessageType.error
            )
        ]
    }
}