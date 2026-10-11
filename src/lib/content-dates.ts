// Last substantive content change per page, as plain ISO dates.
//
// These feed the sitemap <lastmod> and the JSON-LD dateModified. They used to
// be `new Date()` at build time, which told Google every page changed on every
// deploy. That is date-only freshness: crawlers learn to ignore the signal.
// Bump a date by hand in the same commit that changes the page's copy or
// facts, never for a rebuild, a style tweak or a dependency update.
export const contentDates = {
  hub: '2026-10-11', // /en /fr /ru
  china: '2026-10-11', // /china /chine
  hubPublished: '2026-01-15',
} as const;
