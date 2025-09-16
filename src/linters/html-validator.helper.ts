import {Message} from "../models/message.model";
import {HtmlValidate, Result} from "html-validate";
import {MessageType} from "../enum/message.enum";
import { SourceModel } from '../models/source.model';
import {globSync} from "glob";

export class HtmlValidatorUtils {
    // TODO: performance issue: Run identifyRule loop outside of each rule
    static identifyRule(ruleId: string, ruleFlow: MessageType, htmlValidator: Result[]) {
        const results = htmlValidator.reduce<Message[]>((messages, item) => {
            const existingMiss = item.messages.filter(x => x.ruleId === ruleId)
            const messageList = existingMiss.length !== 0
                ? existingMiss.map((x) => Message.create(`${x.message} at line ${x.line}. Rule: ${ruleId}`, ruleFlow))
                : [Message.create(`Rule ${ruleId} is passed`, MessageType.passed)]
            messages.push(...messageList)
            return messages;
        }, [])
        return results;
    }

    static async getHTMLFiles(source: SourceModel) {
        const htmlFiles: SourceModel[] = [];


        if(!source.isURL) {
            const files = globSync(`${source.file.dir}/**/*.html`);
            htmlFiles.push(...files.map((file) => SourceModel.create(file)))
        }

        if (source.isURL) {
            htmlFiles.push(source);
        }
        return htmlFiles;
    }

    static async getHTMLValidatorResult(sources: SourceModel[]): Promise<Result[]> {
        if (sources.length === 0) {
            return []
        }
        const htmlValidate = new HtmlValidate({
            rules: {
                // Security
                'require-csp-nonce': "warn",
                'require-sri': "warn",
                // End Security

                // Style Block
                'attr-case': "warn",
                'attr-pattern': "warn",
                'attr-quotes': "warn",
                'attribute-boolean-style': "warn",
                'attribute-empty-style': "warn",
                'class-pattern': "warn",
                'doctype-style': "warn",
                'element-case': "warn",
                'id-pattern': "warn",
                'name-pattern': "warn",
                'no-implicit-close': "warn",
                'no-implicit-input-type': "warn",
                'no-inline-style': "warn",
                'no-self-closing': "warn",
                'no-style-tag': "warn",
                'no-trailing-whitespace': "warn",
                'prefer-button': "warn",
                'prefer-tbody': "warn",
                'void-style': "warn",
                // End Style Block

                // Accessibility
                'area-alt': "warn",
                'aria-hidden-body': "warn",
                'aria-label-misuse': "warn",
                'empty-heading': "warn",
                'empty-title': "warn",
                'hidden-focusable': "warn",
                'input-missing-label': "warn",
                'meta-refresh': "warn",
                'multiple-labeled-controls': "warn",
                'no-abstract-role': "warn",
                'no-autoplay': "warn",
                'no-implicit-button-type': "warn",
                'no-redundant-aria-label': "warn",
                'no-redundant-role': "warn",
                'prefer-native-element': "warn",
                'svg-focusable': "warn",
                'tel-non-breaking': "warn",
                'text-content': "warn",
                'unique-landmark': "warn",
                'wcag/h30': "warn",
                'wcag/h36': "warn",
                'wcag/h37': "warn",
                'wcag/h63': "warn",
                'wcag/h67': "warn",
                'wcag/h71': "warn",
                // End Accessibility

                // Deprecated
                'deprecated': "warn",
                'deprecated-rule': "warn",
                'no-conditional-comment': "warn",
                'no-deprecated-attr': "warn",
                // End Deprecated

                // Document
                'allowed-links': "warn",
                'doctype-html': "warn",
                'heading-level': "warn", // - ??
                'missing-doctype': "warn",
                'no-dup-id': "warn",
                'no-missing-references': "warn",
                'no-utf8-bom': "warn",
                // End Document

                // Uncategorized
                'no-unknown-elements': "warn",
                'no-unused-disable': "warn",
                // End Uncategorized


                // Content model
                'attribute-allowed-values': "warn",
                'attribute-misuse': "warn",
                'element-permitted-content': "warn",
                'element-permitted-occurrences': "warn",
                'element-permitted-order': "warn",
                'element-permitted-parent': "warn",
                'element-required-ancestor': "warn",
                'element-required-attributes': "warn",
                'element-required-content': "warn",
                'input-attributes': "warn",
                'no-multiple-main': "warn",
                'script-element': "warn",
                'void-content': "warn",
                // End Content model

                // HTML Syntax and concepts
                'attr-delimiter': "warn",
                'attr-spacing': "warn",
                'close-attr': "warn",
                'close-order': "warn",
                'element-name': "warn",
                'form-dup-name': "warn",
                'map-dup-name': "warn",
                'map-id-name': "warn",
                'no-dup-attr': "warn",
                'no-dup-class': "warn",
                'no-raw-characters': "warn",
                'no-redundant-for': "warn",
                'script-type': "warn",
                'unrecognized-char-ref': "warn",
                'valid-autocomplete': "warn",
                'valid-id': "warn",
                // End HTML Syntax and concepts
            },
        });

        let lintResults = [];
        for(let source of sources) {
            if (source.isURL) {
                const website = await fetch(source.url);
                const data = await website.text()
                lintResults.push(await htmlValidate.validateString(data));
            } else {
                lintResults.push(await htmlValidate.validateFile(source.file.relativePath));
            }
        }

        const result = lintResults.reduce<Result[]>((acum, result) => {
             acum.push(...result.results);
            return acum;
        }, [])


        return result;
    }
}