import {Message} from "../models/message.model";
import {MessageType} from "../enum/message.enum";
import {Result} from "html-validate";
import {LightHouseAuditType} from "../types/modules.type";
import stylelint from "stylelint";
import {URLUtils} from "../utils/url.utils";
import path from "node:path";
import {SourceModel} from "../models/source.model";
import {CheerioAPI} from "cheerio";
import {globSync} from "glob";
import {CheerioUtils} from "../utils/cheerio.utils";
import {HtmlValidatorUtils} from "./html-validator.helper";

export class StylelintHelper {
    // TODO: performance issue: Run identifyRule loop outside of each rule
    static identifyRule(ruleId: string, ruleFlow: MessageType, stylelint: stylelint.LinterResult[]) {
        const messages = [];
        const ruleResult = stylelint.reduce<any[]>((l, item) => {
            const rules = item.results.reduce<any[]>((x, rules) => {
                if (!!rules._postcssResult) {
                    x.push(...rules._postcssResult.messages.filter((r) => r.rule === ruleId));
                }
                return x;
            }, [])
            l.push(...rules);
            return l;
        }, [])

        const messageList = ruleResult.length !== 0
            ? ruleResult.map((x) => Message.create(`${x.text} at line ${x.line}. Rule: ${ruleId}`, ruleFlow))
            : [Message.create(`Rule ${ruleId} is passed`, MessageType.passed)]
        messages.push(...messageList)
        return messages;
    }

    static async getStyleLintResult(sources: SourceModel[]): Promise<stylelint.LinterResult[]> {
        if (sources.length === 0) {
            return []
        }

        const stylelintConfig = {
            config: {
                extends: "stylelint-config-standard",
            },
        }

        const styleLintResult: stylelint.LinterResult[] = [];
        const urlFileList = sources.filter(x => x.isURL);
        const staticFileList = sources.filter(x => !x.isURL)
        const urlFilesContent = urlFileList.map(async (x) => await URLUtils.download(x.url))

        if(urlFilesContent.length !== 0) {
            for (const urlFile of urlFilesContent) {
                const index = urlFilesContent.indexOf(urlFile);
                const lintFileResult = await stylelint.lint({
                    code: await urlFile,
                    codeFilename: urlFileList[index].file.filename,
                    ...stylelintConfig,
                })
                styleLintResult.push(lintFileResult);
            }
        }


        if (staticFileList.length !== 0) {
            styleLintResult.push(await stylelint.lint({
                files: staticFileList.map(x => x.file.absolutePath),
                ...stylelintConfig,
            }));
        }
        return styleLintResult;
    }


    static async getCSSFiles(source: SourceModel): Promise<SourceModel[]> {
        const cssFiles: SourceModel[] = [];

        if(!source.isURL) {
            const files = globSync(`${source.file.dir}/**/*.css`);
            cssFiles.push(...files.map((file) => SourceModel.create(file)))
        }

        if (source.isURL) {
            const dom = await CheerioUtils.getDOM(source);
            dom('link[rel="stylesheet"]').each((i, elem) => {
                const href = dom(elem).attr('href');
                if (href) {
                    if (href?.startsWith("http") || href?.startsWith("https")) {
                        cssFiles.push(SourceModel.create(href));
                    } else {
                        const prefixPath = source.isURL ? source.url : source.file.dir;
                        cssFiles.push(SourceModel.create(`${prefixPath}/${href}`));
                    }
                }
            });
        }

        return cssFiles;
    }
}