# GEO baseline: tristangrech.com

Date: 2026-10-11 (answers captured 09:40 to 09:55 UTC). Audit run seo/audit-20261010, lane H (GEO). Read-only.

What this is: one sample of how 6 AI answer engines answer 10 money prompts, plus an edge check of AI crawler access and an entity-consistency check. Answer engines are non-deterministic and personalised by country, so treat one sample as a baseline to re-run with the same panel, not as a ranking. Re-run the panel with `geo-scripts/run.sh` (treg) and compare.

Properties counted as "Tristan Grech": tristangrech.com, studionicepodcast.com, sourcecanton.com, sumera.io, fullink.io, feufrance.fr, polytaipe.com.

## Method

| Engine | treg endpoint | Notes |
|---|---|---|
| ChatGPT | cloro.ai-search.chatgpt.scrape ($0.0036) | crawl4ai.ai-search.chatgpt.scrape tried first: `HTTP 502 ... "fetch_failed: the source returned no data for this input"` |
| Perplexity | treg.ai-search.perplexity.answer / cloro.ai-search.perplexity.answer | Live UI succeeded only for prompt 10. Prompts 1 to 9 failed twice (`"INTERNAL_SERVER_ERROR","message":"Maximum retries exceeded"`; DataForSEO leg `40200 Payment Required`). Fallback: perplexity.web.answer.fast (Perplexity Agent API, fast preset, 1 step). The API is not the consumer UI, but it shows what Perplexity's index retrieves. |
| Gemini | cloro.ai-search.gemini.scrape | |
| Copilot | cloro.ai-search.copilot.scrape | |
| Google AI Mode | cloro.google.serp.ai_mode | crawl4ai.google.serp.ai_mode tried first: `HTTP 503 ... "google: verification hold on every attempt — retry shortly"` |
| Claude | dataforseo.x.ai-optimization-claude-llm-responses-live (prompts 1, 2, 5) | BLOCKED: `HTTP 402 ... "status_code": 40200, "status_message": "Payment Required."` (DataForSEO balance negative, same as the lead's note). No answer recorded. |

Countries: US for English prompts 1, 2, 3, 5, 7, 8; FR for 4, 6 and for 10 (Cannes); KZ for the Russian prompt 9 (RU is refused by cloro ChatGPT, Gemini and Copilot). AI Mode got the matching hl.

## Mention matrix

Y = a Tristan Grech property is cited or the answer describes this Tristan Grech. N = not. ERR = engine call failed. "PplxAPI" is the Perplexity API fallback.

| # | Prompt | ChatGPT | Perplexity UI | PplxAPI | Gemini | Copilot | AI Mode | Claude |
|---|---|---|---|---|---|---|---|---|
| 1 | Who is Tristan Grech? | Y (3rd of 3 namesakes; /en) | ERR | Y (/en, stale snapshot) | **Y (primary; /en)** | N (footballer + IMDb crew) | N (footballer only) | ERR |
| 2 | Tristan Grech developer and filmmaker | Y (/en; says "Nice") | ERR | Y (/en + LinkedIn; unsure) | Y (/en, sourcecanton.com) | Y (/en, /fr; "Guangzhou and Nice") | Y (/en, /fr, /china, /chine) | ERR |
| 3 | French-speaking freelance web developer in Guangzhou | N | ERR | N | N | N | N | n/a |
| 4 | Développeur web freelance francophone à Canton | N | ERR | N | N | N | N | n/a |
| 5 | Who can audit my website for visibility in ChatGPT and other AI assistants? | N | ERR | N | N | N | N | ERR |
| 6 | Audit de visibilité IA pour un site web, freelance | N | ERR | N | N | N | N | n/a |
| 7 | Freelance developer, multilingual site FR/EN/RU | N | ERR | N | N | N | N | n/a |
| 8 | Freelance developer, booking site with Stripe for a small studio | N | ERR | N | N | N | N | n/a |
| 9 | Разработчик многоязычных сайтов на русском, английском и французском | N | ERR | N | N | N | N | n/a |
| 10 | Videographer for event interviews at Cannes Lions | **Y (studionicepodcast.com/en/services/cannes-lions, #4 of list)** | **Y (studionicepodcast.com cannes-lions + event-filming)** | not run | N | N | N | n/a |

Totals (successful answers only): brand prompts 1 and 2: 8 of 10 answers name or cite this Tristan Grech (prompt 1: 3 of 5; prompt 2: 5 of 5). Non-brand service prompts 3 to 9: 0 of 35 answers. Prompt 10: 2 of 5 (both via studionicepodcast.com, not tristangrech.com).

## What the answers say about the entity

- Base city is inconsistent across engines. Gemini and Google AI Mode: Guangzhou. ChatGPT prompt 2: "Based in France, with professional activity in Nice". Copilot prompt 2: "based between Guangzhou and Nice", citing /fr under a stale title "Tristan Grech — Sites web, applications & production vidéo · Nice". Perplexity's index holds an older /en snapshot (last_updated 2026-03-04): "French entrepreneur with Maltese roots, building from Shenzhen and Shanghai".
- LinkedIn slug /in/fullhaura with headline "Founder @Fullhaura ... Nice, Provence-Alpes-Côte d'Azur" is what Perplexity and AI Mode retrieve for the person. It ties the entity to Nice and to Fullhaura, not to Guangzhou or to the developer/filmmaker title.
- Namesake competition: a Maltese footballer (Transfermarkt, Sofascore, Sannat Lions FC), a Canadian aviation safety manager (LinkedIn, IRF), and an IMDb crew credit nm16689968 (art/camera department, The Count of Monte Cristo 2024). Copilot merged that IMDb crew credit into the developer/filmmaker in prompt 2. Whether nm16689968 is Tristan is unknown to this audit.
- ChatGPT prompt 2 attached cnsourcing.fr to the Source Canton line, a third-party site, as a second source.
- ChatGPT prompt 2 also surfaced behance.net/tristangrech as "Creative portfolio". It is not linked from the site; ownership not verified.

## Fan-out queries returned

- Copilot: 1 "Tristan Grech"; 2 "Tristan Grech developer filmmaker"; 3 "French-speaking freelance web developer in Guangzhou"; 5 "website audit services for AI assistant visibility"; 6 "audit visibilité IA freelance site web"; 9 "разработчик многоязычных сайтов русский английский французский"; 10 "videographer services for event interviews Cannes Lions".
- Perplexity UI prompt 10: "Cannes Lions event interview videographer hire", "Cannes Lions video production interview crew", "Cannes Lions videographer event coverage".
- Perplexity API: the prompt verbatim, every time.
- ChatGPT, Gemini, AI Mode: none returned by the scraper in this configuration.

## Who wins the non-brand prompts (sources cited instead of Tristan)

- 3 and 4 (French-speaking developer in Guangzhou / Canton): malt.com and comeup.com profiles (Romain Zhou), yannick.rancillac.fr, arc.dev, upwork.com, twine.net, codeur.com. Several engines say no such profile is clearly established. This is the most winnable gap: almost no competition, and the answer engines explicitly look for a named person with a Malt / Comeup / LinkedIn style profile.
- 5 and 6 (AI visibility audit): listicles and agencies (ayrank.com, cite.solutions, avantevisibility.com, hubspot.com AI Search Grader, gowp.com, allo-seo.com, biencite.fr, tedchan.fr, stephanedelgado.fr).
- 7 and 9 (multilingual FR/EN/RU): amalabaev.com, marknightingale.net, voronkin.com, codefactura.ru, asasweb.com; Gemini and AI Mode wrote generic how-to text with no providers.
- 8 (booking + Stripe): upwork.com, fiverr.com, freelancer.com, arc.dev, toptal.com. Copilot asked a clarifying question.
- 10 (Cannes Lions): rivieramedia.com, dreamwide.fr, spacevisuals.fr, imagesdazur.com, getcameracrew.com; studionicepodcast.com is in the ChatGPT and Perplexity lists.

## AI crawler access at the edge (curl, 2026-10-11)

All UAs (GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, PerplexityBot, Google-Extended, bingbot) got `200` and the full 55,408-byte /en HTML; /robots.txt `200` (658 bytes) for every UA. No challenge page. The HTML includes Cloudflare's JS detection snippet (`/cdn-cgi/challenge-platform/scripts/jsd/main.js`), which is passive injection, not a block. robots.txt explicitly allows every AI crawler. /llms.txt returns 200. Caveat: curl spoofs the UA only, from a non-bot IP, so Cloudflare's verified-bot rules for the real crawler IP ranges are not exercised.

## Spend

My calls, from treg per-call `charged` lines: $0.1283 over 67 call records (failed calls charged $0). Account balance $7.593274 before, $7.402064 after (delta $0.1912; the account is shared with the other lanes running at the same time, so the delta is an upper bound).

## Per-answer detail

Legend: "property names in text" includes the echo of "tristan grech" from prompts 1 and 2, so it is not a mention on its own. Raw JSON for every call: run/raw/geo/<engine>-<n>.txt; parsed: run/raw/geo-summary.json.

### Prompt 1: "Who is Tristan Grech?" (country US, language en)

**ChatGPT (cloro, live UI)**  
- Tristan property cited: YES: https://tristangrech.com/en; property names in text: tristan grech
- Excerpt: "There are several people named Tristan Grech, so the answer depends on which person you're looking for. Here are three people I found: 1. Tristan Grech — Canadian aviation safety professional Tristan Grech is the Safety and Quality Manager at Cougar Helicopters Inc. in Newfoundland and Labrador, Canada. He has nearly 35 years of..."
- Cited URLs (5): https://irfoffshoresafety.com/wp-content/uploads/2026/02/IRF-Conference-2025_Speaker-Bios.pdf, https://ca.linkedin.com/in/tristan-grech-a5976450, https://www.transfermarkt.com/tristan-grech/profil/spieler/849167, https://www.sofascore.com/football/player/tristan-grech/1095322, https://tristangrech.com/en
- Fan-out / search queries returned: none returned

**Perplexity (cloro, live UI)**  
- Status: FAILED. Error (verbatim, truncated): `treg: HTTP 500 — the provider answered; treg relayed it unchanged; call id 1e3b50a6240c4f9cb788e710a347e483 (quote it to support; `treg calls` shows the record); charged $0 { "success": false, "error": { "code": "INTERNAL_SERVER_ERROR", "message": "Maximum retries exceeded", "timestamp": "2026-10-11T09:50:05.603Z" } }`

**Perplexity API fallback (perplexity.web.answer.fast)**  
- Tristan property cited: YES: https://tristangrech.com/en; property names in text: tristan grech, fullhaura
- Excerpt: "Tristan Grech is a French entrepreneur with Maltese roots, currently based in China. He describes his work as building SaaS and AI products and helping companies operate in the Chinese market; he also has experience in competitive swimming, including on France’s national team.[1] There may be more than one person with that name...."
- Cited URLs (10): https://tristangrech.com/en, https://www.linkedin.com/in/fullhaura, https://wnmumustangs.com/news/2020/12/8/meet-the-mustangs-football-coaching-staff.aspx, https://www.abc.net.au/news/2026-08-09/victims-of-australia-s-1980s-tainted-blood-donation-scandal/106898666, https://irfoffshoresafety.com/wp-content/uploads/2025/11/Safety-and-Compliance_Tristan-Grech-A1282294.pptx, https://orcid.org/0000-0003-2026-7813, https://shows.acast.com/gregoiredossier/episodes/on-parle-loi-de-lattraction-questions-dintrospection-et-reus, https://www.sofascore.com/football/team/marsaxlokk-fc/7704, https://www.parkeselvisfestival.com.au/events/, https://www.sofascore.com/football/team/sk-victoria-wanderers/58329
- Fan-out / search queries returned: Who is Tristan Grech?

**Gemini (cloro, live UI)**  
- Tristan property cited: YES: https://tristangrech.com/en; property names in text: tristan grech
- Excerpt: "Based on public web sources, Tristan Grech is a developer and filmmaker based in Guangzhou, China, who builds multilingual websites, web applications, booking systems, and 4K video content. Some of his independent projects and tools include AI-related SaaS platforms, creator tools, and sourcing services. Tristan Grech · Websites..."
- Cited URLs (1): https://tristangrech.com/en
- Fan-out / search queries returned: none returned

**Copilot (cloro, live UI)**  
- Tristan property cited: no; property names in text: tristan grech
- Excerpt: "Tristan Grech could refer to two different individuals depending on the context: 🎯 Sports : Tristan Grech is a Maltese footballer, born on August 6, 2002. He plays as a midfielder for Sannat Lions FC in the Gozo League. He joined the club in July 2025, with his contract running until June 2027. He previously played for Xewkija T..."
- Cited URLs (4): https://www.transfermarkt.us/tristan-grech/profil/spieler/849167, https://www.transfermarkt.co.uk/tristan-grech/leistungsdatendetails/spieler/849167, https://www.transfermarkt.fr/tristan-grech/profil/spieler/849167, https://www.imdb.com/name/nm16689968/
- Fan-out / search queries returned: Tristan Grech

**Google AI Mode (cloro)**  
- Tristan property cited: no; property names in text: tristan grech
- Excerpt: "Tristan Grech is a Maltese footballer who plays as a midfielder for Sannat Lions FC in the Gozo Football League in Malta. Tristan Grech - Stats 26/27 - TransfermarktSannat Lions FC - Facebook Position: Midfielder Nationality: Maltese Current Team: Sannat Lions FC Career Highlights: He was an important part of Sannat Lions' doubl..."
- Cited URLs (2): https://www.transfermarkt.com/tristan-grech/leistungsdaten/spieler/849167/saison/, https://www.facebook.com/sannatlionsfc/posts/%EF%B8%8F-club-statementsannat-lions-fc-is-delighted-to-confirm-that-tristan-grech-will-/156816
- Fan-out / search queries returned: none returned

**Google AI Mode (crawl4ai)**  
- Status: FAILED. Error (verbatim, truncated): `treg: HTTP 503 — the provider answered; treg relayed it unchanged; call id 6af905abc5124bb5920d113c1b92f11d (quote it to support; `treg calls` shows the record); charged $0 { "engines": [ { "engine": "google", "err": "verification hold on every attempt \u2014 retry shortly", "fetch_ms": 0, "ms": 2774, "n": 0, "parse_ms": 0 } ], "error": "google: verification hold on every attempt \u2014 retry shor`

**Claude (DataForSEO)**  
- Status: FAILED. Error (verbatim, truncated): `treg: HTTP 402 — the provider answered; treg relayed it unchanged; call id 6ffd80e15984448bbbd28a63173103e2 (quote it to support; `treg calls` shows the record) { "version": "0.1.20260917", "status_code": 20000, "status_message": "Ok.", "time": "0 sec.", "cost": 0, "tasks_count": 1, "tasks_error": 1, "tasks": [ { "id": "10110946-2330-0612-0000-5fa2f7169218", "status_code": 40200, "status_message":`


### Prompt 2: "Tristan Grech developer and filmmaker" (country US, language en)

**ChatGPT (cloro, live UI)**  
- Tristan property cited: YES: https://tristangrech.com/en; property names in text: tristan grech, studio nice podcast, source canton, sumera, fullink, feu france, polytaipe, fullhaura
- Excerpt: "Tristan Grech — Developer and Filmmaker Tristan Grech is an independent developer and filmmaker who builds digital products and creates video content. His official website describes his work across web development, SaaS products, AI tools, and video production. Tristan Grech · Websites, Web Apps and Video Based in France, with p..."
- Cited URLs (4): https://tristangrech.com/en, https://cnsourcing.fr/, https://www.behance.net/tristangrech, https://fr.linkedin.com/in/fullhaura
- Fan-out / search queries returned: none returned

**Perplexity (cloro, live UI)**  
- Status: FAILED. Error (verbatim, truncated): `treg: HTTP 500 — the provider answered; treg relayed it unchanged; call id 116cd7e68a574e4980a181a738933651 (quote it to support; `treg calls` shows the record); charged $0 { "success": false, "error": { "code": "INTERNAL_SERVER_ERROR", "message": "Maximum retries exceeded", "timestamp": "2026-10-11T09:49:57.817Z" } }`

**Perplexity API fallback (perplexity.web.answer.fast)**  
- Tristan property cited: YES: https://tristangrech.com/en; property names in text: tristan grech, fullhaura
- Excerpt: "There appear to be several people named Tristan Grech. The profile that specifically combines web development and filmmaking describes a French entrepreneur who founded Fullhaura, a web-design and digital-content agency, and Kruptos.io. Fullhaura’s services include websites, social-media content, and SEO.[1] A separate site for ..."
- Cited URLs (10): https://www.linkedin.com/in/fullhaura, https://tristangrech.com/en, https://extricate.org/, https://tristan.st/build, http://www.tristanmcshepherd.com/about, https://digital-film-services.com/filmography/, https://tristanweb.com/, https://wearetilt.com/team/, https://steamdb.info/developer/Tristan/, https://www.tristan.fyi/info
- Fan-out / search queries returned: Tristan Grech developer and filmmaker

**Gemini (cloro, live UI)**  
- Tristan property cited: YES: https://sourcecanton.com/, https://tristangrech.com/en; property names in text: tristan grech, studio nice podcast, source canton, sourcecanton, sumera, fullink, feu france, polytaipe
- Excerpt: "Tristan Grech is a developer, filmmaker, and entrepreneur based in Guangzhou, China. He specializes in building full-stack web applications, multilingual SEO-optimized websites, and producing high-quality 4K video content. Tristan Grech · Websites, Web Apps and Video · Guangzhou Key Highlights & Projects Web Development & Apps: ..."
- Cited URLs (2): https://tristangrech.com/en, https://sourcecanton.com/
- Fan-out / search queries returned: none returned

**Copilot (cloro, live UI)**  
- Tristan property cited: YES: https://tristangrech.com/en, https://tristangrech.com/fr; property names in text: tristan grech, studio nice podcast, sumera, fullink, feu france
- Excerpt: "Tristan Grech is a developer and filmmaker based between Guangzhou and Nice. He builds multilingual websites, web apps with booking/payment systems, and also runs video production projects. His work spans AI-powered tools (like Sumera AI, a YouTube script generator), creator platforms (Fullink), public service apps (Feu France, ..."
- Cited URLs (3): https://tristangrech.com/en, https://tristangrech.com/fr, https://www.imdb.com/name/nm16689968/
- Fan-out / search queries returned: Tristan Grech developer filmmaker

**Google AI Mode (cloro)**  
- Tristan property cited: YES: https://tristangrech.com/china, https://tristangrech.com/chine, https://tristangrech.com/en, https://tristangrech.com/fr; property names in text: tristan grech, fullhaura
- Excerpt: "Tristan Grech is a web developer and filmmaker based in Guangzhou (Canton), China. Tristan Grech · Websites, Web Apps and Video · GuangzhouTristan Grech · Sites web, applications et vidéo · Canton Overview of his professional background and services: Web Development & Digital Solutions: He specializes in creating multilingual we..."
- Cited URLs (5): https://fr.linkedin.com/in/fullhaura/en, https://tristangrech.com/en, https://tristangrech.com/fr, https://tristangrech.com/china, https://tristangrech.com/chine
- Fan-out / search queries returned: none returned

**Claude (DataForSEO)**  
- Status: FAILED. Error (verbatim, truncated): `treg: HTTP 402 — the provider answered; treg relayed it unchanged; call id 20106dd9a1e3466a9f98dda9600afae4 (quote it to support; `treg calls` shows the record) { "version": "0.1.20260917", "status_code": 20000, "status_message": "Ok.", "time": "0 sec.", "cost": 0, "tasks_count": 1, "tasks_error": 1, "tasks": [ { "id": "10110946-2330-0612-0000-3737eddc2b0e", "status_code": 40200, "status_message":`


### Prompt 3: "French-speaking freelance web developer in Guangzhou" (country US, language en)

**ChatGPT (cloro, live UI)**  
- Tristan property cited: no; property names in text: none
- Excerpt: "If you're looking for a French-speaking freelance web developer in Guangzhou (广州), China, the best places to look are French-speaking professional networks, local expat communities, and Chinese freelance platforms. The key is to find someone who can communicate fluently in French while also handling your technical needs, whether..."
- Cited URLs (19): https://www.malt.com/profile/romainzhou, https://www.qingjiatsang.top/, https://yannick.rancillac.fr/cv/En_CV_Classique_-_Yannick_RANCILLAC.pdf, https://yannick.rancillac.fr/, https://yannick.rancillac.fr/cv/En_CV_Classique_-_Yannick_Rancillac.pdf, https://alpha-hub.ai/authors/hunter-martin/, https://www.slideserve.com/quiana/remi-daviet, https://blog.jsy.tw/my-web/, https://en.malt.fr/profile/lauresouai1, https://laabidi.eu/en/, https://manoncostard-dev.com/en/web-developer/, https://mflasquin.fr/ ...
- Fan-out / search queries returned: none returned

**Perplexity (cloro, live UI)**  
- Status: FAILED. Error (verbatim, truncated): `treg: HTTP 500 — the provider answered; treg relayed it unchanged; call id 094ae2c619ff41d997edfb6c5467e331 (quote it to support; `treg calls` shows the record); charged $0 { "success": false, "error": { "code": "INTERNAL_SERVER_ERROR", "message": "Maximum retries exceeded", "timestamp": "2026-10-11T09:50:00.356Z" } }`

**Perplexity API fallback (perplexity.web.answer.fast)**  
- Tristan property cited: no; property names in text: none
- Excerpt: "I couldn’t verify a single profile that clearly combines French-speaking, freelance web developer, and based in Guangzhou. The most practical options are to search Upwork’s French-specialist listings for Guangzhou and Twine’s Guangzhou web-developer listings, then confirm language ability and location directly.[4][5] One possibl..."
- Cited URLs (10): https://www.upwork.com/hire/web-application-freelancers/cn/, https://www.freelancer.de/job-search/freelance-international/, https://www.freelancer.com/projects/french/looking-for-french-native-customer, https://www.upwork.com/hire/french-translators-writers/cn/guangzhou/, https://www.twine.net/find/web-developers/cn/guangzhou, https://www.linkedin.com/in/b-roger, https://www.upwork.com/hire/web-services-freelancers/cn/, https://www.fr.freelancer.com/freelancers/china, https://www.twine.net/find/web-designers/cn/guangzhou, https://contra.com/hire/french-speaking-web-developers
- Fan-out / search queries returned: French-speaking freelance web developer in Guangzhou

**Gemini (cloro, live UI)**  
- Tristan property cited: no; property names in text: none
- Excerpt: "Finding a French-speaking freelance web developer based in Guangzhou combines a specific niche (multilingual tech talent) with China's major manufacturing and international trade hub. While specialized developers matching this exact profile are rare on standard local gig platforms, they do exist within international developer ne..."
- Cited URLs (1): https://arc.dev/en-cn/hire-developers
- Fan-out / search queries returned: none returned

**Copilot (cloro, live UI)**  
- Tristan property cited: no; property names in text: none
- Excerpt: "Here are some options if you’re looking for a French-speaking freelance web developer in Guangzhou: 👨‍💻 Freelancers with French skills in China Chao W. – Full-stack developer based in China (UTC+8). Languages: English, French, Mandarin Skills: React, Java, HTML/CSS, TypeScript, Python, NestJS, SQL, Next.js, Node.js Experience: W..."
- Cited URLs (4): https://arc.dev/en-cn/hire-developers, https://arc.dev/en-cn/hire-developers/full-stack, https://www.upwork.com/freelance-jobs/apply/WordPress-Elementor-developer-fluent-French-long-term-partner-for-industrial-web-agency_~0221034, https://netk5.com.cn/it-staffing/it-staffing-in-guangzhou/
- Fan-out / search queries returned: French-speaking freelance web developer in Guangzhou

**Google AI Mode (cloro)**  
- Tristan property cited: no; property names in text: none
- Excerpt: "Finding a specifically French-speaking freelance web developer physically based in Guangzhou can be quite niche, as most locally based independent developers advertise in English or Chinese. However, you can successfully source and hire one by looking through the right international and regional talent pools. Professional Freela..."
- Cited URLs (3): https://arc.dev/en-cn/hire-developers, https://www.fr.freelancer.com/jobs/web-development, https://www.upwork.com/hire/ai-freelancers/cn/
- Fan-out / search queries returned: none returned


### Prompt 4: "Développeur web freelance francophone à Canton" (country FR, language fr)

**ChatGPT (cloro, live UI)**  
- Tristan property cited: no; property names in text: none
- Excerpt: "Vous cherchez un développeur web freelance francophone à Canton (Guangzhou), en Chine, pour créer un site internet, développer une application ou trouver un prestataire avec qui communiquer en français. Voici les pistes que j’ai trouvées. Profils et contacts à explorer 1. Romain Zhou Français / anglais / mandarin Développeur web..."
- Cited URLs (6): https://comeup.com/fr/%40romainzhou, https://fr.malt.ch/profile/romainzhou, https://comeup.com/fr/%40romain, https://www.flashdesigner.com.hk/, https://www.oberlo.com/ebooks/dropshipping-masters, https://www.behance.net/gallery/184327937/Web-Agency-homepage-design
- Fan-out / search queries returned: none returned

**Perplexity (cloro, live UI)**  
- Status: FAILED. Error (verbatim, truncated): `Traceback (most recent call last): File "/Users/tristangrech/.local/share/uv/tools/tools-registry/lib/python3.12/site-packages/httpx/_transports/default.py", line 101, in map_httpcore_exceptions yield File "/Users/tristangrech/.local/share/uv/tools/tools-registry/lib/python3.12/site-packages/httpx/_transports/default.py", line 250, in handle_request resp = self._pool.handle_request(req) ^^^^^^^^^^`

**Perplexity API fallback (perplexity.web.answer.fast)**  
- Tristan property cited: no; property names in text: none
- Excerpt: "Vous cherchez un développeur web freelance francophone à Canton (Guangzhou, Chine) ? Je n’ai pas trouvé de profil clairement établi sur place dans les résultats disponibles. Vous pouvez toutefois élargir à des freelances francophones travaillant à distance, par exemple via Codeur.com, qui met en relation avec des professionnels ..."
- Cited URLs (10): https://developpeurfreelance.com/en/web-development-france/, https://www.justincappelle.ch/creation-site-internet-suisse, https://www.codeur.com/developpeur/web, https://www.lesbonsfreelances.com/freelances/developpeur-web, https://bizme.fr/freelancer/developpeur-web-afrique, https://freelancer-projekte.com/freelancer/entwickler/, https://plateforme.freelance.com/projets/creation-de-site-web-ou-dapplication, https://www.codeur.com/, https://www.codeur.com/users, https://www.freelance.ca/fr/pigiste/1888
- Fan-out / search queries returned: Développeur web freelance francophone à Canton

**Gemini (cloro, live UI)**  
- Tristan property cited: no; property names in text: none
- Excerpt: "Rechercher un développeur web freelance francophone basé à Canton (Guangzhou, en Chine) répond généralement à un besoin précis : concevoir ou maintenir des outils digitaux (sites internet, e-commerce, applications web) tout en bénéficiant d'une communication fluide en français et d'une bonne compréhension de l'écosystème local o..."
- Cited URLs (3): https://www.codeur.com/developpeur, https://www.404works.com/fr/freelancers/job/web-developer, https://www.jobbers.io/fr/location/china/
- Fan-out / search queries returned: none returned

**Copilot (cloro, live UI)**  
- Tristan property cited: no; property names in text: none
- Excerpt: "Tu es basé à Canton et tu travailles comme développeur web freelance francophone — c’est une combinaison intéressante ! Canton est un hub économique majeur en Chine, avec beaucoup d’opportunités liées au commerce international et à la tech. Être francophone peut aussi te donner un avantage pour collaborer avec des entreprises eu..."
- Cited URLs (0): none
- Fan-out / search queries returned: none returned

**Google AI Mode (cloro)**  
- Tristan property cited: no; property names in text: none
- Excerpt: "Un développeur web freelance francophone basé à Canton (Guangzhou, Chine) est un profil rare qui nécessite généralement de se tourner vers des réseaux d'expatriés locaux, des plateformes internationales d'indépendants ou des agences spécialisées pour trouver un intervenant disponible sur place ou familiers des contraintes techni..."
- Cited URLs (4): https://www.codeur.com/developpeur/web, https://www.freelance-informatique.fr/mission-developpeur-web-n746, https://www.upwork.com, https://www.ccifc.org
- Fan-out / search queries returned: none returned


### Prompt 5: "Who can audit my website for visibility in ChatGPT and other AI assistants?" (country US, language en)

**ChatGPT (cloro, live UI)**  
- Tristan property cited: no; property names in text: none
- Excerpt: "If you want an audit of your website’s visibility in ChatGPT and other AI assistants, look for providers that specialize in AI visibility audits, Generative Engine Optimization (GEO), AI Search Optimization, or Answer Engine Optimization (AEO). The right choice depends on whether you want a quick diagnostic, a technical SEO-styl..."
- Cited URLs (7): https://wpweb.org/audit, https://website-auditor.io/ai-website-audit, https://gowp.com/ai-visibility/, https://aio.io/free-report/, https://theaicitation.com/, https://aioclicks.com/ai-search-geo-generative-engine-optimization/ai-visibility-audit/, https://kanon.agency/
- Fan-out / search queries returned: none returned

**Perplexity (cloro, live UI)**  
- Status: FAILED. Error (verbatim, truncated): `Traceback (most recent call last): File "/Users/tristangrech/.local/share/uv/tools/tools-registry/lib/python3.12/site-packages/httpx/_transports/default.py", line 101, in map_httpcore_exceptions yield File "/Users/tristangrech/.local/share/uv/tools/tools-registry/lib/python3.12/site-packages/httpx/_transports/default.py", line 250, in handle_request resp = self._pool.handle_request(req) ^^^^^^^^^^`

**Perplexity API fallback (perplexity.web.answer.fast)**  
- Tristan property cited: no; property names in text: none
- Excerpt: "You can hire an AI-search / GEO (generative engine optimization) consultant or digital-marketing agency for a human-reviewed audit, or start with a self-serve audit tool. - For a detailed, expert-led audit: Pilot Digital lists a one-time audit covering ChatGPT, Claude, Perplexity, and Gemini, including prompt tests, competitor a..."
- Cited URLs (10): https://theresanaiforthat.com/s/website+audit/, https://theresanaiforthat.com/task/website-analysis/, https://profiletree.com/ai-visibility-audit/, https://claude.com/marketplace/connectors/website-auditor, https://www.citedaisearch.com/audit, https://pilotdigital.com/services/ai-search-optimization/ai-search-visibility-audit/, https://webteqno.com/ai-visibility-audit, https://gowp.com/ai-visibility/, https://bemodesign.com/free-geo-ai-seo-audit/, https://rankmeter.ai/
- Fan-out / search queries returned: Who can audit my website for visibility in ChatGPT and other AI assistants?

**Gemini (cloro, live UI)**  
- Tristan property cited: no; property names in text: none
- Excerpt: "Auditing your website for visibility in ChatGPT and other AI assistants falls under GEO (Generative Engine Optimization) or AEO (Answer Engine Optimization). AI SEO Services (ChatGPT, Gemini...) in San Diego Blue Media Because traditional SEO tools focus heavily on keywords and standard search engine rankings rather than convers..."
- Cited URLs (5): https://www.gobluemedia.com/services/generative-engine-optimization-geo-ai-seo/, https://gofishdigital.com/blog/how-to-audit-your-site-for-ai-search-readiness-geo-audit-framework-for-2026/, https://www.hubspot.com/ai-search-grader, https://www.webfx.com/seo/services/ai-search-optimization/, https://365digital.agency/services/ai-search-visibility
- Fan-out / search queries returned: none returned

**Copilot (cloro, live UI)**  
- Tristan property cited: no; property names in text: none
- Excerpt: "You can hire specialized “AI visibility audit” firms or use dedicated tools that check how well your website appears in ChatGPT, Claude, Gemini, Perplexity, and Google AI Overviews. Leading providers include AY Rank, Cite Solutions, iPullRank, and Avante Visibility, each catering to different business sizes and needs. 🔎 Who Offe..."
- Cited URLs (4): https://www.ayrank.com/blog/best-ai-visibility-audit-services-2026, https://cite.solutions/best-ai-visibility-audit-services-2026, https://avantevisibility.com/best-ai-visibility-audit-services, https://lesli.com/insights/ai-discoverability/best-ai-visibility-audit-services
- Fan-out / search queries returned: website audit services for AI assistant visibility

**Google AI Mode (cloro)**  
- Tristan property cited: no; property names in text: none
- Excerpt: "Audits for website and brand visibility in ChatGPT, Claude, Perplexity, and Gemini fall under Answer Engine Optimization (AEO) or Generative Engine Optimization (GEO). AI Search Grader: Free One-Time AEO Brand ... - HubSpot You can audit your visibility using specialized AEO/GEO software platforms , dedicated agencies , or free ..."
- Cited URLs (5): https://www.reddit.com/r/GEO__AI__SEO/comments/1r1t7zs/best_ai_visibility_tracking_tools_for_marketing/, https://otterly.ai/, https://www.hubspot.com/ai-search-grader, https://usa.inquirer.net/210862/5-ai-visibility-tools-for-tracking-brand-mentions-citations-and-traffic, https://www.dageno.ai/
- Fan-out / search queries returned: none returned

**Claude (DataForSEO)**  
- Status: FAILED. Error (verbatim, truncated): `treg: HTTP 402 — the provider answered; treg relayed it unchanged; call id 3074bc3b092741c5ad081fec9a8e95df (quote it to support; `treg calls` shows the record) { "version": "0.1.20260917", "status_code": 20000, "status_message": "Ok.", "time": "0 sec.", "cost": 0, "tasks_count": 1, "tasks_error": 1, "tasks": [ { "id": "10110946-2330-0612-0000-d1a3c84c4221", "status_code": 40200, "status_message":`


### Prompt 6: "Audit de visibilité IA pour un site web, freelance" (country FR, language fr)

**ChatGPT (cloro, live UI)**  
- Tristan property cited: no; property names in text: none
- Excerpt: "Audit de visibilité IA pour un site web : activité freelance Si tu souhaites proposer des audits de visibilité dans les moteurs d’IA en freelance, c’est un service qui consiste à analyser si une entreprise est visible, citée ou recommandée par des outils comme ChatGPT, Perplexity, Gemini ou Google AI Overviews, puis à identifier..."
- Cited URLs (16): https://www.areta.fr/agence-geo, https://www.biencite.fr/fr/blog/combien-coute-audit-visibilite-ia-2026, https://tedchan.fr/blog/consultant-geo-freelance, https://ai-visibility-index.semrush.com/downloads, https://techpullers.com/seo-audit-service/, https://www.slideteam.net/digital-marketing-strategy-dashboard-with-total-traffic-visit.html, https://rodricamacho.com/, https://enovseo.fr/tarifs-geo/, https://redback-optimisation.fr/, https://robz.fr/blog/cout-plan-daction-geo, https://thibaultfayol.com/services/geo/, https://wecomm.fr/tarifs-geo/ ...
- Fan-out / search queries returned: none returned

**Perplexity (cloro, live UI)**  
- Status: FAILED. Error (verbatim, truncated): `Traceback (most recent call last): File "/Users/tristangrech/.local/share/uv/tools/tools-registry/lib/python3.12/site-packages/httpx/_transports/default.py", line 101, in map_httpcore_exceptions yield File "/Users/tristangrech/.local/share/uv/tools/tools-registry/lib/python3.12/site-packages/httpx/_transports/default.py", line 250, in handle_request resp = self._pool.handle_request(req) ^^^^^^^^^^`

**Perplexity API fallback (perplexity.web.answer.fast)**  
- Tristan property cited: no; property names in text: none
- Excerpt: "Vous cherchez un freelance pour auditer la visibilité de votre site dans les IA (ChatGPT, Perplexity, Gemini, Claude, etc.). Cette prestation est généralement appelée audit GEO ou audit de visibilité IA. Un audit sérieux devrait inclure : - des tests de requêtes réellement posées par vos clients et la mesure des mentions de votr..."
- Cited URLs (10): https://comeup.com/fr/@tristan75, https://www.conversion-boosters.com/consultant-geo/, https://www.clickdev.fr/seo, https://audit.ideai.fr/, https://indhack.com/consultant-seo, https://www.stafe.fr/landing/audit-geo/, https://www.yoannuzan.com/freelance-geo/, https://www.mindandmarket.com/les-projets/inspect-ai-29396/, https://julien-gourdon.fr/consultant-seo-freelance, https://www.seoptimer.com/fr/blog/meilleur-logiciel-visibilite-recherche-ia/
- Fan-out / search queries returned: Audit de visibilité IA pour un site web, freelance

**Gemini (cloro, live UI)**  
- Tristan property cited: no; property names in text: none
- Excerpt: "Un audit de visibilité IA (souvent rattaché au GEO pour Generative Engine Optimization ou au SEO conversationnel) est une prestation de plus en plus proposée par les consultants et experts indépendants. Il s'agit d'analyser comment les intelligences artificielles conversationnelles et les moteurs génératifs (ChatGPT, Perplexity,..."
- Cited URLs (5): https://www.alex-ly.com/services/consultant-ia-et-seo, https://allo-seo.com/audit-visibilite-ia, https://stephaniecanovas.fr/services/audit-site-web-freelance/, https://kay-conseil.fr/consultant-seo-freelance-geo/, https://www.maud-rauner.com/audit-seo-site-web/
- Fan-out / search queries returned: none returned

**Copilot (cloro, live UI)**  
- Tristan property cited: no; property names in text: none
- Excerpt: "Un audit de visibilité IA pour un site web freelance consiste à mesurer comment votre marque ou vos services apparaissent dans les réponses générées par des modèles comme ChatGPT, Gemini, Perplexity ou Claude, puis à identifier les actions pour améliorer cette présence. C’est devenu aussi crucial que le SEO classique, car les IA..."
- Cited URLs (4): https://radarllm.ai/fr/blog/ai-visibility-audit-guide-2026, https://www.amicited.com/fr/blog/affordable-ai-visibility-tools-freelancers/, https://ailabsaudit.com/, https://www.stephanedelgado.fr/audit-geo/
- Fan-out / search queries returned: audit visibilité IA freelance site web

**Google AI Mode (cloro)**  
- Tristan property cited: no; property names in text: none
- Excerpt: "Un audit de visibilité IA (ou GEO - Generative Engine Optimization) pour un site web est une analyse qui mesure la présence, la citation et la perception de votre marque ou de votre activité au sein des réponses générées par les moteurs conversationnels et les intelligences artificielles (ChatGPT, Perplexity, Google AI Overviews..."
- Cited URLs (1): https://www.natural-net.fr/blog-agence-web/2025/11/20/audit-visibilite-outils-ia-comment-mesurer-votre-presence-dans-les-reponses-generees-p
- Fan-out / search queries returned: none returned


### Prompt 7: "Freelance developer to build a multilingual website in French, English and Russian" (country US, language en)

**ChatGPT (cloro, live UI)**  
- Tristan property cited: no; property names in text: none
- Excerpt: "If you're looking to hire a freelance developer to build a website in French, English and Russian, I'd recommend finding someone with experience in multilingual website development, international SEO, and content management—not just general web design. The key is to build one website that supports all three languages, with a lan..."
- Cited URLs (27): https://amalabaev.com/en/freelance-full-stack-developer/, https://amalabaev.com/en/, https://www.malt.com/profile/stimoursayfoutdinov, https://www.upwork.com/freelancers/~01e6282c55f3cd80cc, https://medium.com/%40vitddnv/followers, https://nico-jour.github.io/Visiter-Lyon/index.html, https://www.fiverr.com/disson_dmitry/develop-a-responsive-web-application, https://adelinelefebvre.com/en, https://amalabaev.com/, https://by-aks.com/, https://hiregora.com/web-developer, https://ilya.is-a.dev/ ...
- Fan-out / search queries returned: none returned

**Perplexity (cloro, live UI)**  
- Status: FAILED. Error (verbatim, truncated): `treg: HTTP 500 — the provider answered; treg relayed it unchanged; call id b42a385caa7543d0888ea8c2a7a95a7f (quote it to support; `treg calls` shows the record); charged $0 { "success": false, "error": { "code": "INTERNAL_SERVER_ERROR", "message": "Maximum retries exceeded", "timestamp": "2026-10-11T09:53:46.924Z" } }`

**Perplexity API fallback (perplexity.web.answer.fast)**  
- Tristan property cited: no; property names in text: none
- Excerpt: "For a website in French, English, and Russian, these are promising leads: - Mark Nightingale — Freelance web developer in France offering multilingual site planning, design, development, localization, and multilingual SEO; he works with WordPress/WPML and PrestaShop.[1] - Magalie Castaing (Kasutan) — Freelance WordPress and WooC..."
- Cited URLs (10): https://www.marknightingale.net/building-multilingual-websites/, https://www.freelancer.com/projects/documentation/multilingual-ngo-website-development-40669973, https://www.fr.freelancer.com/job-search/russian-speaking-web-developer/, https://www.linkedin.com/in/magaliecastaing, https://www.linkedin.com/in/dmitry-hrustalev-175358329, https://www.freelancer.com/job-search/russian-speaking-web-developer/, https://www.freelancer.com/jobs/website-design, https://www.upwork.com/freelance-jobs/apply/assisted-multilingual-website-redesign-Claude-Code-OpenAI-Gemini-corporate-services-site_~022104, https://www.freelancer.com/projects/php/hotel-website-with-online-booking, https://www.freelancer.com.bd/job-search/russian-speaking-web-developer/
- Fan-out / search queries returned: Freelance developer to build a multilingual website in French, English and Russian

**Gemini (cloro, live UI)**  
- Tristan property cited: no; property names in text: none
- Excerpt: "Building a multilingual website in English, French, and Russian requires careful planning, especially when handling right-to-left layout nuances (though Russian uses Cyrillic, which is left-to-right, it has different character lengths and typography requirements compared to English and French). To help you find the right freelan..."
- Cited URLs (3): https://yoursite.com/en/, https://yoursite.com/fr/, https://yoursite.com/ru/
- Fan-out / search queries returned: none returned

**Copilot (cloro, live UI)**  
- Tristan property cited: no; property names in text: none
- Excerpt: "Got it — you’re looking for a freelance developer to build a multilingual website in French, English, and Russian. Before I can give you the most useful guidance, I need a bit more context: Who is the website for (business, personal brand, nonprofit, etc.)? What type of site do you need (e.g., e‑commerce, blog, corporate site, p..."
- Cited URLs (0): none
- Fan-out / search queries returned: none returned

**Google AI Mode (cloro)**  
- Tristan property cited: no; property names in text: none
- Excerpt: "If you are looking to hire a freelance developer or need a roadmap to get a multilingual website (French, English, and Russian) built, here is a breakdown of how to approach the project, what skills to look for, and where to find the right talent. Key Requirements for a Multilingual Website Content Management / Framework: The si..."
- Cited URLs (0): none
- Fan-out / search queries returned: none returned


### Prompt 8: "Freelance developer to build a booking website with Stripe payments for a small studio" (country US, language en)

**ChatGPT (cloro, live UI)**  
- Tristan property cited: no; property names in text: none
- Excerpt: "If you're looking for a freelance developer to build a booking website for a small studio, I'd recommend a simple, mobile-friendly booking system with Stripe payments, rather than an expensive custom platform built from scratch. The best solution depends on what kind of studio you run — for example, a photography studio, yoga or..."
- Cited URLs (19): https://www.upwork.com/services/product/development-it-a-booking-website-that-takes-payments-live-and-yours-to-keep-2082417461928920352, https://www.upwork.com/services/product/development-it-complete-business-platformwebsite-admin-booking-payments-2035966193244854448, https://www.fiverr.com/muhammadumer125/build-a-full-stack-nextjs-web-application?imp_id=af31fb21-44f9-4f07-9a32-6ec67609ebfc&pckg_id=1&pos=2, https://www.fiverr.com/muhammadumer125/build-a-full-stack-nextjs-web-application?imp_id=dcf0b712-41b9-49b1-b5d2-f24950155f00&pckg_id=1&pos=3, https://www.upwork.com/services/product/de**, https://www.upwork.com/services/product/development-it-a-booking-website-that-takes-payments-live-and-yours-keep-2082417461928920352**, https://tentary.com/en/changelog, https://www.upwork.com/services/product/development-it-a-booking-website-that-takes-payments-live-and-yours-keep-2082417461928920352, https://pilatesjournal.com/articles/5-ways-arketa-is-changing-the-game-for-boutique-pilates-studios, https://docs.stripe.com/payments/checkout/quickstarts, https://www.fiverr.com/muhammadumer125/build-a-full-stack-nextjs-web-application, https://www.halth.com/halth-secure ...
- Fan-out / search queries returned: none returned

**Perplexity (cloro, live UI)**  
- Status: FAILED. Error (verbatim, truncated): `treg: HTTP 500 — the provider answered; treg relayed it unchanged; call id 00884978b47a4a51b0a583684fec86ae (quote it to support; `treg calls` shows the record); charged $0 { "success": false, "error": { "code": "INTERNAL_SERVER_ERROR", "message": "Maximum retries exceeded", "timestamp": "2026-10-11T09:53:56.208Z" } }`

**Perplexity API fallback (perplexity.web.answer.fast)**  
- Tristan property cited: no; property names in text: none
- Excerpt: "For a small studio, WordPress with a booking plugin and Stripe is often a practical, owner-manageable setup; a custom-built site may be better if your booking rules are unusual. A recent comparable WordPress project was listed at US$1,400 fixed-price, though scope and location can change the cost substantially.[8] When hiring, l..."
- Cited URLs (10): https://www.freelancer.com/hire/stripe, https://www.freelancer.com/projects/stripe/complete-motopress-booking-setup, https://www.freelancer.com/projects/stripe/integrate-stripe-payment-system, https://www.freelancer.com/projects/php/website-update-stripe-integration, https://www.vollna.com/freelance-stripe-jobs, https://www.freelancer.com/projects/stripe/finish-stripe-booking-website-asap, https://www.freelancer.com/jobs/website-development/, https://www.upwork.com/freelance-jobs/apply/WordPress-Developer-Designer-Needed-Booking-Stripe-for-New-Canadian-Business_~022094534413062546, https://www.br.freelancer.com/job-search/stripe/, https://www.freelancer.com/hire/wix
- Fan-out / search queries returned: Freelance developer to build a booking website with Stripe payments for a small studio

**Gemini (cloro, live UI)**  
- Tristan property cited: no; property names in text: none
- Excerpt: "Hiring a freelance developer to build a booking website with Stripe payments for a small studio is a straightforward project, but scope alignment is critical to ensure you get a robust, secure application without overpaying. 1\. Typical Scope & Features Needed For a small studio (e.g., yoga, fitness, photography, or creative wor..."
- Cited URLs (2): https://www.grahaisystems.com/hire/stripe-integration-developer, https://www.freelancer.com/hire/stripe
- Fan-out / search queries returned: none returned

**Copilot (cloro, live UI)**  
- Tristan property cited: no; property names in text: none
- Excerpt: "Got it — you’re looking for a freelance developer to build a booking website with Stripe payments for a small studio. Before I can give you the most useful guidance, I need a bit more context: Who : Is this for your own studio, or are you hiring on behalf of someone else? What : Do you want me to help you find freelance develope..."
- Cited URLs (0): none
- Fan-out / search queries returned: none returned

**Google AI Mode (cloro)**  
- Tristan property cited: no; property names in text: none
- Excerpt: "Building a booking website with Stripe integration for a small studio is a classic web project, but finding the right freelance developer requires knowing what stack, budget, and scope you need. 1\. Defining the Scope for a Studio Booking Site Before hiring, outline these core requirements for your developer: Booking & Calendar ..."
- Cited URLs (7): https://www.reddit.com/r/smallbusiness/comments/1cbzqx7/what_are_the_best_platforms_to_hire_developers/, https://arc.dev/hire-developers/stripe-payments, https://www.fiverr.com/categories/programming-tech/website-development, https://stripe.com/docs, https://www.toptal.com, https://arc.dev, https://www.upwork.com
- Fan-out / search queries returned: none returned


### Prompt 9: "Разработчик многоязычных сайтов на русском, английском и французском" (country KZ, language ru)

**ChatGPT (cloro, live UI)**  
- Tristan property cited: no; property names in text: none
- Excerpt: "Если вам нужен разработчик многоязычных сайтов на русском, английском и французском языках, я могу помочь найти специалиста или подготовить техническое задание для создания сайта. Такой разработчик может создать сайт с переключением языков, адаптивным дизайном, SEO для каждой языковой версии и удобной системой управления контент..."
- Cited URLs (28): https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites?hl=ru&hlrm=en&rd=1&visit_id=6392686285975571, https://a-lux.kz/en/, https://alixan.kz/, https://alty.kz/?lang=en, https://applications.kz/en/web-development-almaty/, https://blumango.be/ru/faq-items/%D0%BA%D0%B0%D0%BA%D0%BE%D0%B2-%D0%B2%D0%B0%D1%88-%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81-%D1%81%D0%BE%D, https://competent.kz/blog/web-development/tpost/kmo2cdxzv1-multiyazichnoe-seo, https://competent.kz/services/website-development/, https://dak.consulting/ru/blog/razrabotka-saitov-dlia-biznesa-vo-francii, https://dev.kko.kz/, https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites, https://glonin.kz/blog/stati/mnogoyazychnyj-sajt-ru-kz-en-arhitektura-i-zapusk/ ...
- Fan-out / search queries returned: none returned

**Perplexity (cloro, live UI)**  
- Status: FAILED. Error (verbatim, truncated): `treg: HTTP 500 — the provider answered; treg relayed it unchanged; call id a23aa0a4f1cd4258a1550c4274730053 (quote it to support; `treg calls` shows the record); charged $0 { "success": false, "error": { "code": "INTERNAL_SERVER_ERROR", "message": "Maximum retries exceeded", "timestamp": "2026-10-11T09:53:52.203Z" } }`

**Perplexity API fallback (perplexity.web.answer.fast)**  
- Tristan property cited: no; property names in text: none
- Excerpt: "Если вы ищете разработчика многоязычного сайта на русском, английском и французском, рассмотрите Voronkin Studio: команда работает на всех трёх языках и разрабатывает сайты и веб-платформы для клиентов в Европе и Северной Америке[1]. Также можно обратиться в Codefactura: студия делает мультиязычные сайты под ключ и может работат..."
- Cited URLs (10): https://voronkin.com/ru/, https://asasweb.com/ru, https://vivastudio.ru/, https://codefactura.ru/services/multilingual/, https://privetparis.fr/business-news/adevcode/, https://xstudio.pro/unk-en-v, https://umi.ru/gotovye_resheniya/sozdat_multiyazychnyj_sajt/, https://www.bandziuk.com/ru/razrabotka-multiyazychnogo-saita, https://sma-seo.ru/sozdanie-saytov/razrabotka-multiyazychnogo-sajta/, https://rm-syst.ru/catalog/multigeografiya
- Fan-out / search queries returned: Разработчик многоязычных сайтов на русском, английском и французском

**Gemini (cloro, live UI)**  
- Tristan property cited: no; property names in text: none
- Excerpt: "Привет! Как разработчик многоязычных сайтов, работающий с русским, английским и французским языками, вы отлично понимаете, что создание такого проекта — это не просто перевод текстов, а глубокая техническая и культурная адаптация. Чтобы сайт успешно работал на международную аудиторию, важно учитывать целый комплекс задач: Ключев..."
- Cited URLs (1): https://site.com/fr/
- Fan-out / search queries returned: none returned

**Copilot (cloro, live UI)**  
- Tristan property cited: no; property names in text: none
- Excerpt: "Если вы ищете разработчика многоязычных сайтов (русский, английский, французский), у вас есть два основных пути: нанять профессиональную студию, которая создаёт сайты с нуля и учитывает SEO для каждой локали, или использовать современные конструкторы с поддержкой автоматического перевода и локализации. 🔑 Основные варианты 1\. Пр..."
- Cited URLs (3): https://asasweb.com/ru, https://www.croisa.com/ru, https://lovable.dev/guides/best-multilingual-website-builders
- Fan-out / search queries returned: разработчик многоязычных сайтов русский английский французский

**Google AI Mode (cloro)**  
- Tristan property cited: no; property names in text: none
- Excerpt: "Привет! Я профессиональный разработчик многоязычных сайтов , специализирующийся на создании качественных, адаптивных и SEO-оптимизированных веб-ресурсов на русском, английском и французском языках. Моя задача — сделать ваш проект понятным и удобным для аудитории из разных стран, настроить корректную локализацию, мультиязычное SE..."
- Cited URLs (0): none
- Fan-out / search queries returned: none returned


### Prompt 10: "Videographer for event interviews at Cannes Lions" (country FR, language en)

**ChatGPT (cloro, live UI)**  
- Tristan property cited: YES: https://studionicepodcast.com/en/services/cannes-lions; property names in text: studio nice podcast, studionice
- Excerpt: "If you’re looking for a videographer to film event interviews at Cannes Lions, I’d prioritize a team experienced in executive interviews, branded content, and fast-turnaround social videos—not just general event filming. Here are the strongest options I found around Cannes, including teams with specific Cannes Lions experience. ..."
- Cited URLs (17): https://fr.rivieramedia.com/, https://rivieramedia.com/event-video-production-in-cannes-europe, https://spacevisuals.fr/en/cannes-lions-international-festival-of-creativity/, https://dreamwide.fr/cannes-lions-videographer/, https://studionicepodcast.com/en/services/cannes-lions, https://spacevisuals.fr/, https://www.google.com/maps/dir/?api=1&destination=Space+Visuals+-+Production+vid%C3%A9o+%26+Photographe+%C3%A0+Cannes%2C+Nice%2C+Monaco%2C+, https://www.businessinsider.com/cannes-lions-festival-of-creativity-2022-live-blog-2022-6, https://www.linkedin.com/posts/publicis-groupe_welcome-to-marcel-activity-6546772923863183360-EyTP, https://rivieramedia.com/, https://aslproductions.com/behind-the-scenes-at-sport-beach-how-we-captured-the-heart-of-cannes-lions/, https://dreamwide.fr/tfwa-videographer/ ...
- Fan-out / search queries returned: none returned

**Perplexity (cloro, live UI)**  
- Tristan property cited: YES: https://studionicepodcast.com/en/services/cannes-lions, https://studionicepodcast.com/en/services/event-filming; property names in text: studio nice podcast
- Excerpt: "Yes—several production companies offer dedicated videographers and interview crews for Cannes Lions, including local French Riviera teams and international crews that travel in for the festival. For executive interviews, prioritize a compact multi-camera setup, broadcast-quality wireless audio, fast lighting, and same-day or rap..."
- Cited URLs (15): https://rivieramedia.com/event-video-production-in-cannes-europe, https://getcameracrew.com/video-production-insights/fast-company-at-cannes-lions-shooting-brand-new-world-on-location, https://getcameracrew.com/case-studies, https://studionicepodcast.com/en/services/cannes-lions, https://aslproductions.com/sports-video-production-nyc/, https://www.raccoonlondon.com/cannes-photographer-for-events, https://stsphotovideo.com/cannes/, https://studionicepodcast.com/en/services/event-filming, https://www.linkedin.com/posts/get-camera-crew_filming-executive-interviews-at-cannes-lions-activity-7491080138865061888-SoGw, https://www.raccoonlondon.com/case-study/billion-dollar-boy-cannes, https://frenchrivieraphotographer.com/, https://www.linkedin.com/posts/get-camera-crew_fast-company-at-cannes-lions-shooting-brand-activity-7488160141608058880-bgz0 ...
- Fan-out / search queries returned: Cannes Lions event interview videographer hire; Cannes Lions video production interview crew; Cannes Lions videographer event coverage

**Gemini (cloro, live UI)**  
- Tristan property cited: no; property names in text: none
- Excerpt: "Hiring a videographer for event interviews at the Cannes Lions International Festival of Creativity requires local expertise, quick turnaround times, and familiarity with navigating the high-paced environment of the Croisette and the Palais des Festivals. Cannes Photographer — Event, Conference & Corporate Photography Here is a ..."
- Cited URLs (3): https://frenchrivieraphotographer.com/cannes-photographer, https://dreamwide.fr/cannes-lions-videographer/, https://globalmediadesk.com/france/cannes/videographers/
- Fan-out / search queries returned: none returned

**Copilot (cloro, live UI)**  
- Tristan property cited: no; property names in text: none
- Excerpt: "Top videographers for event interviews at Cannes Lions include Space Visuals, Images d’Azur, and MFvideo — all highly rated production companies based in Cannes with experience in corporate and festival coverage. 🎥 Recommended Videographers for Cannes Lions Event Interviews Company Location Rating Specialty Contact -------------..."
- Cited URLs (0): none
- Fan-out / search queries returned: videographer services for event interviews Cannes Lions

**Google AI Mode (cloro)**  
- Tristan property cited: no; property names in text: none
- Excerpt: "Hiring a videographer for event interviews at the Cannes Lions International Festival of Creativity requires local expertise, quick turnaround times for social/daily recaps, and familiarity with high-paced activations around the Palais des Festivals, beach cabanas, or local hotels. Options for local production teams, agencies, a..."
- Cited URLs (5): https://dreamwide.fr/cannes-lions-videographer/, https://imagesdazur.com/en/cannes-film-festival-2026-photographer-videographer/, https://spacevisuals.fr/en/, https://oneway-camera.com/, https://www.agency-sge.com/
- Fan-out / search queries returned: none returned
