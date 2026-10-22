"use client";

import React from 'react';
import { Sparkles, Calendar, Clock, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/95 border-b border-sky-100/80 transition-all shadow-xs">
      {/* Top Urgency Announcement Bar in Light Blue Shade */}
      <div className="bg-gradient-to-r from-sky-100 via-blue-50 to-sky-100 border-b border-sky-200/80 text-xs sm:text-sm py-2 px-4 text-center">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-slate-700">
          <span className="inline-flex items-center gap-1.5 font-bold text-sky-800 bg-sky-200/60 px-2 py-0.5 rounded-full text-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-600"></span>
            </span>
            LIVE Educational Webinar
          </span>
          <span className="hidden sm:inline text-sky-300">•</span>
          <span className="inline-flex items-center gap-1 text-slate-700 font-medium">
            <Calendar className="w-3.5 h-3.5 text-sky-600" />
            This Sunday, 7:00 PM IST
          </span>
          <span className="hidden md:inline text-sky-300">•</span>
          <span className="inline-flex items-center gap-1 font-semibold text-blue-900">
            <Clock className="w-3.5 h-3.5 text-blue-600" />
            Limited to 50 Seats Only
          </span>
          <button
            onClick={onOpenBooking}
            className="ml-1 inline-flex items-center gap-0.5 text-xs font-bold text-white bg-sky-600 hover:bg-sky-500 px-2.5 py-0.5 rounded-full transition-colors shadow-xs"
          >
            Claim Seat <ChevronRight className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo - Designed per PDF Page 1 */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-sky-400 rounded-lg p-1">
          <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-sky-400 via-cyan-500 to-blue-600 shadow-md shadow-sky-500/20 border border-sky-300 group-hover:scale-105 transition-transform">
            {/* Custom stylized metabolic leaf & wellness icon */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 text-white"
            >
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
              <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
            </svg>
            <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-amber-400 rounded-full border-2 border-white flex items-center justify-center">
              <span className="w-1.5 h-1.5 bg-amber-600 rounded-full"></span>
            </div>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors">
              METABOLIC ACADEMY
            </span>
            <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-sky-600 -mt-0.5">
              Personalised Nutrition & Wellness
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-600">
          <a href="#struggles" className="hover:text-sky-600 transition-colors">
            Challenges
          </a>
          <a href="#curriculum" className="hover:text-sky-600 transition-colors">
            What You'll Learn
          </a>
          <a href="#complications" className="hover:text-sky-600 transition-colors">
            Health Risks
          </a>
          <a href="#pillars" className="hover:text-sky-600 transition-colors">
            5 Pillars
          </a>
          <a href="#expert" className="hover:text-sky-600 transition-colors">
            Meet Dt. Devyani
          </a>
          <a href="#faqs" className="hover:text-sky-600 transition-colors">
            FAQs
          </a>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenBooking}
            className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-sm px-4 sm:px-5 py-2.5 shadow-md shadow-sky-500/20 active:scale-95 transition-all flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-amber-200 group-hover:rotate-12 transition-transform" />
            <span>Book Your Seat</span>
          </button>
        </div>
      </div>
    </header>
  );
};
