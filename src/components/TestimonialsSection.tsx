"use client";

import React, { useRef, useState } from 'react';
import { ShieldCheck, ArrowRight, CheckCircle2, Star, ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

interface TestimonialsSectionProps {
  onOpenBooking: () => void;
}

const REAL_TRANSFORMATIONS = [
  {
    id: 1,
    name: 'Dr. Renuka Pawar',
    role: 'Local Guide • 26 Reviews',
    rating: 5,
    tag: 'Personalized Diet & Workout Guidance',
    image: '/transformation-1.jpeg',
    alt: 'Dr. Renuka Pawar transformation review for Dt. Dewyani Arbat',
    summary: 'Ma’am provides personalized diet plan and explains scientifically... clears all doubts.',
  },
  {
    id: 2,
    name: 'Sameer Khose',
    role: 'Verified Google Reviewer',
    rating: 5,
    tag: 'Scientific Approach to Training & Diet',
    image: '/transformation-2.jpeg',
    alt: 'Sameer Khose body transformation review for Dt. Dewyani Arbat',
    summary: 'Nutritionist gives you a holistic view of how our body functions... serious about health and fitness.',
  },
  {
    id: 3,
    name: 'Rajesh Sarap',
    role: 'Local Guide • 5 Reviews',
    rating: 5,
    tag: 'Customizable Diet & Certified Nutritionist',
    image: '/transformation-3.jpeg',
    alt: 'Rajesh Sarap review for Dt. Dewyani Arbat',
    summary: 'Diet plan and body exercise is customizable... Devyani mam is a certified nutritionist and inspiration.',
  },
  {
    id: 4,
    name: 'Samiksha Shelke',
    role: 'Verified Google Reviewer',
    rating: 5,
    tag: 'Achieved Fitness Goal with Proper Nutrition',
    image: '/transformation-4.jpeg',
    alt: 'Samiksha Shelke transformation review for Dt. Dewyani Arbat',
    summary: 'Special thanks to Devyani Mam, she always motivates & guides with proper nutrition & diet plan.',
  },
  {
    id: 5,
    name: 'Jyoti Vinchankar',
    role: 'Verified Google Reviewer',
    rating: 5,
    tag: 'Result-Driven & Scientific Diet Plan',
    image: '/transformation-5.jpeg',
    alt: 'Jyoti Vinchankar review for Dt. Dewyani Arbat',
    summary: 'Diet plan given by Dt. Dewyani is result-driven and scientific... amazing place.',
  },
];

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenBooking }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.offsetWidth * 0.85;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(index, 0), REAL_TRANSFORMATIONS.length - 1));
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
    <section id="results" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 border border-emerald-300 text-emerald-800 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-4 shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Real Client Transformations</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
            Real People Real Results.
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            Authentic client transformations and feedback from individuals who restored their health, improved insulin sensitivity, and achieved their lifestyle goals under Dt. Dewyani&apos;s guidance.
          </p>
        </div>

        {/* Mobile Swipe Indicators & Controls */}
        <div className="flex md:hidden items-center justify-between mb-4 px-1 text-xs text-slate-500">
          <span className="font-semibold text-sky-700">Swipe to view transformations &rarr;</span>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
              disabled={activeIndex === 0}
              aria-label="Previous transformation"
              className="p-1.5 rounded-lg bg-white border border-slate-200 disabled:opacity-40 text-slate-700 hover:bg-slate-100 transition shadow-2xs"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="font-mono text-xs text-slate-600">
              {activeIndex + 1}/{REAL_TRANSFORMATIONS.length}
            </span>
            <button
              onClick={() => scrollToIndex(Math.min(REAL_TRANSFORMATIONS.length - 1, activeIndex + 1))}
              disabled={activeIndex === REAL_TRANSFORMATIONS.length - 1}
              aria-label="Next transformation"
              className="p-1.5 rounded-lg bg-white border border-slate-200 disabled:opacity-40 text-slate-700 hover:bg-slate-100 transition shadow-2xs"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Real Transformation Image Cards Container (Mobile Carousel / Desktop Grid) */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0"
        >
          {REAL_TRANSFORMATIONS.map((item) => (
            <div
              key={item.id}
              className="snap-center shrink-0 w-[85vw] sm:w-[380px] md:w-auto bg-white rounded-3xl border-2 border-slate-200 hover:border-sky-400 p-4 sm:p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="min-w-0">
                  <h3 className="font-extrabold text-slate-900 text-base truncate group-hover:text-sky-600 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-[11px] text-slate-500 font-medium truncate">
                    {item.role}
                  </p>
                </div>

                <div className="flex items-center gap-0.5 shrink-0 bg-amber-50 border border-amber-200/80 px-2 py-0.5 rounded-full">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-amber-500 fill-amber-500" />
                  ))}
                </div>
              </div>

              {/* Tag Pill */}
              <div className="mb-3 inline-flex items-center gap-1.5 text-xs font-bold text-sky-800 bg-sky-50 border border-sky-200 px-3 py-1 rounded-xl w-full justify-center">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="truncate">{item.tag}</span>
              </div>

              {/* Image Preview Container (Clickable for full view) */}
              <div
                onClick={() => setSelectedImage(item.image)}
                className="relative rounded-2xl overflow-hidden border border-slate-800 bg-[#1e1e1e] cursor-pointer group/img shadow-inner"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-auto object-contain transition-transform duration-300 group-hover/img:scale-[1.02]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-slate-900/90 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg border border-slate-700">
                    <ZoomIn className="w-3.5 h-3.5" /> Tap to Expand
                  </span>
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-semibold">
                <span className="flex items-center gap-1 text-emerald-600">
                  <ShieldCheck className="w-3.5 h-3.5" /> Verified Feedback
                </span>
                <button
                  onClick={() => setSelectedImage(item.image)}
                  className="text-sky-600 hover:text-sky-700 hover:underline cursor-pointer"
                >
                  View Full Screenshot &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Dot Indicators */}
        <div className="flex md:hidden items-center justify-center gap-2 mt-4">
          {REAL_TRANSFORMATIONS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
              aria-label={`Go to transformation ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === idx ? 'w-6 bg-sky-600' : 'w-2 bg-slate-300'
              }`}
            />
          ))}
        </div>

        {/* Primary CTA Button */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenBooking}
            className="bg-[#0A2540] hover:bg-[#133A5E] active:scale-98 text-white font-extrabold text-base sm:text-lg py-4 px-8 rounded-xl shadow-lg shadow-slate-900/25 transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Start Your Health Transformation — Book Seat Now</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Lightbox Modal for Full Screenshot View */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full bg-slate-900 rounded-3xl p-2 border border-slate-700 shadow-2xl overflow-hidden cursor-default"
          >
            <button
              onClick={() => setSelectedImage(null)}
              aria-label="Close image preview"
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-950/80 text-white hover:bg-slate-800 transition"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="max-h-[85vh] overflow-y-auto rounded-2xl">
              <img
                src={selectedImage}
                alt="Full Transformation Screenshot"
                className="w-full h-auto object-contain mx-auto rounded-xl"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
