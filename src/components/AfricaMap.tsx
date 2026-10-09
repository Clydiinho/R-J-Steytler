import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Activity,
  ArrowUpRight,
  RotateCcw,
  Play,
  Pause,
  ExternalLink
} from 'lucide-react';
import {
  LOCATIONS,
  MAP_COLORS,
  LocationItem,
  sanityCheckLocations
} from './africa3d/locationsData';
import GoogleMap3DView, { GOOGLE_MAPS_API_KEY } from './africa3d/GoogleMap3DView';
import GlobeFallbackView from './africa3d/GlobeFallbackView';

export default function AfricaMap() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedId, setSelectedId] = useState<string>('namibia');
  const [useFallback, setUseFallback] = useState<boolean>(() => {
    // If no valid Google Maps API key is configured, start with fallback immediately
    const hasKey =
      Boolean(GOOGLE_MAPS_API_KEY) &&
      GOOGLE_MAPS_API_KEY !== 'YOUR_API_KEY_HERE' &&
      GOOGLE_MAPS_API_KEY.trim().length > 0;
    return !hasKey;
  });
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Self-check: Programmatically verifies all 10 cities lie inside their country polygons on load
  useEffect(() => {
    fetch('https://cdn.jsdelivr.net/gh/nvkelso/natural-earth-vector@master/geojson/ne_110m_admin_0_countries.geojson')
      .then((r) => r.json())
      .then((geoJson) => {
        sanityCheckLocations(geoJson);
      })
      .catch((err) => {
        console.warn('[Map Sanity Check] Network check error:', err);
      });
  }, []);

  // Active selected location item from LOCATIONS array
  const activeLocation = useMemo(() => {
    return LOCATIONS.find((loc) => loc.id === selectedId) || LOCATIONS[0];
  }, [selectedId]);

  // Check prefers-reduced-motion media query
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    if (mediaQuery.matches) {
      setIsAutoRotating(false);
    }
    const handler = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
      if (e.matches) setIsAutoRotating(false);
    };
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Lazy-load when the section enters the viewport (IntersectionObserver)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Keyboard accessibility: Escape resets to Namibia / overview
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedId('namibia');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Reset view to overview
  const handleResetView = () => {
    setSelectedId('namibia');
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-transparent text-white relative overflow-hidden"
      aria-labelledby="africa-reach-heading"
    >
      {/* Background radial glows matching site design */}
      <div className="absolute top-1/2 left-[-10%] w-[500px] h-[500px] bg-rj-gold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-[-10%] w-[450px] h-[450px] bg-rj-green/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 pb-8 border-b border-white/10">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-rj-gold border border-white/10 bg-white/5 px-3 py-1 rounded-full inline-block mb-3">
              Where we work
            </span>
            <h2 id="africa-reach-heading" className="font-serif text-4xl md:text-5xl font-medium text-white tracking-tight">
              Our reach across <span className="italic text-rj-gold">Africa</span>
            </h2>
            <p className="text-gray-300 font-sans text-sm md:text-base mt-3 max-w-xl">
              Select a country to see our presence and the indicators we track there.
            </p>
          </div>
          <div className="mt-4 lg:mt-0 max-w-lg">
            <p className="text-gray-400 font-sans text-xs md:text-sm leading-relaxed">
              R&J Steytler is headquartered in Windhoek, Namibia, with regional operations in Nairobi (East Africa) and Lagos (West Africa), and actively tracks markets across South Africa, Egypt, Morocco, Ghana, Botswana, Zambia and Angola.
            </p>
          </div>
        </div>

        {/* Legend Bar matching site CSS variables */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 p-4 bg-[#0A1628]/60 backdrop-blur-xl border border-white/10 rounded-2xl">
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rj-gold shadow-[0_0_8px_rgba(200,162,74,0.85)]" />
              <span className="font-mono text-xs text-gray-200">Head office</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rj-green shadow-[0_0_8px_rgba(0,255,136,0.85)]" />
              <span className="font-mono text-xs text-gray-200">Regional operations</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.85)]" />
              <span className="font-mono text-xs text-gray-200">Markets we track</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsAutoRotating(!isAutoRotating)}
              className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-gray-300 hover:text-white transition-all flex items-center gap-1.5"
              aria-label={isAutoRotating ? 'Pause map rotation' : 'Play map rotation'}
            >
              {isAutoRotating ? <Pause size={12} /> : <Play size={12} />}
              <span>{isAutoRotating ? 'Pause rotation' : 'Play rotation'}</span>
            </button>
            <button
              onClick={handleResetView}
              className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-gray-300 hover:text-white transition-all flex items-center gap-1.5"
              aria-label="Reset map view to Africa overview"
            >
              <RotateCcw size={12} />
              <span>Reset view</span>
            </button>
          </div>
        </div>

        {/* Screen Reader Live Region for Accessibility */}
        <div className="sr-only" aria-live="polite" aria-atomic="true">
          Selected country: {activeLocation.country}, {activeLocation.statusLabel}, located in {activeLocation.cityLabel}.
        </div>

        {/* Main 3D Map Viewport and Info Dossier Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-10">
          
          {/* 3D Map Renderer Container (7 Cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {isVisible ? (
              !useFallback ? (
                <GoogleMap3DView
                  selectedLocation={activeLocation}
                  onSelectLocation={(id) => setSelectedId(id)}
                  onFallbackNeeded={() => setUseFallback(true)}
                  isAutoRotating={isAutoRotating}
                  onToggleRotation={() => setIsAutoRotating(!isAutoRotating)}
                  reducedMotion={reducedMotion}
                />
              ) : (
                <GlobeFallbackView
                  selectedLocation={activeLocation}
                  onSelectLocation={(id) => setSelectedId(id)}
                  isAutoRotating={isAutoRotating}
                  onToggleRotation={() => setIsAutoRotating(!isAutoRotating)}
                  onResetView={handleResetView}
                  reducedMotion={reducedMotion}
                />
              )
            ) : (
              /* Lightweight dark skeleton while scrolling into view */
              <div className="w-full h-[520px] md:h-[620px] rounded-3xl bg-[#0A1628]/50 border border-white/10 flex items-center justify-center animate-pulse">
                <span className="font-mono text-xs text-gray-500">Preparing Africa 3D Map…</span>
              </div>
            )}
          </div>

          {/* Info Panel Dossier (5 Cols on desktop) */}
          <div className="lg:col-span-5 bg-[#0A1628]/85 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex flex-col justify-between relative overflow-hidden">
            {/* Ambient accent top glow */}
            <div
              className={`absolute top-0 right-0 w-36 h-36 blur-3xl pointer-events-none transition-colors duration-500 ${
                activeLocation.status === 'head_office'
                  ? 'bg-rj-gold/15'
                  : activeLocation.status === 'regional_operations'
                  ? 'bg-rj-green/15'
                  : 'bg-blue-400/15'
              }`}
            />

            <div>
              {/* Status Chip & City */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <MapPin
                    size={16}
                    className={
                      activeLocation.status === 'head_office'
                        ? 'text-rj-gold'
                        : activeLocation.status === 'regional_operations'
                        ? 'text-rj-green'
                        : 'text-blue-400'
                    }
                  />
                  <span className="font-mono text-xs text-gray-300">
                    {activeLocation.cityLabel}
                  </span>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider border ${
                    activeLocation.status === 'head_office'
                      ? 'bg-rj-gold/15 border-rj-gold/40 text-rj-gold'
                      : activeLocation.status === 'regional_operations'
                      ? 'bg-rj-green/15 border-rj-green/40 text-rj-green'
                      : 'bg-blue-400/15 border-blue-400/40 text-blue-300'
                  }`}
                >
                  {activeLocation.statusLabel}
                </span>
              </div>

              {/* Country Name */}
              <h3 className="font-serif text-3xl md:text-4xl font-medium text-white mb-4">
                {activeLocation.country}
              </h3>

              {/* Verified Body Description */}
              <p className="text-gray-200 font-sans text-sm md:text-base leading-relaxed mb-6">
                {activeLocation.description}
              </p>

              {/* Dedicated Detail Link (if applicable) */}
              {activeLocation.detailLink && (
                <div className="mb-6">
                  <Link
                    to={activeLocation.detailLink.href}
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-rj-gold hover:text-white transition-colors"
                  >
                    <span>{activeLocation.detailLink.label}</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Standard Footer Section in every panel */}
            <div className="pt-6 border-t border-white/10 space-y-4">
              <div className="text-xs font-sans text-gray-400 leading-relaxed">
                <span className="font-medium text-gray-300">Indicators we track:</span>{' '}
                prices and financial conditions, domestic activity, structural position, policy and household conditions.{' '}
                <Link
                  to="/macro"
                  className="font-mono text-xs text-rj-gold hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  See the Macro Monitor →
                </Link>
              </div>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white text-white hover:text-rj-navy font-mono text-xs transition-all flex items-center justify-center gap-2 border border-white/10"
                >
                  <span>Discuss a project in {activeLocation.country} →</span>
                </Link>
              </div>
            </div>

          </div>

        </div>

        {/* Compact Country List / Selector (beside or under map) */}
        <div className="bg-[#0A1628]/40 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 md:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
            <div>
              <div className="font-mono text-xs text-gray-400 uppercase tracking-widest">
                Territories & Operational Bases
              </div>
              <div className="font-serif text-lg text-white">
                Select any country to fly the 3D camera to its location
              </div>
            </div>
            <div className="font-mono text-xs text-rj-gold">
              {LOCATIONS.length} Strategic Markets Plotted
            </div>
          </div>

          {/* Grid of location buttons using the site's signature white hover glow */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3" role="tablist">
            {LOCATIONS.map((loc) => {
              const isSelected = selectedId === loc.id;
              const statusDotColor =
                loc.status === 'head_office'
                  ? 'bg-rj-gold shadow-[0_0_8px_rgba(200,162,74,0.9)]'
                  : loc.status === 'regional_operations'
                  ? 'bg-rj-green shadow-[0_0_8px_rgba(0,255,136,0.9)]'
                  : 'bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.9)]';

              return (
                <button
                  key={loc.id}
                  onClick={() => setSelectedId(loc.id)}
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls="africa-reach-heading"
                  className={`p-4 rounded-2xl text-left border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-white text-rj-navy border-white shadow-[0_0_30px_rgba(255,255,250,0.4)] -translate-y-1'
                      : 'bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-rj-gold/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`w-2.5 h-2.5 rounded-full ${statusDotColor}`} />
                    <span
                      className={`font-mono text-[9px] uppercase tracking-wider ${
                        isSelected ? 'text-rj-navy/70' : 'text-gray-400'
                      }`}
                    >
                      {loc.status === 'head_office'
                        ? 'HQ'
                        : loc.status === 'regional_operations'
                        ? 'REGIONAL'
                        : 'TRACKED'}
                    </span>
                  </div>
                  <div
                    className={`font-serif text-base font-medium truncate ${
                      isSelected ? 'text-rj-navy font-semibold' : 'text-white'
                    }`}
                  >
                    {loc.country}
                  </div>
                  <div
                    className={`font-mono text-[11px] truncate mt-1 ${
                      isSelected ? 'text-rj-navy/80' : 'text-gray-400'
                    }`}
                  >
                    {loc.cityLabel}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
