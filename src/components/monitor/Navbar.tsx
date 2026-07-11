'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { locales, localeNames, type Locale } from '@/lib/i18n';
import { translations } from '@/lib/translations';
import { site } from '@/lib/site';

// The page is treated as a 4-minute reel at 25 fps: scrolling scrubs the timecode.
const TOTAL_FRAMES = 4 * 60 * 25;

function formatTc(frames: number): string {
  const f = Math.max(0, Math.min(TOTAL_FRAMES, Math.round(frames)));
  const ff = f % 25;
  const totalSeconds = Math.floor(f / 25);
  const ss = totalSeconds % 60;
  const mm = Math.floor(totalSeconds / 60) % 60;
  const hh = Math.floor(totalSeconds / 3600);
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${pad(hh)}:${pad(mm)}:${pad(ss)}:${pad(ff)}`;
}

const SECTION_IDS = ['top', 'services', 'work', 'live', 'ai', 'faq', 'about', 'contact'];

export default function Navbar({ locale }: { locale: Locale }) {
  const t = translations[locale];
  const pathname = usePathname();
  const [tc, setTc] = useState('00:00:00:00');
  const [sceneIdx, setSceneIdx] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const doc = document.documentElement;
        const max = doc.scrollHeight - window.innerHeight;
        const progress = max > 0 ? window.scrollY / max : 0;
        setTc(formatTc(progress * TOTAL_FRAMES));
        setScrolled(window.scrollY > 24);
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = SECTION_IDS.indexOf(entry.target.id);
            if (idx >= 0) setSceneIdx(idx);
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const switchLocale = (target: Locale) => {
    if (!pathname) return `/${target}`;
    const parts = pathname.split('/');
    parts[1] = target;
    return parts.join('/') || `/${target}`;
  };

  const links = [
    { href: '#services', label: t.nav.services },
    { href: '#work', label: t.nav.work },
    { href: '#faq', label: t.nav.faq },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? 'bg-ink/90 backdrop-blur-md border-line' : 'bg-transparent border-transparent'
      }`}
      aria-label="Main"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-14 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-baseline gap-3 shrink-0">
          <span className="font-display font-bold text-bone text-sm tracking-widest">TG</span>
          <span className="tg-label hidden lg:inline tabular-nums" suppressHydrationWarning>
            {tc}
          </span>
          <span className="tg-label hidden xl:inline text-ambr">
            {String(sceneIdx + 1).padStart(2, '0')}/{SECTION_IDS.length}
          </span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-dim hover:text-bone transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center border border-line rounded-sm overflow-hidden">
            {locales.map((loc) => (
              <a
                key={loc}
                href={switchLocale(loc)}
                className={`px-2 py-1 text-[11px] font-plex tracking-wider ${
                  loc === locale ? 'bg-bone text-ink' : 'text-dim hover:text-bone'
                }`}
                aria-current={loc === locale ? 'true' : undefined}
              >
                {localeNames[loc]}
              </a>
            ))}
          </div>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 bg-rec text-bone text-sm font-medium rounded-sm hover:bg-[#d9352a] transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-bone tg-rec-dot" />
            {t.nav.cta}
          </a>
        </div>
      </div>
    </nav>
  );
}
