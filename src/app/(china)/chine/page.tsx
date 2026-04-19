import type { Metadata } from 'next';
import ChinaLanding from '@/components/china/ChinaLanding';
import { chinaDict } from '@/lib/china-i18n';

const BASE_URL = 'https://tristangrech.com';

export const metadata: Metadata = {
  title: chinaDict.fr.meta.title,
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
        url: `${BASE_URL}/images/china/hero.jpg`,
        width: 1920,
        alt: 'Tristan Grech — voyages business en Chine',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: chinaDict.fr.meta.title,
    description: chinaDict.fr.meta.description,
    images: [`${BASE_URL}/images/china/hero.jpg`],
    creator: '@fullhaura',
  },
};

export default function ChinePage() {
  return <ChinaLanding lang="fr" />;
}
