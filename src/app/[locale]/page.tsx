import { isValidLocale, defaultLocale, type Locale } from '@/lib/i18n';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import RightNow from '@/components/RightNow';
import Projects from '@/components/Projects';
import PastProjects from '@/components/PastProjects';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage({
  params,
}: {
  params: { locale: string };
}) {
  const locale: Locale = isValidLocale(params.locale) ? params.locale : defaultLocale;

  return (
    <main className="min-h-screen">
      <Navbar locale={locale} />
      <Hero locale={locale} />
      <StatsBar locale={locale} />
      <RightNow locale={locale} />
      <Projects locale={locale} />
      <PastProjects locale={locale} />
      <About locale={locale} />
      <Contact locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}
