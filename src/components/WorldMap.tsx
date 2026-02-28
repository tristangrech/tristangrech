'use client';

import type { Locale } from '@/lib/i18n';
// @ts-ignore
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

interface WorldMapProps {
  locale: Locale;
}

// ISO numeric country codes
const VISITED_CODES = new Set([
  643,  // Russia
  156,  // China
  250,  // France
  504,  // Morocco
  492,  // Monaco
  380,  // Italy
  724,  // Spain
  56,   // Belgium
  528,  // Netherlands
  756,  // Switzerland
  276,  // Germany
  442,  // Luxembourg
  642,  // Romania
  398,  // Kazakhstan
  360,  // Indonesia
  764,  // Thailand
  458,  // Malaysia
  795,  // Turkmenistan
  704,  // Vietnam
  470,  // Malta
  840,  // USA
  76,   // Brazil
  826,  // UK
  616,  // Poland
  634,  // Qatar
  48,   // Bahrain
  784,  // UAE
  512,  // Oman
  20,   // Andorra
  792,  // Turkey
  51,   // Armenia
]);

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';
const COLOR_VISITED   = '#3b82f6';
const COLOR_UNVISITED = '#1e293b';
const COLOR_STROKE    = '#0f172a';

export default function WorldMap({ locale: _locale }: WorldMapProps) {
  return (
    <section className="py-16 bg-surface-alt">
      <div className="section-container">
        <div className="rounded-2xl border border-outline bg-surface-card p-6">
          {/* Section Label */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-sm font-medium text-blue-500 tracking-wide uppercase">
              Travels
            </span>
          </div>

          <h2 className="font-heading text-3xl md:text-4xl font-bold text-on-surface mb-6">
            The world, so far.
          </h2>

          {/* Map */}
          <div className="w-full aspect-[2/1]">
            <ComposableMap
              projection="geoEquirectangular"
              projectionConfig={{ scale: 153 }}
              style={{ width: '100%', height: '100%' }}
            >
              <Geographies geography={GEO_URL}>
                {({ geographies }: { geographies: Array<{ rsmKey: string; id: string }> }) =>
                  geographies.map((geo) => {
                    const visited = VISITED_CODES.has(Number(geo.id));
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={visited ? COLOR_VISITED : COLOR_UNVISITED}
                        stroke={COLOR_STROKE}
                        strokeWidth={0.5}
                        style={{
                          default: { outline: 'none' },
                          hover:   { outline: 'none' },
                          pressed: { outline: 'none' },
                        }}
                      />
                    );
                  })
                }
              </Geographies>
            </ComposableMap>
          </div>

          <p className="text-sm text-on-surface-muted mt-3 text-right">
            31 countries visited
          </p>
        </div>
      </div>
    </section>
  );
}
