'use client';

import { Locale } from '@/lib/i18n';
import { translations } from '@/lib/translations';

interface ModelPortfolioProps {
  locale: Locale;
}

const gradients = [
  'linear-gradient(135deg, #1a1815 0%, #0f0e0c 100%)',
  'linear-gradient(135deg, #15130f 0%, #0d0c0a 100%)',
  'linear-gradient(135deg, #12100e 0%, #0a0908 100%)',
  'linear-gradient(135deg, #181510 0%, #0e0d0b 100%)',
  'linear-gradient(135deg, #141210 0%, #0b0a09 100%)',
];

export default function ModelPortfolio({ locale }: ModelPortfolioProps) {
  const t = translations[locale];
  const m = t.modelling.portfolio;

  return (
    <section className="bg-[#050505] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-[#b8965a] text-xs uppercase tracking-[0.35em] font-body font-medium mb-6">
            {m.sectionLabel}
          </p>
          <h2 className="text-[#f5f2ee] font-['Cormorant_Garamond',serif] text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-4">
            {m.title}
          </h2>
          <p className="text-[#888880] text-base font-body max-w-lg">
            {m.description}
          </p>
        </div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {m.items.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden cursor-pointer ${
                index === 0 ? 'md:row-span-2' : ''
              }`}
              style={{
                minHeight: index === 0 ? '600px' : '300px',
              }}
            >
              {/* Background */}
              <div
                className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ background: gradients[index] }}
              >
                {/* Subtle golden shimmer */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    background: `radial-gradient(ellipse at ${
                      index % 2 === 0 ? '30%' : '70%'
                    } 50%, rgba(184, 150, 90, 0.2), transparent 60%)`,
                  }}
                />
              </div>

              {/* Placeholder content */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="text-center">
                  <div className="w-12 h-12 border border-[#2a2a28] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:border-[#b8965a]/50 transition-colors duration-500">
                    <svg
                      className="w-5 h-5 text-[#888880] group-hover:text-[#b8965a] transition-colors duration-500"
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
                    {item.label}
                  </p>
                </div>
              </div>

              {/* Hover overlay from bottom */}
              <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-20">
                <div
                  className="px-6 py-5"
                  style={{
                    background: 'linear-gradient(to top, rgba(5,5,5,0.95) 0%, rgba(5,5,5,0.7) 60%, transparent 100%)',
                  }}
                >
                  <span className="inline-block text-[#b8965a] text-[10px] uppercase tracking-[0.3em] font-body border border-[#b8965a]/30 px-3 py-1.5 rounded-sm">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Persistent border */}
              <div className="absolute inset-0 border border-[#2a2a28] group-hover:border-[#b8965a]/20 transition-colors duration-500 pointer-events-none z-30" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
