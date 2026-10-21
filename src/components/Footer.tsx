"use client";

import React from 'react';
import { ShieldCheck, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-sky-950 text-slate-400 text-xs py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Brand info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 shadow-md">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-white"
                >
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                </svg>
              </div>
              <div>
                <span className="font-extrabold text-white text-base tracking-tight block">
                  METABOLIC ACADEMY
                </span>
                <span className="text-[10px] uppercase tracking-wider text-sky-400 font-semibold">
                  Personalised Nutrition & Wellness
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Empowering individuals to understand insulin resistance, manage blood sugar, and adopt lifelong sustainable habits through real whole-food nutrition and holistic lifestyle science.
            </p>

            <div className="flex items-center gap-4 text-slate-400 text-xs">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-sky-400" /> support@metabolicacademy.org
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">Masterclass Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a href="#struggles" className="hover:text-sky-400 transition-colors">Everyday Challenges</a>
              </li>
              <li>
                <a href="#curriculum" className="hover:text-sky-400 transition-colors">What You Will Learn</a>
              </li>
              <li>
                <a href="#complications" className="hover:text-sky-400 transition-colors">Health Complications</a>
              </li>
              <li>
                <a href="#pillars" className="hover:text-sky-400 transition-colors">The 5 Pillars Blueprint</a>
              </li>
              <li>
                <a href="#expert" className="hover:text-sky-400 transition-colors">Meet Dt. Devyani Arbat</a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-sky-400 transition-colors">Frequently Asked Questions</a>
              </li>
            </ul>
          </div>

          {/* Medical Disclaimer */}
          <div className="md:col-span-4 space-y-3 bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
            <div className="flex items-center gap-1.5 text-slate-300 font-bold text-xs">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              <span>Medical & Health Disclaimer</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              The information presented in this webinar and educational materials is designed for educational and informational purposes only. It is not intended to replace direct professional medical diagnosis, treatment, or advice from your personal physician. Always consult your qualified healthcare provider before altering any prescribed medication or starting new diet regimes.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Metabolic Academy. All Rights Reserved.</p>
          <p className="text-sky-400 font-semibold">
            Real Food. Sustainable Habits. Better Health.
          </p>
        </div>
      </div>
    </footer>
  );
};
