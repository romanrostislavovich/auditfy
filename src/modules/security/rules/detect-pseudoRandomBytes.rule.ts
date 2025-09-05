import { RuleInterface} from "../../../models/rule.model";
import {Message} from "../../../models/message.model";
import {MessageType} from "../../../enum/message.enum";
import {Result as AuditResult} from "lighthouse/types/lhr/audit-result";
import {CheerioAPI} from "cheerio";
import {Result} from "html-validate";
import {LightHouseAuditType} from "../../../types/modules.type";
import {HtmlValidatorUtils} from "../../../linters/html-validator.helper";
import {ESLint} from "eslint";
import {EslintHelper} from "../../../linters/eslint.helper";

export class DetectPseudoRandomBytesRule  implements RuleInterface {
    id: string =  'detect-pseudoRandomBytes';
    dom: CheerioAPI;
    tags: string[] = ['javascript', 'security'];
    ruleUrl: string = 'https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/rules/detect-pseudoRandomBytes.md';
    ruleFlow!: MessageType;
    lightHouse: LightHouseAuditType;
    description: string = 'Detects if "pseudoRandomBytes()" is in use, which might not give you the randomness you need and expect.';
    htmlValidator: Result[];
    eslint: ESLint.LintResult[];

    constructor(
        dom: CheerioAPI,
        lightHouse: LightHouseAuditType,
        htmlValidator: Result[],
        eslint: ESLint.LintResult[]
    ) {
        this.dom = dom;
        this.eslint = eslint;
        this.lightHouse = lightHouse;
        this.htmlValidator = htmlValidator;
    }

    check(): Message[] {
        return EslintHelper.identifyRule(this.id, this.ruleFlow, this.eslint, 'security');
    }
}