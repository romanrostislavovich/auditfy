import {Message} from "../models/message.model";
import {MessageType} from "../enum/message.enum";
import {Result} from "html-validate";
import {LightHouseAuditType} from "../types/modules.type";

export class LighthouseHelper {
    static identifyRule(ruleId: string, ruleFlow: MessageType, lighthouse: LightHouseAuditType, minScore = 0.9) {
        const ruleResult = lighthouse[ruleId];
        const ruleScore = ruleResult.score || 0;
        return [
            ruleScore >= minScore || ruleScore === 0 || ruleScore === null
                ? Message.create(`Rule ${ruleId} is passed`, MessageType.passed)
                : Message.create(`${ruleResult.errorMessage || ruleResult.description}. Rule ${ruleId} score is ${ruleScore}`,ruleFlow)

        ];
    }
}