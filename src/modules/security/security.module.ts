import {Audit} from "../../models/audit.model";
import {File} from "../../models/file.model";
import {CheerioAPI} from "cheerio";
import {RunnerResult} from "lighthouse";
import {Message} from "../../models/message.model";
import { Result} from "html-validate";
import {RequireCspNonceRule} from "./rules/require-csp-nonce.rule";
import {RequireSriRule} from "./rules/require-sri.rule";
import {SourceModel} from "../../models/source.model";

export class SecurityModule extends Audit {
    constructor(source: SourceModel, dom: CheerioAPI, lightHouse: RunnerResult, htmlValidator: Result[]) {
        super();
        this.dom = dom;
        this.source = source;
        this.lighthouse = lightHouse;
        this.htmlValidator = htmlValidator;
        this.name = 'Security';
    }

    async check(): Promise<Message[]> {
        const rules = [
            RequireSriRule,
            RequireCspNonceRule,
        ]

        return rules.reduce<Message[]>((messages, rule, i) => {
            const instance = new rule(this.dom, this.lighthouse.lhr.audits, this.htmlValidator);
            messages.push(...instance.check());
            return messages;
        }, [])
    }
}