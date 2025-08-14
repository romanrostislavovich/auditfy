
import { RuleInterface} from "../../../models/rule.model";
import {Message} from "../../../models/message.model";
import {MessageType} from "../../../enum/message.enum";
import {Result as AuditResult} from "lighthouse/types/lhr/audit-result";
import {CheerioAPI} from "cheerio";
import {Result} from "html-validate";
import {LightHouseAuditType} from "../../../types/modules.type";
import {LighthouseHelper} from "../../../linters/lighthouse.helper";

export class SkipLinkRule implements RuleInterface {
    id: string = 'skip-link';
    dom: CheerioAPI;
    tags: string[] = ['html'];
    lightHouse: LightHouseAuditType;
    ruleFlow: MessageType = MessageType.warning;
    htmlValidator: Result[];
    description: string = 'Skip links are focusable.';
    ruleUrl: string = 'https://dequeuniversity.com/rules/axe/4.10/skip-link';

    constructor(dom: CheerioAPI, lightHouse: LightHouseAuditType, htmlValidator: Result[]) {
        this.dom = dom;
        this.lightHouse = lightHouse;
        this.htmlValidator = htmlValidator;
    }

    check(): Message[] {
        return LighthouseHelper.identifyRule(this.id, this.ruleFlow, this.lightHouse);
    }
}
