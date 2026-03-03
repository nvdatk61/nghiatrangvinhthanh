"use client";

import { cn } from "@/lib/utils";
import type { GraveRecord } from "@/lib/cemetery-data";
import { Cross, Flower2 } from "lucide-react";

interface GraveCardProps {
  grave: GraveRecord;
  onClick: (grave: GraveRecord) => void;
}

const statusConfig = {
  occupied: {
    bg: "bg-stone-100 hover:bg-stone-200 border-stone-300 hover:border-stone-400",
    badge: "bg-stone-300 text-stone-800",
    label: "Occupied",
  },
  available: {
    bg: "bg-emerald-50 hover:bg-emerald-100 border-emerald-200 hover:border-emerald-300",
    badge: "bg-emerald-200 text-emerald-800",
    label: "Available",
  },
  reserved: {
    bg: "bg-amber-50 hover:bg-amber-100 border-amber-200 hover:border-amber-300",
    badge: "bg-amber-200 text-amber-800",
    label: "Reserved",
  },
};

export function GraveCard({ grave, onClick }: GraveCardProps) {
  const config = statusConfig[grave.status];
  const isInteractive = grave.status === "occupied";

  return (
    <button
      onClick={() => isInteractive && onClick(grave)}
      disabled={!isInteractive}
      aria-label={
        grave.status === "occupied"
          ? `View record for ${grave.deceased?.fullName}, Plot ${grave.plotNumber}`
          : `Plot ${grave.plotNumber} — ${config.label}`
      }
      className={cn(
        "group relative w-full rounded-lg border-2 p-3 text-left transition-all duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
        config.bg,
        isInteractive
          ? "cursor-pointer hover:shadow-md hover:-translate-y-0.5"
          : "cursor-default"
      )}
    >
      {/* Plot number badge */}
      <span
        className={cn(
          "absolute top-2 right-2 inline-flex items-center rounded-sm px-1.5 py-0.5 text-[10px] font-semibold tracking-wide",
          config.badge
        )}
      >
        {grave.plotNumber}
      </span>

      {/* Icon */}
      <div className="mb-2 mt-0.5">
        {grave.status === "occupied" ? (
          <Cross
            className="h-4 w-4 text-stone-500 group-hover:text-stone-700 transition-colors"
            strokeWidth={1.5}
          />
        ) : grave.status === "available" ? (
          <Flower2
            className="h-4 w-4 text-emerald-400"
            strokeWidth={1.5}
          />
        ) : (
          <div className="h-4 w-4 rounded-full border-2 border-amber-300" />
        )}
      </div>

      {/* Content */}
      {grave.status === "occupied" && grave.deceased ? (
        <>
          <p className="text-[11px] font-semibold text-stone-800 leading-snug line-clamp-2 pr-8">
            {grave.deceased.fullName}
          </p>
          <p className="mt-1.5 text-[10px] text-stone-500 leading-relaxed">
            d. {grave.deceased.dateOfDeath}
          </p>
        </>
      ) : (
        <p className="text-[11px] font-medium text-stone-400 pr-8">
          {config.label}
        </p>
      )}
    </button>
  );
}
