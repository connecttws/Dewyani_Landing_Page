"use client";

import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

interface WhatsAppCtaCardProps {
  whatsappGroupLink?: string;
}

export const WhatsAppCtaCard: React.FC<WhatsAppCtaCardProps> = ({
  whatsappGroupLink = "https://chat.whatsapp.com/InLCf5eWzxM2S5ZgAPFdpq?s=cl&p=i&mlu=4&ilr=4&iam=2",
}) => {
  return (
    <div className="w-full max-w-3xl mx-auto rounded-3xl bg-gradient-to-br from-emerald-50 via-teal-50/40 to-sky-50 border-2 border-emerald-400/80 p-5 sm:p-8 shadow-xl shadow-emerald-600/10 relative overflow-hidden">
      {/* Background Accent Graphics */}
      <div className="absolute -top-12 -right-12 w-40 h-40 bg-emerald-300/20 rounded-full blur-2xl pointer-events-none"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-teal-300/20 rounded-full blur-2xl pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Pulsing Priority Badge */}
        <div className="inline-flex items-center gap-2 bg-emerald-600 text-white px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-4 shadow-md shadow-emerald-600/30">
          <span className="w-2 h-2 rounded-full bg-emerald-200 animate-ping"></span>
          <span>Important Next Step</span>
        </div>

        {/* WhatsApp Icon */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-gradient-to-tr from-emerald-600 to-green-500 text-white flex items-center justify-center shadow-lg shadow-emerald-600/30 mb-4 transform hover:scale-105 transition-transform">
          <svg
            className="w-9 h-9 sm:w-11 sm:h-11 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          Join Our WhatsApp Group!
        </h2>

        {/* Subtitle */}
        <p className="mt-2 text-sm sm:text-base text-slate-700 max-w-xl font-medium leading-relaxed">
          Join our official WhatsApp group to receive the latest webinar updates, reminders, and Zoom joining details.
        </p>

        {/* Big High-Converting CTA Button */}
        <div className="mt-6 w-full max-w-md">
          <a
            href={whatsappGroupLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 hover:from-emerald-500 hover:to-green-500 text-white font-black text-base sm:text-lg shadow-xl shadow-emerald-600/35 hover:shadow-2xl transition-all active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Join Our WhatsApp Group!</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <p className="mt-3 text-xs text-slate-500 font-medium">
          🔒 Private group • Zero spam • Direct webinar access link
        </p>
      </div>
    </div>
  );
};
