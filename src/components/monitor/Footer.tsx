import type { Locale } from '@/lib/i18n';
import { translations } from '@/lib/translations';
import { site } from '@/lib/site';

export default function Footer({ locale }: { locale: Locale }) {
  const t = translations[locale];
  const links = [
    { href: '#services', label: t.footer.links.services },
    { href: '#work', label: t.footer.links.work },
    { href: '#faq', label: t.footer.links.faq },
    { href: '#contact', label: t.footer.links.contact },
  ];
  return (
    <footer className="border-t border-line bg-panel">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
          <div>
            <span className="font-display font-bold text-bone tracking-widest">TG</span>
            <p className="tg-label mt-3">{t.footer.tagline}</p>
          </div>
          <nav className="flex flex-wrap gap-6" aria-label="Footer">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-dim hover:text-bone transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-10 pt-6 border-t border-line flex flex-col md:flex-row justify-between gap-3">
          <p className="text-xs text-dim">{t.footer.legal}</p>
          <p className="text-xs text-dim">
            {t.footer.copyright} · <span className="font-plex">{site.name}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
