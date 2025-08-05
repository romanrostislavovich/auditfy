import {MessageType} from "../enum/message.enum";

export type RuleTypes = { [key: string]: MessageType }
export type ConfigModules = {
    [key: string]: RuleTypes
};
export type IConfig = {
    modules: ConfigModules
}
const config: IConfig = {
    modules: {
        seo: {
            "canonical-not-localhost": MessageType.error,
            "canonical": MessageType.error,
            "meta-description": MessageType.error,
            "empty-title": MessageType.error,
            "header-not-empty": MessageType.error,
            "header-only-one": MessageType.error,
            "header-present": MessageType.error,
            "heading-level": MessageType.error,
            "hreflang": MessageType.error,
            "image-alt": MessageType.error,
            "is-crawlable": MessageType.error,
            "link-text": MessageType.warning,
            "meta-og-present": MessageType.error,
            "structured-data-present": MessageType.warning,
            "structured-data-valid": MessageType.warning,
            "document-title-length": MessageType.error,
            "document-title": MessageType.error,
            "meta-twitter-rule": MessageType.warning
        },
        html: {
        }
    }
};

export { config };