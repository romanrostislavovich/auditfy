import {Audit} from "../../models/audit.model";
import {File} from "../../models/file.model";
import {CheerioAPI} from "cheerio";
import {RunnerResult} from "lighthouse";
import {Message} from "../../models/message.model";
import { Result} from "html-validate";
import {RequireCspNonceRule} from "./rules/require-csp-nonce.rule";
import {RequireSriRule} from "./rules/require-sri.rule";
import {SourceModel} from "../../models/source.model";
import {ESLint} from "eslint";
import * as pluginSecurity from "eslint-plugin-security";
import {MessageType} from "../../enum/message.enum";
import {URLUtils} from "../../utils/url.utils";
import path from "node:path";
import {glob, globSync} from "glob";
import {RuleInterface} from "../../models/rule.model";
import chalk from "chalk";
import {IConfig} from "../../config/default";
import {EslintHelper} from "../../linters/eslint.helper";

export class SecurityModule extends Audit {
    constructor(
        source: SourceModel,
        config: IConfig,
        dom: CheerioAPI,
        lightHouse: RunnerResult,
        htmlValidator: Result[],
        eslint: ESLint.LintResult[],
    ) {
        super();
        this.dom = dom;
        this.name = 'Security';
        this.config = config;
        this.source = source;
        this.eslint = eslint;
        this.lighthouse = lightHouse;
        this.htmlValidator = htmlValidator;
    }



    async check(): Promise<Message[]> {
        const ruleImportList = await this.getRuleImportList(__dirname);


        const ruleInstanceList = ruleImportList.reduce<{[key: string]: RuleInterface }>((list, rule: any) => {
            const instance = new rule(this.dom, this.lighthouse.lhr.audits, this.htmlValidator, this.eslint);
            list[instance.id] = instance;
            return list;
        }, {})

        return this.runRules(ruleInstanceList)
    }





}