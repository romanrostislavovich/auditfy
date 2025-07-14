import {Message} from "../../../models/message.model";
import {MessageType} from "../../../enum/message.enum";
import {LightHouseAuditType, RuleInterface} from "../../../models/rule.model";
import {CheerioAPI} from "cheerio";
import {RunnerResult} from "lighthouse";
import {Result as AuditResult} from "lighthouse/types/lhr/audit-result";

export class TitlePresentRule implements RuleInterface {
    dom: CheerioAPI;
    ruleFlow: MessageType = MessageType.error;
    lightHouse: LightHouseAuditType;
    description: string = 'Title tag';
    ruleUrl: string = 'https://www.w3.org/Provider/Style/TITLE.html';

    constructor(dom: CheerioAPI, lightHouse: Record<string, AuditResult>) {
        this.dom = dom;
        this.lightHouse = lightHouse;
    }

    check(): Message[] {
        const titleScoreRule = this.lightHouse['document-title'].score || 0 >= 0.9;
        return [
            Message.create(
            `${this.description} is ${titleScoreRule ? 'present' : 'missing'}`,
                titleScoreRule ? MessageType.passed : MessageType.error
            ),
        ]
    }
}