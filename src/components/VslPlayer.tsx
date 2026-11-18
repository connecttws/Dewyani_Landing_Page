"use client";

import React from 'react';
import { WistiaPlayer } from './WistiaPlayer';

interface VslPlayerProps {
  onOpenBooking?: () => void;
  mediaId?: string;
}

export const VslPlayer: React.FC<VslPlayerProps> = ({
  mediaId = "hec0u9fos1",
}) => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <WistiaPlayer mediaId={mediaId} />
    </div>
  );
};
