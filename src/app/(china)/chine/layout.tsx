import { Montserrat, Inter } from 'next/font/google';
import ChinaShell from '@/components/china/ChinaShell';
import '../../globals.css';

// Heading: Montserrat — geometric sans, clean and contemporary.
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-montserrat',
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
    <ChinaShell lang="fr" fontClassName={`${inter.variable} ${montserrat.variable}`}>
      {children}
    </ChinaShell>
  );
}
