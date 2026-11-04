"use client";

import React from 'react';
import { CheckCircle2, ArrowRight, Sparkles, Activity, RefreshCw, Compass } from 'lucide-react';

interface CurriculumSectionProps {
  onOpenBooking: () => void;
}

const RHYTHM_PILLARS = [
  {
    number: '01',
    title: '1. Understand the Root Causes',
    description:
      'Explore the underlying factors that may influence blood sugar, insulin resistance, weight management, and metabolic health instead of focusing only on visible symptoms.',
    icon: Compass,
    accent: 'from-sky-500 to-blue-600',
    bgLight: 'bg-sky-50/70',
    borderColor: 'border-sky-200',
    tagColor: 'text-sky-700 bg-sky-100',
  },
  {
    number: '02',
    title: '2. Reset Your Health Habits',
    description:
      'Identify unhealthy patterns in nutrition, physical activity, stress, and sleep. Learn practical ways to improve these habits through a balanced and personalised lifestyle approach.',
    icon: RefreshCw,
    accent: 'from-emerald-500 to-teal-600',
    bgLight: 'bg-emerald-50/70',
    borderColor: 'border-emerald-200',
    tagColor: 'text-emerald-700 bg-emerald-100',
  },
  {
    number: '03',
    title: '3. Build Your Rhythm for Long-Term Health',
    description:
      'Understand how consistent nutrition, movement, mindset, gut health, and quality sleep work together to support sustainable lifestyle changes and better overall well-being.',
    icon: Activity,
    accent: 'from-indigo-500 to-purple-600',
    bgLight: 'bg-indigo-50/70',
    borderColor: 'border-indigo-200',
    tagColor: 'text-indigo-700 bg-indigo-100',
  },
];

const LEARNING_POINTS = [
  'Make informed food choices that support blood sugar management.',
  'Understand the role of balanced nutrition in healthy weight management.',
  'Build realistic habits even with a busy schedule.',
  'Understand how movement, stress, and sleep influence your health.',
  'Approach weight management without extreme dieting or unnecessary food guilt.',
  'Create a practical starting point for your personal health journey.',
];

export const CurriculumSection: React.FC<CurriculumSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="curriculum" className="py-16 sm:py-24 bg-white border-t border-slate-200 scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Eyebrow & Titles - Exact User Spec */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 bg-sky-100 border border-sky-300 text-sky-800 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>ROOT CAUSES, RESET & RHYTHM</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
            Discover a Smarter Approach to Nutrition & Diabetes Management
          </h2>

          <h3 className="mt-3 text-lg sm:text-xl font-bold text-sky-800">
            Understand Your Health Through Root Causes, Reset & Rhythm
          </h3>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Discover how to understand the factors affecting your metabolic health, make informed lifestyle changes, and build healthier habits for long-term well-being.
          </p>
        </div>

        {/* 3 Pillar Cards: Root Causes, Reset, Rhythm (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 sm:mb-16">
          {RHYTHM_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className={`rounded-3xl ${pillar.bgLight} border ${pillar.borderColor} p-6 sm:p-7 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className={`text-xs font-mono font-black px-2.5 py-1 rounded-lg ${pillar.tagColor}`}>
                      PHASE {pillar.number}
                    </span>
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${pillar.accent} text-white flex items-center justify-center shadow-md`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h4 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight mb-3">
                    {pillar.title}
                  </h4>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* In-depth Learning Outcomes Strip */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h4 className="text-lg sm:text-xl font-bold text-slate-900">
              By attending this webinar, you will learn how to:
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Practical, actionable lifestyle skills you can begin using from day one
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {LEARNING_POINTS.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs"
              >
                <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                <span className="text-slate-800 text-sm font-medium leading-relaxed">
                  {point}
                </span>
              </div>
            ))}
          </div>

          {/* [Book Your SEAT Now] Button */}
          <div className="mt-8 pt-6 border-t border-slate-200 text-center">
            <button
              onClick={onOpenBooking}
              className="bg-sky-600 hover:bg-sky-700 active:scale-98 text-white font-extrabold text-base sm:text-lg py-4 px-8 rounded-xl shadow-md shadow-sky-600/25 transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Book Your SEAT Now</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-xs text-slate-500 mt-2 font-medium">
              Join Dt. Devyani Arbat live this Sunday • Limited seats available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
