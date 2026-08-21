import type { Metadata } from 'next';

const BASE_URL = 'https://tristangrech.com';

// This funnel exists at /en, /fr and /ru but serves identical English copy, and
// its only content is a paid offer. It was previously indexable at all three
// URLs while canonicalising to the locale HOMEPAGE, which pointed Google at the
// wrong document entirely. Noindex is the honest state until the page is
// localised and given a self-referencing canonical.
export const metadata: Metadata = {
  title: 'AI Voice Agent Coaching · Private 1:1 Session',
  description:
    'Private one on one coaching session with Tristan Grech. Build, deploy, and monetize your own AI voice agent that handles real phone calls. €367 one time.',
  robots: { index: false, follow: true },
  openGraph: {
    title: 'AI Voice Agent Coaching | Private 1:1 Session',
    description:
      'Learn to build, deploy, and monetize AI voice agents in a private coaching session. Walk away with a working agent and the knowledge to build more.',
    url: `${BASE_URL}/en/landing`,
    siteName: 'Tristan Grech',
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/images/tristan-homepage.jpg`,
        width: 1200,
        height: 630,
        alt: 'AI Voice Agent Coaching with Tristan Grech',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Voice Agent Coaching | Private 1:1 Session',
    description:
      'Learn to build, deploy, and monetize AI voice agents. Private coaching with Tristan Grech. €367 one time.',
    images: [`${BASE_URL}/images/tristan-homepage.jpg`],
  },
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
