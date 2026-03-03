"use client";

import { cn } from "@/lib/utils";
import type { GraveRecord } from "@/lib/cemetery-data";
import { Cross, Flower2, Clock } from "lucide-react";

interface GraveCardProps {
  grave: GraveRecord;
  isHighlighted?: boolean;
  onClick: (grave: GraveRecord) => void;
}

const statusConfig = {
  occupied: {
    card: "bg-stone-100 border-stone-300 hover:border-stone-500 hover:bg-stone-50 hover:shadow-md cursor-pointer",
    idBadge: "bg-stone-200 text-stone-600",
    icon: "text-stone-400",
    label: "Occupied",
  },
  available: {
    card: "bg-emerald-50 border-emerald-200 hover:border-emerald-400 hover:bg-emerald-50/80 hover:shadow-sm cursor-pointer",
    idBadge: "bg-emerald-100 text-emerald-700",
    icon: "text-emerald-400",
    label: "Available",
  },
  reserved: {
    card: "bg-amber-50 border-amber-200 hover:border-amber-400 hover:bg-amber-50/80 hover:shadow-sm cursor-pointer",
    idBadge: "bg-amber-100 text-amber-700",
    icon: "text-amber-400",
    label: "Reserved",
  },
};

export function GraveCard({ grave, isHighlighted, onClick }: GraveCardProps) {
  const config = statusConfig[grave.status];

  return (
    <button
      onClick={() => onClick(grave)}
      aria-label={
        grave.status === "occupied"
          ? `View record for ${grave.deceased?.fullName}, Plot ${grave.plotNumber}`
          : `Plot ${grave.plotNumber} — ${config.label}`
      }
      className={cn(
        "group relative w-full rounded-lg border-2 p-3 text-left transition-all duration-150",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
        config.card,
        isHighlighted && "ring-2 ring-stone-700 ring-offset-1"
      )}
    >
      {/* Plot ID — top-left */}
      <span
        className={cn(
          "inline-flex items-center rounded-sm px-1.5 py-0.5 text-[9px] font-bold tracking-wider mb-2",
          config.idBadge
        )}
      >
        {grave.plotNumber}
      </span>

      {/* Occupied card */}
      {grave.status === "occupied" && grave.deceased ? (
        <>
          <Cross
            className={cn("h-3.5 w-3.5 mb-1.5", config.icon)}
            strokeWidth={1.5}
          />
          <p className="text-[11px] font-semibold text-stone-800 leading-snug line-clamp-2">
            {grave.deceased.fullName}
          </p>
          <p className="mt-1 text-[10px] text-stone-500 leading-none">
            d.&nbsp;{grave.deceased.dateOfDeath}
          </p>
        </>
      ) : grave.status === "available" ? (
        <>
          <Flower2
            className={cn("h-3.5 w-3.5 mb-1.5", config.icon)}
            strokeWidth={1.5}
          />
          <p className="text-[11px] font-semibold text-emerald-700">
            Available
          </p>
        </>
      ) : (
        <>
          <Clock
            className={cn("h-3.5 w-3.5 mb-1.5", config.icon)}
            strokeWidth={1.5}
          />
          <p className="text-[11px] font-semibold text-amber-700">Reserved</p>
        </>
      )}
    </button>
  );
}
