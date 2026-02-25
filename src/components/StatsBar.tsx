'use client';

import { Locale } from '@/lib/i18n';
import { translations } from '@/lib/translations';

interface StatsBarProps {
  locale: Locale;
}

export default function StatsBar({ locale }: StatsBarProps) {
  const t = translations[locale];

  const stats = t.stats;

  return (
    <section className="bg-surface-elevated border-y border-outline">
      <div className="section-container py-8 md:py-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center">
              {/* Stat */}
              <div className="flex flex-col items-center text-center px-8 md:px-12 lg:px-16">
                <span className="font-heading font-black text-3xl md:text-4xl text-on-surface">
                  {stat.value}
                </span>
                <span className="text-sm text-on-surface-muted mt-1">
                  {stat.label}
                </span>
              </div>

              {/* Divider (not after last item) */}
              {index < stats.length - 1 && (
                <div className="hidden md:block w-px h-12 bg-outline" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
