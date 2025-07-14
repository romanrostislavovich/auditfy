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

export class SeoAudit extends Audit {
    constructor(file: File, dom: CheerioAPI, lightHouse: RunnerResult) {
        super();
        this.dom = dom;
        this.file = file;
        this.lighthouse = lightHouse;
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
        ]

        return rules.reduce<Message[]>((messages, rule, i) => {
            const instance = new rule(this.dom, this.lighthouse.lhr.audits);
            messages.push(...instance.check());
            return messages;
        }, [])
    }
}

