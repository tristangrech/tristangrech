'use client';

// @ts-ignore
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

const VISITED_CODES = new Set([
  643, 156, 250, 504, 492, 380, 724, 56, 528, 756,
  276, 442, 642, 398, 360, 764, 458, 795, 704, 470,
  840, 76, 826, 616, 634, 48, 784, 512, 20,
  792, 51,
  344, // Hong Kong
  702, // Singapore
  36,  // Australia
  620, // Portugal
]);

const GEO_URL = '/countries-110m.json';
const COLOR_VISITED   = '#3b82f6';
const COLOR_UNVISITED = '#1e293b';
const COLOR_STROKE    = '#0f172a';

export default function WorldMapCanvas() {
  return (
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
  );
}
