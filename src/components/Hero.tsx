"use client";

import React from 'react';
import { Shield, Clock, ArrowRight } from 'lucide-react';
import { WistiaPlayer } from '@/components/WistiaPlayer';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="pt-8 pb-14 sm:pt-12 sm:pb-20 bg-gradient-to-b from-sky-50/60 via-white to-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Main Headline - H1 */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
          Trying Diet &amp; Exercise,
          <br className="hidden sm:inline" />
          {' '}But Your Body Isn’t Responding?
        </h1>

        {/* [VSL VIDEO] - Wistia Video Player */}
        <div className="mt-8">
          <WistiaPlayer mediaId="hec0u9fos1" />
        </div>

        {/* Subtext - Exact bullets from PDF Page 1 */}
        <p className="mt-6 text-base sm:text-lg font-semibold text-slate-700">
          Personalised guidance &bull; Practical nutrition advice &bull; Individual attention
        </p>

        {/* [Book Your SEAT Now] - Primary CTA */}
        <div className="mt-6 max-w-md mx-auto">
          <button
            onClick={onOpenBooking}
            className="w-full bg-sky-600 hover:bg-sky-700 text-white font-extrabold text-lg sm:text-xl py-4 px-8 rounded-xl shadow-lg shadow-sky-600/30 hover:shadow-xl transition-all active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Book Your SEAT Now</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* Micro details */}
          <div className="mt-3 flex items-center justify-center gap-3 sm:gap-4 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-sky-600" /> Sunday, 7:00 PM IST
            </span>
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
