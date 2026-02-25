'use client';

import type { Locale } from '@/lib/i18n';
import { translations } from '@/lib/translations';

interface ModelFooterProps {
  locale: Locale;
}

export default function ModelFooter({ locale }: ModelFooterProps) {
  const t = translations[locale];

  return (
    <footer className="border-t border-[#2a2a28] bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo — links back to main site */}
          <a
            href={`/${locale}`}
            className="font-heading text-2xl font-bold text-[#f5f2ee] hover:text-[#b8965a] transition-colors"
          >
            TG
          </a>

          {/* Copyright */}
          <p className="text-xs text-[#888880]">
            {t.footer.copyright}
          </p>

          {/* Back to main site link */}
          <a
            href={`/${locale}`}
            className="text-sm text-[#888880] hover:text-[#f5f2ee] transition-colors"
          >
            {t.nav.home} &rarr;
          </a>
        </div>
      </div>
    </footer>
  );
}
