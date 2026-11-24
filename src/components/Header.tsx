"use client";

import React from 'react';
import { Calendar, Clock, ChevronRight, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs">
      {/* 1. Top Urgency Announcement Bar (Enlarged & Prominently Highlighted) */}
      <div className="bg-gradient-to-r from-slate-950 via-[#0A2540] to-slate-950 text-white py-2.5 sm:py-3.5 px-3 sm:px-6 border-b border-sky-500/20 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-2.5 sm:gap-4 text-xs sm:text-sm">
          {/* Live webinar status badge & Highlighted Date */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-wrap">
            <span className="inline-flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 px-2 sm:px-2.5 py-1 rounded-full font-black tracking-wider text-[10px] sm:text-xs uppercase shrink-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              LIVE WEBINAR
            </span>

            <span className="inline-flex items-center gap-1.5 bg-amber-400 text-slate-950 font-black px-3 py-1 rounded-full text-xs sm:text-sm shadow-sm shrink-0">
              <Calendar className="w-3.5 h-3.5 text-slate-950 shrink-0" />
              <span>3 December, 7:00 PM IST</span>
            </span>
          </div>

          {/* Urgency Pill & Quick Reserve CTA */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <span className="hidden md:inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 bg-amber-400/15 px-3 py-1 rounded-full border border-amber-400/30">
              <Clock className="w-3.5 h-3.5 text-amber-300" /> Limited to 50 Seats
            </span>
            <button
              onClick={onOpenBooking}
              className="bg-amber-400 hover:bg-amber-300 active:scale-95 text-slate-950 font-black text-xs sm:text-sm px-3.5 py-1.5 rounded-lg transition-all shadow-sm flex items-center gap-1 cursor-pointer whitespace-nowrap"
            >
              <span>Book Now</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="max-w-6xl mx-auto px-3 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand identity - Official Blue Logo */}
        <a href="#" className="flex items-center gap-2 focus:outline-none shrink-0" aria-label="Metabolic Academy Home">
          <img
            src="/blue-logo.png"
            alt="Metabolic Academy Logo"
            className="h-9 sm:h-11 w-auto object-contain"
          />
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
          <a href="#client-stories" className="hover:text-sky-600 transition-colors">
            Success Stories
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
            className="bg-[#0A2540] hover:bg-[#133A5E] active:scale-95 text-white font-extrabold text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg sm:rounded-xl shadow-md shadow-slate-900/20 transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300 hidden sm:inline-block" />
            <span className="hidden sm:inline">Book Your Seat</span>
            <span className="sm:hidden">Book Seat</span>
          </button>
        </div>
      </div>
    </header>
  );
};
