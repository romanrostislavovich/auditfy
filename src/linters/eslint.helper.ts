import {Message} from "../models/message.model";
import {MessageType} from "../enum/message.enum";
import {ESLint} from "eslint";

export class EslintHelper {
    // TODO: performance issue: Run identifyRule loop outside of each rule
    static identifyRuleSecurity(ruleId: string, ruleFlow: MessageType, eslint: ESLint.LintResult[]) {
        const ruleMessages: Message[] = [];
        const errorMessages = eslint.reduce<Message[]>((messages, item) =>  {
            const errorMessages = item.messages.filter(x => x.ruleId === `security/${ruleId}`);
            messages.push(...errorMessages.map(error =>  Message.create(`${error.message}. Rule: ${error.ruleId}. Line ${error.line}. File ${item.filePath}`, ruleFlow)))
            return messages;
        }, []);
        if (errorMessages.length === 0) {
            ruleMessages.push(Message.create(`Rule ${ruleId} is passed`, MessageType.passed))
        } else {
            ruleMessages.push(...errorMessages);
        }
        return ruleMessages;
    }
}