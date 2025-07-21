import { RuleInterface} from "../../../models/rule.model";
import {Message} from "../../../models/message.model";
import {MessageType} from "../../../enum/message.enum";
import {Result as AuditResult} from "lighthouse/types/lhr/audit-result";
import {CheerioAPI} from "cheerio";
import {Result} from "html-validate";
import {LightHouseAuditType} from "../../../types/modules.type";

export class RequireCspNonceRule  implements RuleInterface {
    id: string =  'require-csp-nonce';
    dom: CheerioAPI;
    tags: string[] = ['html', 'security'];
    ruleUrl: string = 'https://html-validate.org/rules/require-csp-nonce.html';
    ruleFlow: MessageType = MessageType.warning;
    lightHouse: LightHouseAuditType;
    description: string = 'Content Security Policy';
    htmlValidator: Result[];

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