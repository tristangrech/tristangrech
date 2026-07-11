'use client';

import { useEffect, useRef, useState } from 'react';
import type { Locale } from '@/lib/i18n';
import { translations } from '@/lib/translations';
import { site } from '@/lib/site';

function pad(n: number) {
  return String(n).padStart(2, '0');
}

export default function Hero({ locale }: { locale: Locale }) {
  const t = translations[locale];
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLive, setVideoLive] = useState(false);
  const [tc, setTc] = useState('00:00:00:00');

  // Timecode: video time when the reel plays, time-of-day clock in standby
  // (real cameras free-run TC from the clock, same idea).
  useEffect(() => {
    const id = window.setInterval(() => {
      const v = videoRef.current;
      if (videoLive && v && !v.paused) {
        const s = v.currentTime;
        const ff = Math.floor((s % 1) * 25);
        setTc(`${pad(Math.floor(s / 3600))}:${pad(Math.floor(s / 60) % 60)}:${pad(Math.floor(s) % 60)}:${pad(ff)}`);
      } else {
        const d = new Date();
        const ff = Math.floor((d.getMilliseconds() / 1000) * 25);
        setTc(`${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}:${pad(ff)}`);
      }
    }, 120);
    return () => window.clearInterval(id);
  }, [videoLive]);

  return (
    <section id="top" className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden">
      {/* Signal layer: showreel video when present, drifting standby glow until then */}
      <div className="absolute inset-0">
        {site.showreel.available ? (
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            src={site.showreel.src}
            poster={site.showreel.poster}
            autoPlay
            muted
            loop
            playsInline
            onCanPlay={() => setVideoLive(true)}
            onError={() => setVideoLive(false)}
          />
        ) : (
          <div className="tg-signal" aria-hidden="true" />
        )}
        {/* Legibility scrim over the signal */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/20" />
      </div>

      {/* Monitor chrome */}
      <div className="tg-power-on absolute inset-0 tg-brackets pointer-events-none" aria-hidden="true">
        <div className="absolute top-16 left-12 md:left-14 flex items-center gap-3">
          <span
            className={`w-2 h-2 rounded-full ${videoLive ? 'bg-rec tg-rec-dot' : 'bg-ambr'}`}
          />
          <span className={`tg-label ${videoLive ? 'text-rec' : 'text-ambr'}`}>
            {videoLive ? t.hero.rec : t.hero.standby}
          </span>
          <span className="tg-label tabular-nums" suppressHydrationWarning>
            {tc}
          </span>
        </div>
        <div className="absolute top-16 right-12 md:right-14 hidden sm:block">
          <span className="tg-label">{t.hero.awaiting}</span>
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-5 md:px-8 pb-20 md:pb-24 pt-40 w-full">
        <p className="tg-label mb-6">
          {t.hero.slateProject} <span className="text-ambr">·</span> {t.hero.slateLocation}
        </p>
        <h1 className="font-display font-semibold uppercase tracking-tight text-bone text-3xl sm:text-5xl lg:text-6xl leading-[1.08] max-w-4xl">
          {t.hero.h1a}
          <br />
          <span className="text-ambr">{t.hero.h1b}</span>
        </h1>
        <p className="mt-8 text-dim leading-relaxed max-w-2xl text-base md:text-lg">
          {t.hero.entity}
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 bg-rec text-bone font-medium text-sm rounded-sm hover:bg-[#d9352a] transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-bone tg-rec-dot" />
            {t.hero.ctaPrimary}
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-6 py-3 border border-line text-bone text-sm rounded-sm hover:border-bone transition-colors"
          >
            {t.hero.ctaSecondary}
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
