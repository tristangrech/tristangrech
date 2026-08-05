import type { Metadata } from 'next';
import { Outfit, Inter, JetBrains_Mono } from 'next/font/google';
import { isValidLocale, defaultLocale, type Locale } from '@/lib/i18n';
import { site } from '@/lib/site';
import '../globals.css';

// Fonts reworked 2026-08-04: Outfit (display) + Inter (body) + JetBrains Mono (labels).
// Const/variable names kept stable so Tailwind display/golos/plex classes update automatically.
const unbounded = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-unbounded',
  display: 'swap',
});

const golos = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-golos',
  display: 'swap',
});

const plexMono = JetBrains_Mono({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700'],
  variable: '--font-plex-mono',
  display: 'swap',
});

const BASE_URL = site.baseUrl;

const metadataByLocale: Record<
  Locale,
  { title: string; description: string; keywords: string[] }
> = {
  en: {
    title: 'Tristan Grech — Websites, Web Apps & Video Production · Nice, France',
    description:
      'Tristan Grech is a developer and filmmaker in Nice, France. Multilingual websites and booking systems that Google ranks and AI assistants recommend, plus broadcast-grade video: Cannes Lions 2026 coverage, founder interviews, podcast production. Working in French, English and Russian, remotely from Paris to Almaty.',
    keywords: [
      'Tristan Grech',
      'web developer Nice',
      'website developer France',
      'web app developer',
      'booking system developer',
      'website audit',
      'AI visibility audit',
      'GEO generative engine optimization',
      'SEO Nice',
      'video production Nice',
      'Cannes Lions video production',
      'podcast studio Nice',
      'interview filming French Riviera',
      'веб разработчик Ницца',
      'разработка сайтов Алматы',
    ],
  },
  fr: {
    title: 'Tristan Grech — Sites web, applications & production vidéo · Nice',
    description:
      'Tristan Grech est développeur et vidéaste à Nice. Sites multilingues et systèmes de réservation référencés par Google et recommandés par les assistants IA, plus de la vidéo qualité broadcast : couverture des Cannes Lions 2026, interviews de fondateurs, production de podcasts. En français, anglais et russe, à distance de Paris à Almaty.',
    keywords: [
      'Tristan Grech',
      'développeur web Nice',
      'création site internet Nice',
      'application web réservation',
      'audit de site web',
      'audit visibilité IA',
      'GEO optimisation moteurs génératifs',
      'SEO Nice',
      'production vidéo Nice',
      'vidéo Cannes Lions',
      'studio podcast Nice',
      'tournage interview Côte d\'Azur',
    ],
  },
  ru: {
    title: 'Тристан Греч — Сайты, веб-приложения и видеопродакшн · Ницца',
    description:
      'Тристан Греч, разработчик и видеограф из Ниццы. Многоязычные сайты и системы бронирования, которые находит Google и рекомендуют ИИ-ассистенты, плюс видео вещательного качества: репортажи с Cannes Lions 2026, интервью с основателями, продакшн подкастов. На французском, английском и русском, удалённо от Парижа до Алматы.',
    keywords: [
      'Тристан Греч',
      'Tristan Grech',
      'разработка сайтов',
      'веб разработчик Ницца',
      'создание сайта Алматы',
      'аудит сайта',
      'видимость в ИИ',
      'GEO оптимизация',
      'видеопродакшн Ницца',
      'студия подкастов',
      'съёмка интервью',
      'сайт для бизнеса Казахстан',
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
    fr: 'fr_FR',
    ru: 'ru_RU',
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
        fr: `${BASE_URL}/fr`,
        ru: `${BASE_URL}/ru`,
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
      alternateLocale: ['en_US', 'fr_FR', 'ru_RU'].filter((l) => l !== ogLocale),
      images: [
        {
          url: `${BASE_URL}/images/og-card.jpg`,
          width: 1200,
          height: 630,
          alt: 'Tristan Grech — developer and filmmaker, Nice, France',
          type: 'image/jpeg',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${BASE_URL}/images/og-card.jpg`],
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
  return [{ locale: 'en' }, { locale: 'fr' }, { locale: 'ru' }];
}

function JsonLd({ locale }: { locale: Locale }) {
  const { title, description } = metadataByLocale[locale];
  const currentDate = new Date().toISOString().split('T')[0];

  const services = [
    {
      '@type': 'Service',
      name: 'Website design and development',
      description:
        'Multilingual marketing websites with structured data, SEO and AI visibility (GEO) built in. French, English and Russian.',
      provider: { '@id': `${BASE_URL}/#business` },
      areaServed: ['France', 'Monaco', 'European Union', 'Kazakhstan', 'Worldwide (remote)'],
    },
    {
      '@type': 'Service',
      name: 'Web applications and booking engines',
      description:
        'Custom web applications with Stripe payments, calendar sync, dashboards and AI agents, like the booking engine running Studio Nice Podcast.',
      provider: { '@id': `${BASE_URL}/#business` },
      areaServed: ['Worldwide (remote)'],
    },
    {
      '@type': 'Service',
      name: 'Website and AI visibility audit',
      description:
        'A 48-hour audit of technical health, SEO and AI assistant visibility (ChatGPT, Claude, Perplexity), delivered as a prioritized action list.',
      provider: { '@id': `${BASE_URL}/#business` },
      areaServed: ['Worldwide (remote)'],
    },
    {
      '@type': 'Service',
      name: 'Video and podcast production',
      description:
        '4K multi-camera interviews, event coverage and podcast production with broadcast audio, colour grading and subtitles. Studio in Nice, on location anywhere. Cannes Lions 2026 event coverage delivered overnight.',
      provider: { '@id': `${BASE_URL}/#business` },
      areaServed: ['Nice', 'Cannes', 'Monaco', 'French Riviera', 'Almaty', 'Astana', 'On location worldwide'],
    },
  ];

  const graphSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${BASE_URL}/#person`,
        name: 'Tristan Grech',
        url: BASE_URL,
        jobTitle: 'Developer & Filmmaker',
        description,
        image: `${BASE_URL}/images/tristan-homepage.jpg`,
        nationality: { '@type': 'Country', name: 'France' },
        homeLocation: {
          '@type': 'Place',
          name: 'Nice, France',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Nice',
            addressCountry: 'FR',
          },
        },
        knowsLanguage: ['French', 'English', 'Russian', 'Portuguese'],
        knowsAbout: [
          'Web development',
          'Web applications and booking systems',
          'Search engine optimization (SEO)',
          'Generative engine optimization (GEO)',
          'AI assistant visibility',
          'Video production',
          'Podcast production',
          'Stripe payment integration',
        ],
        memberOf: {
          '@type': 'SportsTeam',
          name: 'French National Swimming Team',
        },
        sameAs: [
          site.linkedin,
          site.whatsapp,
          site.telegram,
          'https://studionicepodcast.com',
          'https://almatypodcast.com',
          'https://fullhaura-services.com',
          'https://sumera.io',
          'https://www.fullink.io',
          'https://sourcecanton.com',
          'https://revesdelite.com',
        ],
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${BASE_URL}/#business`,
        name: 'Tristan Grech',
        legalName: site.legalName,
        identifier: {
          '@type': 'PropertyValue',
          propertyID: 'SIREN',
          value: '843305996',
        },
        url: BASE_URL,
        description:
          'Web development and video production studio in Nice, France: multilingual websites, web apps with payments and booking, website and AI visibility audits, and 4K video production. Remote work across the EU and CIS, in French, English and Russian.',
        founder: { '@id': `${BASE_URL}/#person` },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Nice',
          addressCountry: 'FR',
        },
        areaServed: [
          { '@type': 'City', name: 'Nice' },
          { '@type': 'City', name: 'Cannes' },
          { '@type': 'City', name: 'Monaco' },
          { '@type': 'Country', name: 'France' },
          { '@type': 'Country', name: 'Kazakhstan' },
          { '@type': 'AdministrativeArea', name: 'European Union (remote)' },
        ],
        availableLanguage: ['French', 'English', 'Russian'],
        priceRange: '€€',
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'business inquiries',
          email: site.email,
          telephone: '+33678496126',
          availableLanguage: ['French', 'English', 'Russian'],
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Services',
          itemListElement: services.map((s) => ({
            '@type': 'Offer',
            itemOffered: s,
          })),
        },
        sameAs: [site.linkedin, 'https://studionicepodcast.com', 'https://almatypodcast.com', 'https://fullhaura-services.com', 'https://sourcecanton.com'],
      },
      {
        '@type': 'WebSite',
        '@id': `${BASE_URL}/#website`,
        name: title,
        url: BASE_URL,
        description,
        publisher: { '@id': `${BASE_URL}/#person` },
        inLanguage: [
          { '@type': 'Language', name: 'English', alternateName: 'en' },
          { '@type': 'Language', name: 'French', alternateName: 'fr' },
          { '@type': 'Language', name: 'Russian', alternateName: 'ru' },
        ],
      },
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
          cssSelector: ['h1', 'h2'],
        },
      },
      ...(site.showreel.available
        ? [
            {
              '@type': 'VideoObject',
              name: 'Tristan Grech — Showreel 2026',
              description:
                'Showreel: websites, web apps and video production by Tristan Grech, Nice, France.',
              contentUrl: `${BASE_URL}${site.showreel.src}`,
              thumbnailUrl: `${BASE_URL}${site.showreel.poster}`,
              uploadDate: currentDate,
            },
          ]
        : []),
      {
        '@type': 'ItemList',
        '@id': `${BASE_URL}/#portfolio`,
        name: 'Live projects',
        itemListElement: [
          { '@type': 'WebSite', position: 1, name: 'Sumera', url: 'https://sumera.io', description: 'AI YouTube script generator with live Stripe billing.', creator: { '@id': `${BASE_URL}/#person` } },
          { '@type': 'WebSite', position: 2, name: 'Fullink', url: 'https://www.fullink.io', description: 'Link in bio platform for creators.', creator: { '@id': `${BASE_URL}/#person` } },
          { '@type': 'WebSite', position: 3, name: 'Feu France', url: 'https://feufrance.fr', description: 'Live wildfire map and alerts for France.', creator: { '@id': `${BASE_URL}/#person` } },
          { '@type': 'WebSite', position: 4, name: 'Studio Nice Podcast', url: 'https://studionicepodcast.com', description: '4K video podcast studio in Nice with online booking.', creator: { '@id': `${BASE_URL}/#person` } },
          { '@type': 'WebSite', position: 5, name: 'Almaty Podcast', url: 'https://almatypodcast.com', description: 'Podcast studio in Almaty, in three languages.', creator: { '@id': `${BASE_URL}/#person` } },
          { '@type': 'WebSite', position: 6, name: 'Polytaipe', url: 'https://polytaipe.com', description: 'Typing trainer for any keyboard layout.', creator: { '@id': `${BASE_URL}/#person` } },
          { '@type': 'WebSite', position: 7, name: 'Fullhaura Services', url: 'https://fullhaura-services.com', description: 'Trilingual private concierge on the French Riviera.', creator: { '@id': `${BASE_URL}/#person` } },
          { '@type': 'WebSite', position: 8, name: 'Source Canton', url: 'https://sourcecanton.com', description: 'Guided China sourcing trips and buying across Guangzhou, Foshan and Shenzhen.', creator: { '@id': `${BASE_URL}/#person` } },
        ],
      },
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

  return (
    <html lang={locale} dir="ltr" className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0A0C10" />
        <JsonLd locale={locale} />
      </head>
      <body
        className={`${unbounded.variable} ${golos.variable} ${plexMono.variable} tg-monitor antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
