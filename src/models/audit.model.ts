import {CheerioAPI} from "cheerio";
import { File } from './file.model';
import {Message} from "./message.model";
import {RunnerResult} from "lighthouse";
import {Result} from "html-validate";
import {SourceModel} from "./source.model";
import {IConfig, RuleTypes} from "../config/default";
import fs from "node:fs";
import {RuleInterface} from "./rule.model";
import chalk from "chalk";
import { RuleInstanceListType} from "../types/rule.type";
import {ESLint} from "eslint";


export abstract class Audit {
    dom!: CheerioAPI;
    name!: string;
    config!: IConfig;
    source!: SourceModel;
    eslint!: ESLint.LintResult[];
    lighthouse!: RunnerResult;
    description!: string;
    htmlValidator!: Result[];

    abstract  check(): Promise<Message[]>;

    getConfigRules(): RuleTypes {
        const seoConfigModule = Object.entries(this.config.modules).find((item) => item[0].toUpperCase() === this.name.toUpperCase());
        return !!seoConfigModule ? seoConfigModule[1] : {};
    }

    async getRuleImportList(dir: string): Promise<RuleInterface[]> {
        const ruleImportList = []

        const fileList = fs.readdirSync(dir +'/rules').filter(file => file.endsWith(".js"));

        for(let file of fileList) {
            const fileJS = await import(dir + '/rules/' + file);
            const firstExportName = Object.keys(fileJS)[0];
            ruleImportList.push(fileJS[firstExportName])
        }
        return ruleImportList;
    }

    runRules(ruleInstanceList: RuleInstanceListType): Message[] {
        const result: Message[] = [];
        for(const [rule, flow] of Object.entries(this.getConfigRules())) {
            try {
                const instance = ruleInstanceList[rule];
                instance.ruleFlow = flow;
                result.push(...instance.check())
            } catch (e) {
                console.log( `\n${chalk.red('✘')} can't find rule  ${rule} on ${this.name} module`)
            }
        }
        return result;
    }
}