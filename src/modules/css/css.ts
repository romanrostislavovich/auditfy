import * as stylelint from 'stylelint';
import {Message} from "../../models/message.model";
import {MessageType} from "../../enum/message.enum";
import {readFile} from "fs/promises";
import * as cheerio from "cheerio";
import { File } from '../../models/file.model';
import {CheerioAPI} from "cheerio";
import {Audit} from "../../models/audit.model";
import {RunnerResult} from "lighthouse";
import {Result} from "html-validate";
import {ClassPatternRule} from "./rules/class-pattern.rule";
import {IdPatternRule} from "./rules/id-pattern.rule";
import {NoInlineStyleRule} from "./rules/no-inline-style.rule";
import {NoStyleTagRule} from "./rules/no-style-tag.rule";

export class CssAudit extends Audit {
    constructor(file:File, dom: CheerioAPI, lightHouse: RunnerResult, htmlValidator: Result[]) {
        super();
        this.dom = dom;
        this.file = file;
        this.lighthouse = lightHouse;
        this.htmlValidator = htmlValidator;
        this.name = "CSS"
    }

   async check(): Promise<Message[]> {
       const cssFiles: string[] = [];
       this.dom('link[rel="stylesheet"]').each((i, elem) => {
           const href = this.dom(elem).attr('href');
           if (href) {
               cssFiles.push(`${this.file.dir}/${href}`);
           }
       });
       const options: stylelint.LinterOptions = {
           files: cssFiles,
           config: {
               extends: "stylelint-config-standard",
           },
       }

       const linterResult = await  stylelint.lint(options);
       const messages = linterResult.results.reduce<Message[]>((m, item) => {
           m.push(...item.parseErrors.map(x => Message.create(`${x.text} at line ${x.line}`, MessageType.warning)))
           m.push(...item.warnings.map(x => Message.create(`${x.text} at line ${x.line}. Rule ${x.rule}`, MessageType.warning)))
           return m;
       },[])

       const rules = [
           IdPatternRule,
           NoStyleTagRule,
           ClassPatternRule,
           NoInlineStyleRule,
       ]

       const htmlStyles = rules.reduce<Message[]>((messages, rule, i) => {
           const instance = new rule(this.dom, this.lighthouse.lhr.audits, this.htmlValidator);
           messages.push(...instance.check());
           return messages;
       }, []);
       messages.push(...htmlStyles);
       return messages;
    }
}
