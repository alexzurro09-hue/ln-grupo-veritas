'use client';

import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Building2, ChevronDown, ChevronRight, FileText, Landmark, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

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
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.2, 0.9, 0.2, 1] as [number, number, number, number] } },
};

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-none bg-gray-100 text-[#2f2f2f] text-[11px] font-medium tracking-wide border border-stone-200">
      {children}
    </span>
  );
}

function InteractiveRow({ href, children }: { href?: string; children: React.ReactNode }) {
  const className =
    'group flex items-center justify-between gap-4 py-3 px-4 rounded-md hover:bg-stone-100/50 transition-all duration-200';

  const content = (
    <>
      <span className="transition-transform duration-200 group-hover:translate-x-1">{children}</span>
      <ChevronRight
        size={16}
        className="shrink-0 text-[#8b4c39] transition-colors duration-200 group-hover:text-[#a03621]"
      />
    </>
  );

  if (!href) {
    return <div className={className}>{content}</div>;
  }

  return (
    <Link href={href} className={className}>
      {content}
    </Link>
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
              Mucho más que presentación de impuestos: blindaje tributario y consultoría estratégica para empresas y autónomos en Alcalá
              de Henares. Más de 30 años de rigor contable y fiscal.
            </p>
          </div>

          <div className="mt-10 md:mt-12 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 lg:gap-8 items-start">
            {/* Bento content */}
            <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-5">
              {/* Card 1: Gestión tributaria */}
              <motion.section variants={item} className="md:col-span-6 bg-white rounded-none border border-stone-100 shadow-[0_10px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_14px_30px_rgba(0,0,0,0.10)] transition-shadow p-6 md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif font-bold text-[18px] md:text-[20px] text-[#1b3022]">
                      Gestión Tributaria y Cumplimiento (AEAT)
                    </h3>
                    <p className="mt-2 text-[13px] text-[#333] font-sans leading-relaxed max-w-3xl">
                      Cumplimiento con criterio y planificación para reducir riesgos, anticipar inspecciones y mejorar la toma de decisiones
                      con datos ordenados.
                    </p>
                  </div>
                  <div className="text-[#1b3022]/80">
                    <FileText size={22} strokeWidth={1.6} />
                  </div>
                </div>

                <ul className="mt-5 list-none text-[13px] leading-relaxed text-[#333] font-sans divide-y divide-stone-100">
                  <li>
                    <InteractiveRow href="/servicios/fiscal/planificacion-fiscal-estrategica">
                      Planificación fiscal estratégica
                    </InteractiveRow>
                  </li>
                  <li>
                    <InteractiveRow href="/servicios/fiscal/impuesto-de-sociedades-y-cuentas-anuales">
                      Impuesto de Sociedades y Cuentas Anuales
                    </InteractiveRow>
                  </li>
                  <li>
                    <InteractiveRow href="/servicios/fiscal/iva-y-regimenes-especiales">
                      IVA y regímenes especiales
                    </InteractiveRow>
                  </li>
                  <li>
                    <InteractiveRow href="/servicios/fiscal/declaraciones-informativas-y-censales">
                      Declaraciones informativas y censales
                    </InteractiveRow>
                  </li>
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {aeatModels.map((m) => (
                    <React.Fragment key={m}>
                      <Pill>Modelo {m}</Pill>
                    </React.Fragment>
                  ))}
                </div>
              </motion.section>

              {/* Card 2: Autónomos */}
              <motion.section variants={item} className="md:col-span-3 bg-white rounded-none border border-stone-100 shadow-[0_10px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_14px_30px_rgba(0,0,0,0.10)] transition-shadow p-6 md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif font-bold text-[18px] md:text-[20px] text-[#1b3022]">
                      Gestión Integral del Autónomo
                    </h3>
                    <p className="mt-2 text-[13px] text-[#333] font-sans leading-relaxed">
                      Acompañamiento fiscal y de gestión para empezar bien, mantener orden y tomar decisiones con tranquilidad.
                    </p>
                  </div>
                  <div className="text-[#1b3022]/80">
                    <Building2 size={22} strokeWidth={1.6} />
                  </div>
                </div>

                <ul className="mt-5 list-none text-[13px] leading-relaxed text-[#333] font-sans divide-y divide-stone-100">
                  <li>
                    <InteractiveRow href="/servicios/fiscal/alta-y-asesoramiento-inicial-a-emprendedores">
                      Alta y asesoramiento inicial a emprendedores
                    </InteractiveRow>
                  </li>
                  <li>
                    <InteractiveRow href="/servicios/fiscal/gestion-de-reta-y-variaciones-de-actividad">
                      Gestión de RETA y variaciones de actividad
                    </InteractiveRow>
                  </li>
                  <li>
                    <InteractiveRow href="/servicios/fiscal/subvenciones-y-bonificaciones">
                      Subvenciones y bonificaciones
                    </InteractiveRow>
                  </li>
                  <li>
                    <InteractiveRow href="/servicios/fiscal/prestaciones-y-planificacion-de-jubilacion">
                      Prestaciones y planificación de jubilación
                    </InteractiveRow>
                  </li>
                </ul>
              </motion.section>

              {/* Card 3: Procedimientos y tributos locales */}
              <motion.section variants={item} className="md:col-span-3 bg-white rounded-none border border-stone-100 shadow-[0_10px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_14px_30px_rgba(0,0,0,0.10)] transition-shadow p-6 md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif font-bold text-[18px] md:text-[20px] text-[#1b3022]">
                      Procedimientos y Tributos Locales
                    </h3>
                    <p className="mt-2 text-[13px] text-[#333] font-sans leading-relaxed">
                      Trámites con organismos, ayuntamientos y administración local: defensa técnica y estrategia para asegurar que su operativa no se detenga.
                    </p>
                  </div>
                  <div className="text-[#1b3022]/80">
                    <Landmark size={22} strokeWidth={1.6} />
                  </div>
                </div>

                <ul className="mt-5 list-none text-[13px] leading-relaxed text-[#333] font-sans divide-y divide-stone-100">
                  <li>
                    <InteractiveRow href="/servicios/fiscal/licencias-comunicaciones-y-registros-municipales">
                      Licencias, comunicaciones y registros municipales
                    </InteractiveRow>
                  </li>
                  <li>
                    <InteractiveRow href="/servicios/fiscal/gestion-de-tributos-locales">
                      Gestión de tributos locales (IBI, Plusvalías)
                    </InteractiveRow>
                  </li>
                  <li>
                    <InteractiveRow href="/servicios/fiscal/presentacion-de-escritos-y-seguimiento-de-expedientes">
                      Presentación de escritos y seguimiento de expedientes
                    </InteractiveRow>
                  </li>
                  <li>
                    <InteractiveRow href="/servicios/fiscal/gestion-de-requerimientos-y-control-documental">
                      Gestión de requerimientos y control documental
                    </InteractiveRow>
                  </li>
                </ul>
              </motion.section>

              {/* Block 4: Premium - Inspection representation */}
              <motion.section
                variants={item}
                className="md:col-span-6 rounded-none border border-veritas-green/10 bg-[#f9f7f2] shadow-[0_10px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_14px_30px_rgba(0,0,0,0.10)] transition-shadow p-6 md:p-7"
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

                <ul className="mt-5 list-none text-[13px] leading-relaxed text-[#333] font-sans divide-y divide-stone-100">
                  <li>
                    <InteractiveRow href="/servicios/fiscal/analisis-de-risgos-y-trazabilidad-documental">
                      Análisis de riesgos y trazabilidad documental
                    </InteractiveRow>
                  </li>
                  <li>
                    <InteractiveRow href="/servicios/fiscal/preparacion-de-alegaciones-y-recursos">
                      Preparación de alegaciones y recursos
                    </InteractiveRow>
                  </li>
                  <li>
                    <InteractiveRow href="/servicios/fiscal/interlocucion-con-aeat-y-coordinacion-de-respuestas">
                      Interlocución con AEAT y coordinación de respuestas
                    </InteractiveRow>
                  </li>
                  <li>
                    <InteractiveRow href="/servicios/fiscal/plan-de-regularizacion-y-minimizacion-de-impacto">
                      Plan de regularización y minimización de impacto
                    </InteractiveRow>
                  </li>
                </ul>
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
                    href="/contacto"
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

