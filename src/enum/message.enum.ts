import chalk from "chalk";

export enum MessageType {
    error = 'error',
    passed = 'passed',
    disable = 'disable',
    warning = 'warning',
}

export const consoleMessageMap = new Map([
    [MessageType.error, chalk.red('✘')],
    [MessageType.warning, chalk.yellow('⚠')],
    [MessageType.passed, chalk.green('✔')],
    [MessageType.disable, chalk.grey('☠')],
])