import type { Metadata } from 'next';
import { Noto_Sans, Syne, Zhi_Mang_Xing, Cairo_Play } from 'next/font/google';
import { isValidLocale, defaultLocale, rtlLocales, type Locale } from '@/lib/i18n';
import { ThemeProvider } from '@/components/ThemeProvider';
import '../globals.css';

const notoSans = Noto_Sans({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-noto-sans',
  display: 'swap',
});

const zhiMangXing = Zhi_Mang_Xing({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-zhi-mang-xing',
  display: 'swap',
  preload: false,
});

const cairoPlay = Cairo_Play({
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo-play',
  display: 'swap',
});

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
});

const BASE_URL = 'https://tristangrech.com';

const metadataByLocale: Record<
  Locale,
  { title: string; description: string; keywords: string[] }
> = {
  en: {
    title: 'Tristan Grech — Entrepreneur · Developer · China Business',
    description:
      'French entrepreneur based in China. Full-stack web development, AI solutions, SaaS products, and China business consulting. Building international projects connecting Europe and Asia.',
    keywords: [
      'Tristan Grech',
      'entrepreneur',
      'web developer',
      'China business',
      'AI',
      'fullstack developer',
      'SaaS',
      'Sumera',
      'Fullink',
      'SwimForm',
      'FULLHAURA',
      'China consulting',
      'France China business',
      'international business',
      'web development agency',
      'AI automation',
    ],
  },
  ru: {
    title: 'Тристан Греч — Предприниматель · Разработчик · Бизнес с Китаем',
    description:
      'Французский предприниматель в Китае. Веб-разработка, решения на базе ИИ, SaaS-продукты и консультации по бизнесу с Китаем. Международные проекты, связывающие Европу и Азию.',
    keywords: [
      'Тристан Греч',
      'Tristan Grech',
      'предприниматель',
      'веб-разработчик',
      'бизнес в Китае',
      'ИИ',
      'фулстек разработчик',
      'SaaS',
      'международный бизнес',
      'консалтинг Китай',
      'Франция Китай',
    ],
  },
  zh: {
    title: 'Tristan Grech — 创业者 · 开发者 · 中国商务',
    description:
      '驻中国的法国创业者。全栈网站开发、人工智能解决方案、SaaS产品与中国商务咨询。构建连接欧洲与亚洲的国际项目。',
    keywords: [
      'Tristan Grech',
      '创业者',
      '网站开发',
      '中国商务',
      '人工智能',
      '全栈开发',
      'SaaS',
      '国际商务',
      '法国中国',
      'AI自动化',
    ],
  },
  ar: {
    title: 'Tristan Grech — رائد أعمال · مطوّر · أعمال في الصين',
    description:
      'رائد أعمال فرنسي مقيم في الصين. تطوير ويب متكامل، حلول ذكاء اصطناعي، منتجات SaaS، واستشارات أعمال في الصين. بناء مشاريع دولية تربط أوروبا وآسيا.',
    keywords: [
      'Tristan Grech',
      'رائد أعمال',
      'مطور ويب',
      'أعمال الصين',
      'ذكاء اصطناعي',
      'تطوير ويب',
      'SaaS',
      'استشارات الصين',
      'أعمال دولية',
      'أتمتة',
    ],
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
  const { title, description, keywords } = metadataByLocale[locale];
  const canonicalUrl = `${BASE_URL}/${locale}`;
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
    keywords,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${BASE_URL}/en`,
        ru: `${BASE_URL}/ru`,
        zh: `${BASE_URL}/zh`,
        ar: `${BASE_URL}/ar`,
        'x-default': `${BASE_URL}/en`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'Tristan Grech',
      type: 'website',
      locale: ogLocale,
      alternateLocale: ['en_US', 'ru_RU', 'zh_CN', 'ar_SA'].filter(
        (l) => l !== ogLocale
      ),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    authors: [{ name: 'Tristan Grech', url: BASE_URL }],
    creator: 'Tristan Grech',
    publisher: 'Tristan Grech',
    category: 'technology',
  };
}

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ru' }, { locale: 'zh' }, { locale: 'ar' }];
}

function JsonLd({ locale }: { locale: Locale }) {
  const { title, description } = metadataByLocale[locale];

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Tristan Grech',
    url: BASE_URL,
    jobTitle: 'Entrepreneur & Full-Stack Developer',
    description,
    nationality: {
      '@type': 'Country',
      name: 'France',
    },
    workLocation: {
      '@type': 'Place',
      name: 'China',
    },
    knowsLanguage: ['French', 'English', 'Portuguese', 'Russian'],
    sameAs: [
      'https://wa.me/33678496126',
      'https://t.me/Fullhaura',
      'https://www.linkedin.com/in/fullhaura/',
      'https://sumera.io',
      'https://www.fullink.io',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: title,
    url: BASE_URL,
    description,
    inLanguage: [
      { '@type': 'Language', name: 'English', alternateName: 'en' },
      { '@type': 'Language', name: 'Russian', alternateName: 'ru' },
      { '@type': 'Language', name: 'Chinese', alternateName: 'zh' },
      { '@type': 'Language', name: 'Arabic', alternateName: 'ar' },
    ],
    author: {
      '@type': 'Person',
      name: 'Tristan Grech',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale: Locale = isValidLocale(params.locale)
    ? params.locale
    : defaultLocale;
  const dir = rtlLocales.includes(locale) ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir} className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'||(!t&&window.matchMedia('(prefers-color-scheme:light)').matches)){document.documentElement.classList.remove('dark')}}catch(e){}})()`,
          }}
        />
        <JsonLd locale={locale} />
      </head>
      <body
        className={`${notoSans.variable} ${cairoPlay.variable} ${zhiMangXing.variable} ${syne.variable}`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
