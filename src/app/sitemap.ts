import type { MetadataRoute } from 'next';

const BASE_URL = 'https://tristangrech.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['en', 'ru', 'zh', 'ar'];
  const lastModified = new Date();

  const pages = locales.flatMap((locale) => [
    {
      url: `${BASE_URL}/${locale}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 1.0,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${BASE_URL}/${l}`])
        ),
      },
    },
    {
      url: `${BASE_URL}/${locale}/modelling`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${BASE_URL}/${l}/modelling`])
        ),
      },
    },
  ]);

  return pages;
}
