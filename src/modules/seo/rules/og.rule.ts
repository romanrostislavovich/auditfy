import {Message} from "../../../models/message.model";
import {MessageType} from "../../../enum/message.enum";
import { RuleInterface} from "../../../models/rule.model";
import {CheerioAPI} from "cheerio";
import {Result as AuditResult} from "lighthouse/types/lhr/audit-result";
import {LightHouseAuditType} from "../../../types/modules.type";

export class OgRule implements RuleInterface {
    dom: CheerioAPI;
    id: string = 'meta-og-present';
    tags: string[] = ['html', 'seo'];
    ruleFlow: MessageType = MessageType.error;
    lightHouse: LightHouseAuditType;
    description: string = 'OG tags are present';
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
                    Message.create(`${tag} missing`,MessageType.warning)
                )
            }
            return messages;
        }, []);
        return [...results]
    }
}



