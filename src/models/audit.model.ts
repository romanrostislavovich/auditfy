import {CheerioAPI} from "cheerio";
import { File } from './file.model';
import {Message} from "./message.model";

export abstract class Audit {
    dom!: CheerioAPI;
    file!: File;

    abstract  check(): Promise<Message[]>;
}