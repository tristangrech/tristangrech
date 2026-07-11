import Image from 'next/image';
import type { Locale } from '@/lib/i18n';
import { translations } from '@/lib/translations';
import Scene from './Scene';

export default function Work({ locale }: { locale: Locale }) {
  const t = translations[locale];
  return (
    <section id="work" className="py-24 md:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <Scene scene={t.work.scene} label={t.work.label} title={t.work.title} sub={t.work.sub} />
        <div className="space-y-16 md:space-y-24">
          {t.work.clips.map((clip, i) => (
            <article
              key={clip.id}
              className={`grid gap-8 lg:gap-14 items-start ${
                clip.image ? 'lg:grid-cols-2' : 'lg:grid-cols-[1fr_1.2fr]'
              }`}
            >
              {/* Slate + facts */}
              <div className={i % 2 === 1 && clip.image ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-4 border-b border-line pb-3">
                  <span className="tg-label text-rec">{clip.id}</span>
                  <span className="tg-label">{clip.client}</span>
                </div>
                <h3 className="font-display uppercase font-medium text-xl md:text-2xl text-bone mt-6 tracking-tight">
                  {clip.title}
                </h3>
                <ul className="mt-6 space-y-3">
                  {clip.facts.map((f, j) => (
                    <li key={j} className="flex gap-3 text-[15px] text-dim leading-relaxed">
                      <span className="text-ambr font-plex text-xs mt-1.5 shrink-0">▸</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap items-center gap-2">
                  {clip.tags.map((tag) => (
                    <span
                      key={tag}
                      className="tg-label !text-[10px] border border-line px-2.5 py-1 rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {clip.url ? (
                  <a
                    href={clip.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-7 text-sm text-bone border-b border-rec pb-0.5 hover:text-rec transition-colors"
                  >
                    {t.work.linkLabel}
                    <span aria-hidden="true">↗</span>
                  </a>
                ) : null}
              </div>

              {/* Visual: screenshot in a monitor frame, or a typographic slate */}
              <div className={i % 2 === 1 && clip.image ? 'lg:order-1' : ''}>
                {clip.image ? (
                  <div className="tg-brackets border border-line bg-panel p-3">
                    <Image
                      src={clip.image}
                      alt={clip.imageAlt}
                      width={1280}
                      height={800}
                      className="w-full h-auto"
                    />
                    <div className="flex justify-between pt-3 px-1">
                      <span className="tg-label !text-[10px]">{clip.client}</span>
                      <span className="tg-label !text-[10px] text-ambr">16:9</span>
                    </div>
                  </div>
                ) : (
                  <div className="tg-brackets border border-line bg-panel aspect-video hidden lg:flex flex-col items-center justify-center gap-3 p-8">
                    <span className="tg-label text-ambr">{clip.id}</span>
                    <span className="font-display uppercase text-bone/60 text-lg text-center tracking-tight max-w-sm">
                      {clip.client}
                    </span>
                    <span className="tg-label !text-[10px]">A-ROLL · 4K · 2026</span>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
