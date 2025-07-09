import {Message} from "../../../models/message.model";
import {MessageType} from "../../../enum/message.enum";
import {Rule} from "../../../models/rule.model";
import {CheerioAPI} from "cheerio";

export class TwitterRule extends Rule<CheerioAPI>{
    value: CheerioAPI;
    ruleFlow: MessageType = MessageType.error;
    description: string = 'Twitter tag';

    private twitterTags = [
        'twitter:card',
        'twitter:site',
        'twitter:creator'
    ];
    constructor(value: CheerioAPI) {
        super()
        this.value = value;
    }

    private checkMetaTags() {
        return this.twitterTags.reduce<Message[]>((messages, tag) => {
            const meta = this.value(`meta[property="${tag}"], meta[name="${tag}"]`);
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
    }

    check(): Message[] {
        return [
            ...this.checkMetaTags()
        ]
    }
}





