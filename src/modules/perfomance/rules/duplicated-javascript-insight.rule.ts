import { RuleInterface} from "../../../models/rule.model";
import {Message} from "../../../models/message.model";
import {MessageType} from "../../../enum/message.enum";
import {Result as AuditResult} from "lighthouse/types/lhr/audit-result";
import {CheerioAPI} from "cheerio";
import {LightHouseAuditType} from "../../../types/modules.type";
import {LighthouseHelper} from "../../../linters/lighthouse.helper";

export class DuplicatedJavascriptInsightRule  implements RuleInterface {
    dom: CheerioAPI;
    id: string = 'duplicated-javascript-insight'
    tags: string[] = ['performance'];
    ruleFlow!: MessageType;
    lightHouse: LightHouseAuditType;
    description: string = 'Duplicated javascript code';
    ruleUrl: string = '';

    constructor(dom: CheerioAPI, lightHouse: LightHouseAuditType) {
        this.dom = dom;
        this.lightHouse = lightHouse;
    }

    check(): Message[] {
        return LighthouseHelper.identifyRule(this.id, this.ruleFlow, this.lightHouse);
    }
}