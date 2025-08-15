import {Message} from "../models/message.model";
import {Result} from "html-validate";
import {MessageType} from "../enum/message.enum";

export class HtmlValidatorUtils {
    // TODO: performance issue: Run identifyRule loop outside of each rule
    static identifyRule(ruleId: string, ruleFlow: MessageType, htmlValidator: Result[]) {
        const results = htmlValidator.reduce<Message[]>((messages, item) => {
            const existingMiss = item.messages.filter(x => x.ruleId === ruleId)
            const messageList = existingMiss.length !== 0
                ? existingMiss.map((x) => Message.create(`${x.message} at line ${x.line}. Rule: ${ruleId}`, ruleFlow))
                : [Message.create(`Rule ${ruleId} is passed`, MessageType.passed)]
            messages.push(...messageList)
            return messages;
        }, [])
        return results;
    }
}