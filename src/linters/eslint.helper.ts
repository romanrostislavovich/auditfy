import {Message} from "../models/message.model";
import {MessageType} from "../enum/message.enum";
import {ESLint} from "eslint";
import {globSync} from "glob";
import {SourceModel} from "../models/source.model";
import {CheerioAPI} from "cheerio";
import {URLUtils} from "../utils/url.utils";
import path from "node:path";
import security from "eslint-plugin-security";
import sonarjs from 'eslint-plugin-sonarjs';
import { defineConfig } from "eslint/config";
import {CheerioUtils} from "../utils/cheerio.utils";
import {HtmlValidatorUtils} from "./html-validator.helper";

export const eslintRules = {


    "accessor-pairs": ["error", { "setWithoutGet": true, "enforceForClassMembers": true }],
    "block-spacing": ["error", "always"],
    "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
    "camelcase": ["error", {
        "allow": ["^UNSAFE_"],
        "properties": "never",
        "ignoreGlobals": true
    }],
    "comma-dangle": ["error", {
        "arrays": "never",
        "objects": "never",
        "imports": "never",
        "exports": "never",
        "functions": "never"
    }],
    "comma-spacing": ["error", { "before": false, "after": true }],
    "comma-style": ["error", "last"],
    "constructor-super": "error",
    "curly": ["error", "multi-line"],
    "dot-location": ["error", "property"],
    "eol-last": "error",
    "eqeqeq": ["error", "always", { "null": "ignore" }],
    "func-call-spacing": ["error", "never"],
    "indent": ["error", 2, {
        "SwitchCase": 1,
        "VariableDeclarator": 1,
        "outerIIFEBody": 1,
        "MemberExpression": 1,
        "FunctionDeclaration": { "parameters": 1, "body": 1 },
        "FunctionExpression": { "parameters": 1, "body": 1 },
        "CallExpression": { "arguments": 1 },
        "ArrayExpression": 1,
        "ObjectExpression": 1,
        "ImportDeclaration": 1,
        "flatTernaryExpressions": false,
        "ignoreComments": false,
        "ignoredNodes": ["TemplateLiteral *", "JSXElement", "JSXElement > *", "JSXAttribute", "JSXIdentifier", "JSXNamespacedName", "JSXMemberExpression", "JSXSpreadAttribute", "JSXExpressionContainer", "JSXOpeningElement", "JSXClosingElement", "JSXFragment", "JSXOpeningFragment", "JSXClosingFragment", "JSXText", "JSXEmptyExpression", "JSXSpreadChild"],
        "offsetTernaryExpressions": true
    }],
    "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
    "keyword-spacing": ["error", { "before": true, "after": true }],
    "new-cap": ["error", { "newIsCap": true, "capIsNew": false, "properties": true }],
    "new-parens": "error",
    "no-array-constructor": "error",
    "no-caller": "error",
    "no-class-assign": "error",
    "no-compare-neg-zero": "error",
    "no-cond-assign": "error",
    "no-const-assign": "error",
    "no-constant-condition": ["error", { "checkLoops": false }],
    "no-control-regex": "error",
    "no-debugger": "error",
    "no-delete-var": "error",
    "no-dupe-args": "error",
    "no-dupe-class-members": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-empty-character-class": "error",
    "no-empty-pattern": "error",
    "no-eval": "error",
    "no-ex-assign": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-boolean-cast": "error",
    "no-extra-parens": ["error", "functions"],
    "no-fallthrough": "error",
    "no-floating-decimal": "error",
    "no-func-assign": "error",
    "no-global-assign": "error",
    "no-implied-eval": "error",
    "no-invalid-regexp": "error",
    "no-irregular-whitespace": "error",
    "no-iterator": "error",
    "no-labels": ["error", { "allowLoop": false, "allowSwitch": false }],
    "no-lone-blocks": "error",
    "no-misleading-character-class": "error",
    "no-useless-catch": "error",
    "no-mixed-spaces-and-tabs": "error",
    "no-multi-spaces": "error",
    "no-multi-str": "error",
    "no-multiple-empty-lines": ["error", { "max": 1, "maxBOF": 0, "maxEOF": 0 }],
    "no-new": "error",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-symbol": "error",
    "no-new-wrappers": "error",
    "no-obj-calls": "error",
    "no-octal": "error",
    "no-octal-escape": "error",
    "no-proto": "error",
    "no-redeclare": ["error", { "builtinGlobals": false }],
    "no-regex-spaces": "error",
    "no-return-assign": ["error", "except-parens"],
    "no-self-assign": ["error", { "props": true }],
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-shadow-restricted-names": "error",
    "no-sparse-arrays": "error",
    "no-tabs": "error",
    "no-template-curly-in-string": "error",
    "no-this-before-super": "error",
    "no-throw-literal": "error",
    "no-trailing-spaces": "error",
    "no-undef": "error",
    "no-undef-init": "error",
    "no-unmodified-loop-condition": "error",
    "no-unneeded-ternary": ["error", { "defaultAssignment": false }],
    "no-unreachable": "error",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": "error",
    "no-unused-vars": ["error", {
        "args": "none",
        "caughtErrors": "none",
        "ignoreRestSiblings": true,
        "vars": "all"
    }],
    "no-useless-call": "error",
    "no-useless-computed-key": "error",
    "no-useless-constructor": "error",
    "no-useless-escape": "error",
    "no-useless-rename": "error",
    "no-whitespace-before-property": "error",
    "no-with": "error",
    "object-property-newline": ["error", { "allowMultiplePropertiesPerLine": true }],
    "one-var": ["error", { "initialized": "never" }],
    "operator-linebreak": ["error", "after", { "overrides": { "?": "before", ":": "before", "|>": "before" } }],
    "padded-blocks": ["error", { "blocks": "never", "switches": "never", "classes": "never" }],
    "quotes": ["error", "single", { "avoidEscape": true, "allowTemplateLiterals": false }],
    "rest-spread-spacing": ["error", "never"],
    "semi-spacing": ["error", { "before": false, "after": true }],
    "space-before-blocks": ["error", "always"],
    "space-before-function-paren": ["error", "always"],
    "space-in-parens": ["error", "never"],
    "space-infix-ops": "error",
    "space-unary-ops": ["error", { "words": true, "nonwords": false }],
    "spaced-comment": ["error", "always", {
        "line": { "markers": ["*package", "!", "/", ",", "="] },
        "block": { "balanced": true, "markers": ["*package", "!", ",", ":", "::", "flow-include"], "exceptions": ["*"] }
    }],
    "template-curly-spacing": ["error", "never"],
    "use-isnan": ["error", {
        "enforceForSwitchCase": true,
        "enforceForIndexOf": true
    }],
    "valid-typeof": ["error", { "requireStringLiterals": true }],
    "wrap-iife": ["error", "any", { "functionPrototypeMethods": true }],
    "yield-star-spacing": ["error", "both"],
    "yoda": ["error", "never"],
}
export class EslintHelper {
    // TODO: performance issue: Run identifyRule loop outside of each rule
    static identifyRule(ruleId: string, ruleFlow: MessageType, eslint: ESLint.LintResult[], rulePrefix: string | null = null) {
        const ruleMessages: Message[] = [];
        const errorMessages = eslint.reduce<Message[]>((messages, item) =>  {
            const errorMessages = item.messages.filter(x => x.ruleId === `${rulePrefix ? rulePrefix + '/' : ''}${ruleId}`);
            messages.push(...errorMessages.map(error =>  Message.create(`${error.message}. Rule: ${error.ruleId}. Line ${error.line}. File ${path.basename(item.filePath)}`, ruleFlow)))
            return messages;
        }, []);
        if (errorMessages.length === 0) {
            ruleMessages.push(Message.create(`Rule ${ruleId} is passed`, MessageType.passed))
        } else {
            ruleMessages.push(...errorMessages);
        }
        return ruleMessages;
    }

    static async getEslintResult(sources: SourceModel[]): Promise<ESLint.LintResult[]> {
        if (sources.length === 0) {
            return Promise.resolve([]);
        }
        const conf = defineConfig({
            plugins: {
                'sonarjs': sonarjs,
                'security': security
            },
            // @ts-ignore
            rules: {
                ...eslintRules,
                ...security.configs.recommended.rules,
                ...sonarjs.configs.recommended.rules,
            }
        })
        const eslint = new ESLint({
            overrideConfigFile: true,
            baseConfig: conf,
        });


        const eslintResult: ESLint.LintResult[] = [];
        const urlFileList = sources.filter(x => x.isURL);
        const staticFileList = sources.filter(x => !x.isURL)
        const urlFilesContent = urlFileList.map(async (x) => await URLUtils.download(x.url))

        if (urlFilesContent.length !== 0) {
            for (const urlFile of urlFilesContent) {
                const index = urlFilesContent.indexOf(urlFile);
                const lintFileResult = await eslint.lintText(await urlFile, {
                    filePath: urlFileList[index].file.filename
                });
                eslintResult.push(...lintFileResult);
            }
        }

        if (staticFileList.length !== 0) {
            eslintResult.push(...await eslint.lintFiles(staticFileList.map(x=> x.file.absolutePath)));
        }
        return eslintResult;

    }
    static async getJavaScriptFiles(source: SourceModel): Promise<SourceModel[]> {
        const jsFiles: SourceModel[] = [];

        if(!source.isURL) {
            const files = globSync(`${source.file.dir}/**/*.js`);
            jsFiles.push(...files.map((file) => SourceModel.create(file)))
        }

        if (source.isURL) {
            const dom = await CheerioUtils.getDOM(source);
            dom('script').each((i, elem) => {
                const src = dom(elem).attr('src');
                if (src) {
                    if (src?.startsWith("http") || src?.startsWith("https")) {
                        jsFiles.push(SourceModel.create(src));
                    } else {
                        const prefixPath = source.isURL ? source.url : source.file.dir;
                        jsFiles.push(SourceModel.create(`${prefixPath}/${src}`));
                    }
                }
            });
        }
        return jsFiles;
    }

}