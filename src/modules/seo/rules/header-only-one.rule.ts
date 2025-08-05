import {Message} from "../../../models/message.model";
import {MessageType} from "../../../enum/message.enum";
import { RuleInterface} from "../../../models/rule.model";
import {CheerioAPI} from "cheerio";
import {LightHouseAuditType} from "../../../types/modules.type";

export class HeaderOnlyOneRule implements RuleInterface{
    dom: CheerioAPI;
    id: string = 'header-only-one';
    tags: string[] = ['html', 'seo'];
    ruleFlow!: MessageType;
    lightHouse: LightHouseAuditType;
    description: string = 'Only one H1 tag per page';


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
                tagIsOnlyOne ? MessageType.passed:  this.ruleFlow
            ),
        ]
    }
}