import {Message} from "../../../models/message.model";
import {MessageType} from "../../../enum/message.enum";
import {Rule} from "../../../models/rule.model";
import {CheerioAPI} from "cheerio";

export class JsonLdRule extends Rule<CheerioAPI>{
    value: CheerioAPI;
    ruleFlow: MessageType = MessageType.error;
    description: string = 'Structured data';

    constructor(value: CheerioAPI) {
        super()
        this.value = value;
    }

    check(): Message[] {
        const structuredData = this.value('script[type="application/ld+json"]');
        const present = structuredData.length;
        return [
            Message.create(
                `${present} structured data block(s) found`,
                present > 0 ? MessageType.passed : MessageType.error
            )
        ]
    }
}