import { useEffect, useRef, useState } from "react";
import { MapPin } from "lucide-react";

/* ──────────────────────────────────────────────────────────
   Ryom Remedies – Ahmedabad, Gujarat, India
   ────────────────────────────────────────────────────────── */
const RYOM_LAT = 23.0225;
const RYOM_LNG = 72.5714;
const DEFAULT_ZOOM = 14;

interface LeafletMapProps {
  /** Override latitude (defaults to Ahmedabad) */
  lat?: number;
  /** Override longitude (defaults to Ahmedabad) */
  lng?: number;
  /** Zoom level 1-18 */
  zoom?: number;
  /** Text for the popup marker */
  popupText?: string;
  /** CSS class on the outer wrapper */
  className?: string;
}

/**
 * Lazy-loaded Leaflet map component.
 *
 * Leaflet depends on `window`, so we dynamically import it inside a
 * useEffect to keep SSR safe (TanStack Start renders on the server).
 */
export default function LeafletMap({
  lat = RYOM_LAT,
  lng = RYOM_LNG,
  zoom = DEFAULT_ZOOM,
  popupText = "Ryom Remedies — Ahmedabad, Gujarat, India",
  className = "",
}: LeafletMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!containerRef.current || mapInstanceRef.current) return;

    let cancelled = false;

    async function init() {
      /* Dynamic import keeps the server-side bundle clean */
      const L = (await import("leaflet")).default;
      await import("leaflet/dist/leaflet.css");

      if (cancelled || !containerRef.current) return;

      /* ── Create the map ─────────────────────────────────── */
      const map = L.map(containerRef.current, {
        scrollWheelZoom: false,
        zoomControl: true,
      }).setView([lat, lng], zoom);

      mapInstanceRef.current = map;

      /* ── OpenStreetMap tile layer ───────────────────────── */
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      /* ── Custom marker icon (brand-coloured) ───────────── */
      const markerIcon = L.divIcon({
        html: `
          <div style="
            display:flex;align-items:center;justify-content:center;
            width:44px;height:44px;border-radius:50% 50% 50% 4px;
            background:linear-gradient(135deg,#006b60 0%,#0d8a7d 100%);
            box-shadow:0 4px 14px rgba(0,107,96,.45);
            transform:rotate(-45deg);
          ">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
              viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5"
              stroke-linecap="round" stroke-linejoin="round"
              style="transform:rotate(45deg)">
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>`,
        className: "ryom-marker",
        iconSize: [44, 44],
        iconAnchor: [4, 44],
        popupAnchor: [18, -40],
      });

      /* ── Marker + popup ────────────────────────────────── */
      L.marker([lat, lng], { icon: markerIcon })
        .addTo(map)
        .bindPopup(
          `<div style="font-family:Lexend,system-ui,sans-serif;font-weight:600;font-size:14px;color:#006b60;min-width:160px;text-align:center;padding:4px 0;">
             ${popupText}
           </div>`,
          { className: "ryom-popup" }
        )
        .openPopup();

      /* Let the tiles settle before showing */
      map.whenReady(() => {
        setTimeout(() => {
          map.invalidateSize();
          setIsLoaded(true);
        }, 200);
      });
    }

    init();

    return () => {
      cancelled = true;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [lat, lng, zoom, popupText]);

  return (
    <div className={`leaflet-map-wrapper ${className}`}>
      {/* Skeleton / loading state */}
      {!isLoaded && (
        <div className="leaflet-map-skeleton">
          <div className="leaflet-map-skeleton-pulse" />
          <div className="leaflet-map-skeleton-label">
            <MapPin className="h-5 w-5" style={{ color: "#fc9d2a" }} />
            <span>Loading map…</span>
          </div>
        </div>
      )}

      <div
        ref={containerRef}
        id="ryom-contact-map"
        className="leaflet-map-container"
        style={{ opacity: isLoaded ? 1 : 0 }}
      />
    </div>
  );
}
