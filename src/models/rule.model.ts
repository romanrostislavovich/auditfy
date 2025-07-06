import {Message} from "./message.model";
import {MessageType} from "../enum/message.enum";

export abstract class Rule<T> {
    abstract value: T;
    abstract ruleFlow: MessageType;
    abstract description: string;

    abstract check(): Message[];
}