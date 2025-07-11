import * as stylelint from 'stylelint';
import {Message} from "../../models/message.model";
import {MessageType} from "../../enum/message.enum";
import {readFile} from "fs/promises";
import * as cheerio from "cheerio";
import { File } from '../../models/file.model';
import {CheerioAPI} from "cheerio";

export async function cssAudit(file: File, dom: CheerioAPI): Promise<Message[]> {
    const cssFiles: string[] = [];
    dom('link[rel="stylesheet"]').each((i, elem) => {
        const href = dom(elem).attr('href');
        if (href) {
            cssFiles.push(`${file.dir}/${href}`);
        }
    });
    const options: stylelint.LinterOptions = {
        files: cssFiles,
        config: {
            extends: "stylelint-config-standard",
        },
    }

    const linterResult = await  stylelint.lint(options);
    const messages = linterResult.results.reduce<Message[]>((m, item) => {
        m.push(...item.parseErrors.map(x => Message.create(`${x.text} at line ${x.line}`, MessageType.error)))
        m.push(...item.warnings.map(x => Message.create(`${x.text} at line ${x.line}. Rule ${x.rule}`, MessageType.warning)))
        return m;
    },[])
    return messages;
}
