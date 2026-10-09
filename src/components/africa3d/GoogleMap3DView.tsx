import React, { useEffect, useRef, useState } from 'react';
import {
  LOCATIONS,
  MAP_COLORS,
  LocationItem
} from './locationsData';

/**
 * ============================================================================
 * GOOGLE MAPS API KEY CONFIGURATION
 * ============================================================================
 * Paste your Google Maps Platform API key below.
 * Make sure the "Maps JavaScript API" is enabled in your Google Cloud Console project,
 * billing is active, and restrict the key by HTTP referrer to your domain
 * (e.g., https://yourdomain.com/*) to protect your quota.
 */
export const GOOGLE_MAPS_API_KEY: string = "YOUR_API_KEY_HERE";
// ============================================================================

interface GoogleMap3DViewProps {
  selectedLocation: LocationItem;
  onSelectLocation: (id: string) => void;
  onFallbackNeeded: () => void;
  isAutoRotating: boolean;
  onToggleRotation: () => void;
  reducedMotion: boolean;
}

export default function GoogleMap3DView({
  selectedLocation,
  onSelectLocation,
  onFallbackNeeded,
  isAutoRotating,
  reducedMotion
}: GoogleMap3DViewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapElementRef = useRef<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);

  // Initialize Google 3D Maps (Map3DElement)
  useEffect(() => {
    // If the key is the placeholder or empty, trigger fallback immediately
    const isKeySet =
      Boolean(GOOGLE_MAPS_API_KEY) &&
      GOOGLE_MAPS_API_KEY !== 'YOUR_API_KEY_HERE' &&
      GOOGLE_MAPS_API_KEY.trim().length > 0;

    if (!isKeySet) {
      console.info(
        '[Google 3D Maps] No custom API key provided. Switching smoothly to high-performance 3D Globe fallback.'
      );
      onFallbackNeeded();
      return;
    }

    let isCancelled = false;
    const timeoutTimer = setTimeout(() => {
      if (!isLoaded && !isCancelled) {
        console.warn('[Google 3D Maps] Timeout loading Maps 3D library. Falling back.');
        onFallbackNeeded();
      }
    }, 6000);

    async function loadGoogle3DMap() {
      try {
        // Standard Google Maps JavaScript API dynamic loader
        if (!(window as any).google?.maps?.importLibrary) {
          await new Promise<void>((resolve, reject) => {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&v=alpha&libraries=maps3d`;
            script.async = true;
            script.defer = true;
            script.onload = () => resolve();
            script.onerror = (err) => reject(err);
            document.head.appendChild(script);
          });
        }

        const googleMaps = (window as any).google?.maps;
        if (!googleMaps) throw new Error('Google Maps global object not found.');

        // Import maps3d library as per official documentation
        const { Map3DElement, Marker3DElement } = await googleMaps.importLibrary('maps3d');

        if (isCancelled || !containerRef.current) return;

        // Create Map3DElement web component
        const map = new Map3DElement();
        // Mode must be set or nothing renders
        map.mode = 'hybrid';
        map.style.width = '100%';
        map.style.height = '100%';
        map.style.display = 'block';

        // Initial camera over Africa
        map.center = {
          lat: MAP_COLORS.overviewCamera.lat,
          lng: MAP_COLORS.overviewCamera.lng,
          altitude: MAP_COLORS.overviewCamera.altitudeKm * 1000
        };
        map.tilt = reducedMotion ? 0 : MAP_COLORS.overviewCamera.tilt;
        map.heading = 0;
        map.range = MAP_COLORS.overviewCamera.altitudeKm * 1000;

        containerRef.current.innerHTML = '';
        containerRef.current.appendChild(map);
        mapElementRef.current = map;

        // Add 3D Markers for the 10 locations
        LOCATIONS.forEach((loc) => {
          try {
            const marker = new Marker3DElement();
            marker.position = {
              lat: loc.latitude,
              lng: loc.longitude,
              altitude: 0
            };
            marker.label = loc.cityLabel;
            marker.altitudeMode = 'CLAMP_TO_GROUND';

            // Interaction listener
            marker.addEventListener('gmp-click', () => {
              onSelectLocation(loc.id);
            });

            map.appendChild(marker);
          } catch (e) {
            console.warn('[Google 3D Maps] Marker creation error for', loc.country, e);
          }
        });

        setIsLoaded(true);
        clearTimeout(timeoutTimer);
      } catch (err) {
        console.warn('[Google 3D Maps] Initialization failed, engaging fallback renderer:', err);
        setLoadError(String(err));
        onFallbackNeeded();
      }
    }

    loadGoogle3DMap();

    return () => {
      isCancelled = true;
      clearTimeout(timeoutTimer);
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [onFallbackNeeded, reducedMotion]);

  // Handle camera flying to selected location
  useEffect(() => {
    if (!mapElementRef.current || !isLoaded) return;
    const map = mapElementRef.current;

    try {
      const targetRange = selectedLocation.cameraRangeKm * 1000;
      if (typeof map.flyCameraTo === 'function') {
        map.flyCameraTo({
          endCamera: {
            center: {
              lat: selectedLocation.latitude,
              lng: selectedLocation.longitude,
              altitude: targetRange
            },
            tilt: reducedMotion ? 10 : 45,
            heading: 0,
            range: targetRange
          },
          durationMillis: reducedMotion ? 200 : 1600
        });
      } else {
        // Direct property set fallback
        map.center = {
          lat: selectedLocation.latitude,
          lng: selectedLocation.longitude,
          altitude: targetRange
        };
        map.tilt = 45;
        map.range = targetRange;
      }
    } catch (e) {
      console.warn('[Google 3D Maps] FlyCamera error:', e);
    }
  }, [selectedLocation, isLoaded, reducedMotion]);

  // Handle auto-rotation / drift
  useEffect(() => {
    if (!mapElementRef.current || !isLoaded || reducedMotion) return;
    const map = mapElementRef.current;

    if (isAutoRotating && typeof map.flyCameraAround === 'function') {
      try {
        map.flyCameraAround({
          camera: {
            center: {
              lat: selectedLocation.latitude,
              lng: selectedLocation.longitude,
              altitude: selectedLocation.cameraRangeKm * 1000
            },
            tilt: 40
          },
          durationMillis: 60000,
          rounds: 1
        });
      } catch {
        // flyCameraAround not supported or already active
      }
    }
  }, [isAutoRotating, isLoaded, selectedLocation, reducedMotion]);

  return (
    <div className="relative w-full h-[520px] md:h-[620px] rounded-3xl overflow-hidden bg-[#0A1628] border border-white/10 shadow-[inset_0_0_80px_rgba(0,0,0,0.8)]">
      <div ref={containerRef} className="w-full h-full" />
      {!isLoaded && !loadError && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#0A1628]/80 backdrop-blur-md">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-2 border-rj-gold border-t-transparent rounded-full animate-spin" />
            <span className="font-mono text-xs text-gray-400">Loading Google 3D Maps…</span>
          </div>
        </div>
      )}
    </div>
  );
}
