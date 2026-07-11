import type { MetadataRoute } from 'next';

const BASE_URL = 'https://tristangrech.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['en', 'fr', 'ru'];
  const lastModified = new Date();

  const pages = locales.map((locale) => ({
    url: `${BASE_URL}/${locale}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 1.0,
    alternates: {
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, `${BASE_URL}/${l}`])),
        'x-default': `${BASE_URL}/en`,
      },
    },
  }));

  // China landing page (FR + EN top-level routes, not part of the locale system)
  const chinaPages = [
    {
      url: `${BASE_URL}/chine`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: {
        languages: {
          fr: `${BASE_URL}/chine`,
          en: `${BASE_URL}/china`,
          'x-default': `${BASE_URL}/chine`,
        },
      },
    },
    {
      url: `${BASE_URL}/china`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: {
        languages: {
          en: `${BASE_URL}/china`,
          fr: `${BASE_URL}/chine`,
          'x-default': `${BASE_URL}/chine`,
        },
      },
    },
  ];

  return [...pages, ...chinaPages];
}
