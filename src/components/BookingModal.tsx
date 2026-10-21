"use client";

import React, { useState } from 'react';
import { X, Sparkles, Calendar, Clock, ShieldCheck, CheckCircle2, Download } from 'lucide-react';
import { RupeeSymbol } from './RupeeSymbol';
import { validateBookingForm, generateBookingPass, BookingFormData } from '../utils/metabolicCalculators';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    sessionDate: 'Sunday, 7:00 PM - 8:30 PM IST',
    primaryConcern: 'blood_sugar',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [confirmedTicket, setConfirmedTicket] = useState<{ ticketId: string; qrSeed: string } | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateBookingForm(formData);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      const pass = generateBookingPass(formData.fullName, formData.sessionDate);
      setConfirmedTicket(pass);
      setIsSubmitting(false);
    }, 700);
  };

  const handleDownloadCalendar = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Metabolic Academy//Mastering Diabetes Webinar//EN
BEGIN:VEVENT
SUMMARY:Mastering Diabetes Webinar with Dt. Devyani Arbat
DESCRIPTION:Live 90-min Masterclass by Dt. Devyani Arbat (Metabolic Academy). Ticket ID: ${confirmedTicket?.ticketId}
DTSTART;TZID=Asia/Kolkata:20261025T190000
DTEND;TZID=Asia/Kolkata:20261025T203000
LOCATION:Zoom Live Interactive
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'mastering-diabetes-webinar.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white border-2 border-sky-300 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-800 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close booking modal"
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-sky-50 hover:bg-sky-100 text-slate-600 flex items-center justify-center transition-colors border border-sky-200"
        >
          <X className="w-5 h-5" />
        </button>

        {!confirmedTicket ? (
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
              "Mastering Diabetes: A Practical Guide to Healthy Living" with Dt. Devyani Arbat
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
                <span>48-Hour HD Video Replay Access</span>
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
                    placeholder="+91 98765 43210"
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
                  <option value="Sunday, 7:00 PM - 8:30 PM IST">Upcoming Sunday, 7:00 PM – 8:30 PM IST (Recommended)</option>
                  <option value="Upcoming Saturday, 11:00 AM - 12:30 PM IST">Upcoming Saturday, 11:00 AM – 12:30 PM IST</option>
                  <option value="Next Sunday, 7:00 PM - 8:30 PM IST">Next Sunday, 7:00 PM – 8:30 PM IST</option>
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

              {/* Submit Button */}
              <div className="pt-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-black text-base shadow-lg shadow-sky-500/25 active:scale-98 transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Securing Your Seat...</span>
                  ) : (
                    <span className="flex items-center justify-center gap-1">
                      Confirm Seat • Special Fee <RupeeSymbol className="w-4 h-4 inline-block" />99
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
        ) : (
          /* Confirmation Pass Screen */
          <div className="text-center py-4">
            <div className="w-16 h-16 rounded-2xl bg-sky-100 border border-sky-300 text-sky-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <span className="text-xs font-mono uppercase tracking-wider text-sky-700 font-bold">
              Registration Confirmed!
            </span>
            <h3 className="text-2xl font-black text-slate-900 mt-1">Your Seat is Reserved</h3>
            <p className="text-xs text-slate-600 mt-1 max-w-sm mx-auto">
              Welcome, <span className="text-slate-900 font-bold">{formData.fullName}</span>! We look forward to seeing you at the masterclass.
            </p>

            {/* Digital Ticket Pass Card */}
            <div className="my-6 p-5 rounded-2xl bg-sky-50 border-2 border-dashed border-sky-400 text-left relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-sky-200 pb-3 mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-sky-600 flex items-center justify-center text-white font-black text-xs">
                    MA
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 leading-tight">METABOLIC ACADEMY</p>
                    <p className="text-[10px] text-sky-700 font-semibold">Personalised Nutrition & Wellness</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase font-bold text-slate-500 block">Ticket Pass</span>
                  <span className="font-mono text-xs font-black text-sky-900">{confirmedTicket.ticketId}</span>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <div>
                  <span className="text-slate-500 font-semibold">Session:</span>
                  <p className="font-bold text-slate-900">Mastering Diabetes: A Practical Guide to Healthy Living</p>
                </div>
                <div>
                  <span className="text-slate-500 font-semibold">Speaker:</span>
                  <p className="font-bold text-sky-700">Dt. Devyani Arbat (10+ Yrs Exp)</p>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div>
                    <span className="text-slate-500 font-semibold">Date & Time:</span>
                    <p className="font-bold text-slate-900">{formData.sessionDate}</p>
                  </div>
                  <div>
                    <span className="text-slate-500 font-semibold">Access Channel:</span>
                    <p className="font-bold text-slate-900">Private Zoom Link</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleDownloadCalendar}
                className="flex-1 py-3 px-4 rounded-xl bg-white hover:bg-sky-50 text-slate-700 text-xs font-bold flex items-center justify-center gap-2 border border-sky-300 transition-colors shadow-xs"
              >
                <Download className="w-4 h-4 text-sky-600" />
                <span>Add to Calendar (.ics)</span>
              </button>

              <button
                onClick={onClose}
                className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white text-xs font-black flex items-center justify-center gap-2 transition-colors shadow-md"
              >
                <span>Done</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
