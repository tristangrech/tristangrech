import type { Metadata } from 'next';
import ChinaLanding from '@/components/china/ChinaLanding';
import { chinaDict } from '@/lib/china-i18n';
import ChinaJsonLd from '@/components/china/ChinaJsonLd';

const BASE_URL = 'https://tristangrech.com';

export const metadata: Metadata = {
  // Brand last: if the title truncates, only the brand goes.
  title: `${chinaDict.en.meta.title} | Tristan Grech`,
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
        url: `${BASE_URL}/images/china/og-china.jpg`,
        width: 1200,
        height: 630,
        alt: 'Tristan Grech, China buying trips in Guangzhou',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: chinaDict.en.meta.title,
    description: chinaDict.en.meta.description,
    images: [`${BASE_URL}/images/china/og-china.jpg`],
    creator: '@fullhaura',
  },
};

export default function ChinaPage() {
  return (
    <>
      <ChinaJsonLd lang="en" />
      <ChinaLanding lang="en" />
    </>
  );
}
