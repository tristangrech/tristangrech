'use client';

import { Locale } from '@/lib/i18n';
import { translations } from '@/lib/translations';

interface RightNowProps {
  locale: Locale;
}

export default function RightNow({ locale }: RightNowProps) {
  const t = translations[locale];

  return (
    <section className="py-20 md:py-28">
      <div className="section-container">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="w-2.5 h-2.5 rounded-full bg-primary shadow-lg shadow-primary/30" />
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-on-surface">
            {t.now.title}
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.now.cards.map((card, index) => (
            <div
              key={index}
              className="card-hover rounded-2xl border border-outline bg-surface-card p-6 space-y-4"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <div className="w-5 h-5 rounded-md bg-primary/25" />
              </div>

              {/* Title */}
              <h3 className="font-heading font-bold text-lg text-on-surface">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-on-surface-muted leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
