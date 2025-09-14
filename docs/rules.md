# Rules List 

- [Accessibility](#accessibility)
- [CSS](#css)
- [HTML](#html)
- [Performance](#performance)
- [Security](#security)
- [SEO](#seo)
- [JavaScript](#javascript)

## Accessibility

| ID/Name                                                                                                                 | Description                                                                                          |
|:--------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------|
| [visual-order-follows-dom](https://developer.chrome.com/docs/lighthouse/accessibility/visual-order-follows-dom/)                | Visual order on the page follows DOM order|
| [video-caption](https://dequeuniversity.com/rules/axe/4.10/video-caption)                                                       | `video` elements contain a `track` element with `[kind="captions"]`|
| [valid-lang](https://www.w3.org/International/questions/qa-choosing-language-tags#question)                                     | `[lang]` attributes have a valid value|
| [use-landmarks](https://developer.chrome.com/docs/lighthouse/accessibility/use-landmarks/)                                      | HTML5 landmark elements are used to improve navigation|
| [th-has-data-cells](https://dequeuniversity.com/rules/axe/4.10/th-has-data-cells)                                               | `th` elements and elements with `[role="columnheader"/"rowheader"]` have data cells they describe.|
| [td-headers-attr](https://dequeuniversity.com/rules/axe/4.10/td-headers-attr)                                                   | Cells in a `table` element that use the `[headers]` attribute refer to table cells within the same table.|
| [td-has-header](https://dequeuniversity.com/rules/axe/4.10/td-has-header)                                                       | `td` elements in a large `table` have one or more table headers.|
| [target-size](https://dequeuniversity.com/rules/axe/4.10/target-size)                                                           | Touch targets do not have sufficient size or spacing.|
| [table-fake-caption](https://dequeuniversity.com/rules/axe/4.10/table-fake-caption)                                             | Tables use `caption` instead of cells with the `[colspan]` attribute to indicate a caption.|
| [table-duplicate-name](https://dequeuniversity.com/rules/axe/4.10/table-duplicate-name)                                         | Tables have different content in the summary attribute and `caption`.|
| [tabindex](https://dequeuniversity.com/rules/axe/4.10/tabindex)                                                                 | No element has a `[tabindex]` value greater than 0|
| [svg-img-alt](https://dequeuniversity.com/rules/axe/4.10/svg-img-alt?application=RuleDescription)                               | Ensure svg elements with an img, graphics-document or graphics-symbol role have an accessible text|
| [summary-name](https://dequeuniversity.com/rules/axe/4.10/summary-name?application=RuleDescription)                             | Ensure summary elements have discernible text|
| [skip-link](https://dequeuniversity.com/rules/axe/4.10/skip-link)                                                               | Skip links are focusable.|
| [server-side-image-map](https://dequeuniversity.com/rules/axe/4.10/server-side-image-map?application=RuleDescription)           | Ensure that server-side image maps are not used|
| [select-name](https://dequeuniversity.com/rules/axe/4.10/select-name)                                                           | Select elements have associated label elements.|
| [scope-attr-valid](https://dequeuniversity.com/rules/axe/4.10/scope-attr-valid?application=RuleDescription)                     | Ensure the scope attribute is used correctly on tables|
| [role-img-alt](https://dequeuniversity.com/rules/axe/4.10/role-img-alt?application=RuleDescription)                             | Ensure [role="img"] elements have alternative text|
| [presentation-role-conflict](https://dequeuniversity.com/rules/axe/4.10/presentation-role-conflict?application=RuleDescription) | Elements marked as presentational should not have global ARIA or tabindex to ensure all screen readers ignore them|
| [p-as-heading](https://dequeuniversity.com/rules/axe/4.10/p-as-heading?application=RuleDescription)                             | Ensure bold, italic text and font-size is not used to style p elements as a heading|
| [offscreen-content-hidden](https://developer.chrome.com/docs/lighthouse/accessibility/offscreen-content-hidden/)                | Offscreen content is hidden from assistive technology|
| [object-alt](https://dequeuniversity.com/rules/axe/4.10/object-alt)                                                             | `object` elements have alternate text|
| [meta-viewport](https://dequeuniversity.com/rules/axe/4.10/meta-viewport)                                                       | `[user-scalable="no"]` is not used in the `meta name="viewport"` element and the `[maximum-scale]` attribute is not less than 5.|
| [meta-viewport-large](https://dequeuniversity.com/rules/axe/4.10/meta-viewport-large?application=RuleDescription)               | Ensure meta name="viewport" can scale a significant amount|
| [meta-refresh](https://dequeuniversity.com/rules/axe/4.10/meta-refresh)                                                         | The document does not use `meta http-equiv="refresh"`|
| [meta-refresh-no-exceptions](https://dequeuniversity.com/rules/axe/4.10/meta-refresh-no-exceptions?application=RuleDescription) | Ensure meta http-equiv="refresh" is not used for delayed refresh|
| [marquee](https://dequeuniversity.com/rules/axe/4.10/marquee?application=RuleDescription)                                       | Ensure marquee elements are not used|
| [managed-focus](https://developer.chrome.com/docs/lighthouse/accessibility/managed-focus/)                                      | The user\|
| [logical-tab-order](https://developer.chrome.com/docs/lighthouse/accessibility/logical-tab-order/)                              | The page has a logical tab order|
| [listitem](https://dequeuniversity.com/rules/axe/4.10/listitem)                                                                 | List items (`li`) are contained within `ul`, `ol` or `menu` parent elements|
| [list](https://dequeuniversity.com/rules/axe/4.10/list)                                                                         | Lists contain only `li` elements and script supporting elements (`script` and `template`).|
| [link-name](https://dequeuniversity.com/rules/axe/4.10/link-name)                                                               | Links have a discernible name|
| [link-in-text-block](https://dequeuniversity.com/rules/axe/4.10/link-in-text-block)                                             | Links are distinguishable without relying on color.|
| [landmark-one-main](https://dequeuniversity.com/rules/axe/4.10/landmark-one-main)                                               | Document has a main landmark.|
| [label](https://dequeuniversity.com/rules/axe/4.10/label)                                                                       | Form elements have associated labels|
| [label-title-only](https://dequeuniversity.com/rules/axe/4.10/label-title-only?application=RuleDescription)                     | Ensure that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes|
| [label-content-name-mismatch](https://dequeuniversity.com/rules/axe/4.10/label-content-name-mismatch)                           | Elements with visible text labels have matching accessible names.|
| [interactive-element-affordance](https://developer.chrome.com/docs/lighthouse/accessibility/interactive-element-affordance/)    | Interactive elements indicate their purpose and state|
| [input-image-alt](https://dequeuniversity.com/rules/axe/4.10/input-image-alt)                                                   | `input type="image"` elements have `[alt]` text|
| [input-button-name](https://dequeuniversity.com/rules/axe/4.10/input-button-name)                                               | Input buttons have discernible text.|
| [image-redundant-alt](https://dequeuniversity.com/rules/axe/4.10/image-redundant-alt)                                           | Image elements do not have `[alt]` attributes that are redundant text.|
| [image-alt](https://dequeuniversity.com/rules/axe/4.10/image-alt)                                                               | Image elements have `[alt]` attributes|
| [identical-links-same-purpose](https://dequeuniversity.com/rules/axe/4.10/identical-links-same-purpose)                         | Identical links have the same purpose.|
| [html-xml-lang-mismatch](https://dequeuniversity.com/rules/axe/4.10/html-xml-lang-mismatch)                                     | `html` element has an `[xml:lang]` attribute with the same base language as the `[lang]` attribute.|
| [html-lang-valid](https://www.w3.org/International/questions/qa-choosing-language-tags#question)                                | `html` element has a valid value for its `[lang]` attribute|
| [html-has-lang](https://dequeuniversity.com/rules/axe/4.10/html-has-lang)                                                       | `html` element has a `[lang]` attribute|
| [heading-order](https://dequeuniversity.com/rules/axe/4.10/heading-order)                                                       | Heading elements appear in a sequentially-descending order|
| [frame-title](https://dequeuniversity.com/rules/axe/4.10/frame-title)                                                           | `frame` or `iframe` elements have a title|
| [frame-title-unique](https://dequeuniversity.com/rules/axe/4.10/frame-title-unique?application=RuleDescription)                 | Ensure iframe and frame elements contain a unique title attribute|
| [frame-tested](https://dequeuniversity.com/rules/axe/4.10/frame-tested?application=RuleDescription)                             | Ensure iframe and frame elements contain the axe-core script|
| [frame-focusable-content](https://dequeuniversity.com/rules/axe/4.10/frame-focusable-content?application=RuleDescription)       | Ensure frame and iframe elements with focusable content do not have tabindex=-1|
| [form-field-multiple-labels](https://dequeuniversity.com/rules/axe/4.10/form-field-multiple-labels)                             | No form fields have multiple labels|
| [focusable-controls](https://developer.chrome.com/docs/lighthouse/accessibility/focusable-controls/)                            | Interactive controls are keyboard focusable|
| [focus-traps](https://developer.chrome.com/docs/lighthouse/accessibility/focus-traps/)                                          | User focus is not accidentally trapped in a region|
| [empty-table-header](https://dequeuniversity.com/rules/axe/4.10/empty-table-header?application=RuleDescription)                 | Ensure table headers have discernible text|
| [empty-heading](https://dequeuniversity.com/rules/axe/4.10/empty-heading)                                                       | All heading elements contain content.|
| [duplicate-id-aria](https://dequeuniversity.com/rules/axe/4.10/duplicate-id-aria)                                               | ARIA IDs are unique|
| [document-title](https://dequeuniversity.com/rules/axe/4.10/document-title)                                                     | Document has a `title` element|
| [dlitem](https://dequeuniversity.com/rules/axe/4.10/dlitem)                                                                     | Definition list items are wrapped in `dl` elements|
| [definition-list](https://dequeuniversity.com/rules/axe/4.10/definition-list)                                                   | `dl`s contain only properly-ordered `dt` and `dd` groups, `script`, `template` or `div` elements.|
| [custom-controls-roles](https://developer.chrome.com/docs/lighthouse/accessibility/custom-control-roles/)                       | Custom controls have ARIA roles|
| [custom-controls-labels](https://developer.chrome.com/docs/lighthouse/accessibility/custom-controls-labels/)                    | Custom controls have associated labels|
| [css-orientation-lock](https://dequeuniversity.com/rules/axe/4.10/css-orientation-lock?application=RuleDescription)             | Ensure content is not locked to any specific display orientation, and the content is operable in all display orientations|
| [color-contrast](https://dequeuniversity.com/rules/axe/4.10/color-contrast)                                                     | Background and foreground colors have a sufficient contrast ratio|
| [color-contrast-enhanced](https://dequeuniversity.com/rules/axe/4.10/color-contrast-enhanced?application=RuleDescription)       | Ensure the contrast between foreground and background colors meets WCAG 2 AAA enhanced contrast ratio thresholds|
| [bypass](https://dequeuniversity.com/rules/axe/4.10/bypass)                                                                     | The page contains a heading, skip link, or landmark region|
| [button-name](https://dequeuniversity.com/rules/axe/4.10/button-name)                                                           | Buttons have an accessible name|
| [avoid-inline-spacing](https://dequeuniversity.com/rules/axe/4.10/avoid-inline-spacing?application=RuleDescription)             | Ensure that text spacing set through style attributes can be adjusted with custom stylesheets|
| [aria-valid-attr](https://dequeuniversity.com/rules/axe/4.10/aria-valid-attr)                                                   | `[aria-*]` attributes are valid and not misspelled|
| [aria-valid-attr-value](https://dequeuniversity.com/rules/axe/4.10/aria-valid-attr-value)                                       | `[aria-*]` attributes have valid values|
| [aria-treeitem-name](https://dequeuniversity.com/rules/axe/4.10/aria-treeitem-name)                                             | ARIA `treeitem` elements have accessible names|
| [aria-tooltip-name](https://dequeuniversity.com/rules/axe/4.10/aria-tooltip-name)                                               | ARIA `tooltip` elements have accessible names|
| [aria-toggle-field-name](https://dequeuniversity.com/rules/axe/4.10/aria-toggle-field-name)                                     | ARIA toggle fields have accessible names|
| [aria-text](https://dequeuniversity.com/rules/axe/4.10/aria-text)                                                               | Elements with the `role=text` attribute do not have focusable descendents.|
| [aria-roles](https://dequeuniversity.com/rules/axe/4.10/aria-roles)                                                             | `[role]` values are valid|
| [aria-required-parent](https://dequeuniversity.com/rules/axe/4.10/aria-required-parent)                                         | `[role]`s are contained by their required parent element|
| [aria-required-children](https://dequeuniversity.com/rules/axe/4.10/aria-required-children)                                     | Elements with an ARIA `[role]` that require children to contain a specific `[role]` have all required children.|
| [aria-required-attr](https://dequeuniversity.com/rules/axe/4.10/aria-required-attr)                                             | `[role]`s have all required `[aria-*]` attributes|
| [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.10/aria-prohibited-attr)                                         | Elements use only permitted ARIA attributes|
| [aria-progressbar-name](https://dequeuniversity.com/rules/axe/4.10/aria-progressbar-name)                                       | ARIA `progressbar` elements have accessible names|
| [aria-meter-name](https://dequeuniversity.com/rules/axe/4.10/aria-meter-name)                                                   | ARIA `meter` elements have accessible names|
| [aria-input-field-name](https://dequeuniversity.com/rules/axe/4.10/aria-input-field-name)                                       | ARIA input fields have accessible names|
| [aria-hidden-focus](https://dequeuniversity.com/rules/axe/4.10/aria-hidden-focus)                                               | `[aria-hidden="true"]` elements do not contain focusable descendents|
| [aria-hidden-body](https://dequeuniversity.com/rules/axe/4.10/aria-hidden-body)                                                 | `[aria-hidden="true"]` is not present on the document `body`|
| [aria-dialog-name](https://dequeuniversity.com/rules/axe/4.10/aria-dialog-name)                                                 | Elements with `role="dialog"` or `role="alertdialog"` have accessible names.|
| [aria-deprecated-role](https://dequeuniversity.com/rules/axe/4.10/aria-deprecated-role)                                         | Deprecated ARIA roles were not used|
| [aria-conditional-attr](https://dequeuniversity.com/rules/axe/4.10/aria-conditional-attr)                                       | ARIA attributes are used as specified for the element\|
| [aria-command-name](https://dequeuniversity.com/rules/axe/4.10/aria-command-name)                                               | `button`, `link`, and `menuitem` elements have accessible names|
| [aria-braille-equivalent](https://dequeuniversity.com/rules/axe/4.10/aria-braille-equivalent?application=RuleDescription)       | Ensure aria-braillelabel and aria-brailleroledescription have a non-braille equivalent|
| [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.10/aria-allowed-role)                                               | Uses ARIA roles only on compatible elements|
| [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.10/aria-allowed-attr)                                               | `[aria-*]` attributes match their roles|
| [accesskeys](https://dequeuniversity.com/rules/axe/4.10/accesskeys)                                                             | `[accesskey]` values are unique|


## CSS

### HTML
| Name                                                                | Description                                                                                          |
|:--------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------|
| [class-pattern](https://html-validate.org//rules/class-pattern.html) | Require classes to match a specific pattern|
| [id-pattern](https://html-validate.org//rules/id-pattern.html) | Require IDs to match a specific pattern|
| [no-style-tag](https://html-validate.org//rules/no-style-tag.html) | Disallow usage of style tag|
| [no-inline-style](https://html-validate.org//rules/no-inline-style.html) | Disallow inline style|

### CSS

| Name                                                                | Description                                                                                          |
|:--------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------|
| [value-no-vendor-prefix](https://stylelint.io/user-guide/rules/value-no-vendor-prefix) | Disallow vendor prefixes for values.|
| [value-keyword-case](https://stylelint.io/user-guide/rules/value-keyword-case) | Specify lowercase or uppercase for keywords values.|
| [unit-no-unknown](https://stylelint.io/user-guide/rules/unit-no-unknown) | Disallow unknown units.|
| [unit-disallowed-list](https://stylelint.io/user-guide/rules/unit-disallowed-list) | Specify a list of disallowed units.|
| [unit-allowed-list](https://stylelint.io/user-guide/rules/unit-allowed-list) | Specify a list of allowed units.|
| [time-min-milliseconds](https://stylelint.io/user-guide/rules/time-min-milliseconds) | Limit the minimum number of milliseconds for time values.|
| [syntax-string-no-invalid](https://stylelint.io/user-guide/rules/syntax-string-no-invalid) | Disallow invalid syntax strings.|
| [string-no-newline](https://stylelint.io/user-guide/rules/string-no-newline) | Disallow invalid newlines within strings.|
| [shorthand-property-no-redundant-values](https://stylelint.io/user-guide/rules/shorthand-property-no-redundant-values) | Disallow redundant values within shorthand properties.|
| [selector-type-no-unknown](https://stylelint.io/user-guide/rules/selector-type-no-unknown) | Disallow unknown type selectors.|
| [selector-type-case](https://stylelint.io/user-guide/rules/selector-type-case) | Specify lowercase or uppercase for type selectors.|
| [selector-pseudo-element-no-unknown](https://stylelint.io/user-guide/rules/selector-pseudo-element-no-unknown) | Disallow unknown pseudo-element selectors.|
| [selector-pseudo-element-disallowed-list](https://stylelint.io/user-guide/rules/selector-pseudo-element-disallowed-list) | Specify a list of disallowed pseudo-element selectors.|
| [selector-pseudo-element-colon-notation](https://stylelint.io/user-guide/rules/selector-pseudo-element-colon-notation) | Specify single or double colon notation for applicable pseudo-element selectors.|
| [selector-pseudo-element-allowed-list](https://stylelint.io/user-guide/rules/selector-pseudo-element-allowed-list) | Specify a list of allowed pseudo-element selectors.|
| [selector-pseudo-class-no-unknown](https://stylelint.io/user-guide/rules/selector-pseudo-class-no-unknown) | Disallow unknown pseudo-class selectors.|
| [selector-pseudo-class-disallowed-list](https://stylelint.io/user-guide/rules/selector-pseudo-class-disallowed-list) | Specify a list of disallowed pseudo-class selectors.|
| [selector-pseudo-class-allowed-list](https://stylelint.io/user-guide/rules/selector-pseudo-class-allowed-list) | Specify a list of allowed pseudo-class selectors.|
| [selector-not-notation](https://stylelint.io/user-guide/rules/selector-not-notation) | Specify simple or complex notation for :not() pseudo-class selectors.|
| [selector-no-vendor-prefix](https://stylelint.io/user-guide/rules/selector-no-vendor-prefix) | Disallow vendor prefixes for selectors.|
| [selector-no-qualifying-type](https://stylelint.io/user-guide/rules/selector-no-qualifying-type) | Disallow qualifying a selector by type.|
| [selector-nested-pattern](https://stylelint.io/user-guide/rules/selector-nested-pattern) | Specify a pattern for the selectors of rules nested within rules.|
| [selector-max-universal](https://stylelint.io/user-guide/rules/selector-max-universal) | Limit the number of universal selectors in a selector.|
| [selector-max-type](https://stylelint.io/user-guide/rules/selector-max-type) | Limit the number of type selectors in a selector.|
| [selector-max-specificity](https://stylelint.io/user-guide/rules/selector-max-specificity) | Limit the specificity of selectors.|
| [selector-max-pseudo-class](https://stylelint.io/user-guide/rules/selector-max-pseudo-class) | Limit the number of pseudo-classes in a selector.|
| [selector-max-id](https://stylelint.io/user-guide/rules/selector-max-id) | Limit the number of ID selectors in a selector.|
| [selector-max-compound-selectors](https://stylelint.io/user-guide/rules/selector-max-compound-selectors) | Limit the number of compound selectors in a selector.|
| [selector-max-combinators](https://stylelint.io/user-guide/rules/selector-max-combinators) | Limit the number of combinators in a selector.|
| [selector-max-class](https://stylelint.io/user-guide/rules/selector-max-class) | Limit the number of classes in a selector.|
| [selector-max-attribute](https://stylelint.io/user-guide/rules/selector-max-attribute) | Limit the number of attribute selectors in a selector.|
| [selector-id-pattern](https://stylelint.io/user-guide/rules/selector-id-pattern) | Specify a pattern for ID selectors.|
| [selector-disallowed-list](https://stylelint.io/user-guide/rules/selector-disallowed-list) | Specify a list of disallowed selectors.|
| [selector-combinator-disallowed-list](https://stylelint.io/user-guide/rules/selector-combinator-disallowed-list) | Specify a list of disallowed combinators.|
| [selector-combinator-allowed-list](https://stylelint.io/user-guide/rules/selector-combinator-allowed-list) | Specify a list of allowed combinators.|
| [selector-class-pattern](https://stylelint.io/user-guide/rules/selector-class-pattern) | Specify a pattern for class selectors.|
| [selector-attribute-quotes](https://stylelint.io/user-guide/rules/selector-attribute-quotes) | Require or disallow quotes for attribute values.|
| [selector-attribute-operator-disallowed-list](https://stylelint.io/user-guide/rules/selector-attribute-operator-disallowed-list) | Specify a list of disallowed attribute operators.|
| [selector-attribute-operator-allowed-list](https://stylelint.io/user-guide/rules/selector-attribute-operator-allowed-list) | Specify a list of allowed attribute operators.|
| [selector-attribute-name-disallowed-list](https://stylelint.io/user-guide/rules/selector-attribute-name-disallowed-list) | Specify a list of disallowed attribute names.|
| [selector-anb-no-unmatchable](https://stylelint.io/user-guide/rules/selector-anb-no-unmatchable) | Disallow unmatchable An+B selectors.|
| [rule-selector-property-disallowed-list](https://stylelint.io/user-guide/rules/rule-selector-property-disallowed-list) | Specify a list of disallowed properties for selectors within rules.|
| [rule-empty-line-before](https://stylelint.io/user-guide/rules/rule-empty-line-before) | Require or disallow an empty line before rules.|
| [property-no-vendor-prefix](https://stylelint.io/user-guide/rules/property-no-vendor-prefix) | Disallow vendor prefixes for properties.|
| [property-no-unknown](https://stylelint.io/user-guide/rules/property-no-unknown) | Disallow unknown properties.|
| [property-no-deprecated](https://stylelint.io/user-guide/rules/property-no-deprecated) | Disallow deprecated properties.|
| [property-disallowed-list](https://stylelint.io/user-guide/rules/property-disallowed-list) | Specify a list of disallowed properties.|
| [property-allowed-list](https://stylelint.io/user-guide/rules/property-allowed-list) | Specify a list of allowed properties.|
| [number-max-precision](https://stylelint.io/user-guide/rules/number-max-precision) | Limit the number of decimal places allowed in numbers.|
| [no-unknown-custom-properties](https://stylelint.io/user-guide/rules/no-unknown-custom-properties) | Disallow unknown custom properties.|
| [no-unknown-custom-media](https://stylelint.io/user-guide/rules/no-unknown-custom-media) | Disallow unknown custom media queries.|
| [no-unknown-animations](https://stylelint.io/user-guide/rules/no-unknown-animations) | Disallow unknown animations.|
| [no-style-tag](https://html-validate.org/rules/no-style-tag.html) | Disallow usage of style tag|
| [no-irregular-whitespace](https://stylelint.io/user-guide/rules/no-irregular-whitespace) | Disallow irregular whitespace.|
| [no-invalid-position-declaration](https://stylelint.io/user-guide/rules/no-invalid-position-declaration) | Disallow invalid position declarations.|
| [no-invalid-position-at-import-rule](https://stylelint.io/user-guide/rules/no-invalid-position-at-import-rule) | Disallow invalid position @import rules.|
| [no-invalid-double-slash-comments](https://stylelint.io/user-guide/rules/no-invalid-double-slash-comments) | Disallow invalid double-slash comments.|
| [no-inline-style](https://html-validate.org/rules/no-inline-style.html) | Disallow inline style|
| [no-empty-source](https://stylelint.io/user-guide/rules/no-empty-source) | Disallow empty sources.|
| [no-duplicate-selectors](https://stylelint.io/user-guide/rules/no-duplicate-selectors) | Disallow duplicate selectors.|
| [no-duplicate-at-import-rules](https://stylelint.io/user-guide/rules/no-duplicate-at-import-rules) | Disallow duplicate @import rules.|
| [no-descending-specificity](https://stylelint.io/user-guide/rules/no-descending-specificity) | Disallow selectors of lower specificity from coming after overriding selectors of higher specificity.|
| [nesting-selector-no-missing-scoping-root](https://stylelint.io/user-guide/rules/nesting-selector-no-missing-scoping-root) | Disallow missing scoping root for nesting selectors.|
| [named-grid-areas-no-invalid](https://stylelint.io/user-guide/rules/named-grid-areas-no-invalid) | Disallow invalid named grid areas.|
| [media-type-no-deprecated](https://stylelint.io/user-guide/rules/media-type-no-deprecated) | Disallow deprecated media types.|
| [media-query-no-invalid](https://stylelint.io/user-guide/rules/media-query-no-invalid) | Disallow invalid media queries.|
| [media-feature-range-notation](https://stylelint.io/user-guide/rules/media-feature-range-notation) | Specify context or prefix notation for media feature ranges.|
| [media-feature-name-value-no-unknown](https://stylelint.io/user-guide/rules/media-feature-name-value-no-unknown) | Disallow unknown values for media features.|
| [media-feature-name-value-allowed-list](https://stylelint.io/user-guide/rules/media-feature-name-value-allowed-list) | Specify a list of allowed media feature name and value pairs.|
| [media-feature-name-unit-allowed-list](https://stylelint.io/user-guide/rules/media-feature-name-unit-allowed-list) | Specify a list of allowed name and unit pairs within media features.|
| [media-feature-name-no-vendor-prefix](https://stylelint.io/user-guide/rules/media-feature-name-no-vendor-prefix) | Disallow vendor prefixes for media feature names.|
| [media-feature-name-no-unknown](https://stylelint.io/user-guide/rules/media-feature-name-no-unknown) | Disallow unknown media feature names.|
| [media-feature-name-disallowed-list](https://stylelint.io/user-guide/rules/media-feature-name-disallowed-list) | Specify a list of disallowed media feature names.|
| [media-feature-name-allowed-list](https://stylelint.io/user-guide/rules/media-feature-name-allowed-list) | Specify a list of allowed media feature names.|
| [max-nesting-depth](https://stylelint.io/user-guide/rules/max-nesting-depth) | Limit the depth of nesting.|
| [lightness-notation](https://stylelint.io/user-guide/rules/lightness-notation) | Specify number or percentage notation for lightness.|
| [length-zero-no-unit](https://stylelint.io/user-guide/rules/length-zero-no-unit) | Disallow units for zero lengths.|
| [layer-name-pattern](https://stylelint.io/user-guide/rules/layer-name-pattern) | Specify a pattern for layer names.|
| [keyframes-name-pattern](https://stylelint.io/user-guide/rules/keyframes-name-pattern) | Specify a pattern for keyframe names.|
| [keyframe-selector-notation](https://stylelint.io/user-guide/rules/keyframe-selector-notation) | Specify keyword or percentage notation for keyframe selectors.|
| [keyframe-declaration-no-important](https://stylelint.io/user-guide/rules/keyframe-declaration-no-important) | Disallow invalid !important within keyframe declarations.|
| [keyframe-block-no-duplicate-selectors](https://stylelint.io/user-guide/rules/keyframe-block-no-duplicate-selectors) | Disallow duplicate selectors within keyframe blocks.|
| [import-notation](https://stylelint.io/user-guide/rules/import-notation) | Specify string or URL notation for @import rules.|
| [id-pattern](https://html-validate.org/rules/id-pattern.html) | Require a specific ID format|
| [hue-degree-notation](https://stylelint.io/user-guide/rules/hue-degree-notation) | Specify number or angle notation for degree hues.|
| [function-url-scheme-disallowed-list](https://stylelint.io/user-guide/rules/function-url-scheme-disallowed-list) | Specify a list of disallowed URL schemes.|
| [function-url-scheme-allowed-list](https://stylelint.io/user-guide/rules/function-url-scheme-allowed-list) | Specify a list of allowed URL schemes.|
| [function-url-quotes](https://stylelint.io/user-guide/rules/function-url-quotes) | Require or disallow quotes for urls.|
| [function-url-no-scheme-relative](https://stylelint.io/user-guide/rules/function-url-no-scheme-relative) | Disallow scheme-relative URLs.|
| [function-no-unknown](https://stylelint.io/user-guide/rules/function-no-unknown) | Disallow unknown functions.|
| [function-name-case](https://stylelint.io/user-guide/rules/function-name-case) | Specify lowercase or uppercase for function names.|
| [function-linear-gradient-no-nonstandard-direction](https://stylelint.io/user-guide/rules/function-linear-gradient-no-nonstandard-direction) | Disallow non-standard direction values for linear gradient functions.|
| [function-disallowed-list](https://stylelint.io/user-guide/rules/function-disallowed-list) | Specify a list of disallowed functions.|
| [function-calc-no-unspaced-operator](https://stylelint.io/user-guide/rules/function-calc-no-unspaced-operator) | Disallow invalid unspaced operator within calc functions.|
| [function-allowed-list](https://stylelint.io/user-guide/rules/function-allowed-list) | Specify a list of allowed functions.|
| [font-weight-notation](https://stylelint.io/user-guide/rules/font-weight-notation) | Specify numeric or named notation for font weights.|
| [font-family-no-missing-generic-family-keyword](https://stylelint.io/user-guide/rules/font-family-no-missing-generic-family-keyword) | Disallow a missing generic family keyword within font families.|
| [font-family-no-duplicate-names](https://stylelint.io/user-guide/rules/font-family-no-duplicate-names) | Disallow duplicate names within font families.|
| [font-family-name-quotes](https://stylelint.io/user-guide/rules/font-family-name-quotes) | Require or disallow quotes for font family names.|
| [declaration-property-value-no-unknown](https://stylelint.io/user-guide/rules/declaration-property-value-no-unknown) | Disallow unknown values for properties within declarations.|
| [declaration-property-value-keyword-no-deprecated](https://stylelint.io/user-guide/rules/declaration-property-value-keyword-no-deprecated) | Disallow deprecated keywords for properties within declarations.|
| [declaration-property-value-disallowed-list](https://stylelint.io/user-guide/rules/declaration-property-value-disallowed-list) | Specify a list of disallowed property and value pairs within declarations.|
| [declaration-property-value-allowed-list](https://stylelint.io/user-guide/rules/declaration-property-value-allowed-list) | Specify a list of allowed property and value pairs within declarations.|
| [declaration-property-unit-disallowed-list](https://stylelint.io/user-guide/rules/declaration-property-unit-disallowed-list) | Specify a list of disallowed property and unit pairs within declarations.|
| [declaration-property-unit-allowed-list](https://stylelint.io/user-guide/rules/declaration-property-unit-allowed-list) | Specify a list of allowed property and unit pairs within declarations.|
| [declaration-property-max-values](https://stylelint.io/user-guide/rules/declaration-property-max-values) | Limit the number of values for a list of properties within declarations.|
| [declaration-no-important](https://stylelint.io/user-guide/rules/declaration-no-important) | Disallow !important within declarations.|
| [declaration-empty-line-before](https://stylelint.io/user-guide/rules/declaration-empty-line-before) | Require or disallow an empty line before declarations.|
| [declaration-block-single-line-max-declarations](https://stylelint.io/user-guide/rules/declaration-block-single-line-max-declarations) | Limit the number of declarations within a single-line declaration block.|
| [declaration-block-no-shorthand-property-overrides](https://stylelint.io/user-guide/rules/declaration-block-no-shorthand-property-overrides) | Disallow shorthand properties that override related longhand properties.|
| [declaration-block-no-redundant-longhand-properties](https://stylelint.io/user-guide/rules/declaration-block-no-redundant-longhand-properties) | Disallow redundant longhand properties within declaration-block.|
| [declaration-block-no-duplicate-properties](https://stylelint.io/user-guide/rules/declaration-block-no-duplicate-properties) | Disallow duplicate properties within declaration blocks.|
| [declaration-block-no-duplicate-custom-properties](https://stylelint.io/user-guide/rules/declaration-block-no-duplicate-custom-properties) | Disallow duplicate custom properties within declaration blocks.|
| [custom-property-pattern](https://stylelint.io/user-guide/rules/custom-property-pattern) | Specify a pattern for custom properties.|
| [custom-property-no-missing-var-function](https://stylelint.io/user-guide/rules/custom-property-no-missing-var-function) | Disallow missing var function for custom properties.|
| [custom-property-empty-line-before](https://stylelint.io/user-guide/rules/custom-property-empty-line-before) | Require or disallow an empty line before custom properties.|
| [custom-media-pattern](https://stylelint.io/user-guide/rules/custom-media-pattern) | Specify a pattern for custom media query names.|
| [container-name-pattern](https://stylelint.io/user-guide/rules/container-name-pattern) | Specify a pattern for container names.|
| [comment-word-disallowed-list](https://stylelint.io/user-guide/rules/comment-word-disallowed-list) | Specify a list of disallowed words within comments.|
| [comment-whitespace-inside](https://stylelint.io/user-guide/rules/comment-whitespace-inside) | Require or disallow whitespace on the inside of comment markers.|
| [comment-pattern](https://stylelint.io/user-guide/rules/comment-pattern) | Specify a pattern for comments.|
| [comment-no-empty](https://stylelint.io/user-guide/rules/comment-no-empty) | Disallow empty comments.|
| [comment-empty-line-before](https://stylelint.io/user-guide/rules/comment-empty-line-before) | Require or disallow an empty line before comments.|
| [color-no-invalid-hex](https://stylelint.io/user-guide/rules/color-no-invalid-hex) | Disallow invalid hex colors.|
| [color-no-hex](https://stylelint.io/user-guide/rules/color-no-hex) | Disallow hex colors.|
| [color-named](https://stylelint.io/user-guide/rules/color-named) | Require (where possible) or disallow named colors.|
| [color-hex-length](https://stylelint.io/user-guide/rules/color-hex-length) | Specify short or long notation for hex colors.|
| [color-hex-alpha](https://stylelint.io/user-guide/rules/color-hex-alpha) | Require or disallow alpha channel for hex colors.|
| [color-function-notation](https://stylelint.io/user-guide/rules/color-function-notation) | Specify modern or legacy notation for color-functions.|
| [color-function-alias-notation](https://stylelint.io/user-guide/rules/color-function-alias-notation) | Specify alias notation for color-functions.|
| [class-pattern](https://html-validate.org/rules/class-pattern.html) | Require a specific class format|
| [block-no-redundant-nested-style-rules](https://stylelint.io/user-guide/rules/block-no-redundant-nested-style-rules) | Disallow redundant nested style rules within blocks.|
| [block-no-empty](https://stylelint.io/user-guide/rules/block-no-empty) | Disallow empty blocks.|
| [at-rule-property-required-list](https://stylelint.io/user-guide/rules/at-rule-property-required-list) | Specify a list of required properties (or descriptors) for an at-rule.|
| [at-rule-prelude-no-invalid](https://stylelint.io/user-guide/rules/at-rule-prelude-no-invalid) | Disallow invalid preludes for at-rules.|
| [at-rule-no-vendor-prefix](https://stylelint.io/user-guide/rules/at-rule-no-vendor-prefix) | Disallow vendor prefixes for at-rules.|
| [at-rule-no-unknown](https://stylelint.io/user-guide/rules/at-rule-no-unknown) | Disallow unknown at-rules.|
| [at-rule-no-deprecated](https://stylelint.io/user-guide/rules/at-rule-no-deprecated) | Disallow deprecated at-rules.|
| [at-rule-empty-line-before](https://stylelint.io/user-guide/rules/at-rule-empty-line-before) | Require or disallow an empty line before at-rules.|
| [at-rule-disallowed-list](https://stylelint.io/user-guide/rules/at-rule-disallowed-list) | Specify a list of disallowed at-rules.|
| [at-rule-descriptor-value-no-unknown](https://stylelint.io/user-guide/rules/at-rule-descriptor-value-no-unknown) | Disallow unknown values for descriptors within at-rules.|
| [at-rule-descriptor-no-unknown](https://stylelint.io/user-guide/rules/at-rule-descriptor-no-unknown) | Disallow unknown at-rule descriptors.|
| [at-rule-allowed-list](https://stylelint.io/user-guide/rules/at-rule-allowed-list) | Specify a list of allowed at-rules.|
| [annotation-no-unknown](https://stylelint.io/user-guide/rules/annotation-no-unknown) | Disallow unknown annotations.|
| [alpha-value-notation](https://stylelint.io/user-guide/rules/alpha-value-notation) | Specify percentage or number notation for alpha-values.|


## HTML

| Name                                                                | Description                                                                                          |
|:--------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------|
| [attr-delimiter](https://html-validate.org//rules/attr-delimiter.html) | Disallow whitespace between attribute key and value|
| [attr-spacing](https://html-validate.org//rules/attr-spacing.html) | Require attributes to be separated by whitespace|
| [close-attr](https://html-validate.org//rules/close-attr.html) | Disallow end tags from having attributes|
| [close-order](https://html-validate.org//rules/close-order.html) | Require elements to be closed in correct order|
| [element-name](https://html-validate.org//rules/element-name.html) | Disallow invalid element names|
| [form-dup-name](https://html-validate.org//rules/form-dup-name.html) | Require form controls to have a unique name|
| [map-dup-name](https://html-validate.org//rules/map-dup-name.html) | Require `map name` to be unique|
| [map-id-name](https://html-validate.org//rules/map-id-name.html) | Require name and id to match on map elements|
| [no-dup-attr](https://html-validate.org//rules/no-dup-attr.html) | Disallow duplicated attributes|
| [no-dup-class](https://html-validate.org//rules/no-dup-class.html) | Disallow duplicated classes|
| [no-raw-characters](https://html-validate.org//rules/no-raw-characters.html) | Disallow the use of unescaped special characters|
| [no-redundant-for](https://html-validate.org//rules/no-redundant-for.html) | Disallow usage of redundant label for attributes|
| [script-type](https://html-validate.org//rules/script-type.html) | Require valid type for `script` element|
| [unrecognized-char-ref](https://html-validate.org//rules/unrecognized-char-ref.html) | Disallow unrecognized character references|
| [valid-autocomplete](https://html-validate.org//rules/valid-autocomplete.html) | Require autocomplete attribute to be valid|
| [valid-id](https://html-validate.org//rules/valid-id.html) | Require `id` to be a valid identifier|
| [attribute-allowed-values](https://html-validate.org//rules/attribute-allowed-values.html) | Validate permitted attribute values|
| [attribute-misuse](https://html-validate.org//rules/attribute-misuse.html) | Require attribute to be used in correct context|
| [element-permitted-content](https://html-validate.org//rules/element-permitted-content.html) | Validate permitted content|
| [element-permitted-occurrences](https://html-validate.org//rules/element-permitted-occurrences.html) | Validate permitted number of element occurrences|
| [element-permitted-order](https://html-validate.org//rules/element-permitted-order.html) | Validate required element order|
| [element-permitted-parent](https://html-validate.org//rules/element-permitted-parent.html) | Validate permitted element parent|
| [element-required-ancestor](https://html-validate.org//rules/element-required-ancestor.html) | Validate required element ancestors|
| [element-required-attributes](https://html-validate.org//rules/element-required-attributes.html) | Ensure required attributes are set|
| [element-required-content](https://html-validate.org//rules/element-required-content.html) | Ensure required elements are present|
| [input-attributes](https://html-validate.org//rules/input-attributes.html) | Validates usage of input attributes|
| [no-multiple-main](https://html-validate.org//rules/no-multiple-main.html) | Disallow multiple `main`|
| [script-element](https://html-validate.org//rules/script-element.html) | Require end tag for `script`|
| [void-content](https://html-validate.org//rules/void-content.html) | Disallow void element with content|
| [deprecated](https://html-validate.org//rules/deprecated.html) | Disallow usage of deprecated elements|
| [deprecated-rule](https://html-validate.org//rules/deprecated-rule.html) | Disallow usage of deprecated rules|
| [no-conditional-comment](https://html-validate.org//rules/no-conditional-comment.html) | Disallow usage of conditional comments|
| [no-deprecated-attr](https://html-validate.org//rules/no-deprecated-attr.html) | Disallow usage of deprecated attributes|
| [area-alt](https://html-validate.org//rules/area-alt.html) | Require alternative text on `area` elements|
| [aria-hidden-body](https://html-validate.org//rules/aria-hidden-body.html) | disallow `aria-hidden` from being set on `body`|
| [aria-label-misuse](https://html-validate.org//rules/aria-label-misuse.html) | Disallow `aria-label` misuse|
| [empty-heading](https://html-validate.org//rules/empty-heading.html) | Require headings to have textual content|
| [empty-title](https://html-validate.org//rules/empty-title.html) | Require title to have textual content|
| [hidden-focusable](https://html-validate.org//rules/hidden-focusable.html) | Disallows `aria-hidden` on focusable elements|
| [input-missing-label](https://html-validate.org//rules/input-missing-label.html) | Require input to have label|
| [meta-refresh](https://html-validate.org//rules/meta-refresh.html) | Require meta refresh to have 0 second delay|
| [multiple-labeled-controls](https://html-validate.org//rules/multiple-labeled-controls.html) | Disallow labels associated with multiple controls|
| [no-abstract-role](https://html-validate.org//rules/no-abstract-role.html) | Disallow usage of abstract WAI-ARIA roles|
| [no-autoplay](https://html-validate.org//rules/no-autoplay.html) | Disallow autoplaying media elements|
| [no-implicit-button-type](https://html-validate.org//rules/no-implicit-button-type.html) | Disallow implicit button type|
| [no-redundant-aria-label](https://html-validate.org//rules/no-redundant-aria-label.html) | Disallow aria-label and label with same text content|
| [no-redundant-role](https://html-validate.org//rules/no-redundant-role.html) | Disallow usage of redundant roles|
| [prefer-native-element](https://html-validate.org//rules/prefer-native-element.html) | Prefer to use native HTML element over roles|
| [svg-focusable](https://html-validate.org//rules/svg-focusable.html) | Require svg to have focusable attribute|
| [tel-non-breaking](https://html-validate.org//rules/tel-non-breaking.html) | Require non-breaking characters in telephone numbers|
| [text-content](https://html-validate.org//rules/text-content.html) | Require elements to have valid text content|
| [unique-landmark](https://html-validate.org//rules/unique-landmark.html) | Requires landmarks to have unique names|
| [wcag-h30](https://html-validate.org//rules/wcag/h30.html) | WCAG H30: Providing link text|
| [wcag-h32](https://html-validate.org//rules/wcag/h32.html) | WCAG H32: Providing submit buttons|
| [wcag-h36](https://html-validate.org//rules/wcag/h36.html) | WCAG H36: Require alt text on images used as submit buttons|
| [wcag-h37](https://html-validate.org//rules/wcag/h37.html) | WCAG H37: Using alt attributes on img elements|
| [wcag-h63](https://html-validate.org//rules/wcag/h63.html) | WCAG H63: Using the scope attribute to associate header cells and data cells|
| [wcag-h67](https://html-validate.org//rules/wcag/h67.html) | WCAG H67: Using null alt text and no title attribute on img elements|
| [wcag-h71](https://html-validate.org//rules/wcag/h71.html) | WCAG H71: Providing a description for groups of form controls|
| [require-csp-nonce](https://html-validate.org//rules/require-csp-nonce.html) | Require CSP nonce for resources|
| [require-sri](https://html-validate.org//rules/require-sri.html) | Require SRI for resources|
| [long-title](https://html-validate.org//rules/long-title.html) | Require title not to have too long text|
| [attr-case](https://html-validate.org//rules/attr-case.html) | Require a specific case for attribute names|
| [attr-pattern](https://html-validate.org//rules/attr-pattern.html) | Require attributes to match configured patterns|
| [attr-quotes](https://html-validate.org//rules/attr-quotes.html) | Require attribute quoting|
| [attribute-boolean-style](https://html-validate.org//rules/attribute-boolean-style.html) | Require a specific style for boolean attributes|
| [attribute-empty-style](https://html-validate.org//rules/attribute-empty-style.html) | Require a specific style for empty attributes|
| [doctype-style](https://html-validate.org//rules/doctype-style.html) | Require a specific case for DOCTYPE|
| [element-case](https://html-validate.org//rules/element-case.html) | Require a specific case for element names|
| [name-pattern](https://html-validate.org//rules/name-pattern.html) | Require form control names to match a specific pattern|
| [no-implicit-close](https://html-validate.org//rules/no-implicit-close.html) | Require elements with optional end tags to be explicitly closed|
| [no-implicit-input-type](https://html-validate.org//rules/no-implicit-input-type.html) | Disallow implicit input type|
| [no-self-closing](https://html-validate.org//rules/no-self-closing.html) | Disallow self-closing elements|
| [no-trailing-whitespace](https://html-validate.org//rules/no-trailing-whitespace.html) | Disallow trailing whitespace|
| [prefer-button](https://html-validate.org//rules/prefer-button.html) | Prefer to use button instead of input for buttons|
| [prefer-tbody](https://html-validate.org//rules/prefer-tbody.html) | Prefer to wrap tr inside tbody|
| [void-style](https://html-validate.org//rules/void-style.html) | Require a specific style for closing void elements|
| [allowed-links](https://html-validate.org//rules/allowed-links.html) | Disallow link types|
| [doctype-html](https://html-validate.org//rules/doctype-html.html) | Require usage of "html" doctype|
| [heading-level](https://html-validate.org//rules/heading-level.html) | Require headings to start at h1 and increment by one|
| [missing-doctype](https://html-validate.org//rules/missing-doctype.html) | Require document to have a doctype|
| [no-dup-id](https://html-validate.org//rules/no-dup-id.html) | Disallow duplicated IDs|
| [no-missing-references](https://html-validate.org//rules/no-missing-references.html) | Require all element references to exist|
| [no-utf8-bom](https://html-validate.org//rules/no-utf8-bom.html) | Disallow documents from having UTF-8 BOM|
| [no-unknown-elements](https://html-validate.org//rules/no-unknown-elements.html) | Disallow usage of unknown elements|
| [no-unused-disable](https://html-validate.org//rules/no-unused-disable.html) | Disallow unused disable directives|


## Performance

| Name                                                                                                                                                                            | Description                                                                                          |
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------|
| [viewport-insight](https://developer.chrome.com/blog/300ms-tap-delay-gone-away/)                                                                                                | Optimize viewport for mobile|
| [uses-passive-event-listeners](https://developer.chrome.com/docs/lighthouse/best-practices/uses-passive-event-listeners/)                                                       | Uses passive listeners to improve scrolling performance|
| [uses-long-cache-ttl](https://developer.chrome.com/docs/lighthouse/performance/uses-long-cache-ttl/)                                                                            | Uses efficient cache policy on static assets|
| [user-timings](https://developer.chrome.com/docs/lighthouse/performance/user-timings/)                                                                                          | User Timing marks and measures|
| [unused-javascript](https://developer.chrome.com/docs/lighthouse/performance/unused-javascript/)                                                                                | Reduce unused JavaScript|
| [unused-css-rules](https://developer.chrome.com/docs/lighthouse/performance/unused-css-rules/)                                                                                  | Reduce unused CSS|
| [unminified-javascript](https://developer.chrome.com/docs/lighthouse/performance/unminified-javascript/)                                                                        | Minify JavaScript|
| [unminified-css](https://developer.chrome.com/docs/lighthouse/performance/unminified-css/)                                                                                      | Minify CSS|
| [total-byte-weight](https://developer.chrome.com/docs/lighthouse/performance/total-byte-weight/)                                                                                | Avoids enormous network payloads|
| [total-blocking-time](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-total-blocking-time/)                                                                 | Total blocking time|
| [third-party-facades](https://developer.chrome.com/docs/lighthouse/performance/third-party-facades/)                                                                            | Lazy load third-party resources with facades|
| [third-parties-insight](https://web.dev/articles/optimizing-content-efficiency-loading-third-party-javascript/)                                                                 | 3rd parties|
| [speed-index](https://developer.chrome.com/docs/lighthouse/performance/speed-index/)                                                                                            | Speed index|
| script-treemap-data                                                                                                                                                             | Script Treemap Data|
| resource-summary                                                                                                                                                                | Aggregates all network requests and groups them by type|
| [render-blocking-insight](https://web.dev/learn/performance/understanding-the-critical-path#render-blocking_resources)                                                          | Render blocking requests|
| [offscreen-images](https://developer.chrome.com/docs/lighthouse/performance/offscreen-images/)                                                                                  | Defer offscreen images|
| [no-document-write](https://developer.chrome.com/docs/lighthouse/best-practices/no-document-write/)                                                                             | Avoids `document.write()`|
| [network-server-latency](https://hpbn.co/primer-on-web-performance/#analyzing-the-resource-waterfall)                                                                           | Server Backend Latencies|
| [network-rtt](https://hpbn.co/primer-on-latency-and-bandwidth/)                                                                                                                 | Network Round Trip Times|
| network-requests                                                                                                                                                                | Network Requests|
| [network-dependency-tree-insight](https://developer.chrome.com/docs/lighthouse/performance/critical-request-chains)                                                             | Network dependency tree|
| [modern-http-insight](https://developer.chrome.com/docs/lighthouse/best-practices/uses-http2/)                                                                                  | Modern HTTP|
| metrics                                                                                                                                                                         | Collects all available metrics.|
| [max-potential-fid](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-max-potential-fid/)                                                                     | Max Potential First Input Delay|
| [mainthread-work-breakdown](https://developer.chrome.com/docs/lighthouse/performance/mainthread-work-breakdown/)                                                                | Minimizes main-thread work|
| main-thread-tasks                                                                                                                                                               | Lists the toplevel main thread tasks that executed during page load.|
| [long-tasks](https://web.dev/articles/optimize-long-tasks)                                                                                                                      | Avoid long main-thread tasks|
| [legacy-javascript-insight](https://web.dev/articles/baseline-and-polyfills)                                                                                                    | Legacy JavaScript|
| [lcp-discovery-insight](https://web.dev/articles/optimize-lcp#1_eliminate_resource_load_delay)                                                                                  | LCP request discovery|
| [lcp-breakdown-insight](https://web.dev/articles/optimize-lcp#lcp-breakdown)                                                                                                    | LCP breakdown|
| [largest-contentful-paint](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint/)                                                       | Largest Content Paint|
| [largest-contentful-paint-element](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint/)                                               | Largest Contentful Paint element|
| [interactive](https://developer.chrome.com/docs/lighthouse/performance/interactive/)                                                                                            | Time to Interactive|
| [inp-breakdown-insight](https://web.dev/articles/optimize-inp#optimize_interactions)                                                                                            | INP breakdown|
| [image-delivery-insight](https://developer.chrome.com/docs/lighthouse/performance/uses-optimized-images/)                                                                       | Improve image delivery|
| [forced-reflow-insight](https://developers.google.com/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing#avoid-forced-synchronous-layouts) | Forced reflow|
| [font-display-insight](https://developer.chrome.com/blog/font-display)                                                                                                          | First display|
| [first-meaningful-paint](https://developer.chrome.com/docs/lighthouse/performance/first-meaningful-paint/)                                                                      | First Meaningful Paint|
| [first-contentful-paint](https://developer.chrome.com/docs/lighthouse/performance/first-contentful-paint/)                                                                      | First contentful paint|
| duplicated-javascript-insight                                                                                                                                                   | Duplicated javascript code|
| [dom-size-insight](https://developer.chrome.com/docs/lighthouse/performance/dom-size/)                                                                                          | Optimize DOM size.|
| [document-latency-insight](https://developer.chrome.com/docs/performance/insights/document-latency)                                                                             | Your first network request is the most important.  Reduce its latency by avoiding redirects, ensuring a fast server response, and enabling text compression.|
| diagnostics                                                                                                                                                                     | Collection of useful page vitals.|
| [cumulative-layout-shift](https://web.dev/articles/cls)                                                                                                                         | Cumulative layout shift|
| [cls-culprits-insight](https://web.dev/articles/optimize-cls)                                                                                                                   | Layout shifts occur when elements move absent any user interaction. [Investigate the causes of layout shifts]|
| [cache-insight](https://web.dev/uses-long-cache-ttl/)                                                                                                                           | A long cache lifetime can speed up repeat visits to your page.|
| [bootup-time](https://developer.chrome.com/docs/lighthouse/performance/bootup-time/)                                                                                            | JavaScript execution time|
| [bf-cache](https://developer.chrome.com/docs/lighthouse/performance/bf-cache/)                                                                                                  | Page didnt prevent back/forward cache restoration|

## Security

### JavaScript

| Name                                                                                                                                                             | Description                                                                                                                   | ⚠️  |
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------| :-- |
| [detect-bidi-characters](https://github.com/eslint-community/eslint-plugin-security/tree/main/docs/rules/detect-bidi-characters.md)                              | Detects trojan source attacks that employ unicode bidi attacks to inject malicious code.                                      | ✅  |
| [detect-buffer-noassert](https://github.com/eslint-community/eslint-plugin-security/tree/main/docs/rules/detect-buffer-noassert.md)                              | Detects calls to "buffer" with "noAssert" flag set.                                                                           | ✅  |
| [detect-child-process](https://github.com/eslint-community/eslint-plugin-security/tree/main/docs/rules/detect-child-process.md)                                  | Detects instances of "child_process" & non-literal "exec()" calls.                                                            | ✅  |
| [detect-disable-mustache-escape](https://github.com/eslint-community/eslint-plugin-security/tree/main/docs/rules/detect-disable-mustache-escape.md)              | Detects "object.escapeMarkup = false", which can be used with some template engines to disable escaping of HTML entities.     | ✅  |
| [detect-eval-with-expression](https://github.com/eslint-community/eslint-plugin-security/tree/main/docs/rules/detect-eval-with-expression.md)                    | Detects "eval(variable)" which can allow an attacker to run arbitrary code inside your process.                               | ✅  |
| [detect-new-buffer](https://github.com/eslint-community/eslint-plugin-security/tree/main/docs/rules/detect-new-buffer.md)                                        | Detects instances of new Buffer(argument) where argument is any non-literal value.                                            | ✅  |
| [detect-no-csrf-before-method-override](https://github.com/eslint-community/eslint-plugin-security/tree/main/docs/rules/detect-no-csrf-before-method-override.md) | Detects Express "csrf" middleware setup before "method-override" middleware.                                                  | ✅  |
| [detect-non-literal-fs-filename](https://github.com/eslint-community/eslint-plugin-security/tree/main/docs/rules/detect-non-literal-fs-filename.md)              | Detects variable in filename argument of "fs" calls, which might allow an attacker to access anything on your system.         | ✅  |
| [detect-non-literal-regexp](https://github.com/eslint-community/eslint-plugin-security/tree/main/docs/rules/detect-non-literal-regexp.md)                        | Detects "RegExp(variable)", which might allow an attacker to DOS your server with a long-running regular expression.          | ✅  |
| [detect-non-literal-require](https://github.com/eslint-community/eslint-plugin-security/tree/main/docs/rules/detect-non-literal-require.md)                      | Detects "require(variable)", which might allow an attacker to load and run arbitrary code, or access arbitrary files on disk. | ✅  |
| [detect-object-injection](https://github.com/eslint-community/eslint-plugin-security/tree/main/docs/rules/detect-object-injection.md)                            | Detects "variable[key]" as a left- or right-hand assignment operand.                                                          | ✅  |
| [detect-possible-timing-attacks](https://github.com/eslint-community/eslint-plugin-security/tree/main/docs/rules/detect-possible-timing-attacks.md)              | Detects insecure comparisons (`==`, `!=`, `!==` and `===`), which check input sequentially.                                   | ✅  |
| [detect-pseudoRandomBytes](https://github.com/eslint-community/eslint-plugin-security/tree/main/docs/rules/detect-pseudoRandomBytes.md)                          | Detects if "pseudoRandomBytes()" is in use, which might not give you the randomness you need and expect.                      | ✅  |
| [detect-unsafe-regex](https://github.com/eslint-community/eslint-plugin-security/tree/main/docs/rules/detect-unsafe-regex.md)                                    | Detects potentially unsafe regular expressions, which may take a very long time to run, blocking the event loop.              | ✅  |

### HTML

| Name                                                                        | Description                     | ⚠️ |
|:----------------------------------------------------------------------------|:--------------------------------|:---|
| [require-csp-nonce](https://html-validate.org/rules/require-csp-nonce.html) | Require CSP nonce for resources | ✅  |
| [require-sri](https://html-validate.org/rules/require-sri.html)	            | Require SRI for resources       | ✅  |

## SEO


| Name                                                                                             | Description                                          |
|:-------------------------------------------------------------------------------------------------|:-----------------------------------------------------|
| [canonical-not-localhost](https://developer.chrome.com/docs/lighthouse/seo/canonical)            | Canonical must be not localhost                      |
| [canonical](https://developer.chrome.com/docs/lighthouse/seo/canonical)                          | Canonical should be present                          |
| [meta-description](https://developer.chrome.com/docs/lighthouse/seo/meta-description/)           | Document does not have a meta description            |
| [empty-title](https://html-validate.org//rules/empty-title.html)                                 | Require title to have textual content                |
| [header-not-empty]()                                                                             | H1 should be not empty                               |
| [header-only-one]()                                                                              | Only one H1 tag per page                             |
| [header-present]()                                                                               | H1 tag is present                                    |
| [heading-level](https://html-validate.org/rules/heading-level.html)                              | Require headings to start at h1 and increment by one |
| [hreflang](https://developer.chrome.com/docs/lighthouse/seo/hreflang/)                           | Document has a valid `hreflang                       |
| [image-alt](https://dequeuniversity.com/rules/axe/4.10/image-alt)                                | Image elements have `[alt]` attributes               |
| [is-crawlable](https://developer.chrome.com/docs/lighthouse/seo/is-crawlable/)                   | Page isn’t blocked from indexing                     |
| [link-text](https://developer.chrome.com/docs/lighthouse/seo/link-text/)                         | Links have descriptive text                          |
| [meta-og-present](https://ogp.me/)                                                               | OG tags are present                                  |
| [structured-data-present](https://developer.chrome.com/docs/lighthouse/seo/structured-data/)     | Structured data is present                           |
| [structured-data-valid](https://developers.google.com/search/docs/appearance/structured-data)    | Structured data is valid                             |
| [document-title-length](https://www.w3.org/Provider/Style/TITLE.html)                            | Title tag has correct length                         |
| [document-title](https://www.w3.org/Provider/Style/TITLE.html)                                   | Title tag is present                                 |
| [meta-twitter-rule](https://developer.x.com/en/docs/x-for-websites/cards/guides/getting-started) | Twitter tags are present                             |
| [robots-txt](https://developer.chrome.com/docs/lighthouse/seo/invalid-robots-txt/)               | robots.txt is valid                                  |
| [crawlable-anchors](https://support.google.com/webmasters/answer/9112205)                        | Links are crawlable                                  |
| [http-status-code](https://developer.chrome.com/docs/lighthouse/seo/http-status-code/)           | Page has successful HTTP status code                 |

## JavaScript


| Name                                                                | Description                                                                                          | 
|:--------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------|
| [indent](http://eslint.org/docs/rules/indent) | Use 2 spaces
| [quotes](http://eslint.org/docs/rules/quotes) | Use single quotes for strings
| [no-unused-vars](http://eslint.org/docs/rules/no-unused-vars) | No unused variables.
| [keyword-spacing](http://eslint.org/docs/rules/keyword-spacing) | Add a space after keywords.
| [space-before-function-paren](http://eslint.org/docs/rules/space-before-function-paren) | Add a space before a function declaration's parentheses.
| [eqeqeq](http://eslint.org/docs/rules/eqeqeq) | Always use
| [space-infix-ops](http://eslint.org/docs/rules/space-infix-ops) | Infix operators
| [comma-spacing](http://eslint.org/docs/rules/comma-spacing) | Commas should have a space
| [brace-style](http://eslint.org/docs/rules/brace-style) | Keep else statements
| [curly](http://eslint.org/docs/rules/curly) | For multi-line if statements,
| [handle-callback-err](http://eslint.org/docs/rules/handle-callback-err) | Always handle the
| [no-undef](http://eslint.org/docs/rules/no-undef) | Declare browser globals
| [no-multiple-empty-lines](http://eslint.org/docs/rules/no-multiple-empty-lines) | Multiple blank lines not allowed.
| [operator-linebreak](http://eslint.org/docs/rules/operator-linebreak) | For the ternary operator
| [one-var](http://eslint.org/docs/rules/one-var) | For var declarations,
| [no-cond-assign](http://eslint.org/docs/rules/no-cond-assign) | Wrap conditional assignments
| [block-spacing](http://eslint.org/docs/rules/block-spacing) | Add spaces inside single line blocks.
| [camelcase](http://eslint.org/docs/rules/camelcase) | Use camelcase when naming variables and functions.
| [comma-dangle](http://eslint.org/docs/rules/comma-dangle) | Trailing commas not allowed.
| [comma-style](http://eslint.org/docs/rules/comma-style) | Commas must be placed at the end of the current line.
| [dot-location](http://eslint.org/docs/rules/dot-location) | Dot should be on the same line as property.
| [eol-last](http://eslint.org/docs/rules/eol-last) | Files must end with a newline.
| [func-call-spacing](http://eslint.org/docs/rules/func-call-spacing) | No space between function identifiers and their invocations.
| [key-spacing](http://eslint.org/docs/rules/key-spacing) | Add space between colon and value in key value pairs.
| [new-cap](http://eslint.org/docs/rules/new-cap) | Constructor names must begin with a capital letter.
| [new-parens](http://eslint.org/docs/rules/new-parens) | Constructor with no arguments must be invoked with parentheses.
| [accessor-pairs](http://eslint.org/docs/rules/accessor-pairs) | Objects must contain a getter when a setter is defined.
| [constructor-super](http://eslint.org/docs/rules/constructor-super) | Constructors of derived classes must call super.
| [no-array-constructor](http://eslint.org/docs/rules/no-array-constructor) | Use array literals instead of array constructors.
| [no-caller](http://eslint.org/docs/rules/no-caller) | Avoid using arguments.callee and arguments.caller.
| [no-class-assign](http://eslint.org/docs/rules/no-class-assign) | Avoid modifying variables of class declarations.
| [no-const-assign](http://eslint.org/docs/rules/no-const-assign) | Avoid modifying variables declared using const.
| [no-constant-condition](http://eslint.org/docs/rules/no-constant-condition) | Avoid using constant expressions in conditions (except loops).
| [no-control-regex](http://eslint.org/docs/rules/no-control-regex) | No control characters in regular expressions.
| [no-debugger](http://eslint.org/docs/rules/no-debugger) | No debugger statements.
| [no-delete-var](http://eslint.org/docs/rules/no-delete-var) | No delete operator on variables.
| [no-dupe-args](http://eslint.org/docs/rules/no-dupe-args) | No duplicate arguments in function definitions.
| [no-dupe-class-members](http://eslint.org/docs/rules/no-dupe-class-members) | No duplicate name in class members.
| [no-dupe-keys](http://eslint.org/docs/rules/no-dupe-keys) | No duplicate keys in object literals.
| [no-duplicate-case](http://eslint.org/docs/rules/no-duplicate-case) | No duplicate case labels in switch statements.
| [no-duplicate-imports](http://eslint.org/docs/rules/no-duplicate-imports) | Use a single import statement per module.
| [no-empty-character-class](http://eslint.org/docs/rules/no-empty-character-class) | No empty character classes in regular expressions.
| [no-empty-pattern](http://eslint.org/docs/rules/no-empty-pattern) | No empty destructuring patterns.
| [no-eval](http://eslint.org/docs/rules/no-eval) | No using eval().
| [no-ex-assign](http://eslint.org/docs/rules/no-ex-assign) | No reassigning exceptions in catch clauses.
| [no-extend-native](http://eslint.org/docs/rules/no-extend-native) | No extending native objects.
| [no-extra-bind](http://eslint.org/docs/rules/no-extra-bind) | Avoid unnecessary function binding.
| [no-extra-boolean-cast](http://eslint.org/docs/rules/no-extra-boolean-cast) | Avoid unnecessary boolean casts.
| [no-extra-parens](http://eslint.org/docs/rules/no-extra-parens) | No unnecessary parentheses around function expressions.
| [no-fallthrough](http://eslint.org/docs/rules/no-fallthrough) | Use break to prevent fallthrough in switch cases.
| [no-floating-decimal](http://eslint.org/docs/rules/no-floating-decimal) | No floating decimals.
| [no-func-assign](http://eslint.org/docs/rules/no-func-assign) | Avoid reassigning function declarations.
| [no-global-assign](http://eslint.org/docs/rules/no-global-assign) | No reassigning read-only global variables.
| [no-implied-eval](http://eslint.org/docs/rules/no-implied-eval) | No implied eval().
| [no-inner-declarations](http://eslint.org/docs/rules/no-inner-declarations) | No function declarations in nested blocks.
| [no-invalid-regexp](http://eslint.org/docs/rules/no-invalid-regexp) | No invalid regular expression strings in  RegExp constructors.
| [no-irregular-whitespace](http://eslint.org/docs/rules/no-irregular-whitespace) | No irregular whitespace.
| [no-iterator](http://eslint.org/docs/rules/no-iterator) | No using __iterator__.
| [no-label-var](http://eslint.org/docs/rules/no-label-var) | No labels that share a name with an in scope variable.
| [no-labels](http://eslint.org/docs/rules/no-labels) | No label statements.
| [no-lone-blocks](http://eslint.org/docs/rules/no-lone-blocks) | No unnecessary nested blocks.
| [no-mixed-spaces-and-tabs](http://eslint.org/docs/rules/no-mixed-spaces-and-tabs) | Avoid mixing spaces and tabs for indentation.
| [no-multi-spaces](http://eslint.org/docs/rules/no-multi-spaces) | Do not use multiple spaces except for indentation.
| [no-multi-str](http://eslint.org/docs/rules/no-multi-str) | No multiline strings.
| [no-new](http://eslint.org/docs/rules/no-new) | No new without assigning object to a variable.
| [no-new-func](http://eslint.org/docs/rules/no-new-func) | No using the Function constructor.
| [no-new-object](http://eslint.org/docs/rules/no-new-object) | No using the Object constructor.
| [no-new-require](http://eslint.org/docs/rules/no-new-require) | No using new require.
| [no-new-symbol](http://eslint.org/docs/rules/no-new-symbol) | No using the Symbol constructor.
| [no-new-wrappers](http://eslint.org/docs/rules/no-new-wrappers) | No using primitive wrapper instances.
| [no-obj-calls](http://eslint.org/docs/rules/no-obj-calls) | No calling global object properties as functions.
| [no-octal](http://eslint.org/docs/rules/no-octal) | No octal literals.
| [no-octal-escape](http://eslint.org/docs/rules/no-octal-escape) | No octal escape sequences in string literals.
| [no-path-concat](http://eslint.org/docs/rules/no-path-concat) | Avoid string concatenation when using __dirname and __filename.
| [no-proto](http://eslint.org/docs/rules/no-proto) | Avoid using __proto__.
| [no-redeclare](http://eslint.org/docs/rules/no-redeclare) | No redeclaring variables.
| [no-regex-spaces](http://eslint.org/docs/rules/no-regex-spaces) | Avoid multiple spaces in regular expression literals.
| [no-return-assign](http://eslint.org/docs/rules/no-return-assign) | Assignments in return statements must be surrounded by parentheses.
| [no-self-assign](http://eslint.org/docs/rules/no-self-assign) | Avoid assigning a variable to itself
| [no-self-compare](http://eslint.org/docs/rules/no-self-compare) | Avoid comparing a variable to itself.
| [no-sequences](http://eslint.org/docs/rules/no-sequences) | Avoid using the comma operator.
| [no-shadow-restricted-names](http://eslint.org/docs/rules/no-shadow-restricted-names) | Restricted names should not be shadowed.
| [no-sparse-arrays](http://eslint.org/docs/rules/no-sparse-arrays) | Sparse arrays are not allowed.
| [no-tabs](http://eslint.org/docs/rules/no-tabs) | Tabs should not be used
| [no-template-curly-in-string](http://eslint.org/docs/rules/no-template-curly-in-string) | Regular strings must not contain template literal placeholders.
| [no-this-before-super](http://eslint.org/docs/rules/no-this-before-super) | super() must be called before using this.
| [no-throw-literal](http://eslint.org/docs/rules/no-throw-literal) | Only throw an Error object.
| [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces) | Whitespace not allowed at end of line.
| [no-undef-init](http://eslint.org/docs/rules/no-undef-init) | Initializing to undefined is not allowed.
| [no-unmodified-loop-condition](http://eslint.org/docs/rules/no-unmodified-loop-condition) | No unmodified conditions of loops.
| [no-unneeded-ternary](http://eslint.org/docs/rules/no-unneeded-ternary) | No ternary operators when simpler alternatives exist.
| [no-unreachable](http://eslint.org/docs/rules/no-unreachable) | No unreachable code after return, throw, continue, and break statements.
| [no-unsafe-finally](http://eslint.org/docs/rules/no-unsafe-finally) | No flow control statements in finally blocks.
| [no-unsafe-negation](http://eslint.org/docs/rules/no-unsafe-negation) | The left operand of relational operators must not be negated.
| [no-useless-call](http://eslint.org/docs/rules/no-useless-call) | Avoid unnecessary use of .call() and .apply().
| [no-useless-computed-key](http://eslint.org/docs/rules/no-useless-computed-key) | Avoid using unnecessary computed property keys on objects.
| [no-useless-constructor](http://eslint.org/docs/rules/no-useless-constructor) | No unnecessary constructor.
| [no-useless-escape](http://eslint.org/docs/rules/no-useless-escape) | No unnecessary use of escape.
| [no-useless-rename](http://eslint.org/docs/rules/no-useless-rename) | Renaming import, export, and destructured assignments to the same name is not allowed.
| [no-whitespace-before-property](http://eslint.org/docs/rules/no-whitespace-before-property) | No whitespace before properties.
| [no-with](http://eslint.org/docs/rules/no-with) | No using with statements.
| [object-property-newline](http://eslint.org/docs/rules/object-property-newline) | Maintain consistency of newlines between object properties.
| [padded-blocks](http://eslint.org/docs/rules/padded-blocks) | No padding within blocks.
| [rest-spread-spacing](http://eslint.org/docs/rules/rest-spread-spacing) | No whitespace between spread operators and their expressions.
| [semi-spacing](http://eslint.org/docs/rules/semi-spacing) | Semicolons must have a space after and no space before.
| [space-before-blocks](http://eslint.org/docs/rules/space-before-blocks) | Must have a space before blocks.
| [space-in-parens](http://eslint.org/docs/rules/space-in-parens) | No spaces inside parentheses.
| [space-unary-ops](http://eslint.org/docs/rules/space-unary-ops) | Unary operators must have a space after.
| [spaced-comment](http://eslint.org/docs/rules/spaced-comment) | Use spaces inside comments.
| [template-curly-spacing](http://eslint.org/docs/rules/template-curly-spacing) | No spacing in template strings.
| [use-isnan](http://eslint.org/docs/rules/use-isnan) | Use isNaN() when checking for NaN.
| [valid-typeof](http://eslint.org/docs/rules/valid-typeof) | typeof must be compared to a valid string.
| [wrap-iife](http://eslint.org/docs/rules/wrap-iife) | Immediately Invoked Function Expressions (IIFEs) must be wrapped.
| [yield-star-spacing](http://eslint.org/docs/rules/yield-star-spacing) | The * in yield*expressions must have a space before and after.
| [yoda](http://eslint.org/docs/rules/yoda) | Avoid Yoda conditions.


## SonarJS

<!-- begin auto-generated rules list -->

💼 Configurations enabled in.\
✅ Set in the `recommended` configuration.\
🔧 Automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/user-guide/command-line-interface#--fix).\
💡 Manually fixable by [editor suggestions](https://eslint.org/docs/latest/use/core-concepts#rule-suggestions).\
💭 Requires [type information](https://typescript-eslint.io/linting/typed-linting).\
❌ Deprecated.

| Name                                                                                                 | Description                                                                                                                    | 💼  | 🔧  | 💡  | 💭  | ❌  |
| :--------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------- | :-- | :-- | :-- | :-- | :-- |
| [anchor-precedence](https://sonarsource.github.io/rspec/#/rspec/S5850/javascript)                    | Alternatives in regular expressions should be grouped when used with anchors                                                   | ✅  |     |     | 💭  |     |
| [argument-type](https://sonarsource.github.io/rspec/#/rspec/S3782/javascript)                        | Arguments to built-in functions should match documented types                                                                  | ✅  |     |     | 💭  |     |
| [arguments-order](https://sonarsource.github.io/rspec/#/rspec/S2234/javascript)                      | Parameters should be passed in the correct order                                                                               | ✅  |     |     | 💭  |     |
| [arguments-usage](https://sonarsource.github.io/rspec/#/rspec/S3513/javascript)                      | "arguments" should not be accessed directly                                                                                    |     |     |     |     |     |
| [array-callback-without-return](https://sonarsource.github.io/rspec/#/rspec/S3796/javascript)        | Callbacks of array methods should have return statements                                                                       | ✅  |     |     | 💭  |     |
| [array-constructor](https://sonarsource.github.io/rspec/#/rspec/S1528/javascript)                    | Array constructors should not be used                                                                                          |     |     | 💡  |     |     |
| [arrow-function-convention](https://sonarsource.github.io/rspec/#/rspec/S3524/javascript)            | Braces and parentheses should be used consistently with arrow functions                                                        |     |     |     |     |     |
| [assertions-in-tests](https://sonarsource.github.io/rspec/#/rspec/S2699/javascript)                  | Tests should include assertions                                                                                                | ✅  |     |     |     |     |
| [aws-apigateway-public-api](https://sonarsource.github.io/rspec/#/rspec/S6333/javascript)            | Creating public APIs is security-sensitive                                                                                     | ✅  |     |     |     |     |
| [aws-ec2-rds-dms-public](https://sonarsource.github.io/rspec/#/rspec/S6329/javascript)               | Allowing public network access to cloud resources is security-sensitive                                                        | ✅  |     |     |     |     |
| [aws-ec2-unencrypted-ebs-volume](https://sonarsource.github.io/rspec/#/rspec/S6275/javascript)       | Using unencrypted EBS volumes is security-sensitive                                                                            | ✅  |     |     |     |     |
| [aws-efs-unencrypted](https://sonarsource.github.io/rspec/#/rspec/S6332/javascript)                  | Using unencrypted EFS file systems is security-sensitive                                                                       | ✅  |     |     |     |     |
| [aws-iam-all-privileges](https://sonarsource.github.io/rspec/#/rspec/S6302/javascript)               | Policies granting all privileges are security-sensitive                                                                        | ✅  |     |     |     |     |
| [aws-iam-all-resources-accessible](https://sonarsource.github.io/rspec/#/rspec/S6304/javascript)     | Policies granting access to all resources of an account are security-sensitive                                                 |     |     |     |     |     |
| [aws-iam-privilege-escalation](https://sonarsource.github.io/rspec/#/rspec/S6317/javascript)         | AWS IAM policies should limit the scope of permissions given                                                                   | ✅  |     |     |     |     |
| [aws-iam-public-access](https://sonarsource.github.io/rspec/#/rspec/S6270/javascript)                | Policies authorizing public access to resources are security-sensitive                                                         | ✅  |     |     |     |     |
| [aws-opensearchservice-domain](https://sonarsource.github.io/rspec/#/rspec/S6308/javascript)         | Using unencrypted Elasticsearch domains is security-sensitive                                                                  | ✅  |     |     |     |     |
| [aws-rds-unencrypted-databases](https://sonarsource.github.io/rspec/#/rspec/S6303/javascript)        | Using unencrypted RDS DB resources is security-sensitive                                                                       | ✅  |     |     |     |     |
| [aws-restricted-ip-admin-access](https://sonarsource.github.io/rspec/#/rspec/S6321/javascript)       | Administration services access should be restricted to specific IP addresses                                                   | ✅  |     |     |     |     |
| [aws-s3-bucket-granted-access](https://sonarsource.github.io/rspec/#/rspec/S6265/javascript)         | Granting access to S3 buckets to all or authenticated users is security-sensitive                                              | ✅  |     |     |     |     |
| [aws-s3-bucket-insecure-http](https://sonarsource.github.io/rspec/#/rspec/S6249/javascript)          | Authorizing HTTP communications with S3 buckets is security-sensitive                                                          | ✅  |     |     |     |     |
| [aws-s3-bucket-public-access](https://sonarsource.github.io/rspec/#/rspec/S6281/javascript)          | Allowing public ACLs or policies on a S3 bucket is security-sensitive                                                          | ✅  |     |     |     |     |
| [aws-s3-bucket-server-encryption](https://sonarsource.github.io/rspec/#/rspec/S6245/javascript)      | Disabling server-side encryption of S3 buckets is security-sensitive                                                           |     |     |     |     | ❌  |
| [aws-s3-bucket-versioning](https://sonarsource.github.io/rspec/#/rspec/S6252/javascript)             | Disabling versioning of S3 buckets is security-sensitive                                                                       | ✅  |     |     |     |     |
| [aws-sagemaker-unencrypted-notebook](https://sonarsource.github.io/rspec/#/rspec/S6319/javascript)   | Using unencrypted SageMaker notebook instances is security-sensitive                                                           | ✅  |     |     |     |     |
| [aws-sns-unencrypted-topics](https://sonarsource.github.io/rspec/#/rspec/S6327/javascript)           | Using unencrypted SNS topics is security-sensitive                                                                             | ✅  |     |     |     |     |
| [aws-sqs-unencrypted-queue](https://sonarsource.github.io/rspec/#/rspec/S6330/javascript)            | Using unencrypted SQS queues is security-sensitive                                                                             | ✅  |     |     |     |     |
| [bitwise-operators](https://sonarsource.github.io/rspec/#/rspec/S1529/javascript)                    | Bitwise operators should not be used in boolean contexts                                                                       | ✅  |     |     |     |     |
| [block-scoped-var](https://sonarsource.github.io/rspec/#/rspec/S2392/javascript)                     | Variables should be used in the blocks where they are declared                                                                 | ✅  |     |     |     |     |
| [bool-param-default](https://sonarsource.github.io/rspec/#/rspec/S4798/javascript)                   | Optional boolean parameters should have default value                                                                          |     |     |     |     |     |
| [call-argument-line](https://sonarsource.github.io/rspec/#/rspec/S1472/javascript)                   | Function call arguments should not start on new lines                                                                          | ✅  |     |     |     |     |
| [certificate-transparency](https://sonarsource.github.io/rspec/#/rspec/S5742/javascript)             | Disabling Certificate Transparency monitoring is security-sensitive                                                            |     |     |     |     | ❌  |
| [chai-determinate-assertion](https://sonarsource.github.io/rspec/#/rspec/S6092/javascript)           | Chai assertions should have only one reason to succeed                                                                         | ✅  |     |     |     |     |
| [class-name](https://sonarsource.github.io/rspec/#/rspec/S101/javascript)                            | Class names should comply with a naming convention                                                                             | ✅  |     |     |     |     |
| [class-prototype](https://sonarsource.github.io/rspec/#/rspec/S3525/javascript)                      | Class methods should be used instead of "prototype" assignments                                                                |     |     |     | 💭  |     |
| [code-eval](https://sonarsource.github.io/rspec/#/rspec/S1523/javascript)                            | Dynamically executing code is security-sensitive                                                                               | ✅  |     |     |     |     |
| [cognitive-complexity](https://sonarsource.github.io/rspec/#/rspec/S3776/javascript)                 | Cognitive Complexity of functions should not be too high                                                                       | ✅  |     |     |     |     |
| [comma-or-logical-or-case](https://sonarsource.github.io/rspec/#/rspec/S3616/javascript)             | Comma and logical OR operators should not be used in switch cases                                                              | ✅  |     |     |     |     |
| [comment-regex](https://sonarsource.github.io/rspec/#/rspec/S124/javascript)                         | Track comments matching a regular expression                                                                                   |     |     |     |     |     |
| [concise-regex](https://sonarsource.github.io/rspec/#/rspec/S6353/javascript)                        | Regular expression quantifiers and character classes should be used concisely                                                  | ✅  |     |     | 💭  |     |
| [conditional-indentation](https://sonarsource.github.io/rspec/#/rspec/S3973/javascript)              | A conditionally executed single line should be denoted by indentation                                                          |     |     |     |     | ❌  |
| [confidential-information-logging](https://sonarsource.github.io/rspec/#/rspec/S5757/javascript)     | Allowing confidential information to be logged is security-sensitive                                                           | ✅  |     |     |     |     |
| [constructor-for-side-effects](https://sonarsource.github.io/rspec/#/rspec/S1848/javascript)         | Objects should not be created to be dropped immediately without being used                                                     | ✅  |     |     |     |     |
| [content-length](https://sonarsource.github.io/rspec/#/rspec/S5693/javascript)                       | Allowing requests with excessive content length is security-sensitive                                                          | ✅  |     |     |     |     |
| [content-security-policy](https://sonarsource.github.io/rspec/#/rspec/S5728/javascript)              | Disabling content security policy fetch directives is security-sensitive                                                       | ✅  |     |     |     |     |
| [cookie-no-httponly](https://sonarsource.github.io/rspec/#/rspec/S3330/javascript)                   | Creating cookies without the "HttpOnly" flag is security-sensitive                                                             | ✅  |     |     |     |     |
| [cookies](https://sonarsource.github.io/rspec/#/rspec/S2255/javascript)                              | Writing cookies is security-sensitive                                                                                          |     |     |     |     | ❌  |
| [cors](https://sonarsource.github.io/rspec/#/rspec/S5122/javascript)                                 | Having a permissive Cross-Origin Resource Sharing policy is security-sensitive                                                 | ✅  |     |     |     |     |
| [csrf](https://sonarsource.github.io/rspec/#/rspec/S4502/javascript)                                 | Disabling CSRF protections is security-sensitive                                                                               | ✅  |     |     |     |     |
| [cyclomatic-complexity](https://sonarsource.github.io/rspec/#/rspec/S1541/javascript)                | Cyclomatic Complexity of functions should not be too high                                                                      |     |     |     |     |     |
| [declarations-in-global-scope](https://sonarsource.github.io/rspec/#/rspec/S3798/javascript)         | Variables and functions should not be declared in the global scope                                                             |     |     |     |     |     |
| [deprecation](https://sonarsource.github.io/rspec/#/rspec/S1874/javascript)                          | Deprecated APIs should not be used                                                                                             | ✅  |     |     | 💭  |     |
| [destructuring-assignment-syntax](https://sonarsource.github.io/rspec/#/rspec/S3514/javascript)      | Destructuring syntax should be used for assignments                                                                            |     |     |     |     |     |
| [different-types-comparison](https://sonarsource.github.io/rspec/#/rspec/S3403/javascript)           | Strict equality operators should not be used with dissimilar types                                                             | ✅  |     | 💡  | 💭  |     |
| [disabled-auto-escaping](https://sonarsource.github.io/rspec/#/rspec/S5247/javascript)               | Disabling auto-escaping in template engines is security-sensitive                                                              | ✅  |     |     | 💭  |     |
| [disabled-resource-integrity](https://sonarsource.github.io/rspec/#/rspec/S5725/javascript)          | Using remote artifacts without integrity checks is security-sensitive                                                          | ✅  |     |     | 💭  |     |
| [disabled-timeout](https://sonarsource.github.io/rspec/#/rspec/S6080/javascript)                     | Disabling Mocha timeouts should be explicit                                                                                    | ✅  |     |     |     |     |
| [dns-prefetching](https://sonarsource.github.io/rspec/#/rspec/S5743/javascript)                      | Allowing browsers to perform DNS prefetching is security-sensitive                                                             |     |     |     |     | ❌  |
| [duplicates-in-character-class](https://sonarsource.github.io/rspec/#/rspec/S5869/javascript)        | Character classes in regular expressions should not contain the same character twice                                           | ✅  |     |     | 💭  |     |
| [elseif-without-else](https://sonarsource.github.io/rspec/#/rspec/S126/javascript)                   | "if ... else if" constructs should end with "else" clauses                                                                     |     |     |     |     |     |
| [empty-string-repetition](https://sonarsource.github.io/rspec/#/rspec/S5842/javascript)              | Repeated patterns in regular expressions should not match the empty string                                                     | ✅  |     |     | 💭  |     |
| [encryption](https://sonarsource.github.io/rspec/#/rspec/S4787/javascript)                           | Encrypting data is security-sensitive                                                                                          |     |     |     |     | ❌  |
| [encryption-secure-mode](https://sonarsource.github.io/rspec/#/rspec/S5542/javascript)               | Encryption algorithms should be used with secure mode and padding scheme                                                       | ✅  |     |     |     |     |
| [enforce-trailing-comma](https://sonarsource.github.io/rspec/#/rspec/S3723/javascript)               | Trailing commas should be used                                                                                                 |     | 🔧  |     |     | ❌  |
| [existing-groups](https://sonarsource.github.io/rspec/#/rspec/S6328/javascript)                      | Replacement strings should reference existing regular expression groups                                                        | ✅  |     |     | 💭  |     |
| [expression-complexity](https://sonarsource.github.io/rspec/#/rspec/S1067/javascript)                | Expressions should not be too complex                                                                                          |     |     |     |     |     |
| [file-header](https://sonarsource.github.io/rspec/#/rspec/S1451/javascript)                          | Track lack of copyright and license headers                                                                                    |     |     |     |     |     |
| [file-name-differ-from-class](https://sonarsource.github.io/rspec/#/rspec/S3317/javascript)          | Default export names and file names should match                                                                               |     |     |     |     |     |
| [file-permissions](https://sonarsource.github.io/rspec/#/rspec/S2612/javascript)                     | Setting loose POSIX file permissions is security-sensitive                                                                     | ✅  |     |     |     |     |
| [file-uploads](https://sonarsource.github.io/rspec/#/rspec/S2598/javascript)                         | File uploads should be restricted                                                                                              | ✅  |     |     |     |     |
| [fixme-tag](https://sonarsource.github.io/rspec/#/rspec/S1134/javascript)                            | Track uses of "FIXME" tags                                                                                                     | ✅  |     |     |     |     |
| [for-in](https://sonarsource.github.io/rspec/#/rspec/S1535/javascript)                               | "for...in" loops should filter properties before acting on them                                                                |     |     |     |     |     |
| [for-loop-increment-sign](https://sonarsource.github.io/rspec/#/rspec/S2251/javascript)              | A "for" loop update clause should move the counter in the right direction                                                      | ✅  |     |     |     |     |
| [frame-ancestors](https://sonarsource.github.io/rspec/#/rspec/S5732/javascript)                      | Disabling content security policy frame-ancestors directive is security-sensitive                                              | ✅  |     |     |     |     |
| [function-inside-loop](https://sonarsource.github.io/rspec/#/rspec/S1515/javascript)                 | Functions should not be defined inside loops                                                                                   | ✅  |     |     |     |     |
| [function-name](https://sonarsource.github.io/rspec/#/rspec/S100/javascript)                         | Function and method names should comply with a naming convention                                                               |     |     |     |     |     |
| [function-return-type](https://sonarsource.github.io/rspec/#/rspec/S3800/javascript)                 | Functions should always return the same type                                                                                   | ✅  |     |     | 💭  |     |
| [future-reserved-words](https://sonarsource.github.io/rspec/#/rspec/S1527/javascript)                | Future reserved words should not be used as identifiers                                                                        | ✅  |     |     |     |     |
| [generator-without-yield](https://sonarsource.github.io/rspec/#/rspec/S3531/javascript)              | Generators should explicitly "yield" a value                                                                                   | ✅  |     |     |     |     |
| [hashing](https://sonarsource.github.io/rspec/#/rspec/S4790/javascript)                              | Using weak hashing algorithms is security-sensitive                                                                            | ✅  |     |     |     |     |
| [hidden-files](https://sonarsource.github.io/rspec/#/rspec/S5691/javascript)                         | Statically serving hidden files is security-sensitive                                                                          | ✅  |     |     |     |     |
| [in-operator-type-error](https://sonarsource.github.io/rspec/#/rspec/S3785/javascript)               | "in" should not be used with primitive types                                                                                   | ✅  |     |     | 💭  |     |
| [inconsistent-function-call](https://sonarsource.github.io/rspec/#/rspec/S3686/javascript)           | Functions should be called consistently with or without "new"                                                                  | ✅  |     |     |     |     |
| [index-of-compare-to-positive-number](https://sonarsource.github.io/rspec/#/rspec/S2692/javascript)  | "indexOf" checks should not be for positive numbers                                                                            | ✅  |     |     | 💭  |     |
| [insecure-cookie](https://sonarsource.github.io/rspec/#/rspec/S2092/javascript)                      | Creating cookies without the "secure" flag is security-sensitive                                                               | ✅  |     |     |     |     |
| [insecure-jwt-token](https://sonarsource.github.io/rspec/#/rspec/S5659/javascript)                   | JWT should be signed and verified with strong cipher algorithms                                                                | ✅  |     |     |     |     |
| [inverted-assertion-arguments](https://sonarsource.github.io/rspec/#/rspec/S3415/javascript)         | Assertion arguments should be passed in the correct order                                                                      | ✅  |     | 💡  |     |     |
| [jsx-no-leaked-render](https://sonarsource.github.io/rspec/#/rspec/S6439/javascript)                 | React components should not render non-boolean condition values                                                                | ✅  |     | 💡  | 💭  |     |
| [label-position](https://sonarsource.github.io/rspec/#/rspec/S1439/javascript)                       | Only "while", "do", "for" and "switch" statements should be labelled                                                           | ✅  |     |     |     |     |
| [link-with-target-blank](https://sonarsource.github.io/rspec/#/rspec/S5148/javascript)               | Authorizing an opened window to access back to the originating window is security-sensitive                                    | ✅  |     |     |     |     |
| [max-lines](https://sonarsource.github.io/rspec/#/rspec/S104/javascript)                             | Files should not have too many lines of code                                                                                   |     |     |     |     |     |
| [max-lines-per-function](https://sonarsource.github.io/rspec/#/rspec/S138/javascript)                | Functions should not have too many lines of code                                                                               |     |     |     |     |     |
| [max-switch-cases](https://sonarsource.github.io/rspec/#/rspec/S1479/javascript)                     | "switch" statements should not have too many "case" clauses                                                                    | ✅  |     |     |     |     |
| [max-union-size](https://sonarsource.github.io/rspec/#/rspec/S4622/javascript)                       | Union types should not have too many elements                                                                                  |     |     |     |     |     |
| [misplaced-loop-counter](https://sonarsource.github.io/rspec/#/rspec/S1994/javascript)               | "for" loop increment clauses should modify the loops' counters                                                                 | ✅  |     |     |     |     |
| [nested-control-flow](https://sonarsource.github.io/rspec/#/rspec/S134/javascript)                   | Control flow statements "if", "for", "while", "switch" and "try" should not be nested too deeply                               |     |     |     |     |     |
| [new-operator-misuse](https://sonarsource.github.io/rspec/#/rspec/S2999/javascript)                  | "new" should only be used with functions and classes                                                                           | ✅  |     |     | 💭  |     |
| [no-all-duplicated-branches](https://sonarsource.github.io/rspec/#/rspec/S3923/javascript)           | All branches in a conditional structure should not have exactly the same implementation                                        | ✅  |     |     |     |     |
| [no-alphabetical-sort](https://sonarsource.github.io/rspec/#/rspec/S2871/javascript)                 | "Array.prototype.sort()" and "Array.prototype.toSorted()" should use a compare function                                        | ✅  |     | 💡  | 💭  |     |
| [no-angular-bypass-sanitization](https://sonarsource.github.io/rspec/#/rspec/S6268/javascript)       | Disabling Angular built-in sanitization is security-sensitive                                                                  | ✅  |     |     |     |     |
| [no-array-delete](https://sonarsource.github.io/rspec/#/rspec/S2870/javascript)                      | "delete" should not be used on arrays                                                                                          | ✅  |     |     | 💭  |     |
| [no-associative-arrays](https://sonarsource.github.io/rspec/#/rspec/S3579/javascript)                | Array indexes should be numeric                                                                                                | ✅  |     |     | 💭  |     |
| [no-async-constructor](https://sonarsource.github.io/rspec/#/rspec/S7059/javascript)                 | Constructors should not contain asynchronous operations                                                                        | ✅  |     |     |     |     |
| [no-built-in-override](https://sonarsource.github.io/rspec/#/rspec/S2424/javascript)                 | Built-in objects should not be overridden                                                                                      |     |     |     |     |     |
| [no-case-label-in-switch](https://sonarsource.github.io/rspec/#/rspec/S1219/javascript)              | "switch" statements should not contain non-case labels                                                                         | ✅  |     |     |     |     |
| [no-clear-text-protocols](https://sonarsource.github.io/rspec/#/rspec/S5332/javascript)              | Using clear-text protocols is security-sensitive                                                                               | ✅  |     |     |     |     |
| [no-code-after-done](https://sonarsource.github.io/rspec/#/rspec/S6079/javascript)                   | Tests should not execute any code after "done()" is called                                                                     | ✅  |     |     |     |     |
| [no-collapsible-if](https://sonarsource.github.io/rspec/#/rspec/S1066/javascript)                    | Mergeable "if" statements should be combined                                                                                   |     |     |     |     |     |
| [no-collection-size-mischeck](https://sonarsource.github.io/rspec/#/rspec/S3981/javascript)          | Collection size and array length comparisons should make sense                                                                 | ✅  |     | 💡  | 💭  |     |
| [no-commented-code](https://sonarsource.github.io/rspec/#/rspec/S125/javascript)                     | Sections of code should not be commented out                                                                                   | ✅  |     | 💡  |     |     |
| [no-control-regex](https://sonarsource.github.io/rspec/#/rspec/S6324/javascript)                     | Regular expressions should not contain control characters                                                                      | ✅  |     |     | 💭  |     |
| [no-dead-store](https://sonarsource.github.io/rspec/#/rspec/S1854/javascript)                        | Unused assignments should be removed                                                                                           | ✅  |     |     |     |     |
| [no-delete-var](https://sonarsource.github.io/rspec/#/rspec/S3001/javascript)                        | "delete" should be used only with object properties                                                                            | ✅  |     |     |     |     |
| [no-duplicate-in-composite](https://sonarsource.github.io/rspec/#/rspec/S4621/javascript)            | Union and intersection types should not include duplicated constituents                                                        | ✅  |     | 💡  |     |     |
| [no-duplicate-string](https://sonarsource.github.io/rspec/#/rspec/S1192/javascript)                  | String literals should not be duplicated                                                                                       |     |     |     |     |     |
| [no-duplicated-branches](https://sonarsource.github.io/rspec/#/rspec/S1871/javascript)               | Two branches in a conditional structure should not have exactly the same implementation                                        | ✅  |     |     |     |     |
| [no-element-overwrite](https://sonarsource.github.io/rspec/#/rspec/S4143/javascript)                 | Collection elements should not be replaced unconditionally                                                                     | ✅  |     |     |     |     |
| [no-empty-after-reluctant](https://sonarsource.github.io/rspec/#/rspec/S6019/javascript)             | Reluctant quantifiers in regular expressions should be followed by an expression that can't match the empty string             | ✅  |     |     | 💭  |     |
| [no-empty-alternatives](https://sonarsource.github.io/rspec/#/rspec/S6323/javascript)                | Alternation in regular expressions should not contain empty alternatives                                                       | ✅  |     |     | 💭  |     |
| [no-empty-character-class](https://sonarsource.github.io/rspec/#/rspec/S2639/javascript)             | Empty character classes should not be used                                                                                     | ✅  |     |     | 💭  |     |
| [no-empty-collection](https://sonarsource.github.io/rspec/#/rspec/S4158/javascript)                  | Empty collections should not be accessed or iterated                                                                           | ✅  |     |     |     |     |
| [no-empty-group](https://sonarsource.github.io/rspec/#/rspec/S6331/javascript)                       | Regular expressions should not contain empty groups                                                                            | ✅  |     |     | 💭  |     |
| [no-empty-test-file](https://sonarsource.github.io/rspec/#/rspec/S2187/javascript)                   | Test files should contain at least one test case                                                                               | ✅  |     |     |     |     |
| [no-equals-in-for-termination](https://sonarsource.github.io/rspec/#/rspec/S888/javascript)          | Equality operators should not be used in "for" loop termination conditions                                                     | ✅  |     |     |     |     |
| [no-exclusive-tests](https://sonarsource.github.io/rspec/#/rspec/S6426/javascript)                   | Exclusive tests should not be committed to version control                                                                     | ✅  |     | 💡  |     |     |
| [no-extra-arguments](https://sonarsource.github.io/rspec/#/rspec/S930/javascript)                    | Function calls should not pass extra arguments                                                                                 | ✅  |     |     |     |     |
| [no-fallthrough](https://sonarsource.github.io/rspec/#/rspec/S128/javascript)                        | Switch cases should end with an unconditional "break" statement                                                                | ✅  |     |     |     |     |
| [no-for-in-iterable](https://sonarsource.github.io/rspec/#/rspec/S4139/javascript)                   | "for in" should not be used with iterables                                                                                     |     |     |     | 💭  |     |
| [no-function-declaration-in-block](https://sonarsource.github.io/rspec/#/rspec/S1530/javascript)     | Function declarations should not be made within blocks                                                                         |     |     |     |     |     |
| [no-global-this](https://sonarsource.github.io/rspec/#/rspec/S2990/javascript)                       | The global "this" object should not be used                                                                                    | ✅  |     | 💡  |     |     |
| [no-globals-shadowing](https://sonarsource.github.io/rspec/#/rspec/S2137/javascript)                 | Special identifiers should not be bound or assigned                                                                            | ✅  |     |     |     |     |
| [no-gratuitous-expressions](https://sonarsource.github.io/rspec/#/rspec/S2589/javascript)            | Boolean expressions should not be gratuitous                                                                                   | ✅  |     |     |     |     |
| [no-hardcoded-ip](https://sonarsource.github.io/rspec/#/rspec/S1313/javascript)                      | Using hardcoded IP addresses is security-sensitive                                                                             | ✅  |     |     |     |     |
| [no-hardcoded-passwords](https://sonarsource.github.io/rspec/#/rspec/S2068/javascript)               | Hard-coded passwords are security-sensitive                                                                                    | ✅  |     |     |     |     |
| [no-hardcoded-secrets](https://sonarsource.github.io/rspec/#/rspec/S6418/javascript)                 | Hard-coded secrets are security-sensitive                                                                                      | ✅  |     |     |     |     |
| [no-hook-setter-in-body](https://sonarsource.github.io/rspec/#/rspec/S6442/javascript)               | React's useState hook should not be used directly in the render function or body of a component                                | ✅  |     |     |     |     |
| [no-identical-conditions](https://sonarsource.github.io/rspec/#/rspec/S1862/javascript)              | "if/else if" chains and "switch" cases should not have the same condition                                                      | ✅  |     |     |     |     |
| [no-identical-expressions](https://sonarsource.github.io/rspec/#/rspec/S1764/javascript)             | Identical expressions should not be used on both sides of a binary operator                                                    | ✅  |     |     |     |     |
| [no-identical-functions](https://sonarsource.github.io/rspec/#/rspec/S4144/javascript)               | Functions should not have identical implementations                                                                            | ✅  |     |     |     |     |
| [no-ignored-exceptions](https://sonarsource.github.io/rspec/#/rspec/S2486/javascript)                | Exceptions should not be ignored                                                                                               | ✅  |     |     |     |     |
| [no-ignored-return](https://sonarsource.github.io/rspec/#/rspec/S2201/javascript)                    | Return values from functions without side effects should not be ignored                                                        | ✅  |     |     | 💭  |     |
| [no-implicit-dependencies](https://sonarsource.github.io/rspec/#/rspec/S4328/javascript)             | Dependencies should be explicit                                                                                                |     |     |     |     |     |
| [no-implicit-global](https://sonarsource.github.io/rspec/#/rspec/S2703/javascript)                   | Variables should be declared explicitly                                                                                        | ✅  |     |     |     |     |
| [no-in-misuse](https://sonarsource.github.io/rspec/#/rspec/S4619/javascript)                         | "in" should not be used on arrays                                                                                              | ✅  |     | 💡  | 💭  |     |
| [no-incomplete-assertions](https://sonarsource.github.io/rspec/#/rspec/S2970/javascript)             | Assertions should be complete                                                                                                  | ✅  |     |     |     |     |
| [no-inconsistent-returns](https://sonarsource.github.io/rspec/#/rspec/S3801/javascript)              | Functions should use "return" consistently                                                                                     |     |     |     |     |     |
| [no-incorrect-string-concat](https://sonarsource.github.io/rspec/#/rspec/S3402/javascript)           | Strings and non-strings should not be added                                                                                    |     |     |     | 💭  |     |
| [no-internal-api-use](https://sonarsource.github.io/rspec/#/rspec/S6627/javascript)                  | Users should not use internal APIs                                                                                             | ✅  |     |     |     |     |
| [no-intrusive-permissions](https://sonarsource.github.io/rspec/#/rspec/S5604/javascript)             | Using intrusive permissions is security-sensitive                                                                              | ✅  |     |     |     |     |
| [no-invalid-regexp](https://sonarsource.github.io/rspec/#/rspec/S5856/javascript)                    | Regular expressions should be syntactically valid                                                                              | ✅  |     |     | 💭  |     |
| [no-invariant-returns](https://sonarsource.github.io/rspec/#/rspec/S3516/javascript)                 | Function returns should not be invariant                                                                                       | ✅  |     |     |     |     |
| [no-inverted-boolean-check](https://sonarsource.github.io/rspec/#/rspec/S1940/javascript)            | Boolean checks should not be inverted                                                                                          | ✅  | 🔧  | 💡  |     |     |
| [no-ip-forward](https://sonarsource.github.io/rspec/#/rspec/S5759/javascript)                        | Forwarding client IP address is security-sensitive                                                                             | ✅  |     |     |     |     |
| [no-labels](https://sonarsource.github.io/rspec/#/rspec/S1119/javascript)                            | Labels should not be used                                                                                                      | ✅  |     |     |     |     |
| [no-literal-call](https://sonarsource.github.io/rspec/#/rspec/S6958/javascript)                      | Literals should not be used as functions                                                                                       | ✅  |     |     |     |     |
| [no-mime-sniff](https://sonarsource.github.io/rspec/#/rspec/S5734/javascript)                        | Allowing browsers to sniff MIME types is security-sensitive                                                                    | ✅  |     |     |     |     |
| [no-misleading-array-reverse](https://sonarsource.github.io/rspec/#/rspec/S4043/javascript)          | Array-mutating methods should not be used misleadingly                                                                         | ✅  |     | 💡  | 💭  |     |
| [no-misleading-character-class](https://sonarsource.github.io/rspec/#/rspec/S5868/javascript)        | Unicode Grapheme Clusters should be avoided inside regex character classes                                                     | ✅  |     | 💡  | 💭  |     |
| [no-mixed-content](https://sonarsource.github.io/rspec/#/rspec/S5730/javascript)                     | Allowing mixed-content is security-sensitive                                                                                   | ✅  |     |     |     |     |
| [no-nested-assignment](https://sonarsource.github.io/rspec/#/rspec/S1121/javascript)                 | Assignments should not be made from within sub-expressions                                                                     | ✅  |     |     |     |     |
| [no-nested-conditional](https://sonarsource.github.io/rspec/#/rspec/S3358/javascript)                | Ternary operators should not be nested                                                                                         | ✅  |     |     |     |     |
| [no-nested-functions](https://sonarsource.github.io/rspec/#/rspec/S2004/javascript)                  | Functions should not be nested too deeply                                                                                      | ✅  |     |     |     |     |
| [no-nested-incdec](https://sonarsource.github.io/rspec/#/rspec/S881/javascript)                      | Increment (++) and decrement (--) operators should not be used in a method call or mixed with other operators in an expression |     |     |     |     |     |
| [no-nested-switch](https://sonarsource.github.io/rspec/#/rspec/S1821/javascript)                     | "switch" statements should not be nested                                                                                       |     |     |     |     |     |
| [no-nested-template-literals](https://sonarsource.github.io/rspec/#/rspec/S4624/javascript)          | Template literals should not be nested                                                                                         | ✅  |     |     |     |     |
| [no-os-command-from-path](https://sonarsource.github.io/rspec/#/rspec/S4036/javascript)              | Searching OS commands in PATH is security-sensitive                                                                            | ✅  |     |     |     |     |
| [no-parameter-reassignment](https://sonarsource.github.io/rspec/#/rspec/S1226/javascript)            | Initial values of parameters, caught exceptions, and loop variables should not be ignored                                      | ✅  |     |     |     |     |
| [no-primitive-wrappers](https://sonarsource.github.io/rspec/#/rspec/S1533/javascript)                | Wrapper objects should not be used for primitive types                                                                         | ✅  |     | 💡  |     |     |
| [no-redundant-assignments](https://sonarsource.github.io/rspec/#/rspec/S4165/javascript)             | Assignments should not be redundant                                                                                            | ✅  |     |     |     |     |
| [no-redundant-boolean](https://sonarsource.github.io/rspec/#/rspec/S1125/javascript)                 | Boolean literals should not be used in comparisons                                                                             | ✅  |     |     |     |     |
| [no-redundant-jump](https://sonarsource.github.io/rspec/#/rspec/S3626/javascript)                    | Jump statements should not be redundant                                                                                        | ✅  |     | 💡  |     |     |
| [no-redundant-optional](https://sonarsource.github.io/rspec/#/rspec/S4782/javascript)                | Optional property declarations should not use both '?' and 'undefined' syntax                                                  | ✅  |     | 💡  | 💭  |     |
| [no-redundant-parentheses](https://sonarsource.github.io/rspec/#/rspec/S1110/javascript)             | Redundant pairs of parentheses should be removed                                                                               |     |     | 💡  |     | ❌  |
| [no-reference-error](https://sonarsource.github.io/rspec/#/rspec/S3827/javascript)                   | Variables should be defined before being used                                                                                  |     |     |     |     |     |
| [no-referrer-policy](https://sonarsource.github.io/rspec/#/rspec/S5736/javascript)                   | Disabling strict HTTP no-referrer policy is security-sensitive                                                                 | ✅  |     |     |     |     |
| [no-regex-spaces](https://sonarsource.github.io/rspec/#/rspec/S6326/javascript)                      | Regular expressions should not contain multiple spaces                                                                         | ✅  |     | 💡  | 💭  |     |
| [no-require-or-define](https://sonarsource.github.io/rspec/#/rspec/S3533/javascript)                 | "import" should be used to include external code                                                                               |     |     |     | 💭  |     |
| [no-return-type-any](https://sonarsource.github.io/rspec/#/rspec/S4324/javascript)                   | Primitive return types should be used                                                                                          |     |     |     | 💭  |     |
| [no-same-argument-assert](https://sonarsource.github.io/rspec/#/rspec/S5863/javascript)              | Assertions should not be given twice the same argument                                                                         | ✅  |     |     |     |     |
| [no-same-line-conditional](https://sonarsource.github.io/rspec/#/rspec/S3972/javascript)             | Conditionals should start on new lines                                                                                         | ✅  |     | 💡  |     |     |
| [no-selector-parameter](https://sonarsource.github.io/rspec/#/rspec/S2301/javascript)                | Methods should not contain selector parameters                                                                                 | ✅  |     |     | 💭  |     |
| [no-skipped-tests](https://sonarsource.github.io/rspec/#/rspec/S1607/javascript)                     | Tests should not be skipped without providing a reason                                                                         | ✅  |     |     |     |     |
| [no-small-switch](https://sonarsource.github.io/rspec/#/rspec/S1301/javascript)                      | "if" statements should be preferred over "switch" when simpler                                                                 | ✅  |     |     |     |     |
| [no-sonar-comments](https://sonarsource.github.io/rspec/#/rspec/S1291/javascript)                    | Track uses of "NOSONAR" comments                                                                                               |     |     |     |     |     |
| [no-tab](https://sonarsource.github.io/rspec/#/rspec/S105/javascript)                                | Tabulation characters should not be used                                                                                       |     |     |     |     | ❌  |
| [no-table-as-layout](https://sonarsource.github.io/rspec/#/rspec/S5257/javascript)                   | HTML "&lt;table&gt;" should not be used for layout purposes                                                                    | ✅  |     |     |     |     |
| [no-try-promise](https://sonarsource.github.io/rspec/#/rspec/S4822/javascript)                       | Promise rejections should not be caught by "try" blocks                                                                        | ✅  |     |     | 💭  |     |
| [no-undefined-argument](https://sonarsource.github.io/rspec/#/rspec/S4623/javascript)                | "undefined" should not be passed as the value of optional parameters                                                           | ✅  |     | 💡  | 💭  |     |
| [no-undefined-assignment](https://sonarsource.github.io/rspec/#/rspec/S2138/javascript)              | "undefined" should not be assigned                                                                                             |     |     |     |     |     |
| [no-unenclosed-multiline-block](https://sonarsource.github.io/rspec/#/rspec/S2681/javascript)        | Multiline blocks should be enclosed in curly braces                                                                            | ✅  |     |     |     |     |
| [no-uniq-key](https://sonarsource.github.io/rspec/#/rspec/S6486/javascript)                          | JSX list components keys should match up between renders                                                                       | ✅  |     |     |     |     |
| [no-unsafe-unzip](https://sonarsource.github.io/rspec/#/rspec/S5042/javascript)                      | Expanding archive files without controlling resource consumption is security-sensitive                                         | ✅  |     |     |     |     |
| [no-unthrown-error](https://sonarsource.github.io/rspec/#/rspec/S3984/javascript)                    | Errors should not be created without being thrown                                                                              | ✅  |     | 💡  |     |     |
| [no-unused-collection](https://sonarsource.github.io/rspec/#/rspec/S4030/javascript)                 | Collection contents should be used                                                                                             | ✅  |     |     |     |     |
| [no-unused-function-argument](https://sonarsource.github.io/rspec/#/rspec/S1172/javascript)          | Unused function parameters should be removed                                                                                   |     |     | 💡  |     |     |
| [no-unused-vars](https://sonarsource.github.io/rspec/#/rspec/S1481/javascript)                       | Unused local variables and functions should be removed                                                                         | ✅  |     |     |     |     |
| [no-use-of-empty-return-value](https://sonarsource.github.io/rspec/#/rspec/S3699/javascript)         | The return value of void functions should not be used                                                                          | ✅  |     |     |     |     |
| [no-useless-catch](https://sonarsource.github.io/rspec/#/rspec/S2737/javascript)                     | "catch" clauses should do more than rethrow                                                                                    | ✅  |     |     |     |     |
| [no-useless-increment](https://sonarsource.github.io/rspec/#/rspec/S2123/javascript)                 | Values should not be uselessly incremented                                                                                     | ✅  |     |     |     |     |
| [no-useless-intersection](https://sonarsource.github.io/rspec/#/rspec/S4335/javascript)              | Type intersections should use meaningful types                                                                                 | ✅  |     |     | 💭  |     |
| [no-useless-react-setstate](https://sonarsource.github.io/rspec/#/rspec/S6443/javascript)            | React state setter function should not be called with its matching state variable                                              | ✅  |     |     |     |     |
| [no-variable-usage-before-declaration](https://sonarsource.github.io/rspec/#/rspec/S1526/javascript) | Variables declared with "var" should be declared before they are used                                                          |     |     |     |     |     |
| [no-vue-bypass-sanitization](https://sonarsource.github.io/rspec/#/rspec/S6299/javascript)           | Disabling Vue.js built-in escaping is security-sensitive                                                                       |     |     |     |     | ❌  |
| [no-weak-cipher](https://sonarsource.github.io/rspec/#/rspec/S5547/javascript)                       | Cipher algorithms should be robust                                                                                             | ✅  |     |     |     |     |
| [no-weak-keys](https://sonarsource.github.io/rspec/#/rspec/S4426/javascript)                         | Cryptographic keys should be robust                                                                                            | ✅  |     |     |     |     |
| [no-wildcard-import](https://sonarsource.github.io/rspec/#/rspec/S2208/javascript)                   | Wildcard imports should not be used                                                                                            |     |     |     |     |     |
| [non-existent-operator](https://sonarsource.github.io/rspec/#/rspec/S2757/javascript)                | Non-existent operators '=+', '=-' and '=!' should not be used                                                                  | ✅  |     | 💡  |     |     |
| [non-number-in-arithmetic-expression](https://sonarsource.github.io/rspec/#/rspec/S3760/javascript)  | Arithmetic operators should only have numbers as operands                                                                      |     |     |     | 💭  |     |
| [null-dereference](https://sonarsource.github.io/rspec/#/rspec/S2259/javascript)                     | Properties of variables with "null" or "undefined" values should not be accessed                                               | ✅  |     |     | 💭  |     |
| [object-alt-content](https://sonarsource.github.io/rspec/#/rspec/S5264/javascript)                   | "<object>" tags should provide an alternative content                                                                          | ✅  |     |     |     |     |
| [operation-returning-nan](https://sonarsource.github.io/rspec/#/rspec/S3757/javascript)              | Arithmetic operations should not result in "NaN"                                                                               |     |     |     | 💭  |     |
| [os-command](https://sonarsource.github.io/rspec/#/rspec/S4721/javascript)                           | Using shell interpreter when executing OS commands is security-sensitive                                                       | ✅  |     |     |     |     |
| [post-message](https://sonarsource.github.io/rspec/#/rspec/S2819/javascript)                         | Origins should be verified during cross-origin communications                                                                  | ✅  |     |     | 💭  |     |
| [prefer-default-last](https://sonarsource.github.io/rspec/#/rspec/S4524/javascript)                  | "default" clauses should be last                                                                                               | ✅  |     |     |     |     |
| [prefer-immediate-return](https://sonarsource.github.io/rspec/#/rspec/S1488/javascript)              | Local variables should not be declared and then immediately returned or thrown                                                 |     | 🔧  |     |     |     |
| [prefer-object-literal](https://sonarsource.github.io/rspec/#/rspec/S2428/javascript)                | Object literal syntax should be used                                                                                           |     |     |     |     |     |
| [prefer-promise-shorthand](https://sonarsource.github.io/rspec/#/rspec/S4634/javascript)             | Shorthand promises should be used                                                                                              | ✅  |     | 💡  |     |     |
| [prefer-read-only-props](https://sonarsource.github.io/rspec/#/rspec/S6759/javascript)               | React props should be read-only                                                                                                | ✅  |     | 💡  | 💭  |     |
| [prefer-regexp-exec](https://sonarsource.github.io/rspec/#/rspec/S6594/javascript)                   | "RegExp.exec()" should be preferred over "String.match()"                                                                      | ✅  |     | 💡  | 💭  |     |
| [prefer-single-boolean-return](https://sonarsource.github.io/rspec/#/rspec/S1126/javascript)         | Return of boolean expressions should not be wrapped into an "if-then-else" statement                                           | ✅  |     | 💡  |     |     |
| [prefer-type-guard](https://sonarsource.github.io/rspec/#/rspec/S4322/javascript)                    | Type predicates should be used                                                                                                 | ✅  |     | 💡  |     |     |
| [prefer-while](https://sonarsource.github.io/rspec/#/rspec/S1264/javascript)                         | A "while" loop should be used instead of a "for" loop                                                                          | ✅  | 🔧  |     |     |     |
| [process-argv](https://sonarsource.github.io/rspec/#/rspec/S4823/javascript)                         | Using command line arguments is security-sensitive                                                                             |     |     |     |     | ❌  |
| [production-debug](https://sonarsource.github.io/rspec/#/rspec/S4507/javascript)                     | Delivering code in production with debug features activated is security-sensitive                                              | ✅  |     |     |     |     |
| [pseudo-random](https://sonarsource.github.io/rspec/#/rspec/S2245/javascript)                        | Using pseudorandom number generators (PRNGs) is security-sensitive                                                             | ✅  |     |     |     |     |
| [public-static-readonly](https://sonarsource.github.io/rspec/#/rspec/S1444/javascript)               | Public "static" fields should be read-only                                                                                     | ✅  |     | 💡  |     |     |
| [publicly-writable-directories](https://sonarsource.github.io/rspec/#/rspec/S5443/javascript)        | Using publicly writable directories is security-sensitive                                                                      | ✅  |     |     |     |     |
| [reduce-initial-value](https://sonarsource.github.io/rspec/#/rspec/S6959/javascript)                 | "Array.reduce()" calls should include an initial value                                                                         | ✅  |     |     | 💭  |     |
| [redundant-type-aliases](https://sonarsource.github.io/rspec/#/rspec/S6564/javascript)               | Redundant type aliases should not be used                                                                                      | ✅  |     |     |     |     |
| [regex-complexity](https://sonarsource.github.io/rspec/#/rspec/S5843/javascript)                     | Regular expressions should not be too complicated                                                                              | ✅  |     |     | 💭  |     |
| [regular-expr](https://sonarsource.github.io/rspec/#/rspec/S4784/javascript)                         | Using regular expressions is security-sensitive                                                                                |     |     |     |     | ❌  |
| [session-regeneration](https://sonarsource.github.io/rspec/#/rspec/S5876/javascript)                 | A new session should be created during user authentication                                                                     | ✅  |     |     |     |     |
| [shorthand-property-grouping](https://sonarsource.github.io/rspec/#/rspec/S3499/javascript)          | Shorthand object properties should be grouped at the beginning or end of an object declaration                                 |     |     |     |     |     |
| [single-char-in-character-classes](https://sonarsource.github.io/rspec/#/rspec/S6397/javascript)     | Character classes in regular expressions should not contain only one character                                                 | ✅  |     |     | 💭  |     |
| [single-character-alternation](https://sonarsource.github.io/rspec/#/rspec/S6035/javascript)         | Single-character alternations in regular expressions should be replaced with character classes                                 | ✅  |     |     | 💭  |     |
| [slow-regex](https://sonarsource.github.io/rspec/#/rspec/S5852/javascript)                           | Using slow regular expressions is security-sensitive                                                                           | ✅  |     |     | 💭  |     |
| [sockets](https://sonarsource.github.io/rspec/#/rspec/S4818/javascript)                              | Using Sockets is security-sensitive                                                                                            |     |     |     |     | ❌  |
| [sql-queries](https://sonarsource.github.io/rspec/#/rspec/S2077/javascript)                          | Formatting SQL queries is security-sensitive                                                                                   | ✅  |     |     |     |     |
| [stable-tests](https://sonarsource.github.io/rspec/#/rspec/S5973/javascript)                         | Tests should be stable                                                                                                         | ✅  |     |     |     |     |
| [standard-input](https://sonarsource.github.io/rspec/#/rspec/S4829/javascript)                       | Reading the Standard Input is security-sensitive                                                                               |     |     |     |     | ❌  |
| [stateful-regex](https://sonarsource.github.io/rspec/#/rspec/S6351/javascript)                       | Regular expressions with the global flag should be used with caution                                                           | ✅  |     |     |     |     |
| [strict-transport-security](https://sonarsource.github.io/rspec/#/rspec/S5739/javascript)            | Disabling Strict-Transport-Security policy is security-sensitive                                                               | ✅  |     |     |     |     |
| [strings-comparison](https://sonarsource.github.io/rspec/#/rspec/S3003/javascript)                   | Comparison operators should not be used with strings                                                                           |     |     |     | 💭  |     |
| [super-invocation](https://sonarsource.github.io/rspec/#/rspec/S3854/javascript)                     | "super()" should be invoked appropriately                                                                                      | ✅  |     |     |     |     |
| [table-header](https://sonarsource.github.io/rspec/#/rspec/S5256/javascript)                         | Tables should have headers                                                                                                     | ✅  |     |     |     |     |
| [table-header-reference](https://sonarsource.github.io/rspec/#/rspec/S5260/javascript)               | Table cells should reference their headers                                                                                     | ✅  |     |     |     |     |
| [test-check-exception](https://sonarsource.github.io/rspec/#/rspec/S5958/javascript)                 | Tests should check which exception is thrown                                                                                   | ✅  |     |     |     |     |
| [todo-tag](https://sonarsource.github.io/rspec/#/rspec/S1135/javascript)                             | Track uses of "TODO" tags                                                                                                      | ✅  |     |     |     |     |
| [too-many-break-or-continue-in-loop](https://sonarsource.github.io/rspec/#/rspec/S135/javascript)    | Loops should not contain more than a single "break" or "continue" statement                                                    |     |     |     |     |     |
| [unicode-aware-regex](https://sonarsource.github.io/rspec/#/rspec/S5867/javascript)                  | Regular expressions using Unicode character classes or property escapes should enable the unicode flag                         |     |     |     | 💭  |     |
| [unused-import](https://sonarsource.github.io/rspec/#/rspec/S1128/javascript)                        | Unnecessary imports should be removed                                                                                          | ✅  |     | 💡  | 💭  |     |
| [unused-named-groups](https://sonarsource.github.io/rspec/#/rspec/S5860/javascript)                  | Names of regular expressions named groups should be used                                                                       | ✅  |     |     | 💭  |     |
| [unverified-certificate](https://sonarsource.github.io/rspec/#/rspec/S4830/javascript)               | Server certificates should be verified during SSL/TLS connections                                                              | ✅  |     |     |     |     |
| [unverified-hostname](https://sonarsource.github.io/rspec/#/rspec/S5527/javascript)                  | Server hostnames should be verified during SSL/TLS connections                                                                 | ✅  |     |     |     |     |
| [updated-const-var](https://sonarsource.github.io/rspec/#/rspec/S3500/javascript)                    | "const" variables should not be reassigned                                                                                     | ✅  |     |     |     |     |
| [updated-loop-counter](https://sonarsource.github.io/rspec/#/rspec/S2310/javascript)                 | Loop counters should not be assigned within the loop body                                                                      | ✅  |     |     |     |     |
| [use-type-alias](https://sonarsource.github.io/rspec/#/rspec/S4323/javascript)                       | Type aliases should be used                                                                                                    | ✅  |     |     |     |     |
| [useless-string-operation](https://sonarsource.github.io/rspec/#/rspec/S1154/javascript)             | Results of operations on strings should not be ignored                                                                         |     |     |     | 💭  | ❌  |
| [values-not-convertible-to-numbers](https://sonarsource.github.io/rspec/#/rspec/S3758/javascript)    | Values not convertible to numbers should not be used in numeric comparisons                                                    |     |     |     | 💭  |     |
| [variable-name](https://sonarsource.github.io/rspec/#/rspec/S117/javascript)                         | Variable, property and parameter names should comply with a naming convention                                                  |     |     |     |     |     |
| [void-use](https://sonarsource.github.io/rspec/#/rspec/S3735/javascript)                             | "void" should not be used                                                                                                      | ✅  |     |     | 💭  |     |
| [weak-ssl](https://sonarsource.github.io/rspec/#/rspec/S4423/javascript)                             | Weak SSL/TLS protocols should not be used                                                                                      | ✅  |     |     |     |     |
| [web-sql-database](https://sonarsource.github.io/rspec/#/rspec/S2817/javascript)                     | Web SQL databases should not be used                                                                                           |     |     |     | 💭  | ❌  |
| [x-powered-by](https://sonarsource.github.io/rspec/#/rspec/S5689/javascript)                         | Disclosing fingerprints from web application technologies is security-sensitive                                                | ✅  |     |     |     |     |
| [xml-parser-xxe](https://sonarsource.github.io/rspec/#/rspec/S2755/javascript)                       | XML parsers should not be vulnerable to XXE attacks                                                                            | ✅  |     |     |     |     |
| [xpath](https://sonarsource.github.io/rspec/#/rspec/S4817/javascript)                                | Executing XPath expressions is security-sensitive                                                                              |     |     |     |     | ❌  |

<!-- end auto-generated rules list -->