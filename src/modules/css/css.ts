import * as stylelint from 'stylelint';
import {Message} from "../../models/message.model";
import {CheerioAPI} from "cheerio";
import {Audit} from "../../models/audit.model";
import {RunnerResult} from "lighthouse";
import {Result} from "html-validate";
import {SourceModel} from "../../models/source.model";
import {IConfig} from "../../config/default";
import {RuleInterface} from "../../models/rule.model";
import chalk from "chalk";
import {StylelintHelper} from "../../linters/stylelint.helper";
import { RuleInstanceListType} from "../../types/rule.type";
import {ESLint} from "eslint";

export class CssAudit extends Audit {
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
        this.name = 'CSS';
        this.config = config;
        this.source = source;
        this.eslint = eslint;
        this.lighthouse = lightHouse;
        this.htmlValidator = htmlValidator;
    }

   async check(): Promise<Message[]> {
       const cssFiles = StylelintHelper.getCSSFiles(this.source, this.dom);
       const ruleImportList = await this.getRuleImportList(__dirname);
       const styleLintResult = await StylelintHelper.getStyleLintResult(cssFiles);

       const ruleInstanceList = ruleImportList.reduce<RuleInstanceListType>((list, rule: any) => {
           const instance = new rule(this.dom, this.lighthouse.lhr.audits, this.htmlValidator, styleLintResult);
           list[instance.id] = instance;
           return list;
       }, {})

       return this.runRules(ruleInstanceList);
    }
}
