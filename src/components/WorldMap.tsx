'use client';

import dynamic from 'next/dynamic';
import type { Locale } from '@/lib/i18n';

const WorldMapCanvas = dynamic(() => import('./WorldMapCanvas'), { ssr: false });

interface WorldMapProps {
  locale: Locale;
}

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

          {/* Map — loaded client-side only (d3 requires browser APIs) */}
          <div className="w-full aspect-[2/1]">
            <WorldMapCanvas />
          </div>

          <p className="text-sm text-on-surface-muted mt-3 text-right">
            35 countries visited
          </p>
        </div>
      </div>
    </section>
  );
}
