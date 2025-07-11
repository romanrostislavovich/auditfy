import {CLI, Message as MessageHtml} from "html-validate";
import {Message} from "../../models/message.model";
import {MessageType} from "../../enum/message.enum";

export async function htmlAudit(filePath: string): Promise<Message[]> {
    const cli = new CLI({})
    const validator = await cli.getValidator();
    const validation = await validator.validateFile(filePath);
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

