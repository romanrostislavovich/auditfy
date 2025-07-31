import * as cheerio from "cheerio";
import * as fs from "node:fs";

const savePath = 'test/parsers/html-rules';
const baseURL = 'https://html-validate.org'
const dom =  await cheerio.fromURL(baseURL + '/rules/index.html');

const rules = [];
const allRulesTr = dom('tr');
allRulesTr.each((i, rule) => {
   const relativeURL = dom(rule).find('a').attr('href');
   const ruleId = dom(rule).find('a').text();
   const description = dom(rule).find('td').last().text();
   rules.push({
       url: `${baseURL}/${relativeURL}`,
       id: ruleId.replaceAll('\\', '-').replaceAll('/', '-'),
       description: description,
   })
})
createHtmlValidatorRuleMD(rules);
createTypeScriptRules(rules);
function createHtmlValidatorRuleMD(rules) {
    let template = `
# HTML

| Name                                                                | Description                                                                                          |
|:--------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------|
`

    rules.forEach(rule => {
        template += `| [${rule.id}](${rule.url}) | ${rule.description}|\n`
    })

    template = template.replaceAll('<', '').replaceAll('>', '');
    fs.writeFileSync(savePath + '/html.rules.md', template)
}

function createTypeScriptRules(rules) {
    rules.forEach((rule) => {
        const className = rule.id.split('-').map(id => id[0].toUpperCase() + id.slice(1)).join('');
        let template = `
import { RuleInterface} from "../../../models/rule.model";
import {Message} from "../../../models/message.model";
import {MessageType} from "../../../enum/message.enum";
import {Result as AuditResult} from "lighthouse/types/lhr/audit-result";
import {CheerioAPI} from "cheerio";
import {Result} from "html-validate";
import {LightHouseAuditType} from "../../../types/modules.type";

export class ${className}Rule implements RuleInterface {
    id: string = '${rule.id}';
    dom: CheerioAPI;
    tags: string[] = ['html'];
    lightHouse: LightHouseAuditType;
    ruleFlow: MessageType = MessageType.warning;
    htmlValidator: Result[];
    description: string = '${rule.description}';
    ruleUrl: string = '${rule.url}';

    constructor(dom: CheerioAPI, lightHouse: LightHouseAuditType, htmlValidator: Result[]) {
        this.dom = dom;
        this.lightHouse = lightHouse;
        this.htmlValidator = htmlValidator;
    }

    check(): Message[] {
        const results = this.htmlValidator.reduce<Message[]>((messages, item) => {
            const existingMiss: Message[] = item.messages
                .filter(x => x.ruleId === this.id)
                .map((x) => Message.create(\`\${x.message} at line \${x.line}\`, MessageType.warning))
            messages.push(...existingMiss)
            return messages;
        }, [])
        return results;
    }
}
`
        fs.writeFileSync(savePath+ `/${rule.id}.rule.ts`, template)
    });

}
