// Cloudflare Email Obfuscation rewrites every mailto link into
// /cdn-cgi/l/email-protection#..., which crawlers fetch and get a 404 (OpenSEO
// "broken internal link" on every page). Cloudflare skips anything between
// <!--email_off--> and <!--/email_off-->, so wrap each mailto anchor in the
// exported HTML. React hydration ignores plain comment nodes.
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const walk = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') ? [p] : [];
  });

let wrapped = 0;
for (const file of walk('out')) {
  const html = readFileSync(file, 'utf8');
  const next = html.replace(/<a\b[^>]*href="mailto:[^"]*"[^>]*>[\s\S]*?<\/a>/g, (m) => {
    wrapped++;
    return `<!--email_off-->${m}<!--/email_off-->`;
  });
  if (next !== html) writeFileSync(file, next);
}
console.log(`email-off: wrapped ${wrapped} mailto links`);
