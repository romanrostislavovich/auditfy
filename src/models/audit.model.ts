import {CheerioAPI} from "cheerio";
import { File } from './file.model';
import {Message} from "./message.model";
import {RunnerResult} from "lighthouse";
import {Result} from "html-validate";


export abstract class Audit {
    dom!: CheerioAPI;
    file!: File;
    name!: string;
    description!: string;
    lighthouse!: RunnerResult;
    htmlValidator!: Result[];

    abstract  check(): Promise<Message[]>;
}