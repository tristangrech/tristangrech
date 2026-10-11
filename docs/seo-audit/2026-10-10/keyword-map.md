# Keyword and money-page map, tristangrech.com (lane F, 2026-10-11)

Sources: Serpstat keyword volume via treg (`serpstat.google.keywords.volume`, databases g_us, g_fr, g_ru, g_kz),
Serpstat phrase-match ideas (`serpstat.google.keywords.ideas`), live Google SERPs via `crawl4ai.google.serp.organic`.
Raw JSON: run/raw/search/kw-*.json, kwi-*.json, serp/*.json. Volumes are Serpstat monthly estimates; "n/a" means the
keyword is not in Serpstat's database (not zero demand: playbook section 2 says never discard 0 to 50 terms).

## Scoring

score = intent x (1 / competition) x effort
- intent: 3 = hire/buy SERP (service pages, ads), 2 = mixed or MOFU (guides plus some providers), 1 = informational
- competition: 1 = page 1 has several small or independent sites and few exact-match titles; 1.5 = small sites but
  keyword is in most titles; 2 = page 1 is dedicated tool/agency pages with exact titles; 3 = platforms and big brands
- effort: 3 = a section on an existing page, 2 = one new page with proof Tristan already has, 1 = new page that needs new proof

## Candidates with data

| # | Keyword | Lang/db | Vol | KD | CPC | Live SERP (top 10) | Funnel | I | C | E | Score |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | audit visibilité ia | FR g_fr | n/a | n/a | n/a | free-audit tools (Rablab lovable app, HubSpot grader) + method guides from small blogs (mohammedteto, luneos, ailabsaudit, semjuice); 4 of 9 titles exact | BOFU | 3 | 1.5 | 2 | **4.0** |
| 2 | développeur site multilingue (+ site multilingue seo 30, seo site multilingue 30) | FR g_fr | n/a (variants 30/30, KD 1 to 2) | 1-2 | 0 | 7 of 10 are how-to guides (HubSpot, redacteur, Lionbridge); 2 freelancer service pages (freelance-internet.com, seriousweb.fr) | MOFU | 2 | 1 | 2 | **4.0** |
| 3 | видеосъемка интервью | RU g_ru / g_kz | 720 / 50 | 2 / 1 | 0.41 | 5 how-to (dzen, YouTube, cossa), 3 providers (zint.kz Almaty, sankt-video, antonenko-media) | MOFU/BOFU local | 2 | 1 | 2 | **4.0** (needs Tristan to confirm Almaty/CIS shoots are still offered after the Guangzhou move) |
| 4 | ai visibility audit (+ ai search visibility audit 10) | EN g_us | 70 | 1 | 9.44 | all dedicated pages: EVOIX, margen, geneo, seoscore, findrix; 10 of 11 titles exact; AI Overview + ads | BOFU | 3 | 2 | 2 | **3.0** |
| 5 | consultant GEO / GEO consultant (AI search) | FR query "consultant geo chatgpt"; EN "geo consultant" 210 is ambiguous | n/a | n/a | n/a | person-brand consultant pages (yanivgoldenberg.com/geo, ericschwartzman.com/geo-consultant, mentionova) + 2 "top GEO consultants" lists | BOFU | 3 | 2 | 2 | **3.0** |
| 6 | ai seo audit | EN g_us | 110 | 10 | 11.27 | (not SERP-checked; Serpstat intent informational) | MOFU | 2 | 2 | 2 | 2.0 |
| 7 | multilingual website developer | EN g_us | n/a | n/a | n/a | Weglot blog, Reddit r/webdev, ExtraDigital agency, Duda builder: guides and builders | TOFU/MOFU | 2 | 2 | 2 | 2.0 |
| 8 | booking website developer / stripe booking website | EN g_us | n/a | n/a | n/a | site builders (Calendesk, Squarespace, Soloist) + dev agencies (logicspice, scand) | MOFU | 2 | 3 | 2 | 1.3 |
| 9 | geo consultant (EN) | EN g_us | 210 | 4 | 86.36 | geotechnical firms (geoconsultantscorp, Geosyntec, GEI), local pack; PAA "What is a geo consultant?" = geology | wrong intent | 0 | - | - | **drop** |
| 10 | création site internet nice | FR g_fr | 170 | 7 | 2.14 | local agencies + local pack | BOFU local | 3 | 2 | - | **do not target**: base is now Guangzhou; claiming Nice would be untrue |
| 11 | видеопродакшн | RU g_ru | 880 | 12 | 0.65 | not checked; Serpstat intent informational, comp 61 | TOFU | 1 | 3 | 2 | 0.7 |

Zero-data in Serpstat (not in DB): "GEO audit freelance", "generative engine optimization audit", "booking system developer",
"custom booking system for small business", "freelance next.js developer", "podcast studio booking system",
"audit geo", "audit seo ia", "référencement chatgpt", "création site de réservation", "développeur site de réservation",
"site de réservation avec paiement stripe", "аудит видимости в ии", "разработка сайта с онлайн записью",
"сайт с онлайн бронированием". "geo audit" and "audit geo" phrase-match ideas return only unrelated noise
(Neo Geo ROMs, OWA geo maps): the term "GEO audit" has no measurable search demand yet; "AI visibility audit" is the
phrase people use (US cluster: ai visibility 720, ai visibility tools 1,600, ai search visibility 480, ai visibility
report 70, ai visibility checker 110).

China funnel terms (map only, no new pages, facts pending from Tristan): foire de canton FR 1,600 KD5 (informational,
Knowledge Graph card), sourcing chine FR 140 KD2, guangzhou sourcing agent US 260 KD1, кантонская ярмарка RU 90 / KZ 70,
байер в китае RU 90, china sourcing trip US 10.

## Brand SERP: "tristan grech" (2026-10-11)

| Engine | Top results | tristangrech.com | Knowledge Panel |
|---|---|---|---|
| Google US (en, 22 rows) | 1 instagram.com/tristangrch (OURS), 2 facebook tristan.grech.3, 3 IMDb nm16689968 (namesake: film crew, Count of Monte Cristo), 4 linkedin.com/pub/dir (7 profiles), 5 Malta FA player page, 6 to 8 Maltese Facebook posts, 9 transfermarkt (Maltese footballer), 10 flickr | **not in top 22** | none (blocks: organic only) |
| Google FR (fr, 19 rows) | 1 instagram.com/tristan.grech (namesake), 2 instagram.com/tristangrech (namesake), 3 soundcloud tristan-grech, 4 facebook, 5 to 6 flickr, 7 Sannat Lions FC (Maltese football), 8 to 9 facebook | **not in top 19** | none |
| Google FR "tristangrech" | instagram tristangrech, soundcloud, facebook, flickr, aiscore (footballer) | not in top 10 | none |
| Google US "tristan grech developer" | 1 ca.linkedin.com/in/tristangrech (namesake, Canadian P.Eng), 2 instagram tristangrch (OURS), 5 fr.linkedin.com/in/fullhaura (OURS) | not in top 10 | none |
| Bing US/FR | BLOCKED: litescrape and serpapi Bing endpoints returned unrelated SERPs (Tesla stock, adult site, "Rien" dictionary) for the query; not usable | unknown | unknown |

GSC (lead): "tristan grech" 4 impressions, average position 9. Verdict: brand SERP is **not owned**. The only owned
results are Instagram (Google US #1) and LinkedIn (/in/fullhaura, only for "developer" modifier). Competing namesakes:
a Maltese footballer (Sannat Lions, MFA, Transfermarkt, Sofascore), a Malta film crew member (IMDb), a Canadian engineer
(LinkedIn /in/tristangrech), SoundCloud and Instagram tristan.grech / tristangrech accounts.

## Money-page map

| Keyword (primary, variants) | Funnel | Page | Hub | Status |
|---|---|---|---|---|
| tristan grech, tristangrech, тристан греч | brand/nav | /en, /fr, /ru | hub | exists; not ranking top 20 on Google; fix entity signals (ProfilePage, sameAs incl. Instagram, portfolio back-links) |
| AI visibility audit; ai search visibility audit; ai visibility report | BOFU | /en/ai-visibility-audit (needed) | /en services section | **missing**: today only a hub card heading "AI visibility audit" plus a Stripe link |
| audit visibilité IA; audit GEO; consultant GEO | BOFU | /fr/audit-visibilite-ia (needed) | /fr | **missing** |
| аудит видимости в ИИ | BOFU | /ru/audit-vidimosti-ii (needed, after /ru gets indexed) | /ru | missing; /ru is "Crawled - currently not indexed" |
| développeur site multilingue; site multilingue seo; création site multilingue | MOFU | /fr/site-multilingue (needed) | /fr | missing; proof exists (FR/EN/RU builds: studionicepodcast, fullhaura-services, almatypodcast) |
| multilingual website developer | MOFU | /en/multilingual-websites (needed) | /en | missing; low priority (builder/guide SERP) |
| booking website developer; site de réservation Stripe; сайт с онлайн записью | MOFU | /en/booking-systems + /fr/site-reservation (needed) | hub | missing; proof = Studio Nice Podcast booking engine; low demand, build after audit pages |
| видеосъемка интервью; видеопродакшн | MOFU/BOFU | /ru (video section) or /ru/videosemka-intervyu | /ru | section exists on /ru hub ("Видео и подкасты"); dedicated page only if Tristan confirms CIS shoots |
| foire de canton; sourcing chine; voyage sourcing chine | MOFU | /chine | - | exists; **no new pages**, content waits on Tristan's facts |
| china sourcing trip; guangzhou sourcing agent; canton fair | MOFU | /china | - | exists; same rule |
| кантонская ярмарка; байер в китае | MOFU | none (no RU China page) | - | do not create until facts exist |
| création site internet nice; video production nice | BOFU local | none | - | **drop**: base now Guangzhou; remove Nice-only terms from meta keywords |

Note: new pages would be the site's first non-hub URLs. Put them under a hub subfolder per playbook section 5
(e.g. /en/services/ai-visibility-audit) so GSC can filter, and link each from the matching hub card.
