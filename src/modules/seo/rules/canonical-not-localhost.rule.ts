import {Message} from "../../../models/message.model";
import {MessageType} from "../../../enum/message.enum";
import {RuleInterface, LightHouseAuditType} from "../../../models/rule.model";
import {CheerioAPI} from "cheerio";

export class CanonicalNotLocalhostRule implements RuleInterface{
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
        const canonical = this.dom('link[rel="canonical"]').attr('href');
        const present = !!canonical;
        const notLocalhost =  present && !canonical?.includes('localhost')
        return [
            Message.create(
                `${this.description} is not localhost`,
                notLocalhost ? MessageType.passed : MessageType.error
            ),
        ]
    }
}