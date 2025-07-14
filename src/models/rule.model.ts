import {Message} from "./message.model";
import {MessageType} from "../enum/message.enum";
import {Result as AuditResult} from "lighthouse/types/lhr/audit-result";
import {CheerioAPI} from "cheerio";

export type LightHouseAuditType =  Record<string, AuditResult>;

export interface RuleInterface {
    dom: CheerioAPI;
    ruleFlow: MessageType;
    ruleUrl?: string;
    lightHouse: LightHouseAuditType;
    description: string;

    check(): Message[];
}

