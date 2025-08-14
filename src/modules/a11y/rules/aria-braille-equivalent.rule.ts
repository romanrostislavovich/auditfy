
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

export class AriaBrailleEquivalentRule implements RuleInterface {
    id: string = 'aria-braille-equivalent';
    dom: CheerioAPI;
    tags: string[] = ['a11y'];
    lightHouse: LightHouseAuditType;
    ruleFlow: MessageType = MessageType.warning;
    htmlValidator: Result[];
    axeCore: AxeResults;
    description: string = 'Ensure aria-braillelabel and aria-brailleroledescription have a non-braille equivalent';
    ruleUrl: string = 'https://dequeuniversity.com/rules/axe/4.10/aria-braille-equivalent?application=RuleDescription';

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
