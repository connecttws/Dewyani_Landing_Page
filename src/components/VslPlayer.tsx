"use client";

import React, { useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Users, Award } from 'lucide-react';

interface VslPlayerProps {
  onOpenBooking: () => void;
}

const CHAPTERS = [
  { time: 0, label: 'Root Cause of High Blood Sugar' },
  { time: 135, label: 'Why Starvation Diets Make Diabetes Worse' },
  { time: 340, label: '3 Simple Food Swaps for Morning Fasting Sugar' },
  { time: 550, label: 'The 5-Pillar Metabolic Reset Blueprint' },
];

export const VslPlayer: React.FC<VslPlayerProps> = ({ onOpenBooking }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(45);
  const totalDuration = 765; // 12 mins 45 secs
  const [activeChapter, setActiveChapter] = useState<number>(0);
  const [showCaptions, setShowCaptions] = useState<boolean>(true);

  // Timer simulation for playback
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= totalDuration) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying]);

  useEffect(() => {
    const idx = CHAPTERS.findLastIndex((c) => currentTime >= c.time);
    if (idx !== -1) setActiveChapter(idx);
  }, [currentTime]);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTime(Number(e.target.value));
  };

  return (
    <div className="w-full max-w-4xl mx-auto rounded-3xl overflow-hidden bg-slate-900 border-2 border-sky-200 shadow-2xl shadow-sky-950/20 transition-all">
      {/* Video Container */}
      <div className="relative aspect-video bg-slate-950 overflow-hidden flex items-center justify-center group">
        {/* Background Image */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
            isPlaying ? 'opacity-85' : 'opacity-95'
          }`}
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1600&q=80')`,
          }}
        >
          {/* Medical light-navy tint overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-sky-950/30 backdrop-blur-[1px]"></div>
        </div>

        {/* Presenter & Title Card Overlay */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 pointer-events-none">
          <div className="flex items-center gap-2 bg-slate-950/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-sky-400/40 text-xs">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
            <span className="font-bold text-rose-300 uppercase tracking-wide">Special Preview</span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-200 font-medium truncate max-w-[180px] sm:max-w-xs">
              Dt. Devyani Arbat • Metabolic Reset
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2 bg-slate-950/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-sky-500/30 text-xs text-sky-300">
            <Users className="w-3.5 h-3.5 text-sky-400" />
            <span>1,420+ attended</span>
          </div>
        </div>

        {/* Center Play Button & Captions */}
        <div className="relative z-10 max-w-lg mx-auto text-center px-4">
          {!isPlaying ? (
            <div className="flex flex-col items-center">
              <button
                onClick={() => setIsPlaying(true)}
                aria-label="Play webinar preview video"
                className="relative group/play flex items-center justify-center w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-gradient-to-tr from-sky-500 via-sky-400 to-cyan-300 text-slate-950 shadow-2xl shadow-sky-400/50 hover:scale-110 active:scale-95 transition-all duration-300"
              >
                <div className="absolute -inset-2 rounded-full bg-sky-400/25 animate-ping"></div>
                <Play className="w-7 h-7 sm:w-9 sm:h-9 ml-1 text-slate-950 fill-slate-950" />
              </button>
              <div className="mt-3.5 bg-slate-950/90 backdrop-blur-md py-2 px-4 rounded-xl border border-sky-400/40">
                <p className="text-xs sm:text-sm font-bold text-white">Click to Watch 12-Min Masterclass Preview</p>
                <p className="text-[11px] sm:text-xs text-sky-300 font-mono mt-0.5">
                  "How to manage blood sugar without sacrificing whole meals"
                </p>
              </div>
            </div>
          ) : (
            <div className="pointer-events-none">
              {showCaptions && (
                <div className="bg-slate-950/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-sky-400/40 text-xs sm:text-sm text-sky-100 inline-block shadow-lg">
                  <span className="text-sky-400 font-bold mr-1">Dt. Devyani Arbat:</span>
                  {currentTime < 135
                    ? '"High blood sugar is not an incurable destiny; it is cellular resistance to insulin caused by metabolic stress."'
                    : currentTime < 340
                    ? '"Extreme starving diets cause intense cortisol spikes, which ironically trigger the liver to dump even more glucose."'
                    : currentTime < 550
                    ? '"By changing food pairing order and optimizing gut flora, post-meal glucose spikes drop by up to 38%."'
                    : '"The 5 Pillars create a sustainable metabolic environment where your body heals naturally."'}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Video Bottom Player Controls */}
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent p-4 pt-10 z-20">
          {/* Timeline Bar */}
          <div className="flex flex-col gap-1.5">
            <input
              type="range"
              min="0"
              max={totalDuration}
              value={currentTime}
              onChange={handleSeek}
              aria-label="Seek video progress"
              className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-sky-400"
            />
            <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
              <span>{formatTime(currentTime)}</span>
              <span className="text-sky-300 font-sans font-medium hidden sm:inline">
                {CHAPTERS[activeChapter]?.label}
              </span>
              <span>{formatTime(totalDuration)}</span>
            </div>
          </div>

          {/* Control Buttons */}
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
                className="w-9 h-9 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 flex items-center justify-center font-bold transition-colors"
              >
                {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
              </button>

              <button
                onClick={() => setIsMuted(!isMuted)}
                aria-label={isMuted ? 'Unmute' : 'Mute'}
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>

              <button
                onClick={() => setShowCaptions(!showCaptions)}
                className={`text-xs px-2.5 py-1 rounded-md font-medium border transition-colors ${
                  showCaptions
                    ? 'bg-sky-950/80 text-sky-200 border-sky-400/40'
                    : 'bg-slate-800/80 text-slate-400 border-slate-700'
                }`}
              >
                CC {showCaptions ? 'ON' : 'OFF'}
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onOpenBooking}
                className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs sm:text-sm px-3.5 py-1.5 rounded-lg shadow-md transition-colors"
              >
                Book Live Seat
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Chapters Strip Below Video */}
      <div className="bg-slate-950 border-t border-slate-800 p-3 sm:p-4">
        <p className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-2 flex items-center gap-1.5">
          <Award className="w-3.5 h-3.5 text-sky-400" />
          Key Segments Covered in this Masterclass
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {CHAPTERS.map((ch, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentTime(ch.time);
                setIsPlaying(true);
              }}
              className={`text-left p-2 rounded-xl text-xs transition-all border ${
                activeChapter === idx
                  ? 'bg-sky-950/80 border-sky-400 text-sky-200'
                  : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              <div className="font-mono text-[10px] text-sky-400 mb-0.5">{formatTime(ch.time)}</div>
              <div className="font-semibold line-clamp-1">{ch.label}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
