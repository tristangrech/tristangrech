# SEO loop: tristangrech.com

One dated entry per SEO pass, newest first. Each entry links its full report and names the next three actions.
The older checklist lives in `docs/SEO-TODO.md` (last updated 2026-08-05); this file supersedes it for new work.

## 2026-10-11: full SEO, AEO and GEO audit (run 2026-10-10)

Report: `docs/seo-audit/2026-10-10/REPORT.md` · ledger: `findings.json` · baselines: `baseline.json`, `geo-baseline.md`.
Shipped `0470c6a..df8064a` to production. 99 findings: 67 Fixed, 27 Blocked, 5 Rejected (adversarial pass on every row).

State after the run:
- One Person entity everywhere (ProfilePage, Guangzhou base, studio in Nice); closed SIREN removed from markup and llms.txt.
- Mobile Lighthouse: /en 79 → 92, /ru 79 → 98, /china 81 → 97, /chine 74 → 97. /chine LCP 6.9s → 2.5s.
- GSC: 17 impressions, 0 clicks, position 6.2 over 28 days; /ru crawled not indexed; indexing requested for all 5 URLs.
- Brand SERP not owned; 3 referring domains; 0 of 35 AI answers mention the site on service prompts.

Next three actions:
1. Tristan: seller identity, CGV and refund terms on /china before more Stripe payments (P0, CONTENT-31).
2. Tristan: price, sample deliverable and scope for the AI visibility audit, so the first money page can be built (F-2), then footer credit links from the 6 portfolio sites (I-2).
3. Tristan, in the Cloudflare dashboard: add www as a Pages custom domain (TECH-1) and fix the Web Analytics token (TECH-2).

Re-measure: GSC and the brand SERP weekly from 2026-10-19; judge on 2026-10-25 to 2026-11-08; rerun the GEO prompts on 2026-11-08.
