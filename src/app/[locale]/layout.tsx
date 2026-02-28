import type { Metadata } from 'next';
import { Noto_Sans, Syne, Noto_Sans_SC, Cairo_Play } from 'next/font/google';
import { isValidLocale, defaultLocale, rtlLocales, type Locale } from '@/lib/i18n';
import { ThemeProvider } from '@/components/ThemeProvider';
import '../globals.css';

const notoSans = Noto_Sans({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-noto-sans',
  display: 'swap',
});

const notoSansSC = Noto_Sans_SC({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-noto-sans-sc',
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
      'Geo-Front',
      'geopolitical monitoring',
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
      images: [
        {
          url: `${BASE_URL}/images/tristan-homepage.jpg`,
          width: 1200,
          height: 630,
          alt: 'Tristan Grech — Entrepreneur, Developer, China Business',
          type: 'image/jpeg',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${BASE_URL}/images/tristan-homepage.jpg`],
      creator: '@fullhaura',
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
  const currentDate = new Date().toISOString().split('T')[0];

  const graphSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      // Person schema (enhanced)
      {
        '@type': 'Person',
        '@id': `${BASE_URL}/#person`,
        name: 'Tristan Grech',
        url: BASE_URL,
        jobTitle: 'Entrepreneur & Full-Stack Developer',
        description,
        image: `${BASE_URL}/images/tristan-homepage.jpg`,
        nationality: {
          '@type': 'Country',
          name: 'France',
        },
        workLocation: {
          '@type': 'Place',
          name: 'China',
        },
        knowsLanguage: ['French', 'English', 'Portuguese', 'Russian'],
        knowsAbout: [
          'Full-Stack Web Development',
          'Artificial Intelligence',
          'SaaS Development',
          'China Business Consulting',
          'International Trade',
          'AI Automation',
          'Europe-Asia Business',
        ],
        alumniOf: {
          '@type': 'SportsTeam',
          name: 'French National Swimming Team',
        },
        sameAs: [
          'https://wa.me/33678496126',
          'https://t.me/Fullhaura',
          'https://www.linkedin.com/in/fullhaura/',
          'https://sumera.io',
          'https://www.fullink.io',
          'https://geo-front.com',
        ],
      },
      // WebSite schema
      {
        '@type': 'WebSite',
        '@id': `${BASE_URL}/#website`,
        name: title,
        url: BASE_URL,
        description,
        publisher: { '@id': `${BASE_URL}/#person` },
        inLanguage: [
          { '@type': 'Language', name: 'English', alternateName: 'en' },
          { '@type': 'Language', name: 'Russian', alternateName: 'ru' },
          { '@type': 'Language', name: 'Chinese', alternateName: 'zh' },
          { '@type': 'Language', name: 'Arabic', alternateName: 'ar' },
        ],
      },
      // WebPage schema with SpeakableSpecification
      {
        '@type': 'WebPage',
        '@id': `${BASE_URL}/${locale}#webpage`,
        url: `${BASE_URL}/${locale}`,
        name: title,
        description,
        isPartOf: { '@id': `${BASE_URL}/#website` },
        about: { '@id': `${BASE_URL}/#person` },
        datePublished: '2026-01-15',
        dateModified: currentDate,
        inLanguage: locale,
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['h1', 'h2', '.text-lg', '.text-on-surface-muted'],
        },
      },
      // Organization schema (FULLHAURA)
      {
        '@type': 'Organization',
        '@id': `${BASE_URL}/#organization`,
        name: 'FULLHAURA',
        url: BASE_URL,
        logo: `${BASE_URL}/images/fullhaura-logo.png`,
        description:
          'AI agency building digital tools, automations, and web solutions for businesses across Europe and Asia.',
        founder: { '@id': `${BASE_URL}/#person` },
        foundingDate: '2024',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'CN',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'business inquiries',
          email: 'tristangrech.nat@gmail.com',
          availableLanguage: ['English', 'French', 'Russian', 'Chinese'],
        },
        sameAs: [
          'https://www.linkedin.com/in/fullhaura/',
          'https://sumera.io',
          'https://www.fullink.io',
          'https://geo-front.com',
        ],
      },
      // BreadcrumbList schema
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${BASE_URL}/${locale}`,
          },
        ],
      },
      // FAQPage schema (+40% AI visibility)
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Who is Tristan Grech?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Tristan Grech is a French entrepreneur with Maltese origins based in China. He is a full-stack web developer, AI specialist, and international business consultant who builds projects connecting Europe and Asia. He has 16+ years of competitive swimming experience including the French national team.',
            },
          },
          {
            '@type': 'Question',
            name: 'What services does Tristan Grech offer?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Tristan offers full-stack web development, AI-powered tool development, SaaS product building, and China business consulting. His agency FULLHAURA provides digital tools, automations, and web solutions for businesses across Europe and Asia. He also offers sourcing, negotiations, logistics, and market entry support for companies entering the Chinese market.',
            },
          },
          {
            '@type': 'Question',
            name: 'What projects has Tristan Grech built?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Tristan has built several active projects: Sumera.io (AI-powered YouTube script generator), Fullink.io (all-in-one link-in-bio platform), Geo-Front.com (live geopolitical conflict monitoring platform), SwimForm.ai (AI swimming coaching platform), and FULLHAURA (AI agency for web solutions and automation).',
            },
          },
          {
            '@type': 'Question',
            name: 'How can I contact Tristan Grech?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You can reach Tristan via WhatsApp at +33 6 78 49 61 26, Telegram at @Fullhaura, WeChat (ID: wxid_llgnw6mtfc2522), email at tristangrech.nat@gmail.com, or LinkedIn at linkedin.com/in/fullhaura. He is open to projects worldwide.',
            },
          },
          {
            '@type': 'Question',
            name: 'What languages does Tristan Grech speak?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Tristan speaks 4 languages fluently: French (native), English, Portuguese, and Russian. His multilingual ability combined with being based in China makes him uniquely positioned to bridge European and Asian business markets.',
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }}
    />
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0a0d12" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'||(!t&&window.matchMedia('(prefers-color-scheme:light)').matches)){document.documentElement.classList.remove('dark')}}catch(e){}})()`,
          }}
        />
        <JsonLd locale={locale} />
      </head>
      <body
        className={`${notoSans.variable} ${cairoPlay.variable} ${notoSansSC.variable} ${syne.variable}`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
