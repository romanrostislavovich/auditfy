import { readFile } from 'fs/promises';
import * as cheerio from 'cheerio';
import {TitleRule} from "./rules/title.rule";
import {DescriptionRule} from "./rules/description.rule";
import {CanonicalRule} from "./rules/canonical.rule";
import {Message} from "../../models/message.model";
import {Cheerio, CheerioAPI} from "cheerio";
import {Header1Rule} from "./rules/header1.rule";

export async function seoAudit(filepath: string, dir: string) {
    const html = await readFile(filepath, 'utf-8');
    const $ = cheerio.load(html);
    console.log(checkSEO($));


    return [
        { message: `Title tag is ${$('title').text() ? 'present' : 'missing'}`, passed: !!$('title').text() },
        { message: `Meta description is ${$('meta[name="description"]').attr('content') ? 'present' : 'missing'}`, passed: !!$('meta[name="description"]').attr('content') },
        { message: `Canonical tag is ${$('link[rel="canonical"]').attr('href') ? 'present' : 'missing'}`, passed: !!$('link[rel="canonical"]').attr('href') }
    ];

   // return checkSEO($);
}

function checkSEO(dom: CheerioAPI) {
    // Values
    const h1 = dom('h1').get().length;
    const title = dom('title').text();
    const canonical = dom('link[rel="canonical"]').attr('href');
    const metaDescription = dom('meta[name="description"]').attr('content');

    // Rules
    const h1Rule: Header1Rule = new Header1Rule(h1);
    const titleRule: TitleRule = new TitleRule(title);
    const canonicalRule: CanonicalRule = new CanonicalRule(canonical);
    const descriptionRule: DescriptionRule = new DescriptionRule(metaDescription);

    const result: Message[] = [
        ...h1Rule.check(),
        ...titleRule.check(),
        ...canonicalRule.check(),
        ...descriptionRule.check(),
    ];

    return result;
}
