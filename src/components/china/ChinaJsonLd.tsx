import { chinaDict, type ChinaLang } from '@/lib/china-i18n';
import { contentDates } from '@/lib/content-dates';

const BASE_URL = 'https://tristangrech.com';

// Structured data for /china and /chine. Only facts the page itself shows:
// the page title and description, the three cities, and the person who runs
// the trips. No offers or prices here: those stay in the visible packages,
// where the terms sit next to them.
export default function ChinaJsonLd({ lang }: { lang: ChinaLang }) {
  const t = chinaDict[lang];
  const path = lang === 'fr' ? '/chine' : '/china';
  const url = `${BASE_URL}${path}`;
  const hub = lang === 'fr' ? '/fr' : '/en';

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: t.meta.title,
        description: t.meta.description,
        inLanguage: lang,
        isPartOf: { '@id': `${BASE_URL}/#website` },
        about: { '@id': `${url}#service` },
        primaryImageOfPage: `${BASE_URL}/images/china/og-china.jpg`,
        dateModified: contentDates.china,
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Tristan Grech', item: `${BASE_URL}${hub}` },
            { '@type': 'ListItem', position: 2, name: t.meta.title, item: url },
          ],
        },
      },
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: t.meta.title,
        description: t.meta.description,
        serviceType: lang === 'fr' ? 'Voyage de sourcing en Chine' : 'China sourcing trip',
        provider: {
          '@type': 'Person',
          '@id': `${BASE_URL}/#person`,
          name: 'Tristan Grech',
          url: `${BASE_URL}/`,
        },
        areaServed: [
          { '@type': 'City', name: 'Guangzhou' },
          { '@type': 'City', name: 'Foshan' },
          { '@type': 'City', name: 'Shenzhen' },
        ],
        url,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
