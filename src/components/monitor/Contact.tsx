import type { Locale } from '@/lib/i18n';
import { translations } from '@/lib/translations';
import { site } from '@/lib/site';
import Scene from './Scene';

export default function Contact({ locale }: { locale: Locale }) {
  const t = translations[locale];
  return (
    <section id="contact" className="py-24 md:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <Scene scene={t.contact.scene} label={t.contact.label} title={t.contact.title} sub={t.contact.sub} />
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-rec text-bone font-medium text-sm rounded-sm hover:bg-[#d9352a] transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-bone tg-rec-dot" />
            {t.contact.whatsapp}
          </a>
          <a
            href={site.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3.5 border border-line text-bone text-sm rounded-sm hover:border-bone transition-colors"
          >
            {t.contact.telegram}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center px-6 py-3.5 border border-line text-bone text-sm rounded-sm hover:border-bone transition-colors"
          >
            {t.contact.email}
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3.5 border border-line text-bone text-sm rounded-sm hover:border-bone transition-colors"
          >
            {t.contact.linkedin}
          </a>
        </div>
        <div className="mt-12 flex flex-wrap gap-x-10 gap-y-3">
          <p className="text-sm text-dim">
            <span className="tg-label !text-[10px] mr-3">LOC</span>
            {t.contact.info.location}
          </p>
          <p className="text-sm text-dim">
            <span className="tg-label !text-[10px] mr-3">NET</span>
            {t.contact.info.availability}
          </p>
          <p className="text-sm text-dim">
            <span className="tg-label !text-[10px] mr-3">MAIL</span>
            {site.email}
          </p>
        </div>
      </div>
    </section>
  );
}
