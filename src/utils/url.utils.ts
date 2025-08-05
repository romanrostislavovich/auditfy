import { fetch, Agent } from 'undici';

export class URLUtils {
    static agent = new Agent({ connect: {
            rejectUnauthorized: false
    } });
    static async download(url: string): Promise<string> {
        return await fetch(url, {
            method: 'GET',
            dispatcher: URLUtils.agent
        }).then(res => res.text());
    }
}