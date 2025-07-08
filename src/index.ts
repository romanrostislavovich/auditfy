import {Command} from 'commander';
import ora from 'ora';
import chalk from 'chalk';
import {seoAudit} from './modules/seo/seo';
import {a11yAudit} from './modules/a11y/a11y';
import {performanceAudit} from './modules/perfomance/performance';
import {structuredDataAudit} from './modules/strucutred/structured';
import {statSync} from 'node:fs';
import path from "node:path";
import {Message} from "./models/message.model";
import {MessageType} from "./enum/message.enum";

const program = new Command();

program
    .name('website-auditfy')
    .description('Audit local html files for SEO, a11y, performance and structured data')
    .argument('<file>', 'Path to the local HTML file to audit')
    .option('-o, --output <file>', 'Export results to JSON file')
    .action(async (file, options) => {
        const spinner = ora('Running audits...').start();

        try {
            const result = statSync(file)
            if(!result.isFile()) {
                throw new Error("Exeption of file")
            }
            const filePath: string = `file://${process.cwd()}/${file}`;
            const filePath2: string = `${process.cwd()}/${file}`;
            const dir: string = path.dirname(file);
            const filename: string = path.basename(file);
            const results = {
                seo: await seoAudit(file, dir),
                a11y: await a11yAudit(filePath),
                performance: await performanceAudit(filePath2),
                structured: await structuredDataAudit(file),
            };


            spinner.succeed('Audit completed!');

            console.log(chalk.green.bold('\nAudit Report'));
            for (const [section, result] of Object.entries(results)) {
                console.log(`\n${chalk.cyan(section.toUpperCase())}`);
                if(result.length === 0) {
                    console.log(
                        `- ${chalk.green('✔') } all tests are  passed`
                    )
                }
                result.forEach((r: Message) => {
                        console.log(
                            `- ${r.type === MessageType.passed ? chalk.green('✔') : chalk.red('✘')} ${r.message}`)
                });
            }

            if (options.output) {
                const fs = await import('fs/promises');
                await fs.writeFile(options.output, JSON.stringify(results, null, 2));
                console.log(`\nResults saved to ${options.output}`);
            }

            const auditPassed = Object.values(results)
                .reduce((list, item) => {
                    list.push(...item)
                    return list;
                })
                .every(x => x.type === MessageType.passed)
            if (!auditPassed) {
                process.exit(1);
            }
        } catch (error) {
            spinner.fail('Audit failed.');
            console.error(error);
            process.exit(2);
        }
    });

program.parse();
