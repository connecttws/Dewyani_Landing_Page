"use client";

import React, { useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, ShieldCheck, CheckCircle2, Clock, Sparkles } from 'lucide-react';

interface ThankYouVideoProps {
  attendeeName?: string;
}

const VIDEO_HIGHLIGHTS = [
  { time: 0, text: "Welcome & confirmation from Dt. Devyani Arbat" },
  { time: 35, text: "Why joining the WhatsApp group is mandatory for Zoom link" },
  { time: 70, text: "What to prepare: HbA1c reports & meal action sheet" },
  { time: 105, text: "Live Q&A guidelines to ask your questions directly" },
];

export const ThankYouVideo: React.FC<ThankYouVideoProps> = ({ attendeeName }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const totalDuration = 135; // 2 mins 15 secs
  const [activeSegment, setActiveSegment] = useState<number>(0);

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
    const idx = VIDEO_HIGHLIGHTS.findLastIndex((item) => currentTime >= item.time);
    if (idx !== -1) setActiveSegment(idx);
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
    <div className="w-full max-w-3xl mx-auto rounded-3xl overflow-hidden bg-slate-950 border-2 border-sky-400/40 shadow-2xl shadow-sky-950/20 text-white">
      {/* Video Viewport */}
      <div className="relative aspect-video bg-slate-950 overflow-hidden flex items-center justify-center group">
        {/* Poster / Video Background */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ${
            isPlaying ? 'opacity-80 scale-102' : 'opacity-90 scale-100'
          }`}
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80')`,
          }}
        >
          {/* Tint overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-sky-950/40"></div>
        </div>

        {/* Video Top Bar Badge */}
        <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between z-20 pointer-events-none">
          <div className="flex items-center gap-2 bg-slate-950/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-sky-400/30 text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-bold text-sky-300 uppercase tracking-wide text-[11px] sm:text-xs">
              Next Steps Video
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-200 font-semibold truncate max-w-[160px] sm:max-w-none text-[11px] sm:text-xs">
              Dt. Devyani Arbat
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 bg-slate-950/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-700 text-xs text-slate-300">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>2 Mins Orientation</span>
          </div>
        </div>

        {/* Center Play Button & Captions */}
        <div className="relative z-10 max-w-md mx-auto text-center px-4">
          {!isPlaying ? (
            <div className="flex flex-col items-center">
              <button
                onClick={() => setIsPlaying(true)}
                aria-label="Play next steps webinar video"
                className="relative group/btn flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-sky-500 via-sky-400 to-cyan-300 text-slate-950 shadow-2xl shadow-sky-500/50 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <div className="absolute -inset-2 rounded-full bg-sky-400/30 animate-ping"></div>
                <Play className="w-7 h-7 sm:w-8 sm:h-8 ml-1 text-slate-950 fill-slate-950" />
              </button>
              <div className="mt-4 bg-slate-950/90 backdrop-blur-md py-2 px-4 rounded-xl border border-sky-400/40 shadow-lg">
                <p className="text-xs sm:text-sm font-bold text-white flex items-center justify-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>Click to Watch Quick Orientation Video</span>
                </p>
                <p className="text-[11px] text-sky-200 mt-0.5">
                  Essential instructions for {attendeeName ? attendeeName : "registered participants"}
                </p>
              </div>
            </div>
          ) : (
            <div className="pointer-events-none">
              <div className="bg-slate-950/90 backdrop-blur-md px-4 py-3 rounded-2xl border border-sky-400/40 text-xs sm:text-sm text-sky-100 inline-block shadow-xl max-w-md">
                <span className="text-sky-400 font-bold block mb-1">Dt. Devyani Arbat:</span>
                <p className="leading-relaxed">
                  {currentTime < 35
                    ? `"Congratulations on taking the first step towards reversing insulin resistance! Please make sure to join our WhatsApp group so you get the private Zoom link on time."`
                    : currentTime < 70
                    ? `"The Zoom link is shared exclusively inside the WhatsApp group 1 hour before the session to prevent automated bots and room overload."`
                    : currentTime < 105
                    ? `"Keep your latest blood glucose and HbA1c tests nearby during the masterclass. We will analyze real-world case studies together."`
                    : `"Have a pen and notebook ready. I look forward to meeting you live this Sunday!"`}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Video Bottom Player Controls */}
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent p-3 sm:p-4 pt-8 z-20">
          {/* Timeline Bar */}
          <div className="flex flex-col gap-1">
            <input
              type="range"
              min="0"
              max={totalDuration}
              value={currentTime}
              onChange={handleSeek}
              aria-label="Seek video"
              className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-sky-400"
            />
            <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-slate-400 font-mono">
              <span>{formatTime(currentTime)}</span>
              <span className="text-sky-300 font-sans font-medium hidden sm:inline truncate max-w-[280px]">
                {VIDEO_HIGHLIGHTS[activeSegment]?.text}
              </span>
              <span>{formatTime(totalDuration)}</span>
            </div>
          </div>

          {/* Controls Bar */}
          <div className="flex items-center justify-between mt-2.5">
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
                className="w-8 h-8 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 flex items-center justify-center font-bold transition-colors cursor-pointer"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current ml-0.5" />}
              </button>

              <button
                onClick={() => setIsMuted(!isMuted)}
                aria-label={isMuted ? 'Unmute' : 'Mute'}
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors cursor-pointer"
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
              </button>
            </div>

            <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-1 rounded-md">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Official Orientation</span>
            </div>
          </div>
        </div>
      </div>

      {/* Checklist / Key Takeaways Below Video */}
      <div className="bg-slate-900 border-t border-slate-800 p-3 sm:p-4">
        <p className="text-[11px] sm:text-xs font-bold text-sky-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
          <span>3 Important Instructions from Dt. Devyani</span>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-slate-300">
          <div className="bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
            <span className="font-bold text-white block mb-0.5">1. Join 10 Mins Early</span>
            <span className="text-slate-400 text-[11px]">Zoom seats are limited to first 100 logins.</span>
          </div>
          <div className="bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
            <span className="font-bold text-white block mb-0.5">2. Keep Reports Ready</span>
            <span className="text-slate-400 text-[11px]">Have your recent fasting sugar / HbA1c handy.</span>
          </div>
          <div className="bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
            <span className="font-bold text-white block mb-0.5">3. WhatsApp Access</span>
            <span className="text-slate-400 text-[11px]">Zoom link is sent inside the group 1 hr prior.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
