import {Message} from "../../../models/message.model";
import {MessageType} from "../../../enum/message.enum";
import {LightHouseAuditType, RuleInterface} from "../../../models/rule.model";
import {CheerioAPI} from "cheerio";
import {RunnerResult} from "lighthouse";
import {Result as AuditResult} from "lighthouse/types/lhr/audit-result";

export class TitleLengthRule implements RuleInterface {
    dom: CheerioAPI;
    ruleFlow: MessageType = MessageType.error;
    lightHouse: LightHouseAuditType;
    description: string = 'Title tag';
    ruleUrl: string = 'https://www.w3.org/Provider/Style/TITLE.html'

    private titleLength = 64;
    constructor(dom: CheerioAPI, lightHouse: Record<string, AuditResult>) {
        this.dom = dom;
        this.lightHouse = lightHouse;
    }

    check(): Message[] {
        const titleLengthRule =  this.dom('title').text().length <= this.titleLength ? 1 : 0;
        return [
            Message.create(
                `${this.description} length less ${this.titleLength} characters long`,
                titleLengthRule ? MessageType.passed : MessageType.error
            )
        ]
    }
}