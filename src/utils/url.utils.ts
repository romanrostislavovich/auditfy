export class URLUtils {
    static async download(url: string): Promise<string> {
        return await fetch(url).then(res => res.text());
    }
}