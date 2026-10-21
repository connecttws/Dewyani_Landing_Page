"use client";

import React from 'react';
import { Apple, Scale, Clock, Heart, Ban, MapPin, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

interface OutcomesSectionProps {
  onOpenBooking: () => void;
}

const LEARNING_OUTCOMES = [
  {
    icon: Apple,
    title: 'Make informed food choices that support blood sugar management',
    detail: 'Learn to decode glycemic load vs index, read hidden sugar labels, and choose local everyday ingredients that nourish your metabolism without spikes.',
    tag: 'Nutrition Literacy',
  },
  {
    icon: Scale,
    title: 'Understand the role of balanced nutrition in healthy weight management',
    detail: 'Shift focus from starvation to hormone balancing. Discover how insulin control unlocks body fat burning while preserving lean metabolic tissue.',
    tag: 'Weight Science',
  },
  {
    icon: Clock,
    title: 'Build realistic habits even with a busy schedule',
    detail: 'No 3-hour workout mandates. Master 5-to-15 minute meal-prep shortcuts and micro-movements designed for demanding professional and home routines.',
    tag: 'Sustainable Habits',
  },
  {
    icon: Heart,
    title: 'Understand how movement, stress, and sleep influence your health',
    detail: 'Uncover the non-food triggers of glucose spikes: how chronic work stress and poor deep sleep elevate cortisol, pushing blood sugar up even while fasting.',
    tag: 'Holistic Biology',
  },
  {
    icon: Ban,
    title: 'Approach weight management without extreme dieting or unnecessary food guilt',
    detail: 'Say goodbye to punishing calorie deficits, cabbage soup fads, or giving up your favorite cultural dishes. Learn mindful portioning and food sequencing.',
    tag: 'Zero Deprivation',
  },
  {
    icon: MapPin,
    title: 'Create a practical starting point for your personal health journey',
    detail: 'Leave with a clear, step-by-step 30-day roadmap tailored to your current medication, HbA1c, and lifestyle instead of vague general advice.',
    tag: 'Personal Blueprint',
  },
];

export const OutcomesSection: React.FC<OutcomesSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="curriculum" className="py-20 bg-white relative border-t border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block - Exact text from PDF Page 2 */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-sky-100/90 border border-sky-300 px-3.5 py-1.5 rounded-full text-xs font-bold text-sky-800 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            Curriculum & Key Takeaways
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Discover a Smarter Approach to Nutrition & Diabetes Management
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Join <span className="text-sky-700 font-bold">Dt. Dr. Devyani Arbat</span> for an educational session designed to help you understand the connection between nutrition, daily habits, blood sugar, and overall well-being.
          </p>
          <div className="mt-5 inline-block bg-sky-50 px-4 py-2 rounded-xl border border-sky-200 text-sm font-bold text-sky-900">
            By attending this webinar, you will learn how to:
          </div>
        </div>

        {/* 6 Grid Cards in Light Blue Theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LEARNING_OUTCOMES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-3xl bg-sky-50/40 border border-sky-200/90 hover:border-sky-400 p-6 sm:p-7 flex flex-col justify-between hover:bg-white hover:shadow-xl hover:shadow-sky-900/5 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-sky-100 border border-sky-200 flex items-center justify-center text-sky-700 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-sky-800 bg-white px-2.5 py-1 rounded-lg border border-sky-200 shadow-xs">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-sky-200/60 flex items-center gap-1.5 text-xs font-bold text-sky-700">
                  <CheckCircle2 className="w-4 h-4 text-sky-600" />
                  <span>Actionable takeaway</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Book Seat Now Call To Action */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-sky-50/80 border border-sky-200 p-5 sm:p-6 rounded-3xl shadow-sm">
            <div className="text-left">
              <p className="text-slate-900 font-extrabold text-base sm:text-lg">Ready to take control of your blood sugar?</p>
              <p className="text-xs sm:text-sm text-slate-600">Live 90-minute session with open Q&A with Dt. Devyani</p>
            </div>
            <button
              onClick={onOpenBooking}
              className="bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-black text-base px-8 py-3.5 rounded-xl shadow-md shadow-sky-500/25 active:scale-95 transition-all inline-flex items-center gap-2 shrink-0"
            >
              Book Your SEAT Now <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
