import { Locale } from '@/lib/i18n';
import { translations } from '@/lib/translations';

interface ModelSwimmingProps {
  locale: Locale;
}

export default function ModelSwimming({ locale }: ModelSwimmingProps) {
  const t = translations[locale];
  const m = t.modelling.swimming;

  return (
    <section className="bg-[#080808] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Photo placeholder */}
          <div className="relative aspect-[3/4] lg:aspect-auto lg:min-h-[600px] overflow-hidden">
            <div
              className="absolute inset-0 rounded-sm"
              style={{
                background: 'linear-gradient(160deg, #0a1520 0%, #0d1a28 40%, #081018 100%)',
              }}
            >
              {/* Water-like texture overlay */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  background:
                    'repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(184, 150, 90, 0.03) 40px, rgba(184, 150, 90, 0.03) 41px)',
                }}
              />
              {/* Radial light */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  background: 'radial-gradient(ellipse at 50% 40%, rgba(13, 110, 180, 0.3), transparent 70%)',
                }}
              />
              {/* Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 border border-[#1a3040] rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-6 h-6 text-[#3a6080]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <p className="text-[#3a6080] text-sm font-body tracking-widest uppercase">
                    {m.photoPlaceholder}
                  </p>
                </div>
              </div>
            </div>
            {/* Border accent */}
            <div className="absolute inset-0 border border-[#1a2a38] rounded-sm pointer-events-none" />
          </div>

          {/* Right - Content */}
          <div>
            {/* Section label */}
            <p className="text-[#b8965a] text-xs uppercase tracking-[0.35em] font-body font-medium mb-8">
              {m.sectionLabel}
            </p>

            {/* Title */}
            <h2 className="text-[#f5f2ee] font-['Cormorant_Garamond',serif] text-3xl md:text-4xl lg:text-5xl font-light leading-tight tracking-tight mb-10">
              {m.title}
            </h2>

            {/* Paragraphs */}
            <div className="space-y-6 mb-12">
              {m.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-[#888880] text-base font-body leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Achievement list */}
            <ul className="space-y-4">
              {m.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-4">
                  {/* Gold line bullet */}
                  <span className="flex-shrink-0 w-5 h-px bg-[#b8965a] mt-3" />
                  <span className="text-[#e8e0d4] text-sm md:text-base font-body leading-relaxed">
                    {achievement}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
