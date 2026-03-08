import type { Metadata } from 'next';

const BASE_URL = 'https://tristangrech.com';

export const metadata: Metadata = {
  title: 'AI Voice Agent Coaching | Learn to Build and Monetize AI Agents',
  description:
    'Private one on one coaching session with Tristan Grech. Build, deploy, and monetize your own AI voice agent that handles real phone calls. €367 one time.',
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
