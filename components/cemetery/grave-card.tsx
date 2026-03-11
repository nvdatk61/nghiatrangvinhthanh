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
      className={`relative w-full h-full flex flex-col items-center justify-center p-2 cursor-pointer transition-all duration-200 group`}
      aria-label={`${grave.name}, ${grave.birthYear} - ${grave.deathYear}`}
    >
      {/* Tombstone shape */}
      <div
        className={`w-full h-full rounded-t-lg flex flex-col items-center justify-center relative shadow-lg transition-all duration-200 ${
          isSelected 
            ? 'bg-gradient-to-b from-stone-400 to-stone-500 shadow-2xl ring-2 ring-amber-400' 
            : 'bg-gradient-to-b from-stone-300 to-stone-400 hover:from-stone-350 hover:to-stone-450 group-hover:shadow-xl'
        }`}
        style={{
          clipPath: 'polygon(0 20%, 0 100%, 100% 100%, 100% 20%, 50% 0%)',
        }}
      >
        {/* Tombstone border overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            clipPath: 'polygon(0 20%, 0 100%, 100% 100%, 100% 20%, 50% 0%)',
            backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 50%, rgba(0,0,0,0.2) 100%)',
          }}
        />

        {/* Text content */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-1">
          <p className="text-[9px] font-bold text-slate-900 leading-tight text-center break-words whitespace-normal">
            {grave.name}
          </p>
          <div className="text-[7px] text-slate-700 leading-tight text-center mt-0.5">
            {grave.birthYear === 'Không rõ' ? '?' : grave.birthYear} - {grave.deathYear === 'Không rõ' ? '?' : grave.deathYear}
          </div>
        </div>
      </div>
    </button>
  );
}
