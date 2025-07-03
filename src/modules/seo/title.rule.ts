import {Message} from "../../models/message.model";
import {MessageType} from "../../enum/message.enum";

export class TitleRule {
    name: string = 'Title tag';
    value: string;

    constructor(value: string) {
        this.value = value;
    }

    check(): Message[] {
        const present = !!this.value && this.value.length <= 60;
        return [Message.create(
            `${this.name} is ${present ? 'present' : 'missing'}`,
            present ? MessageType.passed : MessageType.error
        )]
    }
}