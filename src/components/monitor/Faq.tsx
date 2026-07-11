import type { Locale } from '@/lib/i18n';
import { translations } from '@/lib/translations';
import Scene from './Scene';

// Native <details> so every answer is in the HTML for crawlers and AI engines.
export default function Faq({ locale }: { locale: Locale }) {
  const t = translations[locale];
  return (
    <section id="faq" className="py-24 md:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <Scene scene={t.faq.scene} label={t.faq.label} title={t.faq.title} />
        <div className="border-t border-line max-w-3xl">
          {t.faq.items.map((item, i) => (
            <details key={i} className="group border-b border-line">
              <summary className="flex items-baseline gap-4 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <span className="tg-label text-ambr shrink-0">Q{String(i + 1).padStart(2, '0')}</span>
                <span className="text-bone font-medium leading-snug flex-1">{item.q}</span>
                <span className="text-dim group-open:rotate-45 transition-transform shrink-0" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="pb-6 pl-12 pr-8 text-dim leading-relaxed text-[15px]">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
