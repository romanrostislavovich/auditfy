import {Message} from "../../../models/message.model";
import {MessageType} from "../../../enum/message.enum";
import {RuleInterface} from "../../../models/rule.model";
import {CheerioAPI} from "cheerio";
import {Result as AuditResult} from "lighthouse/types/lhr/audit-result";
import {LightHouseAuditType} from "../../../types/modules.type";

export class ImageAltRule implements RuleInterface {
    dom: CheerioAPI;
    id: string = 'image-alt';
    tags: string[] = ['html', 'seo'];
    ruleFlow!: MessageType;
    lightHouse: LightHouseAuditType;
    description: string = 'Image elements have `[alt]` attributes';
    ruleUrl: string = 'https://dequeuniversity.com/rules/axe/4.10/image-alt';

    constructor(dom: CheerioAPI, lightHouse: Record<string, AuditResult>) {
        this.dom = dom;
        this.lightHouse = lightHouse;
    }

    check(): Message[] {
        const imageAltRule = this.lightHouse[this.id].score;
        return [
            Message.create(
                `${this.description}. Score is ${imageAltRule}`,
                imageAltRule || 0 >= 0.9 ? MessageType.passed : this.ruleFlow
            ),
        ]
    }
}




