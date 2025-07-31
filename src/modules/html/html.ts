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
import {SourceModel} from "../../models/source.model";
import {DoctypeHtmlRule} from "./rules/doctype-html.rule";
import {AttrDelimiterRule} from "./rules/attr-delimiter.rule";
import {WcagH71Rule} from "./rules/wcag-h71.rule";
import {WcagH67Rule} from "./rules/wcag-h67.rule";
import {WcagH63Rule} from "./rules/wcag-h63.rule";
import {WcagH37Rule} from "./rules/wcag-h37.rule";
import {WcagH36Rule} from "./rules/wcag-h36.rule";
import {WcagH32Rule} from "./rules/wcag-h32.rule";
import {WcagH30Rule} from "./rules/wcag-h30.rule";
import {VoidContentRule} from "./rules/void-content.rule";
import {ValidAutocompleteRule} from "./rules/valid-autocomplete.rule";
import {UnrecognizedCharRefRule} from "./rules/unrecognized-char-ref.rule";
import {UniqueLandmarkRule} from "./rules/unique-landmark.rule";
import {TextContentRule} from "./rules/text-content.rule";
import {TelNonBreakingRule} from "./rules/tel-non-breaking.rule";
import {SvgFocusableRule} from "./rules/svg-focusable.rule";
import {ScriptTypeRule} from "./rules/script-type.rule";
import {ScriptElementRule} from "./rules/script-element.rule";
import {PreferNativeElementRule} from "./rules/prefer-native-element.rule";
import {NoRedundantRoleRule} from "./rules/no-redundant-role.rule";
import {NoRedundantForRule} from "./rules/no-redundant-for.rule";
import {NoRedundantAriaLabelRule} from "./rules/no-redundant-aria-label.rule";
import {NoRawCharactersRule} from "./rules/no-raw-characters.rule";
import {NoMultipleMainRule} from "./rules/no-multiple-main.rule";
import {NoImplicitButtonTypeRule} from "./rules/no-implicit-button-type.rule";
import {NoDupClassRule} from "./rules/no-dup-class.rule";
import {NoDupAttrRule} from "./rules/no-dup-attr.rule";
import {NoDeprecatedAttrRule} from "./rules/no-deprecated-attr.rule";
import {NoConditionalCommentRule} from "./rules/no-conditional-comment.rule";
import {NoAutoplayRule} from "./rules/no-autoplay.rule";
import {NoAbstractRoleRule} from "./rules/no-abstract-role.rule";
import {MultipleLabeledControlsRule} from "./rules/multiple-labeled-controls.rule";
import {MetaRefreshRule} from "./rules/meta-refresh.rule";
import {MapIdNameRule} from "./rules/map-id-name.rule";
import {MapDupNameRule} from "./rules/map-dup-name.rule";
import {InputMissingLabelRule} from "./rules/input-missing-label.rule";
import {InputAttributesRule} from "./rules/input-attributes.rule";
import {HiddenFocusableRule} from "./rules/hidden-focusable.rule";
import {FormDupNameRule} from "./rules/form-dup-name.rule";
import {EmptyTitleRule} from "../seo/rules/empty-title.rule";
import {ElementRequiredContentRule} from "./rules/element-required-content.rule";
import {ElementRequiredAttributesRule} from "./rules/element-required-attributes.rule";
import {ElementRequiredAncestorRule} from "./rules/element-required-ancestor.rule";
import {ElementPermittedParentRule} from "./rules/element-permitted-parent.rule";
import {ElementPermittedOrderRule} from "./rules/element-permitted-order.rule";
import {ElementPermittedOccurrencesRule} from "./rules/element-permitted-occurrences.rule";
import {ElementPermittedContentRule} from "./rules/element-permitted-content.rule";
import {ElementNameRule} from "./rules/element-name.rule";
import {DeprecatedRuleRule} from "./rules/deprecated-rule.rule";
import {CloseOrderRule} from "./rules/close-order.rule";
import {CloseAttrRule} from "./rules/close-attr.rule";

import {AttributeMisuseRule} from "./rules/attribute-misuse.rule";
import {AttributeAllowedValuesRule} from "./rules/attribute-allowed-values.rule";
import {AttrSpacingRule} from "./rules/attr-spacing.rule";
import {AriaLabelMisuseRule} from "./rules/aria-label-misuse.rule";
import {AriaHiddenBodyRule} from "./rules/aria-hidden-body.rule";
import {AreaAltRule} from "./rules/area-alt.rule";

export class HtmlAudit extends Audit {
    constructor(source: SourceModel, dom: CheerioAPI, lightHouse: RunnerResult, htmlValidator: Result[]) {
        super();
        this.dom = dom;
        this.source = source;
        this.lighthouse = lightHouse;
        this.htmlValidator = htmlValidator;
        this.name = "HTML"
    }

    async check(): Promise<Message[]> {
        let messages: Message[] = [];
        const rules = [
            WcagH71Rule,
            WcagH67Rule,
            WcagH63Rule,
            WcagH37Rule,
            WcagH36Rule,
            WcagH32Rule,
            WcagH30Rule,
            VoidContentRule,
            ValidAutocompleteRule,
            UnrecognizedCharRefRule,
            UniqueLandmarkRule,
            TextContentRule,
            TelNonBreakingRule,
            SvgFocusableRule,
            ScriptTypeRule,
            ScriptElementRule,
            PreferNativeElementRule,
            NoRedundantRoleRule,
            NoRedundantForRule,
            NoRedundantAriaLabelRule,
            NoRawCharactersRule,
            NoMultipleMainRule,
            NoImplicitButtonTypeRule,
            NoDupClassRule,
            NoDupAttrRule,
            NoDeprecatedAttrRule,
            NoConditionalCommentRule,
            NoAutoplayRule,
            NoAbstractRoleRule,
            MultipleLabeledControlsRule,
            MetaRefreshRule,
            MapIdNameRule,
            MapDupNameRule,
            InputMissingLabelRule,
            InputAttributesRule,
            HiddenFocusableRule,
            FormDupNameRule,
            ElementRequiredContentRule,
            ElementRequiredAttributesRule,
            ElementRequiredAncestorRule,
            ElementPermittedParentRule,
            ElementPermittedOrderRule,
            ElementPermittedOccurrencesRule,
            ElementPermittedContentRule,
            ElementNameRule,
            DeprecatedRuleRule,
            CloseOrderRule,
            CloseAttrRule,
            AttributeMisuseRule,
            AttributeAllowedValuesRule,
            AttrSpacingRule,
            AttrSpacingRule,
            AttrDelimiterRule,
            AriaLabelMisuseRule,
            AriaHiddenBodyRule,
            AreaAltRule,
            AttrCaseRule,
            AttrPatternRule,
            AttrQuotesRule,
            AttrDelimiterRule,
            AttributeBooleanStyleRule,
            AttributeEmptyStyleRule,
            DoctypeStyleRule,
            ElementCaseRule,
            NamePatternRule,
            DoctypeHtmlRule,
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


