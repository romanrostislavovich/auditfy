import { RuleInterface} from "../../../models/rule.model";
import {Message} from "../../../models/message.model";
import {MessageType} from "../../../enum/message.enum";
import {Result as AuditResult} from "lighthouse/types/lhr/audit-result";
import {CheerioAPI} from "cheerio";
import {LightHouseAuditType} from "../../../types/modules.type";
import {LighthouseHelper} from "../../../linters/lighthouse.helper";

export class ClsCulpritsInsightRule  implements RuleInterface {
    dom: CheerioAPI;
    id: string = 'cls-culprits-insight'
    tags: string[] = ['performance'];
    ruleFlow!: MessageType;
    lightHouse: LightHouseAuditType;
    description: string = 'Layout shifts occur when elements move absent any user interaction. [Investigate the causes of layout shifts]';
    ruleUrl: string = 'https://web.dev/articles/optimize-cls';

    constructor(dom: CheerioAPI, lightHouse: LightHouseAuditType) {
        this.dom = dom;
        this.lightHouse = lightHouse;
    }

    check(): Message[] {
        return LighthouseHelper.identifyRule(this.id, this.ruleFlow, this.lightHouse);
    }
}