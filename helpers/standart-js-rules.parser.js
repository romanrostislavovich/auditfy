import * as cheerio from "cheerio";
import fs from "node:fs";


const savePath = './src/modules/javascript/rules';
const baseURL = 'https://standardjs.com/rules'
const dom =  await cheerio.fromURL(baseURL, {
    requestOptions: {
        format: 'html',
    }
});

const rules = dom('li a code');
const ruleList = [];
rules.each((i, rule) => {
    const name = dom(rule).text();
    const url = dom(rule).parent().attr('href');
    const description = dom(rule).parent().parent().parent().find('p strong').text();
    ruleList.push({
        id: name,
        name: name,
        url: url,
        description: description
    })
})

const igonerdRules = [
    'no-unexpected-multiline',
    'semi'
]
function createRuleListMD(rules, docsPath, moduleName) {
    let template = `
# ${moduleName}

| Name                                                                | Description                                                                                          | 
|:--------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------|
`

    rules.forEach(rule => {
        template += `| [${rule.id}](${rule.url}) | ${rule.description}\n`
    })

    template = template.replaceAll('<', '').replaceAll('>', '');
    fs.writeFileSync(docsPath + `/${moduleName}.rules.md`, template)
}

function createTypeScriptRules(rules) {
    rules.forEach((rule) => {
        const className = rule.id.split('-').map(id => id[0].toUpperCase() + id.slice(1)).join('');
        let template = `
import {RuleInterface} from "../../../models/rule.model";
import {Message} from "../../../models/message.model";
import {MessageType} from "../../../enum/message.enum";
import {Result as AuditResult} from "lighthouse/types/lhr/audit-result";
import {CheerioAPI} from "cheerio";
import {Result} from "html-validate";
import {LightHouseAuditType} from "../../../types/modules.type";
import {EslintHelper} from "../../../linters/eslint.helper";
import {ESLint, Linter} from "eslint";


export class ${className}Rule implements RuleInterface {
     id: string = '${rule.id}';
    tags: string[] = ['javascript'];
    dom: CheerioAPI;
    lightHouse: LightHouseAuditType;
    ruleFlow!: MessageType;
    htmlValidator: Result[];
    eslint: ESLint.LintResult[];
    description: string = "${rule.description}";
    ruleUrl: string = '${rule.url}';

    constructor(dom: CheerioAPI, lightHouse: LightHouseAuditType, htmlValidator: Result[], eslint: ESLint.LintResult[]) {
        this.dom = dom;
        this.eslint = eslint;
        this.lightHouse = lightHouse;
        this.htmlValidator = htmlValidator;
    }

    check(): Message[] {
        return EslintHelper.identifyRule(this.id, this.ruleFlow,  this.eslint);
    }
}`
        fs.writeFileSync(savePath+ `/${rule.id}.rule.ts`, template)
    });

}

const clearRules = ruleList.reduce((acum, rule) => {
    if (!igonerdRules.includes(rule.id)) {
        acum.push(rule)
    }
    return acum;
}, [])
createTypeScriptRules(clearRules)
// createRuleListMD(clearRules, 'docs/rules', 'JavaScript')