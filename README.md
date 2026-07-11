# tristangrech.com (Personal / Studio)

Video-first portfolio + client-acquisition site for Tristan Grech: websites, web apps, audits, video production. Redesigned 2026-07-11 (monitor design system, EN/FR/RU, GEO layer).

| | |
|---|---|
| **Domain** | tristangrech.com (Hostinger id 29172555, exp 2027-02-23) |
| **Host (apex)** | **Cloudflare Pages** ✅ — tristangrech.com + www → `tristangrech.pages.dev` (proxied; DNS zone on Cloudflare) |
| **Repo** | github.com/tristangrech/tristangrech (public) |
| **Deploy** | `npm run build && npx wrangler pages deploy out --project-name tristangrech --branch main --commit-dirty=true` |

## Structure (post-redesign)
- Locales: **en / fr / ru** (`src/lib/i18n.ts`). zh + ar dropped, 302 → /en via `public/_redirects`. `/china` + `/chine` funnel pages unchanged.
- Homepage: `src/components/monitor/*` (production-monitor design: timecode navbar, showreel hero, clips-as-case-studies). Copy in `src/lib/translations.ts`, contacts/flags in `src/lib/site.ts`.
- **Showreel drop-in**: put `showreel.mp4` + `showreel-poster.jpg` in `public/video/`, flip `showreel.available: true` in `src/lib/site.ts`, rebuild + deploy. Full instructions: `public/video/README.md`. Until then the hero shows the designed STANDBY state.
- GEO: JSON-LD graph in `src/app/[locale]/layout.tsx` (Person + ProfessionalService + Services + FAQPage mirroring the visible FAQ), `public/llms.txt`, open AI-crawler `src/app/robots.ts`.
- Strategy: `docs/STRATEGY-2026-07.md` (acquisition plan, GEO checklist, Almaty playbook).
- `/[locale]/modelling` (placeholder photos) and `/[locale]/landing` (orphan funnel) still exist but are unlinked from nav/footer.

## Subdomains (all → VPS, DNS-confirmed)
- `engine.tristangrech.com` → VPS — fullhaura-engine API (+ `/booking-api` → Studio Nice booking)
- `data.tristangrech.com` → VPS — Metabase analytics
- `concierge.tristangrech.com` → VPS — concierge portal

## Notes
- ⚠️ A parallel Vercel project `tristangrech` (tristangrech.vercel.app, no custom domain) still exists — stale copy; the live site is Cloudflare Pages. Retire it eventually.
- Case-study clearances: Halo AI footage + Silvia's face/frames are NOT used pending client blessing (text-only credits). See docs/STRATEGY-2026-07.md.
