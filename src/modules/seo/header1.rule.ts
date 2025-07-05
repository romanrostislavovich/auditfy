import {Message} from "../../models/message.model";
import {MessageType} from "../../enum/message.enum";

export class Header1Rule {
    name: string = 'H1 tag';
    value: number;

    constructor(value: number = 0) {
        this.value = value;
    }

    check(): Message[] {
        const present = this.value === 0;
        return [Message.create(
            `${this.name} is ${present ? 'present' : 'missing'}`,
            present ? MessageType.passed : MessageType.error
        )]
    }
}