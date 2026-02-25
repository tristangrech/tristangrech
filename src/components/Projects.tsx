'use client';

import type { Locale } from '@/lib/i18n';
import { translations } from '@/lib/translations';

interface ProjectsProps {
  locale: Locale;
}

const gradientMap: Record<string, string> = {
  'from-cyan-500 to-blue-600': 'linear-gradient(135deg, #06b6d4, #2563eb)',
  'from-lime-400 to-emerald-500': 'linear-gradient(135deg, #a3e635, #10b981)',
  'from-violet-500 to-indigo-600': 'linear-gradient(135deg, #8b5cf6, #4f46e5)',
  'from-amber-400 to-orange-500': 'linear-gradient(135deg, #fbbf24, #f97316)',
};

export default function Projects({ locale }: ProjectsProps) {
  const t = translations[locale];

  return (
    <section id="projects" className="py-24 bg-surface">
      <div className="section-container">
        {/* Section Label */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-blue-500" />
          <span className="text-sm font-medium text-blue-500 tracking-wide uppercase">
            {t.projects.label}
          </span>
        </div>

        {/* Title & Description */}
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-on-surface mb-3">
          {t.projects.title}
        </h2>
        <p className="text-on-surface-muted text-lg mb-12 max-w-2xl">
          {t.projects.description}
        </p>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.projects.items.map((project, index) => (
            <div
              key={index}
              className="card-hover rounded-2xl border border-outline bg-surface-card overflow-hidden group"
            >
              {/* Banner */}
              <div
                className="relative h-36 flex items-end p-5"
                style={{
                  background: project.image ? '#000' : (gradientMap[project.gradient] || 'linear-gradient(135deg, #06b6d4, #2563eb)'),
                }}
              >
                {/* Cover image or subtle pattern overlay */}
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15) 0%, transparent 50%)',
                  }} />
                )}

                {/* Status Badge */}
                <span className="absolute top-4 right-4 px-3 py-1 text-xs font-medium rounded-full bg-white/20 text-white backdrop-blur-sm border border-white/20 z-10">
                  {project.status}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-5">
                {/* Project Name */}
                <h3 className="font-heading text-xl font-bold text-on-surface mb-2">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-on-surface-muted leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2.5 py-1 text-xs font-medium rounded-full border border-outline text-on-surface-secondary bg-surface-elevated"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Link */}
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    {t.common.visitWebsite}
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-on-surface-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse-slow" />
                    {t.common.inDevelopment}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
