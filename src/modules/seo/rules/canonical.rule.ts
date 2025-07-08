import {Message} from "../../../models/message.model";
import {MessageType} from "../../../enum/message.enum";
import {Rule} from "../../../models/rule.model";
import {CheerioAPI} from "cheerio";

export class CanonicalRule extends Rule<CheerioAPI>{
    value: CheerioAPI;
    ruleFlow: MessageType = MessageType.error;
    description: string = 'Canonical tag';

    constructor(value: CheerioAPI) {
        super()
        this.value = value;
    }

    check(): Message[] {
        const canonical = this.value('link[rel="canonical"]').attr('href');
        const present = !!canonical;
        const notLocalhost =  present && !canonical?.includes('localhost')
        return [
            Message.create(
                `${this.description} is not localhost`,
                notLocalhost ? MessageType.passed : MessageType.error
            ),
            Message.create(
                `${this.description} is ${present ? 'present' : 'missing'}`,
                present ? MessageType.passed : MessageType.error
            )
        ]
    }
}