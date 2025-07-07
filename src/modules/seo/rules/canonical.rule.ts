import {Message} from "../../../models/message.model";
import {MessageType} from "../../../enum/message.enum";
import {Rule} from "../../../models/rule.model";

export class CanonicalRule extends Rule<string>{
    value: string;
    ruleFlow: MessageType = MessageType.error;
    description: string = 'Canonical tag';

    constructor(value: string = '') {
        super()
        this.value = value;
    }

    check(): Message[] {
        const present = !!this.value;
        return [
            Message.create(
                `${this.description} is ${present ? 'present' : 'missing'}`,
                present ? MessageType.passed : MessageType.error
            )
        ]
    }
}