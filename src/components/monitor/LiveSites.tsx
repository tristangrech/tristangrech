import type { Locale } from '@/lib/i18n';
import { translations } from '@/lib/translations';
import Scene from './Scene';

export default function LiveSites({ locale }: { locale: Locale }) {
  const t = translations[locale];
  return (
    <section id="live" className="py-24 md:py-32 border-t border-line bg-panel/40">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <Scene scene={t.liveSites.scene} label={t.liveSites.label} title={t.liveSites.title} sub={t.liveSites.sub} />
        <ul className="border-t border-line">
          {t.liveSites.sites.map((s) => (
            <li key={s.name} className="border-b border-line">
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 py-5 hover:bg-panel transition-colors px-2 -mx-2"
              >
                <span className="inline-flex items-center gap-2 shrink-0 w-28">
                  <span className="w-1.5 h-1.5 rounded-full bg-rec tg-rec-dot" />
                  <span className="tg-label !text-[10px] text-rec">{t.liveSites.status}</span>
                </span>
                <span className="font-plex text-bone text-sm md:text-base shrink-0 sm:w-64 group-hover:text-rec transition-colors">
                  {s.name}
                </span>
                <span className="text-sm text-dim leading-snug">{s.desc}</span>
                <span className="hidden sm:inline text-dim ml-auto" aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
