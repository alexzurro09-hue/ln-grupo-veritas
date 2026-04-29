'use client';

import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Phone } from 'lucide-react';

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .2 5.3.2 11.86c0 2.1.55 4.15 1.6 5.96L0 24l6.35-1.66a11.8 11.8 0 0 0 5.7 1.46h.01c6.56 0 11.86-5.3 11.86-11.86 0-3.16-1.23-6.13-3.4-8.46Zm-8.46 18.2h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.77.98 1.01-3.67-.24-.38a9.83 9.83 0 0 1-1.5-5.16c0-5.46 4.45-9.9 9.93-9.9 2.65 0 5.14 1.03 7.01 2.9a9.86 9.86 0 0 1 2.9 7.01c0 5.47-4.45 9.9-9.94 9.9Zm5.45-7.41c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.96 1.17-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.79-1.68-2.09-.18-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.64-.93-2.25-.24-.58-.49-.5-.68-.5l-.58-.01c-.2 0-.52.07-.8.37-.28.3-1.05 1.03-1.05 2.5 0 1.47 1.08 2.9 1.23 3.1.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.28-.2-.58-.35Z" />
    </svg>
  );
}

type Props = {
  phoneHref?: string;
  whatsappHref?: string;
};

export default function ContactHub({
  phoneHref = 'tel:918866694',
  whatsappHref = 'https://wa.me/34639234228',
}: Props) {
  const [open, setOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const onPointerDown = (e: PointerEvent) => {
      if (!open) return;
      const t = e.target as Node | null;
      if (!t) return;
      if (popoverRef.current?.contains(t)) return;
      if (buttonRef.current?.contains(t)) return;
      setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('pointerdown', onPointerDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('pointerdown', onPointerDown);
    };
  }, [open]);

  return (
    <>
      {/* Boutique Action Bar (mobile/tablet) */}
      <div className="fixed bottom-0 left-0 right-0 z-[200] lg:hidden">
        <div className="bg-[#1b3022] text-[#F8F5E9] h-[60px] shadow-[0_-10px_30px_rgba(0,0,0,0.18)]">
          <div className="max-w-7xl mx-auto h-full grid grid-cols-[1fr_1px_1fr] items-center">
            <a
              href={phoneHref}
              className="h-full flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] hover:bg-white/10 transition-colors"
              aria-label="Llamada directa"
            >
              <Phone size={18} />
              <span>LLAMADA DIRECTA</span>
            </a>
            <div className="h-[26px] w-[1px] bg-white/20 justify-self-center" />
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="h-full flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] hover:bg-white/10 transition-colors"
              aria-label="WhatsApp consulta"
            >
              <WhatsAppIcon size={18} />
              <span>WHATSAPP CONSULTA</span>
            </a>
          </div>
        </div>
      </div>

      {/* Desktop trigger + popover */}
      <div className="hidden lg:block fixed bottom-6 right-6 z-[200]">
        <button
          ref={buttonRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="bg-[#1b3022] text-[#F8F5E9] px-5 py-3 rounded-none text-[11px] font-bold uppercase tracking-[0.22em] border border-white/10 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.10)] hover:brightness-110 transition"
          aria-haspopup="dialog"
          aria-expanded={open}
        >
          ASISTENCIA
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              ref={popoverRef}
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 6 }}
              transition={{ duration: 0.22, ease: [0.2, 0.9, 0.2, 1] }}
              className="absolute bottom-[62px] right-0 w-[320px] bg-white rounded-none border border-stone-100 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.10)] overflow-hidden"
              role="dialog"
              aria-label="Menú de contacto"
            >
              <div className="px-5 pt-4 pb-3 border-b border-gray-100">
                <div className="text-[10px] uppercase tracking-[0.28em] text-veritas-green/70 font-bold">
                  Contacto inmediato
                </div>
                <div className="font-serif text-[16px] font-bold text-veritas-green mt-1">
                  LN Grupo Veritas
                </div>
              </div>

              <div className="p-4 grid gap-2.5">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-none border border-[#1b3022] text-[#1b3022] bg-transparent text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#1b3022] hover:text-white transition"
                >
                  <WhatsAppIcon size={18} />
                  WhatsApp
                </a>
                <a
                  href={phoneHref}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-none bg-[#1b3022] text-[#F8F5E9] text-[11px] font-bold uppercase tracking-[0.2em] border border-white/10 hover:brightness-110 transition"
                >
                  <Phone size={18} />
                  Llamar
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

