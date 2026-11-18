"use client";

import React, { useEffect } from 'react';

interface WistiaPlayerProps {
  mediaId?: string;
  aspect?: string;
  className?: string;
}

export const WistiaPlayer: React.FC<WistiaPlayerProps> = ({
  mediaId = "hec0u9fos1",
  aspect = "1.7777777777777777",
  className = "",
}) => {
  useEffect(() => {
    // 1. Load Wistia main player script if not already present
    if (!document.querySelector('script[src="https://fast.wistia.com/player.js"]')) {
      const script1 = document.createElement('script');
      script1.src = 'https://fast.wistia.com/player.js';
      script1.async = true;
      document.head.appendChild(script1);
    }

    // 2. Load Wistia video embed script module if not already present
    const embedSrc = `https://fast.wistia.com/embed/${mediaId}.js`;
    if (!document.querySelector(`script[src="${embedSrc}"]`)) {
      const script2 = document.createElement('script');
      script2.src = embedSrc;
      script2.type = 'module';
      script2.async = true;
      document.head.appendChild(script2);
    }
  }, [mediaId]);

  return (
    <div className={`relative w-full overflow-hidden rounded-2xl bg-slate-950 border-2 border-slate-200 shadow-2xl ${className}`}>
      {/* Fallback & blur swatch styling during initial script load */}
      <style>{`
        wistia-player[media-id='${mediaId}']:not(:defined) {
          background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${mediaId}/swatch');
          display: block;
          filter: blur(5px);
          padding-top: 56.25%;
        }
      `}</style>
      <wistia-player media-id={mediaId} aspect={aspect}></wistia-player>
    </div>
  );
};
