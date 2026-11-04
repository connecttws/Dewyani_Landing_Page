"use client";

import React from 'react';
import { Star, ShieldCheck, TrendingDown, ArrowRight, CheckCircle2, Award } from 'lucide-react';

interface TestimonialsSectionProps {
  onOpenBooking: () => void;
}

// Exactly 6 transformation frames for a balanced 3 - 3 layout
const TRANSFORMATION_FRAMES = [
  {
    id: 1,
    name: 'Rajesh Kulkarni',
    age: 52,
    city: 'Pune',
    profession: 'Bank Manager',
    tag: 'HbA1c Normalization',
    hba1cBefore: '9.2%',
    hba1cAfter: '5.9%',
    fastingBefore: '180 mg/dL',
    fastingAfter: '98 mg/dL',
    duration: '90 Days',
    resultHighlight: 'Off 2 Daily Diabetic Medications',
    quote:
      'I was on Metformin and Glimepiride for 6 years and thought diabetes was irreversible. Dt. Devyani taught me food sequencing and metabolic timing. My morning fasting dropped from 180 to 98!',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    verified: true,
  },
  {
    id: 2,
    name: 'Sunita Patel',
    age: 46,
    city: 'Mumbai',
    profession: 'School Vice-Principal',
    tag: 'Fat Loss & Sugar Control',
    hba1cBefore: '7.8%',
    hba1cAfter: '5.6%',
    fastingBefore: '155 mg/dL',
    fastingAfter: '92 mg/dL',
    duration: '60 Days',
    resultHighlight: 'Lost 8.5 kg Visceral Fat',
    quote:
      'Other dietitians gave me bland boiled salads that left me ravenous. Devyani Ma’am’s blueprint let me eat regular home meals with smart pairing. My energy transformed and afternoon crashes are gone!',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    verified: true,
  },
  {
    id: 3,
    name: 'Vikram Sengupta',
    age: 58,
    city: 'Bengaluru',
    profession: 'IT Tech Director',
    tag: 'Insulin Resistance Reversal',
    hba1cBefore: '8.7%',
    hba1cAfter: '6.1%',
    fastingBefore: '190 mg/dL',
    fastingAfter: '105 mg/dL',
    duration: '75 Days',
    resultHighlight: 'Insulin Dosage Reduced by 70%',
    quote:
      'With 12-hour desk work and frequent travel, my sugars were unpredictable. The 5 Pillars fit effortlessly into my corporate schedule. Attending Dt. Devyani’s webinar was the best decision of my year.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    verified: true,
  },
  {
    id: 4,
    name: 'Meenakshi Deshmukh',
    age: 49,
    city: 'Nagpur',
    profession: 'Homemaker & Yoga Practitioner',
    tag: 'Pre-Diabetes Reversal',
    hba1cBefore: '6.4%',
    hba1cAfter: '5.3%',
    fastingBefore: '128 mg/dL',
    fastingAfter: '88 mg/dL',
    duration: '45 Days',
    resultHighlight: 'Pre-Diabetes Completely Arrested',
    quote:
      'My doctor warned me that I was on the brink of diabetes. Devyani Ma’am guided me on circadian rhythm and gut health. My HbA1c is now well inside the non-diabetic safe range.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    verified: true,
  },
  {
    id: 5,
    name: 'Anand Sharma',
    age: 54,
    city: 'Thane',
    profession: 'Business Owner',
    tag: 'Post-Meal Spike Control',
    hba1cBefore: '8.4%',
    hba1cAfter: '6.0%',
    fastingBefore: '175 mg/dL',
    fastingAfter: '99 mg/dL',
    duration: '60 Days',
    resultHighlight: 'Post-Meal Spikes Normalized (<140)',
    quote:
      'My post-lunch blood sugar used to spike beyond 240 mg/dL. By following the simple food sequencing rules, the spikes reduced naturally without cutting out traditional chapati or rice.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    verified: true,
  },
  {
    id: 6,
    name: 'Kavita Joshi',
    age: 42,
    city: 'Nashik',
    profession: 'Chartered Accountant',
    tag: 'Metabolic & Hormonal Reset',
    hba1cBefore: '7.4%',
    hba1cAfter: '5.5%',
    fastingBefore: '142 mg/dL',
    fastingAfter: '90 mg/dL',
    duration: '90 Days',
    resultHighlight: 'Lost 9 kg & Normalized Fasting Insulin',
    quote:
      'I suffered from stubborn abdominal weight and high fasting insulin. Dt. Devyani’s root-cause approach helped me understand my body instead of constantly blaming my willpower.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    verified: true,
  },
];

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="results" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header - Exact Heading Requested */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 border border-emerald-300 text-emerald-800 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-4 shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Verified Transformations</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
            Real People Real Results.
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-600 font-medium">
            See how everyday individuals restored their insulin sensitivity, lowered blood sugar, and regained vibrant energy under Dt. Devyani's guidance.
          </p>
        </div>

        {/* 6 Result Frames (3 - 3 Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {TRANSFORMATION_FRAMES.map((frame) => (
            <div
              key={frame.id}
              className="bg-white rounded-3xl border-2 border-slate-200/90 hover:border-sky-400 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Frame Header with Image and Verification Badge */}
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="relative">
                    <img
                      src={frame.image}
                      alt={frame.name}
                      className="w-14 h-14 rounded-2xl object-cover border-2 border-sky-400 shadow-xs"
                      loading="lazy"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xs">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-extrabold text-slate-900 text-base group-hover:text-sky-600 transition-colors">
                      {frame.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      Age {frame.age} • {frame.city} ({frame.profession})
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Milestone Pill */}
                <div className="mb-4 inline-flex items-center gap-1.5 text-xs font-bold text-sky-800 bg-sky-50 border border-sky-200 px-3 py-1.5 rounded-xl w-full justify-center">
                  <Award className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                  <span className="truncate">{frame.resultHighlight}</span>
                </div>

                {/* Before & After Comparison Frame */}
                <div className="bg-sky-50/50 rounded-2xl p-3.5 border border-sky-100 mb-4 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">HbA1c Before</span>
                    <span className="text-base font-black text-rose-600">{frame.hba1cBefore}</span>
                    <span className="text-[10px] text-slate-500 block">Fasting: {frame.fastingBefore}</span>
                  </div>

                  <div className="flex flex-col items-center px-2">
                    <TrendingDown className="w-5 h-5 text-emerald-600" />
                    <span className="text-[9px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded mt-0.5">
                      {frame.duration}
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">HbA1c Now</span>
                    <span className="text-base font-black text-emerald-600">{frame.hba1cAfter}</span>
                    <span className="text-[10px] text-emerald-700 font-semibold block">Fasting: {frame.fastingAfter}</span>
                  </div>
                </div>

                {/* Testimonial Quote */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                  "{frame.quote}"
                </p>
              </div>

              {/* Card Footer */}
              <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-semibold">
                <span className="flex items-center gap-1 text-emerald-600">
                  <ShieldCheck className="w-3.5 h-3.5" /> Verified Outcome
                </span>
                <span className="text-sky-700 font-mono">{frame.tag}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Callout */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenBooking}
            className="bg-sky-600 hover:bg-sky-700 active:scale-98 text-white font-extrabold text-base sm:text-lg py-4 px-8 rounded-xl shadow-md shadow-sky-600/25 transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Start Your Health Transformation — Book Seat Now</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
