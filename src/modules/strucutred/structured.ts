import { readFile } from 'fs/promises';
import * as cheerio from 'cheerio';
import {Message} from "../../models/message.model";
import {JsonLdRule} from "./rules/json-ld.rule";
import {CheerioAPI} from "cheerio";

export async function structuredDataAudit(filepath: string): Promise<Message[]> {
    const html = await readFile(filepath, 'utf-8');
    const dom = cheerio.load(html);
    return checkStructured(dom)
}

function checkStructured(dom: CheerioAPI) {
    const rules = [
        JsonLdRule
    ]

    return rules.reduce<Message[]>((messages, rule, i) => {
        const instance = new rule(dom);
        messages.push(...instance.check());
        return messages;
    }, [])
}