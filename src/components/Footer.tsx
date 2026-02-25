'use client';

import type { Locale } from '@/lib/i18n';
import { translations } from '@/lib/translations';

interface FooterProps {
  locale: Locale;
}

export default function Footer({ locale }: FooterProps) {
  const t = translations[locale];

  return (
    <footer className="border-t border-outline bg-surface">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Column 1: Logo */}
          <div>
            <a
              href={`/${locale}`}
              className="font-heading text-2xl font-bold text-on-surface hover:text-blue-400 transition-colors"
            >
              TG
            </a>
          </div>

          {/* Column 2: Tagline & Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-on-surface-muted mb-2 leading-relaxed">
              {t.footer.tagline}
            </p>
            <p className="text-xs text-on-surface-muted/70">
              {t.footer.copyright}
            </p>
          </div>

          {/* Column 3: Navigation Links */}
          <div className="flex gap-6 md:justify-end flex-wrap">
            <a
              href={`/${locale}#about`}
              className="text-sm text-on-surface-muted hover:text-on-surface transition-colors"
            >
              {t.footer.links.about}
            </a>
            <a
              href={`/${locale}#projects`}
              className="text-sm text-on-surface-muted hover:text-on-surface transition-colors"
            >
              {t.footer.links.projects}
            </a>
            <a
              href={`/${locale}#contact`}
              className="text-sm text-on-surface-muted hover:text-on-surface transition-colors"
            >
              {t.footer.links.contact}
            </a>
            <a
              href={`/${locale}/modelling`}
              className="text-sm text-on-surface-muted hover:text-on-surface transition-colors"
            >
              {t.footer.links.modelling}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
