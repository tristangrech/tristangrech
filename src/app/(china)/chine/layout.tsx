import { Fraunces, Inter } from 'next/font/google';
import ChinaShell from '@/components/china/ChinaShell';
import '../../globals.css';

// Heading: Fraunces — modern editorial serif with soft, contemporary character.
const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
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
    <ChinaShell lang="fr" fontClassName={`${inter.variable} ${fraunces.variable}`}>
      {children}
    </ChinaShell>
  );
}
