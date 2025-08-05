import {CheerioAPI} from "cheerio";
import { File } from './file.model';
import {Message} from "./message.model";
import {RunnerResult} from "lighthouse";
import {Result} from "html-validate";
import {SourceModel} from "./source.model";
import {IConfig} from "../config/default";


export abstract class Audit {
    dom!: CheerioAPI;
    name!: string;
    config!: IConfig;
    source!: SourceModel;
    description!: string;
    lighthouse!: RunnerResult;
    htmlValidator!: Result[];

    abstract  check(): Promise<Message[]>;
}