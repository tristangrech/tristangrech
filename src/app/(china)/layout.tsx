import type { Metadata } from 'next';

const BASE_URL = 'https://tristangrech.com';

// Shared metadata for /chine + /china. The `<html>` / `<body>` shell is
// set in each route's own layout (chine/layout.tsx, china/layout.tsx) so
// that `lang` is correct per route.
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
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
};

export default function ChinaGroupLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
