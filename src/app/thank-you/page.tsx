"use client";

import React, { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { ThankYouVideo } from '@/components/ThankYouVideo';

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
            <Image
              src="/blue-logo.png"
              alt="Metabolic Academy Logo"
              width={3179}
              height={2069}
              priority
              sizes="(max-width: 640px) 120px, 160px"
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
      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
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

            {/* WhatsApp Join Button (Moved to upper side of VSL video) */}
            <div className="pt-2 flex justify-center">
              <a
                href="https://chat.whatsapp.com/InLCf5eWzxM2S5ZgAPFdpq?s=cl&p=i&mlu=4&ilr=4&iam=2"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full sm:w-auto py-4 px-8 rounded-2xl bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 hover:from-emerald-500 hover:to-green-500 text-white font-black text-base sm:text-lg shadow-xl shadow-emerald-600/35 hover:shadow-2xl transition-all active:scale-98 inline-flex items-center justify-center gap-3 cursor-pointer"
              >
                <svg
                  className="w-6 h-6 fill-current shrink-0"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>Join Our WhatsApp Group!</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </section>

          {/* VSL Video Section (Directly Below WhatsApp Button) */}
          <section aria-label="Thank You Page Orientation Video">
            <ThankYouVideo />
          </section>
        </div>
      </main>

      {/* 3. Footer */}
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
