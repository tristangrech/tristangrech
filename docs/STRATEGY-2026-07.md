# tristangrech.com — Client Acquisition Strategy (July 2026)

Written 2026-07-11. Context: cash-first, Almaty move coming, current French businesses may wind down or continue remotely. Goal: a steady flow of **website, web app, and audit clients**, plus optionality to relaunch **studio services in Almaty**.

---

## 1. The one insight everything hangs on

A paying client found Studio Nice Podcast **through Claude**. That is not luck; it is the SNP playbook working: static HTML, entity-clear copy, Service + FAQ schema, concrete facts (prices, places, gear) that AI assistants can quote. This channel:

- works from anywhere (Nice or Almaty, it doesn't care),
- compounds (pages keep answering questions for years),
- is cheap (your time, no ad spend),
- and is itself **the product you sell**. "A client found us through an AI assistant, we build sites that make that happen for you" is the strongest pitch in your arsenal because almost no local agency (France or Kazakhstan) can say it.

So the strategy is: **make tristangrech.com the proof, sell the audit as the wedge, deliver websites/web apps as the core, and replicate the playbook in Almaty before you land.**

## 2. Positioning (what the site must say in one breath)

> Tristan Grech builds websites, web apps and booking systems that get found by Google **and recommended by AI assistants**, and films professional video (Cannes Lions 2026, broadcast-grade interview production). Based in Nice, working remotely from Paris to Almaty, in French, English and Russian.

Video-first design is not decoration here: research shows video presence is the **#1 measured correlate of being named by AI assistants** (Ahrefs 75k-brand study, YouTube mentions r=0.737). Your showreel does double duty: proof of the studio offer, and fuel for the web offer's GEO story.

## 3. Offer ladder (cash-first)

| Rung | Offer | Why it's the right shape |
|---|---|---|
| 1. Wedge | **Website & AI-visibility audit**, fixed price, 48h turnaround | Low friction, pure margin, remote, forces a concrete deliverable ("here is why ChatGPT never mentions you"), and ~half of audits convert into rung 2. |
| 2. Core | **Website build** (multilingual, schema-first, GEO-ready) | Your proven craft: fullhaura-services (FR/EN/RU, 16 schema pages), SNP (18 SEO pages). Productize: fixed scope, fixed price, 2-week ship. |
| 3. Premium | **Web app / booking engine** (Stripe, calendar, dashboards, AI agents) | SNP booking engine is the demo: Stripe Checkout + Google Calendar + Postgres, running a real business. Few freelancers can show a live one. |
| 4. Recurring | **Care + content + GEO retainer** (updates, journal posts, schema freshness, monthly AI-visibility check) | Freshness within ~30 days measurably lifts AI citations (~3x in 2026 analyses). Retainers are the salary replacement. |
| Parallel | **Studio & video production** (Nice now, Almaty later) | Feeds the web funnel with clients and the GEO engine with YouTube presence. |

Pricing note: AI engines extract prices verbatim and answer "how much does X cost in Y" with the page that states a number. Publishing a fixed audit price and "from €" anchors for builds would materially help GEO. **Prices are your call**, the site ships without invented numbers; add them when you decide (recommended within the week).

## 4. GEO plan for tristangrech.com (this build)

On-site (shipped in this redesign):
1. Static HTML for everything (AI crawlers do not execute JS).
2. Entity clarity in the first 100 words: who, what, where, languages.
3. One consistent identity everywhere: **Nice, France** (the old head/schema said "based in China" while the page said France, conflicting entity data suppresses AI citations).
4. JSON-LD @graph: Person + ProfessionalService (areaServed: Côte d'Azur, France, Kazakhstan/remote) + Service per offer + FAQPage mirroring a **visible** FAQ + VideoObject once the showreel lands.
5. Open robots.txt including retrieval bots (OAI-SearchBot, Claude-SearchBot, Claude-User, PerplexityBot, Perplexity-User) — blocking retrieval bots is what kills citations, training bots are irrelevant to visibility.
6. llms.txt (cheap, agent-facing; not a ranking lever).
7. Citable facts with numbers and dates on every case study (17 edits overnight, 4K 50p, delivered next day, −14 LUFS...). The Princeton GEO study's top-3 techniques: quotations, statistics, citations (+30-40% visibility).
8. Locales en/fr/ru (fr for the Côte d'Azur pipeline, ru for Almaty/CIS). zh/ar dropped, they carried the dead China-era identity.

Off-site (your weekly loop, ~2h/week, in priority order):
1. **YouTube**: publish the showreel + one craft video/month ("How a Cannes Lions shoot becomes 17 edits overnight"). Strongest measured lever for AI recommendations.
2. **Google Business Profile** for the web/studio business (you already own SNP's), + reviews from Silvia, Adel, Rouhana, Anna.
3. Directories/mentions: Malt, LinkedIn services, local directories; in KZ later: 2GIS, Kwork profile as a top-tier anchor (not to compete on price, to exist where AI looks).
4. Monthly monitoring: ask Claude/ChatGPT/Perplexity "who can build a website in Nice / who does AI-ready websites / подкаст студия Алматы" and log answers. Adjust pages to the questions.

## 5. Almaty plan (before you land)

**Web/audit offer: fully portable now.** Sell remotely to CIS clients in Russian (site's ru locale + Jasmine). Don't underbid local agencies (A-LUX from $500 landing pages); sell what they don't have: AI-integrated sites, western design standard, GEO. Anchor on the audit.

**Studio offer: don't rent square meters first.** Almaty studio rental runs ~13,000 KZT/hr (~€22, Ucast) — 5-8x below Nice. The margin is in:
- **premium corporate interview production** for banks/telcos/international firms (above the local ~€120 full-package norm, your Cannes Lions + broadcast-audio proof justifies it),
- **the SNP playbook itself**: launch a Russian-first "podcast studio Almaty" site with booking engine + GEO pages *before arrival* so it ranks/gets cited by the time you land; partner with an existing studio (Ucast/Studio7 model) for the room instead of leasing.

**Legal checklist (do before invoicing KZ):**
1. Fix the EI activity code (registered as delivery; add media/web) — a KZ bank's compliance check against SIRENE is where this surfaces.
2. KZ clients must withhold 20% on "consulting-type" services **unless** you hand them a French tax residency certificate (impots.gouv.fr attestation) in time; word contracts as production/development, not consulting.
3. Invoice HT with "TVA non applicable, art. 259-1 du CGI" (non-EU B2B). Bilingual RU/EN contract + invoice for their currency-control paperwork. Stripe works for KZ corporate cards.
4. Avoid B2C digital sales to KZ individuals (triggers KZ VAT registration).

## 6. Sequence (next 30 days)

1. **Now**: this redesign live + indexed (GSC queue), showreel slot ready.
2. **You record the showreel** → drop in `public/video/showreel.mp4` (instructions in `public/video/README.md`) → redeploy → publish same video on YouTube.
3. **Price the audit** → add to site + Service schema → announce on LinkedIn/WhatsApp status.
4. Ask Silvia + Rouhana for portfolio blessing (footage + names) and reviews; swap text-only credits for video clips when blessed.
5. Weekly off-site loop (§4). Monthly AI-answer monitoring.
6. When Almaty dates firm up: register the studio domain, ship the RU-first studio site (SNP clone), start its GEO clock 60-90 days before arrival.

## 7. What this build ships (reference)

Video-first homepage (en/fr/ru), production-monitor design system, case studies with verified facts only (Halo AI text-only pending Rouhana's blessing, no Silvia/Luca faces pending her OK), visible FAQ + full JSON-LD graph, open AI robots, llms.txt, redirects for dropped zh/ar, cleaned repo (BMAD folder, dead links), CF Pages deploy.

Sources for the GEO claims: Ahrefs 75k-brand AI visibility study, Princeton GEO paper (+30-40% techniques), Vercel AI crawler analysis (no JS execution), OpenAI/Anthropic/Perplexity crawler docs, ppc.land llms.txt adoption data. Almaty: ucast.kz, studio7almaty.kz, amelia.kz, a-lux.kz, qazaqsoft.kz, PwC/Leinonen KZ tax notes, BOFiP France-Kazakhstan convention.
