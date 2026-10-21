"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS_DATA = [
  {
    q: '1. What will I learn in this webinar?',
    a: 'You will learn practical nutrition and lifestyle strategies to support blood sugar management, healthy weight management, and overall well-being.',
  },
  {
    q: '2. Who should attend this webinar?',
    a: 'This webinar is suitable for people interested in diabetes management, healthier eating habits, sustainable weight loss, and improving their lifestyle.',
  },
  {
    q: '3. Do I need any prior knowledge of nutrition?',
    a: 'No. The webinar is designed to explain nutrition and lifestyle concepts in a simple, easy-to-understand way.',
  },
  {
    q: '4. Can I attend if I have a busy schedule?',
    a: 'Yes. The webinar will cover practical strategies that you can learn to adapt to your everyday routine.',
  },
  {
    q: '5. Will I need to follow a strict diet?',
    a: 'The webinar focuses on balanced nutrition and sustainable habits rather than extreme dieting or unnecessary food restrictions.',
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200 scroll-mt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 text-center tracking-tight mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-sky-600 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
