import React, { useState } from 'react';
import {
  LOCATIONS,
  MAP_COLORS,
  LocationItem
} from './locationsData';

interface SvgFallbackViewProps {
  selectedLocation: LocationItem;
  onSelectLocation: (id: string) => void;
}

// Equirectangular projection mapping decimal degrees to SVG coordinate space
function projectToSvg(lng: number, lat: number) {
  const minLng = -22;
  const maxLng = 55;
  const minLat = -36;
  const maxLat = 38;

  const width = 640;
  const height = 680;

  const x = ((lng - minLng) / (maxLng - minLng)) * (width - 80) + 40;
  const y = ((maxLat - lat) / (maxLat - minLat)) * (height - 80) + 40;

  return { x, y };
}

// Geographically accurate continental coastline points (decimal degrees WGS84)
const AFRICA_COASTLINE_COORDS: [number, number][] = [
  [-5.8, 35.8],   // Tangier, Morocco
  [3.0, 36.8],    // Algiers, Algeria
  [10.2, 36.9],   // Tunis, Tunisia
  [13.2, 32.9],   // Tripoli, Libya
  [20.1, 32.1],   // Benghazi, Libya
  [29.9, 31.2],   // Alexandria, Egypt
  [32.3, 31.3],   // Port Said, Egypt
  [32.6, 29.9],   // Suez / Sinai
  [33.8, 27.2],   // Hurghada, Egypt
  [37.2, 19.6],   // Port Sudan
  [39.5, 15.6],   // Massawa
  [43.1, 11.6],   // Djibouti
  [51.4, 10.4],   // Ras Hafun (Horn of Africa)
  [45.3, 2.0],    // Mogadishu, Somalia
  [39.7, -4.0],   // Mombasa, Kenya
  [39.3, -6.8],   // Dar es Salaam, Tanzania
  [40.5, -13.0],  // Pemba, Mozambique
  [34.8, -19.8],  // Beira, Mozambique
  [32.6, -26.0],  // Maputo, Mozambique
  [31.0, -29.9],  // Durban, South Africa
  [25.6, -34.0],  // Port Elizabeth, South Africa
  [20.0, -34.8],  // Cape Agulhas (Southern tip of Africa)
  [18.4, -34.0],  // Cape Town, South Africa
  [15.1, -26.6],  // Lüderitz, Namibia
  [14.5, -22.9],  // Walvis Bay, Namibia
  [11.8, -17.3],  // Kunene / Skeleton Coast
  [13.2, -8.8],   // Luanda, Angola
  [12.4, -6.1],   // Soyo / Congo mouth
  [9.4, 0.4],     // Libreville, Gabon
  [9.7, 4.0],     // Douala, Cameroon
  [3.4, 6.4],     // Lagos, Nigeria
  [-0.2, 5.5],    // Accra, Ghana
  [-4.0, 5.3],    // Abidjan, Côte d'Ivoire
  [-10.8, 6.3],   // Monrovia, Liberia
  [-13.2, 8.5],   // Freetown, Sierra Leone
  [-15.6, 11.8],  // Bissau
  [-17.4, 14.7],  // Dakar, Senegal (Westernmost tip)
  [-16.0, 18.1],  // Nouakchott, Mauritania
  [-17.0, 20.9],  // Nouadhibou, Mauritania
  [-13.2, 27.1],  // Laayoune
  [-9.6, 30.4],   // Agadir, Morocco
  [-7.6, 33.6],   // Casablanca, Morocco
  [-6.8, 34.0],   // Rabat, Morocco
  [-5.8, 35.8]    // Tangier (closing loop)
];

const MADAGASCAR_COORDS: [number, number][] = [
  [49.3, -12.3],
  [49.4, -18.1],
  [47.0, -25.0],
  [43.7, -23.3],
  [46.3, -15.7],
  [49.3, -12.3]
];

export default function SvgFallbackView({
  selectedLocation,
  onSelectLocation
}: SvgFallbackViewProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Build SVG polygon path dynamically from real geographic coordinates
  const africaPathD = AFRICA_COASTLINE_COORDS.map(([lng, lat], i) => {
    const { x, y } = projectToSvg(lng, lat);
    return `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ') + ' Z';

  const madagascarPathD = MADAGASCAR_COORDS.map(([lng, lat], i) => {
    const { x, y } = projectToSvg(lng, lat);
    return `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ') + ' Z';

  return (
    <div className="relative w-full h-[520px] md:h-[620px] rounded-3xl overflow-hidden bg-gradient-to-b from-[#080E1A] via-[#0A1628] to-[#040914] border border-white/10 shadow-[inset_0_0_80px_rgba(0,0,0,0.8)] flex items-center justify-center p-4">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(rgba(200, 162, 74, 0.25) 1px, transparent 1px), radial-gradient(rgba(0, 255, 136, 0.15) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          backgroundPosition: '0 0, 16px 16px'
        }}
      />

      <svg
        viewBox="0 0 640 680"
        className="w-full h-full max-h-[580px] object-contain relative z-10 select-none"
        aria-label="Map of Africa showing R&J Steytler locations"
      >
        <defs>
          {/* Radial glow for Windhoek HQ */}
          <radialGradient id="hq-pulse-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C8A24A" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#C8A24A" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#C8A24A" stopOpacity="0" />
          </radialGradient>
          <filter id="glow-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Continental boundary outline plotted with 1:1 matching projection */}
        <path
          d={africaPathD}
          fill="#0B1626"
          stroke="rgba(200, 162, 74, 0.45)"
          strokeWidth="1.8"
          strokeLinejoin="round"
          className="transition-colors duration-500 shadow-xl"
        />

        {/* Madagascar */}
        <path
          d={madagascarPathD}
          fill="#0B1626"
          stroke="rgba(200, 162, 74, 0.3)"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />

        {/* Interactive Location Markers */}
        {LOCATIONS.map((loc) => {
          const { x, y } = projectToSvg(loc.longitude, loc.latitude);
          const isSelected = selectedLocation.id === loc.id;
          const isHovered = hoveredId === loc.id;

          const isHQ = loc.status === 'head_office';
          const isRegional = loc.status === 'regional_operations';

          const markerColor = isHQ
            ? MAP_COLORS.headOffice
            : isRegional
            ? MAP_COLORS.regionalOperations
            : MAP_COLORS.marketTracked;

          // Strategic label offset to avoid collisions
          const placeLabelRight = loc.id !== 'accra' && loc.id !== 'gaborone' && loc.id !== 'luanda';
          const labelX = placeLabelRight ? x + 11 : x - 11;
          const labelAnchor = placeLabelRight ? 'start' : 'end';

          return (
            <g
              key={loc.id}
              className="cursor-pointer transition-all duration-200"
              onClick={() => onSelectLocation(loc.id)}
              onMouseEnter={() => setHoveredId(loc.id)}
              onMouseLeave={() => setHoveredId(null)}
              tabIndex={0}
              role="button"
              aria-label={`${loc.cityLabel}, ${loc.country} - ${loc.statusLabel}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectLocation(loc.id);
                }
              }}
            >
              {/* Pulsing ring for Head Office */}
              {isHQ && (
                <circle
                  cx={x}
                  cy={y}
                  r={isSelected ? 24 : 18}
                  fill="url(#hq-pulse-glow)"
                  className="animate-pulse"
                />
              )}

              {/* Selection Halo Ring */}
              {(isSelected || isHovered) && (
                <circle
                  cx={x}
                  cy={y}
                  r={isHQ ? 14 : 11}
                  fill="none"
                  stroke={markerColor}
                  strokeWidth="2"
                  opacity={isSelected ? 0.95 : 0.6}
                  strokeDasharray={isSelected ? 'none' : '3,3'}
                />
              )}

              {/* Exact Pin Dot Centered on (x, y) */}
              <circle
                cx={x}
                cy={y}
                r={isHQ ? 6.5 : isRegional ? 5.5 : 4}
                fill={markerColor}
                stroke="#080E1A"
                strokeWidth="2"
                filter={isHQ || isSelected ? 'url(#glow-filter)' : undefined}
              />

              {/* Marker Label Badge */}
              <text
                x={labelX}
                y={y + 4}
                textAnchor={labelAnchor}
                fill={isSelected ? '#FFFFFF' : isHovered ? markerColor : '#E5E7EB'}
                fontSize={isHQ ? 12 : 11}
                fontFamily="var(--font-mono, monospace)"
                fontWeight={isSelected || isHQ ? '600' : '400'}
                className="select-none pointer-events-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
              >
                {isHQ ? 'Windhoek · Head office' : loc.cityLabel}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Note badge */}
      <div className="absolute bottom-4 left-4 font-mono text-[10px] text-gray-500 bg-black/40 px-3 py-1 rounded-md border border-white/5">
        Geographically Projective Vector Mode · 10 Verified Strategic Locations
      </div>
    </div>
  );
}
