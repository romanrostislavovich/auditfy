import {Message} from "../../../models/message.model";
import {MessageType} from "../../../enum/message.enum";
import {Rule} from "../../../models/rule.model";

export class DescriptionRule extends Rule<string> {
    value: string;
    ruleFlow: MessageType = MessageType.error;
    description: string = 'Meta description';

    constructor(value: string = '') {
        super()
        this.value = value;
    }

    check(): Message[] {
        const present = !!this.value;
        return [Message.create(
            `${this.description} tag is ${present ? 'present' : 'missing'}`,
            present ? MessageType.passed : MessageType.error
        )]
    }
}