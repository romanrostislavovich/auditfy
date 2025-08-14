import { RuleInterface} from "../../../models/rule.model";
import {Message} from "../../../models/message.model";
import {MessageType} from "../../../enum/message.enum";
import {Result as AuditResult} from "lighthouse/types/lhr/audit-result";
import {CheerioAPI} from "cheerio";
import {Result} from "html-validate";
import {LightHouseAuditType} from "../../../types/modules.type";
import {HtmlValidatorUtils} from "../../../linters/html-validator.helper";

export class NoInlineStyleRule implements RuleInterface {
    id: string = 'no-inline-style';
    dom: CheerioAPI;
    tags: string[] = ['style', 'html'];
    lightHouse: LightHouseAuditType;
    ruleFlow: MessageType = MessageType.warning;
    htmlValidator: Result[];
    description: string = 'Disallow inline style';
    ruleUrl: string = 'https://html-validate.org/rules/no-inline-style.html';

    constructor(dom: CheerioAPI, lightHouse: LightHouseAuditType, htmlValidator: Result[]) {
        this.dom = dom;
        this.lightHouse = lightHouse;
        this.htmlValidator = htmlValidator;
    }

    check(): Message[] {
        return HtmlValidatorUtils.identifyRule(this.id, this.ruleFlow, this.htmlValidator);
    }
}