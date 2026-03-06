'use client';

import type { Grave } from '@/lib/cemetery-data';

interface GraveCardProps {
  grave: Grave;
  isSelected: boolean;
  onClick: () => void;
}

export function GraveCard({ grave, isSelected, onClick }: GraveCardProps) {
  const isUnknown = grave.name === 'Vô Danh';

  return (
    <button
      onClick={onClick}
      className={`w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 text-white rounded-sm flex flex-col items-center justify-between p-1 hover:from-slate-600 hover:to-slate-700 transition-all cursor-pointer border-2 overflow-hidden ${
        isSelected ? 'border-amber-300 ring-2 ring-amber-300' : 'border-slate-600'
      }`}
      style={{
        gridColumn: grave.col,
        gridRow: grave.row,
      }}
      aria-label={`${grave.name}, ${grave.birthYear} - ${grave.deathYear}`}
    >
      <div className="text-[10px] font-semibold text-amber-50 leading-tight w-full truncate px-0.5">
        {grave.name}
      </div>
      {!isUnknown && (
        <div className="text-[8px] text-amber-100/70 leading-tight w-full truncate px-0.5">
          {grave.birthYear} - {grave.deathYear}
        </div>
      )}
      {isUnknown && (
        <div className="text-[8px] text-amber-100/70 leading-tight w-full truncate px-0.5 italic">
          {grave.birthYear} - {grave.deathYear}
        </div>
      )}
    </button>
  );
}
