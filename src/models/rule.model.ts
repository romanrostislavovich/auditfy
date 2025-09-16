import {Message} from "./message.model";
import {MessageType} from "../enum/message.enum";
import {Result as AuditResult} from "lighthouse/types/lhr/audit-result";
import {CheerioAPI} from "cheerio";
import {Result} from "html-validate";
import {LightHouseAuditType} from "../types/modules.type";
import {ESLint} from "eslint";

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

export interface RuleInterface {
    id: string;
    dom: CheerioAPI;
    tags?: string[];
    ruleFlow: MessageType;
    ruleUrl?: string;
     lightHouse: LightHouseAuditType;
    description: string;
    htmlValidator?: Result[];
    eslint?: ESLint.LintResult[];
    configurable?: boolean;
    recommended?: boolean;
    mode?: RuleMode[];
    module?: RuleModule[];
    language?:RuleLanguage[];

    check(): Message[];
}


