'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { locales, localeNames, Locale } from '@/lib/i18n';
import { translations } from '@/lib/translations';
import ThemeToggle from './ThemeToggle';
import { useTheme } from './ThemeProvider';

interface NavbarProps {
  locale: Locale;
  hideThemeToggle?: boolean;
}

export default function Navbar({ locale, hideThemeToggle }: NavbarProps) {
  const t = translations[locale];
  const router = useRouter();
  const pathname = usePathname();
  const { theme } = useTheme();

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const navLinks = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface-nav/90 backdrop-blur-xl border-b border-outline'
          : 'bg-transparent backdrop-blur-sm'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href={`/${locale}`} className="flex items-center shrink-0">
            <img
              src={theme === 'dark' ? '/images/fullhaura-logo.png' : '/images/fullhaura-logo-black.png'}
              alt="Fullhaura"
              className="h-8 md:h-10 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Nav Links */}
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-on-surface-secondary hover:text-on-surface transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Theme Toggle */}
            {!hideThemeToggle && <ThemeToggle />}

            {/* Language Switcher */}
            <div className="flex items-center bg-surface-card rounded-full p-1 border border-outline">
              {locales.map((loc) => (
                <button
                  key={loc}
                  onClick={() => switchLocale(loc)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    locale === loc
                      ? 'bg-primary text-white shadow-sm'
                      : 'text-on-surface-muted hover:text-on-surface'
                  }`}
                >
                  {localeNames[loc]}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg text-on-surface-secondary hover:text-on-surface hover:bg-surface-elevated transition-colors"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col items-center justify-center gap-1.5">
              <span
                className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-[4px]' : ''
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-[4px]' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-surface-nav/95 backdrop-blur-xl border-t border-outline px-6 py-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 text-base font-medium text-on-surface-secondary hover:text-on-surface transition-colors"
            >
              {link.label}
            </a>
          ))}

          {/* Mobile Theme Toggle & Language Switcher */}
          <div className="pt-4 border-t border-outline">
            <div className="flex items-center gap-3">
              {!hideThemeToggle && <ThemeToggle />}
              <div className="flex items-center gap-2">
                {locales.map((loc) => (
                  <button
                    key={loc}
                    onClick={() => {
                      switchLocale(loc);
                      setMobileMenuOpen(false);
                    }}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                      locale === loc
                        ? 'bg-primary text-white'
                        : 'bg-surface-elevated text-on-surface-muted hover:text-on-surface border border-outline'
                    }`}
                  >
                    {localeNames[loc]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
