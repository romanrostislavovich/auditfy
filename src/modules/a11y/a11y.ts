import puppeteer from 'puppeteer';
import {AxePuppeteer} from '@axe-core/puppeteer';
import {Message} from "../../models/message.model";
import {MessageType} from "../../enum/message.enum";
import {File} from '../../models/file.model'
import {Audit} from "../../models/audit.model";
import {CheerioAPI} from "cheerio";
import {RunnerResult} from "lighthouse";
import {Result} from "html-validate";
import {SourceModel} from "../../models/source.model";
import {RuleInterface} from "../../models/rule.model";
import chalk from "chalk";
import {IConfig} from "../../config/default";

export class A11yAudit extends Audit {
    constructor(
        source: SourceModel,
        dom: CheerioAPI,
        lightHouse: RunnerResult,
        htmlValidator: Result[],
        config: IConfig
    ) {
        super();
        this.dom = dom;
        this.name = 'A11Y';
        this.config = config;
        this.source = source;
        this.lighthouse = lightHouse;
        this.htmlValidator = htmlValidator;
    }

    async check(): Promise<Message[]> {
        const result: Message[] = [];

        const configRules = this.getConfigRules();
        const ruleImportList = await this.getRuleImportList(__dirname);
        const axeCoreResults = await this.getAxeCoreResult();

        const ruleInstanceList = ruleImportList.reduce<{[key: string]: RuleInterface }>((list, rule: any) => {
            const instance = new rule(this.dom, this.lighthouse.lhr.audits, this.htmlValidator, axeCoreResults);
            list[instance.id] = instance;
            return list;
        }, {})

        for(const [rule, flow] of Object.entries(configRules)) {
            try {
                const instance = ruleInstanceList[rule];
                instance.ruleFlow = flow;
                result.push(...instance.check())
            } catch (e) {
                console.log( `\n${chalk.red('✘')} can't find rule  ${rule} on ${this.name} module`)
            }

        }
        return result;
    }

    private async getAxeCoreResult() {
        const browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        const page = await browser.newPage();
        const path = this.source.isURL ? this.source.url : this.source.file.pathWithExtension;
        await page.goto(path);
        const axeCoreResults = await new AxePuppeteer(page).withRules([
            'p-as-heading',
            'meta-refresh-no-exceptions',
            'scope-attr-valid',
            'presentation-role-conflict',
            'meta-viewport-large',
            'aria-braille-equivalent',
            'color-contrast-enhanced',
            'frame-focusable-content',
            'frame-title-unique',
            'marquee',
            'role-img-alt',
            'server-side-image-map',
            'summary-name',
            'svg-img-alt',
            'avoid-inline-spacing',
            'empty-table-header',
            'frame-tested',
            'label-title-only',
            'css-orientation-lock'
        ]).analyze();
        await page.close();
        await browser.close();

        return axeCoreResults;
    }
}
