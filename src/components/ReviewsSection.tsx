"use client";

import React from 'react';
import { Star, CheckCircle, Quote, ArrowRight } from 'lucide-react';

interface ReviewsSectionProps {
  onOpenBooking: () => void;
}

const REVIEWS_DATA = [
  {
    id: 1,
    name: "Dr. Renuka Pawar",
    role: "Medical Practitioner & Verified Client",
    badge: "Google review • 5 stars",
    stars: 5,
    text: "Ma'am provides personalized diet plan and she explains it's scientifically about the perticular diet plan provided to you and clears all your doubts. About the gym, trainers are really good, motivating, gives you full attention and properly explain the correct method of workout...",
    initials: "RP",
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: 2,
    name: "Sameer Khose",
    role: "Verified Google Reviewer",
    badge: "Google review • 5 stars",
    stars: 5,
    text: "One thing I absolutely love about synergy is that the nutritionist gives you a holistic view of how our body functions and what scientific approach is required in both training and diet to get the desired results. Moreover, the gym has a pleasant and hygienic environment, trainers attend you personally all the time and keep track of your daily exercise and improvement. Overall this gym is a good to go if you are not only willing to transform your body but also serious about your health, fitness and bringing positive changes in your lifestyle.",
    initials: "SK",
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: 3,
    name: "rajesh sarap",
    role: "Verified Google Reviewer",
    badge: "Google review • 5 stars",
    stars: 5,
    text: "Gym is highly maintained in all expects. Diet paln and body exercise is customizable for all according to the body type. Not only equipments but aslo Yoga,Zumba,and crossfit activities are aslo present.Gym trainers have the knowledge associated with gyming and are very freindly. Devyani mam who is the owner of the gym is a certified nutritionist and a inspiration for all womens. Overall this gym is the best.",
    initials: "RS",
    color: "from-sky-500 to-cyan-600",
  },
  {
    id: 4,
    name: "Samiksha Shelke",
    role: "Verified Google Reviewer",
    badge: "Google review • 5 stars",
    stars: 5,
    text: "I have joined this Gym couple of months ago & have such a beautiful experience with this positive and energetic place. All trainers are well trained & pay personal attention to everyone.My special Thanks to Devyani Mam,she always motivates & guide me with proper Nutrition & diet plan,so it really helps me to achieve my fitness goal.",
    initials: "SS",
    color: "from-purple-500 to-pink-600",
  },
  {
    id: 5,
    name: "Jyoti Vinchankar",
    role: "Verified Google Reviewer",
    badge: "Google review • 5 stars",
    stars: 5,
    text: "Very good service comfortable atmosphere trainers are certified n very supportiv diet plan given Dt Dewyani am result drive n scientific amazing place for workout",
    initials: "JV",
    color: "from-amber-500 to-orange-600",
  },
];

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-white border-t border-slate-200 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          {/* Google Rating Badge */}
          <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 px-4 py-2 rounded-full mb-4 shadow-2xs">
            {/* Google Multicolor Logo */}
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span className="text-xs font-bold text-slate-800">Rated 5.0 on Google Reviews</span>
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              ))}
            </div>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
            Review
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            Authentic Google reviews from clients who experienced Dt. Devyani Arbat's scientific, personalized nutrition guidance.
          </p>
        </div>

        {/* 5 Reviews Grid: 3 in First Row, 2 Centered in Second Row */}
        <div className="space-y-6">
          {/* Row 1: 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS_DATA.slice(0, 3).map((review) => (
              <div
                key={review.id}
                className="bg-slate-50/70 border-2 border-slate-200/90 hover:border-sky-300 rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Google Review Badge & Stars */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(review.stars)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                    {/* Google G small badge */}
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500 bg-white px-2 py-0.5 rounded-full border border-slate-200">
                      <span className="font-bold text-blue-600">G</span>
                      <span>Review</span>
                    </div>
                  </div>

                  {/* Review Text */}
                  <div className="relative mb-6">
                    <Quote className="w-6 h-6 text-sky-200 absolute -top-2 -left-1 opacity-70 pointer-events-none" />
                    <p className="relative z-10 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                      "{review.text}"
                    </p>
                  </div>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-slate-200/80 flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-tr ${review.color} text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-xs`}
                  >
                    {review.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1">
                      <span>{review.name}</span>
                      <CheckCircle className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                    </h4>
                    <p className="text-[11px] text-emerald-700 font-medium">
                      {review.badge}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: 2 cards centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {REVIEWS_DATA.slice(3, 5).map((review) => (
              <div
                key={review.id}
                className="bg-slate-50/70 border-2 border-slate-200/90 hover:border-sky-300 rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Google Review Badge & Stars */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(review.stars)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                    {/* Google G small badge */}
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500 bg-white px-2 py-0.5 rounded-full border border-slate-200">
                      <span className="font-bold text-blue-600">G</span>
                      <span>Review</span>
                    </div>
                  </div>

                  {/* Review Text */}
                  <div className="relative mb-6">
                    <Quote className="w-6 h-6 text-sky-200 absolute -top-2 -left-1 opacity-70 pointer-events-none" />
                    <p className="relative z-10 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                      "{review.text}"
                    </p>
                  </div>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-slate-200/80 flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-tr ${review.color} text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-xs`}
                  >
                    {review.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1">
                      <span>{review.name}</span>
                      <CheckCircle className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                    </h4>
                    <p className="text-[11px] text-emerald-700 font-medium">
                      {review.badge}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Bar */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenBooking}
            className="bg-sky-600 hover:bg-sky-700 active:scale-98 text-white font-extrabold text-base sm:text-lg py-4 px-8 rounded-xl shadow-md shadow-sky-600/25 transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Experience Personalized Guidance — Book Your Seat</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
