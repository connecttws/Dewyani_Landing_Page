"use client";

import React, { useState, useRef } from 'react';
import { Utensils, CalendarCheck, Footprints, HeartHandshake, ShieldCheck } from 'lucide-react';

const SUPPORT_ITEMS = [
  {
    title: 'Personalised Nutrition Guidance',
    detail: 'Understand food choices and build practical eating habits that support blood sugar management.',
    icon: Utensils,
  },
  {
    title: 'Lifestyle Planning',
    detail: 'Develop realistic daily routines that fit your lifestyle and health needs.',
    icon: CalendarCheck,
  },
  {
    title: 'Movement Guidance',
    detail: 'Explore appropriate ways to include physical activity in your everyday life.',
    icon: Footprints,
  },
  {
    title: 'Stress & Sleep Support',
    detail: 'Learn strategies to build healthier sleep routines and manage everyday stress.',
    icon: HeartHandshake,
  },
  {
    title: 'Ongoing Guidance & Support',
    detail: 'Get help navigating challenges, reviewing your progress, and building consistency.',
    icon: ShieldCheck,
  },
];

export const GuidanceSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.clientWidth * 0.82;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(index, 0), 4));
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-sky-50/50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header - Exact from PDF Page 3 */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Take Control of Your Daily Habits with the Right Guidance
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Our <strong className="text-slate-900">Metabolic Reset Blueprint</strong> helps you build healthier habits through personalised guidance on nutrition, movement, mindset, gut health, stress, and sleep.
          </p>
          <p className="mt-4 text-sm sm:text-base font-bold text-sky-800">
            Here's how we can support you:
          </p>
        </div>

        {/* Carousel on Mobile with Next Card Peeking + Vertical Stack on Desktop */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex sm:block overflow-x-auto sm:overflow-visible gap-4 sm:space-y-4 snap-x snap-mandatory scroll-smooth pb-4 sm:pb-0 -mx-4 sm:mx-0 scroll-pl-5 sm:scroll-pl-0 scrollbar-none"
        >
          {SUPPORT_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`w-[80vw] sm:w-auto shrink-0 sm:shrink snap-start ${
                  idx === 0 ? "ml-5 sm:ml-0" : ""
                } ${
                  idx === SUPPORT_ITEMS.length - 1 ? "mr-5 sm:mr-0" : ""
                } bg-white border border-sky-100 rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row items-start gap-4 transition-all hover:border-sky-300 hover:shadow-md`}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-100 to-sky-200/80 text-sky-700 flex items-center justify-center shrink-0 shadow-2xs">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Swipe Pagination Indicator */}
        <div className="flex sm:hidden items-center justify-center gap-2 pt-2">
          {SUPPORT_ITEMS.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === i ? 'w-6 bg-sky-600' : 'w-1.5 bg-sky-200'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
