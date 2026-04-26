import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AnimatePresence, motion } from 'framer-motion';
import { BadgeCheck, Building2, ChevronDown, FileText, Landmark, ShieldCheck, Stethoscope, Baby, HeartPulse } from 'lucide-react';
import { Link } from 'react-router-dom';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.2, 0.9, 0.2, 1] } },
};

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-none bg-gray-100 text-[#2f2f2f] text-[11px] font-medium tracking-wide border border-stone-200">
      {children}
    </span>
  );
}

export default function ServiciosFiscal() {
  const [open, setOpen] = useState(false);

  const aeatModels = useMemo(
    () => [
      '036 / 037',
      '303',
      '130 / 131',
      '111 / 190',
      '115 / 180',
      '200',
      '202',
      '349',
      '390',
      '347',
      '184',
      '123 / 193',
      '720',
    ],
    [],
  );

  return (
    <>
      <Helmet>
        <title>Servicios Fiscales en Madrid | LN Grupo Veritas</title>
        <meta
          name="description"
          content="Estrategia y gestión fiscal para empresas y autónomos en Madrid. Cumplimiento AEAT, RETA, licencias y representación ante inspección."
        />
      </Helmet>

      <div className="bg-[#f9f7f2]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
          {/* Hero */}
          <div className="max-w-3xl">
            <div className="text-[10px] uppercase tracking-[0.34em] text-veritas-green/70 font-bold">
              Fiscalidad estratégica
            </div>
            <h2 className="mt-3 font-serif font-bold text-[#1b3022] text-3xl md:text-4xl tracking-tight">
              Estrategia y Gestión Fiscal
            </h2>
            <p className="mt-4 text-[14px] md:text-[15px] leading-relaxed text-[#3b3b3b] font-sans">
              Mucho más que presentación de impuestos: <span className="font-semibold text-[#1b3022]">blindaje tributario</span> para
              empresas y autónomos.
            </p>
          </div>

          <div className="mt-10 md:mt-12 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 lg:gap-8 items-start">
            {/* Bento content */}
            <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-5">
              {/* Block 1: AEAT core (bigger) */}
              <motion.section variants={item} className="md:col-span-6 bg-white rounded-none border border-stone-100 shadow-[0_10px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_14px_30px_rgba(0,0,0,0.10)] transition-shadow p-6 md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif font-bold text-[18px] md:text-[20px] text-[#1b3022]">
                      Cumplimiento Tributario (AEAT)
                    </h3>
                    <p className="mt-2 text-[13px] text-[#333] font-sans leading-relaxed max-w-3xl">
                      Presentación, revisión y control de obligaciones periódicas, informativas y censales. Orden, calendario y criterio para
                      evitar riesgos y mejorar la toma de decisiones.
                    </p>
                  </div>
                  <div className="text-[#1b3022]/80">
                    <FileText size={22} strokeWidth={1.6} />
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {aeatModels.map((m) => (
                    <React.Fragment key={m}>
                      <Pill>Modelo {m}</Pill>
                    </React.Fragment>
                  ))}
                </div>
              </motion.section>

              {/* Block 2: Autónomos */}
              <motion.section variants={item} className="md:col-span-3 bg-white rounded-none border border-stone-100 shadow-[0_10px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_14px_30px_rgba(0,0,0,0.10)] transition-shadow p-6 md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif font-bold text-[18px] md:text-[20px] text-[#1b3022]">
                      Gestión Integral del Autónomo
                    </h3>
                    <p className="mt-2 text-[13px] text-[#333] font-sans leading-relaxed">
                      Alta/baja, variaciones, cobertura y acompañamiento en incidencias de vida laboral.
                    </p>
                  </div>
                  <div className="text-[#1b3022]/80">
                    <Building2 size={22} strokeWidth={1.6} />
                  </div>
                </div>

                <ul className="mt-5 space-y-2.5 list-none text-[13px] leading-relaxed text-[#333] font-sans">
                  <li className="flex gap-2.5">
                    <span className="mt-[2px] text-veritas-red"><BadgeCheck size={16} strokeWidth={2.2} /></span>
                    <span>Altas, bajas y variaciones en RETA</span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="mt-[2px] text-veritas-red"><HeartPulse size={16} strokeWidth={2.2} /></span>
                    <span>Bajas, contingencias y seguimiento documental</span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="mt-[2px] text-veritas-red"><Baby size={16} strokeWidth={2.2} /></span>
                    <span>Maternidad / paternidad y prestaciones</span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="mt-[2px] text-veritas-red"><Stethoscope size={16} strokeWidth={2.2} /></span>
                    <span>Jubilación y planificación de cotización</span>
                  </li>
                </ul>
              </motion.section>

              {/* Block 3: Organismos & Ayuntamientos */}
              <motion.section variants={item} className="md:col-span-3 bg-white rounded-none border border-stone-100 shadow-[0_10px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_14px_30px_rgba(0,0,0,0.10)] transition-shadow p-6 md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif font-bold text-[18px] md:text-[20px] text-[#1b3022]">
                      Gestión Administrativa y Licencias
                    </h3>
                    <p className="mt-2 text-[13px] text-[#333] font-sans leading-relaxed">
                      Trámites con organismos, ayuntamientos y administración local para que la operativa no se detenga.
                    </p>
                  </div>
                  <div className="text-[#1b3022]/80">
                    <Landmark size={22} strokeWidth={1.6} />
                  </div>
                </div>

                <ul className="mt-5 space-y-2.5 list-none text-[13px] leading-relaxed text-[#333] font-sans">
                  <li className="flex gap-2.5">
                    <span className="mt-[2px] text-veritas-red"><BadgeCheck size={16} strokeWidth={2.2} /></span>
                    <span>Licencias, comunicaciones y registros municipales</span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="mt-[2px] text-veritas-red"><BadgeCheck size={16} strokeWidth={2.2} /></span>
                    <span>IBI y gestión de tributos locales</span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="mt-[2px] text-veritas-red"><BadgeCheck size={16} strokeWidth={2.2} /></span>
                    <span>Presentación de escritos y seguimiento de expedientes</span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="mt-[2px] text-veritas-red"><BadgeCheck size={16} strokeWidth={2.2} /></span>
                    <span>Gestión documental y requerimientos</span>
                  </li>
                </ul>
              </motion.section>

              {/* Block 4: Premium - Inspection representation */}
              <motion.section
                variants={item}
                className="md:col-span-6 rounded-none border border-[#c7b07a]/45 bg-[#f3efe3] shadow-[0_10px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_14px_30px_rgba(0,0,0,0.10)] transition-shadow p-6 md:p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif font-bold text-[18px] md:text-[20px] text-[#1b3022]">
                      Representación ante Inspección
                    </h3>
                    <p className="mt-2 text-[13px] text-[#333] font-sans leading-relaxed max-w-3xl">
                      Un servicio premium de defensa y acompañamiento: estrategia, respuesta a requerimientos y presencia en actuaciones,
                      protegiendo su posición con rigor técnico y serenidad.
                    </p>
                  </div>
                  <div className="text-[#1b3022]/80">
                    <ShieldCheck size={22} strokeWidth={1.6} />
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    'Análisis de riesgos y trazabilidad documental',
                    'Preparación de alegaciones y recursos',
                    'Interlocución con AEAT y coordinación de respuestas',
                    'Plan de regularización y minimización de impacto',
                  ].map((t) => (
                    <div key={t} className="flex gap-2.5 items-start text-[13px] text-[#333] font-sans">
                      <span className="mt-[2px] text-veritas-red"><BadgeCheck size={16} strokeWidth={2.2} /></span>
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Small print / exclusions */}
              <motion.section variants={item} className="md:col-span-6">
                <div className="bg-white/70 rounded-none border border-stone-100 shadow-[0_10px_24px_rgba(0,0,0,0.06)] p-5 md:p-6">
                  <button
                    type="button"
                    onClick={() => setOpen((v) => !v)}
                    className="w-full flex items-center justify-between gap-3 text-left"
                    aria-expanded={open}
                  >
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.28em] text-[#666] font-bold">
                        Alcance y Condiciones del Servicio
                      </div>
                      <div className="mt-1 font-serif font-bold text-[#1b3022] text-[16px]">
                        Small print con clase (sin sorpresas)
                      </div>
                    </div>
                    <ChevronDown className={`text-[#666] transition-transform ${open ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: [0.2, 0.9, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 text-[12px] leading-relaxed text-[#666] font-sans space-y-3">
                          <p>
                            La prestación del servicio se ajusta al encargo profesional y a la documentación aportada por el cliente. En
                            determinados supuestos pueden existir limitaciones de plazo, disponibilidad de información o requisitos formales.
                          </p>
                          <p>
                            Quedan excluidos, salvo contratación expresa, actuaciones judiciales, informes periciales y cualquier gestión que
                            requiera poderes específicos, desplazamientos extraordinarios o representación continuada ante terceros.
                          </p>
                          <p>
                            Siempre le indicaremos el alcance exacto antes de iniciar cualquier actuación adicional.
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.section>
            </motion.div>

            {/* Sticky summary (desktop) */}
            <div className="hidden lg:block lg:sticky lg:top-[160px]">
              <div className="bg-white rounded-none border border-stone-100 shadow-[0_10px_24px_rgba(0,0,0,0.08)] p-6">
                <div className="text-[10px] uppercase tracking-[0.28em] text-veritas-green/70 font-bold">
                  Respuesta rápida
                </div>
                <div className="mt-2 font-serif text-[18px] font-bold text-[#1b3022]">
                  ¿Necesita asesoría inmediata?
                </div>
                <p className="mt-3 text-[12px] text-[#666] leading-relaxed font-sans">
                  Escríbanos por WhatsApp o solicite una cita. Le guiamos con un plan claro y documentación ordenada.
                </p>

                <div className="mt-5 grid gap-3">
                  <a
                    href="https://wa.me/34918866694"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full text-center py-3 rounded-none border border-[#1b3022] text-[#1b3022] bg-transparent text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#1b3022] hover:text-white transition"
                  >
                    WhatsApp directo
                  </a>
                  <Link
                    to="/contacto"
                    className="w-full text-center py-3 rounded-none bg-[#1b3022] text-[#F8F5E9] text-[11px] font-bold uppercase tracking-[0.2em] border border-white/10 hover:brightness-110 transition"
                  >
                    Solicitar cita
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

