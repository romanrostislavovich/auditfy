  import * as cheerio from "cheerio";
  import * as fs from "node:fs";
  import path from "node:path";
 
  const savePath = './src/modules/css/rules';
  const baseURL = 'https://stylelint.io/user-guide/rules/'
  const dom =  await cheerio.fromURL(baseURL, {
      requestOptions: {
          format: 'html',
      }
  });

  path.join()
  const rules = [];
  const allRulesTr = dom('tr');
  allRulesTr.each((i, rule) => {
         const relativeURL = dom(rule).find('a').attr('href');
         const ruleId = dom(rule).find('a').text();
         const description = dom(rule).find('td').first().text().replaceAll(ruleId, '');
         if (ruleId !== '' && relativeURL !== undefined) {
             rules.push({
                 url: `https://stylelint.io${relativeURL}`,
                 id: ruleId.replaceAll('\\', ' ').replaceAll('/', ' '),
                 description: description,
             })
         }

      })

  console.log(rules.length);

  createTypeScriptRules(rules);

  function createTypeScriptRules(rules) {
          rules.forEach((rule) => {
                  const className = rule.id.split('-').map(id => id[0].toUpperCase() + id.slice(1)).join('');
                  let template = `
import { RuleInterface} from "../../../models/rule.model";
import {Message} from "../../../models/message.model";
import {MessageType} from "../../../enum/message.enum";
import {CheerioAPI} from "cheerio";
import {Result} from "html-validate";
import {LightHouseAuditType} from "../../../types/modules.type";
import * as stylelint from "stylelint";
import {StylelintHelper} from "../../../linters/stylelint.helper";

export class ${className} implements RuleInterface {
    id: string = '${rule.id}';
    dom: CheerioAPI;
    tags: string[] = ['style'];
    lightHouse: LightHouseAuditType;
    ruleFlow!: MessageType;
    htmlValidator: Result[];
    stylelint: stylelint.LinterResult[];
    description: string = '${rule.description}';
    ruleUrl: string = '${rule.url}';

    constructor(
        dom: CheerioAPI,
        lightHouse: LightHouseAuditType,
        htmlValidator: Result[],
        styleLintResult: stylelint.LinterResult[]
    ) {
        this.dom = dom;
        this.stylelint = styleLintResult;
        this.lightHouse = lightHouse;
        this.htmlValidator = htmlValidator;
    }

    check(): Message[] {
        return StylelintHelper.identifyRule(this.id, this.ruleFlow, this.stylelint);
    }
}`
                      fs.writeFileSync(savePath+ `/${rule.id}.rule.ts`, template)
                  });
     
          }
