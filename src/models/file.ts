export class File {
    name!: string;
    extension!: string;
    absolutePath!: string;
    relativePath!: string;

    constructor() {}

    static convert(path: string): File {
        return  new File()
    }
}