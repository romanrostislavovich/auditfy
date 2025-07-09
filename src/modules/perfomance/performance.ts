import { launch, killAll } from 'chrome-launcher';
import lighthouse, {Audit, Gatherer, Result, RunnerResult} from 'lighthouse';
import {Result as AuditResult} from "lighthouse/types/lhr/audit-result";
import * as path from "node:path";
import * as http from "node:http";
import handler from 'serve-handler';
import {Message} from "../../models/message.model";
import TotalBlockingTimeRule from "./rules/total-blocking-time.rule";
import CumulativeLayoutShiftRule from "./rules/cumulative-layout-shift.rule";

const PORT = 9900;

export async function performanceAudit(file: string): Promise<Message[]> {
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
        return checkPerformance(audits);
    }

    return [];
}

function checkPerformance(audit: Record<string, AuditResult>): Message[] {
    // rules
  //  const LCPRule = new LargestContentfulPaintRule(audit);
    const TBTRule = new TotalBlockingTimeRule(audit);
    const CLSRule = new CumulativeLayoutShiftRule(audit);

    return [
     //   ...LCPRule.check(),
        ...TBTRule.check(),
        ...CLSRule.check()
    ]
}
