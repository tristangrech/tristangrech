'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { locales, localeNames, Locale } from '@/lib/i18n';

interface ModelNavbarProps {
  locale: Locale;
}

export default function ModelNavbar({ locale }: ModelNavbarProps) {
  const router = useRouter();
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const switchLocale = (newLocale: Locale) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080808]/90 backdrop-blur-xl border-b border-[#2a2a28]'
          : 'bg-transparent backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo — links back to main site */}
          <a href={`/${locale}`} className="flex items-center gap-1 shrink-0">
            <span className="font-heading font-bold text-xl md:text-2xl text-[#f5f2ee]">
              Tristan
            </span>
            <span className="font-heading font-bold text-xl md:text-2xl text-[#b8965a]">
              Grech
            </span>
          </a>

          {/* Language Switcher */}
          <div className="flex items-center bg-[#1a1a18] rounded-full p-1 border border-[#2a2a28]">
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={() => switchLocale(loc)}
                className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  locale === loc
                    ? 'bg-[#b8965a] text-[#080808] shadow-sm'
                    : 'text-[#888880] hover:text-[#f5f2ee]'
                }`}
              >
                {localeNames[loc]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
