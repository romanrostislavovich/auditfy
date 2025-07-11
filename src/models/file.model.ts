import path from "node:path";

export class File{
    dir!: string;
    filename!: string;
    extension!: string;
    absolutePath!: string;
    relativePath!: string;
    pathWithExtension!: string;

    constructor() {}

    static create(relativeFilePath: string): File {
        const file = new File();
        file.dir = path.dirname(relativeFilePath);
        file.filename = path.basename(relativeFilePath);
        file.extension = path.extname(relativeFilePath);
        file.relativePath = relativeFilePath;
        file.absolutePath = `${process.cwd()}/${relativeFilePath}`
        file.pathWithExtension = `file://${process.cwd()}/${relativeFilePath}`
        return file;
    }
}