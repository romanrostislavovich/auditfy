import {MessageType} from "../enum/message.enum";

export class Message {
    public message: string;
    public type: MessageType;

    constructor(
        message: string,
        type: MessageType,
    ) {
        this.message = message;
        this.type = type;
    }

    static create(message: string, type: MessageType): Message {
        return new Message(message, type);
    }
}