import {Message} from "../models/message.model";
import {MessageType} from "../enum/message.enum";
import {Result} from "html-validate";
import {LightHouseAuditType} from "../types/modules.type";
import stylelint from "stylelint";

export class StylelintHelper {
    static identifyRule(ruleId: string, ruleFlow: MessageType, stylelint: stylelint.LinterResult[]) {
        const messages = [];
        const ruleResult = stylelint.reduce<any[]>((l, item) => {
            const rules = item.results.reduce<any[]>((x, rules) => {
                if (!!rules._postcssResult) {
                    x.push(...rules._postcssResult.messages.filter((r) => r.rule === ruleId));
                }
                return x;
            }, [])
            l.push(...rules);
            return l;
        }, [])

        const messageList = ruleResult.length !== 0
            ? ruleResult.map((x) => Message.create(`${x.text} at line ${x.line}. Rule: ${ruleId}`, ruleFlow))
            : [Message.create(`Rule ${ruleId} is passed`, MessageType.passed)]
        messages.push(...messageList)
        return messages;
    }
}