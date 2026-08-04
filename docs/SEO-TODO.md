# SEO / GEO todo — tristangrech.com + sourcecanton.com

Updated 2026-08-05, after the hub rebuild (added "What I do" services + aligned schema + added Source Canton).

## Done this pass
- [x] Restored crawlable/citable content on the hub (What-I-do services section, ~1,415 words).
- [x] Aligned schema: kept the 4 `Service` nodes (now visible), removed the orphan `FAQPage`.
- [x] Added Source Canton to the hub + the schema `ItemList` (8 projects).
- [x] Hero images to WebP (2 MB → 384 KB); lean CWV.

## High priority
- [ ] **Re-request indexing** of tristangrech.com `/en /fr /ru` in Search Console (homepage changed drastically: monitor → hub → services). BLOCKED on restoring GSC access (`/opt/gsc-indexer/vnc-login.sh`; Ryze MCP was 402).
- [ ] **Source Canton content cluster** = the real GEO growth (DataForSEO-verified demand): build on sourcecanton.com
  - [ ] `/foire-de-canton` (+ `/en/canton-fair`) — *foire de canton* 1,600/LOW, *canton fair* 1,300 FR / 8,100 EN, LOW. Top target.
  - [ ] `/guides/1688` (FR) — *1688* = 18,100/mo LOW. Biggest single FR opportunity.
  - [ ] `/guides/importer-de-chine` + supplier guide — *import from china* 2,900, *fournisseur chine* 1,900.
  - [ ] Answer-first FAQ + comparison tables + glossary on those pages (AI-citation levers).
- [ ] **Source Canton launch SEO**: fresh GSC property for sourcecanton.com + submit sitemap + request indexing.
- [ ] **301** `tristangrech.com/china` + `/chine` → sourcecanton.com (the /china pages still live on tristangrech; consolidate onto the new domain).

## Medium priority
- [ ] **og:image**: replace the old `tristan-homepage.jpg` share card with a purpose-built 1200×630 (name + role + photo). Title/description are accurate, leave them.
- [ ] **Per-project cover images** for the hub cards (cohesive, accent-tinted). BLOCKED: Replicate token on the VPS but SSH from China isn't connecting — either paste the `r8_` token or generate via Higgsfield.
- [ ] Point `sourcecanton.fr` → sourcecanton.com (301, brand protection).

## Low priority
- [ ] Confirm the (now-damped) gyroscope parallax feels right on Tristan's iPhone; tune sensitivity if needed.
- [ ] Retire the stale `tristangrech.vercel.app` duplicate.
- [ ] Decide on the unused `src/components/monitor/*` (kept in repo for revert) — remove once the hub is settled.
- [ ] Optional: give the hub a small showreel/video element once Tristan records one (the old showreel slot is gone in the hub).

## Notes
- Google retired FAQ rich results (2026-05-07), so removing FAQPage costs no SERP feature; it only removed a schema/content mismatch.
- The hub is a hub: its own ranking ceiling is low. The compounding GEO wins live on the project sites (Source Canton first).
