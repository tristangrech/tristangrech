'use client';

import { useEffect } from 'react';
import { MapContainer, TileLayer, CircleMarker, Tooltip, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { chinaDict, type ChinaLang } from '@/lib/china-i18n';

// Fix default icon paths for static export environments.
// (We use CircleMarker here so icons aren't needed, but keep this safe.)
if (typeof window !== 'undefined') {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  delete (L.Icon.Default.prototype as any)._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    iconUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/images/marker-shadow.png',
  });
}

interface Props {
  lang: ChinaLang;
}

export default function ChinaMap({ lang }: Props) {
  const t = chinaDict[lang].map;

  // Center roughly on the triangle centroid
  const center: [number, number] = [22.9, 113.5];
  const path: [number, number][] = t.cities.map((c) => c.coords);
  // Close the triangle
  path.push(t.cities[0].coords);

  return (
    <div className="relative aspect-[16/10] md:aspect-[16/9] rounded-3xl overflow-hidden border border-outline bg-surface-card">
      <MapContainer
        center={center}
        zoom={8}
        scrollWheelZoom={false}
        dragging={true}
        doubleClickZoom={false}
        zoomControl={false}
        className="w-full h-full z-0"
        style={{ background: 'rgb(18 22 30)' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png"
        />
        <TileLayer
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}{r}.png"
          opacity={0.6}
        />
        <Polyline
          positions={path}
          pathOptions={{ color: 'hsl(220 90% 60%)', weight: 2, dashArray: '6 6', opacity: 0.7 }}
        />
        {t.cities.map((city) => (
          <CircleMarker
            key={city.name}
            center={city.coords}
            radius={10}
            pathOptions={{
              color: 'hsl(220 90% 60%)',
              fillColor: 'hsl(220 90% 55%)',
              fillOpacity: 0.9,
              weight: 3,
            }}
          >
            <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent>
              <span style={{ fontWeight: 600 }}>{city.name}</span>
            </Tooltip>
          </CircleMarker>
        ))}
      </MapContainer>
      {/* Subtle gradient edge to blend into surface */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-outline-faint" />
    </div>
  );
}
