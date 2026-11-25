"use client";

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const STRUGGLES_LIST = [
  {
    title: 'Blood Sugar Fluctuations',
    description:
      'Finding it difficult to understand what affects your blood sugar levels and how daily food choices play a role?',
    image: '/blood-count.jpg',
    alt: 'Blood Sugar Fluctuations and dietary choices - blood count monitor',
  },
  {
    title: 'Difficulty Managing Weight',
    description:
      'Trying to manage your weight but struggling to find an approach that fits your lifestyle?',
    image: '/belly-fat.avif',
    alt: 'Difficulty Managing Weight and lifestyle balance - belly fat management',
  },
  {
    title: 'Confusion About What to Eat',
    description:
      'Getting conflicting diet advice and wondering which foods and portions are right for you?',
    image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=800&q=80',
    alt: 'Confusion About What to Eat and conflicting diet advice',
  },
  {
    title: 'Busy Schedule & Inconsistent Habits',
    description:
      'Finding it hard to maintain regular meals, physical activity, and a healthy sleep routine?',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80',
    alt: 'Busy Schedule and Inconsistent Habits in modern life',
  },
];

export const StrugglesDarkSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.offsetWidth * 0.82;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(index, 0), STRUGGLES_LIST.length - 1));
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
    <section id="struggles" className="py-16 sm:py-20 bg-[#0d1117] text-white scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Are You Struggling With Blood Sugar, Weight, or Confusing Diet Advice?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
            You may be trying to improve your health, but everyday challenges can make it difficult to know what to do next.
          </p>
        </div>

        {/* Mobile Swipe Indicators & Controls */}
        <div className="flex md:hidden items-center justify-between mb-4 px-1 text-xs text-slate-400">
          <span className="font-semibold text-sky-400">Swipe to view challenges &rarr;</span>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
              disabled={activeIndex === 0}
              aria-label="Previous challenge"
              className="p-1.5 rounded-lg bg-slate-800 disabled:opacity-40 text-white hover:bg-slate-700 transition"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="font-mono text-xs text-slate-300">
              {activeIndex + 1}/{STRUGGLES_LIST.length}
            </span>
            <button
              onClick={() => scrollToIndex(Math.min(STRUGGLES_LIST.length - 1, activeIndex + 1))}
              disabled={activeIndex === STRUGGLES_LIST.length - 1}
              aria-label="Next challenge"
              className="p-1.5 rounded-lg bg-slate-800 disabled:opacity-40 text-white hover:bg-slate-700 transition"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Cards Container: Mobile Carousel / Desktop 2-column Grid */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-2 gap-5 sm:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0"
        >
          {STRUGGLES_LIST.map((item, index) => (
            <div
              key={index}
              className="snap-center shrink-0 w-[85vw] sm:w-[380px] md:w-auto bg-[#161b22] border border-slate-800 rounded-xl overflow-hidden shadow-lg transition-transform hover:-translate-y-1 duration-300 flex flex-col"
            >
              {/* Card Image */}
              <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-900">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 85vw, 480px"
                  className="object-cover"
                />
              </div>

              {/* Card Text Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Dot Indicators */}
        <div className="flex md:hidden items-center justify-center gap-2 mt-4">
          {STRUGGLES_LIST.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
              aria-label={`Go to challenge ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === idx ? 'w-6 bg-sky-500' : 'w-2 bg-slate-700'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
