import {CLI, Message as MessageHtml, Result} from "html-validate";
import {Message} from "../../models/message.model";
import {MessageType} from "../../enum/message.enum";
import {File} from '../../models/file.model';
import {Audit} from "../../models/audit.model";
import {CheerioAPI} from "cheerio";
import {RunnerResult} from "lighthouse";
import {AttrCaseRule} from "./rules/attr-case.rule";
import {AttrPatternRule} from "./rules/attr-pattern.rule";
import {AttrQuotesRule} from "./rules/attr-quotes.rule";
import {AttributeBooleanStyleRule} from "./rules/attribute-boolean-style.rule";
import {AttributeEmptyStyleRule} from "./rules/attribute-empty-style.rule";
import {DoctypeStyleRule} from "./rules/doctype-style.rule";
import {ElementCaseRule} from "./rules/element-case.rule";
import {NamePatternRule} from "./rules/name-pattern.rule";
import {NoImplicitCloseRule} from "./rules/no-implicit-close.rule";
import {NoImplicitInputTypeRule} from "./rules/no-implicit-input-type.rule";
import {NoSelfClosingRule} from "./rules/no-self-closing.rule";
import {NoTrailingWhitespaceRule} from "./rules/no-trailing-whitespace.rule";
import {PreferButtonRule} from "./rules/prefer-button.rule";
import {PreferTbodyRule} from "./rules/prefer-tbody.rule";
import {VoidStyleRule} from "./rules/void-style.rule";
import {AllowedLinksRule} from "./rules/allowed-links.rule";
import {MissingDoctypeRule} from "./rules/missing-doctype.rule";
import {NoDupIdRule} from "./rules/no-dup-id.rule";
import {NoMissingReferencesRule} from "./rules/no-missing-references.rule";
import {NoUtf8BomRule} from "./rules/no-utf8-bom.rule";
import {NoUnknownElementsRule} from "./rules/no-unknown-elements.rule";
import {NoUnusedDisableRule} from "./rules/no-unused-disable.rule";
import {DeprecatedRule} from "./rules/deprecated.rule";
import {ValidIdRule} from "./rules/valid-id.rule";

export class HtmlAudit extends Audit {
    constructor(file: File, dom: CheerioAPI, lightHouse: RunnerResult, htmlValidator: Result[]) {
        super();
        this.dom = dom;
        this.file = file;
        this.lighthouse = lightHouse;
        this.htmlValidator = htmlValidator;
        this.name = "HTML"
    }

    async check(): Promise<Message[]> {
        let messages: Message[] = [];
        const rules = [
            AttrCaseRule,
            AttrPatternRule,
            AttrQuotesRule,
            AttributeBooleanStyleRule,
            AttributeEmptyStyleRule,
            DoctypeStyleRule,
            ElementCaseRule,
            NamePatternRule,
            NoImplicitCloseRule,
            AllowedLinksRule,
            NoImplicitInputTypeRule,
            NoSelfClosingRule,
            NoDupIdRule,
            NoUtf8BomRule,
            NoUnknownElementsRule,
            NoUnusedDisableRule,
            NoMissingReferencesRule,
            NoTrailingWhitespaceRule,
            PreferButtonRule,
            PreferTbodyRule,
            VoidStyleRule,
            DeprecatedRule,
            ValidIdRule,
            MissingDoctypeRule,
        ];
        const htmlStyles = rules.reduce<Message[]>((messages, rule, i) => {
            const instance = new rule(this.dom, this.lighthouse.lhr.audits, this.htmlValidator);
            messages.push(...instance.check());
            return messages;
        }, []);
        messages.push(...htmlStyles);
        return messages;
    }
}


