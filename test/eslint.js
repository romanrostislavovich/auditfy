import {ESLint, Linter} from "eslint";
import pkg from "eslint-plugin-security";

import tseslint from 'typescript-eslint';
const { configs , rules} = pkg;
const ss = new Linter({
    configType: 'flat'
})
const { recommended } = configs;
const ops = new ESLint({
    overrideConfigFile: true,
    baseConfig: {

    },
    overrideConfig: tseslint.configs.recommended
})
const ops1 = await ops.lintFiles(['./test/javascript/app.javascript', './src/index.ts']);

console.log(ops1[0].filePath)
console.log(ops1[0].messages);

