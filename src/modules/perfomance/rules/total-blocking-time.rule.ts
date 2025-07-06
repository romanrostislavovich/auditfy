import {Rule} from "../../../models/rule.model";
import {Message} from "../../../models/message.model";
import {MessageType} from "../../../enum/message.enum";
import {Result as AuditResult} from "lighthouse/types/lhr/audit-result";

export default class TotalBlockingTimeRule extends Rule<Record<string, AuditResult>> {
    value:  Record<string, AuditResult>;
    ruleFlow: MessageType = MessageType.error;
    description: string = 'Total blocking time';

    constructor(value:  Record<string, AuditResult>) {
        super();
        this.value = value;
    }

    check(): Message[] {
        const score = this.value['total-blocking-time'].score || 0;
        return [
            Message.create(
                `${this.description} score is ${score}`,
                score >= 0.9 ? MessageType.passed : MessageType.error
            )
        ];
    }
}