"use client";

import React from 'react';
import { Award, ShieldCheck, Sparkles, ArrowRight, Quote } from 'lucide-react';

interface DoctorBioSectionProps {
  onOpenBooking: () => void;
}

export const DoctorBioSection: React.FC<DoctorBioSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="expert" className="py-20 bg-white relative border-t border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-sky-50/90 via-white to-blue-50/50 rounded-3xl border-2 border-sky-200 p-8 sm:p-12 lg:p-16 shadow-xl shadow-sky-900/5 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Doctor Profile Photo */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500"></div>
                
                <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-sky-50">
                  <img
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80"
                    alt="Dt. Dr. Devyani Arbat, Senior Nutritionist & Metabolic Health Mentor"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>

                  {/* Experience Badge on Photo */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md border border-sky-200 p-3 rounded-2xl flex items-center gap-3 shadow-lg">
                    <div className="w-10 h-10 rounded-xl bg-sky-500 flex items-center justify-center text-white font-black">
                      10+
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-bold text-slate-900">Years of Clinical Experience</p>
                      <p className="text-[11px] text-sky-700 font-semibold">Fitness, Nutrition & Lifestyle</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-700 font-semibold">
                <span className="inline-flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-sky-200 shadow-xs">
                  <Award className="w-3.5 h-3.5 text-amber-500" />
                  Clinical Nutritionist
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-sky-200 shadow-xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
                  Insulin Resistance Specialist
                </span>
              </div>
            </div>

            {/* Right Column: Bio & Philosophy - Exact Text from PDF Page 4 */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-sky-100 border border-sky-300 text-sky-800 px-3.5 py-1.5 rounded-full text-xs font-bold mb-4">
                <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                Your Webinar Mentor & Guide
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                Meet Dt. Dewyani Arbat
              </h2>

              {/* Exact Quote from PDF Page 4 */}
              <div className="mt-5 relative bg-white rounded-2xl p-6 border border-sky-200 text-slate-800 shadow-xs">
                <Quote className="w-8 h-8 text-sky-200 absolute top-4 right-4" />
                <p className="text-base sm:text-lg font-semibold text-slate-900 italic leading-relaxed">
                  "Hi, I’m Dt. Devyani Arbat, with over 10 years of experience in fitness, nutrition, and holistic lifestyle management."
                </p>
              </div>

              {/* Exact Paragraphs from PDF Page 4 */}
              <div className="mt-6 space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                <p>
                  Her approach focuses on <strong className="text-slate-900 font-bold">understanding insulin resistance</strong>, <strong className="text-slate-900 font-bold">managing belly fat</strong>, and building healthier habits <span className="text-sky-700 font-bold">without extreme dieting or starvation</span>.
                </p>
                <p>
                  Through the <strong className="text-sky-700 font-bold">Metabolic Reset Blueprint</strong>, she guides individuals towards a more balanced lifestyle with a focus on real food, personalised nutrition, and long-term well-being.
                </p>
              </div>

              {/* Core Philosophy Banner - Exact from PDF Page 4 */}
              <div className="mt-8 py-3.5 px-6 bg-gradient-to-r from-sky-600 via-sky-700 to-blue-800 rounded-2xl inline-flex items-center gap-2 text-sm sm:text-base font-black text-white shadow-md shadow-sky-600/20">
                <span>Real Food.</span>
                <span className="text-sky-200">Sustainable Habits.</span>
                <span className="text-amber-200">Better Health.</span>
              </div>

              {/* Call to Action - Exact from PDF Page 4 */}
              <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button
                  onClick={onOpenBooking}
                  className="bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-black text-base px-8 py-4 rounded-xl shadow-lg shadow-sky-500/25 active:scale-95 transition-all flex items-center gap-2"
                >
                  <span>Book Your SEAT Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <span className="text-xs text-slate-500 font-medium">
                  Limited slots ensure individual attention during Q&A
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
