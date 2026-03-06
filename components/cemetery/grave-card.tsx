"use client";

import { cn } from "@/lib/utils";
import type { Grave } from "@/lib/cemetery-data";

interface GraveCardProps {
  grave: Grave;
  isSelected?: boolean;
  onClick: (grave: Grave) => void;
}

export function GraveCard({ grave, isSelected, onClick }: GraveCardProps) {
  const displayBirth = grave.birthDate !== "không rõ" ? `Sinh: ${grave.birthDate}` : "Sinh: không rõ";
  const displayDeath = grave.deathDate !== "không rõ" ? `Mất: ${grave.deathDate}` : "Mất: không rõ";

  return (
    <button
      onClick={() => onClick(grave)}
      aria-label={`${grave.name}, ${displayBirth}, ${displayDeath}`}
      className={cn(
        // Base tile — fixed size, sky blue matching the image
        "w-full h-[52px] text-center px-1 py-0.5 rounded-sm border transition-all duration-100 overflow-hidden flex flex-col items-center justify-center",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-1",
        "bg-sky-300 border-sky-400 hover:bg-sky-400 hover:border-sky-500",
        isSelected && "ring-2 ring-red-500 ring-offset-1 bg-sky-400"
      )}
    >
      <p className="text-[11px] font-semibold text-slate-800 leading-tight break-words hyphens-auto">
        {grave.name}
      </p>
      <p className="text-[9px] text-slate-600 mt-0.5 leading-none">
        Sinh: {grave.birthDate}
      </p>
      <p className="text-[9px] text-slate-600 leading-none">
        Mất: {grave.deathDate}
      </p>
    </button>
  );
}
