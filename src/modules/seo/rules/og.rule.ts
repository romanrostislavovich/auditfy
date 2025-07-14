import {Message} from "../../../models/message.model";
import {MessageType} from "../../../enum/message.enum";
import {LightHouseAuditType, RuleInterface} from "../../../models/rule.model";
import {CheerioAPI} from "cheerio";
import {Result as AuditResult} from "lighthouse/types/lhr/audit-result";

export class OgRule implements RuleInterface {
    dom: CheerioAPI;
    ruleFlow: MessageType = MessageType.error;
    lightHouse: LightHouseAuditType;
    description: string = 'OG tag';
    ruleUrl: string = 'https://ogp.me/';

    private ogTags = [
        'og:title',
        'og:description',
        'og:image',
        'og:url',
    ];

    constructor(dom: CheerioAPI, lightHouse: Record<string, AuditResult>) {
        this.dom = dom;
        this.lightHouse = lightHouse;
    }

    check(): Message[] {
        const results =  this.ogTags.reduce<Message[]>((messages, tag) => {
            const meta = this.dom(`meta[property="${tag}"], meta[name="${tag}"]`);
            if (meta.length > 0) {
                messages.push(
                    Message.create(`${tag} found`,MessageType.passed)
                )
            } else {
                messages.push(
                    Message.create(`${tag} missing`,MessageType.error)
                )
            }
            return messages;
        }, []);
        return [...results]
    }
}



