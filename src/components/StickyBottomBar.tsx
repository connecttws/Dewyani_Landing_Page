"use client";

import React, { useState, useEffect } from 'react';
import { Sparkles, Clock, ChevronRight } from 'lucide-react';
import { RupeeSymbol } from './RupeeSymbol';

interface StickyBottomBarProps {
  onOpenBooking: () => void;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({ onOpenBooking }) => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-sky-200/90 p-3 sm:py-3.5 sm:px-6 shadow-2xl transition-all duration-300 animate-slide-up">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex w-10 h-10 rounded-2xl bg-sky-100 border border-sky-200 items-center justify-center text-sky-600">
            <Sparkles className="w-5 h-5 text-amber-500" />
          </div>
          <div className="text-left">
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-bold text-slate-900 line-clamp-1">
                Mastering Diabetes with Dt. Devyani Arbat
              </span>
              <span className="hidden md:inline-flex items-center gap-1 text-[11px] font-bold text-sky-800 bg-sky-100 px-2.5 py-0.5 rounded-full border border-sky-200">
                <Clock className="w-3 h-3 text-sky-600" /> This Sunday, 7 PM IST
              </span>
            </div>
            <p className="text-[11px] text-slate-500 hidden sm:block">
              14 seats remaining • 100% satisfaction guarantee
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden sm:flex flex-col text-right">
            <span className="text-xs font-mono line-through text-slate-400 flex items-center justify-end">
              <RupeeSymbol className="w-2.5 h-2.5 mr-0.5 inline-block" />499
            </span>
            <span className="text-sm font-black text-sky-700 font-mono flex items-center justify-end">
              <RupeeSymbol className="w-3.5 h-3.5 mr-0.5 inline-block" />99
            </span>
          </div>

          <button
            onClick={onOpenBooking}
            className="bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-black text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-md shadow-sky-500/25 active:scale-95 transition-all flex items-center gap-1.5"
          >
            <span>Book Your SEAT Now</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
