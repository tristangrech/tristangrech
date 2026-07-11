# tristangrech.com (Personal)

Personal website for Tristan Grech.

| | |
|---|---|
| **Domain** | tristangrech.com (Hostinger id 29172555, exp 2027-02-23) |
| **Host (apex)** | **Cloudflare Pages** ✅ — tristangrech.com + www → `tristangrech.pages.dev` (proxied; DNS zone on Cloudflare) |
| **Repo** | github.com/tristangrech/tristangrech (public, created 2026-05-16) |

## Subdomains (all → VPS, DNS-confirmed)
The apex is Cloudflare Pages, but every `*.tristangrech.com` subdomain points to the **VPS** (72.62.75.178) for the Fullhaura platform:
- `engine.tristangrech.com` → VPS — fullhaura-engine API (+ `/booking-api` → Studio Nice booking)
- `data.tristangrech.com` → VPS — Metabase analytics
- `concierge.tristangrech.com` → VPS — concierge portal

## Notes
- Apex personal site = **Cloudflare Pages** (`tristangrech.pages.dev`). All subdomains = **VPS** ([fullhaura-engine](../fullhaura-engine/)).
- DNS zone is on Cloudflare; apex hosting CF Pages, subdomains proxied to the VPS.
- ⚠️ There is **also a Vercel project** `tristangrech` (https://tristangrech.vercel.app, no custom domain) — a parallel/older copy. The live site is the Cloudflare Pages one; decide which is canonical and retire the other.
