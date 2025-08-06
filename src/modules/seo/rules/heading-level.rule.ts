import { RuleInterface} from "../../../models/rule.model";
import {Message} from "../../../models/message.model";
import {MessageType} from "../../../enum/message.enum";
import {Result as AuditResult} from "lighthouse/types/lhr/audit-result";
import {CheerioAPI} from "cheerio";
import {Result} from "html-validate";
import {LightHouseAuditType} from "../../../types/modules.type";

export class HeadingLevelRule implements RuleInterface {
    id: string = 'heading-level';
    tags: string[] = ['seo', 'html'];
    dom: CheerioAPI;
    lightHouse: LightHouseAuditType;
    ruleFlow!: MessageType;
    htmlValidator: Result[];
    description: string = 'Require headings to start at h1 and increment by one';
    ruleUrl: string = 'https://html-validate.org/rules/heading-level.html';

    constructor(dom: CheerioAPI, lightHouse: LightHouseAuditType, htmlValidator: Result[]) {
        this.dom = dom;
        this.lightHouse = lightHouse;
        this.htmlValidator = htmlValidator;
    }

    check(): Message[] {
        const results = this.htmlValidator.reduce<Message[]>((messages, item) => {
            const existingMiss: Message[] = item.messages
                .filter(x => x.ruleId === this.id)
                .map((x) => Message.create(`${x.message} at line ${x.line}`, this.ruleFlow))
            messages.push(...existingMiss)
            return messages;
        }, [])
        return results;
    }
}