import type { Metadata } from 'next';
import { Locale, isValidLocale, defaultLocale } from '@/lib/i18n';
import { notFound } from 'next/navigation';
import ModelNavbar from '@/components/modelling/ModelNavbar';
import ModelFooter from '@/components/modelling/ModelFooter';
import ModelHero from '@/components/modelling/ModelHero';
import ModelSpecs from '@/components/modelling/ModelSpecs';
import ModelPortfolio from '@/components/modelling/ModelPortfolio';
import ModelSwimming from '@/components/modelling/ModelSwimming';
import ModelContact from '@/components/modelling/ModelContact';

const BASE_URL = 'https://tristangrech.com';

const metadataByLocale: Record<Locale, { title: string; description: string }> =
  {
    en: {
      title:
        'Tristan Grech — Model · Athlete | 186cm · Based in Nice, France',
      description:
        'French model and former national swim team athlete. 186cm, based in Nice, France. Available for commercial, fitness, editorial, and fashion campaigns across Europe and Asia. Agencies and brands welcome.',
    },
    fr: {
      title:
        'Tristan Grech — Modèle · Athlète | 186cm · Basé à Nice, France',
      description:
        'Modèle français et ancien membre de l\'équipe de France de natation. 186 cm, basé à Nice. Disponible pour campagnes commerciales, fitness, éditoriales et mode en Europe et en Asie.',
    },
    ru: {
      title:
        'Тристан Греч — Модель · Спортсмен | 186см · Ницца, Франция',
      description:
        'Французская модель и бывший член сборной по плаванию. 186 см, база в Ницце. Доступен для коммерческих, фитнес-, редакционных и модных кампаний в Европе и Азии.',
    },
  };

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale: Locale = isValidLocale(params.locale)
    ? params.locale
    : defaultLocale;
  const { title, description } = metadataByLocale[locale];
  const canonicalUrl = `${BASE_URL}/${locale}/modelling`;
  const ogLocaleMap: Record<Locale, string> = {
    en: 'en_US',
    fr: 'fr_FR',
    ru: 'ru_RU',
  };
  const ogLocale = ogLocaleMap[locale];

  return {
    title,
    description,
    keywords: [
      'Tristan Grech model',
      'male model China',
      'French model Asia',
      'fitness model',
      'athletic model',
      'commercial model China',
      '186cm model',
      'model booking Asia',
    ],
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${BASE_URL}/en/modelling`,
        fr: `${BASE_URL}/fr/modelling`,
        ru: `${BASE_URL}/ru/modelling`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'Tristan Grech',
      type: 'profile',
      locale: ogLocale,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function ModellingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const validLocale = locale as Locale;

  return (
    <main className="dark bg-[#080808] min-h-screen">
      <ModelNavbar locale={validLocale} />
      <ModelHero locale={validLocale} />
      <ModelSpecs locale={validLocale} />
      <ModelPortfolio locale={validLocale} />
      <ModelSwimming locale={validLocale} />
      <ModelContact locale={validLocale} />
      <ModelFooter locale={validLocale} />
    </main>
  );
}
