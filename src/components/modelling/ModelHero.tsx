'use client';

import { Locale } from '@/lib/i18n';
import { translations } from '@/lib/translations';

interface ModelHeroProps {
  locale: Locale;
}

export default function ModelHero({ locale }: ModelHeroProps) {
  const t = translations[locale];
  const m = t.modelling.hero;

  return (
    <section className="relative min-h-screen bg-[#080808] overflow-hidden">
      {/* Two-column grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left side - Content */}
        <div className="relative z-10 flex flex-col justify-center px-8 md:px-16 lg:px-20 xl:px-28 py-32 lg:py-0">
          {/* Label */}
          <p
            className="text-[#b8965a] text-xs md:text-sm uppercase tracking-[0.35em] font-body font-medium mb-8"
          >
            {m.label}
          </p>

          {/* Name */}
          <h1 className="mb-8">
            <span
              className="block text-[#f5f2ee] font-['Cormorant_Garamond',serif] text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light leading-[0.9] tracking-tight"
            >
              {m.firstName}
            </span>
            <span
              className="block text-[#f5f2ee] font-['Cormorant_Garamond',serif] text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light italic leading-[0.9] tracking-tight mt-2"
            >
              {m.lastName}
            </span>
          </h1>

          {/* Description */}
          <p className="text-[#888880] text-sm md:text-base font-body leading-relaxed max-w-md tracking-wide">
            {m.description}
          </p>

          {/* Decorative line */}
          <div className="mt-12 w-16 h-px bg-[#b8965a]" />
        </div>

        {/* Right side - Photo placeholder (hidden on mobile) */}
        <div className="hidden lg:block relative">
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, #0f0f0e 0%, #1a1915 40%, #12110f 100%)',
            }}
          >
            {/* Subtle texture overlay */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                background: 'radial-gradient(ellipse at 50% 30%, rgba(184, 150, 90, 0.15), transparent 70%)',
              }}
            />
            {/* Placeholder text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 border border-[#2a2a28] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-6 h-6 text-[#888880]"
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
                <p className="text-[#888880] text-sm font-body tracking-widest uppercase">
                  {m.photoPlaceholder}
                </p>
              </div>
            </div>
          </div>

          {/* Gradient overlay on left edge for blending */}
          <div
            className="absolute inset-y-0 left-0 w-24"
            style={{
              background: 'linear-gradient(to right, #080808, transparent)',
            }}
          />
        </div>
      </div>

      {/* Scroll indicator - bottom right */}
      <div className="absolute bottom-10 right-10 hidden lg:flex flex-col items-center gap-3 z-20">
        <span className="text-[#888880] text-[10px] uppercase tracking-[0.3em] font-body -rotate-90 origin-center translate-y-4 mb-4">
          {m.scrollHint}
        </span>
        <div className="relative w-px h-16 bg-[#2a2a28] overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full bg-[#b8965a] animate-scroll-line"
            style={{
              height: '40%',
              animation: 'scrollLine 2s ease-in-out infinite',
            }}
          />
        </div>
      </div>

      {/* Keyframe animation for scroll line */}
      <style jsx>{`
        @keyframes scrollLine {
          0% {
            transform: translateY(-100%);
          }
          50% {
            transform: translateY(250%);
          }
          100% {
            transform: translateY(-100%);
          }
        }
      `}</style>
    </section>
  );
}
