import {MessageType} from "../enum/message.enum";
import {Message} from "../models/message.model";
import {AxeResults} from "axe-core";

export class AxeCoreHelper {
    static identifyRule(ruleId: string, ruleFlow: MessageType, axeResults:  AxeResults) {
        const existingMiss = axeResults.violations.filter(x => x.id === ruleId)
        const messageList = existingMiss.length !== 0
            ? existingMiss.map((x) => Message.create(`${x.description}. Rule: ${ruleId}`, ruleFlow))
            : [Message.create(`Rule ${ruleId} is passed`, MessageType.passed)]
        return messageList;
    }
}