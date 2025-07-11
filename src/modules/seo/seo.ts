import { readFile } from 'fs/promises';
import * as cheerio from 'cheerio';
import {TitleRule} from "./rules/title.rule";
import {DescriptionRule} from "./rules/description.rule";
import {CanonicalRule} from "./rules/canonical.rule";
import {Message} from "../../models/message.model";
import {Cheerio, CheerioAPI} from "cheerio";
import {Header1Rule} from "./rules/header1.rule";
import {OgRule} from "./rules/og.rule";
import {TwitterRule} from "./rules/twitter.rule";
import { File } from '../../models/file.model'

export async function seoAudit(file: File, dom: CheerioAPI): Promise<Message[]> {
    return checkSEO(dom);
}

function checkSEO(dom: CheerioAPI) {
    const rules = [
        OgRule,
        TitleRule,
        Header1Rule,
        TwitterRule,
        CanonicalRule,
        DescriptionRule,
    ]

    return rules.reduce<Message[]>((messages, rule, i) => {
        const instance = new rule(dom);
        messages.push(...instance.check());
        return messages;
    }, [])
}
