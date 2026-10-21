"use client";

import React, { useState, useEffect } from 'react';
import { VslPlayer } from './VslPlayer';
import { RupeeSymbol } from './RupeeSymbol';
import { Sparkles, Calendar, Clock, CheckCircle2, Shield, HeartPulse, Flame, Star, ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onOpenAssessment: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking, onOpenAssessment }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 8,
    minutes: 42,
    seconds: 19,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 12, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden bg-gradient-to-b from-sky-50/80 via-white to-sky-50/40">
      {/* Background ambient light blue radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-sky-300/20 via-blue-200/10 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Kicker Badge in Light Blue */}
        <div className="inline-flex items-center gap-2 bg-sky-100/90 border border-sky-300/80 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold text-sky-800 shadow-xs mb-6">
          <Flame className="w-4 h-4 text-sky-600" />
          <span>Exclusive 90-Minute Masterclass by Dt. Devyani Arbat</span>
        </div>

        {/* Main H1 - Exact text from PDF Page 1 */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 max-w-4xl mx-auto leading-[1.15]">
          Mastering Diabetes:{' '}
          <span className="bg-gradient-to-r from-sky-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent">
            A Practical Guide
          </span>{' '}
          to Healthy Living
        </h1>

        {/* Sub-headline description */}
        <p className="mt-4 sm:mt-6 text-base sm:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
          Break free from fluctuating blood sugar, brain fog, and relentless diet myths. Discover how targeted nutrition,
          metabolic reset, and daily micro-habits restore cellular health.
        </p>

        {/* Three Core Guarantees - Exact items from PDF Page 1 */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm font-semibold text-slate-700">
          <div className="flex items-center gap-1.5 bg-white border border-sky-200 px-3.5 py-1.5 rounded-full shadow-xs">
            <CheckCircle2 className="w-4 h-4 text-sky-600" />
            <span>Personalised guidance</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white border border-sky-200 px-3.5 py-1.5 rounded-full shadow-xs">
            <CheckCircle2 className="w-4 h-4 text-sky-600" />
            <span>Practical nutrition advice</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white border border-sky-200 px-3.5 py-1.5 rounded-full shadow-xs">
            <CheckCircle2 className="w-4 h-4 text-sky-600" />
            <span>Individual attention</span>
          </div>
        </div>

        {/* VSL Video Container */}
        <div className="mt-10 mb-10">
          <VslPlayer onOpenBooking={onOpenBooking} />
        </div>

        {/* Primary CTA Box & Urgency Countdown in Light Blue / Crisp White */}
        <div className="max-w-2xl mx-auto bg-white/95 border border-sky-200 rounded-3xl p-6 sm:p-8 shadow-xl shadow-sky-900/5">
          {/* Countdown timer */}
          <div className="flex items-center justify-center gap-3 sm:gap-5 mb-5 text-center">
            <div className="flex flex-col items-center">
              <span className="font-mono text-2xl sm:text-3xl font-black text-sky-700 bg-sky-50 px-3 py-1.5 rounded-xl border border-sky-200">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-slate-500 mt-1 font-bold">Hours</span>
            </div>
            <span className="text-xl font-bold text-sky-300">:</span>
            <div className="flex flex-col items-center">
              <span className="font-mono text-2xl sm:text-3xl font-black text-sky-700 bg-sky-50 px-3 py-1.5 rounded-xl border border-sky-200">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-slate-500 mt-1 font-bold">Mins</span>
            </div>
            <span className="text-xl font-bold text-sky-300">:</span>
            <div className="flex flex-col items-center">
              <span className="font-mono text-2xl sm:text-3xl font-black text-sky-700 bg-sky-50 px-3 py-1.5 rounded-xl border border-sky-200">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-slate-500 mt-1 font-bold">Secs</span>
            </div>
          </div>

          {/* Seat remaining progress indicator */}
          <div className="mb-6">
            <div className="flex justify-between text-xs font-semibold mb-1.5">
              <span className="text-sky-900 flex items-center gap-1 font-bold">
                <Clock className="w-3.5 h-3.5 text-sky-600" /> Fast Filling: 36 of 50 Seats Claimed
              </span>
              <span className="text-sky-700 font-extrabold">14 Seats Left</span>
            </div>
            <div className="w-full bg-sky-100 h-2.5 rounded-full overflow-hidden p-0.5 border border-sky-200">
              <div
                className="bg-gradient-to-r from-sky-400 via-cyan-500 to-blue-600 h-full rounded-full transition-all duration-500"
                style={{ width: '72%' }}
              ></div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto flex-1 group relative overflow-hidden rounded-xl bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-black text-lg px-8 py-4 shadow-lg shadow-sky-500/25 active:scale-98 transition-all"
            >
              <span className="flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-200" />
                Book Your SEAT Now
              </span>
              <span className="flex items-center justify-center gap-1 text-xs font-semibold text-sky-100 mt-0.5">
                Special Access Fee: <RupeeSymbol className="w-3 h-3 inline-block" />99 Only (Includes Recording & Meal Blueprint)
              </span>
            </button>

            <button
              onClick={onOpenAssessment}
              className="w-full sm:w-auto px-5 py-4 rounded-xl bg-sky-50 hover:bg-sky-100 border border-sky-200 text-sky-900 text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-xs"
            >
              <HeartPulse className="w-4 h-4 text-sky-600" />
              <span>Free 60-Sec Sugar Risk Quiz</span>
            </button>
          </div>

          {/* Guarantee microcopy */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500">
            <span className="flex items-center gap-1 font-medium">
              <Shield className="w-3.5 h-3.5 text-sky-600" /> 100% Refund if not fully satisfied
            </span>
            <span>•</span>
            <span>Live Zoom access link sent to WhatsApp</span>
            <span>•</span>
            <span className="flex items-center gap-1 font-medium">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" /> 4.9/5 Rating
            </span>
          </div>
        </div>

        {/* Jump anchor */}
        <div className="mt-12 text-slate-400 flex flex-col items-center gap-1">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Explore The Blueprint</span>
          <a href="#struggles" aria-label="Scroll down to challenges section">
            <ChevronDown className="w-5 h-5 text-sky-600 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
