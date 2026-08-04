'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import type { Locale } from '@/lib/i18n';

type Desc = Record<Locale, string>;

/* Inline icons (Phosphor / Lucide style, stroke = currentColor). */
const svg = (children: ReactNode) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-full w-full">
    {children}
  </svg>
);
const ICON: Record<string, ReactNode> = {
  sparkle: svg(<><path d="M12 3l1.6 4.9L18.5 9.5 13.6 11.1 12 16l-1.6-4.9L5.5 9.5l4.9-1.6z" /><path d="M18 14.5l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z" /></>),
  link: svg(<><path d="M9 15l6-6" /><path d="M11 6l1-1a4 4 0 0 1 6 6l-1 1" /><path d="M13 18l-1 1a4 4 0 0 1-6-6l1-1" /></>),
  flame: svg(<path d="M12 2.5c1 3.2 4.2 4.3 4.2 8.3a4.2 4.2 0 1 1-8.4 0c0-1.8 .9-2.8 1.9-3.8 .5 1 1.1 1.5 2.1 1.5C13.2 6.5 12.2 4.5 12 2.5z" />),
  mic: svg(<><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M6 11a6 6 0 0 0 12 0" /><path d="M12 17v4" /><path d="M9 21h6" /></>),
  waves: svg(<><circle cx="12" cy="12" r="2" /><path d="M8.6 8.6a5 5 0 0 0 0 6.8" /><path d="M15.4 8.6a5 5 0 0 1 0 6.8" /><path d="M6 6a9 9 0 0 0 0 12" /><path d="M18 6a9 9 0 0 1 0 12" /></>),
  keyboard: svg(<><rect x="3" y="6" width="18" height="12" rx="2" /><path d="M7 10h.01M11 10h.01M15 10h.01M8 14h8" /></>),
  bell: svg(<><path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6z" /><path d="M10 20a2 2 0 0 0 4 0" /></>),
  arrow: svg(<><path d="M7 17L17 7" /><path d="M8 7h9v9" /></>),
  whatsapp: svg(<path d="M4 20l1.4-4.1A8 8 0 1 1 8.5 18.4L4 20z" />),
  mail: svg(<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3.5 7l8.5 6 8.5-6" /></>),
  linkedin: svg(<><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 10.5V17M8 7v.02M12 17v-3.5a2 2 0 0 1 4 0V17" /></>),
  telegram: svg(<path d="M21 4L3 10.8l5.4 1.8L10 18l3-3.4L17.5 18z" />),
  instagram: svg(<><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="3.8" /><circle cx="17.2" cy="6.8" r="1" /></>),
};

const PROJECTS: {
  name: string; url: string; domain: string; tag: string; icon: string; accent: string; desc: Desc; wide?: boolean;
}[] = [
  { name: 'Sumera', url: 'https://sumera.io', domain: 'sumera.io', tag: 'AI · SaaS', icon: 'sparkle', accent: '#F23D30', wide: true,
    desc: { fr: 'Générateur de scripts YouTube par IA, avec facturation Stripe.', en: 'AI YouTube script generator, with live Stripe billing.', ru: 'ИИ-генератор сценариев для YouTube с оплатой через Stripe.' } },
  { name: 'Fullink', url: 'https://www.fullink.io', domain: 'fullink.io', tag: 'Creator tool', icon: 'link', accent: '#38BDF8',
    desc: { fr: 'Plateforme link in bio pour créateurs.', en: 'Link in bio platform for creators.', ru: 'Link in bio платформа для авторов.' } },
  { name: 'Feu France', url: 'https://feufrance.fr', domain: 'feufrance.fr', tag: 'Service public', icon: 'flame', accent: '#FB923C',
    desc: { fr: 'La carte des feux de forêt en France, en direct.', en: 'Live wildfire map and alerts for France.', ru: 'Карта лесных пожаров Франции в реальном времени.' } },
  { name: 'Studio Nice Podcast', url: 'https://studionicepodcast.com', domain: 'studionicepodcast.com', tag: 'Studio', icon: 'mic', accent: '#A78BFA',
    desc: { fr: 'Studio de podcast vidéo 4K à Nice, réservation en ligne.', en: '4K video podcast studio in Nice, online booking.', ru: 'Студия видеоподкастов 4K в Ницце, онлайн-бронирование.' } },
  { name: 'Almaty Podcast', url: 'https://almatypodcast.com', domain: 'almatypodcast.com', tag: 'Studio', icon: 'waves', accent: '#34D399',
    desc: { fr: 'Studio de podcast à Almaty, en trois langues.', en: 'Podcast studio in Almaty, in three languages.', ru: 'Студия подкастов в Алматы, на трёх языках.' } },
  { name: 'Polytaipe', url: 'https://polytaipe.com', domain: 'polytaipe.com', tag: 'Web app', icon: 'keyboard', accent: '#818CF8',
    desc: { fr: 'Entraîneur de frappe pour toute disposition clavier.', en: 'Typing trainer for any keyboard layout.', ru: 'Тренажёр печати для любой раскладки.' } },
  { name: 'Fullhaura Services', url: 'https://fullhaura-services.com', domain: 'fullhaura-services.com', tag: 'Conciergerie', icon: 'bell', accent: '#E3A84E', wide: true,
    desc: { fr: 'Conciergerie privée sur la Côte d’Azur, trilingue.', en: 'Private concierge on the French Riviera, trilingual.', ru: 'Частный консьерж на Лазурном берегу, на трёх языках.' } },
];

const C: Record<Locale, { role: string; tagline: string; loc: string; live: string; work: string; note: string; contact: string }> = {
  fr: { role: 'Développeur et vidéaste', tagline: 'Je construis et j’exploite mes propres produits.', loc: 'Nice → Almaty', live: 'EN LIGNE', work: 'Les projets', note: 'Tout est en production. Cliquez, ouvrez, vérifiez.', contact: 'Me contacter' },
  en: { role: 'Developer and filmmaker', tagline: 'I build and run my own products.', loc: 'Nice → Almaty', live: 'ONLINE', work: 'The projects', note: 'Everything is in production. Click, open, check.', contact: 'Get in touch' },
  ru: { role: 'Разработчик и видеограф', tagline: 'Я создаю и веду собственные продукты.', loc: 'Ницца → Алматы', live: 'ОНЛАЙН', work: 'Проекты', note: 'Всё в продакшене. Кликните, откройте, проверьте.', contact: 'Связаться' },
};

const CONTACT: { icon: string; label: string; href: string }[] = [
  { icon: 'whatsapp', label: 'WhatsApp', href: 'https://wa.me/33678496126' },
  { icon: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/tristangrch/' },
  { icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/fullhaura/' },
  { icon: 'telegram', label: 'Telegram', href: 'https://t.me/Fullhaura' },
  { icon: 'mail', label: 'Email', href: 'mailto:tristangrech.nat@gmail.com' },
];

const LOCALES: Locale[] = ['fr', 'en', 'ru'];

export default function LinkHub({ locale }: { locale: Locale }) {
  const t = C[locale] ?? C.en;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);
  const subjRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0, raf = 0;
    const N = window.innerWidth < 640 ? 34 : 68;
    const pts: { x: number; y: number; vx: number; vy: number }[] = [];
    const resize = () => { w = canvas.clientWidth; h = canvas.clientHeight; canvas.width = w * dpr; canvas.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); };
    const init = () => { pts.length = 0; for (let i = 0; i < N; i++) pts.push({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.22, vy: (Math.random() - 0.5) * 0.22 }); };
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of pts) { p.x += p.vx; p.y += p.vy; if (p.x < 0 || p.x > w) p.vx *= -1; if (p.y < 0 || p.y > h) p.vy *= -1; }
      for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
        const a = pts[i], b = pts[j]; const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 130) { ctx.strokeStyle = `rgba(227,168,78,${0.12 * (1 - d / 130)})`; ctx.lineWidth = 0.6; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
      }
      for (const p of pts) { ctx.fillStyle = 'rgba(239,236,227,0.32)'; ctx.beginPath(); ctx.arc(p.x, p.y, 1.1, 0, Math.PI * 2); ctx.fill(); }
      raf = requestAnimationFrame(draw);
    };
    resize(); init();
    if (reduce) { draw(); cancelAnimationFrame(raf); } else raf = requestAnimationFrame(draw);
    const onResize = () => { resize(); init(); };
    window.addEventListener('resize', onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize); };
  }, []);

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget; const r = el.getBoundingClientRect();
    const mx = e.clientX - r.left, my = e.clientY - r.top;
    el.style.setProperty('--mx', `${mx}px`); el.style.setProperty('--my', `${my}px`);
    const rx = (my / r.height - 0.5) * -5, ry = (mx / r.width - 0.5) * 5;
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
  };
  const onLeave = (e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.transform = ''; };

  const onHero = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = heroRef.current?.getBoundingClientRect();
    if (!r) return;
    const cx = (e.clientX - r.left) / r.width - 0.5;
    const cy = (e.clientY - r.top) / r.height - 0.5;
    // bg drifts a little; subject drifts more (keeps its -50% centering) for depth.
    if (bgRef.current) bgRef.current.style.transform = `translate3d(${cx * -12}px, ${cy * -9}px, 0) scale(1.08)`;
    if (subjRef.current) subjRef.current.style.transform = `translate3d(calc(-50% + ${cx * 20}px), ${cy * 13}px, 0)`;
  };
  const onHeroLeave = () => {
    if (bgRef.current) bgRef.current.style.transform = 'scale(1.08)';
    if (subjRef.current) subjRef.current.style.transform = 'translateX(-50%)';
  };

  return (
    <main className="relative min-h-[100svh] overflow-hidden bg-[#050506] text-bone grain">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes hubUp { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: none; } }
        @keyframes hubShimmer { to { background-position: 200% center; } }
        @keyframes hubBlob { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(5%, -4%) scale(1.1); } }
        @keyframes hubRing { to { transform: rotate(360deg); } }
        .hub-in { opacity: 0; animation: hubUp .8s cubic-bezier(.16,1,.3,1) forwards; }
        .hub-name { opacity: 0; background: linear-gradient(100deg,#EFECE3 18%,#E3A84E 42%,#F23D30 58%,#EFECE3 82%); background-size: 200% auto; -webkit-background-clip: text; background-clip: text; color: transparent; animation: hubUp .8s cubic-bezier(.16,1,.3,1) forwards, hubShimmer 7s linear infinite; }
        .hub-card { transition: transform .4s cubic-bezier(.16,1,.3,1), border-color .35s, background-color .35s, box-shadow .35s; transform-style: preserve-3d; will-change: transform; }
        .hub-card:hover { border-color: color-mix(in srgb, var(--accent) 55%, transparent); box-shadow: 0 20px 50px -20px color-mix(in srgb, var(--accent) 45%, transparent); }
        .hub-card:hover .hub-icon { color: var(--accent); background: color-mix(in srgb, var(--accent) 16%, transparent); border-color: color-mix(in srgb, var(--accent) 40%, transparent); box-shadow: 0 0 26px -6px color-mix(in srgb, var(--accent) 60%, transparent); }
        .hub-glow { background: radial-gradient(280px circle at var(--mx,50%) var(--my,50%), color-mix(in srgb, var(--accent) 22%, transparent), transparent 62%); }
        @media (prefers-reduced-motion: reduce) { .hub-in { animation: none; opacity: 1; } .hub-name { animation: none; opacity: 1; } .hub-card { transition: none; } }
      `}} />
      <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full opacity-70" />
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 -left-24 h-[44rem] w-[44rem] rounded-full bg-[#F23D30]/10 blur-[130px]" style={{ animation: 'hubBlob 15s ease-in-out infinite' }} />
      <div aria-hidden="true" className="pointer-events-none absolute top-1/3 -right-32 h-[40rem] w-[40rem] rounded-full bg-[#5E6AD2]/10 blur-[130px]" style={{ animation: 'hubBlob 19s ease-in-out infinite reverse' }} />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-48 left-1/4 h-[36rem] w-[36rem] rounded-full bg-[#E3A84E]/10 blur-[130px]" style={{ animation: 'hubBlob 23s ease-in-out infinite' }} />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col px-5 py-8 md:px-8 md:py-12">
        <div className="hub-in flex items-center justify-between">
          <span className="font-plex text-xs tracking-[0.25em] text-dim">TRISTAN GRECH</span>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-2 font-plex text-[10px] tracking-[0.2em] text-dim">
              <span className="h-1.5 w-1.5 rounded-full bg-[#3ED07A]" style={{ boxShadow: '0 0 8px #3ED07A' }} />{t.live}
            </span>
            <nav className="flex items-center gap-2 font-plex text-[11px]">
              {LOCALES.map((l) => (<a key={l} href={`/${l}`} className={`uppercase transition-colors ${l === locale ? 'text-ambr' : 'text-dim hover:text-bone'}`}>{l}</a>))}
            </nav>
          </div>
        </div>

        <header className="relative grid min-h-[84svh] grid-cols-1 items-center gap-8 py-6 lg:min-h-[78svh] lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative z-10 order-2 lg:order-1">
            <p className="hub-in font-plex text-xs tracking-[0.25em] text-ambr" style={{ animationDelay: '60ms' }}>{t.role.toUpperCase()}</p>
            <h1 className="hub-name font-display font-black uppercase leading-[0.82] tracking-tighter text-6xl sm:text-7xl lg:text-8xl mt-3" style={{ animationDelay: '120ms' }}>Tristan<br />Grech</h1>
            <p className="hub-in mt-5 max-w-sm text-base text-dim md:text-lg" style={{ animationDelay: '200ms' }}>{t.tagline}</p>
            <span className="hub-in mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-plex text-[10px] tracking-[0.2em] text-dim backdrop-blur" style={{ animationDelay: '260ms' }}>
              <span className="h-1.5 w-1.5 rounded-full bg-[#3ED07A]" style={{ boxShadow: '0 0 8px #3ED07A' }} />{t.live} · {t.loc}
            </span>
          </div>
          <div ref={heroRef} onMouseMove={onHero} onMouseLeave={onHeroLeave}
            className="hub-in order-1 relative mx-auto aspect-[3/4] w-full max-w-[22rem] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] lg:order-2 lg:max-w-none lg:aspect-[4/5]"
            style={{ animationDelay: '160ms' }}>
            <img ref={bgRef} src="/images/hero/hero-bg.webp" alt="" aria-hidden="true" fetchPriority="high"
              style={{ transform: 'scale(1.08)', transition: 'transform .4s cubic-bezier(.16,1,.3,1)' }}
              className="absolute inset-0 h-full w-full object-cover object-center opacity-85" />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#050506] via-transparent to-[#050506]/20" />
            <img ref={subjRef} src="/images/hero/hero-subject.webp" alt="Tristan Grech" loading="eager"
              style={{ transform: 'translateX(-50%)', transition: 'transform .4s cubic-bezier(.16,1,.3,1)' }}
              className="absolute bottom-0 left-1/2 h-[97%] w-auto max-w-none drop-shadow-[0_18px_36px_rgba(0,0,0,0.55)]" />
          </div>
        </header>

        <section aria-label={t.work} className="flex-1">
          <div className="hub-in mb-5 flex items-baseline justify-between border-b border-white/10 pb-3" style={{ animationDelay: '270ms' }}>
            <h2 className="font-plex text-xs tracking-[0.25em] text-dim">{t.work.toUpperCase()}</h2>
            <span className="hidden font-plex text-[11px] text-dim sm:block">{t.note}</span>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 md:gap-4">
            {PROJECTS.map((p, i) => (
              <a key={p.url} href={p.url} target="_blank" rel="noopener noreferrer" onMouseMove={onMove} onMouseLeave={onLeave}
                className={`hub-card hub-in group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 backdrop-blur-md ${p.wide ? 'sm:col-span-2 lg:col-span-2' : ''}`}
                style={{ '--accent': p.accent, animationDelay: `${330 + i * 70}ms` } as React.CSSProperties}>
                <span aria-hidden="true" className="hub-glow pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex items-start justify-between">
                  <span className="hub-icon flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] p-2.5 text-dim transition-all duration-300">{ICON[p.icon]}</span>
                  <span aria-hidden="true" className="h-4 w-4 text-dim transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-bone">{ICON.arrow}</span>
                </div>
                <div className="relative mt-5 flex items-center gap-2">
                  <span className="font-plex text-[10px] tracking-[0.2em]" style={{ color: p.accent }}>{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-plex text-[10px] tracking-[0.2em] text-dim">{p.tag}</span>
                </div>
                <h3 className="relative mt-1.5 font-display text-xl font-medium uppercase tracking-tight text-bone md:text-2xl">{p.name}</h3>
                <p className="relative mt-2 text-[15px] leading-relaxed text-dim">{p.desc[locale] ?? p.desc.en}</p>
                <span className="relative mt-5 font-plex text-[11px] text-dim/80 transition-colors group-hover:text-bone">{p.domain}</span>
              </a>
            ))}
          </div>
        </section>

        <footer className="hub-in mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between" style={{ animationDelay: '880ms' }}>
          <span className="font-plex text-[11px] tracking-[0.15em] text-dim">{t.contact.toUpperCase()}</span>
          <div className="flex flex-wrap items-center gap-2.5">
            {CONTACT.map((c) => (
              <a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" aria-label={c.label} title={c.label}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] p-2.5 text-dim transition-all duration-300 hover:border-ambr/50 hover:text-ambr hover:-translate-y-0.5">
                {ICON[c.icon]}
              </a>
            ))}
          </div>
        </footer>
      </div>
    </main>
  );
}
