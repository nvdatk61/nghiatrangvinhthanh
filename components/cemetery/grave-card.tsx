"use client";

import { cn } from "@/lib/utils";
import type { GraveRecord } from "@/lib/cemetery-data";

interface GraveCardProps {
  grave: GraveRecord;
  isSelected?: boolean;
  onClick: (grave: GraveRecord) => void;
}

export function GraveCard({ grave, isSelected, onClick }: GraveCardProps) {
  const isUnknown = grave.status === "unknown";

  return (
    <button
      onClick={() => onClick(grave)}
      aria-label={
        grave.deceased
          ? `${grave.deceased.fullName}, ${grave.deceased.dateOfDeath}`
          : `Plot ${grave.plotNumber}`
      }
      className={cn(
        // Base tile — fixed size, sky blue matching the image
        "w-full h-[52px] text-center px-1 py-1 rounded-sm border transition-all duration-100 overflow-hidden flex flex-col items-center justify-center",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-1",
        isUnknown
          ? "bg-sky-200 border-sky-300 hover:bg-sky-300 hover:border-sky-400"
          : "bg-sky-300 border-sky-400 hover:bg-sky-400 hover:border-sky-500",
        isSelected && "ring-2 ring-red-500 ring-offset-1 bg-sky-400"
      )}
    >
      {grave.deceased ? (
        <>
          <p className="text-[11px] font-semibold text-slate-800 leading-tight break-words hyphens-auto">
            {grave.deceased.fullName}
          </p>
          <p className="text-[10px] text-slate-600 mt-0.5 leading-none">
            {grave.deceased.dateOfDeath}
          </p>
        </>
      ) : (
        <p className="text-[11px] text-slate-500 italic">—</p>
      )}
    </button>
  );
}
