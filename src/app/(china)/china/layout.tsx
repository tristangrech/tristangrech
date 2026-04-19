import { Montserrat, Inter } from 'next/font/google';
import ChinaShell from '@/components/china/ChinaShell';
import '../../globals.css';

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

export default function ChinaLayout({ children }: { children: React.ReactNode }) {
  return (
    <ChinaShell lang="en" fontClassName={`${inter.variable} ${montserrat.variable}`}>
      {children}
    </ChinaShell>
  );
}
