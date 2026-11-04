"use client";

import React, { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import {
  CheckCircle2,
  Calendar,
  Clock,
  Download,
  Video,
  ArrowLeft,
  Sparkles,
  ShieldCheck,
  Mail,
  HelpCircle,
} from 'lucide-react';
import { ThankYouVideo } from '@/components/ThankYouVideo';
import { WhatsAppCtaCard } from '@/components/WhatsAppCtaCard';
import { generateBookingPass } from '@/utils/metabolicCalculators';

function ThankYouContent() {
  const searchParams = useSearchParams();

  const [attendeeName, setAttendeeName] = useState<string>('');
  const [attendeeEmail, setAttendeeEmail] = useState<string>('');
  const [sessionSlot, setSessionSlot] = useState<string>('Upcoming Sunday, 7:00 PM – 8:30 PM IST');
  const [ticketId, setTicketId] = useState<string>('MA-DIA-8492');

  useEffect(() => {
    // 1. Try URL parameters first
    const nameParam = searchParams.get('name');
    const emailParam = searchParams.get('email');
    const slotParam = searchParams.get('slot');

    if (nameParam) setAttendeeName(nameParam);
    if (emailParam) setAttendeeEmail(emailParam);
    if (slotParam) setSessionSlot(slotParam);

    // 2. Fallback to sessionStorage if params missing
    try {
      const stored = sessionStorage.getItem('dewyani_registration');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (!nameParam && parsed.fullName) setAttendeeName(parsed.fullName);
        if (!emailParam && parsed.email) setAttendeeEmail(parsed.email);
        if (!slotParam && parsed.sessionDate) setSessionSlot(parsed.sessionDate);
        if (parsed.ticketId) {
          setTicketId(parsed.ticketId);
          return;
        }
      }
    } catch (_) {}

    // Generate ticket pass
    const pass = generateBookingPass(nameParam || 'Candidate', slotParam || 'Sunday, 7:00 PM IST');
    setTicketId(pass.ticketId);
  }, [searchParams]);

  const handleDownloadCalendar = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Metabolic Academy//Diabetes Wellness Webinar//EN
BEGIN:VEVENT
SUMMARY:Diabetes Wellness Webinar with Dt. Devyani Arbat
DESCRIPTION:Live 90-min Masterclass by Dt. Devyani Arbat (Metabolic Academy). Ticket ID: ${ticketId}. Zoom link will be delivered via WhatsApp and Email.
DTSTART;TZID=Asia/Kolkata:20261108T190000
DTEND;TZID=Asia/Kolkata:20261108T203000
LOCATION:Zoom Live Interactive
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'diabetes-wellness-webinar-dt-devyani.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-sky-500 selection:text-white">
      {/* 1. Header Navigation */}
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-sky-600 group-hover:bg-sky-500 text-white font-bold text-xs flex items-center justify-center transition-colors">
              MA
            </div>
            <div>
              <span className="font-extrabold text-sm sm:text-base tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors">
                Metabolic <span className="text-sky-600">Academy</span>
              </span>
              <span className="hidden sm:block text-[10px] text-slate-500 font-medium">
                Personalised Nutrition & Wellness
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-100 border border-emerald-300 px-3 py-1 rounded-full">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Seat Confirmed</span>
            </span>

            <Link
              href="/"
              className="text-xs font-bold text-slate-600 hover:text-sky-600 hidden sm:flex items-center gap-1 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </header>

      {/* 2. Main Content */}
      <main className="flex-1 py-8 sm:py-14 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-10 sm:space-y-12">
          {/* Hero Confirmation Banner */}
          <section className="text-center space-y-4">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-300 text-emerald-800 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-xs">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Ticket ID: {ticketId}</span>
            </div>

            {/* Headline - Exact User Spec */}
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Your Seat Is Successfully Reserved!
            </h1>

            {/* Subheading / Message - Exact User Spec */}
            <div className="max-w-2xl mx-auto text-base sm:text-lg text-slate-700 font-medium leading-relaxed space-y-2">
              <p>
                {attendeeName && (
                  <span className="font-bold text-slate-900">Dear {attendeeName}, </span>
                )}
                Thank you for registering for the Diabetes Wellness Webinar with Dt. Devyani Arbat.
              </p>
              <p className="text-slate-600 font-normal">
                Your seat has been booked! Watch the short video below for important information about the webinar and the next steps.
              </p>
            </div>
          </section>

          {/* 3. [THANK YOU PAGE VIDEO] Section */}
          <section aria-label="Thank You Page Orientation Video">
            <ThankYouVideo attendeeName={attendeeName} />
          </section>

          {/* 4. Join Our WhatsApp Group! Section */}
          <section aria-label="WhatsApp Group Invitation">
            <WhatsAppCtaCard />
          </section>

          {/* 5. Booking Summary & Pass Ticket Card */}
          <section className="w-full max-w-3xl mx-auto rounded-3xl bg-white border border-sky-200 p-6 sm:p-8 shadow-lg shadow-sky-900/5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-sky-700 font-bold block mb-1">
                  Official Reservation Pass
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  Mastering Diabetes Masterclass
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">
                  Presented by Dt. Devyani Arbat (10+ Yrs Clinical Nutritionist)
                </p>
              </div>

              <div className="bg-sky-50 border border-sky-200 rounded-2xl p-3 text-right shrink-0">
                <span className="text-[10px] uppercase font-bold text-slate-500 block">Pass Code</span>
                <span className="font-mono text-sm sm:text-base font-black text-sky-900">{ticketId}</span>
              </div>
            </div>

            {/* Event Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 text-sky-600 font-bold text-xs mb-1">
                  <Calendar className="w-4 h-4" />
                  <span>Scheduled Date</span>
                </div>
                <p className="text-xs sm:text-sm font-bold text-slate-900">{sessionSlot}</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 text-sky-600 font-bold text-xs mb-1">
                  <Clock className="w-4 h-4" />
                  <span>Duration</span>
                </div>
                <p className="text-xs sm:text-sm font-bold text-slate-900">90 Mins (Live + Q&A)</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 text-sky-600 font-bold text-xs mb-1">
                  <Video className="w-4 h-4" />
                  <span>Access Platform</span>
                </div>
                <p className="text-xs sm:text-sm font-bold text-slate-900">Private Zoom Room</p>
              </div>
            </div>

            {/* Calendar CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500 flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-sky-600 shrink-0" />
                <span>
                  {attendeeEmail
                    ? `Confirmation email dispatched to ${attendeeEmail}`
                    : 'Check your email inbox and WhatsApp for the Zoom link'}
                </span>
              </div>

              <button
                onClick={handleDownloadCalendar}
                className="w-full sm:w-auto py-3 px-5 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-800 text-xs font-black flex items-center justify-center gap-2 border border-sky-300 transition-colors shadow-xs cursor-pointer"
              >
                <Download className="w-4 h-4 text-sky-600" />
                <span>Add to Calendar (.ics)</span>
              </button>
            </div>
          </section>

          {/* 6. Step-by-Step Instructions */}
          <section className="w-full max-w-3xl mx-auto">
            <h4 className="text-center text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-4">
              What to Do Right Now
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex flex-col">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 font-black text-sm flex items-center justify-center mb-3">
                  1
                </div>
                <h5 className="font-bold text-sm text-slate-900 mb-1">Join WhatsApp Group</h5>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Click the WhatsApp button above. That is where we send the direct Zoom password.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex flex-col">
                <div className="w-8 h-8 rounded-xl bg-sky-100 text-sky-700 font-black text-sm flex items-center justify-center mb-3">
                  2
                </div>
                <h5 className="font-bold text-sm text-slate-900 mb-1">Save to Calendar</h5>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Download the calendar invite so you receive a notification 30 minutes before start time.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex flex-col">
                <div className="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-700 font-black text-sm flex items-center justify-center mb-3">
                  3
                </div>
                <h5 className="font-bold text-sm text-slate-900 mb-1">Be Ready 10 Mins Early</h5>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Log in at 6:50 PM IST with your notebook and recent test numbers ready.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* 7. Footer */}
      <footer className="mt-12 bg-white border-t border-slate-200 py-6 px-4 text-center text-xs text-slate-500">
        <div className="max-w-4xl mx-auto space-y-2">
          <p className="font-semibold text-slate-700">
            Metabolic Academy • Diabetes Wellness Webinar with Dt. Devyani Arbat
          </p>
          <p className="text-[11px] text-slate-400 max-w-xl mx-auto">
            Disclaimer: This masterclass is for educational and lifestyle wellness purposes. It is not intended to substitute for clinical medical diagnosis or prescription drug changes without your physician's supervision.
          </p>
          <p className="text-[10px] text-slate-400 pt-2">
            © {new Date().getFullYear()} Metabolic Academy. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white flex items-center justify-center p-6 text-slate-800">
          <div className="text-center space-y-3">
            <div className="w-10 h-10 border-4 border-sky-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="font-bold text-sm">Loading your reservation details...</p>
          </div>
        </div>
      }
    >
      <ThankYouContent />
    </Suspense>
  );
}
