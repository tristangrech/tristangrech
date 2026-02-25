'use client';

import { Locale } from '@/lib/i18n';
import { translations } from '@/lib/translations';

interface ModelContactProps {
  locale: Locale;
}

export default function ModelContact({ locale }: ModelContactProps) {
  const t = translations[locale];
  const m = t.modelling.contact;

  const infoItems = [
    m.info.location,
    m.info.email,
    m.info.nationality,
    m.info.availability,
  ];

  return (
    <section className="relative bg-[#080808] py-32 md:py-40 overflow-hidden">
      {/* Giant faded CONTACT background text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <span
          className="text-[12vw] md:text-[10vw] font-['Cormorant_Garamond',serif] font-bold uppercase tracking-[0.15em] text-[#f5f2ee] opacity-[0.02] whitespace-nowrap"
        >
          CONTACT
        </span>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-8 md:px-16 text-center">
        {/* Eyebrow */}
        <p className="text-[#b8965a] text-xs uppercase tracking-[0.35em] font-body font-medium mb-8">
          {m.eyebrow}
        </p>

        {/* Heading */}
        <h2 className="text-[#f5f2ee] font-['Cormorant_Garamond',serif] text-4xl md:text-5xl lg:text-7xl font-light tracking-tight mb-6">
          {m.title}
        </h2>

        {/* Subtitle */}
        <p className="text-[#888880] text-base md:text-lg font-body leading-relaxed max-w-2xl mx-auto mb-14">
          {m.subtitle}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          {/* Email button - gold filled */}
          <a
            href={`mailto:${m.email}`}
            className="group inline-flex items-center gap-3 bg-[#b8965a] hover:bg-[#a0804c] text-[#080808] px-8 py-4 text-sm font-body font-medium uppercase tracking-[0.2em] transition-all duration-300 rounded-sm"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            {m.emailButton}
          </a>

          {/* Instagram button - outlined */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 border border-[#b8965a]/40 hover:border-[#b8965a] text-[#b8965a] px-8 py-4 text-sm font-body font-medium uppercase tracking-[0.2em] transition-all duration-300 rounded-sm"
          >
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            {m.instagramButton}
          </a>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px flex-1 bg-[#2a2a28]" />
          <div className="w-2 h-2 rotate-45 border border-[#b8965a]" />
          <div className="h-px flex-1 bg-[#2a2a28]" />
        </div>

        {/* Info row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {infoItems.map((item, index) => (
            <div key={index} className="text-center">
              <p className="text-[#888880] text-[10px] uppercase tracking-[0.25em] font-body mb-2">
                {item.label}
              </p>
              <p className="text-[#e8e0d4] text-sm font-['Cormorant_Garamond',serif] font-light tracking-wide">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
