import {Message} from "../../../models/message.model";
import {MessageType} from "../../../enum/message.enum";
import {RuleInterface} from "../../../models/rule.model";
import {CheerioAPI} from "cheerio";
import {Result as AuditResult} from "lighthouse/types/lhr/audit-result";
import {LightHouseAuditType} from "../../../types/modules.type";
import {LighthouseHelper} from "../../../linters/lighthouse.helper";

export class CrawlableAnchorsRule implements RuleInterface {
    dom: CheerioAPI;
    id: string = 'crawlable-anchors';
    tags: string[] = ['html', 'seo'];
    ruleFlow!: MessageType;
    lightHouse: LightHouseAuditType;
    description: string = 'Links are crawlable';
    ruleUrl: string = 'https://support.google.com/webmasters/answer/9112205';

    constructor(dom: CheerioAPI, lightHouse: Record<string, AuditResult>) {
        this.dom = dom;
        this.lightHouse = lightHouse;
    }

    check(): Message[] {
        return LighthouseHelper.identifyRule(this.id, this.ruleFlow, this.lightHouse);
    }
}




