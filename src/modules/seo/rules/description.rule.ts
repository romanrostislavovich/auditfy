import {Message} from "../../../models/message.model";
import {MessageType} from "../../../enum/message.enum";
import {Rule} from "../../../models/rule.model";
import {CheerioAPI} from "cheerio";

export class DescriptionRule extends Rule<CheerioAPI> {
    value: CheerioAPI;
    ruleFlow: MessageType = MessageType.error;
    description: string = 'Meta description';

    constructor(value: CheerioAPI) {
        super()
        this.value = value;
    }

    check(): Message[] {
        const metaDescription = this.value('meta[name="description"]').attr('content');
        const present = !!metaDescription;
        return [Message.create(
            `${this.description} tag is ${present ? 'present' : 'missing'}`,
            present ? MessageType.passed : MessageType.error
        )]
    }
}