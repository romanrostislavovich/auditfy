import {Message} from "../../../models/message.model";
import {MessageType} from "../../../enum/message.enum";
import {Rule} from "../../../models/rule.model";
import {CheerioAPI} from "cheerio";

export class TitleRule extends Rule<CheerioAPI>{
    value: CheerioAPI;
    ruleFlow: MessageType = MessageType.error;
    description: string = 'Title tag';

    constructor(value: CheerioAPI) {
        super()
        this.value = value;
    }

    check(): Message[] {
        const value =  this.value('title').text();
        const length = value.length <= 60;
        const present = !!value;
        return [
            Message.create(
            `${this.description} is ${present ? 'present' : 'missing'}`,
            present ? MessageType.passed : MessageType.error
            ),
            Message.create(
                `${this.description} length less 60 characters long`,
                length ? MessageType.passed : MessageType.error
            )
        ]
    }
}