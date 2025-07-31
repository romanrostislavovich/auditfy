
import { RuleInterface} from "../../../models/rule.model";
import {Message} from "../../../models/message.model";
import {MessageType} from "../../../enum/message.enum";
import {Result as AuditResult} from "lighthouse/types/lhr/audit-result";
import {CheerioAPI} from "cheerio";
import {Result} from "html-validate";
import {LightHouseAuditType} from "../../../types/modules.type";

export class WcagH37Rule implements RuleInterface {
    id: string = 'wcag-h37';
    dom: CheerioAPI;
    tags: string[] = ['html'];
    lightHouse: LightHouseAuditType;
    ruleFlow: MessageType = MessageType.warning;
    htmlValidator: Result[];
    description: string = 'WCAG H37: Using alt attributes on img elements';
    ruleUrl: string = 'https://html-validate.org//rules/wcag/h37.html';

    constructor(dom: CheerioAPI, lightHouse: LightHouseAuditType, htmlValidator: Result[]) {
        this.dom = dom;
        this.lightHouse = lightHouse;
        this.htmlValidator = htmlValidator;
    }

    check(): Message[] {
        const results = this.htmlValidator.reduce<Message[]>((messages, item) => {
            const existingMiss: Message[] = item.messages
                .filter(x => x.ruleId === this.id)
                .map((x) => Message.create(`${x.message} at line ${x.line}`, MessageType.warning))
            messages.push(...existingMiss)
            return messages;
        }, [])
        return results;
    }
}
