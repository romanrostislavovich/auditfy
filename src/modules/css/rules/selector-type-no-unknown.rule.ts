
import { RuleInterface} from "../../../models/rule.model";
import {Message} from "../../../models/message.model";
import {MessageType} from "../../../enum/message.enum";
import {CheerioAPI} from "cheerio";
import {Result} from "html-validate";
import {LightHouseAuditType} from "../../../types/modules.type";
import * as stylelint from "stylelint";
import {StylelintHelper} from "../../../linters/stylelint.helper";

export class SelectorTypeNoUnknown implements RuleInterface {
    id: string = 'selector-type-no-unknown';
    dom: CheerioAPI;
    tags: string[] = ['style'];
    lightHouse: LightHouseAuditType;
    ruleFlow!: MessageType;
    htmlValidator: Result[];
    stylelint: stylelint.LinterResult[];
    description: string = 'Disallow unknown type selectors.';
    ruleUrl: string = 'https://stylelint.io/user-guide/rules/selector-type-no-unknown';

    constructor(
        dom: CheerioAPI,
        lightHouse: LightHouseAuditType,
        htmlValidator: Result[],
        styleLintResult: stylelint.LinterResult[]
    ) {
        this.dom = dom;
        this.stylelint = styleLintResult;
        this.lightHouse = lightHouse;
        this.htmlValidator = htmlValidator;
    }

    check(): Message[] {
        return StylelintHelper.identifyRule(this.id, this.ruleFlow, this.stylelint);
    }
}