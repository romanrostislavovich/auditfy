import {Message} from "../../../models/message.model";
import {MessageType} from "../../../enum/message.enum";
import {RuleInterface} from "../../../models/rule.model";
import {CheerioAPI} from "cheerio";
import {LightHouseAuditType} from "../../../types/modules.type";

export class HeaderPresentRule implements RuleInterface{
    dom: CheerioAPI;
    id: string = 'header-present';
    tags: string[] = ['html', 'seo'];
    ruleFlow!: MessageType;
    lightHouse: LightHouseAuditType;
    description: string = 'H1 tag is present';


    constructor(dom: CheerioAPI, lightHouse: LightHouseAuditType) {
        this.dom = dom;
        this.lightHouse = lightHouse;
    }

    check(): Message[] {
        const tagElements = this.dom('h1');
        const tagCount = tagElements.get().length;
        const tagIsPresent = tagCount !== 0;

        return [
            Message.create(
            `${this.description} is ${tagIsPresent ? 'present' : 'missing'}`,
                tagIsPresent ? MessageType.passed : this.ruleFlow
            ),
        ]
    }
}