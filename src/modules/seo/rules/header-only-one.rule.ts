import {Message} from "../../../models/message.model";
import {MessageType} from "../../../enum/message.enum";
import {LightHouseAuditType, RuleInterface} from "../../../models/rule.model";
import {CheerioAPI} from "cheerio";

export class HeaderOnlyOneRule implements RuleInterface{
    dom: CheerioAPI;
    ruleFlow: MessageType = MessageType.error;
    lightHouse: LightHouseAuditType;
    description: string = 'H1 tag';


    constructor(dom: CheerioAPI, lightHouse: LightHouseAuditType) {
        this.dom = dom;
        this.lightHouse = lightHouse;
    }

    check(): Message[] {
        const tagElementsCount = this.dom('h1').length;
        const tagIsOnlyOne = tagElementsCount === 1;

        return [
            Message.create(
                `${this.description} is only one per page`,
                tagIsOnlyOne ? MessageType.passed:  MessageType.error
            ),
        ]
    }
}