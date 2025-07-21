import {Message} from "./message.model";
import {MessageType} from "../enum/message.enum";
import {Result as AuditResult} from "lighthouse/types/lhr/audit-result";
import {CheerioAPI} from "cheerio";
import {Result} from "html-validate";
import {LightHouseAuditType} from "../types/modules.type";


export interface RuleInterface {
    id: string;
    dom: CheerioAPI;
    tags?: string[];
    ruleFlow: MessageType;
    ruleUrl?: string;
    lightHouse: LightHouseAuditType;
    description: string;
    htmlValidator?: Result[];

    check(): Message[];
}


