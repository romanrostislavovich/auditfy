import fs from "node:fs";
import {globSync} from "glob";

function createRuleListMD(rules, docsPath, moduleName) {
    let template = `
# HTML

| Name                                                                | Description                                                                                          |
|:--------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------|
`

    rules.forEach(rule => {
        template += `| [${rule.id}](${rule.url}) | ${rule.description}|\n`
    })

    template = template.replaceAll('<', '').replaceAll('>', '');
    fs.writeFileSync(docsPath + `/${moduleName}.rules.md`, template)
}


function getRulesList  (path) {
    const dirtyRules = globSync(path);
    const listOfRules =  dirtyRules.map((path) => {
        try {
            const file = fs.readFileSync(path, { encoding: 'utf8', flag: 'r' });
            const id = file.match(/id\s*:\s*string\s*=\s*'([^']+)'/) ? file.match(/id\s*:\s*string\s*=\s*'([^']+)'/)[1] : '';
            const description = file.match(/description\s*:\s*string\s*=\s*'([^']+)'/) ?  file.match(/description\s*:\s*string\s*=\s*'([^']+)'/)[1] : "";
            const url = file.match(/ruleUrl\s*:\s*string\s*=\s*'([^']+)'/) ?  file.match(/ruleUrl\s*:\s*string\s*=\s*'([^']+)'/)[1] : '';
            return {
                id,
                description,
                url,
            }
        } catch (e) {
            console.log(path);
        }

    });
    return listOfRules;
}

// const a11yRules = getRulesList('./src/modules/css/rules/**/*.ts');
// createRuleListMD(a11yRules, 'docs/rules', 'css')