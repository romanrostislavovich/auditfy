
import { RuleInterface} from "../../../models/rule.model";
import {Message} from "../../../models/message.model";
import {MessageType} from "../../../enum/message.enum";
import {Result as AuditResult} from "lighthouse/types/lhr/audit-result";
import {CheerioAPI} from "cheerio";
import {Result} from "html-validate";
import {LightHouseAuditType} from "../../../types/modules.type";
import {HtmlValidatorUtils} from "../../../linters/html-validator";

export class NoRedundantAriaLabelRule implements RuleInterface {
    id: string = 'no-redundant-aria-label';
    dom: CheerioAPI;
    tags: string[] = ['html'];
    lightHouse: LightHouseAuditType;
    ruleFlow!: MessageType;
    htmlValidator: Result[];
    description: string = 'Disallow aria-label and label with same text content';
    ruleUrl: string = 'https://html-validate.org//rules/no-redundant-aria-label.html';

    constructor(dom: CheerioAPI, lightHouse: LightHouseAuditType, htmlValidator: Result[]) {
        this.dom = dom;
        this.lightHouse = lightHouse;
        this.htmlValidator = htmlValidator;
    }

    check(): Message[] {
        return HtmlValidatorUtils.identifyRule(this.id, this.ruleFlow, this.htmlValidator);
    }
}
