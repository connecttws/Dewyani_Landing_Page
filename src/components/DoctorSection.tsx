"use client";

import React from 'react';
import { ArrowRight, Award } from 'lucide-react';

interface DoctorSectionProps {
  onOpenBooking: () => void;
}

export const DoctorSection: React.FC<DoctorSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="doctor" className="py-16 sm:py-20 bg-white border-t border-slate-200 scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Doctor Photo */}
            <div className="md:col-span-5 flex flex-col items-center">
              <div className="w-56 h-72 sm:w-64 sm:h-80 rounded-2xl overflow-hidden border-2 border-white shadow-md bg-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80"
                  alt="Dt. Dr. Devyani Arbat"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="mt-3 flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-2xs">
                <Award className="w-3.5 h-3.5 text-amber-500" /> 10+ Years Experience
              </div>
            </div>

            {/* Doctor Content - Exact from PDF Page 4 */}
            <div className="md:col-span-7">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                Meet Dt. Dewyani Arbat
              </h2>

              <p className="text-sm sm:text-base font-semibold text-sky-900 bg-sky-100/60 p-3.5 rounded-xl border border-sky-200 mb-4">
                Hi, I’m Dt. Devyani Arbat, with over 10 years of experience in fitness, nutrition, and holistic lifestyle management.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                Her approach focuses on understanding insulin resistance, managing belly fat, and building healthier habits without extreme dieting or starvation.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Through the Metabolic Reset Blueprint, she guides individuals towards a more balanced lifestyle with a focus on real food, personalised nutrition, and long-term well-being.
              </p>

              {/* Tagline - Exact from PDF Page 4 */}
              <div className="text-base sm:text-lg font-black text-slate-900 tracking-wide mb-6 py-2 px-4 bg-white rounded-lg border border-slate-200 inline-block">
                Real Food. Sustainable Habits. Better Health.
              </div>

              {/* [[Book Your SEAT Now]] */}
              <div>
                <button
                  onClick={onOpenBooking}
                  className="bg-sky-600 hover:bg-sky-700 active:scale-98 text-white font-extrabold text-base py-3.5 px-8 rounded-xl shadow-md transition-all flex items-center gap-2"
                >
                  <span>Book Your SEAT Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
