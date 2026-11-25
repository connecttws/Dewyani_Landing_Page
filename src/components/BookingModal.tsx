"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { X, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { validateBookingForm, generateBookingPass, BookingFormData } from '../utils/metabolicCalculators';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const router = useRouter();

  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    sessionDate: 'Wednesday, 3 December, 7:00 PM – 8:30 PM IST',
    primaryConcern: 'blood_sugar',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateBookingForm(formData);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setSubmitError('');
    setIsSubmitting(true);

    const pass = generateBookingPass(formData.fullName, formData.sessionDate);

    // Save registration details to sessionStorage for the Thank You page
    try {
      sessionStorage.setItem(
        'dewyani_registration',
        JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          sessionDate: formData.sessionDate,
          primaryConcern: formData.primaryConcern,
          ticketId: pass.ticketId,
        })
      );
    } catch (_) {}

    try {
      const [res] = await Promise.all([
        fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...formData,
            ticketId: pass.ticketId,
          }),
        }),
        // Minimum delay to allow CRM lead tracker event listener to harvest and dispatch
        new Promise((resolve) => setTimeout(resolve, 450)),
      ]);

      const data = await res.json();
      if (!res.ok) {
        setSubmitError(data.error || 'Failed to reserve your seat. Please try again.');
        setIsSubmitting(false);
        return;
      }

      onClose();
      const params = new URLSearchParams({
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        slot: formData.sessionDate,
      });
      router.push(`/thank-you?${params.toString()}`);
    } catch (_) {
      setSubmitError('Network error. Please check your connection and try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white border-2 border-sky-300 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-800 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close booking modal"
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-sky-50 hover:bg-sky-100 text-slate-600 flex items-center justify-center transition-colors border border-sky-200 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div>
          {/* Modal Header */}
          <div className="flex items-center gap-2 bg-sky-100 border border-sky-300 px-3 py-1 rounded-full text-xs font-bold text-sky-800 w-fit mb-3">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Limited Masterclass Seat</span>
          </div>

          <h3 className="text-2xl font-black text-slate-900 tracking-tight">
            Reserve Your Live Webinar Seat
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            "Live Diabetes & Metabolic Health Webinar: Learn to Manage Blood Sugar Through Nutrition & Lifestyle" with Dt. Devyani Arbat
          </p>

          {/* Inclusions summary strip in light blue */}
          <div className="my-5 p-4 rounded-2xl bg-sky-50 border border-sky-200 text-xs space-y-1.5 font-medium">
            <div className="flex items-center gap-2 text-sky-900">
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
              <span>90-Min Live Interactive Webinar + Audience Q&A</span>
            </div>
            <div className="flex items-center gap-2 text-sky-900">
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
              <span>Bonus: "Metabolic Food Swaps & Blood Sugar Guide" PDF</span>
            </div>
            <div className="flex items-center gap-2 text-sky-900">
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
              <span>Direct WhatsApp Community Access & Instant Zoom Link</span>
            </div>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="e.g. Ramesh Kulkarni"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full bg-sky-50/50 border border-sky-200 focus:border-sky-500 rounded-xl py-2.5 px-3.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none"
              />
              {errors.fullName && <p className="text-xs text-rose-600 mt-1">{errors.fullName}</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="name@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-sky-50/50 border border-sky-200 focus:border-sky-500 rounded-xl py-2.5 px-3.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none"
                />
                {errors.email && <p className="text-xs text-rose-600 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  WhatsApp Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  placeholder="98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-sky-50/50 border border-sky-200 focus:border-sky-500 rounded-xl py-2.5 px-3.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none"
                />
                {errors.phone && <p className="text-xs text-rose-600 mt-1">{errors.phone}</p>}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Select Webinar Slot *
              </label>
              <select
                value={formData.sessionDate}
                onChange={(e) => setFormData({ ...formData, sessionDate: e.target.value })}
                className="w-full bg-sky-50/50 border border-sky-200 focus:border-sky-500 rounded-xl py-2.5 px-3.5 text-sm text-slate-900 focus:outline-none"
              >
                <option value="Wednesday, 3 December, 7:00 PM – 8:30 PM IST">Wednesday, 3 December, 7:00 PM – 8:30 PM IST</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Primary Health Goal
              </label>
              <select
                value={formData.primaryConcern}
                onChange={(e) => setFormData({ ...formData, primaryConcern: e.target.value })}
                className="w-full bg-sky-50/50 border border-sky-200 focus:border-sky-500 rounded-xl py-2.5 px-3.5 text-sm text-slate-900 focus:outline-none"
              >
                <option value="blood_sugar">Lowering High Fasting / Post-meal Blood Sugar</option>
                <option value="weight_management">Managing Stubborn Belly Fat & Weight</option>
                <option value="medicine_reduction">Reducing Reliance on Daily Diabetic Medications</option>
                <option value="diet_confusion">Overcoming Diet Confusion with Sustainable Habits</option>
                <option value="preventive">Preventive Health (Family History of Diabetes)</option>
              </select>
            </div>

            {submitError && (
              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs font-semibold text-rose-700">
                {submitError}
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-xl bg-[#0A2540] hover:bg-[#133A5E] text-white font-black text-base shadow-lg shadow-slate-900/30 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    <span>Reserving Your Seat...</span>
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-1">
                    Confirm & Reserve Seat
                  </span>
                )}
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
              <span>Instant Zoom invite sent immediately to WhatsApp and Email</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
