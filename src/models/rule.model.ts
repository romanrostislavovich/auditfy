import {Message} from "./message.model";
import {MessageType} from "../enum/message.enum";
import {Result as AuditResult} from "lighthouse/types/lhr/audit-result";
import {CheerioAPI} from "cheerio";
import {Result} from "html-validate";
import {LightHouseAuditType} from "../types/modules.type";
import {ESLint} from "eslint";
import { AxeResults} from 'axe-core';

export enum RuleModule {
    SEO = 'SEO',
    SECURITY = 'Security',
    PERFORMANCE = 'Performance',
    LANGUAGE = 'Language',
    ACCESSIBILITY = 'Accessibility'
}

export enum RuleLanguage {
    CSS = 'CSS',
    HTML = 'HTML',
    SCSS = 'SCSS',
    SASS = 'SASS',
    JAVASCRIPT = "JavaScript",
    TYPESCRIPT = 'TypeScript',
}

export enum RuleMode {
    PRODUCTION = 'production',
    DEVELOPMENT = 'development',
    RELEASE = 'release',
    TESTING = 'testing'
}

export enum RuleSource {
    EsLint = 'EsLint',
    AxeCore = 'AxeCore',
    HtmlValidator = 'HTMLValidator',
    StyleLint = 'StyleLint'
}

export type lintersResults = {
    EsLint?: ESLint.LintResult[];
    StyleLint?: ESLint.LintResult[];
    HTMLValidator?: Result[];
    cheerioDOM?: CheerioAPI;
    AxeCore?: AxeResults;
}

export type RuleInformation = {
    configurable?: boolean;
    defaultBehavior?: MessageType;
    mode?: RuleMode[];
    module?: RuleModule[];
    language?:RuleLanguage[];
    tags?: string[];
    ruleUrl?: string;
    description?: string;
    deprecated?: boolean;
}

export interface RuleInterface {
    id: string;
    ruleFlow: MessageType;
    ruleSource: RuleSource;
    ruleSourceId?: string;
    lintersResults: lintersResults;
    ruleInformation?: RuleInformation;
    check(): Message[];
}


