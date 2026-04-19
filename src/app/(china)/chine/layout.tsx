import { Newsreader, Inter } from 'next/font/google';
import ChinaShell from '@/components/china/ChinaShell';
import '../../globals.css';

// Heading: Newsreader — editorial serif with gravitas (think NYT / Substack).
// Chosen over Fraunces for a more serious, premium B2B feel.
const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-newsreader',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export default function ChineLayout({ children }: { children: React.ReactNode }) {
  return (
    <ChinaShell lang="fr" fontClassName={`${inter.variable} ${newsreader.variable}`}>
      {children}
    </ChinaShell>
  );
}
