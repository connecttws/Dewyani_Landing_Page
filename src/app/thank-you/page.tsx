"use client";

import React, { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import {
  CheckCircle2,
  ArrowLeft,
  Sparkles,
} from 'lucide-react';
import { ThankYouVideo } from '@/components/ThankYouVideo';
import { WhatsAppCtaCard } from '@/components/WhatsAppCtaCard';

function ThankYouContent() {
  const searchParams = useSearchParams();

  const [attendeeName, setAttendeeName] = useState<string>('');
  const [ticketId, setTicketId] = useState<string>('MA-CAN-3367');

  useEffect(() => {
    const nameParam = searchParams.get('name');
    if (nameParam) setAttendeeName(nameParam);

    try {
      const stored = sessionStorage.getItem('dewyani_registration');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (!nameParam && parsed.fullName) setAttendeeName(parsed.fullName);
        if (parsed.ticketId) {
          setTicketId(parsed.ticketId);
          return;
        }
      }
    } catch (_) {}

    setTicketId('MA-CAN-3367');
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-sky-500 selection:text-white">
      {/* 1. Header Navigation */}
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <img
              src="/blue-logo.png"
              alt="Metabolic Academy Logo"
              className="h-9 sm:h-11 w-auto object-contain"
            />
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
        <div className="max-w-3xl mx-auto space-y-8 sm:space-y-10">
          {/* Hero Confirmation Banner */}
          <section className="text-center space-y-4">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-300 text-emerald-800 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-xs">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Ticket ID: {ticketId}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Your Webinar Seat Is Confirmed!
            </h1>

            {/* Subheading / Message */}
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
              Join our official WhatsApp group to receive the latest webinar updates, reminders, and Zoom joining details.
            </p>
          </section>

          {/* 3. VSL Video Section */}
          <section aria-label="Thank You Page Orientation Video">
            <ThankYouVideo />
          </section>

          {/* 4. Join Our WhatsApp Group! Section */}
          <section aria-label="WhatsApp Group Invitation">
            <WhatsAppCtaCard />
          </section>
        </div>
      </main>

      {/* 5. Footer */}
      <footer className="mt-12 bg-white border-t border-slate-200 py-6 px-4 text-center text-xs text-slate-500">
        <div className="max-w-4xl mx-auto space-y-2">
          <p className="font-semibold text-slate-700">
            Metabolic Academy • Diabetes Wellness Webinar with Dt. Devyani Arbat
          </p>
          <p className="text-[11px] text-slate-400 max-w-xl mx-auto">
            Disclaimer: This masterclass is for educational and lifestyle wellness purposes. It is not intended to substitute for clinical medical diagnosis or prescription drug changes without your physician&apos;s supervision.
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
