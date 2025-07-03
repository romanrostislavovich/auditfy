import { launch, killAll } from 'chrome-launcher';
import lighthouse, {Audit, Gatherer, Result, RunnerResult} from 'lighthouse';
import {Result as AuditResult} from "lighthouse/types/lhr/audit-result";
import * as path from "node:path";
import * as http from "node:http";
import handler from 'serve-handler';
import {Message} from "../../models/message.model";
import {MessageType} from "../../enum/message.enum";

const PORT = 9900;

export async function performanceAudit(file: string) {
    const dir: string = path.dirname(file);
    const filename: string = path.basename(file);

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
    killAll();
    server.close();

    const audits: Record<string, AuditResult> | undefined = result?.lhr.audits;


    if(audits) {
        const TBTScore = audits['total-blocking-time'].score || 0;
        const CLSScore = audits['cumulative-layout-shift'].score || 0;
        const LCPScore = audits['largest-contentful-paint'].score || 0;

        return [
            {
                message: `LCP score:  ${LCPScore}`,
                passed: LCPScore >= 0.9
            },
            {
                message: `TBT score: ${TBTScore}`,
                passed: TBTScore >= 0.9
            },
            {
                message: `CLS score: ${CLSScore}`,
                passed: CLSScore >= 0.9
            }
        ];
    }

    return [];

}
