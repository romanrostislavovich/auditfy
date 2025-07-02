import { readFile } from 'fs/promises';
import * as cheerio from 'cheerio';

export async function structuredDataAudit(filepath: string) {
    const html = await readFile(filepath, 'utf-8');
    const $ = cheerio.load(html);
    const jsonLdBlocks = $('script[type="application/ld+json"]');

    return [{
        message: `${jsonLdBlocks.length} structured data block(s) found`,
        passed: jsonLdBlocks.length > 0
    }];
}