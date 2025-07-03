import puppeteer from 'puppeteer';
import { AxePuppeteer } from '@axe-core/puppeteer';

export async function a11yAudit(fileUrl: string) {
    const browser = await puppeteer.launch({headless: "shell"});
    const page = await browser.newPage();
    await page.goto(fileUrl);
    const results = await new AxePuppeteer(page).analyze();
    await browser.close();

    debugger;
    return results.violations.map(v => ({ message: v.help, passed: false }));
}