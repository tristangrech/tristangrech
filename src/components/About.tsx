'use client';

import type { Locale } from '@/lib/i18n';
import { translations } from '@/lib/translations';

interface AboutProps {
  locale: Locale;
}

export default function About({ locale }: AboutProps) {
  const t = translations[locale];

  return (
    <section id="about" className="py-24 bg-surface-alt">
      <div className="section-container">
        {/* Section Label */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-blue-500" />
          <span className="text-sm font-medium text-blue-500 tracking-wide uppercase">
            {t.about.label}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Text */}
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-on-surface mb-8">
              {t.about.title}
            </h2>

            <div className="space-y-5">
              {t.about.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-on-surface-secondary leading-relaxed text-[15px]"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Language Chips */}
            <div className="flex flex-wrap gap-2.5 mt-8">
              {t.about.languages.map((lang, index) => (
                <span
                  key={index}
                  className="px-4 py-1.5 text-sm font-medium rounded-full border border-outline text-on-surface-secondary bg-surface-elevated hover:border-blue-500/50 hover:text-blue-400 transition-colors cursor-default"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {t.about.stats.map((stat, index) => (
              <div
                key={index}
                className="rounded-2xl border border-outline bg-surface-card p-6 text-center"
              >
                <div className="font-heading text-3xl font-bold text-on-surface mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-on-surface-muted">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
