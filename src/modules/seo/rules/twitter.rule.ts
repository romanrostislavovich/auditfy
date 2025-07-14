import {Message} from "../../../models/message.model";
import {MessageType} from "../../../enum/message.enum";
import {LightHouseAuditType, RuleInterface} from "../../../models/rule.model";
import {CheerioAPI} from "cheerio";
import {Result as AuditResult} from "lighthouse/types/lhr/audit-result";

export class TwitterRule implements RuleInterface{
    dom: CheerioAPI;
    ruleFlow: MessageType = MessageType.error;
    lightHouse: LightHouseAuditType;
    description: string = 'Twitter';
    ruleUrl: string = 'https://developer.x.com/en/docs/x-for-websites/cards/guides/getting-started';

    private twitterTags = [
        'twitter:card',
        'twitter:site',
        'twitter:creator'
    ];
    constructor(value: CheerioAPI, lightHouse: Record<string, AuditResult>) {
        this.dom = value;
        this.lightHouse = lightHouse;
    }

    private checkMetaTags() {
        return this.twitterTags.reduce<Message[]>((messages, tag) => {
            const meta = this.dom(`meta[property="${tag}"], meta[name="${tag}"]`);
            if (meta.length > 0) {
                messages.push(
                    Message.create(`${this.description} ${tag} found`,MessageType.passed)
                )
            } else {
                messages.push(
                    Message.create(`${this.description} ${tag} missing`,MessageType.error)
                )
            }
            return messages;
        }, []);
    }

    check(): Message[] {
        return [
            ...this.checkMetaTags()
        ]
    }
}





