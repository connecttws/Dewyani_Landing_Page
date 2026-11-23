"use client";

import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2, Play, ArrowRight, Video } from 'lucide-react';

interface ClientExperiencesSectionProps {
  onOpenBooking: () => void;
}

const VIDEO_TESTIMONIALS = [
  {
    id: 'dr-poras',
    name: 'Dr. Poras Mahulkar',
    role: 'Medical Professional & Participant',
    title: 'Testimonial Video of Dr Poras Mahulkar',
    vimeoUrl: 'https://player.vimeo.com/video/1117337416?h=fa5854abbb',
    highlight: 'Doctor’s Perspective on Metabolic Nutrition',
  },
  {
    id: 'hardik-labade',
    name: 'Hardik Labade',
    role: 'Verified Client Transformation',
    title: 'Testimonial Video of Hardik Labade',
    vimeoUrl: 'https://player.vimeo.com/video/1117412241?h=6652e17af2',
    highlight: 'Sustainable Blood Sugar & Lifestyle Results',
  },
];

export const ClientExperiencesSection: React.FC<ClientExperiencesSectionProps> = ({ onOpenBooking }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.offsetWidth * 0.85;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(index, 0), VIDEO_TESTIMONIALS.length - 1));
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
    <section id="client-stories" className="py-16 sm:py-20 bg-slate-900 text-white scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 bg-sky-500/10 border border-sky-400/30 text-sky-400 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Video className="w-3.5 h-3.5" />
            <span>Video Stories</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Client Experiences &amp; Success Stories
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
            Hear directly from doctors and participants who experienced sustainable blood sugar balance and renewed vitality under Dt. Dewyani Arbat&apos;s guidance.
          </p>
        </div>

        {/* Mobile Carousel Navigation Arrows (visible on mobile only) */}
        <div className="flex md:hidden items-center justify-between mb-4 px-1 text-xs text-slate-400">
          <span className="font-semibold text-sky-400">Swipe to view testimonials &rarr;</span>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
              disabled={activeIndex === 0}
              aria-label="Previous video"
              className="p-1.5 rounded-lg bg-slate-800 disabled:opacity-40 text-white hover:bg-slate-700 transition"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="font-mono text-xs text-slate-300">
              {activeIndex + 1}/{VIDEO_TESTIMONIALS.length}
            </span>
            <button
              onClick={() => scrollToIndex(Math.min(VIDEO_TESTIMONIALS.length - 1, activeIndex + 1))}
              disabled={activeIndex === VIDEO_TESTIMONIALS.length - 1}
              aria-label="Next video"
              className="p-1.5 rounded-lg bg-slate-800 disabled:opacity-40 text-white hover:bg-slate-700 transition"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Video Cards: Carousel on mobile, 2-column grid on desktop */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-2 gap-5 sm:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0"
        >
          {VIDEO_TESTIMONIALS.map((video) => (
            <div
              key={video.id}
              className="snap-center shrink-0 w-[88vw] sm:w-[480px] md:w-auto bg-[#161b22] border border-slate-800 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between"
            >
              {/* Vimeo Player Container (16:9 Responsive) */}
              <div className="relative aspect-video w-full bg-slate-950 overflow-hidden">
                <iframe
                  title={video.title}
                  src={video.vimeoUrl}
                  className="absolute inset-0 w-full h-full border-0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>

              {/* Video Info Card */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between bg-gradient-to-b from-[#161b22] to-slate-950/80">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                      <CheckCircle2 className="w-3 h-3" />
                      Verified Experience
                    </span>
                    <span className="text-xs text-sky-400 font-semibold truncate">
                      {video.highlight}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {video.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    {video.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Dot Indicators */}
        <div className="flex md:hidden items-center justify-center gap-2 mt-4">
          {VIDEO_TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === idx ? 'w-6 bg-sky-500' : 'w-2 bg-slate-700'
              }`}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-10 sm:mt-12 text-center">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-500 active:scale-95 text-white font-extrabold text-base py-3.5 px-8 rounded-xl shadow-lg shadow-sky-600/30 transition cursor-pointer"
          >
            <span>Book Your Seat Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
