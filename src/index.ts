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
import lighthouse, { RunnerResult} from "lighthouse";
import LHResult from "lighthouse/types/lhr/lhr";
import {Artifacts} from "lighthouse/types/artifacts";


const program = new Command();

program
    .name('website-auditfy')
    .description('Audit local html files for SEO, a11y, performance and structured data')
    .argument('<file>', 'Path to the local HTML file to audit')
    .option('-o, --output <file>', 'Export results to JSON file')
    .action(async (path, options) => {
        const spinner = ora('Running audits...').start();

        try {
            const result = statSync(path)
            if(!result.isFile()) {
                throw new Error("Exeption of file")
            }
            const file = File.create(path);
            const dom = await getCheerioDOM(file);
            const lighthouse = await getLightHouseResult(file);

            debugger;
            const modules = [
                SeoAudit,
                CssAudit,
                A11yAudit,
                HtmlAudit,
                PerformanceAudit
            ]

            const results = await modules.reduce<Promise<{ [k: string]: Message[] }>>(async (result, module) => {
                const res = await result;
                const instance = new module(file, dom, lighthouse);
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

async function getLightHouseResult(file: File): Promise<RunnerResult> {
    const PORT = 9900;
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
