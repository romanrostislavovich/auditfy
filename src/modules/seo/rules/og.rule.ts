import {Message} from "../../../models/message.model";
import {MessageType} from "../../../enum/message.enum";
import {Rule} from "../../../models/rule.model";
import {CheerioAPI} from "cheerio";

export class OgRule extends Rule<CheerioAPI>{
    value: CheerioAPI;
    ruleFlow: MessageType = MessageType.error;
    description: string = 'OG tag';

    private ogTags = [
        'og:title',
        'og:description',
        'og:image',
        'og:url',
    ];
    constructor(value: CheerioAPI) {
        super()
        this.value = value;
    }

    private checkMetaTags() {

    }

    check(): Message[] {
        const results =  this.ogTags.reduce<Message[]>((messages, tag) => {
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
        return [
            ...results
        ]
    }
}



const twitterTags = [
    'twitter:card',
    'twitter:title',
    'twitter:description',
    'twitter:image',
    'twitter:site',
    'twitter:creator'
];

