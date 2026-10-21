"use client";

import React, { useState } from 'react';
import { calculateMetabolicRisk, AssessmentAnswers, AssessmentResult } from '../utils/metabolicCalculators';
import { HeartPulse, CheckCircle2, AlertTriangle, ArrowRight, RotateCcw, Sparkles } from 'lucide-react';

interface AssessmentSectionProps {
  onOpenBooking: () => void;
}

export const AssessmentSection: React.FC<AssessmentSectionProps> = ({ onOpenBooking }) => {
  const [answers, setAnswers] = useState<AssessmentAnswers>({
    hba1cRange: 'prediabetes',
    afternoonCrash: true,
    waistAboveThreshold: true,
    familyHistory: true,
    stubbornWeight: true,
  });

  const [hasCalculated, setHasCalculated] = useState<boolean>(false);
  const [result, setResult] = useState<AssessmentResult | null>(null);

  const handleRunAssessment = () => {
    const res = calculateMetabolicRisk(answers);
    setResult(res);
    setHasCalculated(true);
  };

  const handleReset = () => {
    setAnswers({
      hba1cRange: 'unknown',
      afternoonCrash: false,
      waistAboveThreshold: false,
      familyHistory: false,
      stubbornWeight: false,
    });
    setResult(null);
    setHasCalculated(false);
  };

  return (
    <section id="assessment" className="py-20 bg-sky-50/50 relative border-t border-sky-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-sky-100 border border-sky-300 text-sky-800 px-3.5 py-1.5 rounded-full text-xs font-bold mb-3">
            <HeartPulse className="w-3.5 h-3.5 text-sky-600" />
            Interactive Diagnostic Self-Check
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Check Your Metabolic & Insulin Resistance Risk
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Take 45 seconds to evaluate your metabolic signals before attending the masterclass.
          </p>
        </div>

        <div className="bg-white rounded-3xl border-2 border-sky-200 p-6 sm:p-8 shadow-xl shadow-sky-900/5">
          <div className="space-y-6">
            {/* Question 1: HbA1c */}
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2.5">
                1. What is your most recent HbA1c level (3-month average blood glucose)?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { value: 'normal', label: '< 5.7% (Normal)' },
                  { value: 'prediabetes', label: '5.7% – 6.4% (Prediabetic)' },
                  { value: 'diabetes', label: '6.5%+ (Diabetic)' },
                  { value: 'unknown', label: "I Haven't Checked" },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => {
                      setAnswers((prev) => ({ ...prev, hba1cRange: opt.value as any }));
                      if (hasCalculated) setHasCalculated(false);
                    }}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all text-center ${
                      answers.hba1cRange === opt.value
                        ? 'bg-sky-500 text-white border-sky-600 shadow-sm'
                        : 'bg-sky-50/60 text-slate-700 border-sky-200 hover:bg-sky-100'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Question 2: Afternoon Slump */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-sky-50/60 border border-sky-200 gap-3">
              <div>
                <p className="text-sm font-bold text-slate-900">2. Afternoon Energy Crashes & Brain Fog</p>
                <p className="text-xs text-slate-500">Do you experience heavy sluggishness or cravings 2 hours after lunch?</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setAnswers((prev) => ({ ...prev, afternoonCrash: true }));
                    if (hasCalculated) setHasCalculated(false);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
                    answers.afternoonCrash
                      ? 'bg-sky-500 text-white border-sky-600 shadow-xs'
                      : 'bg-white text-slate-600 border-sky-200 hover:bg-sky-50'
                  }`}
                >
                  Yes
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setAnswers((prev) => ({ ...prev, afternoonCrash: false }));
                    if (hasCalculated) setHasCalculated(false);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
                    !answers.afternoonCrash
                      ? 'bg-sky-500 text-white border-sky-600 shadow-xs'
                      : 'bg-white text-slate-600 border-sky-200 hover:bg-sky-50'
                  }`}
                >
                  No
                </button>
              </div>
            </div>

            {/* Question 3: Waist Measurement */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-sky-50/60 border border-sky-200 gap-3">
              <div>
                <p className="text-sm font-bold text-slate-900">3. Abdominal / Visceral Waistline</p>
                <p className="text-xs text-slate-500">Is your waist circumference greater than 90cm / 35" (Men) or 80cm / 31" (Women)?</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setAnswers((prev) => ({ ...prev, waistAboveThreshold: true }));
                    if (hasCalculated) setHasCalculated(false);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
                    answers.waistAboveThreshold
                      ? 'bg-sky-500 text-white border-sky-600 shadow-xs'
                      : 'bg-white text-slate-600 border-sky-200 hover:bg-sky-50'
                  }`}
                >
                  Yes
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setAnswers((prev) => ({ ...prev, waistAboveThreshold: false }));
                    if (hasCalculated) setHasCalculated(false);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
                    !answers.waistAboveThreshold
                      ? 'bg-sky-500 text-white border-sky-600 shadow-xs'
                      : 'bg-white text-slate-600 border-sky-200 hover:bg-sky-50'
                  }`}
                >
                  No
                </button>
              </div>
            </div>

            {/* Question 4: Family History */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-sky-50/60 border border-sky-200 gap-3">
              <div>
                <p className="text-sm font-bold text-slate-900">4. Family History</p>
                <p className="text-xs text-slate-500">Do either of your parents or siblings have Diabetes or Hypertension?</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setAnswers((prev) => ({ ...prev, familyHistory: true }));
                    if (hasCalculated) setHasCalculated(false);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
                    answers.familyHistory
                      ? 'bg-sky-500 text-white border-sky-600 shadow-xs'
                      : 'bg-white text-slate-600 border-sky-200 hover:bg-sky-50'
                  }`}
                >
                  Yes
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setAnswers((prev) => ({ ...prev, familyHistory: false }));
                    if (hasCalculated) setHasCalculated(false);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
                    !answers.familyHistory
                      ? 'bg-sky-500 text-white border-sky-600 shadow-xs'
                      : 'bg-white text-slate-600 border-sky-200 hover:bg-sky-50'
                  }`}
                >
                  No
                </button>
              </div>
            </div>

            {/* Question 5: Stubborn Weight */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-sky-50/60 border border-sky-200 gap-3">
              <div>
                <p className="text-sm font-bold text-slate-900">5. Stubborn Weight Resistance</p>
                <p className="text-xs text-slate-500">Have you tried diets or walking before without lasting reduction in body weight?</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setAnswers((prev) => ({ ...prev, stubbornWeight: true }));
                    if (hasCalculated) setHasCalculated(false);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
                    answers.stubbornWeight
                      ? 'bg-sky-500 text-white border-sky-600 shadow-xs'
                      : 'bg-white text-slate-600 border-sky-200 hover:bg-sky-50'
                  }`}
                >
                  Yes
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setAnswers((prev) => ({ ...prev, stubbornWeight: false }));
                    if (hasCalculated) setHasCalculated(false);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
                    !answers.stubbornWeight
                      ? 'bg-sky-500 text-white border-sky-600 shadow-xs'
                      : 'bg-white text-slate-600 border-sky-200 hover:bg-sky-50'
                  }`}
                >
                  No
                </button>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-2 text-center">
              <button
                type="button"
                onClick={handleRunAssessment}
                className="bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-lg shadow-sky-500/25 active:scale-95 transition-all inline-flex items-center gap-2"
              >
                <Sparkles className="w-5 h-5 text-amber-200" />
                Analyze My Metabolic Risk
              </button>
            </div>
          </div>

          {/* Results Display */}
          {hasCalculated && result && (
            <div className="mt-8 pt-8 border-t border-sky-200 bg-sky-50/80 rounded-2xl p-6 sm:p-7 border border-sky-300 animate-fade-in">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
                    Your Metabolic Risk Profile
                  </span>
                  <div className="flex items-center gap-2 mt-1">
                    <span
                      className={`text-2xl font-black ${
                        result.riskCategory === 'Severe' || result.riskCategory === 'High'
                          ? 'text-rose-600'
                          : result.riskCategory === 'Moderate'
                          ? 'text-amber-600'
                          : 'text-sky-700'
                      }`}
                    >
                      {result.riskCategory} Risk
                    </span>
                    <span className="text-xs bg-white px-2.5 py-1 rounded-full text-slate-700 border border-sky-200 font-bold">
                      Score: {result.score}/100
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs text-slate-500 block font-semibold">Insulin Resistance Likelihood:</span>
                  <span className="text-sm font-bold text-sky-800">{result.insulinResistanceLikelihood}</span>
                </div>
              </div>

              {/* Recommendation */}
              <p className="text-sm text-slate-800 leading-relaxed bg-white p-4 rounded-xl border border-sky-200 font-medium">
                {result.recommendation}
              </p>

              {/* Recommended Focus Pillars */}
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-slate-600">Pillars Recommended for You:</span>
                {result.priorityPillars.map((p) => (
                  <span
                    key={p}
                    className="text-xs bg-sky-100 text-sky-800 border border-sky-300 px-2.5 py-1 rounded-lg font-bold"
                  >
                    Pillar: {p}
                  </span>
                ))}
              </div>

              {/* Call to Action */}
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-sky-200">
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1 font-semibold"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Retake Quiz
                </button>
                <button
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all shadow-md shadow-sky-500/20 flex items-center justify-center gap-2"
                >
                  <span>Discuss Results in Live Webinar</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
