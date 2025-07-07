import { readFile } from 'fs/promises';
import * as cheerio from 'cheerio';
import {Message} from "../../models/message.model";
import {MessageType} from "../../enum/message.enum";

export async function structuredDataAudit(filepath: string): Promise<Message[]> {
    const html = await readFile(filepath, 'utf-8');
    const $ = cheerio.load(html);
    const jsonLdBlocks = $('script[type="application/ld+json"]');

    return [
        Message.create(`${jsonLdBlocks.length} structured data block(s) found`, jsonLdBlocks.length > 0 ? MessageType.passed : MessageType.error)
    ];
}