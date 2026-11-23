"use client";

import React from 'react';

export const ThankYouVideo: React.FC = () => {
  return (
    <div className="w-full max-w-3xl mx-auto rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-950 border-2 border-sky-400/40 shadow-2xl shadow-sky-950/20">
      {/* 16:9 Vimeo Video Frame */}
      <div className="relative aspect-video w-full bg-slate-950 overflow-hidden">
        <iframe
          title="vimeo-player"
          src="https://player.vimeo.com/video/1117317617?h=79f1d32233"
          className="absolute inset-0 w-full h-full border-0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </div>
  );
};
