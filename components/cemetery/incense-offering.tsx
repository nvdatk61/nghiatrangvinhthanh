'use client';

import React, { useState, useEffect } from 'react';
import { Flame } from 'lucide-react';

interface IncenseOfferingProps {
  graveId: string;
  graveName: string;
}

export function IncenseOffering({ graveId, graveName }: IncenseOfferingProps) {
  const [isLit, setIsLit] = useState(false);
  const [incenseCount, setIncenseCount] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem(`incense-${graveId}`);
    if (stored) {
      setIncenseCount(parseInt(stored, 10));
    }
  }, [graveId]);

  const handleLightIncense = () => {
    if (!isLit) {
      setIsLit(true);
      const newCount = incenseCount + 1;
      setIncenseCount(newCount);
      localStorage.setItem(`incense-${graveId}`, newCount.toString());
      
      const audio = new Audio('/sounds/bell.mp3');
      audio.volume = 0.3;
      audio.play().catch(() => {});
    }
  };

  return (
    <div className="mt-6 rounded-xl border-2 border-amber-200 bg-gradient-to-b from-amber-50 to-orange-50 p-4">
      <h3 className="mb-3 text-center text-sm font-bold uppercase tracking-wide text-amber-800">
        Thắp Hương Tưởng Niệm
      </h3>

      <div className="flex flex-col items-center gap-4">
        {/* Incense Bowl */}
        <div className="relative flex h-32 w-40 items-end justify-center">
          <div className="absolute bottom-0 h-8 w-28 rounded-b-full bg-gradient-to-b from-amber-700 to-amber-900 shadow-lg">
            <div className="absolute inset-x-0 top-0 h-2 rounded-t-sm bg-amber-600" />
            <div className="absolute inset-x-2 top-1 h-4 rounded-t-full bg-gradient-to-b from-stone-300 to-stone-400" />
          </div>

          {isLit && (
            <div className="absolute bottom-6 flex gap-2">
              {[0, 1, 2].map((i) => (
                <div key={i} className="relative flex flex-col items-center">
                  <div className="absolute -top-16 flex flex-col items-center">
                    {[0, 1, 2, 3].map((j) => (
                      <div
                        key={j}
                        className="smoke-particle h-2 w-2 rounded-full bg-slate-300/60"
                        style={{
                          animation: `smoke 3s ease-out infinite`,
                          animationDelay: `${j * 0.5 + i * 0.2}s`,
                        }}
                      />
                    ))}
                  </div>
                  
                  <div 
                    className="flame mb-0.5 h-3 w-2 rounded-full bg-gradient-to-t from-orange-500 via-yellow-400 to-yellow-200"
                    style={{
                      animation: 'flicker 0.5s ease-in-out infinite alternate',
                      animationDelay: `${i * 0.1}s`,
                    }}
                  />
                  
                  <div 
                    className="h-20 w-0.5 rounded-full bg-gradient-to-b from-red-600 via-red-700 to-amber-800"
                    style={{
                      animation: 'incense-glow 2s ease-in-out infinite',
                      animationDelay: `${i * 0.3}s`,
                    }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <button
          onClick={handleLightIncense}
          disabled={isLit}
          className={`group flex items-center gap-2 rounded-full px-6 py-3 font-semibold transition-all ${
            isLit
              ? 'cursor-default bg-amber-100 text-amber-600'
              : 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg hover:scale-105 hover:shadow-xl active:scale-95'
          }`}
        >
          <Flame className={`h-5 w-5 ${isLit ? '' : 'group-hover:animate-pulse'}`} />
          {isLit ? 'Đã thắp hương' : 'Thắp hương'}
        </button>

        <p className="text-center text-xs text-amber-700">
          <span className="font-bold text-amber-800">{incenseCount}</span> người đã thắp hương tưởng niệm
        </p>

        {isLit && (
          <p className="animate-fade-in text-center text-sm italic text-amber-700">
            "Xin kính cẩn tưởng nhớ Liệt sĩ {graveName}"
          </p>
        )}
      </div>

      <style jsx>{`
        @keyframes smoke {
          0% { opacity: 0.8; transform: translateY(0) translateX(0) scale(1); }
          50% { opacity: 0.4; transform: translateY(-20px) translateX(3px) scale(1.5); }
          100% { opacity: 0; transform: translateY(-40px) translateX(-2px) scale(2); }
        }
        @keyframes flicker {
          0% { transform: scaleY(1) scaleX(1); opacity: 1; }
          100% { transform: scaleY(1.2) scaleX(0.9); opacity: 0.8; }
        }
        @keyframes incense-glow {
          0%, 100% { filter: brightness(1); }
          50% { filter: brightness(1.2); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
