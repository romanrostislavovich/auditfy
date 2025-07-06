import { Command } from 'commander';
import ora from 'ora';
import chalk from 'chalk';
import { seoAudit } from './modules/seo/seo';
import { a11yAudit } from './modules/a11y/a11y';
import { performanceAudit } from './modules/perfomance/performance';
import { structuredDataAudit } from './modules/structured';
import { statSync } from 'node:fs';
import path from "node:path";
const program = new Command();

program
    .name('landing-audit')
    .description('Audit local index.html file for SEO, a11y, performance and structured data')
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
             //   performance: await performanceAudit(filePath2),
                structured: await structuredDataAudit(file),
            };


            spinner.succeed('Audit completed!');

            console.log(chalk.green.bold('\nAudit Report'));
            for (const [section, result] of Object.entries(results)) {
                console.log(`\n${chalk.cyan(section.toUpperCase())}`);
                result.forEach(r => {
                        console.log(`- ${r.passed ? chalk.green('✔') : chalk.red('✘')} ${r.message}`)
                });
            }

            if (options.output) {
                const fs = await import('fs/promises');
                await fs.writeFile(options.output, JSON.stringify(results, null, 2));
                console.log(`\nResults saved to ${options.output}`);
            }
        } catch (error) {
            spinner.fail('Audit failed.');
            console.error(error);
        }
    });

program.parse();
