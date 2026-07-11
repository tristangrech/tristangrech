import type { Locale } from '@/lib/i18n';
import { translations } from '@/lib/translations';
import Scene from './Scene';

export default function About({ locale }: { locale: Locale }) {
  const t = translations[locale];
  return (
    <section id="about" className="py-24 md:py-32 border-t border-line bg-panel/40">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <Scene scene={t.about.scene} label={t.about.label} title={t.about.title} />
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12">
          <div className="space-y-6">
            {t.about.paragraphs.map((p, i) => (
              <p key={i} className="text-dim leading-relaxed text-base md:text-lg">
                {p}
              </p>
            ))}
          </div>
          <dl className="border border-line divide-y divide-line h-fit">
            {t.about.meta.map((m) => (
              <div key={m.k} className="flex justify-between gap-4 px-5 py-4">
                <dt className="tg-label !text-[10px] self-center">{m.k}</dt>
                <dd className="text-sm text-bone text-right">{m.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
