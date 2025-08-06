# website-auditfy

> Tool for validate your website on SEO, HTML, CSS, JS, TS, Performance, Security and A11Y

[![semantic](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![NPM](https://img.shields.io/npm/v/website-auditfy)](https://www.npmjs.com/package/website-auditfy)
[![download npm](https://img.shields.io/npm/dm/website-auditfy.svg)](https://www.npmjs.com/package/website-auditfy)

## Table of Contents

- [Background](#background)
- [Installation](#installation)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#license)

## Background 

Current each developer using a lot of tools for checking accessibility, SEO, performance and html validation. (like lighthouse, page speed, wave and e.t.c)
This application try to merge all of them to one tool with simplify using. 

### Included

This tool included following modules: 

- HTML  -  `status: 81 Rules.` [List of html rules](/docs/rules/html.rules.md)
- CSS  -  `status: 40 Rules and to be continue`
- JavaScript - `status: 100+ Rules from eslint and to be continue`
- Security - `status: 16 Rules.` [List of security rules](/docs/rules/security.rules.md)
- SEO  - `status: 17 Rules`[List of SEO rules](/docs/rules/seo.rules.md)
- Performance  - `status: 5 rules and to be continue`
- Accessibility check  -  `status: 83 Rules and  to be continue`

| Module\Mode    | URL | Static |
|:---------------|:----|:-------|
| SEO            | ☑   | ☑      |
| Performance    | ☑   | ☑      |
| Accessibility  | ☑   | ☑      |
| HTML           | ☑   | ☑      |
| CSS            | ☓   | ☑      |
| Security       | ☑   | ☑      |
| JavaScript     | ☓   | ☑      |


### Future:
- TS Validation
- Configuration modules
- Configuration rules
- Custom rule or module
- mode `production` or `develop`
- AI integration
- plugins
- and e.t.c

## Installation

Required: 
```angular2html
- Node v20+
```

How to set up `chrome-launher` for your CI/CD see example [here](./docs/chrome-launcher.md)
#### NPM
```bash
npm install website-auditfy 
```
#### Yarn
```bash
yarn add website-auditfy
```
#### PNPM 
```bash
pnpm add website-auditfy
```

## GitHub
The source code are available for download at [GitHub Releases](https://github.com/romanrostislavovich/auditfy/releases) 

## Usage

#### CLI

```bash
Usage: website-auditfy [options] <-s, --source [path] (required) >

Simple CLI tools for check SEO, HTML, CSS, JS, TS, Performance, Security and A11Y

Arguments:
  -s, --source [path] (required)   
          URL or Path to the HTML file to audit
          Possible Values: <relative path|absolute path|URL>
          

Options:
  -c, --config [path]              
          Path to the JSON config file
          Possible Values: <relative path|absolute path>

  -v, --version
          Print current version


  -h, --help
          Print help




Current version: 0.1.4

Examples:

    $ website-auditfy path/to/index.html -c ./path/to/config.json
    $ website-auditfy https://github.com
```

Default Config is:

```json
{
  "modules": {
    "seo": {
      "canonical-not-localhost": "error",
      "canonical": "error",
      "meta-description": "error",
      ...
    },
    "html": {
      "attr-delimiter": "warning",
      "attr-spacing": "error",
      "close-attr": "error",
      ...
    },
    "security": {
      "require-csp-nonce":  "warning",
      "detect-eval-with-expression":  "warning",
      "detect-possible-timing-attacks":  "warning",
      "detect-unsafe-regex":  "warning",
      ...
    }
  }
}
```

Full default config you can see [here](./src/config/default.ts)

NOTE:
> CONFIG FILE: Right for configuration available only SEO, HTML and Security modules. Rest modules on development.

## Output

#### Example output 
![img.png](docs/img/img.png)

The CLI process may exit with the following codes:


- 0: Audit succeeded without errors (warnings may have occurred)
- 1: Audit failed with one or more rule violations with severity error
- 2: An invalid command line argument or combination thereof was used

## Contribute

Lets fun :) 

## Usage By 

Here can be your application :)

## License

[Apache](./LICENSE)