import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react';

const ADDRESS = 'Camino de Alcalá 52, 28816 Camarma de Esteruelas (Madrid)';
const HOURS = 'Lunes a Jueves: 09:00 - 18:00 | Viernes: 09:00 - 15:00';
const PLUS_CODE = 'GJWF+J4 Camarma de Esteruelas';
const MAP_COORDS = { lat: 40.549216, lng: -3.378822 };
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
                Cuéntenos brevemente su caso. Le responderemos con discreción y rapidez.
              </p>

              <form className="mt-8 flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Nombre Completo"
                  className="border border-gray-200 py-3 px-3 text-[13px] outline-none bg-transparent focus:border-[#1b3022] transition-colors rounded-none"
                />
                <input
                  type="email"
                  placeholder="Correo Electrónico"
                  className="border border-gray-200 py-3 px-3 text-[13px] outline-none bg-transparent focus:border-[#1b3022] transition-colors rounded-none"
                />
                <textarea
                  placeholder="Su Mensaje"
                  className="border border-gray-200 py-3 px-3 text-[13px] outline-none bg-transparent focus:border-[#1b3022] transition-colors h-[140px] resize-none rounded-none"
                />
                <button
                  type="submit"
                  className="mt-2 bg-[#1b3022] text-white py-4 px-6 text-[11px] uppercase tracking-[0.25em] font-bold hover:bg-veritas-red transition-all duration-300 ease-in-out cursor-pointer rounded-none border border-white/10 w-full"
                >
                  Enviar Solicitud
                </button>
              </form>
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
                <InfoRow icon={<Phone size={18} />} title="Teléfono" value="918866694" />
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
                  <p className="mt-2 text-[11px] text-[#777] leading-relaxed">
                    <span className="uppercase tracking-[0.2em] text-veritas-green/60 font-bold">Plus Code:</span>{' '}
                    {PLUS_CODE}
                  </p>

                  <div className="mt-5 h-[240px] border border-gray-200 rounded-none bg-white relative overflow-hidden">
                    <iframe
                      title="Mapa - Camarlex Veritas Abogados"
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

