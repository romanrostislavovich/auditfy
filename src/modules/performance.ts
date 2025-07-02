import { launch, killAll } from 'chrome-launcher';
import lighthouse, {Audit, Gatherer, Result, RunnerResult} from 'lighthouse';
import {Result as AuditResult} from "lighthouse/types/lhr/audit-result";
import * as path from "node:path";
import * as http from "node:http";
import handler from 'serve-handler';
import {Message} from "../models/message.model";
import {MessageType} from "../enum/message.enum";

const PORT = 9900;
export async function performanceAudit(file: string) {
    const dir = path.dirname(file);
    const filename = path.basename(file);

    const server = http.createServer((req, res) => {
        return handler(req, res, { public: dir });
    });

    // @ts-ignore
    await new Promise(resolve => server.listen(PORT, resolve));

    const chrome = await launch({ chromeFlags: ['--headless'] });
    const result = await lighthouse(`http://localhost:${PORT}/${filename}`, {
        port: chrome.port,
        output: 'json',
        logLevel: 'error',
        onlyCategories: ['performance']
    });
    console.log( result?.lhr.audits);
    killAll();
    server.close();

    const audits: Record<string, AuditResult> | undefined = result?.lhr.audits;



    if(audits) {
        return [
            {
                message: `LCP score: ${audits['largest-contentful-paint'].score}`,
                passed: (audits['largest-contentful-paint'].score || 0) >= 0.9
            },
            {
                message: `TBT score: ${audits['total-blocking-time'].score}`,
                passed: (audits['total-blocking-time'].score || 0) >= 0.9
            },
            {
                message: `CLS score: ${audits['cumulative-layout-shift'].score}`,
                passed: (audits['cumulative-layout-shift'].score || 0) >= 0.9
            }
        ];
    }

    return [];

}
