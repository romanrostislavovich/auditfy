import {Message} from "../../../models/message.model";
import {MessageType} from "../../../enum/message.enum";
import {LightHouseAuditType, RuleInterface} from "../../../models/rule.model";
import {CheerioAPI} from "cheerio";

export class HeaderNotEmptyRule implements RuleInterface{
    dom: CheerioAPI;
    ruleFlow: MessageType = MessageType.error;
    lightHouse: LightHouseAuditType;
    description: string = 'H1 tag';


    constructor(dom: CheerioAPI, lightHouse: LightHouseAuditType) {
        this.dom = dom;
        this.lightHouse = lightHouse;
    }

    check(): Message[] {
        const tagElements = this.dom('h1');
        const tagCount = tagElements.get().length;
        const tagIsPresent = tagCount !== 0;
        const tagIsNotEmpty = tagIsPresent ? tagElements.contents().first().text().length !== 0 : false;

        return [
            Message.create(
                `${this.description} is not empty`,
                tagIsNotEmpty ? MessageType.passed : MessageType.error
            )
        ]
    }
}