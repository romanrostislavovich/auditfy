import * as stylelint from 'stylelint';
import {Message} from "../../models/message.model";
import {MessageType} from "../../enum/message.enum";

export async function cssAudit(file: string): Promise<Message[]> {
    const options: stylelint.LinterOptions = {
        files: [
            'test/css/app.css',
        ],
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
function checkCss() {

}