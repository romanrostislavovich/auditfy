
import {RuleInterface} from "../../../models/rule.model";
import {Message} from "../../../models/message.model";
import {MessageType} from "../../../enum/message.enum";
import {Result as AuditResult} from "lighthouse/types/lhr/audit-result";
import {CheerioAPI} from "cheerio";
import {Result} from "html-validate";
import {LightHouseAuditType} from "../../../types/modules.type";
import {EslintHelper} from "../../../linters/eslint.helper";
import {ESLint, Linter} from "eslint";


export class NoOctalEscapeRule implements RuleInterface {
     id: string = 'no-octal-escape';
    tags: string[] = ['javascript'];
    dom: CheerioAPI;
    lightHouse: LightHouseAuditType;
    ruleFlow!: MessageType;
    htmlValidator: Result[];
    eslint: ESLint.LintResult[];
    description: string = "No octal escape sequences in string literals.";
    ruleUrl: string = 'http://eslint.org/docs/rules/no-octal-escape';

    constructor(dom: CheerioAPI, lightHouse: LightHouseAuditType, htmlValidator: Result[], eslint: ESLint.LintResult[]) {
        this.dom = dom;
        this.eslint = eslint;
        this.lightHouse = lightHouse;
        this.htmlValidator = htmlValidator;
    }

    check(): Message[] {
        return EslintHelper.identifyRule(this.id, this.ruleFlow,  this.eslint);
    }
}