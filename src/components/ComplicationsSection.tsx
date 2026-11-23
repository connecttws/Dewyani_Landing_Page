"use client";

import React, { useRef, useState } from 'react';
import { Heart, Activity, Eye, Zap, Bandage, AlertCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const COMPLICATIONS_LIST = [
  {
    title: 'Heart Health',
    detail: 'Uncontrolled diabetes increases the risk of heart disease and stroke.',
    icon: Heart,
    iconColor: 'text-rose-600',
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-100',
  },
  {
    title: 'Kidney Damage',
    detail: 'Persistently high blood sugar can damage the kidneys over time.',
    icon: Activity,
    iconColor: 'text-amber-600',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-100',
  },
  {
    title: 'Vision Problems',
    detail: 'Diabetes can damage the blood vessels in your eyes and affect your vision.',
    icon: Eye,
    iconColor: 'text-sky-600',
    bgColor: 'bg-sky-50',
    borderColor: 'border-sky-100',
  },
  {
    title: 'Nerve Damage',
    detail: 'High blood sugar can cause nerve damage, tingling, numbness, or pain, especially in the feet.',
    icon: Zap,
    iconColor: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-100',
  },
  {
    title: 'Slow Wound Healing',
    detail: 'Diabetes can make wounds and infections harder to manage.',
    icon: Bandage,
    iconColor: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-100',
  },
];

export const ComplicationsSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.offsetWidth * 0.8;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(index, 0), COMPLICATIONS_LIST.length - 1));
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const card = scrollRef.current.children[index] as HTMLElement;
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
      setActiveIndex(index);
    }
  };

  return (
    <section id="complications" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200 scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            High Blood Sugar Today Can Affect Your Health Tomorrow.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Diabetes is not just about high blood sugar levels. When blood sugar remains uncontrolled over time, it can gradually damage important organs and affect your quality of life.
          </p>
          <p className="mt-3 text-sm sm:text-base font-bold text-rose-700 flex items-center justify-center gap-1.5">
            <AlertCircle className="w-4 h-4 shrink-0" />
            Ignoring the warning signs today can lead to serious health complications tomorrow.
          </p>
        </div>

        {/* Mobile Swipe Indicators & Controls */}
        <div className="flex md:hidden items-center justify-between mb-4 px-1 text-xs text-slate-500">
          <span className="font-semibold text-sky-700">Swipe to view complications &rarr;</span>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
              disabled={activeIndex === 0}
              aria-label="Previous complication"
              className="p-1.5 rounded-lg bg-white border border-slate-200 disabled:opacity-40 text-slate-700 hover:bg-slate-100 transition shadow-2xs"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="font-mono text-xs text-slate-600">
              {activeIndex + 1}/{COMPLICATIONS_LIST.length}
            </span>
            <button
              onClick={() => scrollToIndex(Math.min(COMPLICATIONS_LIST.length - 1, activeIndex + 1))}
              disabled={activeIndex === COMPLICATIONS_LIST.length - 1}
              aria-label="Next complication"
              className="p-1.5 rounded-lg bg-white border border-slate-200 disabled:opacity-40 text-slate-700 hover:bg-slate-100 transition shadow-2xs"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Cards Container: Mobile Carousel / Desktop 3-column Grid */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0"
        >
          {COMPLICATIONS_LIST.map((comp, idx) => {
            const Icon = comp.icon;
            return (
              <div
                key={idx}
                className="snap-center shrink-0 w-[82vw] sm:w-[320px] md:w-auto bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-xs flex flex-col justify-start"
              >
                <div className={`w-11 h-11 rounded-lg ${comp.bgColor} border ${comp.borderColor} flex items-center justify-center ${comp.iconColor} mb-4`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                  {comp.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {comp.detail}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mobile Dot Indicators */}
        <div className="flex md:hidden items-center justify-center gap-2 mt-4">
          {COMPLICATIONS_LIST.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
              aria-label={`Go to complication ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === idx ? 'w-6 bg-sky-600' : 'w-2 bg-slate-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
