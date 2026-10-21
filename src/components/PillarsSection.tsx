"use client";

import React from 'react';
import { Brain, Apple, Activity, Sparkles, Moon } from 'lucide-react';

const PILLARS_DATA = [
  {
    number: '1',
    name: 'Mindset',
    description:
      'Build a positive mindset, understand your habits, and develop the consistency needed to make sustainable lifestyle changes.',
    icon: Brain,
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
    border: 'border-amber-200',
  },
  {
    number: '2',
    name: 'Nutrition',
    description:
      'Learn practical nutrition strategies, understand balanced food choices, and build eating habits that support blood sugar management.',
    icon: Apple,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    border: 'border-emerald-200',
  },
  {
    number: '3',
    name: 'Movement',
    description:
      'Discover ways to incorporate regular physical activity into your daily routine according to your individual needs and abilities.',
    icon: Activity,
    color: 'text-sky-600',
    bgColor: 'bg-sky-50',
    border: 'border-sky-200',
  },
  {
    number: '4',
    GutHealth: true,
    name: 'Gut Health',
    description:
      'Understand the importance of digestive health and develop dietary habits that support your gut and overall well-being.',
    icon: Sparkles,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
    border: 'border-indigo-200',
  },
  {
    number: '5',
    name: 'Stress & Sleep',
    description:
      'Learn practical ways to manage everyday stress and establish healthier sleep routines as part of your lifestyle.',
    icon: Moon,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    border: 'border-blue-200',
  },
];

export const PillarsSection: React.FC = () => {
  return (
    <section id="pillars" className="py-16 sm:py-20 bg-white border-t border-slate-200 scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Title - Exact from PDF Page 3 */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            The 5 Pillars of the Metabolic Reset Blueprint
          </h2>
        </div>

        {/* 5 Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PILLARS_DATA.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className="bg-slate-50/70 border border-slate-200 rounded-2xl p-6 shadow-xs hover:border-sky-300 transition-all flex flex-col justify-start"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-sm font-black text-sky-700 bg-sky-100 px-2.5 py-0.5 rounded-md">
                    {pillar.number}
                  </span>
                  <div className={`w-9 h-9 rounded-lg ${pillar.bgColor} flex items-center justify-center ${pillar.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {pillar.number}. {pillar.name}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
