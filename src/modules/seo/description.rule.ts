import {Message} from "../../models/message.model";
import {MessageType} from "../../enum/message.enum";

export class DescriptionRule {
    name: string = 'Meta description tag';
    value: string;
    
    constructor(value: string = '') {
        this.value = value;
    }

    check(): Message[] {
        const present = !!this.value;
        return [Message.create(
            `${this.name} is ${present ? 'present' : 'missing'}`,
            present ? MessageType.passed : MessageType.error
        )]
    }
}