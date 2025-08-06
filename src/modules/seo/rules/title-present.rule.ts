import {Message} from "../../../models/message.model";
import {MessageType} from "../../../enum/message.enum";
import {RuleInterface} from "../../../models/rule.model";
import {CheerioAPI} from "cheerio";
import {RunnerResult} from "lighthouse";
import {Result as AuditResult} from "lighthouse/types/lhr/audit-result";
import {LightHouseAuditType} from "../../../types/modules.type";

export class TitlePresentRule implements RuleInterface {
    dom: CheerioAPI;
    id: string = 'document-title';
    tags: string[] = ['html', 'seo'];
    ruleFlow!: MessageType;
    lightHouse: LightHouseAuditType;
    description: string = 'Title tag is present ';
    ruleUrl: string = 'https://www.w3.org/Provider/Style/TITLE.html';

    constructor(dom: CheerioAPI, lightHouse: Record<string, AuditResult>) {
        this.dom = dom;
        this.lightHouse = lightHouse;
    }

    check(): Message[] {
        const titleScoreRule = this.lightHouse[this.id].score || 0 >= 0.9;
        return [
            Message.create(
            `${this.description} is ${titleScoreRule ? 'present' : 'missing'}`,
                titleScoreRule ? MessageType.passed : this.ruleFlow
            ),
        ]
    }
}