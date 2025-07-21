import path from "node:path";
import {PathUtils} from "../utils/path.utils";

export class File{
    dir!: string;
    filename!: string;
    extension!: string;
    absolutePath!: string;
    relativePath!: string;
    pathWithExtension!: string;
    test!: string;

    constructor() {}

    static create(filePath: string): File {
        const file = new File();
        const normalizePath = PathUtils.getNormalizePath(filePath);
        file.dir = path.dirname(normalizePath);
        file.filename = path.basename(normalizePath);
        file.extension = path.extname(normalizePath);
        file.relativePath = `${file.dir}/${file.filename}`;
        file.absolutePath = normalizePath;
        file.pathWithExtension = `file://${file.absolutePath}`
        return file;
    }
}