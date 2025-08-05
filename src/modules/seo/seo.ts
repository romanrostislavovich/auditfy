import { readFile } from 'fs/promises';
import * as cheerio from 'cheerio';
import {TitlePresentRule} from "./rules/title-present.rule";
import {DescriptionRule} from "./rules/description.rule";
import {CanonicalPresentRule} from "./rules/canonical-present.rule";
import {Message} from "../../models/message.model";
import {Cheerio, CheerioAPI} from "cheerio";
import {HeaderPresentRule} from "./rules/header-present.rule";
import {OgRule} from "./rules/og.rule";
import {TwitterRule} from "./rules/twitter.rule";
import { File } from '../../models/file.model'
import {Audit} from "../../models/audit.model";
import {RunnerResult} from "lighthouse";
import {TitleLengthRule} from "./rules/title-length.rule";
import {CanonicalNotLocalhostRule} from "./rules/canonical-not-localhost.rule";
import {HeaderNotEmptyRule} from "./rules/header-not-empty.rule";
import {HeaderOnlyOneRule} from "./rules/header-only-one.rule";
import {IsCrawlableRule} from "./rules/is-crawlable.rule";
import {LinkTextRule} from "./rules/link-text.rule";
import {StructuredDataPresentRule} from "./rules/structured-data-present.rule";
import {StructuredDataValidRule} from "./rules/structured-data-valid.rule";
import {HrefLangRule} from "./rules/href-lang.rule";
import {ImageAltRule} from "./rules/image-alt.rule";
import {Result} from "html-validate";
import {HeadingLevelRule} from "./rules/heading-level.rule";
import {SourceModel} from "../../models/source.model";
import {EmptyTitleRule} from "./rules/empty-title.rule";
import {IConfig} from "../../config/default";
import {RuleInterface} from "../../models/rule.model";

export class SeoAudit extends Audit {
    constructor(
        source: SourceModel,
        dom: CheerioAPI,
        lightHouse: RunnerResult,
        htmlValidator: Result[],
        config: IConfig
    ) {
        super();
        this.dom = dom;
        this.source = source;
        this.lighthouse = lightHouse;
        this.htmlValidator = htmlValidator;
        this.name = "SEO";
        this.config = config;
    }

    async check(): Promise<Message[]> {
        const seoConfigModule = Object.entries(this.config.modules).find((item) => item[0].toUpperCase() === this.name.toUpperCase());
        const seoConfigRules = !!seoConfigModule ? seoConfigModule[1] : {}

        const rules = [
            OgRule,
            TwitterRule,
            LinkTextRule,
            IsCrawlableRule,
            ImageAltRule,
            TitlePresentRule,
            TitleLengthRule,
            HeaderPresentRule,
            HeaderNotEmptyRule,
            HeaderOnlyOneRule,
            HrefLangRule,
            StructuredDataPresentRule,
            StructuredDataValidRule,
            CanonicalPresentRule,
            CanonicalNotLocalhostRule,
            DescriptionRule,
            HeadingLevelRule,
            EmptyTitleRule,
        ]

        const ruleInstanceList = rules.reduce<{[key: string]: RuleInterface }>((list, rule) => {
            const instance = new rule(this.dom, this.lighthouse.lhr.audits, this.htmlValidator);
            list[instance.id] = instance;
            return list;
        }, {})
        let result: Message[] = []
        for(const [rule, flow] of Object.entries(seoConfigRules)) {
            console.log(rule);
            const instance = ruleInstanceList[rule];
            instance.ruleFlow = flow;
            result.push(...instance.check())
        }
        return result;
    }
}