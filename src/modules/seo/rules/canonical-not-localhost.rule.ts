import {Message} from "../../../models/message.model";
import {MessageType} from "../../../enum/message.enum";
import {RuleInterface} from "../../../models/rule.model";
import {CheerioAPI} from "cheerio";
import {LightHouseAuditType} from "../../../types/modules.type";

export class CanonicalNotLocalhostRule implements RuleInterface{
    dom: CheerioAPI;
    id: string = 'canonical-not-localhost';
    tags: string[] = ['html', 'seo'];
    ruleFlow: MessageType = MessageType.error;
    lightHouse: LightHouseAuditType;
    description: string = 'Canonical must be not localhost';
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
                notLocalhost ? MessageType.passed : MessageType.warning
            ),
        ]
    }
}