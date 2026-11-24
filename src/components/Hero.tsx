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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Main Headline - H1 (Desktop in 2 lines) */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.85rem] font-black text-slate-900 tracking-tight leading-[1.25] max-w-4xl mx-auto drop-shadow-xs">
          <span className="sm:inline-block">Trying Diet &amp; Exercise, But Your Body</span>
          <br className="hidden sm:inline" />
          <span className="sm:inline-block bg-gradient-to-r from-sky-700 via-sky-800 to-slate-900 bg-clip-text text-transparent">{' '}Isn’t Responding?</span>
        </h1>

        {/* Subtitle / Question Line directly after H1 */}
        <h3 className="mt-4 sm:mt-5 text-base sm:text-xl md:text-2xl font-bold text-slate-700 max-w-3xl mx-auto leading-snug sm:leading-relaxed">
          “You&apos;re Busy Taking Care of Your Family, Career and Business... <br className="hidden sm:inline" />
          <span className="text-[#0A2540] font-extrabold">But What About Your Own Health?</span>”
        </h3>

        {/* [VSL VIDEO] - Wistia Video Player (Decreased size in desktop view) */}
        <div className="mt-8 max-w-full sm:max-w-2xl md:max-w-[720px] mx-auto shadow-2xl rounded-2xl overflow-hidden border border-slate-200/80">
          <WistiaPlayer mediaId="hec0u9fos1" />
        </div>

        {/* Exclusive Masterclass Badge */}
        <div className="mt-7">
          <span className="inline-block bg-gradient-to-r from-sky-50 via-sky-100 to-sky-50 border border-sky-300 text-sky-950 font-black text-xs sm:text-sm md:text-base px-5 py-2 rounded-full tracking-wide shadow-xs uppercase">
            “EXCLUSIVE 90-MINUTE RESET &amp; RHYTHM MASTERCLASS”
          </span>
        </div>

        {/* [Book Your SEAT Now] - Primary CTA */}
        <div className="mt-6 max-w-md mx-auto">
          <button
            onClick={onOpenBooking}
            className="w-full bg-[#0A2540] hover:bg-[#133A5E] text-white font-extrabold text-lg sm:text-xl py-4 px-8 rounded-xl shadow-xl shadow-slate-900/25 hover:shadow-2xl transition-all active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Book Your SEAT Now</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* Micro details */}
          <div className="mt-3 flex items-center justify-center gap-3 sm:gap-4 text-xs text-slate-600 font-semibold">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#0A2540]" /> 3 December, 7:00 PM IST
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
