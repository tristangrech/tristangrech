# Off-site plan, tristangrech.com (lane N, PLAN ONLY, nothing sent or published)

Baseline (2026-10-11): Serpstat 3 referring domains / 15 backlinks, all on one IP (76.76.21.21, Vercel): revesdelite.com
(12 links, anchor "Site by Tristan Grech"), backtomalta.com (2, anchor "tristangrech.com"), xn--80akuon54c.com (1).
SE Ranking also lists fullhaura.com (4 links, 2026-03-21) and a nofollow xploredomains.com list. Brand SERP not owned
(see keyword-map.md). None of the six portfolio homepages links to the hub.

Portfolio domains, live check 2026-10-11 (curl -L, DNS A record):

| Domain | DNS A | HTTP | Link to tristangrech.com on homepage |
|---|---|---|---|
| sumera.io | 76.76.21.21 | 200 | no |
| fullink.io | 216.198.79.1 | 200 (-> www.fullink.io) | no |
| feufrance.fr | 76.76.21.21 | 200 | no |
| studionicepodcast.com | 172.67.150.165 | 200 (-> /en) | no `<a>`; only JSON-LD text ("worksFor Fullhaura url tristangrech.com") and its Person sameAs points to linkedin.com/in/tristangrech/, which is a namesake (Canadian engineer), not Tristan's /in/fullhaura |
| polytaipe.com | 76.76.21.21 | 200 | no |
| sourcecanton.com | 104.21.67.225 | 200 | no `<a>`; only JSON-LD sameAs "https://tristangrech.com" |
| almatypodcast.com (extra) | 188.114.97.2 | 200 (-> /ru) | no `<a>`; JSON-LD parentOrganization url only |
| revesdelite.com (extra) | 76.76.21.21 | 200 | yes, footer "Site by Tristan Grech" |

Order is by expected impact per hour. Owner "Tristan" = needs him (accounts, voice, face, approvals); "agent" = a
code change in that project's own repo under its own AGENTS.md and deploy rules. No item here was executed.

| # | Action | Target hub page | Owner | Cost |
|---|---|---|---|---|
| 1 | **Portfolio back-links.** Add one visible, crawlable "Built by Tristan Grech" footer link (rel default, not nofollow) on sumera.io, fullink.io, feufrance.fr, studionicepodcast.com, polytaipe.com, sourcecanton.com (and almatypodcast.com). Vary anchors per the playbook mix: brand ("Tristan Grech"), naked URL, one descriptive ("multilingual website by Tristan Grech"). Point the FR sites at /fr, RU at /ru, rest at /en. Disclosed creator credit, not a link scheme | /en, /fr, /ru | agent, one PR per repo, Tristan approves each deploy | ~15 min per site, $0 |
| 2 | **Fix the wrong LinkedIn in studionicepodcast.com JSON-LD** (`linkedin.com/in/tristangrech/` is a namesake) to `/in/fullhaura/`, and add `https://tristangrech.com/en` to its Person sameAs | /en | agent (studionicepodcast repo) | 10 min, $0 |
| 3 | **Profile consistency for the brand SERP.** Same name "Tristan Grech", same one-line role ("Developer and filmmaker, Guangzhou"), same photo, and a link to tristangrech.com/en on: Instagram @tristangrch (already Google US #1 for the name), LinkedIn /in/fullhaura (consider a custom URL with the name if available), GitHub profile (name, bio, website field), Malt (FR freelance marketplace profile with the AI visibility audit and multilingual site offers), YouTube channel About. Then list every one of these in the hub Person sameAs | /en | Tristan (accounts), agent (sameAs) | 1 to 2 h, $0 |
| 4 | **Bing Webmaster Tools**: import the site from GSC, submit sitemap, then read AI Performance > Grounding queries monthly (playbook section 2). Add IndexNow key + post-deploy ping | site | Tristan (account), agent (key file) | 30 min, $0 |
| 5 | **One short video per money keyword** (playbook section 10). Keyword first in title, first spoken sentence and description, proofread transcript in description, link to the page. YouTube Shorts first, then Reels, LinkedIn. Briefs: (a) "AI visibility audit: what ChatGPT says about your business in 60 seconds", screen recording of a real anonymised audit; (b) FR "Audit de visibilité IA : ce que ChatGPT dit de votre entreprise"; (c) FR "Site multilingue FR EN RU : 3 erreurs hreflang", screen walk-through of a live client build; (d) RU "Видеосъемка интервью: как мы сняли 17 роликов за ночь" only if Tristan confirms CIS shoots; uses Cannes Lions client footage only with client permission, never the unreleased showreel | the matching new money page (fallback hub /en#services) | Tristan (face, voice, footage rights) | 1 to 2 h each, $0 |
| 6 | **Linkable asset on the main domain**: a free "AI visibility check" page or a small original-data report (e.g. how ChatGPT, Claude and Perplexity answer "best X in [city]" for 50 real local businesses, method published). Lives at tristangrech.com/en/... , not a separate domain | /en AI visibility audit page | agent builds, Tristan reviews data and claims | 1 to 2 days, under $5 of API calls |
| 7 | **Podcast guest appearances** about AI visibility for small businesses and multilingual sites (PodMatch, MatchMaker.fm, plus FR and RU business podcasts Tristan already knows through Studio Nice Podcast / Almaty Podcast). Ask for a show-note link to the audit page | AI visibility audit page | Tristan | 2 to 4 h per episode, $0 (PodMatch has a paid tier; free tier first) |
| 8 | **Journalist quote platforms answered by hand** (Source of Sources, Featured, Qwoted): only questions on AI search, GEO, multilingual websites, video production. Real answers, real name | /en | Tristan | 20 min per answer, $0 |
| 9 | **Case-study mentions from clients**: ask existing clients whose sites Tristan built (revesdelite already does) for a credit link or a short written testimonial on their own site; publish real testimonials as "Tristan Grech avis / review" videos only with consent | /fr, /en | Tristan | 15 min per ask, $0 |
| 10 | Google Business Profile: **skip** unless Tristan has a real, staffed address customers can visit in Guangzhou; a virtual office would break GBP rules | - | Tristan decides | - |
| 11 | Domain hygiene: confirm renewal dates for revesdelite.com, backtomalta.com and xn--80akuon54c.com (they carry the only backlinks) and that each keeps 200 | - | Tristan | 10 min |

Not proposed (playbook section 12 and CONTEXT rules): no press releases without real news, no paid links or paid
directory blasts, no self-ranked lists, no review sites on separate domains, no Reddit or forum posting under other
names, no fullhaura.com links, no showreel footage, no new /china or /chine facts.
