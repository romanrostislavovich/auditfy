import {Message} from "../../../models/message.model";
import {MessageType} from "../../../enum/message.enum";
import {Rule} from "../../../models/rule.model";

export class TitleRule extends Rule<string>{
    value: string;
    ruleFlow: MessageType = MessageType.error;
    description: string = 'Title tag';

    constructor(value: string) {
        super()
        this.value = value;
    }

    check(): Message[] {
        const present = !!this.value && this.value.length <= 60;
        return [Message.create(
            `${this.description} is ${present ? 'present' : 'missing'}`,
            present ? MessageType.passed : MessageType.error
        )]
    }
}