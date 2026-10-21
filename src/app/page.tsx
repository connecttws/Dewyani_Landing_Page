"use client";

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { StrugglesDarkSection } from '@/components/StrugglesDarkSection';
import { CurriculumSection } from '@/components/CurriculumSection';
import { ComplicationsSection } from '@/components/ComplicationsSection';
import { PillarsSection } from '@/components/PillarsSection';
import { GuidanceSection } from '@/components/GuidanceSection';
import { DoctorSection } from '@/components/DoctorSection';
import { FaqSection } from '@/components/FaqSection';
import { BookingModal } from '@/components/BookingModal';
import { StickyBottomBar } from '@/components/StickyBottomBar';
import { Footer } from '@/components/Footer';

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-sky-500 selection:text-white flex flex-col">
      {/* 1. Header with exact Logo Card from PDF Page 1 */}
      <Header onOpenBooking={handleOpenBooking} />

      <main className="flex-1">
        {/* 2. Hero Section: Headline, [VSL VIDEO], 3 promises, [Book Your SEAT Now] */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 3. Section as shown in PDF Page 2 Screenshot (Dark container, 4 cards) */}
        <StrugglesDarkSection />

        {/* 4. Discover a Smarter Approach to Nutrition & Diabetes Management */}
        <CurriculumSection onOpenBooking={handleOpenBooking} />

        {/* 5. High Blood Sugar Today Can Affect Your Health Tomorrow. */}
        <ComplicationsSection />

        {/* 6. The 5 Pillars of the Metabolic Reset Blueprint */}
        <PillarsSection />

        {/* 7. Take Control of Your Daily Habits with the Right Guidance */}
        <GuidanceSection />

        {/* 8. Meet Dt. Dewyani Arbat */}
        <DoctorSection onOpenBooking={handleOpenBooking} />

        {/* 9. Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Floating Sticky Bar on scroll */}
      <StickyBottomBar onOpenBooking={handleOpenBooking} />

      {/* Interactive Booking / Seat Reservation Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={handleCloseBooking} />
    </div>
  );
}
