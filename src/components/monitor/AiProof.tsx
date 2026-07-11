import type { Locale } from '@/lib/i18n';
import { translations } from '@/lib/translations';
import { site } from '@/lib/site';
import Scene from './Scene';

export default function AiProof({ locale }: { locale: Locale }) {
  const t = translations[locale];
  return (
    <section id="ai" className="py-24 md:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <Scene scene={t.aiProof.scene} label={t.aiProof.label} title={t.aiProof.title} />
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12">
          <div className="space-y-6">
            {t.aiProof.paragraphs.map((p, i) => (
              <p key={i} className={`leading-relaxed ${i === 1 ? 'text-bone' : 'text-dim'}`}>
                {p}
              </p>
            ))}
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-rec text-bone font-medium text-sm rounded-sm hover:bg-[#d9352a] transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-bone tg-rec-dot" />
              {t.aiProof.cta}
            </a>
          </div>
          {/* Waveform: the audio of an answer being spoken */}
          <div
            className="tg-brackets border border-line bg-panel p-8 flex items-center justify-center min-h-[220px]"
            aria-hidden="true"
          >
            <div className="flex items-end gap-[3px] h-24 w-full max-w-xs">
              {[12, 28, 44, 66, 88, 72, 95, 60, 82, 40, 70, 90, 55, 75, 35, 62, 84, 48, 68, 30, 52, 78, 42, 58, 22, 46, 64, 32, 50, 18].map(
                (h, i) => (
                  <span
                    key={i}
                    className={`flex-1 rounded-t-[1px] ${i % 7 === 3 ? 'bg-rec' : 'bg-line'}`}
                    style={{ height: `${h}%` }}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
