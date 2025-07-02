import { readFile } from 'fs/promises';
import * as cheerio from 'cheerio';

export async function seoAudit(filepath: string) {
    const html = await readFile(filepath, 'utf-8');
    const $ = cheerio.load(html);

    return [
        { message: `Title tag is ${$('title').text() ? 'present' : 'missing'}`, passed: !!$('title').text() },
        { message: `Meta description is ${$('meta[name="description"]').attr('content') ? 'present' : 'missing'}`, passed: !!$('meta[name="description"]').attr('content') },
        { message: `Canonical tag is ${$('link[rel="canonical"]').attr('href') ? 'present' : 'missing'}`, passed: !!$('link[rel="canonical"]').attr('href') }
    ];
}
