import puppeteer from 'puppeteer';
import {AxePuppeteer} from '@axe-core/puppeteer';
import {Message} from "../../models/message.model";
import {MessageType} from "../../enum/message.enum";
import {File} from '../../models/file.model'
import {Audit} from "../../models/audit.model";
import {CheerioAPI} from "cheerio";
import {RunnerResult} from "lighthouse";

export class A11yAudit extends Audit {
    constructor(file: File, dom: CheerioAPI, lightHouse: RunnerResult) {
        super();
        this.dom = dom;
        this.file = file;
        this.lighthouse = lightHouse;
        this.name = 'A11Y';
    }

    async check(): Promise<Message[]> {
       const browser = await puppeteer.launch({
           headless: true,
           args: ['--no-sandbox', '--disable-setuid-sandbox']
       });
       const page = await browser.newPage();
       await page.goto(this.file.pathWithExtension);
       const results = await new AxePuppeteer(page).analyze();
       await browser.close();

       const messages: Message[] = [];
       debugger;
       messages.push(...results.violations.map(v => {
           return Message.create(v.help, MessageType.error )
       }))
       return messages;
    }
}
