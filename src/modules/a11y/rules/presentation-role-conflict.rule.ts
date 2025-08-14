
import { RuleInterface} from "../../../models/rule.model";
import {Message} from "../../../models/message.model";
import {MessageType} from "../../../enum/message.enum";
import {Result as AuditResult} from "lighthouse/types/lhr/audit-result";
import {CheerioAPI} from "cheerio";
import {Result} from "html-validate";
import {LightHouseAuditType} from "../../../types/modules.type";
import {LighthouseHelper} from "../../../linters/lighthouse.helper";
import {AxeCoreHelper} from "../../../linters/axe-core.helper";
import {AxeResults} from "axe-core";

export class PresentationRoleConflictRule implements RuleInterface {
    id: string = 'presentation-role-conflict';
    dom: CheerioAPI;
    tags: string[] = ['a11y'];
    lightHouse: LightHouseAuditType;
    ruleFlow: MessageType = MessageType.warning;
    htmlValidator: Result[];
    axeCore: AxeResults;
    description: string = 'Elements marked as presentational should not have global ARIA or tabindex to ensure all screen readers ignore them';
    ruleUrl: string = 'https://dequeuniversity.com/rules/axe/4.10/presentation-role-conflict?application=RuleDescription';

    constructor(dom: CheerioAPI, lightHouse: LightHouseAuditType, htmlValidator: Result[], axeResults:  AxeResults) {
        this.dom = dom;
        this.lightHouse = lightHouse;
        this.htmlValidator = htmlValidator;
        this.axeCore = axeResults;
    }

    check(): Message[] {
        return AxeCoreHelper.identifyRule(this.id, this.ruleFlow, this.axeCore);
    }
}
