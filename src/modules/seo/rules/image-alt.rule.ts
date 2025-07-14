import {Message} from "../../../models/message.model";
import {MessageType} from "../../../enum/message.enum";
import {LightHouseAuditType, RuleInterface} from "../../../models/rule.model";
import {CheerioAPI} from "cheerio";
import {Result as AuditResult} from "lighthouse/types/lhr/audit-result";

export class ImageAltRule implements RuleInterface {
    dom: CheerioAPI;
    ruleFlow: MessageType = MessageType.error;
    lightHouse: LightHouseAuditType;
    description: string = 'Image elements have `[alt]` attributes';
    ruleUrl: string = 'https://dequeuniversity.com/rules/axe/4.10/image-alt';

    constructor(dom: CheerioAPI, lightHouse: Record<string, AuditResult>) {
        this.dom = dom;
        this.lightHouse = lightHouse;
    }

    check(): Message[] {
        const imageAltRule = this.lightHouse['image-alt'].score;
        return [
            Message.create(
                `${this.description}. Score is ${imageAltRule}`,
                imageAltRule || 0 >= 0.9 ? MessageType.passed : MessageType.error
            ),
        ]
    }
}




