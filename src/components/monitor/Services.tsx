import type { Locale } from '@/lib/i18n';
import { translations } from '@/lib/translations';
import Scene from './Scene';

export default function Services({ locale }: { locale: Locale }) {
  const t = translations[locale];
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <Scene scene={t.services.scene} label={t.services.label} title={t.services.title} sub={t.services.sub} />
        <div className="grid md:grid-cols-2 gap-px bg-line border border-line">
          {t.services.items.map((s, i) => (
            <article key={s.id} className="bg-ink p-8 md:p-10 hover:bg-panel transition-colors group">
              <div className="flex items-baseline justify-between">
                <span className="tg-label text-ambr">S{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="font-display uppercase font-medium text-lg md:text-xl text-bone mt-5 tracking-tight">
                {s.title}
              </h3>
              <p className="mt-4 text-dim leading-relaxed text-[15px]">{s.desc}</p>
              <p className="mt-5 text-sm text-bone/80 leading-relaxed border-l-2 border-rec pl-4">
                {s.proof}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
