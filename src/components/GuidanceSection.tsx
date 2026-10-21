"use client";

import React from 'react';
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

        {/* 5 Support Items List */}
        <div className="space-y-4">
          {SUPPORT_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-sky-100 rounded-xl p-5 shadow-xs flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
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
      </div>
    </section>
  );
};
