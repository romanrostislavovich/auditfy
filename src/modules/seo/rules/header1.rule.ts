import {Message} from "../../../models/message.model";
import {MessageType} from "../../../enum/message.enum";
import {Rule} from "../../../models/rule.model";

export class Header1Rule extends Rule<number>{
    value: number;
    ruleFlow: MessageType = MessageType.error;
    description: string = 'H1 tag';


    constructor(value: number = 0) {
        super()
        this.value = value;
    }

    check(): Message[] {
        const present = this.value === 0;
        return [Message.create(
            `${this.description} is ${present ? 'present' : 'missing'}`,
            present ? MessageType.passed : MessageType.error
        )]
    }
}