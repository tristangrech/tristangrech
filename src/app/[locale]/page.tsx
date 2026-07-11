import { isValidLocale, defaultLocale, type Locale } from '@/lib/i18n';
import Navbar from '@/components/monitor/Navbar';
import Hero from '@/components/monitor/Hero';
import ProofBar from '@/components/monitor/ProofBar';
import Services from '@/components/monitor/Services';
import Work from '@/components/monitor/Work';
import LiveSites from '@/components/monitor/LiveSites';
import AiProof from '@/components/monitor/AiProof';
import Faq from '@/components/monitor/Faq';
import About from '@/components/monitor/About';
import Contact from '@/components/monitor/Contact';
import Footer from '@/components/monitor/Footer';

export default function HomePage({
  params,
}: {
  params: { locale: string };
}) {
  const locale: Locale = isValidLocale(params.locale) ? params.locale : defaultLocale;

  return (
    <main className="min-h-screen grain">
      <Navbar locale={locale} />
      <Hero locale={locale} />
      <ProofBar locale={locale} />
      <Services locale={locale} />
      <Work locale={locale} />
      <LiveSites locale={locale} />
      <AiProof locale={locale} />
      <Faq locale={locale} />
      <About locale={locale} />
      <Contact locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}
