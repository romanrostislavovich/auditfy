import {CheerioAPI} from "cheerio";
import { File } from './file.model';
import {Message} from "./message.model";
import {RunnerResult} from "lighthouse";

export abstract class Audit {
    dom!: CheerioAPI;
    file!: File;
    name!: string;
    lighthouse!: RunnerResult;

    abstract  check(): Promise<Message[]>;
}