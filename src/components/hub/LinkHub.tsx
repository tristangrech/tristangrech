'use client';

import { useEffect, useRef } from 'react';
import type { Locale } from '@/lib/i18n';

type Desc = Record<Locale, string>;

const PROJECTS: {
  name: string;
  url: string;
  domain: string;
  tag: string;
  desc: Desc;
  wide?: boolean;
}[] = [
  {
    name: 'Sumera',
    url: 'https://sumera.io',
    domain: 'sumera.io',
    tag: 'AI · SaaS',
    wide: true,
    desc: {
      fr: 'Générateur de scripts YouTube par IA, avec facturation Stripe.',
      en: 'AI YouTube script generator, with live Stripe billing.',
      ru: 'ИИ-генератор сценариев для YouTube с оплатой через Stripe.',
    },
  },
  {
    name: 'Fullink',
    url: 'https://www.fullink.io',
    domain: 'fullink.io',
    tag: 'Creator tool',
    desc: {
      fr: 'Plateforme link in bio pour créateurs.',
      en: 'Link in bio platform for creators.',
      ru: 'Link in bio платформа для авторов.',
    },
  },
  {
    name: 'Feu France',
    url: 'https://feufrance.fr',
    domain: 'feufrance.fr',
    tag: 'Service public',
    desc: {
      fr: 'La carte des feux de forêt en France, en direct.',
      en: 'Live wildfire map and alerts for France.',
      ru: 'Карта лесных пожаров Франции в реальном времени.',
    },
  },
  {
    name: 'Studio Nice Podcast',
    url: 'https://studionicepodcast.com',
    domain: 'studionicepodcast.com',
    tag: 'Studio',
    desc: {
      fr: 'Studio de podcast vidéo 4K à Nice, réservation en ligne.',
      en: '4K video podcast studio in Nice, online booking.',
      ru: 'Студия видеоподкастов 4K в Ницце, онлайн-бронирование.',
    },
  },
  {
    name: 'Almaty Podcast',
    url: 'https://almatypodcast.com',
    domain: 'almatypodcast.com',
    tag: 'Studio',
    desc: {
      fr: 'Studio de podcast à Almaty, en trois langues.',
      en: 'Podcast studio in Almaty, in three languages.',
      ru: 'Студия подкастов в Алматы, на трёх языках.',
    },
  },
  {
    name: 'Polytaipe',
    url: 'https://polytaipe.com',
    domain: 'polytaipe.com',
    tag: 'Web app',
    desc: {
      fr: 'Entraîneur de frappe pour toute disposition clavier.',
      en: 'Typing trainer for any keyboard layout.',
      ru: 'Тренажёр печати для любой раскладки.',
    },
  },
  {
    name: 'Fullhaura Services',
    url: 'https://fullhaura-services.com',
    domain: 'fullhaura-services.com',
    tag: 'Conciergerie',
    wide: true,
    desc: {
      fr: 'Conciergerie privée sur la Côte d’Azur, trilingue.',
      en: 'Private concierge on the French Riviera, trilingual.',
      ru: 'Частный консьерж на Лазурном берегу, на трёх языках.',
    },
  },
];

const C: Record<Locale, { role: string; tagline: string; loc: string; live: string; work: string; note: string; contact: string }> = {
  fr: {
    role: 'Développeur et vidéaste',
    tagline: 'Je construis et j’exploite mes propres produits.',
    loc: 'Nice → Almaty',
    live: 'EN LIGNE',
    work: 'Les projets',
    note: 'Tout est en production. Cliquez, ouvrez, vérifiez.',
    contact: 'Me contacter',
  },
  en: {
    role: 'Developer and filmmaker',
    tagline: 'I build and run my own products.',
    loc: 'Nice → Almaty',
    live: 'ONLINE',
    work: 'The projects',
    note: 'Everything is in production. Click, open, check.',
    contact: 'Get in touch',
  },
  ru: {
    role: 'Разработчик и видеограф',
    tagline: 'Я создаю и веду собственные продукты.',
    loc: 'Ницца → Алматы',
    live: 'ОНЛАЙН',
    work: 'Проекты',
    note: 'Всё в продакшене. Кликните, откройте, проверьте.',
    contact: 'Связаться',
  },
};

const CONTACT = [
  { label: 'WhatsApp', href: 'https://wa.me/33678496126' },
  { label: 'Email', href: 'mailto:tristangrech.nat@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/fullhaura/' },
  { label: 'Telegram', href: 'https://t.me/Fullhaura' },
];

const LOCALES: Locale[] = ['fr', 'en', 'ru'];

export default function LinkHub({ locale }: { locale: Locale }) {
  const t = C[locale] ?? C.en;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Live particle constellation background.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let raf = 0;
    const N = window.innerWidth < 640 ? 34 : 66;
    const pts: { x: number; y: number; vx: number; vy: number }[] = [];

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const init = () => {
      pts.length = 0;
      for (let i = 0; i < N; i++) {
        pts.push({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25 });
      }
    };
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of pts) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i];
          const b = pts[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 130) {
            ctx.strokeStyle = `rgba(227,168,78,${0.12 * (1 - d / 130)})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      for (const p of pts) {
        ctx.fillStyle = 'rgba(239,236,227,0.35)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.1, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    resize();
    init();
    if (reduce) {
      draw();
      cancelAnimationFrame(raf);
    } else {
      raf = requestAnimationFrame(draw);
    }
    const onResize = () => {
      resize();
      init();
    };
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const mx = e.clientX - r.left;
    const my = e.clientY - r.top;
    el.style.setProperty('--mx', `${mx}px`);
    el.style.setProperty('--my', `${my}px`);
    const rx = (my / r.height - 0.5) * -5;
    const ry = (mx / r.width - 0.5) * 5;
    el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
  };
  const onLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.transform = '';
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0A0C10] text-bone grain">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes hubUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: none; } }
        @keyframes hubShimmer { to { background-position: 200% center; } }
        @keyframes hubBlob { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(4%, -3%) scale(1.08); } }
        .hub-in { opacity: 0; animation: hubUp 0.7s cubic-bezier(.22,1,.36,1) forwards; }
        .hub-name { background: linear-gradient(100deg, #EFECE3 20%, #E3A84E 45%, #F23D30 60%, #EFECE3 80%); background-size: 200% auto; -webkit-background-clip: text; background-clip: text; color: transparent; animation: hubShimmer 6s linear infinite; }
        .hub-card { transition: transform .35s cubic-bezier(.22,1,.36,1), border-color .3s, background-color .3s; transform-style: preserve-3d; will-change: transform; }
        .hub-card:hover { border-color: rgba(227,168,78,.55); background-color: rgba(20,23,30,.72); }
        .hub-glow { background: radial-gradient(240px circle at var(--mx,50%) var(--my,50%), rgba(242,61,48,.14), transparent 60%); }
        @media (prefers-reduced-motion: reduce) { .hub-in { animation: none; opacity: 1; } .hub-name { animation: none; } .hub-card { transition: none; } }
      `,
        }}
      />
      <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full opacity-70" />
      <div aria-hidden="true" className="pointer-events-none absolute -top-32 -left-24 h-[42rem] w-[42rem] rounded-full bg-[#F23D30]/10 blur-[120px]" style={{ animation: 'hubBlob 14s ease-in-out infinite' }} />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 -right-24 h-[38rem] w-[38rem] rounded-full bg-[#E3A84E]/10 blur-[120px]" style={{ animation: 'hubBlob 18s ease-in-out infinite reverse' }} />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col px-5 py-8 md:px-8 md:py-12">
        {/* Top bar */}
        <div className="hub-in flex items-center justify-between">
          <span className="font-plex text-xs tracking-[0.25em] text-dim">TRISTAN GRECH</span>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-2 font-plex text-[10px] tracking-[0.2em] text-dim">
              <span className="h-1.5 w-1.5 rounded-full bg-[#3ED07A]" style={{ boxShadow: '0 0 8px #3ED07A' }} />
              {t.live}
            </span>
            <nav className="flex items-center gap-2 font-plex text-[11px]">
              {LOCALES.map((l) => (
                <a key={l} href={`/${l}`} className={`uppercase transition-colors ${l === locale ? 'text-ambr' : 'text-dim hover:text-bone'}`}>
                  {l}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Hero */}
        <header className="flex flex-col justify-center py-14 md:py-20">
          <p className="hub-in font-plex text-xs tracking-[0.25em] text-ambr" style={{ animationDelay: '60ms' }}>
            {t.role.toUpperCase()} · {t.loc}
          </p>
          <h1 className="hub-in hub-name font-display font-semibold uppercase leading-[0.95] tracking-tight text-5xl sm:text-7xl lg:text-8xl mt-4" style={{ animationDelay: '120ms' }}>
            Tristan
            <br />
            Grech
          </h1>
          <p className="hub-in mt-6 max-w-md text-base text-dim md:text-lg" style={{ animationDelay: '200ms' }}>
            {t.tagline}
          </p>
        </header>

        {/* Projects */}
        <section aria-label={t.work} className="flex-1">
          <div className="hub-in mb-5 flex items-baseline justify-between border-b border-line pb-3" style={{ animationDelay: '240ms' }}>
            <h2 className="font-plex text-xs tracking-[0.25em] text-dim">{t.work.toUpperCase()}</h2>
            <span className="font-plex text-[11px] text-dim">{t.note}</span>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 md:gap-4">
            {PROJECTS.map((p, i) => (
              <a
                key={p.url}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseMove={onMove}
                onMouseLeave={onLeave}
                className={`hub-card hub-in group relative flex flex-col overflow-hidden rounded-xl border border-line bg-panel/50 p-5 ${p.wide ? 'sm:col-span-2 lg:col-span-2' : ''}`}
                style={{ animationDelay: `${300 + i * 70}ms` }}
              >
                <span aria-hidden="true" className="hub-glow pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex items-start justify-between">
                  <span className="font-plex text-[10px] tracking-[0.2em] text-ambr">{String(i + 1).padStart(2, '0')} · {p.tag}</span>
                  <span aria-hidden="true" className="font-plex text-sm text-dim transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-rec">↗</span>
                </div>
                <h3 className="relative mt-6 font-display text-xl font-medium uppercase tracking-tight text-bone md:text-2xl">{p.name}</h3>
                <p className="relative mt-2 text-[15px] leading-relaxed text-dim">{p.desc[locale] ?? p.desc.en}</p>
                <span className="relative mt-5 font-plex text-[11px] text-dim/80 group-hover:text-bone">{p.domain}</span>
              </a>
            ))}
          </div>
        </section>

        {/* Contact */}
        <footer className="hub-in mt-14 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between" style={{ animationDelay: '820ms' }}>
          <span className="font-plex text-[11px] tracking-[0.15em] text-dim">{t.contact.toUpperCase()}</span>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {CONTACT.map((c) => (
              <a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="font-plex text-xs text-dim transition-colors hover:text-ambr">
                {c.label}
              </a>
            ))}
          </div>
        </footer>
      </div>
    </main>
  );
}
