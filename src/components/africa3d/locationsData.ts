/**
 * R&J Steytler — African Footprint & Market Intelligence Data
 * 
 * Single shared source of truth for all markers, highlights, list items,
 * and info panel content. Coordinates are verified decimal degrees (WGS84).
 */

export type LocationStatus = 'head_office' | 'regional_operations' | 'market_tracked';

export interface LocationItem {
  id: string;
  country: string;
  isoA3: string;
  status: LocationStatus;
  statusLabel: string;
  cityLabel: string;
  latitude: number;
  longitude: number;
  // Camera view altitude / range for 3D viewers (in km or altitude units)
  cameraRangeKm: number;
  // Panel description copy
  description: string;
  // Optional specific links
  detailLink?: {
    label: string;
    href: string;
  };
  specialNote?: string;
}

export const LOCATIONS: LocationItem[] = [
  {
    id: 'namibia',
    country: 'Namibia',
    isoA3: 'NAM',
    status: 'head_office',
    statusLabel: 'Head office',
    cityLabel: 'Windhoek',
    latitude: -22.5609,
    longitude: 17.0658,
    cameraRangeKm: 1800,
    description:
      'R&J Steytler is headquartered in Windhoek. Key facts we track: population 3.02 million across 825,000 km² (Namibia Statistics Agency, 2023 Census) · Namibia Dollar pegged 1:1 to the South African Rand · Bank of Namibia repo rate raised to 6.75% in June 2026.',
    detailLink: {
      label: 'Namibia insights →',
      href: '/namibia'
    }
  },
  {
    id: 'kenya',
    country: 'Kenya',
    isoA3: 'KEN',
    status: 'regional_operations',
    statusLabel: 'Regional operations',
    cityLabel: 'Nairobi',
    latitude: -1.2921,
    longitude: 36.8219,
    cameraRangeKm: 1600,
    description: 'Led by Prof. Rachel K. Gesami, Head of East Africa.',
    detailLink: {
      label: 'Meet Prof. Gesami →',
      href: '/gesami'
    }
  },
  {
    id: 'nigeria',
    country: 'Nigeria',
    isoA3: 'NGA',
    status: 'regional_operations',
    statusLabel: 'Regional operations',
    cityLabel: 'Lagos',
    latitude: 6.5244,
    longitude: 3.3792,
    cameraRangeKm: 1700,
    description: 'Led by Peik Bruhns, Head of West Africa.',
    detailLink: {
      label: 'Meet Peik Bruhns →',
      href: '/peik'
    }
  },
  {
    id: 'south_africa',
    country: 'South Africa',
    isoA3: 'ZAF',
    status: 'market_tracked',
    statusLabel: 'Market we track',
    cityLabel: 'Pretoria',
    latitude: -25.7479,
    longitude: 28.2293,
    cameraRangeKm: 2200,
    description:
      'R&J Steytler actively tracks this market. South African conditions matter for Namibia because of the currency peg; this is stated on our Macro Monitor.',
    detailLink: {
      label: 'See the Macro Monitor →',
      href: '/macro'
    }
  },
  {
    id: 'egypt',
    country: 'Egypt',
    isoA3: 'EGY',
    status: 'market_tracked',
    statusLabel: 'Market we track',
    cityLabel: 'Cairo',
    latitude: 30.0444,
    longitude: 31.2357,
    cameraRangeKm: 2200,
    description: 'R&J Steytler actively tracks this market.'
  },
  {
    id: 'morocco',
    country: 'Morocco',
    isoA3: 'MAR',
    status: 'market_tracked',
    statusLabel: 'Market we track',
    cityLabel: 'Rabat',
    latitude: 34.0209,
    longitude: -6.8416,
    cameraRangeKm: 1900,
    description: 'R&J Steytler actively tracks this market.'
  },
  {
    id: 'ghana',
    country: 'Ghana',
    isoA3: 'GHA',
    status: 'market_tracked',
    statusLabel: 'Market we track',
    cityLabel: 'Accra',
    latitude: 5.6037,
    longitude: -0.1870,
    cameraRangeKm: 1500,
    description: 'R&J Steytler actively tracks this market.'
  },
  {
    id: 'botswana',
    country: 'Botswana',
    isoA3: 'BWA',
    status: 'market_tracked',
    statusLabel: 'Market we track',
    cityLabel: 'Gaborone',
    latitude: -24.6282,
    longitude: 25.9231,
    cameraRangeKm: 1600,
    description: 'R&J Steytler actively tracks this market.'
  },
  {
    id: 'zambia',
    country: 'Zambia',
    isoA3: 'ZMB',
    status: 'market_tracked',
    statusLabel: 'Market we track',
    cityLabel: 'Lusaka',
    latitude: -15.3875,
    longitude: 28.3228,
    cameraRangeKm: 1800,
    description: 'R&J Steytler actively tracks this market.'
  },
  {
    id: 'angola',
    country: 'Angola',
    isoA3: 'AGO',
    status: 'market_tracked',
    statusLabel: 'Market we track',
    cityLabel: 'Luanda',
    latitude: -8.8390,
    longitude: 13.2894,
    cameraRangeKm: 2100,
    description: 'R&J Steytler actively tracks this market.'
  }
];

// Color palette constants matching site CSS variables
export const MAP_COLORS = {
  headOffice: '#C8A24A', // --color-rj-gold
  regionalOperations: '#00FF88', // --color-rj-green
  marketTracked: '#60A5FA', // blue-400
  neutralCountryFill: 'rgba(11, 21, 38, 0.55)',
  neutralCountryStroke: 'rgba(255, 255, 255, 0.12)',
  overviewCamera: {
    lat: 2.0,
    lng: 20.0,
    altitudeKm: 9500,
    tilt: 25,
    heading: 0
  }
};

/**
 * Standard Ray-casting algorithm to test if a point (lng, lat) is inside a polygon ring
 */
function pointInPolygonRing(point: [number, number], ring: [number, number][]): boolean {
  const [x, y] = point;
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const xi = ring[i][0];
    const yi = ring[i][1];
    const xj = ring[j][0];
    const yj = ring[j][1];
    const intersect = yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}

/**
 * Programmatic sanity-check rule (mandatory):
 * Verifies that every marker lies inside its own country's polygon in the GeoJSON.
 * Logs a console warning if any location fails, or confirms validation on success.
 */
export function sanityCheckLocations(geoJson: any): boolean {
  if (!geoJson || !geoJson.features) {
    console.warn('[Map Sanity Check] No GeoJSON features available to validate.');
    return false;
  }

  let allPassed = true;
  LOCATIONS.forEach((loc) => {
    // Find matching country feature by ISO-A3 (or alternate property names)
    const feature = geoJson.features.find((f: any) => {
      const p = f.properties || {};
      return (
        p.ISO_A3 === loc.isoA3 ||
        p.ADM0_A3 === loc.isoA3 ||
        p.SU_A3 === loc.isoA3 ||
        p.SOV_A3 === loc.isoA3 ||
        p.iso_a3 === loc.isoA3
      );
    });

    if (!feature) {
      console.warn(`[Map Sanity Check] Country polygon not found for ISO-A3: ${loc.isoA3} (${loc.country})`);
      allPassed = false;
      return;
    }

    const geom = feature.geometry;
    if (!geom) {
      console.warn(`[Map Sanity Check] Feature has no geometry for ${loc.country}`);
      allPassed = false;
      return;
    }

    const pt: [number, number] = [loc.longitude, loc.latitude];
    let isInside = false;

    if (geom.type === 'Polygon') {
      // First ring is exterior, remainder are interior holes
      if (pointInPolygonRing(pt, geom.coordinates[0])) {
        let inHole = false;
        for (let h = 1; h < geom.coordinates.length; h++) {
          if (pointInPolygonRing(pt, geom.coordinates[h])) {
            inHole = true;
            break;
          }
        }
        if (!inHole) isInside = true;
      }
    } else if (geom.type === 'MultiPolygon') {
      for (const poly of geom.coordinates) {
        if (pointInPolygonRing(pt, poly[0])) {
          let inHole = false;
          for (let h = 1; h < poly.length; h++) {
            if (pointInPolygonRing(pt, poly[h])) {
              inHole = true;
              break;
            }
          }
          if (!inHole) {
            isInside = true;
            break;
          }
        }
      }
    }

    if (!isInside) {
      console.warn(
        `[Map Sanity Check WARNING] Location "${loc.cityLabel}, ${loc.country}" (lat: ${loc.latitude}, lng: ${loc.longitude}) failed point-in-polygon verification for ISO-A3 ${loc.isoA3}.`
      );
      allPassed = false;
    }
  });

  if (allPassed) {
    console.info(
      `[Map Sanity Check PASSED] All ${LOCATIONS.length} location coordinates verified inside their official country boundaries.`
    );
  }

  return allPassed;
}
