# website-auditfy
[![semantic](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![NPM](https://img.shields.io/npm/v/website-auditfy)](https://www.npmjs.com/package/website-auditfy)
[![download npm](https://img.shields.io/npm/dm/website-auditfy.svg)](https://www.npmjs.com/package/website-auditfy)
> 

## Table of Contents

- [Background](#background)
- [Installation](#installation)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#license)

## Background 

Current each developer using a lot of tools for checking accessibility, SEO, performance and html validation. (like lighthouse, page speed, wave and e.t.c)
This application try to merge all of them to one tool with simplify using. 

This tool included following modules: 
- SEO (custom)
- Performance (lighthouse)
- Accessibility check (puppeteer)
- HTML (html-validator)
- CSS (stylelint, with stylelint-config-standard)
- structured (custom)

Future:
- JS Validation 
- Security audit 
- Configuration modules
- and e.t.c

## Installation

Required: 
```angular2html
- Node v20+
- `Google Chrome` or `chrome-launcher' for `puppeteer`
```

How to setup `chrome-launher` for your CI/CD see example [here](./docs/chrome-launcher.md)
```bash
npm install website-auditfy 
```

```bash
yarn add website-auditfy
```

```bash
pnpm add website-auditfy
```

## Usage

```bash
website-auditfy path/to/index.html
```

#### Example output

![img.png](docs/img/img.png)

The CLI process may exit with the following codes:


- 0: Audit succeeded without errors (warnings may have occurred)
- 1: Audit failed with one or more rule violations with severity error
- 2: An invalid command line argument or combination thereof was used

## Contribute

## License

Apache