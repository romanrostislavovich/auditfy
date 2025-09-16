import {SourceModel} from "../models/source.model";
import * as cheerio from "cheerio";
import {readFile} from "fs/promises";

export class CheerioUtils {
    static async getDOM(source: SourceModel) {
        return  source.isURL ?
            await cheerio.fromURL(source.url) :
            cheerio.load(await readFile(source.file.relativePath, 'utf-8'));
    }
}