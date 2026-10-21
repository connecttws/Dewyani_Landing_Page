"use client";

import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface CurriculumSectionProps {
  onOpenBooking: () => void;
}

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
    <section id="curriculum" className="py-16 sm:py-20 bg-white border-t border-slate-200 scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header - Exact text from PDF Page 2 */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Discover a Smarter Approach to Nutrition & Diabetes Management
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Join <span className="font-bold text-slate-900">Dt. Dr. Devyani Arbat</span> for an educational session designed to help you understand the connection between nutrition, daily habits, blood sugar, and overall well-being.
          </p>
          <p className="mt-4 text-sm sm:text-base font-bold text-sky-700">
            By attending this webinar, you will learn how to:
          </p>
        </div>

        {/* Bullet List - Exact text from PDF Page 2 */}
        <div className="bg-sky-50/60 border border-sky-100 rounded-2xl p-6 sm:p-8 shadow-xs">
          <ul className="space-y-4">
            {LEARNING_POINTS.map((point, index) => (
              <li key={index} className="flex items-start gap-3.5 text-slate-800 text-sm sm:text-base font-medium">
                <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* [Book Your SEAT Now] Button */}
        <div className="mt-10 text-center">
          <button
            onClick={onOpenBooking}
            className="bg-sky-600 hover:bg-sky-700 active:scale-98 text-white font-extrabold text-base sm:text-lg py-3.5 px-8 rounded-xl shadow-md transition-all inline-flex items-center gap-2"
          >
            <span>Book Your SEAT Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
