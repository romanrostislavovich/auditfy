import {Command} from 'commander';
import ora from 'ora';
import chalk from 'chalk';
import {SeoAudit} from './modules/seo/seo';
import {A11yAudit} from './modules/a11y/a11y';
import {PerformanceAudit} from './modules/perfomance/performance';
import {Message} from "./models/message.model";
import {consoleMessageMap, MessageType} from "./enum/message.enum";
import {HtmlAudit} from "./modules/html/html";
import {CssAudit} from "./modules/css/css";
import * as cheerio from "cheerio";
import {CheerioAPI} from "cheerio";
import {ArgumentTypes} from 'conventional-cli';
import {readFile} from "fs/promises";
import http from "node:http";
import handler from "serve-handler";
import {killAll, launch} from "chrome-launcher";
// import lighthouse, {RunnerResult} from "lighthouse";
import {SecurityModule} from "./modules/security/security.module";
import {HtmlValidate, Result} from "html-validate";
import {SourceModel} from "./models/source.model";
import {JsAuditModule} from "./modules/javascript/javascript.module";
import {OptionModel} from "./models/option.model";
import {JsonFileUtils} from "./utils/json-file.utils";
import {config as defaultConfig, IConfig} from './config/default'
import {EslintHelper} from "./linters/eslint.helper";
import {ESLint} from "eslint";
import {HtmlValidatorUtils} from "./linters/html-validator.helper";
import {StylelintHelper} from "./linters/stylelint.helper";

const toolName: string = 'website-auditfy';
const packageJson: any = JsonFileUtils.parseFile(JsonFileUtils.getPackageJsonPath());

const maxWarningsOption = new OptionModel({
    required: false,
    longName: 'max-warning',
    shortName: 'w',
    beta: false,
    type: ArgumentTypes.number,
    description: "Number of warnings to trigger -1 exit code",
    values: [
        "number"
    ],
})
const quiteOption = new OptionModel({
    required: false,
    longName: 'quite',
    shortName: 'q',
    beta: false,
    type: ArgumentTypes.boolean,
    description: "Print only errors and warnings",
    values: [
        "boolean"
    ],
    default: 'true',
})
const versionOption = new OptionModel({
    required: false,
    longName: 'version',
    shortName: 'v',
    beta: false,
    type: ArgumentTypes.undefined,
    description: "Print current version"
})
const sourceOption = new OptionModel({
    required: true,
    longName: 'source',
    shortName: 's',
    beta: false,
    type: ArgumentTypes.path,
    values: [
        'relative path',
        'absolute path',
        'URL'
    ],
    description: 'URL or Path to the HTML file to audit',
    additionalDescription: ''
})
const helpOption = new OptionModel({
    required: false,
    longName: 'help',
    shortName: 'h',
    beta: false,
    type: ArgumentTypes.undefined,
    description: `Print help`
})
const configOption = new OptionModel({
    required: false,
    longName: 'config',
    shortName: 'c',
    beta: false,
    type: ArgumentTypes.path,
    values: [
        'relative path',
        'absolute path',
    ],
    description: 'Path to the JSON config file',
    additionalDescription: ''
})

const docs: any = {
    name: toolName,
    usage: '[options]',
    description: 'Simple CLI tools for check SEO, HTML, CSS, JS, TS, Performance, Security and A11Y',
    examples: `

Current version: ${packageJson.version}

Examples:
    
    $ ${toolName} path/to/index.html -c ./path/to/config.json
    $ ${toolName} https://github.com 
`
};


const program = new Command();

program
    .name(docs.name)
    .description(docs.description)
    .argument(sourceOption.getFlag(), sourceOption.getDescription())
    .option(configOption.getFlag(), configOption.getDescription(), configOption.default)
    .option(quiteOption.getFlag(), quiteOption.getDescription(), true)
    .option(maxWarningsOption.getFlag(), maxWarningsOption.getDescription())
    .helpOption(helpOption.getFlag(), helpOption.getDescription())
    .version(packageJson.version, versionOption.getFlag(), versionOption.getDescription())
    .addHelpText(`afterAll`, docs.examples)
    .action(run);

program.parse(process.argv);

async function run(path: any, options: any) {
    const spinner = ora('Running audits...').start();
    const currentDataLogger = Date.now();
    try {
        const source = SourceModel.create(path);
        const dom = await getCheerioDOM(source);
        const eslint = await getEsLintResult(source);
        const stylelint = await getStyleLintResult(source);
        const lighthouse = await getLightHouseResult(source);
        const htmlValidator = await getHTMLValidatorResult(source);

        const staticModules = [
            SeoAudit,
            CssAudit,
            A11yAudit,
            HtmlAudit,
            SecurityModule,
            PerformanceAudit,
            JsAuditModule,
            //  TypescriptAuditModule,
        ]

        const urlModules = [
            SeoAudit,
            A11yAudit,
            CssAudit,
            HtmlAudit,
            JsAuditModule,
            SecurityModule,
            PerformanceAudit,
            //  TypescriptAuditModule,
        ]
        const modules = source.isURL ? urlModules : staticModules;
        const config: IConfig = options.config ? JsonFileUtils.parseFile<IConfig>(options.config) : defaultConfig;

        const results = await modules.reduce<Promise<{ [k: string]: Message[] }>>(async (result, module) => {
            const res = await result;
             const instance = new module(source, config, dom, lighthouse, htmlValidator, eslint);
            res[instance.name] = await instance.check();
            return result;
        }, Promise.resolve({}))

        const onlyMessages = Object.values(results).reduce((acum, messageList) => {
            acum.push(...messageList);
            return acum;
        }, []);
        const maxWarningOption = lintResultMaxWarnings(options.maxWarning, onlyMessages);
        spinner.succeed('Audit completed!');

        console.log(chalk.green.bold('\nAudit Report'));
        for (const [section, result] of Object.entries(results)) {
            let clearMessageList = lintResultQuite(options.quite, result);
            console.log(`\n${chalk.cyan(section.toUpperCase())}`);
            if(clearMessageList.length === 0 || result.every(x => x.type === MessageType.passed)) {
                console.log(`- ${chalk.green('✔') } all tests are  passed`)
            } else {
                clearMessageList.filter((message) => console.log(`- ${consoleMessageMap.get(message.type)} ${message.message}`))
            }
        }


        console.log(`\n Total working time: ${(Date.now() - currentDataLogger) / 1000}s`);
        const auditHasError = Object.values(results)
            .reduce((list, item) => {
                list.push(...item)
                return list;
            }, [])
            .some(x => x.type === MessageType.error);

        const exitCode = auditHasError || maxWarningOption ? 1 : 0
        process.exit(exitCode);
    } catch (error) {
        spinner.fail('Audit failed.');
        console.error(error);
        process.exit(2);
    }
}
async function getCheerioDOM(source: SourceModel): Promise<CheerioAPI> {
    return  source.isURL ?
        await cheerio.fromURL(source.url) :
        cheerio.load(await readFile(source.file.relativePath, 'utf-8'));
}

async function getLightHouseResult(source: SourceModel): Promise<any> {
    const PORT: number = 9900;
    const path = source.isURL ? source.url : `http://localhost:${PORT}/${source.file.filename}`;
    const dir = source.isURL ? process.cwd() : source.file.dir;
    const server = http.createServer((req, res) => {
        return handler(req, res, { public: dir });
    });

    // @ts-ignore
    await new Promise(resolve => server.listen(PORT, resolve));

    const chrome = await launch({ chromeFlags: ['--headless'] });
/*
    const result = await lighthouse(path, {
        port: chrome.port,
        output: 'json',
        logLevel: 'error',
    });
    killAll();
    server.close();
*/
    return {
        lhr: {
            audits: []
        }
    };
    // return result || {} as RunnerResult;
}

async function getHTMLValidatorResult(source: SourceModel) {
    const htmlFiles = await HtmlValidatorUtils.getHTMLFiles(source);
    return await HtmlValidatorUtils.getHTMLValidatorResult(htmlFiles);
}

async function getEsLintResult(source: SourceModel): Promise<ESLint.LintResult[]>  {
    const jsFiles = await EslintHelper.getJavaScriptFiles(source)
    return await EslintHelper.getEslintResult(jsFiles);
}

async function getStyleLintResult(source: SourceModel) {
    const cssFiles = await StylelintHelper.getCSSFiles(source);
    return await StylelintHelper.getStyleLintResult(cssFiles);
}

function lintResultQuite(quietOption: boolean, result:  Message[]) {
    let clearMessageList;
    if (quietOption) {
        clearMessageList = result.filter(x => x.type === MessageType.error || x.type === MessageType.warning);
    } else {
        clearMessageList = result.filter(x => x.type !== MessageType.disable);
    }
    return clearMessageList;
}

function lintResultMaxWarnings(maxWarningOption: number, result: Message[]): boolean {
    const maxWarning = result.reduce((acum, item) => {
        if (item.type === MessageType.warning) {
            acum += 1;
        }
        return acum;
    }, 0)

    return maxWarning >= maxWarningOption;
}