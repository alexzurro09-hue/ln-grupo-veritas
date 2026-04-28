'use client';

import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function CookieSettingsLink({ children, className }: Props) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event('open-cookie-settings'))}
      className={className}
    >
      {children}
    </button>
  );
}

