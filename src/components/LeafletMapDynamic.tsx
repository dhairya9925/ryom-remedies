"use client";

import dynamic from "next/dynamic";
import { MapPin } from "lucide-react";
import type { ComponentProps } from "react";
import type LeafletMapComponent from "./LeafletMap";

type LeafletMapProps = ComponentProps<typeof LeafletMapComponent>;

const LeafletMap = dynamic(() => import("@/components/LeafletMap"), {
  ssr: false,
  loading: () => <MapFallback />,
});

function MapFallback() {
  return (
    <div className="flex h-[400px] items-center justify-center bg-[#edeeef]">
      <div className="flex items-center gap-3 rounded-lg bg-white/90 px-6 py-4 text-[#0d8a7d] shadow-lg backdrop-blur-sm">
        <MapPin className="h-6 w-6 text-[#fc9d2a]" aria-hidden="true" />
        <span className="text-xl font-bold [font-family:Lexend,system-ui,sans-serif]">
          Ahmedabad, Gujarat, India
        </span>
      </div>
    </div>
  );
}

export default function LeafletMapDynamic(props: LeafletMapProps) {
  return <LeafletMap {...props} />;
}
