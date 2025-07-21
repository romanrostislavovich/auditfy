import { RuleInterface} from "../../../models/rule.model";
import {Message} from "../../../models/message.model";
import {MessageType} from "../../../enum/message.enum";
import {Result as AuditResult} from "lighthouse/types/lhr/audit-result";
import {CheerioAPI} from "cheerio";
import {Result} from "html-validate";
import {LightHouseAuditType} from "../../../types/modules.type";

export class VoidStyleRule implements RuleInterface {
    id: string = 'void-style';
    dom: CheerioAPI;
    tags: string[] = ['style', 'html'];
    lightHouse: LightHouseAuditType;
    ruleFlow: MessageType = MessageType.warning;
    htmlValidator: Result[];
    description: string = 'Require a specific style for closing void elements';
    ruleUrl: string = 'https://html-validate.org/rules/void-style.html';

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