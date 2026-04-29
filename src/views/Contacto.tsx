'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react';

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .2 5.3.2 11.86c0 2.1.55 4.15 1.6 5.96L0 24l6.35-1.66a11.8 11.8 0 0 0 5.7 1.46h.01c6.56 0 11.86-5.3 11.86-11.86 0-3.16-1.23-6.13-3.4-8.46Zm-8.46 18.2h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.77.98 1.01-3.67-.24-.38a9.83 9.83 0 0 1-1.5-5.16c0-5.46 4.45-9.9 9.93-9.9 2.65 0 5.14 1.03 7.01 2.9a9.86 9.86 0 0 1 2.9 7.01c0 5.47-4.45 9.9-9.94 9.9Zm5.45-7.41c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.96 1.17-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.79-1.68-2.09-.18-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.64-.93-2.25-.24-.58-.49-.5-.68-.5l-.58-.01c-.2 0-.52.07-.8.37-.28.3-1.05 1.03-1.05 2.5 0 1.47 1.08 2.9 1.23 3.1.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.28-.2-.58-.35Z" />
    </svg>
  );
}

const ADDRESS = 'Camino de Alcalá 52, 28816 Camarma de Esteruelas (Madrid)';
const HOURS = 'Lunes a Jueves: 09:00 - 18:00 | Viernes: 09:00 - 15:00';
const BUSINESS_QUERY = 'Camarlex Veritas Abogados, Camarma de Esteruelas';

export default function Contacto() {
  const mapsHref =
    'https://www.google.com/maps/search/?api=1&query=Camarlex+Veritas+Abogados+Camarma+de+Esteruelas';
  const embedSrc = `https://www.google.com/maps?q=${encodeURIComponent(BUSINESS_QUERY)}&z=18&output=embed`;

  return (
    <div className="min-h-[calc(100vh-214px)]">
      <section className="bg-[#f9f7f2] border-b border-veritas-green/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-12">
          <h1 className="font-serif text-3xl md:text-4xl font-bold tracking-wide text-veritas-green">Contacto</h1>
          <p className="mt-3 text-[13px] md:text-[14px] text-veritas-gray max-w-2xl leading-relaxed">
            Estamos a su disposición para proteger sus intereses legales y corporativos.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-14 items-start">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="bg-white"
            >
              <h2 className="font-serif text-[18px] md:text-[20px] font-bold text-veritas-green">Solicite una Cita</h2>
              <p className="mt-2 text-[12px] text-[#777] leading-relaxed max-w-md">
                Para una atención inmediata, puede contactarnos directamente por teléfono o WhatsApp.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+34918866694"
                  className="flex-1 flex items-center justify-center gap-2.5 py-4 px-4 bg-[#1a2e23] text-white text-[11px] font-bold uppercase tracking-[0.2em] rounded-none hover:brightness-110 transition-all"
                >
                  <Phone size={15} strokeWidth={2} />
                  Llamar ahora
                </a>
                <a
                  href="https://wa.me/34639234228"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2.5 py-4 px-4 bg-white border border-black text-black text-[11px] font-bold uppercase tracking-[0.2em] rounded-none hover:bg-stone-50 transition-all"
                >
                  <WhatsAppIcon size={15} />
                  Contactar por WhatsApp
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.08 }}
              className="bg-white"
            >
              <h2 className="font-serif text-[18px] md:text-[20px] font-bold text-veritas-green">
                Información Institucional
              </h2>
              <div className="mt-8 space-y-5 text-[13px] text-veritas-gray">
                <InfoRow icon={<Phone size={18} />} title="Teléfono" value="918 86 66 94" />
                <InfoRow icon={<Mail size={18} />} title="Email" value="info@lngrupoveritas.es" />
                <InfoRow icon={<MapPin size={18} />} title="Dirección" value={ADDRESS} />
                <InfoRow icon={<Clock size={18} />} title="Horario de Atención" value={HOURS} />
              </div>

              <div className="mt-10 border border-gray-200 rounded-none overflow-hidden bg-[#f9f7f2]">
                <div className="p-6 md:p-7">
                  <div className="font-serif text-[14px] font-semibold text-veritas-green tracking-wide">
                    Ubicación
                  </div>
                  <p className="mt-2 text-[12px] text-[#777] leading-relaxed max-w-md">{ADDRESS}</p>
                  <div className="mt-4 h-[240px] border border-gray-200 rounded-none bg-white relative overflow-hidden">
                    <iframe
                      title="Mapa - LN Grupo Veritas"
                      src={embedSrc}
                      className="absolute inset-0 w-full h-full"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>

                  <a
                    href={mapsHref}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 bg-[#1b3022] text-white px-5 py-3 text-[11px] uppercase tracking-[0.22em] font-bold hover:bg-veritas-red transition-all duration-300 ease-in-out rounded-none"
                  >
                    Abrir en Google Maps <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

function InfoRow({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="text-veritas-green mt-0.5">{icon}</div>
      <div>
        <div className="text-[10px] uppercase tracking-[0.22em] font-bold text-veritas-green/70">{title}</div>
        <div className="mt-1 leading-relaxed">{value}</div>
      </div>
    </div>
  );
}

