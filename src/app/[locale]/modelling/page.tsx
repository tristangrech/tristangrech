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
      title: 'Tristan Grech · Model and Athlete · 186cm · Guangzhou',
      description:
        'French model and former national swim team athlete. 186cm, based in Guangzhou. Available for commercial, fitness, editorial and fashion campaigns across Europe and Asia.',
    },
    fr: {
      title: 'Tristan Grech · Modèle et athlète · 186cm · Canton',
      description:
        'Modèle français et ancien nageur de l\'équipe de France. 186 cm, basé à Canton. Disponible pour campagnes commerciales, fitness, éditoriales et mode en Europe et en Asie.',
    },
    // Russian keeps the em dash: mandatory grammar, not a stylistic break.
    ru: {
      title: 'Тристан Греч — Модель и спортсмен · 186см · Гуанчжоу',
      description:
        'Французская модель и бывший член сборной по плаванию. 186 см, база в Гуанчжоу. Доступен для коммерческих, фитнес-, редакционных и модных кампаний в Европе и Азии.',
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
    // Every portfolio slot on this page is still an empty placeholder: the
    // components render zero <img> elements. A model's portfolio with no
    // photographs is worse than no portfolio, so it stays out of the index
    // until the images land. Flip index back to true in the same commit that
    // adds them.
    robots: { index: false, follow: true },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${BASE_URL}/en/modelling`,
        fr: `${BASE_URL}/fr/modelling`,
        ru: `${BASE_URL}/ru/modelling`,
        'x-default': `${BASE_URL}/en/modelling`,
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
