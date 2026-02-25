'use client';

import type { Locale } from '@/lib/i18n';
import { translations } from '@/lib/translations';

interface PastProjectsProps {
  locale: Locale;
}

const gradientMap: Record<string, string> = {
  'from-violet-500 to-purple-600': 'linear-gradient(135deg, #8b5cf6, #9333ea)',
  'from-pink-400 to-rose-500': 'linear-gradient(135deg, #f472b6, #f43f5e)',
};

export default function PastProjects({ locale }: PastProjectsProps) {
  const t = translations[locale];

  return (
    <section className="py-20 bg-surface-alt">
      <div className="section-container">
        {/* Section Label */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-blue-500" />
          <span className="text-sm font-medium text-blue-500 tracking-wide uppercase">
            {t.pastProjects.label}
          </span>
        </div>

        <h2 className="font-heading text-2xl md:text-3xl font-bold text-on-surface mb-2">
          {t.pastProjects.title}
        </h2>
        <p className="text-on-surface-muted mb-10 max-w-xl">
          {t.pastProjects.description}
        </p>

        {/* Past Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl">
          {t.pastProjects.items.map((project, index) => (
            <div
              key={index}
              className="card-hover rounded-xl border border-outline bg-surface-card overflow-hidden"
            >
              {/* Image Placeholder / Gradient Area */}
              <div
                className="h-24 opacity-60"
                style={{
                  background: gradientMap[project.gradient] || 'linear-gradient(135deg, #8b5cf6, #9333ea)',
                }}
              />

              {/* Content */}
              <div className="p-4">
                <h3 className="font-heading text-lg font-semibold text-on-surface mb-1.5">
                  {project.name}
                </h3>
                <p className="text-sm text-on-surface-muted leading-relaxed mb-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-0.5 text-xs font-medium rounded-full border border-outline-faint text-on-surface-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
