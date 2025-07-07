import puppeteer from 'puppeteer';
import {AxePuppeteer} from '@axe-core/puppeteer';
import {Message} from "../../models/message.model";
import {MessageType} from "../../enum/message.enum";

export async function a11yAudit(fileUrl: string): Promise<Message[]> {
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    await page.goto(fileUrl);
    const results = await new AxePuppeteer(page).analyze();
    await browser.close();

    return results.violations.map(v => {
        return Message.create(v.help, MessageType.error )
    });
}