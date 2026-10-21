"use client";

import React from 'react';
import { Star, ShieldCheck, TrendingDown, Pill, ArrowRight } from 'lucide-react';

interface TestimonialsSectionProps {
  onOpenBooking: () => void;
}

const STORIES = [
  {
    name: 'Rajesh Kulkarni',
    age: 52,
    city: 'Pune',
    hba1cBefore: '9.2%',
    hba1cAfter: '5.9%',
    duration: '90 Days',
    medicineStatus: 'Off 2 Daily Medications (Doctor approved)',
    quote:
      'I was on metformin and glimepiride for 6 years and thought diabetes was a one-way street. Dt. Devyani taught me food sequencing and morning metabolic timing. My morning fasting dropped from 180 to 98!',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80',
    tag: 'HbA1c Normalization',
  },
  {
    name: 'Sunita Patel',
    age: 46,
    city: 'Ahmedabad',
    hba1cBefore: '7.8%',
    hba1cAfter: '5.6%',
    duration: '60 Days',
    medicineStatus: 'Lost 8.5 kg Stubborn Abdominal Fat',
    quote:
      'Every dietitian gave me boiled salads that made me miserable and ravenous. Devyani Ma’am’s blueprint let me eat my regular rotis and dal with specific order and herbs. My energy has completely transformed.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    tag: 'Sustainable Weight Loss',
  },
  {
    name: 'Vikram Sengupta',
    age: 58,
    city: 'Bengaluru',
    hba1cBefore: '8.7%',
    hba1cAfter: '6.1%',
    duration: '75 Days',
    medicineStatus: 'Insulin Dosage Reduced by 70%',
    quote:
      'As a software executive working 12-hour shifts, I had erratic meal hours. The 5 Pillars fit seamlessly into my corporate travel. Attending this webinar was the single best decision for my health.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    tag: 'Executive Lifestyle Fit',
  },
];

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 bg-white relative border-t border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-sky-100 border border-sky-300 text-sky-800 px-3.5 py-1.5 rounded-full text-xs font-bold mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
            Verified Student Outcomes
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Real Transformations, Science-Backed Results
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            See how everyday individuals restored their insulin sensitivity and regained vibrant energy with Dt. Devyani's guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {STORIES.map((story, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-sky-50/50 border border-sky-200/90 p-6 sm:p-7 flex flex-col justify-between hover:border-sky-400 hover:bg-white hover:shadow-xl hover:shadow-sky-900/5 transition-all"
            >
              <div>
                {/* User Header */}
                <div className="flex items-center gap-3.5 mb-5">
                  <img
                    src={story.avatar}
                    alt={story.name}
                    className="w-13 h-13 rounded-full object-cover border-2 border-sky-400"
                  />
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">{story.name}</h3>
                    <p className="text-xs text-slate-500 font-medium">
                      Age {story.age} • {story.city}
                    </p>
                    <div className="flex items-center gap-1 mt-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-amber-500 fill-amber-500" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Before & After Metrics Badge */}
                <div className="bg-white rounded-2xl p-3.5 border border-sky-200 mb-5 flex items-center justify-between shadow-xs">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">HbA1c Before</span>
                    <span className="text-base font-black text-rose-600">{story.hba1cBefore}</span>
                  </div>
                  <TrendingDown className="w-5 h-5 text-sky-600" />
                  <div className="text-right">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">HbA1c Now</span>
                    <span className="text-base font-black text-sky-700">{story.hba1cAfter}</span>
                  </div>
                </div>

                {/* Milestone Pill */}
                <div className="mb-4 inline-flex items-center gap-1.5 text-xs font-bold text-sky-800 bg-sky-100 border border-sky-300 px-3 py-1 rounded-lg">
                  <Pill className="w-3.5 h-3.5 text-sky-600" />
                  {story.medicineStatus}
                </div>

                {/* Quote */}
                <p className="text-sm text-slate-600 italic leading-relaxed">
                  "{story.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-sky-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span>Verified Participant</span>
                <span className="text-sky-700 font-mono font-bold">{story.duration} Journey</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Callout */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-sky-700 hover:text-sky-800 underline underline-offset-8"
          >
            Start your own metabolic transformation in Sunday's session <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
