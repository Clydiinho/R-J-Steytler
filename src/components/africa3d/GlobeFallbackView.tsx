import React, { useEffect, useRef, useState, useCallback } from 'react';
import {
  LOCATIONS,
  MAP_COLORS,
  LocationItem,
  sanityCheckLocations
} from './locationsData';
import SvgFallbackView from './SvgFallbackView';

interface GlobeFallbackViewProps {
  selectedLocation: LocationItem;
  onSelectLocation: (id: string) => void;
  isAutoRotating: boolean;
  onToggleRotation: () => void;
  onResetView: () => void;
  reducedMotion: boolean;
}

// Pinned library and GeoJSON asset sources
// 1. Globe.gl WebGL bundle (jsDelivr CDN)
const GLOBE_GL_SCRIPT_URL = 'https://cdn.jsdelivr.net/npm/globe.gl@2.34.4/dist/globe.gl.min.js';
// 2. Natural Earth Admin 0 110m Countries GeoJSON (jsDelivr CDN)
const NATURAL_EARTH_GEOJSON_URL =
  'https://cdn.jsdelivr.net/gh/nvkelso/natural-earth-vector@master/geojson/ne_110m_admin_0_countries.geojson';

export default function GlobeFallbackView({
  selectedLocation,
  onSelectLocation,
  isAutoRotating,
  onToggleRotation,
  onResetView,
  reducedMotion
}: GlobeFallbackViewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const globeInstanceRef = useRef<any>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<boolean>(false);
  const [geoJsonData, setGeoJsonData] = useState<any>(null);
  const [hoveredLocation, setHoveredLocation] = useState<LocationItem | null>(null);

  // References for render loop / callbacks
  const stateRef = useRef({
    selectedLocation,
    isAutoRotating,
    reducedMotion
  });

  useEffect(() => {
    stateRef.current.selectedLocation = selectedLocation;
    stateRef.current.isAutoRotating = isAutoRotating;
    stateRef.current.reducedMotion = reducedMotion;
  }, [selectedLocation, isAutoRotating, reducedMotion]);

  // Load Globe.gl script and Natural Earth GeoJSON
  useEffect(() => {
    let isCancelled = false;

    async function initGlobe() {
      try {
        // 1. Load Globe.gl bundle if not already loaded
        if (!(window as any).Globe) {
          await new Promise<void>((resolve, reject) => {
            const existingScript = document.querySelector(`script[src="${GLOBE_GL_SCRIPT_URL}"]`);
            if (existingScript) {
              existingScript.addEventListener('load', () => resolve());
              existingScript.addEventListener('error', (e) => reject(e));
              return;
            }
            const script = document.createElement('script');
            script.src = GLOBE_GL_SCRIPT_URL;
            script.async = true;
            script.onload = () => resolve();
            script.onerror = (e) => reject(e);
            document.head.appendChild(script);
          });
        }

        const GlobeFactory = (window as any).Globe;
        if (!GlobeFactory) throw new Error('Globe.gl not available on window object.');

        // 2. Fetch Natural Earth GeoJSON
        const geoResp = await fetch(NATURAL_EARTH_GEOJSON_URL);
        if (!geoResp.ok) throw new Error(`Failed to load GeoJSON: ${geoResp.status}`);
        const geoJson = await geoResp.json();

        if (isCancelled || !containerRef.current) return;

        setGeoJsonData(geoJson);

        // Mandatory programmatic sanity-check
        sanityCheckLocations(geoJson);

        // 3. Initialize Globe instance
        containerRef.current.innerHTML = '';
        const width = containerRef.current.clientWidth || 800;
        const height = containerRef.current.clientHeight || 600;

        const myGlobe = GlobeFactory()(containerRef.current)
          .width(width)
          .height(height)
          .backgroundColor('rgba(0, 0, 0, 0)')
          .globeImageUrl('https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-night.jpg')
          .showAtmosphere(true)
          .atmosphereColor('#1D4ED8')
          .atmosphereAltitude(0.2)
          // Polygons configuration (country highlights)
          .polygonsData(geoJson.features)
          .polygonCapColor((feat: any) => {
            const iso = feat.properties?.ISO_A3 || feat.properties?.ADM0_A3 || feat.properties?.SU_A3;
            const loc = LOCATIONS.find((l) => l.isoA3 === iso);
            if (!loc) return MAP_COLORS.neutralCountryFill;

            const isCurrent = stateRef.current.selectedLocation.isoA3 === iso;
            if (loc.status === 'head_office') {
              return isCurrent ? 'rgba(200, 162, 74, 0.75)' : 'rgba(200, 162, 74, 0.5)';
            }
            if (loc.status === 'regional_operations') {
              return isCurrent ? 'rgba(0, 255, 136, 0.7)' : 'rgba(0, 255, 136, 0.4)';
            }
            return isCurrent ? 'rgba(96, 165, 250, 0.6)' : 'rgba(96, 165, 250, 0.28)';
          })
          .polygonSideColor(() => 'rgba(0, 0, 0, 0.2)')
          .polygonStrokeColor((feat: any) => {
            const iso = feat.properties?.ISO_A3 || feat.properties?.ADM0_A3 || feat.properties?.SU_A3;
            const loc = LOCATIONS.find((l) => l.isoA3 === iso);
            if (!loc) return MAP_COLORS.neutralCountryStroke;

            if (loc.status === 'head_office') return MAP_COLORS.headOffice;
            if (loc.status === 'regional_operations') return MAP_COLORS.regionalOperations;
            return MAP_COLORS.marketTracked;
          })
          .polygonAltitude((feat: any) => {
            const iso = feat.properties?.ISO_A3 || feat.properties?.ADM0_A3 || feat.properties?.SU_A3;
            const loc = LOCATIONS.find((l) => l.isoA3 === iso);
            if (!loc) return 0.003;
            return stateRef.current.selectedLocation.isoA3 === iso ? 0.016 : 0.009;
          })
          .onPolygonClick((feat: any) => {
            const iso = feat.properties?.ISO_A3 || feat.properties?.ADM0_A3 || feat.properties?.SU_A3;
            const matched = LOCATIONS.find((l) => l.isoA3 === iso);
            if (matched) {
              onSelectLocation(matched.id);
            }
          })
          // HTML Markers Configuration
          .htmlElementsData(LOCATIONS)
          .htmlLat((d: LocationItem) => d.latitude)
          .htmlLng((d: LocationItem) => d.longitude)
          .htmlElement((d: LocationItem) => {
            const isHQ = d.status === 'head_office';
            const isRegional = d.status === 'regional_operations';
            const markerColor = isHQ
              ? MAP_COLORS.headOffice
              : isRegional
              ? MAP_COLORS.regionalOperations
              : MAP_COLORS.marketTracked;

            const el = document.createElement('div');
            el.className = 'cursor-pointer group select-none pointer-events-auto';
            el.setAttribute('tabindex', '0');
            el.setAttribute('role', 'button');
            el.setAttribute('aria-label', `${d.cityLabel}, ${d.country} - ${d.statusLabel}`);

            // Anchor point is dead-center on (0, 0) matching exact latitude and longitude
            // Pin dot is centered on (0,0); label is positioned absolutely to the side
            el.innerHTML = `
              <div style="position: relative; width: 0; height: 0;">
                <!-- Exact geographic coordinate pin center -->
                <div style="position: absolute; left: 0; top: 0; transform: translate(-50%, -50%); display: flex; align-items: center; justify-content: center;">
                  ${
                    isHQ
                      ? `<div style="position: absolute; width: 26px; height: 26px; border-radius: 50%; background-color: ${markerColor}; opacity: 0.35;" class="animate-ping"></div>`
                      : ''
                  }
                  <div style="width: ${isHQ ? '14px' : '11px'}; height: ${isHQ ? '14px' : '11px'}; border-radius: 50%; border: 2px solid #0A1628; background-color: ${markerColor}; box-shadow: 0 0 10px ${markerColor};"></div>
                </div>

                <!-- Floating text badge offset to the right without shifting pin center -->
                <div style="position: absolute; left: 9px; top: 0; transform: translateY(-50%); pointer-events: none;" class="px-2 py-0.5 rounded-md bg-[#0A1628]/90 border border-white/20 text-[10px] font-mono whitespace-nowrap text-white shadow-lg drop-shadow">
                  ${isHQ ? 'Windhoek · Head office' : d.cityLabel}
                </div>
              </div>
            `;

            el.addEventListener('click', (e) => {
              e.stopPropagation();
              onSelectLocation(d.id);
            });

            el.addEventListener('mouseenter', () => setHoveredLocation(d));
            el.addEventListener('mouseleave', () => setHoveredLocation(null));

            return el;
          });

        // Set initial camera view centered on Africa
        myGlobe.pointOfView(
          {
            lat: MAP_COLORS.overviewCamera.lat,
            lng: MAP_COLORS.overviewCamera.lng,
            altitude: 2.2
          },
          1200
        );

        // Configure auto-rotation in controls
        const controls = myGlobe.controls();
        if (controls) {
          controls.autoRotate = !reducedMotion && isAutoRotating;
          controls.autoRotateSpeed = 0.55;
          controls.enableDamping = true;
          controls.dampingFactor = 0.08;
        }

        globeInstanceRef.current = myGlobe;
        setIsLoading(false);
      } catch (err) {
        console.warn('[Globe.gl Fallback] Error initializing WebGL globe, switching to 2D SVG fallback:', err);
        setLoadError(true);
      }
    }

    initGlobe();

    return () => {
      isCancelled = true;
      if (globeInstanceRef.current) {
        try {
          globeInstanceRef.current._destructor?.();
        } catch {
          // ignore cleanup errors
        }
      }
    };
  }, []);

  // Update camera when selected location changes
  useEffect(() => {
    if (!globeInstanceRef.current || isLoading) return;
    const globe = globeInstanceRef.current;

    // Refresh polygon highlights to show selected country elevated
    if (geoJsonData) {
      globe.polygonAltitude((feat: any) => {
        const iso = feat.properties?.ISO_A3 || feat.properties?.ADM0_A3 || feat.properties?.SU_A3;
        const loc = LOCATIONS.find((l) => l.isoA3 === iso);
        if (!loc) return 0.003;
        return selectedLocation.isoA3 === iso ? 0.018 : 0.009;
      });
      globe.polygonCapColor((feat: any) => {
        const iso = feat.properties?.ISO_A3 || feat.properties?.ADM0_A3 || feat.properties?.SU_A3;
        const loc = LOCATIONS.find((l) => l.isoA3 === iso);
        if (!loc) return MAP_COLORS.neutralCountryFill;

        const isCurrent = selectedLocation.isoA3 === iso;
        if (loc.status === 'head_office') {
          return isCurrent ? 'rgba(200, 162, 74, 0.85)' : 'rgba(200, 162, 74, 0.5)';
        }
        if (loc.status === 'regional_operations') {
          return isCurrent ? 'rgba(0, 255, 136, 0.8)' : 'rgba(0, 255, 136, 0.4)';
        }
        return isCurrent ? 'rgba(96, 165, 250, 0.7)' : 'rgba(96, 165, 250, 0.28)';
      });
    }

    // Smooth camera transition to the city point
    globe.pointOfView(
      {
        lat: selectedLocation.latitude,
        lng: selectedLocation.longitude,
        altitude: 1.3
      },
      reducedMotion ? 200 : 1400
    );
  }, [selectedLocation, isLoading, geoJsonData, reducedMotion]);

  // Handle Auto-Rotate toggle
  useEffect(() => {
    if (!globeInstanceRef.current) return;
    const controls = globeInstanceRef.current.controls();
    if (controls) {
      controls.autoRotate = !reducedMotion && isAutoRotating;
    }
  }, [isAutoRotating, reducedMotion]);

  // Resize handler with ResizeObserver
  useEffect(() => {
    const container = containerRef.current;
    if (!container || !globeInstanceRef.current) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        if (width > 0 && height > 0 && globeInstanceRef.current) {
          globeInstanceRef.current.width(width).height(height);
        }
      }
    });

    observer.observe(container);
    return () => observer.disconnect();
  }, [isLoading]);

  // If Globe.gl WebGL failed, render clean 2D SVG version
  if (loadError) {
    return (
      <SvgFallbackView
        selectedLocation={selectedLocation}
        onSelectLocation={onSelectLocation}
      />
    );
  }

  return (
    <div className="relative w-full h-[520px] md:h-[620px] rounded-3xl overflow-hidden bg-gradient-to-b from-[#060D1A] via-[#0A1628] to-[#040914] border border-white/10 shadow-[inset_0_0_80px_rgba(0,0,0,0.8)] select-none">
      {/* 3D Canvas Mount Point */}
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Loading Skeleton */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#0A1628]/85 backdrop-blur-md">
          <div className="flex flex-col items-center gap-3">
            <div className="w-9 h-9 border-2 border-rj-gold border-t-transparent rounded-full animate-spin" />
            <span className="font-mono text-xs text-gray-300">
              Loading Interactive 3D Africa Globe…
            </span>
          </div>
        </div>
      )}

      {/* Floating Tooltip when hovering a location */}
      {hoveredLocation && (
        <div className="absolute top-4 right-4 z-20 pointer-events-none px-3.5 py-2 rounded-xl bg-[#0A1628]/95 backdrop-blur-md border border-rj-gold/40 shadow-xl text-white">
          <div className="flex items-center gap-2">
            <span
              className={`w-2 h-2 rounded-full ${
                hoveredLocation.status === 'head_office'
                  ? 'bg-rj-gold shadow-[0_0_8px_#C8A24A]'
                  : hoveredLocation.status === 'regional_operations'
                  ? 'bg-rj-green shadow-[0_0_8px_#00FF88]'
                  : 'bg-blue-400 shadow-[0_0_8px_#60A5FA]'
              }`}
            />
            <span className="font-serif text-sm font-medium">{hoveredLocation.country}</span>
            <span className="font-mono text-[9px] uppercase tracking-wider text-gray-400">
              {hoveredLocation.statusLabel}
            </span>
          </div>
          <div className="text-[11px] font-mono text-gray-300 mt-0.5">
            {hoveredLocation.cityLabel}
          </div>
        </div>
      )}

      {/* Top HUD Controls: Auto-Rotate & Reset View */}
      <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
        <button
          onClick={onToggleRotation}
          className={`px-3 py-1.5 rounded-lg font-mono text-xs border backdrop-blur-md transition-all flex items-center gap-1.5 ${
            isAutoRotating
              ? 'bg-rj-gold/15 border-rj-gold/40 text-rj-gold hover:bg-rj-gold/25'
              : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
          }`}
          title="Toggle ambient 3D orbit rotation"
        >
          <span
            className={`w-2 h-2 rounded-full ${
              isAutoRotating ? 'bg-rj-gold animate-pulse' : 'bg-gray-500'
            }`}
          />
          <span>{isAutoRotating ? 'Rotation On' : 'Rotation Paused'}</span>
        </button>

        <button
          onClick={() => {
            onResetView();
            if (globeInstanceRef.current) {
              globeInstanceRef.current.pointOfView(
                {
                  lat: MAP_COLORS.overviewCamera.lat,
                  lng: MAP_COLORS.overviewCamera.lng,
                  altitude: 2.2
                },
                1200
              );
            }
          }}
          className="px-3 py-1.5 rounded-lg font-mono text-xs border bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:text-white transition-all backdrop-blur-md"
        >
          Reset View
        </button>
      </div>

      {/* Gestures hint */}
      <div className="absolute bottom-4 left-4 z-20 hidden sm:flex items-center gap-2 px-3 py-1 rounded-md bg-black/40 backdrop-blur-md border border-white/5 font-mono text-[10px] text-gray-400">
        <span>Drag to orbit</span>
        <span className="text-gray-600">·</span>
        <span>Scroll to zoom</span>
        <span className="text-gray-600">·</span>
        <span>Click pin to inspect</span>
      </div>
    </div>
  );
}
