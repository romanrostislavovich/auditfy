# website-auditfy

> Tool for validate your project on SEO, HTML, CSS, JS, TS, Performance, Security and A11Y

[![semantic](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![NPM](https://img.shields.io/npm/v/website-auditfy)](https://www.npmjs.com/package/website-auditfy)
[![download npm](https://img.shields.io/npm/dm/website-auditfy.svg)](https://www.npmjs.com/package/website-auditfy)

## Table of Contents

- [Background](#background)
  - [Included](#included)
  - [Packages inside](#Packages-inside)
- [Installation](#installation)
  - [npm](#npm)
  - [yarn](#yarn)
  - [pnpm](#PNPM)
- [Usage](#usage)
  - [CLI](#cli)
  - [Config](#config)
- [Output](#Output)
- [Future](#future)
- [Contribute](#contribute)
- [License](#license)

## Background

Current each developer using a lot of tools for checking accessibility, SEO, performance and e.t.c. (like lighthouse, wave and, eslint and e.t.c)
This application try to merge all of them to one tool with simplify using. 

### Included

This tool included following modules: 

- HTML  -  `status: 81 rules.` [List of html rules](/docs/rules/html.rules.md)
- CSS  -  `status: 148 rules.` [List of css rules](./docs/rules/css.rules.md);
- JavaScript - `status: 100+ rules from eslint.` [List of JavaScript rules](/docs/rules/JavaScript.rules.md)
- Security - `status: 16 rules.` [List of security rules](/docs/rules/security.rules.md)
- SEO  - `status: 20 rules`[List of SEO rules](/docs/rules/seo.rules.md)
- Performance  - `status: 50 rules.` [List of performance rules](/docs/rules/performance.rules.md)
- Accessibility  -  `status: 92 rules.`[List of A11Y rules](/docs/rules/a11y.rules.md)

| Module\Mode   | URL | Static  | Rule Count |
|:--------------|:----|:--------|:-----------|
| HTML          | ☑   | ☑       | 81         |
| CSS           | ☑   | ☑       | 148        |
| JavaScript    | ☑   | ☑       | 100+       |
| SEO           | ☑   | ☑       | 20         |
| Performance   | ☑   | ☑       | 50         |
| Accessibility | ☑   | ☑       | 92         |
| Security      | ☑   | ☑       | 16         |
| TypeScript    | -   | -       | -          |
| SASS/SCSS     | -   | -       | -          |

#### Packages inside

- EsLint
  - security
  - standard
  - sonarjs
- Lighthouse
- StyleLint
  - standard
- html-validator
- @axe-core

## Installation

Required: 
```angular2html
- Node v20+
```

How to set up `chrome-launher` for your CI/CD see example [here](./docs/chrome-launcher.md)
#### NPM
```bash
npm install website-auditfy --save-dev // devDependencies
npm install website-auditfy -g // global
```
#### Yarn
```bash
yarn  add website-auditfy -D // devDependencies
yarn global add website-auditfy // global
```
#### PNPM
```bash
pnpm add -D website-auditfy // devDependencies
pnpm add -g website-auditfy // global
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

#### Config

Default Config is:

> Full default config you can see [here](./src/config/default.ts)

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
    },
    "performance": {
      "viewport-insight": "warning",
      "uses-passive-event-listeners": "warning",
      "uses-long-cache-ttl": "error",
      .... 
    },
    "a11y": {
      "visual-order-follows-dom": "warning",
      "video-caption": "error",
      "valid-lang": "error",
      ...
    },
    "css": {
      "class-pattern": "warning",
      "id-pattern": "warning",
      "no-style-tag": "error",
      ...
    },
    "javascript": {
      "no-var": "warning",
      "object-shorthand":  "warning",
      "accessor-pairs": "error",
      ...
  }
}
```

## Output

#### Example output 
![img.png](docs/img/img.png)

The CLI process may exit with the following codes:


- 0: Audit succeeded without errors (warnings may have occurred)
- 1: Audit failed with one or more rule violations with severity error
- 2: An invalid command line argument or combination thereof was used

## Future

- rules properties
- mode `production`, `develop` or `release`
- configuration custom modules
- configuration custom rules
- support plugins 

## Contribute

Lets fun :) 

## Usage By 

Here can be your application :)

## License

[Apache](./LICENSE)