"use client";

import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-sky-950 text-slate-400 text-xs py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Brand info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-xl p-1.5 shadow-md inline-block">
                <Image
                  src="/blue-logo.png"
                  alt="Metabolic Academy Logo"
                  width={3179}
                  height={2069}
                  sizes="(max-width: 640px) 120px, 160px"
                  className="h-9 sm:h-11 w-auto object-contain"
                />
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
