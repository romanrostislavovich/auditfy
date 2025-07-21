import path from "node:path";

class PathUtils {
    public static getNormalizePath(filePath: string): string {
        const resolvePath = path.isAbsolute(filePath) ? filePath : path.resolve(process.cwd(), filePath);
        return path.normalize(resolvePath);
    }
}

export { PathUtils };