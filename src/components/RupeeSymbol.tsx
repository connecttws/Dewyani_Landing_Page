"use client";

import React from 'react';

interface RupeeSymbolProps {
  className?: string;
}

export const RupeeSymbol: React.FC<RupeeSymbolProps> = ({ className = 'w-3.5 h-3.5 inline-block -mt-0.5' }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-label="INR"
    >
      <path d="M6 3h12" />
      <path d="M6 8h12" />
      <path d="M6 13l8.5 8" />
      <path d="M6 13h3a4 4 0 0 0 0-8" />
    </svg>
  );
};
