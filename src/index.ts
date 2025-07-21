import {Command} from 'commander';
import ora from 'ora';
import chalk from 'chalk';
import {SeoAudit} from './modules/seo/seo';
import {A11yAudit} from './modules/a11y/a11y';
import {PerformanceAudit} from './modules/perfomance/performance';
import {statSync} from 'node:fs';
import path from "node:path";
import {Message} from "./models/message.model";
import {MessageType} from "./enum/message.enum";
import {HtmlAudit} from "./modules/html/html";
import {CssAudit} from "./modules/css/css";
import { File } from "./models/file.model";
import {CheerioAPI} from "cheerio";
import {readFile} from "fs/promises";
import * as cheerio from "cheerio";
import http from "node:http";
import handler from "serve-handler";
import {killAll, launch} from "chrome-launcher";
import lighthouse, {RunnerResult} from "lighthouse";
import LHResult from "lighthouse/types/lhr/lhr";
import {Artifacts} from "lighthouse/types/artifacts";
import {SecurityModule} from "./modules/security/security.module";
import {HtmlValidate, Result} from "html-validate";


const program = new Command();

program
    .name('website-auditfy')
    .description('Audit local html files for SEO, a11y, performance and structured data')
    .argument('<file>', 'Path to the local HTML file to audit')
    .option('-o, --output <file>', 'Export results to JSON file')
    .action(async (path, options) => {
        const spinner = ora('Running audits...').start();

        try {
            const currentData = Date.now();

            const result = statSync(path)
            if(!result.isFile()) {
                throw new Error("Exeption of file")
            }
            const file = File.create(path);
            const dom = await getCheerioDOM(file);
            const lighthouse = await getLightHouseResult(file);
            const htmlValidator = await getHtmlValidatorResult(file);

            debugger;
            const modules = [
                SeoAudit,
                CssAudit,
                A11yAudit,
                HtmlAudit,
                SecurityModule,
                PerformanceAudit
            ]

            const results = await modules.reduce<Promise<{ [k: string]: Message[] }>>(async (result, module) => {
                const res = await result;
                const instance = new module(file, dom, lighthouse, htmlValidator);
                res[instance.name] = await instance.check();
                return result;
            }, Promise.resolve({}))

            spinner.succeed('Audit completed!');

            console.log(chalk.green.bold('\nAudit Report'));
            for (const [section, result] of Object.entries(results)) {
                console.log(`\n${chalk.cyan(section.toUpperCase())}`);
                if(result.length === 0 || result.every(x => x.type === MessageType.passed)) {
                    console.log(
                        `- ${chalk.green('✔') } all tests are  passed`
                    )
                } else {
                    result.forEach((r: Message) => {
                        console.log(`- ${r.type === MessageType.passed ? chalk.green('✔') :  r.type === MessageType.warning ? chalk.yellow('⚠') : chalk.red('✘')} ${r.message}`)
                    });
                }

            }

            if (options.output) {
                const fs = await import('fs/promises');
                await fs.writeFile(options.output, JSON.stringify(results, null, 2));
                console.log(`\nResults saved to ${options.output}`);
            }

            console.log(Date.now() - currentData);
            const auditHasError = Object.values(results)
                .reduce((list, item) => {
                    list.push(...item)
                    return list;
                }, [])
                .some(x => x.type === MessageType.error)
            if (auditHasError) {
                process.exit(1);
            }
        } catch (error) {
            spinner.fail('Audit failed.');
            console.error(error);
            process.exit(2);
        }
    });

program.parse();

async function getCheerioDOM(file: File): Promise<CheerioAPI> {
    const html = await readFile(file.relativePath, 'utf-8');
    const dom = cheerio.load(html);
    return dom;
}

async function getHtmlValidatorResult(file: File): Promise<Result[]> {
    const htmlValidate = new HtmlValidate({
        rules: {
            // Security
            'require-csp-nonce': "warn",
            'require-sri': "warn",
            // End Security

            // Style Block
            'attr-case': "warn",
            'attr-pattern': "warn",
            'attr-quotes': "warn",
            'attribute-boolean-style': "warn",
            'attribute-empty-style': "warn",
            'class-pattern': "warn",
            'doctype-style': "warn",
            'element-case': "warn",
            'id-pattern': "warn",
            'name-pattern': "warn",
            'no-implicit-close': "warn",
            'no-implicit-input-type': "warn",
            'no-inline-style': "warn",
            'no-self-closing': "warn",
            'no-style-tag': "warn",
            'no-trailing-whitespace': "warn",
            'prefer-button': "warn",
            'prefer-tbody': "warn",
            'void-style': "warn",
            // End Style Block

            // Accessibility
            'area-alt': "warn",
            'aria-hidden-body': "warn",
            'aria-label-misuse': "warn",
            'empty-heading': "warn",
            'empty-title': "warn",
            'hidden-focusable': "warn",
            'input-missing-label': "warn",
            'meta-refresh': "warn",
            'multiple-labeled-controls': "warn",
            'no-abstract-role': "warn",
            'no-autoplay': "warn",
            'no-implicit-button-type': "warn",
            'no-redundant-aria-label': "warn",
            'no-redundant-role': "warn",
            'prefer-native-element': "warn",
            'svg-focusable': "warn",
            'tel-non-breaking': "warn",
            'text-content': "warn",
            'unique-landmark': "warn",
            'wcag/h30': "warn",
            'wcag/h36': "warn",
            'wcag/h37': "warn",
            'wcag/h63': "warn",
            'wcag/h67': "warn",
            'wcag/h71': "warn",
            // End Accessibility

            // Deprecated
            'deprecated': "warn",
            'deprecated-rule': "warn",
            'no-conditional-comment': "warn",
            'no-deprecated-attr': "warn",
            // End Deprecated

            // Document
            'allowed-links': "warn",
            'doctype-html': "warn",
            'heading-level': "warn", // - ??
            'missing-doctype': "warn",
            'no-dup-id': "warn",
            'no-missing-references': "warn",
            'no-utf8-bom': "warn",
            // End Document

            // Uncategorized
            'no-unknown-elements': "warn",
            'no-unused-disable': "warn",
            // End Uncategorized


            // Content model
            'attribute-allowed-values': "warn",
            'attribute-misuse': "warn",
            'element-permitted-content': "warn",
            'element-permitted-occurrences': "warn",
            'element-permitted-order': "warn",
            'element-permitted-parent': "warn",
            'element-required-ancestor': "warn",
            'element-required-attributes': "warn",
            'element-required-content': "warn",
            'input-attributes': "warn",
            'no-multiple-main': "warn",
            'script-element': "warn",
            'void-content': "warn",
            // End Content model

            // HTML Syntax and concepts
            'attr-delimiter': "warn",
            'attr-spacing': "warn",
            'close-attr': "warn",
            'close-order': "warn",
            'element-name': "warn",
            'form-dup-name': "warn",
            'map-dup-name': "warn",
            'map-id-name': "warn",
            'no-dup-attr': "warn",
            'no-dup-class': "warn",
            'no-raw-characters': "warn",
            'no-redundant-for': "warn",
            'script-type': "warn",
            'unrecognized-char-ref': "warn",
            'valid-autocomplete': "warn",
            'valid-id': "warn",
            // End HTML Syntax and concepts
        },
    });
    const result = await htmlValidate.validateFile(file.relativePath);
    return result.results;
}

async function getLightHouseResult(file: File): Promise<RunnerResult> {
    const PORT: number = 9900;
    const server = http.createServer((req, res) => {
        return handler(req, res, { public: file.dir });
    });

    // @ts-ignore
    await new Promise(resolve => server.listen(PORT, resolve));

    const chrome = await launch({ chromeFlags: ['--headless'] });
    const result = await lighthouse(`http://localhost:${PORT}/${file.filename}`, {
        port: chrome.port,
        output: 'json',
        logLevel: 'error',
    });
    killAll();
    server.close();


    return result || {} as RunnerResult;
}
