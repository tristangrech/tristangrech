import type { Metadata } from 'next';
import ChinaLanding from '@/components/china/ChinaLanding';
import { chinaDict } from '@/lib/china-i18n';
import ChinaJsonLd from '@/components/china/ChinaJsonLd';

const BASE_URL = 'https://tristangrech.com';

export const metadata: Metadata = {
  // Brand last: if the title truncates, only the brand goes.
  title: `${chinaDict.fr.meta.title} | Tristan Grech`,
  description: chinaDict.fr.meta.description,
  alternates: {
    canonical: `${BASE_URL}/chine`,
    languages: {
      fr: `${BASE_URL}/chine`,
      en: `${BASE_URL}/china`,
      'x-default': `${BASE_URL}/chine`,
    },
  },
  openGraph: {
    title: chinaDict.fr.meta.title,
    description: chinaDict.fr.meta.description,
    url: `${BASE_URL}/chine`,
    siteName: 'Tristan Grech',
    type: 'website',
    locale: 'fr_FR',
    alternateLocale: ['en_US'],
    images: [
      {
        url: `${BASE_URL}/images/china/og-china.jpg`,
        width: 1200,
        height: 630,
        alt: 'Tristan Grech, voyages sourcing en Chine à Guangzhou',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: chinaDict.fr.meta.title,
    description: chinaDict.fr.meta.description,
    images: [`${BASE_URL}/images/china/og-china.jpg`],
    creator: '@fullhaura',
  },
};

export default function ChinePage() {
  return (
    <>
      <ChinaJsonLd lang="fr" />
      <ChinaLanding lang="fr" />
    </>
  );
}
