import type { Locale } from '@/lib/i18n';
import { translations } from '@/lib/translations';

export default function ProofBar({ locale }: { locale: Locale }) {
  const t = translations[locale];
  return (
    <section className="border-y border-line bg-panel">
      <div className="max-w-6xl mx-auto px-5 md:px-8 grid grid-cols-2 lg:grid-cols-4">
        {t.proof.map((item, i) => (
          <div
            key={i}
            className={`py-8 md:py-10 pr-6 ${i > 0 ? 'lg:border-l lg:border-line lg:pl-6' : ''} ${
              i % 2 === 1 ? 'border-l border-line pl-6 lg:pl-6' : ''
            } ${i > 1 ? 'border-t border-line lg:border-t-0' : ''}`}
          >
            <div className="font-display font-semibold text-3xl md:text-4xl text-bone tabular-nums">
              {item.value}
            </div>
            <p className="mt-2 text-sm text-dim leading-snug">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
