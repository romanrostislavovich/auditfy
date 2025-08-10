import fs from "node:fs";
import {glob, globSync} from "glob";
const savePath = 'docs/rules';
function createModuleMD(rules) {
    let template = `
# HTML

| Name                                                                | Description                                                                                          |
|:--------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------|
`

    rules.forEach(rule => {
        if (rule.url) {
            template += `| [${rule.id}](${rule.url}) | ${rule.description}|\n`
        } else {
            template += `| ${rule.id} | ${rule.description}|\n`
        }

    })

    template = template.replaceAll('<', '').replaceAll('>', '');
    fs.writeFileSync(savePath + '/performance.rules.md', template)
}


const performanceDirtyRules = globSync('./src/modules/perfomance/rules/**/*.ts');

const listOfRules =  performanceDirtyRules.map((path) => {
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
createModuleMD(listOfRules);
