"use client";

import React, { useState } from 'react';
import { Activity, Scale, UtensilsCrossed, ClockAlert, AlertCircle, CheckCircle, ArrowRight } from 'lucide-react';

interface StrugglesSectionProps {
  onOpenBooking: () => void;
}

const STRUGGLES = [
  {
    id: 'blood-sugar',
    title: 'Blood Sugar Fluctuations',
    description:
      'Finding it difficult to understand what affects your blood sugar levels and how daily food choices play a role?',
    image: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&w=800&q=80',
    alt: 'Person checking blood sugar with glucometer next to meal',
    icon: Activity,
    badge: 'Glucose Spikes & Dips',
    clinicalReality:
      'Sudden post-prandial spikes trigger reactive hypoglycemia and chronic inflammation, causing intense afternoon fatigue and ravenous carb cravings.',
    solutionHint: 'How proper nutrient ordering (fiber first, then protein, then complex carbs) flattens spikes naturally.',
  },
  {
    id: 'weight-management',
    title: 'Difficulty Managing Weight',
    description:
      'Trying to manage your weight but struggling to find an approach that fits your lifestyle?',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
    alt: 'Person measuring waistline with tape measure',
    icon: Scale,
    badge: 'Stubborn Visceral Fat',
    clinicalReality:
      'High baseline insulin locks adipose tissue, preventing fat oxidation. Traditional calorie-deficit diets often burn lean muscle while leaving visceral belly fat untouched.',
    solutionHint: 'Lowering cellular insulin demands so your body naturally switches to metabolic fat burning.',
  },
  {
    id: 'diet-confusion',
    title: 'Confusion About What to Eat',
    description:
      'Getting conflicting diet advice and wondering which foods and portions are right for you?',
    image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=800&q=80',
    alt: 'Healthy balanced vegetables, legumes, and real whole foods',
    icon: UtensilsCrossed,
    badge: 'Diet Dogma Overload',
    clinicalReality:
      'Keto, raw salads, intermittent fasting, zero-carb... Generic internet diets ignore your unique gut microbiome, pancreas health, and liver fat storage.',
    solutionHint: 'Personalized food choices rooted in Indian and global whole-food culinary science.',
  },
  {
    id: 'busy-habits',
    title: 'Busy Schedule & Inconsistent Habits',
    description:
      'Finding it hard to maintain regular meals, physical activity, and a healthy sleep routine?',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80',
    alt: 'Working professional managing tight schedules and demanding lifestyle',
    icon: ClockAlert,
    badge: 'Time Deficit & Burnout',
    clinicalReality:
      'Erratic eating hours and elevated late-night cortisol disrupt the circadian insulin rhythm, causing high morning fasting blood sugar (Dawn Phenomenon).',
    solutionHint: 'Practical, low-friction habits that take under 15 minutes and integrate into 12-hour workdays.',
  },
];

export const StrugglesSection: React.FC<StrugglesSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="struggles" className="py-20 bg-gradient-to-b from-sky-50/50 via-white to-sky-50/50 relative border-t border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - Exact wording from PDF */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-800 bg-sky-100/90 border border-sky-300 px-3.5 py-1.5 rounded-full">
            Real Challenges, Proven Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Are You Struggling With Blood Sugar, Weight, or Confusing Diet Advice?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            You may be trying to improve your health, but everyday challenges can make it difficult to know what to do next.
          </p>
        </div>

        {/* 4 Cards Grid - Styled in Light Blue Medical Aesthetic */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {STRUGGLES.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="group rounded-3xl bg-white border border-sky-200/90 hover:border-sky-400 overflow-hidden shadow-lg shadow-sky-950/5 hover:shadow-xl hover:shadow-sky-900/10 transition-all duration-300 flex flex-col"
              >
                {/* Image header container */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-sky-50">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent"></div>

                  {/* Category Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md border border-sky-300 text-sky-800 text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      <Icon className="w-3.5 h-3.5 text-sky-600" />
                      {item.badge}
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  {/* Clinical Mechanism Box */}
                  <div className="mt-6 pt-5 border-t border-sky-100">
                    <div className="bg-sky-50/70 rounded-2xl p-4 border border-sky-200/80">
                      <div className="flex items-start gap-2.5">
                        <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-1">
                            The Root Mechanism:
                          </p>
                          <p className="text-xs text-slate-700 leading-normal">
                            {item.clinicalReality}
                          </p>
                        </div>
                      </div>

                      <div className="mt-3 flex items-start gap-2.5 pt-2.5 border-t border-sky-200/60">
                        <CheckCircle className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-bold text-sky-800 uppercase tracking-wider mb-0.5">
                            What Webinar Reveals:
                          </p>
                          <p className="text-xs text-slate-700 leading-normal">
                            {item.solutionHint}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Bottom Call to Action */}
        <div className="mt-14 max-w-3xl mx-auto text-center bg-gradient-to-r from-sky-100/90 via-blue-50 to-sky-100/90 border border-sky-300 p-6 sm:p-8 rounded-3xl shadow-sm">
          <p className="text-base sm:text-lg text-slate-800 font-semibold">
            None of these challenges mean your body is broken. They are simply signals of <span className="text-sky-700 font-extrabold">cellular insulin overload</span>.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-extrabold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-md shadow-sky-500/25 active:scale-95 transition-all inline-flex items-center gap-2"
            >
              Learn The Fix in Sunday's Webinar <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
