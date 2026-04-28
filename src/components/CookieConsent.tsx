'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';

type ConsentState = {
  necessary: true;
  analytics: boolean;
  decidedAt: string;
};

const STORAGE_KEY = 'ln_cookie_consent_v1';

function readConsent(): ConsentState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<ConsentState>;
    if (parsed.necessary !== true) return null;
    if (typeof parsed.analytics !== 'boolean') return null;
    if (typeof parsed.decidedAt !== 'string') return null;
    return parsed as ConsentState;
  } catch {
    return null;
  }
}

function writeConsent(next: Omit<ConsentState, 'decidedAt'>) {
  const payload: ConsentState = {
    ...next,
    decidedAt: new Date().toISOString(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
}

export default function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  const links = useMemo(
    () => [
      { href: '/aviso-legal', label: 'Aviso Legal' },
      { href: '/privacidad', label: 'Privacidad' },
      { href: '/cookies', label: 'Cookies' },
    ],
    [],
  );

  useEffect(() => {
    setHydrated(true);
    const existing = readConsent();
    if (existing) {
      setAnalytics(existing.analytics);
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, []);

  useEffect(() => {
    const onOpenSettings = () => {
      const existing = readConsent();
      setAnalytics(existing?.analytics ?? false);
      setOpen(true);
      setShowSettings(true);
    };
    window.addEventListener('open-cookie-settings', onOpenSettings);
    return () => window.removeEventListener('open-cookie-settings', onOpenSettings);
  }, []);

  if (!hydrated || !open) return null;

  const acceptAll = () => {
    writeConsent({ necessary: true, analytics: true });
    setAnalytics(true);
    setOpen(false);
    setShowSettings(false);
  };

  const rejectAll = () => {
    writeConsent({ necessary: true, analytics: false });
    setAnalytics(false);
    setOpen(false);
    setShowSettings(false);
  };

  const savePreferences = () => {
    writeConsent({ necessary: true, analytics });
    setOpen(false);
    setShowSettings(false);
  };

  return (
    <div
      className="fixed left-0 right-0 bottom-[60px] lg:bottom-0 z-[130] pointer-events-none"
      aria-live="polite"
      aria-label="Banner de cookies"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pb-3 lg:pb-4 pr-24 pointer-events-auto">
        <div className="bg-black/90 text-white border border-white/10 rounded-none">
          <div className="px-4 md:px-5 py-2 md:py-3 flex flex-col gap-2">
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0 flex items-center gap-3">
                <span className="shrink-0 text-white/80" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2Zm2.9 6.4a1.1 1.1 0 1 1-1.1-1.1 1.1 1.1 0 0 1 1.1 1.1Zm-4.2.2a1.2 1.2 0 1 1-1.2-1.2 1.2 1.2 0 0 1 1.2 1.2ZM16.7 12a1.3 1.3 0 1 1-1.3-1.3 1.3 1.3 0 0 1 1.3 1.3Zm-4.6 4.4a1.6 1.6 0 1 1-1.6-1.6 1.6 1.6 0 0 1 1.6 1.6Zm-2.3-3.8a1.0 1.0 0 1 1-.9h.1a1 1 0 0 1 0 2h-.1a1 1 0 0 1-1-1.1Z" />
                  </svg>
                </span>

                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span className="text-xs font-bold uppercase tracking-[0.22em]">USO DE COOKIES</span>
                    <span className="text-xs text-white/75">
                      Usamos cookies propias y de terceros para funcionar y, si aceptas, para análisis.
                    </span>
                  </div>
                  <div className="mt-1 text-[11px] text-white/70">
                    <Link
                      href="/cookies"
                      className="underline underline-offset-4 decoration-white/30 hover:decoration-white/60 hover:text-white transition-colors rounded-none"
                    >
                      Política de cookies
                    </Link>
                  </div>
                </div>
              </div>

              <div className="shrink-0 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setShowSettings(true)}
                  className="border border-white/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white/10 transition-colors rounded-none"
                >
                  Configurar
                </button>
                <button
                  type="button"
                  onClick={acceptAll}
                  className="border border-white/20 bg-white text-black px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white/90 transition-colors rounded-none"
                >
                  Aceptar cookies
                </button>
              </div>
            </div>

            {showSettings ? (
              <div className="border-t border-white/10 pt-3">
                <div className="flex flex-col gap-3">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-white/80">
                    {links.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        className="underline underline-offset-4 decoration-white/30 hover:decoration-white/60 hover:text-white transition-colors rounded-none"
                      >
                        {l.label}
                      </Link>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-xs font-bold text-white">Cookies básicas</div>
                        <div className="text-xs text-white/70 leading-relaxed">Siempre activas.</div>
                      </div>
                      <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/70 select-none">
                        Activas
                      </div>
                    </div>

                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-xs font-bold text-white">Cookies de análisis</div>
                        <div className="text-xs text-white/70 leading-relaxed">Activar/desactivar.</div>
                      </div>
                      <label className="inline-flex items-center gap-2 select-none">
                        <span className="text-[11px] uppercase tracking-[0.18em] text-white/70">
                          {analytics ? 'On' : 'Off'}
                        </span>
                        <input
                          type="checkbox"
                          checked={analytics}
                          onChange={(e) => setAnalytics(e.target.checked)}
                          className="h-4 w-4 border border-white/40 bg-transparent accent-white rounded-none"
                          aria-label="Activar cookies de análisis"
                        />
                      </label>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={rejectAll}
                      className="border border-white/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white/10 transition-colors rounded-none"
                    >
                      Rechazar
                    </button>
                    <button
                      type="button"
                      onClick={savePreferences}
                      className="border border-white/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white/10 transition-colors rounded-none"
                    >
                      Guardar preferencias
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowSettings(false)}
                      className="border border-white/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white/10 transition-colors rounded-none"
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

