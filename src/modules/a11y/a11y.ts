import puppeteer from 'puppeteer';
import {AxePuppeteer} from '@axe-core/puppeteer';
import {Message} from "../../models/message.model";
import {MessageType} from "../../enum/message.enum";
import {File} from '../../models/file.model'
import {Audit} from "../../models/audit.model";
import {CheerioAPI} from "cheerio";
import {RunnerResult} from "lighthouse";
import {Result} from "html-validate";

export class A11yAudit extends Audit {
    constructor(file: File, dom: CheerioAPI, lightHouse: RunnerResult, htmlValidator: Result[]) {
        super();
        this.dom = dom;
        this.file = file;
        this.lighthouse = lightHouse;
        this.htmlValidator = htmlValidator;
        this.name = 'A11Y';
    }

    async check(): Promise<Message[]> {
       const browser = await puppeteer.launch({
           headless: true,
           args: ['--no-sandbox', '--disable-setuid-sandbox']
       });
       const page = await browser.newPage();
       await page.goto(this.file.pathWithExtension);
       const results = await new AxePuppeteer(page).withRules([
           'td-has-header',
           'table-fake-caption',
           'p-as-heading',
           'label-content-name-mismatch',
           'hidden-content',
           'focus-order-semantics',
           'meta-refresh-no-exceptions',
           'identical-links-same-purpose',
           'table-duplicate-name',
           'skip-link',
           'tabindex',
           'scope-attr-valid',
           'region',
           'presentation-role-conflict',
           'meta-viewport-large',
           'landmark-unique',
           'landmark-one-main',
           'landmark-no-duplicate-main',
           'landmark-no-duplicate-contentinfo',
           'landmark-no-duplicate-banner',
           'landmark-main-is-top-level',
           'landmark-contentinfo-is-top-level',
           'landmark-complementary-is-top-level',
           'landmark-banner-is-top-level',
           'target-size',
           'link-in-text-block',
           'duplicate-id-aria',
           'aria-allowed-attr',
           'aria-braille-equivalent',
           'aria-command-name',
           'aria-conditional-attr',
           'aria-deprecated-role',
           'aria-hidden-focus',
           'aria-input-field-name',
           'aria-meter-name',
           'aria-progressbar-name',
           'aria-prohibited-attr',
           'aria-required-attr',
           'aria-required-children',
           'aria-required-parent',
           'aria-roles',
           'aria-toggle-field-name',
           'aria-tooltip-name',
           'aria-valid-attr-value',
           'aria-valid-attr',
           'button-name',
           'bypass',
           'color-contrast',
           'color-contrast-enhanced',
           'definition-list',
           'dlitem',
           'frame-focusable-content',
           'frame-title-unique',
           'frame-title',
           'html-has-lang',
           'html-xml-lang-mismatch',
           'input-button-name',
           'input-image-alt',
           'list',
           'listitem',
           'marquee',
           'meta-viewport',
           'nested-interactive',
           'object-alt',
           'role-img-alt',
           'scrollable-region-focusable',
           'select-name',
           'server-side-image-map',
           'summary-name',
           'svg-img-alt',
           'td-headers-attr',
           'th-has-data-cells',
           'valid-lang',
           'video-caption',
           'avoid-inline-spacing',
           'accesskeys',
           'aria-allowed-role',
           'aria-dialog-name',
           'aria-text',
           'aria-treeitem-name',
           'empty-table-header',
           'frame-tested',
           'image-redundant-alt',
           'label-title-only',
           'css-orientation-lock'
       ]).analyze();
       await browser.close();

       const messages: Message[] = [];

       messages.push(...results.violations.map(v => {
           return Message.create(v.help, MessageType.warning )
       }))
       return messages;
    }
}
