import {Message} from "../../../models/message.model";
import {MessageType} from "../../../enum/message.enum";
import {RuleInterface} from "../../../models/rule.model";
import {CheerioAPI} from "cheerio";
import {Result as AuditResult} from "lighthouse/types/lhr/audit-result";
import {LightHouseAuditType} from "../../../types/modules.type";
import {LighthouseHelper} from "../../../linters/lighthouse.helper";

export class RobotsTxtRule implements RuleInterface {
    dom: CheerioAPI;
    id: string = 'robots-txt';
    tags: string[] = ['html', 'seo'];
    ruleFlow!: MessageType;
    lightHouse: LightHouseAuditType;
    description: string = 'robots.txt is valid';
    ruleUrl: string = 'https://developer.chrome.com/docs/lighthouse/seo/invalid-robots-txt/';

    constructor(dom: CheerioAPI, lightHouse: Record<string, AuditResult>) {
        this.dom = dom;
        this.lightHouse = lightHouse;
    }

    check(): Message[] {
        return LighthouseHelper.identifyRule(this.id, this.ruleFlow, this.lightHouse);
    }
}




