"use client";

import React from 'react';
import { Calendar, Clock, ChevronRight, Sparkles } from 'lucide-react';
import { RupeeSymbol } from './RupeeSymbol';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs">
      {/* 1. Top Urgency Announcement Bar */}
      <div className="bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white py-1.5 sm:py-2 px-3 sm:px-6 border-b border-sky-900/30">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-2 text-xs">
          {/* Live webinar status badge */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 min-w-0">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span className="font-extrabold tracking-wider text-[10px] sm:text-xs text-emerald-400 uppercase whitespace-nowrap">
              LIVE WEBINAR
            </span>
            <span className="text-white/30 hidden xs:inline">•</span>
            <span className="text-[10px] sm:text-xs font-medium text-slate-200 truncate flex items-center gap-1">
              <Calendar className="w-3 h-3 text-sky-400 shrink-0 hidden xs:inline" />
              <span>This Sunday, 7:00 PM IST</span>
            </span>
          </div>

          {/* Urgency Pill & Quick Reserve CTA */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <span className="hidden md:inline-flex items-center gap-1 text-[11px] font-semibold text-amber-300 bg-amber-400/15 px-2 py-0.5 rounded-full border border-amber-400/25">
              <Clock className="w-3 h-3 text-amber-300" /> Limited to 50 Seats
            </span>
            <button
              onClick={onOpenBooking}
              className="bg-amber-400 hover:bg-amber-300 active:scale-95 text-slate-950 font-black text-[10px] sm:text-xs px-2.5 py-1 rounded-md transition-all shadow-xs flex items-center gap-0.5 cursor-pointer whitespace-nowrap"
            >
              <span>Book Now</span>
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="max-w-6xl mx-auto px-3 sm:px-6 py-2.5 sm:py-3.5 flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand Lockup: Responsive Card Emblem */}
        <a href="#" className="flex items-center focus:outline-none group shrink min-w-0" aria-label="Metabolic Academy Home">
          <div className="bg-[#10372b] hover:bg-[#0c2c22] transition-all text-white p-1.5 sm:py-2 sm:px-3.5 rounded-xl flex items-center gap-2 sm:gap-3 shadow-xs border border-[#1b4d3e]/90 group-hover:border-emerald-500/40">
            {/* White round badge with green leaf */}
            <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white flex items-center justify-center shrink-0 shadow-2xs">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#10372b"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 sm:w-5 sm:h-5"
              >
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
              </svg>
            </div>

            <div className="flex flex-col text-left truncate">
              <span className="font-extrabold text-xs sm:text-sm lg:text-base tracking-wide uppercase text-white font-sans truncate leading-tight">
                METABOLIC ACADEMY
              </span>
              <span className="text-[8px] sm:text-[10px] font-semibold text-emerald-300 tracking-tight truncate leading-tight mt-0.5">
                Personalised Nutrition & Wellness
              </span>
            </div>
          </div>
        </a>

        {/* Center: Desktop Navigation Anchor Links */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-xs xl:text-sm font-bold text-slate-600">
          <a href="#struggles" className="hover:text-sky-600 transition-colors">
            Challenges
          </a>
          <a href="#curriculum" className="hover:text-sky-600 transition-colors">
            Curriculum
          </a>
          <a href="#complications" className="hover:text-sky-600 transition-colors">
            Health Risks
          </a>
          <a href="#pillars" className="hover:text-sky-600 transition-colors">
            5 Pillars
          </a>
          <a href="#doctor" className="hover:text-sky-600 transition-colors">
            Meet Dt. Dewyani
          </a>
          <a href="#faqs" className="hover:text-sky-600 transition-colors">
            FAQs
          </a>
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onOpenBooking}
            className="bg-gradient-to-r from-sky-600 via-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 active:scale-95 text-white font-extrabold text-xs sm:text-sm px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg sm:rounded-xl shadow-md shadow-sky-600/20 transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300 hidden sm:inline-block" />
            <span className="hidden sm:inline">Book Your Seat</span>
            <span className="sm:hidden">Book Seat</span>
            <span className="bg-sky-800/80 text-[10px] sm:text-xs px-1.5 py-0.5 rounded font-mono font-bold text-sky-100">
              <RupeeSymbol className="w-2.5 h-2.5 sm:w-3 sm:h-3 inline-block -mt-0.5" />99
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
