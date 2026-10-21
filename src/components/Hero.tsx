"use client";

import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Shield, Clock, Users, ArrowRight } from 'lucide-react';
import { RupeeSymbol } from './RupeeSymbol';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  return (
    <section className="pt-8 pb-14 sm:pt-12 sm:pb-20 bg-gradient-to-b from-sky-50/60 via-white to-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Main Headline - Exact from PDF Page 1 */}
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
          Mastering Diabetes: A Practical Guide to Healthy Living
        </h1>

        {/* [VSL VIDEO] - Centerpiece Video Player */}
        <div className="mt-8 rounded-2xl overflow-hidden bg-slate-950 border-2 border-slate-200 shadow-xl relative aspect-video group">
          {/* Video Thumbnail Background */}
          <div
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
              isPlaying ? 'opacity-85' : 'opacity-95'
            }`}
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80')`,
            }}
          >
            <div className="absolute inset-0 bg-slate-950/40"></div>
          </div>

          {/* Video Top Banner */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-xs text-white z-10">
            <span className="bg-slate-900/80 backdrop-blur-xs px-2.5 py-1 rounded-md font-semibold border border-slate-700 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
              Webinar Preview
            </span>
            <span className="bg-slate-900/80 backdrop-blur-xs px-2.5 py-1 rounded-md font-medium text-slate-300 hidden sm:inline-flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-sky-400" /> Dt. Devyani Arbat
            </span>
          </div>

          {/* Center Play Button */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center p-4">
            {!isPlaying ? (
              <div className="flex flex-col items-center">
                <button
                  onClick={() => setIsPlaying(true)}
                  aria-label="Play webinar video"
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-sky-600 hover:bg-sky-500 text-white flex items-center justify-center shadow-2xl shadow-sky-600/50 hover:scale-105 active:scale-95 transition-all"
                >
                  <Play className="w-8 h-8 ml-1 fill-current" />
                </button>
                <div className="mt-4 bg-slate-950/85 backdrop-blur-xs py-1.5 px-4 rounded-lg border border-slate-800 text-xs sm:text-sm font-semibold text-white">
                  Click to Watch Masterclass Introduction
                </div>
              </div>
            ) : (
              <div className="bg-slate-950/90 p-4 rounded-xl text-white text-xs sm:text-sm max-w-md border border-slate-800">
                <p className="font-semibold text-sky-400 mb-1">Dt. Devyani Arbat:</p>
                <p className="text-slate-200">
                  "Understanding what drives blood sugar and insulin resistance is the first step toward lasting health. In this session, we examine practical, daily nutrition without starvation."
                </p>
                <div className="mt-3 flex items-center justify-between pt-2 border-t border-slate-800">
                  <button
                    onClick={() => setIsPlaying(false)}
                    className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
                  >
                    <Pause className="w-3.5 h-3.5" /> Pause
                  </button>
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
                  >
                    {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                    {isMuted ? 'Unmute' : 'Mute'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Subtext - Exact bullets from PDF Page 1 */}
        <p className="mt-6 text-base sm:text-lg font-semibold text-slate-700">
          Personalised guidance &bull; Practical nutrition advice &bull; Individual attention
        </p>

        {/* [Book Your SEAT Now] - Primary CTA */}
        <div className="mt-6 max-w-md mx-auto">
          <button
            onClick={onOpenBooking}
            className="w-full bg-sky-600 hover:bg-sky-700 text-white font-extrabold text-lg sm:text-xl py-4 px-8 rounded-xl shadow-lg shadow-sky-600/30 hover:shadow-xl transition-all active:scale-98 flex items-center justify-center gap-2"
          >
            <span>Book Your SEAT Now</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* Micro details */}
          <div className="mt-3 flex items-center justify-center gap-4 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-sky-600" /> Sunday, 7:00 PM IST
            </span>
            <span>•</span>
            <span>Fee: <RupeeSymbol className="w-3 h-3 inline-block" />99 Only</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Shield className="w-3.5 h-3.5 text-emerald-600" /> 100% Satisfaction Guarantee
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
