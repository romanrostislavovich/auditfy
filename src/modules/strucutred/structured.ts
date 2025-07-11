import { readFile } from 'fs/promises';
import * as cheerio from 'cheerio';
import {Message} from "../../models/message.model";
import {JsonLdRule} from "./rules/json-ld.rule";
import {CheerioAPI} from "cheerio";
import { File } from '../../models/file.model'

export async function structuredDataAudit(file: File, dom: CheerioAPI): Promise<Message[]> {
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