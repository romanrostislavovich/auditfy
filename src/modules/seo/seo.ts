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

export class SeoAudit extends Audit {
    constructor(source: SourceModel, dom: CheerioAPI, lightHouse: RunnerResult, htmlValidator: Result[]) {
        super();
        this.dom = dom;
        this.source = source;
        this.lighthouse = lightHouse;
        this.htmlValidator = htmlValidator;
        this.name = "SEO"
    }

    async check(): Promise<Message[]> {
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

        return rules.reduce<Message[]>((messages, rule, i) => {
            const instance = new rule(this.dom, this.lighthouse.lhr.audits, this.htmlValidator);
            messages.push(...instance.check());
            return messages;
        }, [])
    }
}