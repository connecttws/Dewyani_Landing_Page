"use client";

import React from 'react';

const STRUGGLES_LIST = [
  {
    title: 'Blood Sugar Fluctuations',
    description:
      'Finding it difficult to understand what affects your blood sugar levels and how daily food choices play a role?',
    image: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&w=800&q=80',
    alt: 'Blood Sugar Fluctuations and dietary choices',
  },
  {
    title: 'Difficulty Managing Weight',
    description:
      'Trying to manage your weight but struggling to find an approach that fits your lifestyle?',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
    alt: 'Difficulty Managing Weight and lifestyle balance',
  },
  {
    title: 'Confusion About What to Eat',
    description:
      'Getting conflicting diet advice and wondering which foods and portions are right for you?',
    image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=800&q=80',
    alt: 'Confusion About What to Eat and conflicting diet advice',
  },
  {
    title: 'Busy Schedule & Inconsistent Habits',
    description:
      'Finding it hard to maintain regular meals, physical activity, and a healthy sleep routine?',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80',
    alt: 'Busy Schedule and Inconsistent Habits in modern life',
  },
];

export const StrugglesDarkSection: React.FC = () => {
  return (
    <section id="struggles" className="py-16 sm:py-20 bg-[#0d1117] text-white scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header - Exact wording from PDF Page 1 & 2 */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Are You Struggling With Blood Sugar, Weight, or Confusing Diet Advice?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
            You may be trying to improve your health, but everyday challenges can make it difficult to know what to do next.
          </p>
        </div>

        {/* 4 Cards Grid - Styled closely to reference in PDF Page 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {STRUGGLES_LIST.map((item, index) => (
            <div
              key={index}
              className="bg-[#161b22] border border-slate-800 rounded-xl overflow-hidden shadow-lg transition-transform hover:-translate-y-1 duration-300"
            >
              {/* Card Image */}
              <div className="h-56 sm:h-64 w-full overflow-hidden bg-slate-900">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Card Text Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2.5">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
