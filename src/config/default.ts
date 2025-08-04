import {ModuleFlowEnum} from "../enum/module.enum";

const config  = {
    modules: {
        seo:  ModuleFlowEnum.warning,
        css:  ModuleFlowEnum.warning,
        html: ModuleFlowEnum.warning,
        a11y:  ModuleFlowEnum.warning,
        security:  ModuleFlowEnum.error,
        javascript:  ModuleFlowEnum.warning,
        performance: ModuleFlowEnum.warning,
    }
};

export { config };