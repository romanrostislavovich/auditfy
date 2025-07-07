import {Message} from "../../../models/message.model";
import {MessageType} from "../../../enum/message.enum";
import {Rule} from "../../../models/rule.model";
import {CheerioAPI} from "cheerio";

export class Header1Rule extends Rule<CheerioAPI>{
    value: CheerioAPI;
    ruleFlow: MessageType = MessageType.error;
    description: string = 'H1 tag';


    constructor(value: CheerioAPI) {
        super()
        this.value = value;
    }

    check(): Message[] {
        const tagElements = this.value('h1');
        const tagCount = tagElements.get().length;
        const tagIsPresent = tagCount !== 0;
        const tagIsMoreThanOne = tagCount >= 2;
        const tagIsNotEmpty = tagIsPresent ? tagElements.contents().first().text().length !== 0 : false;

        return [
            Message.create(
            `${this.description} is ${tagIsPresent ? 'present' : 'missing'}`,
                tagIsPresent ? MessageType.passed : MessageType.error
            ),
            Message.create(
                `${this.description} is only one per page`,
                !tagIsMoreThanOne ? MessageType.passed : MessageType.error
            ),
            Message.create(
                `${this.description} is not empty`,
                tagIsNotEmpty ? MessageType.passed : MessageType.error
            )
        ]
    }
}