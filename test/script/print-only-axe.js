const file = require('../html-vs-exa.json')
const rules = file.only_in_axe_core.reduce((rules, item) => {
    rules.push(item.rule)
    return rules;
}, [])
console.log(rules);