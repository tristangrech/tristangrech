import type { Metadata } from 'next';
import ChinaLanding from '@/components/china/ChinaLanding';
import { chinaDict } from '@/lib/china-i18n';

const BASE_URL = 'https://tristangrech.com';

export const metadata: Metadata = {
  title: chinaDict.en.meta.title,
  description: chinaDict.en.meta.description,
  alternates: {
    canonical: `${BASE_URL}/china`,
    languages: {
      en: `${BASE_URL}/china`,
      fr: `${BASE_URL}/chine`,
      'x-default': `${BASE_URL}/chine`,
    },
  },
  openGraph: {
    title: chinaDict.en.meta.title,
    description: chinaDict.en.meta.description,
    url: `${BASE_URL}/china`,
    siteName: 'Tristan Grech',
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['fr_FR'],
    images: [
      {
        url: `${BASE_URL}/images/china/hero.jpg`,
        width: 1920,
        alt: 'Tristan Grech — China business trips',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: chinaDict.en.meta.title,
    description: chinaDict.en.meta.description,
    images: [`${BASE_URL}/images/china/hero.jpg`],
    creator: '@fullhaura',
  },
};

export default function ChinaPage() {
  return <ChinaLanding lang="en" />;
}
