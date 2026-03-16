'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

interface BackgroundMusicProps {
  src?: string;
}

export function BackgroundMusic({ src = '/sounds/memorial-music.mp3' }: BackgroundMusicProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [showControls, setShowControls] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.loop = true;
    }
  }, [volume]);

  // Auto-play khi người dùng click bất kỳ đâu trên trang
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
          setShowPrompt(false);
        }).catch(() => {
          // Autoplay vẫn bị chặn
        });
      }
      document.removeEventListener('click', handleFirstInteraction);
    };

    document.addEventListener('click', handleFirstInteraction);
    return () => document.removeEventListener('click', handleFirstInteraction);
  }, [isPlaying]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
          setShowPrompt(false);
        }).catch(() => {});
      }
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <>
      <audio ref={audioRef} src={src} preload="auto" />
      
      {/* Prompt nhắc nhở click để phát nhạc */}
      {showPrompt && !isPlaying && (
        <div className="fixed bottom-20 right-4 z-50 animate-bounce">
          <div className="rounded-xl bg-amber-500 px-4 py-2 text-sm font-medium text-white shadow-lg">
            👆 Click để phát nhạc tưởng niệm
          </div>
        </div>
      )}
      
      <div className="fixed bottom-4 right-4 z-50">
        <div 
          className="relative"
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
        >
          {/* Expanded Controls */}
          {showControls && (
            <div className="absolute bottom-full right-0 mb-2 w-52 rounded-xl border border-slate-200 bg-white/95 p-3 shadow-xl backdrop-blur-sm animate-in fade-in slide-in-from-bottom-2 duration-200">
              <div className="mb-2 flex items-center gap-2 text-xs font-medium text-slate-600">
                <Music className="h-3 w-3" />
                Mùa Hoa Đỏ - Trọng Tấn
              </div>
              
              <div className="flex items-center gap-2">
                <VolumeX className="h-4 w-4 text-slate-400" />
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="h-1 flex-1 cursor-pointer appearance-none rounded-full bg-slate-200 accent-amber-500"
                />
                <Volume2 className="h-4 w-4 text-slate-400" />
              </div>
              
              <p className="mt-2 text-center text-[10px] text-slate-400">
                Âm lượng: {Math.round(volume * 100)}%
              </p>
            </div>
          )}

          {/* Main Button */}
          <button
            onClick={togglePlay}
            className={`group flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-all hover:scale-105 ${
              isPlaying 
                ? 'bg-gradient-to-br from-amber-400 to-orange-500 text-white' 
                : 'bg-white/90 text-slate-600 hover:bg-white ring-2 ring-amber-400 ring-offset-2'
            }`}
            title={isPlaying ? 'Tắt nhạc' : 'Bật nhạc tưởng niệm'}
          >
            {isPlaying ? (
              <div className="relative">
                <Volume2 className="h-5 w-5" />
                {/* Sound waves animation */}
                <div className="absolute -right-1 top-1/2 flex -translate-y-1/2 gap-0.5">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="h-3 w-0.5 rounded-full bg-white/80"
                      style={{
                        animation: 'soundwave 1s ease-in-out infinite',
                        animationDelay: `${i * 0.15}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <VolumeX className="h-5 w-5 animate-pulse" />
            )}
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes soundwave {
          0%, 100% {
            transform: scaleY(0.5);
          }
          50% {
            transform: scaleY(1);
          }
        }
      `}</style>
    </>
  );
}
