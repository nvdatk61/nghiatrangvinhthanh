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
      className={`bg-gradient-to-br from-slate-700 to-slate-800 text-white rounded-md p-2 hover:scale-[1.1] hover:z-10 transition-all cursor-pointer border-2 ${
        isSelected ? 'border-amber-300 ring-2 ring-amber-300' : 'border-slate-600'
      }`}
      style={{
        gridColumn: grave.col,
        gridRow: grave.row,
      }}
      aria-label={`${grave.name}, ${grave.birthYear} - ${grave.deathYear}`}
    >
      <div className="text-[11px] font-semibold text-amber-50 leading-tight">
        {grave.name}
      </div>
      {!isUnknown && (
        <div className="text-[9px] text-amber-100/70 leading-tight">
          {grave.birthYear} - {grave.deathYear}
        </div>
      )}
      {isUnknown && (
        <div className="text-[9px] text-amber-100/70 leading-tight italic">
          {grave.birthYear} - {grave.deathYear}
        </div>
      )}
    </button>
  );
}
