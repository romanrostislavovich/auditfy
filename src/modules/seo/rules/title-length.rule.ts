import {Message} from "../../../models/message.model";
import {MessageType} from "../../../enum/message.enum";
import {RuleInterface} from "../../../models/rule.model";
import {CheerioAPI} from "cheerio";
import {RunnerResult} from "lighthouse";
import {Result as AuditResult} from "lighthouse/types/lhr/audit-result";
import {Result} from "html-validate";
import {LightHouseAuditType} from "../../../types/modules.type";

export class TitleLengthRule implements RuleInterface {
    dom: CheerioAPI;
    id: string = 'document-title-length';
    tags: string[] = ['html', 'seo'];
    ruleFlow!: MessageType;
    lightHouse: LightHouseAuditType;
    description: string = 'Title tag has correct length';
    ruleUrl: string = 'https://www.w3.org/Provider/Style/TITLE.html'

    private titleLength = 64;

    constructor(dom: CheerioAPI, lightHouse: LightHouseAuditType, htmlValidator: Result[]) {
        this.dom = dom;
        this.lightHouse = lightHouse;
    }

    check(): Message[] {
        const titleLengthRule =  this.dom('title').text().length <= this.titleLength ? 1 : 0;
        return [
            Message.create(
                `${this.description} length less ${this.titleLength} characters long`,
                titleLengthRule ? MessageType.passed : this.ruleFlow
            )
        ]
    }
}