import {CLI, Message as MessageHtml} from "html-validate";
import {Message} from "../../models/message.model";
import {MessageType} from "../../enum/message.enum";
import {File} from '../../models/file.model';
import {Audit} from "../../models/audit.model";
import {CheerioAPI} from "cheerio";
import {RunnerResult} from "lighthouse";

export class HtmlAudit extends Audit {
    constructor(file: File, dom: CheerioAPI, lightHouse: RunnerResult) {
        super();
        this.dom = dom;
        this.file = file;
        this.lighthouse = lightHouse;
        this.name = "HTML"
    }

    async check(): Promise<Message[]> {
        const cli = new CLI({})
        const validator = await cli.getValidator();
        const validation = await validator.validateFile(this.file.relativePath);
        return validation.results
            .reduce<MessageHtml[]>((messages, item) => {
                messages.push(...item.messages)
                return messages;
            }, [])
            .map((x: MessageHtml) => {
                return Message.create(
                    `${x.message} at line ${x.line}`,
                    MessageType.error,
                )
            })
    }
}


