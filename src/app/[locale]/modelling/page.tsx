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
        'Tristan Grech — Model · Athlete | 186cm · Based in China · Asia-wide',
      description:
        'French model and former national swim team athlete. 186cm, based in China. Available for commercial, fitness, editorial, and fashion campaigns across Asia. Agencies and brands welcome.',
    },
    ru: {
      title:
        'Тристан Греч — Модель · Спортсмен | 186см · Базируется в Китае',
      description:
        'Французская модель и бывший член сборной по плаванию. 186 см, базируется в Китае. Доступен для коммерческих, фитнес-, редакционных и модных кампаний по всей Азии.',
    },
    zh: {
      title: 'Tristan Grech — 模特 · 运动员 | 186cm · 常驻中国 · 亚洲全境',
      description:
        '法国模特及前国家游泳队运动员。186cm，常驻中国。可接受亚洲范围内的商业、健身、编辑和时尚广告。欢迎经纪公司和品牌联系。',
    },
    ar: {
      title: 'Tristan Grech — عارض أزياء · رياضي | 186سم · مقيم في الصين',
      description:
        'عارض أزياء فرنسي ورياضي سباحة سابق في المنتخب الوطني. 186 سم، مقيم في الصين. متاح للحملات التجارية واللياقة والتحريرية والأزياء في جميع أنحاء آسيا.',
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
    ru: 'ru_RU',
    zh: 'zh_CN',
    ar: 'ar_SA',
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
        ru: `${BASE_URL}/ru/modelling`,
        zh: `${BASE_URL}/zh/modelling`,
        ar: `${BASE_URL}/ar/modelling`,
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
