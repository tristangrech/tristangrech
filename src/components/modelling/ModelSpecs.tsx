import { Locale } from '@/lib/i18n';
import { translations } from '@/lib/translations';

interface ModelSpecsProps {
  locale: Locale;
}

export default function ModelSpecs({ locale }: ModelSpecsProps) {
  const t = translations[locale];
  const m = t.modelling.specs;

  return (
    <section className="bg-[#080808] py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-8 md:px-16">
        {/* Section label */}
        <p className="text-[#b8965a] text-xs uppercase tracking-[0.35em] font-body font-medium mb-12">
          {m.sectionLabel}
        </p>

        {/* Specs card */}
        <div className="bg-[#2a2a28]/40 border border-[#2a2a28] rounded-sm p-8 md:p-12">
          <div className="space-y-0">
            {m.items.map((item, index) => (
              <div
                key={index}
                className={`flex items-center justify-between py-5 ${
                  index < m.items.length - 1
                    ? 'border-b border-[#2a2a28]'
                    : ''
                }`}
              >
                <span className="text-[#888880] text-xs uppercase tracking-[0.2em] font-body">
                  {item.key}
                </span>
                <span className="text-[#f5f2ee] text-base md:text-lg font-['Cormorant_Garamond',serif] font-light tracking-wide">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative element */}
        <div className="flex items-center gap-4 mt-12">
          <div className="h-px flex-1 bg-[#2a2a28]" />
          <div className="w-2 h-2 rotate-45 border border-[#b8965a]" />
          <div className="h-px flex-1 bg-[#2a2a28]" />
        </div>
      </div>
    </section>
  );
}
