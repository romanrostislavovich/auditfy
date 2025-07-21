import {Message} from "../../../models/message.model";
import {MessageType} from "../../../enum/message.enum";
import {RuleInterface} from "../../../models/rule.model";
import {CheerioAPI} from "cheerio";
import {LightHouseAuditType} from "../../../types/modules.type";

export class DescriptionRule implements RuleInterface{
    dom: CheerioAPI;
    id: string = 'meta-description';
    tags: string[] = ['html', 'seo'];
    lightHouse: LightHouseAuditType;
    ruleFlow: MessageType = MessageType.error;
    description: string = 'Meta description';
    ruleUrl: string = 'https://developer.chrome.com/docs/lighthouse/seo/meta-description/';

    constructor(dom: CheerioAPI, lightHouse: LightHouseAuditType) {
        this.dom = dom;
        this.lightHouse = lightHouse;
    }

    check(): Message[] {
        const metaDescriptionRule = this.lightHouse[this.id].score || 0 >= 0.9;
        return [Message.create(
            `${this.description} tag is ${metaDescriptionRule ? 'present' : 'missing'}`,
            metaDescriptionRule ? MessageType.passed : MessageType.warning
        )]
    }
}