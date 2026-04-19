'use client';

import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
  useMotionValue,
} from 'framer-motion';
import NumberFlow from '@number-flow/react';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Languages,
  MapPin,
  ShieldCheck,
  Users,
  Handshake,
  Mail,
  MessageCircle,
  X as XIcon,
  Sparkles,
  Download,
  CheckCircle2,
} from 'lucide-react';
import { chinaDict, type ChinaLang, OTHER_PATH, CAL_URL } from '@/lib/china-i18n';

// Map is browser-only (Leaflet needs window)
const ChinaMap = dynamic(() => import('./ChinaMap'), {
  ssr: false,
  loading: () => (
    <div className="aspect-[16/10] md:aspect-[16/9] rounded-3xl border border-outline bg-surface-card animate-pulse" />
  ),
});

// lucide-react dropped brand icons — inline LinkedIn glyph
function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

interface Props {
  lang: ChinaLang;
}

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: 'easeOut' as const },
};

export default function ChinaLanding({ lang }: Props) {
  return (
    <main className="min-h-screen bg-surface overflow-x-clip relative">
      <GrainOverlay />
      <ScrollProgress />
      <SideDotNav lang={lang} />
      <Navbar lang={lang} />
      <Hero lang={lang} />
      <Duo lang={lang} />
      <Pain lang={lang} />
      <Who lang={lang} />
      <Offers lang={lang} />
      <Included lang={lang} />
      <Itinerary lang={lang} />
      <MapSection lang={lang} />
      <Testimonials lang={lang} />
      <LeadMagnet lang={lang} />
      <Faq lang={lang} />
      <Social lang={lang} />
      <FinalCta lang={lang} />
      <Footer lang={lang} />
      <StickyMobileCta lang={lang} />
    </main>
  );
}

/* ————————————————————————————————————— Scroll progress ————————————————————————————————————— */

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 180, damping: 30, mass: 0.2 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-primary-light to-primary origin-left z-[60] pointer-events-none"
    />
  );
}

/* ————————————————————————————————————— Grain ————————————————————————————————————— */

function GrainOverlay() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 pointer-events-none z-[1] opacity-[0.035] mix-blend-overlay"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        backgroundSize: '160px 160px',
      }}
    />
  );
}

/* ————————————————————————————————————— Side dot-nav ————————————————————————————————————— */

const SECTION_ANCHORS: { id: string; labelFr: string; labelEn: string }[] = [
  { id: 'top', labelFr: 'Intro', labelEn: 'Intro' },
  { id: 'duo', labelFr: 'Duo', labelEn: 'Duo' },
  { id: 'who', labelFr: 'Équipe', labelEn: 'Team' },
  { id: 'offers', labelFr: 'Formules', labelEn: 'Packages' },
  { id: 'itinerary', labelFr: 'Itinéraire', labelEn: 'Itinerary' },
  { id: 'map', labelFr: 'Carte', labelEn: 'Map' },
  { id: 'faq', labelFr: 'FAQ', labelEn: 'FAQ' },
];

function SideDotNav({ lang }: Props) {
  const [active, setActive] = useState<string>('top');
  useEffect(() => {
    const handler = () => {
      const y = window.scrollY + window.innerHeight / 2;
      let current = 'top';
      for (const { id } of SECTION_ANCHORS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      setActive(current);
    };
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <div className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 flex-col gap-3 z-30">
      {SECTION_ANCHORS.map((s) => {
        const isActive = active === s.id;
        const label = lang === 'fr' ? s.labelFr : s.labelEn;
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="group relative flex items-center gap-3"
            aria-label={label}
          >
            <span
              className="absolute right-full mr-3 text-xs text-on-surface-secondary whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
            >
              {label}
            </span>
            <motion.span
              animate={{ scale: isActive ? 1.4 : 1 }}
              transition={{ duration: 0.3 }}
              className={`block w-2 h-2 rounded-full transition-colors ${
                isActive ? 'bg-primary' : 'bg-outline group-hover:bg-on-surface-muted'
              }`}
            />
          </a>
        );
      })}
    </div>
  );
}

/* ————————————————————————————————————— Navbar ————————————————————————————————————— */

function Navbar({ lang }: Props) {
  const t = chinaDict[lang];
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-surface-nav/90 backdrop-blur-xl border-b border-outline-faint shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="section-container h-16 flex items-center justify-between">
        <Link href={lang === 'fr' ? '/chine' : '/china'} className="font-heading font-bold tracking-tight">
          Tristan <span className="gradient-text">Grech</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm text-on-surface-secondary">
          <a href="#offers" className="hover:text-on-surface transition-colors">
            {t.nav.offers}
          </a>
          <a href="#itinerary" className="hover:text-on-surface transition-colors">
            {t.nav.itinerary}
          </a>
          <a href="#faq" className="hover:text-on-surface transition-colors">
            {t.nav.faq}
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href={OTHER_PATH[lang]}
            className="text-sm font-medium text-on-surface-secondary hover:text-on-surface transition-colors border border-outline rounded-full px-3 py-1.5"
          >
            {t.nav.langSwitch}
          </Link>
          <MagneticButton>
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 bg-primary hover:bg-primary-light text-white text-sm font-medium rounded-full px-4 py-1.5 transition-colors"
            >
              {t.nav.bookCta}
            </a>
          </MagneticButton>
        </div>
      </div>
    </nav>
  );
}

/* ————————————————————————————————————— Magnetic button wrapper ————————————————————————————————————— */

function MagneticButton({ children, strength = 0.25 }: { children: React.ReactNode; strength?: number }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 280, damping: 18, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 280, damping: 18, mass: 0.3 });

  return (
    <motion.span
      ref={ref}
      style={{ x: sx, y: sy, display: 'inline-block' }}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        x.set((e.clientX - cx) * strength);
        y.set((e.clientY - cy) * strength);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.span>
  );
}

/* ————————————————————————————————————— Hero ————————————————————————————————————— */

function Hero({ lang }: Props) {
  const t = chinaDict[lang];
  const { scrollY } = useScroll();
  const heroImageY = useTransform(scrollY, [0, 400], [0, 60]);

  return (
    <section id="top" className="relative pt-28 md:pt-36 pb-16 md:pb-24 dot-bg overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="section-container relative z-10 grid lg:grid-cols-12 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="lg:col-span-7 space-y-8"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-surface-card border border-outline">
            <Sparkles className="w-3.5 h-3.5 text-primary flex-shrink-0" strokeWidth={2.5} />
            <span className="text-sm text-on-surface-secondary font-medium">{t.hero.badge}</span>
          </div>

          <h1 className="font-heading font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight text-balance">
            <span className="text-on-surface">{t.hero.headline1}</span>
            <br />
            <span className="gradient-text">{t.hero.headline2}</span>
          </h1>

          <p className="text-lg text-on-surface-muted leading-relaxed max-w-xl">{t.hero.subhead}</p>

          <div className="flex flex-wrap items-center gap-4">
            <MagneticButton>
              <a
                href={CAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-white font-medium text-sm hover:bg-primary-light transition-colors shadow-lg shadow-primary/20"
              >
                {t.hero.ctaPrimary}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </MagneticButton>
            <a
              href="#offers"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-outline text-on-surface-secondary font-medium text-sm hover:border-primary hover:text-on-surface transition-all"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-4 max-w-xl">
            {t.hero.credentials.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.08, duration: 0.5 }}
                className="flex items-center gap-2 text-sm text-on-surface-secondary"
              >
                <Check className="w-4 h-4 text-primary flex-shrink-0" strokeWidth={3} />
                {c}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-5"
          style={{ y: heroImageY }}
        >
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-outline shadow-2xl shadow-primary/10">
            <Image
              src="/images/china/hero.jpg"
              alt={lang === 'fr' ? 'Tristan avec un client devant la Canton Tower' : 'Tristan with a client at Canton Tower'}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3 text-white">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span className="text-sm font-medium">Guangzhou · Foshan · Shenzhen</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ————————————————————————————————————— Duo USP ————————————————————————————————————— */

function Duo({ lang }: Props) {
  const t = chinaDict[lang];
  return (
    <motion.section
      id="duo"
      {...reveal}
      className="py-16 md:py-20 bg-surface-card border-y border-outline-faint"
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2">
              <Handshake className="w-5 h-5 text-primary" />
              <span className="text-xs font-semibold tracking-widest uppercase text-primary">
                {t.duo.eyebrow}
              </span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-on-surface text-balance leading-tight">
              {t.duo.title}
            </h2>
            <p className="text-on-surface-muted leading-relaxed">{t.duo.body}</p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-3">
            {t.duo.stats.map((s, i) => (
              <DuoStat key={i} value={s.value} label={s.label} index={i} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function DuoStat({ value, label, index }: { value: string; label: string; index: number }) {
  // Parse numeric prefix ("48h", "2", "4", "0") into a number + suffix
  const match = value.match(/^([\d.]+)(.*)$/);
  const numeric = match ? parseFloat(match[1]) : null;
  const suffix = match ? match[2] : '';

  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setInView(true),
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="rounded-2xl border border-outline bg-surface p-6 text-center card-hover"
    >
      <div className="font-heading text-4xl md:text-5xl font-extrabold text-primary tabular-nums leading-none">
        {numeric !== null ? (
          <span className="inline-flex items-baseline">
            <NumberFlow value={inView ? numeric : 0} />
            <span>{suffix}</span>
          </span>
        ) : (
          value
        )}
      </div>
      <div className="text-xs text-on-surface-muted mt-3 uppercase tracking-wide">{label}</div>
    </motion.div>
  );
}

/* ————————————————————————————————————— Pain ————————————————————————————————————— */

function Pain({ lang }: Props) {
  const t = chinaDict[lang];
  return (
    <motion.section
      {...reveal}
      className="py-20 md:py-28 bg-surface-alt border-b border-outline-faint"
    >
      <div className="section-container">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">
            {t.pain.eyebrow}
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-on-surface mt-3 text-balance">
            {t.pain.title}
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {t.pain.cards.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="card-hover rounded-2xl border border-outline bg-surface-card p-8 space-y-3"
            >
              <div className="text-6xl font-heading font-extrabold gradient-text leading-none">
                0{i + 1}
              </div>
              <h3 className="font-heading font-bold text-xl text-on-surface">{c.title}</h3>
              <p className="text-on-surface-muted leading-relaxed">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

/* ————————————————————————————————————— Who (team) ————————————————————————————————————— */

function Who({ lang }: Props) {
  const t = chinaDict[lang];
  return (
    <motion.section id="who" {...reveal} className="py-20 md:py-28">
      <div className="section-container">
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">
            {t.who.eyebrow}
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-on-surface mt-3 text-balance leading-tight">
            {t.who.title}
          </h2>
          <p className="text-on-surface-muted mt-5 text-lg leading-relaxed">{t.who.paragraph}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {t.who.members.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="rounded-3xl border border-outline bg-surface-card p-6 md:p-8 card-hover"
            >
              <div className="flex items-start gap-5">
                <TeamPhoto photo={m.photo} alt={m.name} initial={m.fallbackInitial} />
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading font-bold text-xl text-on-surface">{m.name}</h3>
                  <p className="text-sm text-primary font-medium mt-1">{m.role}</p>
                </div>
              </div>
              <ul className="mt-6 space-y-2.5">
                {m.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-on-surface-secondary">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" strokeWidth={3} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function TeamPhoto({ photo, alt, initial }: { photo: string; alt: string; initial: string }) {
  const [failed, setFailed] = useState(photo.includes('partner'));
  if (failed) {
    return (
      <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center flex-shrink-0 border border-outline">
        <span className="font-heading font-extrabold text-3xl md:text-4xl text-white">{initial}</span>
      </div>
    );
  }
  return (
    <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden flex-shrink-0 border border-outline">
      <Image src={photo} alt={alt} fill sizes="96px" className="object-cover" onError={() => setFailed(true)} />
    </div>
  );
}

/* ————————————————————————————————————— Offers ————————————————————————————————————— */

function Offers({ lang }: Props) {
  const t = chinaDict[lang];
  return (
    <motion.section
      {...reveal}
      id="offers"
      className="py-20 md:py-28 bg-surface-alt border-y border-outline-faint"
    >
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">
            {t.offers.eyebrow}
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-on-surface mt-3 text-balance">
            {t.offers.title}
          </h2>
          <p className="text-on-surface-muted mt-4">{t.offers.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 items-stretch">
          {t.offers.tiers.map((tier, i) => {
            const featured = tier.id === 'builder';
            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`relative rounded-3xl border bg-surface-card p-8 flex flex-col ${
                  featured
                    ? 'border-primary shadow-2xl shadow-primary/25 lg:scale-[1.05] lg:-my-2 z-10'
                    : 'border-outline'
                }`}
              >
                {tier.ribbon && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full shadow-lg shadow-primary/30">
                    {tier.ribbon}
                  </div>
                )}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold tracking-widest uppercase text-primary">
                    {tier.eyebrow}
                  </span>
                  <span className="text-sm text-on-surface-muted">{tier.duration}</span>
                </div>
                <h3 className="font-heading text-2xl font-bold text-on-surface mb-2">{tier.name}</h3>
                <p className="text-on-surface-muted italic mb-6">&ldquo;{tier.hook}&rdquo;</p>

                <div className="mb-6 pb-6 border-b border-outline-faint">
                  <div className="flex items-baseline gap-1">
                    <span className="font-heading text-5xl font-extrabold text-on-surface tabular-nums">
                      {tier.price}
                    </span>
                    <span className="font-heading text-2xl font-bold text-on-surface-muted">€</span>
                  </div>
                  <div className="text-xs text-on-surface-muted mt-1">{tier.priceNote}</div>
                  <div className="text-xs text-on-surface-muted mt-1 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" />
                    {tier.secondPerson}
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {tier.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-on-surface-secondary">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <MagneticButton>
                  <a
                    href={CAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group block text-center rounded-full px-6 py-3 font-medium text-sm transition-colors ${
                      featured
                        ? 'bg-primary text-white hover:bg-primary-light'
                        : 'border border-outline text-on-surface-secondary hover:border-primary hover:text-on-surface'
                    }`}
                  >
                    <span className="inline-flex items-center gap-1.5">
                      {tier.cta}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </a>
                </MagneticButton>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

/* ————————————————————————————————————— Included / Not included ————————————————————————————————————— */

function Included({ lang }: Props) {
  const t = chinaDict[lang].included;
  return (
    <motion.section {...reveal} className="py-20 md:py-28">
      <div className="section-container">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">{t.eyebrow}</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-on-surface mt-3 text-balance">
            {t.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-surface-card to-surface-card p-7">
            <div className="flex items-center gap-2 mb-5">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                {lang === 'fr' ? 'Inclus' : 'Included'}
              </span>
            </div>
            <ul className="space-y-4">
              {t.included.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" strokeWidth={3} />
                  <div>
                    <div className="font-semibold text-on-surface text-sm">{item.label}</div>
                    <div className="text-sm text-on-surface-muted">{item.body}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-outline bg-surface-card p-7">
            <div className="flex items-center gap-2 mb-5">
              <XIcon className="w-5 h-5 text-on-surface-muted" />
              <span className="text-sm font-semibold text-on-surface-muted uppercase tracking-wide">
                {lang === 'fr' ? 'Non inclus' : 'Not included'}
              </span>
            </div>
            <ul className="space-y-4">
              {t.notIncluded.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <XIcon className="w-5 h-5 text-on-surface-muted flex-shrink-0 mt-0.5" strokeWidth={3} />
                  <div>
                    <div className="font-semibold text-on-surface text-sm">{item.label}</div>
                    <div className="text-sm text-on-surface-muted">{item.body}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-on-surface-muted italic">{t.note}</div>
      </div>
    </motion.section>
  );
}

/* ————————————————————————————————————— Itinerary ————————————————————————————————————— */

function Itinerary({ lang }: Props) {
  const t = chinaDict[lang];
  return (
    <motion.section {...reveal} id="itinerary" className="py-20 md:py-28 bg-surface-alt border-y border-outline-faint">
      <div className="section-container">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">
            {t.itinerary.eyebrow}
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-on-surface mt-3 text-balance">
            {t.itinerary.title}
          </h2>
          <p className="text-on-surface-muted mt-4">{t.itinerary.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {t.itinerary.stops.map((stop, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="card-hover group rounded-2xl border border-outline bg-surface-card overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={stop.image}
                  alt={stop.title}
                  fill
                  sizes="(max-width: 1024px) 50vw, 20vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3 bg-primary text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-md">
                  {stop.day}
                </div>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-heading font-bold text-on-surface">{stop.title}</h3>
                <p className="text-sm text-on-surface-muted leading-relaxed">{stop.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

/* ————————————————————————————————————— Map section ————————————————————————————————————— */

function MapSection({ lang }: Props) {
  const t = chinaDict[lang].map;
  return (
    <motion.section {...reveal} id="map" className="py-20 md:py-28">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-6">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">
              {t.eyebrow}
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-on-surface text-balance leading-tight">
              {t.title}
            </h2>
            <p className="text-on-surface-muted leading-relaxed">{t.subtitle}</p>

            <ul className="space-y-3 pt-2">
              {t.cities.map((city, i) => (
                <motion.li
                  key={city.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3 rounded-xl border border-outline bg-surface-card p-4"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-heading font-bold text-on-surface">{city.name}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                        {city.tag}
                      </span>
                    </div>
                    <p className="text-sm text-on-surface-muted mt-1">{city.body}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <ChinaMap lang={lang} />
          </div>
        </div>
      </div>
    </motion.section>
  );
}

/* ————————————————————————————————————— Testimonials ————————————————————————————————————— */

function Testimonials({ lang }: Props) {
  const t = chinaDict[lang].testimonials;
  return (
    <motion.section
      {...reveal}
      className="py-20 md:py-28 bg-surface-alt border-y border-outline-faint"
    >
      <div className="section-container">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            {t.eyebrow}
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-on-surface mt-3 text-balance">
            {t.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {t.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`rounded-2xl p-7 flex flex-col ${
                item.placeholder
                  ? 'border-2 border-dashed border-outline bg-transparent'
                  : 'border border-outline bg-surface-card'
              }`}
            >
              <div className={`text-4xl font-heading leading-none mb-4 ${item.placeholder ? 'text-on-surface-muted/30' : 'text-primary/40'}`}>
                &ldquo;
              </div>
              <p className={`${item.placeholder ? 'text-on-surface-muted italic' : 'text-on-surface'} leading-relaxed flex-1`}>
                {item.quote}
              </p>
              <div className="mt-6 pt-6 border-t border-outline-faint">
                <div className={`font-semibold text-sm ${item.placeholder ? 'text-on-surface-muted' : 'text-on-surface'}`}>
                  {item.name}
                </div>
                <div className="text-xs text-on-surface-muted">{item.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

/* ————————————————————————————————————— Lead magnet ————————————————————————————————————— */

function LeadMagnet({ lang }: Props) {
  const t = chinaDict[lang].leadMagnet;
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // TODO: POST to n8n webhook N8N_LEAD_MAGNET_URL once workflow is deployed.
    setSubmitted(true);
  };

  return (
    <motion.section {...reveal} className="py-20 md:py-28">
      <div className="section-container">
        <div className="relative rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-surface-card to-surface-card p-8 md:p-14 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/20 blur-3xl rounded-full pointer-events-none" />
          <div className="relative grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2">
                <Download className="w-5 h-5 text-primary" />
                <span className="text-xs font-semibold tracking-widest uppercase text-primary">{t.eyebrow}</span>
              </div>
              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-on-surface text-balance leading-tight">
                {t.title}
              </h2>
              <p className="text-on-surface-muted leading-relaxed">{t.body}</p>
            </div>

            <div className="lg:col-span-5">
              {submitted ? (
                <div className="rounded-2xl border border-primary bg-surface-card p-6 flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-on-surface font-medium">{t.success}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.placeholder}
                      className="flex-1 rounded-full bg-surface-card border border-outline px-5 py-3 text-on-surface placeholder:text-on-surface-muted focus:outline-none focus:border-primary transition-colors"
                    />
                    <button
                      type="submit"
                      className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-medium text-sm hover:bg-primary-light transition-colors shadow-lg shadow-primary/25"
                    >
                      {t.cta}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                  <div className="text-xs text-on-surface-muted">{t.small}</div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

/* ————————————————————————————————————— FAQ ————————————————————————————————————— */

function Faq({ lang }: Props) {
  const t = chinaDict[lang];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <motion.section
      {...reveal}
      id="faq"
      className="py-20 md:py-28 bg-surface-alt border-y border-outline-faint"
    >
      <div className="section-container max-w-3xl">
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">
            {t.faq.eyebrow}
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-on-surface mt-3 text-balance">
            {t.faq.title}
          </h2>
        </div>

        <div className="space-y-3">
          {t.faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="rounded-2xl border border-outline bg-surface-card overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between text-left px-6 py-5 group"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-semibold text-on-surface pr-6 group-hover:text-primary transition-colors">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-on-surface-muted flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5">
                        <p className="text-on-surface-muted leading-relaxed">{item.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

/* ————————————————————————————————————— Social / Bento Gallery ————————————————————————————————————— */

function Social({ lang }: Props) {
  const t = chinaDict[lang];
  // Bento grid layout — varied sizes for editorial feel
  const spans = [
    'md:col-span-2 md:row-span-2', // hero (first)
    'md:col-span-1 md:row-span-1',
    'md:col-span-1 md:row-span-2',
    'md:col-span-1 md:row-span-1',
    'md:col-span-2 md:row-span-1',
    'md:col-span-1 md:row-span-1',
  ];
  return (
    <motion.section {...reveal} className="py-20 md:py-28">
      <div className="section-container">
        <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/15 via-surface-card to-surface-card p-8 md:p-12 mb-10 relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-72 h-72 bg-primary/20 blur-3xl rounded-full pointer-events-none" />
          <div className="relative flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
            <div className="flex-1 space-y-3">
              <div className="inline-flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span className="text-xs font-semibold tracking-widest uppercase text-primary">
                  {t.social.eyebrow}
                </span>
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-on-surface text-balance leading-tight">
                {t.social.title}
              </h2>
              <p className="text-on-surface-muted leading-relaxed">{t.social.earlyBird}</p>
            </div>
            <MagneticButton>
              <a
                href={CAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-medium text-sm hover:bg-primary-light transition-colors shadow-lg shadow-primary/20 flex-shrink-0"
              >
                {t.finalCta.cta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </MagneticButton>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:auto-rows-[180px]">
          {t.social.gallery.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className={`relative overflow-hidden rounded-2xl border border-outline group ${spans[i] || ''}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-3 left-3 right-3 text-xs text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                {img.alt}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

/* ————————————————————————————————————— Final CTA ————————————————————————————————————— */

function FinalCta({ lang }: Props) {
  const t = chinaDict[lang];
  return (
    <motion.section
      {...reveal}
      className="py-24 md:py-32 dot-bg border-y border-outline-faint relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-surface-alt via-transparent to-surface-alt pointer-events-none" />
      <div className="section-container max-w-3xl text-center space-y-8 relative">
        <div className="inline-flex items-center gap-2">
          <Languages className="w-5 h-5 text-primary" />
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">
            FR · ZH · EN · PT · RU
          </span>
        </div>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-on-surface leading-tight text-balance">
          {t.finalCta.title}
        </h2>
        <p className="text-lg text-on-surface-muted">{t.finalCta.subtitle}</p>
        <MagneticButton strength={0.35}>
          <a
            href={CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-semibold text-base hover:bg-primary-light transition-colors shadow-xl shadow-primary/25"
          >
            {t.finalCta.cta}
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </MagneticButton>
      </div>
    </motion.section>
  );
}

/* ————————————————————————————————————— Footer ————————————————————————————————————— */

function Footer({ lang }: Props) {
  const t = chinaDict[lang];
  return (
    <footer className="py-14 bg-surface-alt">
      <div className="section-container grid md:grid-cols-3 gap-10">
        <div className="space-y-3">
          <div className="font-heading font-bold text-xl">
            Tristan <span className="gradient-text">Grech</span>
          </div>
          <p className="text-sm text-on-surface-muted leading-relaxed max-w-xs">{t.footer.tagline}</p>
        </div>

        <div>
          <div className="text-xs font-semibold tracking-widest uppercase text-on-surface-secondary mb-4">
            {t.footer.otherVentures}
          </div>
          <ul className="space-y-2">
            {t.footer.ventures.map((v) => (
              <li key={v.href}>
                <a
                  href={v.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-on-surface-secondary hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  {v.name}
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3 md:text-right">
          <div className="flex md:justify-end items-center gap-4 text-sm">
            <a
              href="https://wa.me/33678496126"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-on-surface-secondary hover:text-on-surface transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href="mailto:tristan@fullhaura.com"
              aria-label="Email"
              className="text-on-surface-secondary hover:text-on-surface transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/fullhaura/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-on-surface-secondary hover:text-on-surface transition-colors"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>
          <div className="flex md:justify-end items-center gap-3 text-xs text-on-surface-muted">
            {t.footer.legal.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-on-surface transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="section-container mt-10 pt-6 border-t border-outline-faint flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-on-surface-muted">
        <span>{t.footer.copyright}</span>
        <Link href={OTHER_PATH[lang]} className="hover:text-on-surface transition-colors">
          {lang === 'fr' ? 'English version →' : 'Version française →'}
        </Link>
      </div>
    </footer>
  );
}

/* ————————————————————————————————————— Sticky Mobile CTA ————————————————————————————————————— */

function StickyMobileCta({ lang }: Props) {
  const t = chinaDict[lang];
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const partnerShort = lang === 'fr' ? 'associé' : 'partner';

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="sm:hidden fixed bottom-0 inset-x-0 z-40 p-3 bg-surface-nav/95 backdrop-blur-xl border-t border-outline"
        >
          <div className="flex items-center gap-3">
            <div className="flex-1 min-w-0">
              <div className="text-xs text-on-surface-muted">{t.stickyMobile.prompt}</div>
              <div className="text-sm font-semibold text-on-surface truncate">
                Tristan + {partnerShort}
              </div>
            </div>
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-primary text-white text-sm font-medium rounded-full px-4 py-2.5 flex-shrink-0"
            >
              {t.stickyMobile.cta}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
