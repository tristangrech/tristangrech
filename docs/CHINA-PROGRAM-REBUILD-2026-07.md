# China Program — Strategic Rebuild (2026-07-27)

Owner decision this session:
- **Asset:** the on-site trip program at `/china` (EN) + `/chine` (FR) on tristangrech.com. Not cnsourcing.fr, not a merge.
- **Ground truth:** reframe to a **Europe-based operator who leads scheduled China trips**, not a Guangzhou resident. Drop every "lives in Guangzhou" claim.
- **Outcome wanted:** all four — strategic rebuild, page redesign, SEO/GEO, and a proper relaunch (fix honesty, placeholders, dead links, wire it, take it genuinely live).

This doc is the spine. Two background research passes (market/pricing/positioning; FR+EN keyword+GEO) are running to make the positioning and SEO evidence-based; their findings sharpen §4 and §5 but do not change the core direction below.

---

## 1. The product, in one honest line
Tristan leads **scheduled small-group buying trips** into South China's manufacturing triangle (Guangzhou markets, Foshan factories, Shenzhen electronics), working alongside a **native Mandarin-speaking negotiator on the ground**. Flat fee, no hidden commission. The goal is to make the founder **autonomous** in China, not dependent on an agent.

## 2. Positioning reframe (the honesty fix)
Old premise: "Come to China with a Frenchman who lives here · 4 years in Guangzhou · two partners based on the ground." That contradicts the rest of his identity (Nice → Almaty) and is not true.

New premise: **"Come to China with a Frenchman who knows the ground and makes the trip with you."**
- He is the **trip lead and operator**, European-based, in China for each scheduled trip. He knows the Canton–Foshan–Shenzhen triangle firsthand.
- The **local negotiator** is the on-the-ground native-Mandarin half of the duo. Kept, but phrased without unverifiable absolutes until Tristan confirms the partner's status/name (see §6).
- No residency claim, no invented tenure. Credibility comes from the model (he leads it in person, native negotiator, flat fee, teach-to-fish) not from a "lives here" badge.

## 3. Honesty fixes shipped this session (live)
On the current structure, value-only edits so nothing breaks:
- Killed all "qui y vit / lives here / installé à Guangzhou / living in Guangzhou / 4 ans à Guangzhou / 4 years in Guangzhou / deux associés à Guangzhou / based here" claims → operator-who-leads-trips framing.
- Removed the two dead **geo-front.com** footer links → real cross-links (tristangrech.com + studionicepodcast.com), which also helps entity/GEO.
- Removed the unused `FIRST_TRIP_MONTH` placeholder constant (was never rendered; no fake date was showing).
- Aligned "Fullhaura (AI & web agency)" → "Fullhaura, web & video studio in Nice" to match the main site's entity.
- De-stale the early-bird line ("launching this month" → "opening the first trips now").
- Kept the testimonial slots — they are honestly labelled open early-bird spots, not fabricated reviews.

## 4. Offer & pricing (cohort model)
Keep the three locked tiers: **Discovery €1,490 (3d) · Builder €3,490 (5–7d) · Full Launch €6,990 (7d + a Fullhaura website)**, +30% second person. Pricing sanity check pending market agent.
Shift the frame from "book anytime, I'm here" to **dated cohorts**: small fixed-date group trips a few times a year, with a private-trip option at premium. This fits the remote reality, creates real scarcity, and is honest (no "I live here" implied availability). Dates are set on the discovery call until Tristan gives fixed ones — no fabricated dates.

## 5. Design direction (recommended)
Make it a **distinct sub-brand built from the same materials** as tristangrech.com, for entity cohesion and GEO:
- **Shared hand:** the monitor type system (Unbounded display / Golos text / IBM Plex Mono labels) and the ink `#0A0C10` / bone `#EFECE3` foundation, so a crawler and a human read it as the same operator.
- **China-field-operation mood:** red stays as the tie accent (rec-red already reads China-red), add a **jade/celadon + brass** secondary. Cartographic (the Canton–Foshan–Shenzhen triangle map is the hero asset), documentary factory/market photography, data-forward (MOQ, lead times, prices, "what's included / not included").
- Net effect: reads as a serious operator's **field program / dossier**, not a tour and not a tacky sourcing-agent page. Deliberately distances from the agent look the FAQ already disowns.

## 6. Inputs needed from Tristan (so copy is strong AND true)
1. **Real China experience** — how long / how often have you actually worked the Guangzhou–Foshan–Shenzhen ground, and what have you genuinely sourced? I will state it precisely instead of the old "4 years" claim. Right now the copy uses defensible, non-tenure language.
2. **The local negotiator** — is the Franco-Chinese / native-Mandarin partner real and committed, and can we name them (or a first name + role)? Determines how hard we lean on "the duo."
3. **Trip dates** — give me the next cohort date(s) or confirm "dates set on the call" is the honest default for now.
4. **Stripe links** — confirm the 3 payment links (`buy.stripe.com/...`) are live and correctly priced before we drive real traffic. I will not assert they work; they're present in code.

## 7. Build phases (after research lands)
1. **Copy rewrite** — full FR+EN pass, keyword-aligned, cohort framing, real credentials once §6 answered.
2. **Redesign** — rebuild `ChinaLanding.tsx` to §5 direction.
3. **SEO/GEO** — add JSON-LD to `(china)` layout: `Service`/`TouristTrip`+`Offer`(prices), `FAQPage` (mirror visible FAQ), `Person`, `BreadcrumbList`; hreflang `/china`↔`/chine`; keyword-aligned meta; a China-program block in `llms.txt`.
4. **Relaunch** — discreet link from the main site (footer/ventures, not the dev/filmmaker nav, to avoid re-polluting the Nice entity), Playwright verify, deploy, GSC.

---

## 8. Research findings & refined plan (2026-07-27, two agents)

### Market (competitor + pricing + positioning)
**The reframe is validated by the market, not a compromise.** The non-resident, fly-in cohort is the *premium* format, not the weak one:
- **China Magic** — 5-day $3,000 / 12-day $5,000, ~70-person cohort, Western mentors who fly in. The market anchor.
- **Allons en Chine** (Canadian, non-resident) — CAD ~$5,500 (~€3,700), 15 days, max 6, flights + hotel included. Closest conceptual twin to our model.
- **Sino Sourcing "Sino Trip"** (France, our nearest direct twin) — €3,290 standard / €4,290 premium per Canton phase, max 8, part board, 3-month post-trip support.
- **Agent-Sourcing.com** — Canton pkg €2,497, day-rate ~€250. **IZI Sourcing** — €1,690 / €2,590 / €3,990 (private all-in incl. flights).
- **Resident agencies** (Leeline, Jing, Dragon) — the *other* model: flat fee or 3–10% commission (often hiding 20–25% kickbacks); year-round, they do post-trip QC.

**Pricing verdict on the locked €1,490 / €3,490 / €6,990:**
- **€1,490** — slightly low; keep ONLY as a ring-fenced *shared-cohort tripwire* (shared negotiator, limited seats), or nudge to ~€1,900–2,200 to stop reading "cheap" in a fear-driven niche.
- **€3,490** — right on the money, this is the **hero**. Keep, push most buyers here.
- **€6,990** — too high for a trip alone (2× Sino premium). Only defensible if repackaged as **Private / Concierge Sourcing**: private itinerary + dedicated negotiator + pre-trip shortlist + **post-trip production watch**. Rename it and make it done-for-you.

**Positioning angle to lead with:** *"Your buyer's-side operator — not a factory's agent."* Flat-fee, zero commission, French-peer trust, native-Mandarin negotiator, de-risked first trip. Open the page with the fear (a trading company posing as a factory) and answer it with a **named proof protocol**: GSXT business-license check → live factory-floor walk → escrow-only payment. This is the one thing resident commission-agents structurally *cannot* say.

**NEW honesty gap to decide (adds to §6):** we fly home, so we do NOT run ongoing post-trip QC/production oversight. Do not imply we do. Choose one: (a) subcontract to a **named local QC firm** and say so, or (b) productize a paid **"production watch" retainer** (also turns a one-off trip into MRR). This must be settled before the copy claims anything about after-the-trip.

### SEO/GEO (FR + EN)
**Win the winnable cluster first.** The "agent sourcing" head terms are an agency SEO wall; our defensible, high-intent, low-competition wedge:
- **FR:** voyage sourcing Chine · accompagnement sourcing Chine · agent sourcing Chine francophone · interprète français-chinois Canton · accompagnement Foire de Canton (seasonal).
- **EN:** China sourcing trip · China buying trip · guided factory tour China/Shenzhen/Guangzhou · Canton Fair agent/interpreter · [city] wholesale market tour.
- Compete on "trouver fournisseur / importer de Chine / find a supplier in China / how to source from China" only via **companion informational content**, not the landing page.

**To be AI-citable (ChatGPT/Perplexity/AI Overviews cite facts, not pitches):**
- Answer-first FAQ: each question an H2/H3 + a 40–60-word direct answer, then detail. (8 FR + 8 EN drafted in the research — cost, visa 2026, safety/scams, Alibaba-vs-in-person, flat-fee-vs-commission, MOQ, QC/shipping, language/negotiation.)
- Concrete **comparison tables**: DIY/Alibaba vs resident agent vs guided trip; flat-fee vs 3–10% commission cost table.
- A **glossary block** (trading company vs factory, ghost factory, MOQ, Incoterms FOB/EXW/DDP, freight forwarder, QC inspection, 1688 vs Alibaba) — glossary passages get cited heavily.
- **Schema:** `Service` + `Offer` (the flat fees), `FAQPage`, `Organization`/`Person` with named operator + negotiator, `TouristTrip`/`Trip` for scheduled departures, `BreadcrumbList`.
- **Canton Fair 2026** seasonal sub-content (Autumn 15 Oct–4 Nov; Spring ~15 Apr–5 May) — strongest recurring high-intent hook; refresh dates twice a year.
- Keep the page server-rendered (it is) and add a China-program block to `llms.txt`.

Caveats from the agents: keyword volumes are qualitative estimates (Ryze Keyword Planner is 402/lapsed); the "75% defrauded / $87.5k loss" figures are vendor-marketing — use as narrative, never cite as fact (brand-honesty).
