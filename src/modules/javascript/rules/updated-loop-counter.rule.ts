
import {RuleInterface} from "../../../models/rule.model";
import {Message} from "../../../models/message.model";
import {MessageType} from "../../../enum/message.enum";
import {Result as AuditResult} from "lighthouse/types/lhr/audit-result";
import {CheerioAPI} from "cheerio";
import {Result} from "html-validate";
import {LightHouseAuditType} from "../../../types/modules.type";
import {EslintHelper} from "../../../linters/eslint.helper";
import {ESLint, Linter} from "eslint";


export class UpdatedLoopCounterRule implements RuleInterface {
     id: string = 'updated-loop-counter';
    tags: string[] = ['javascript'];
    dom: CheerioAPI;
    lightHouse: LightHouseAuditType;
    ruleFlow!: MessageType;
    htmlValidator: Result[];
    eslint: ESLint.LintResult[];
    description: string = `Loop counters should not be assigned within the loop body`;
    ruleUrl: string = 'https://sonarsource.github.io/rspec/#/rspec/S2310/javascript';

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