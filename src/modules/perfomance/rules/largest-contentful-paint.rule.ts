import {Rule} from "../../../models/rule.model";
import {Message} from "../../../models/message.model";
import {MessageType} from "../../../enum/message.enum";
import {Result as AuditResult} from "lighthouse/types/lhr/audit-result";

export default class LargestContentfulPaintRule extends Rule<Record<string, AuditResult>> {
    value:  Record<string, AuditResult>;
    ruleFlow: MessageType = MessageType.error;
    description: string = 'LCP';

    constructor(value:  Record<string, AuditResult>) {
        super();
        this.value = value;
    }

    check(): Message[] {
        const score = this.value['largest-contentful-paint'].score || 0;
        return [
            Message.create(
        `${this.description} score is ${score}`,
                score >= 0.9 ? MessageType.passed : MessageType.error
            )
        ];
    }
}