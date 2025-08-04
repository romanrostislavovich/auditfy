import * as fs from "node:fs";
import chalk from "chalk";
import path from "node:path";

const packageJsonPath: string = './package.json';

export class JsonFileUtils {
    static parseFile<T>(filePath: string): any {
        if (!fs.existsSync(filePath)) {
            throw new Error(chalk.red(`File doesn't exists by path ${filePath}`));
        }
        const configFile: Buffer = fs.readFileSync(filePath);
        const result: T = JSON.parse(configFile.toString());
        return result;
    }

    static getPackageJsonPath(): string {
        const result: string = path.resolve(__dirname,  '../../../', packageJsonPath);
        return result;
    }

    static  saveJsonFile<T>(data: T, path: string): void {
        const jsonSpaces: number = 4;
        fs.writeFileSync(path, JSON.stringify(data,  null, jsonSpaces));
    }
}
