import type { Metadata } from 'next';
import { Outfit, Inter, JetBrains_Mono } from 'next/font/google';
import { isValidLocale, defaultLocale, type Locale } from '@/lib/i18n';
import { site } from '@/lib/site';
import { contentDates } from '@/lib/content-dates';
import Analytics from '@/components/Analytics';
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
  // Body text is never the LCP here (the hero image is), and preloading
  // put the Cyrillic file on /en and /fr. Faces still load on demand by
  // unicode-range, so /ru gets Cyrillic and the others never fetch it.
  preload: false,
});

const plexMono = JetBrains_Mono({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700'],
  variable: '--font-plex-mono',
  display: 'swap',
  // Label font, never the LCP: no preload, so it stops competing with the hero image.
  preload: false,
});

const BASE_URL = site.baseUrl;

const metadataByLocale: Record<
  Locale,
  { title: string; description: string; ogAlt: string }
> = {
  en: {
    title: 'Tristan Grech · Websites, Web Apps and Video · Guangzhou',
    description:
      'Tristan Grech, developer and filmmaker in Guangzhou. Multilingual websites and booking systems that Google ranks and AI assistants cite, plus 4K video.',
    ogAlt: 'Tristan Grech, developer and filmmaker, Guangzhou',
  },
  fr: {
    title: 'Tristan Grech · Sites web, applications et vidéo · Canton',
    description:
      'Tristan Grech, développeur et vidéaste à Canton. Sites multilingues et systèmes de réservation que Google référence et que les IA citent, plus vidéo 4K.',
    ogAlt: 'Tristan Grech, développeur et vidéaste, Canton',
  },
  ru: {
    // Russian keeps the em dash: it is mandatory grammar in a copular
    // construction, not a stylistic break. Do not strip it.
    title: 'Тристан Греч — Сайты, веб-приложения и видео · Гуанчжоу',
    description:
      'Тристан Греч, разработчик и видеограф в Гуанчжоу. Многоязычные сайты и системы бронирования, которые находит Google и цитирует ИИ, плюс видео 4K.',
    ogAlt: 'Тристан Греч, разработчик и видеограф, Гуанчжоу',
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
  const { title, description, ogAlt } = metadataByLocale[locale];
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
          url: `${BASE_URL}/images/og-tristan-grech.jpg`,
          width: 1200,
          height: 630,
          alt: ogAlt,
          type: 'image/jpeg',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${BASE_URL}/images/og-tristan-grech.jpg`],
      creator: '@tristangrch',
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

// One entity description, shared by every locale. The @id nodes below are the
// same entity on /en, /fr and /ru, so their facts must not vary by page.
// Base: Guangzhou (commit 733f366). The podcast studio stays in Nice because
// it is physically there. Every fact here is visible on the hub or verifiable
// at the linked URL; nothing is markup-only.
const ENTITY_DESCRIPTION =
  'Tristan Grech is a developer and filmmaker based in Guangzhou, China. He builds multilingual websites, web apps and booking systems, runs AI visibility audits, and produces 4K video and podcasts. He works in French, English and Russian.';

function JsonLd({ locale }: { locale: Locale }) {
  const { title, description } = metadataByLocale[locale];

  const services = [
    {
      '@type': 'Service',
      name: 'Website design and development',
      description:
        'Multilingual marketing websites with structured data, SEO and AI visibility (GEO) built in. French, English and Russian.',
      provider: { '@id': `${BASE_URL}/#person` },
      areaServed: 'Worldwide (remote)',
    },
    {
      '@type': 'Service',
      name: 'Web applications and booking engines',
      description:
        'Custom web applications with Stripe payments, calendar sync, dashboards and AI agents, like the booking engine running Studio Nice Podcast.',
      provider: { '@id': `${BASE_URL}/#person` },
      areaServed: 'Worldwide (remote)',
    },
    {
      '@type': 'Service',
      name: 'AI visibility audit',
      description:
        'A website audit of technical health, SEO and AI assistant visibility (ChatGPT, Claude, Perplexity), delivered as a prioritized action list within 48 hours.',
      provider: { '@id': `${BASE_URL}/#person` },
      areaServed: 'Worldwide (remote)',
    },
    {
      '@type': 'Service',
      name: 'Video and podcast production',
      description:
        '4K interviews, event coverage and podcast production. Studio in Nice (Studio Nice Podcast), on location anywhere.',
      provider: { '@id': `${BASE_URL}/#person` },
      areaServed: ['Nice', 'Guangzhou', 'On location worldwide'],
    },
  ];

  const graphSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${BASE_URL}/#person`,
        name: 'Tristan Grech',
        alternateName: 'Тристан Греч',
        url: `${BASE_URL}/`,
        jobTitle: 'Developer and filmmaker',
        description: ENTITY_DESCRIPTION,
        disambiguatingDescription:
          'French developer and filmmaker based in Guangzhou, China, who builds multilingual websites and booking systems and runs the Studio Nice Podcast studio in Nice.',
        image: `${BASE_URL}/images/tristan-homepage.jpg`,
        nationality: { '@type': 'Country', name: 'France' },
        homeLocation: {
          '@type': 'Place',
          name: 'Guangzhou, China',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Guangzhou',
            addressCountry: 'CN',
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
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'business inquiries',
          email: site.email,
          telephone: '+33678496126',
          availableLanguage: ['French', 'English', 'Russian'],
        },
        makesOffer: services.map((s) => ({ '@type': 'Offer', itemOffered: s })),
        // Profiles that are Tristan himself, as linked from the visible page.
        // Product sites live in the portfolio ItemList, not here.
        sameAs: [site.linkedin, site.instagram],
      },
      {
        '@type': 'WebSite',
        '@id': `${BASE_URL}/#website`,
        name: 'Tristan Grech',
        alternateName: 'Тристан Греч',
        url: `${BASE_URL}/`,
        publisher: { '@id': `${BASE_URL}/#person` },
        inLanguage: ['en', 'fr', 'ru'],
      },
      {
        '@type': 'ProfilePage',
        '@id': `${BASE_URL}/${locale}#webpage`,
        url: `${BASE_URL}/${locale}`,
        name: title,
        description,
        isPartOf: { '@id': `${BASE_URL}/#website` },
        mainEntity: { '@id': `${BASE_URL}/#person` },
        dateCreated: contentDates.hubPublished,
        datePublished: contentDates.hubPublished,
        dateModified: contentDates.hub,
        inLanguage: locale,
      },
      ...(site.showreel.available && site.showreel.uploadDate
        ? [
            {
              '@type': 'VideoObject',
              name: 'Tristan Grech · Showreel 2026',
              description:
                'Showreel: websites, web apps and video production by Tristan Grech.',
              contentUrl: `${BASE_URL}${site.showreel.src}`,
              thumbnailUrl: `${BASE_URL}${site.showreel.poster}`,
              uploadDate: site.showreel.uploadDate,
            },
          ]
        : []),
      {
        '@type': 'ItemList',
        '@id': `${BASE_URL}/#portfolio`,
        name: 'Live projects',
        itemListElement: [
          ['Sumera', 'https://sumera.io', 'AI YouTube script generator with live Stripe billing.'],
          ['Fullink', 'https://www.fullink.io', 'Link in bio platform for creators.'],
          ['Feu France', 'https://feufrance.fr', 'Live wildfire map and alerts for France.'],
          ['Studio Nice Podcast', 'https://studionicepodcast.com', '4K video podcast studio in Nice with online booking.'],
          ['Polytaipe', 'https://polytaipe.com', 'Typing trainer for any keyboard layout.'],
          ['Source Canton', 'https://sourcecanton.com', 'China sourcing marketplace: one brief, a written quote from suppliers in Guangzhou, Foshan and Shenzhen.'],
        ].map(([name, url, desc], i) => ({
          '@type': 'ListItem',
          position: i + 1,
          item: {
            '@type': 'WebSite',
            name,
            url,
            description: desc,
            creator: { '@id': `${BASE_URL}/#person` },
          },
        })),
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
        <Analytics />
      </head>
      <body
        className={`${unbounded.variable} ${golos.variable} ${plexMono.variable} tg-monitor antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
