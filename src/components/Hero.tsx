'use client';

import Image from 'next/image';
import { Locale } from '@/lib/i18n';
import { translations } from '@/lib/translations';

interface HeroProps {
  locale: Locale;
}

export default function Hero({ locale }: HeroProps) {
  const t = translations[locale];

  return (
    <section id="about" className="relative dot-bg min-h-screen pt-28 md:pt-36 pb-16 md:pb-24">
      {/* Subtle gradient overlay at top */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-transparent pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-surface-card border border-outline">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <span className="text-sm text-on-surface-secondary font-medium">
                {t.hero.badge}
              </span>
            </div>

            {/* Profile Photo */}
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-2xl overflow-hidden border border-outline">
              <Image
                src="/images/tristan-homepage.jpg"
                alt="Tristan Grech"
                width={176}
                height={176}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            {/* Heading */}
            <div>
              <h1 className="font-heading font-extrabold text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight">
                <span className="text-on-surface">Tristan</span>
                <br className="md:hidden" />
                <span className="gradient-text md:ml-4">Grech</span>
              </h1>
            </div>

            {/* Bio */}
            <p className="text-base md:text-lg text-on-surface-muted leading-relaxed max-w-lg">
              {t.hero.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-white font-medium text-sm hover:bg-primary-light transition-colors duration-200 shadow-lg shadow-primary/20"
              >
                {t.hero.cta.projects}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-outline text-on-surface-secondary font-medium text-sm hover:border-primary hover:text-on-surface transition-all duration-200"
              >
                {t.hero.cta.contact}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column - Expertise Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:pt-12">
            {t.hero.expertise.map((item, index) => (
              <div
                key={index}
                className="card-hover rounded-2xl border border-outline bg-surface-card p-6 space-y-4"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  {[
                    // Web Development — code brackets
                    <svg key="web" className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                    </svg>,
                    // China Business — globe
                    <svg key="china" className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A8.966 8.966 0 013 12c0-1.264.26-2.466.733-3.559" />
                    </svg>,
                    // AI & Automation — CPU chip
                    <svg key="ai" className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
                    </svg>,
                    // International Consulting — briefcase
                    <svg key="consult" className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75a23.978 23.978 0 01-7.577-1.22 2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>,
                  ][index]}
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-on-surface text-base">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-on-surface-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
