'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  Home,
  ShieldCheck,
  Stethoscope,
  TrendingUp,
  Users,
  TriangleAlert,
} from 'lucide-react';
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

function ActionRow({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between gap-4 py-3 px-4 rounded-md hover:bg-stone-100/50 transition-all duration-200"
    >
      <span className="text-[13px] leading-relaxed text-[#333] font-sans transition-transform duration-200 group-hover:translate-x-1">
        {children}
      </span>
      <ChevronRight
        size={16}
        className="shrink-0 text-[#8b4c39] transition-colors duration-200 group-hover:text-[#a03621]"
      />
    </Link>
  );
}

export default function ServiciosLaboral() {
  return (
    <>
      <div className="bg-[#f5f5f1] border-b border-veritas-green/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
          <div className="max-w-3xl">
            <div className="text-[10px] uppercase tracking-[0.34em] text-veritas-green/70 font-bold">Operativa laboral</div>
            <h1 className="mt-3 font-serif font-bold text-[#1b3022] text-3xl md:text-4xl tracking-tight">
              Gestión de Personas y Seguridad Laboral
            </h1>
            <p className="mt-4 text-[14px] md:text-[15px] leading-relaxed text-[#3b3b3b] font-sans">
              Optimizamos el capital humano de su empresa garantizando el cumplimiento estricto de la normativa vigente.
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-5"
          >
            <motion.section
              variants={item}
              className="md:col-span-6 bg-white rounded-none border border-stone-100 shadow-[0_10px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_14px_30px_rgba(0,0,0,0.10)] transition-shadow p-6 md:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-serif font-bold text-[18px] md:text-[20px] text-[#1b3022]">Gestión Mensual (El Motor)</h2>
                  <p className="mt-2 text-[13px] text-[#333] font-sans leading-relaxed max-w-3xl">
                    Nóminas, cotizaciones y tributación recurrente con calendario, control y trazabilidad para evitar incidencias.
                  </p>
                </div>
                <div className="text-[#1b3022]/80">
                  <Users size={22} strokeWidth={1.6} />
                </div>
              </div>

              <ul className="mt-5 list-none text-[13px] leading-relaxed text-[#333] font-sans divide-y divide-stone-100">
                <li>
                  <ActionRow href="/servicios/laboral/nominas">Nóminas</ActionRow>
                </li>
                <li>
                  <ActionRow href="/servicios/laboral/cotizaciones">Cotizaciones</ActionRow>
                </li>
                <li>
                  <ActionRow href="/servicios/laboral/tributos">Tributos</ActionRow>
                </li>
              </ul>
            </motion.section>

            <motion.section
              variants={item}
              className="md:col-span-3 bg-white rounded-none border border-stone-100 shadow-[0_10px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_14px_30px_rgba(0,0,0,0.10)] transition-shadow p-6 md:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-serif font-bold text-[18px] md:text-[20px] text-[#1b3022]">Altas y Contratación</h2>
                  <p className="mt-2 text-[13px] text-[#333] font-sans leading-relaxed">
                    Afiliación, contratos y prórrogas con estudios previos de coste para contratar con seguridad.
                  </p>
                </div>
                <div className="text-[#1b3022]/80">
                  <TrendingUp size={22} strokeWidth={1.6} />
                </div>
              </div>

              <ul className="mt-5 list-none text-[13px] leading-relaxed text-[#333] font-sans divide-y divide-stone-100">
                <li>
                  <ActionRow href="/servicios/laboral/altas-bajas-y-variaciones-de-afiliacion">
                    Altas, bajas y variaciones de afiliación
                  </ActionRow>
                </li>
                <li>
                  <ActionRow href="/servicios/laboral/contratos-prorrogas-y-modificaciones">
                    Contratos, prórrogas y modificaciones
                  </ActionRow>
                </li>
                <li>
                  <ActionRow href="/servicios/laboral/estudios-de-coste-previo-y-bonificaciones">
                    Estudios de coste previo y bonificaciones
                  </ActionRow>
                </li>
                <li>
                  <ActionRow href="/servicios/laboral/comunicacion-y-registro-en-sistemas-oficiales">
                    Comunicación y registro en sistemas oficiales
                  </ActionRow>
                </li>
              </ul>
            </motion.section>

            <motion.section
              variants={item}
              className="md:col-span-3 bg-white rounded-none border border-stone-100 shadow-[0_10px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_14px_30px_rgba(0,0,0,0.10)] transition-shadow p-6 md:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-serif font-bold text-[18px] md:text-[20px] text-[#1b3022]">Protección y Seguimiento de Bajas</h2>
                  <p className="mt-2 text-[13px] text-[#333] font-sans leading-relaxed">
                    Gestión de contingencias, salud laboral e incidencias: seguimiento documental y coordinación con organismos.
                  </p>
                </div>
                <div className="text-[#1b3022]/80">
                  <Stethoscope size={22} strokeWidth={1.6} />
                </div>
              </div>

              <ul className="mt-5 list-none text-[13px] leading-relaxed text-[#333] font-sans divide-y divide-stone-100">
                <li>
                  <ActionRow href="/servicios/laboral/incapacidad-temporal-sistema-red-delta">
                    Incapacidad Temporal (Sistema RED / DELTA)
                  </ActionRow>
                </li>
                <li>
                  <ActionRow href="/servicios/laboral/maternidad-paternidad-y-prestaciones">
                    Maternidad / paternidad y prestaciones
                  </ActionRow>
                </li>
                <li>
                  <ActionRow href="/servicios/laboral/accidentes-de-trabajo-y-comunicaciones">
                    Accidentes de trabajo y comunicaciones
                  </ActionRow>
                </li>
                <li>
                  <ActionRow href="/servicios/laboral/seguimiento-de-partes-plazos-y-requerimientos">
                    Seguimiento de partes, plazos y requerimientos
                  </ActionRow>
                </li>
              </ul>
            </motion.section>

            <motion.section
              variants={item}
              className="md:col-span-3 bg-white rounded-none border border-stone-100 shadow-[0_10px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_14px_30px_rgba(0,0,0,0.10)] transition-shadow p-6 md:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-serif font-bold text-[18px] md:text-[20px] text-[#1b3022]">Extinciones y Crisis</h2>
                  <p className="mt-2 text-[13px] text-[#333] font-sans leading-relaxed">
                    Rigor, seriedad y documentación impecable en escenarios críticos.
                  </p>
                </div>
                <div className="text-[#1b3022]/80">
                  <TriangleAlert size={22} strokeWidth={1.6} />
                </div>
              </div>

              <ul className="mt-5 list-none text-[13px] leading-relaxed text-[#333] font-sans divide-y divide-stone-100">
                <li>
                  <ActionRow href="/servicios/laboral/despidos-y-cartas-con-estrategia-preventiva">
                    Despidos y cartas con estrategia preventiva
                  </ActionRow>
                </li>
                <li>
                  <ActionRow href="/servicios/laboral/finiquitos-indemnizaciones-y-liquidaciones">
                    Finiquitos, indemnizaciones y liquidaciones
                  </ActionRow>
                </li>
                <li>
                  <ActionRow href="/servicios/laboral/eres-ertes-y-coordinacion-con-sepe">
                    EREs / ERTEs y coordinación con SEPE
                  </ActionRow>
                </li>
                <li>
                  <ActionRow href="/servicios/laboral/negociacion-y-acompanamiento-en-conflictos">
                    Negociación y acompañamiento en conflictos
                  </ActionRow>
                </li>
              </ul>
            </motion.section>

            <motion.section
              variants={item}
              className="md:col-span-3 bg-white rounded-none border border-stone-100 shadow-[0_10px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_14px_30px_rgba(0,0,0,0.10)] transition-shadow p-6 md:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-serif font-bold text-[18px] md:text-[20px] text-[#1b3022]">Defensa ante la Inspección</h2>
                  <p className="mt-2 text-[13px] text-[#333] font-sans leading-relaxed">
                    Acompañamiento técnico y presencial ante la autoridad laboral: preparación, respuesta y estrategia.
                  </p>
                </div>
                <div className="text-[#1b3022]/80">
                  <ShieldCheck size={22} strokeWidth={1.6} />
                </div>
              </div>

              <ul className="mt-5 list-none text-[13px] leading-relaxed text-[#333] font-sans divide-y divide-stone-100">
                <li>
                  <ActionRow href="/servicios/laboral/preparacion-de-documentacion-y-trazabilidad">
                    Preparación de documentación y trazabilidad
                  </ActionRow>
                </li>
                <li>
                  <ActionRow href="/servicios/laboral/respuesta-a-requerimientos-y-actas">
                    Respuesta a requerimientos y actas
                  </ActionRow>
                </li>
                <li>
                  <ActionRow href="/servicios/laboral/interlocucion-y-acompanamiento-fisico">
                    Interlocución y acompañamiento físico
                  </ActionRow>
                </li>
              </ul>
            </motion.section>

            <motion.section
              variants={item}
              className="md:col-span-6 bg-white rounded-none border border-stone-100 shadow-[0_10px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_14px_30px_rgba(0,0,0,0.10)] transition-shadow p-6 md:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-serif font-bold text-[18px] md:text-[20px] text-[#1b3022]">Empleadores de Hogar</h2>
                  <p className="mt-2 text-[13px] text-[#333] font-sans leading-relaxed max-w-3xl">
                    Un servicio cercano y claro para particulares: altas, nóminas y regularidad con tranquilidad.
                  </p>
                </div>
                <div className="text-[#1b3022]/80">
                  <Home size={22} strokeWidth={1.6} />
                </div>
              </div>

              <ul className="mt-5 list-none text-[13px] leading-relaxed text-[#333] font-sans divide-y divide-stone-100">
                <li>
                  <ActionRow href="/servicios/laboral/hogar-alta-modificaciones-y-bajas">
                    Alta, modificaciones y bajas
                  </ActionRow>
                </li>
                <li>
                  <ActionRow href="/servicios/laboral/hogar-nominas-pagas-y-control-mensual">
                    Nóminas, pagas y control mensual
                  </ActionRow>
                </li>
                <li>
                  <ActionRow href="/servicios/laboral/hogar-asesoria-en-incidencias-y-documentacion">
                    Asesoría en incidencias y documentación
                  </ActionRow>
                </li>
              </ul>
            </motion.section>

            <motion.section variants={item} className="md:col-span-6">
              <div className="bg-white/70 rounded-none border border-stone-100 shadow-[0_10px_24px_rgba(0,0,0,0.06)] p-5 md:p-6">
                <div className="text-[10px] uppercase tracking-[0.28em] text-[#666] font-bold">Nota Informativa</div>
                <div className="mt-1 font-serif font-bold text-[#1b3022] text-[16px]">Exclusiones y alcance del servicio</div>
                <div className="mt-4 text-[12px] leading-relaxed text-[#666] font-sans space-y-3">
                  <p>
                    El alcance se ajusta al encargo profesional y a la documentación aportada. Determinadas actuaciones pueden requerir
                    contratación específica por su complejidad o por la intervención de terceros.
                  </p>
                  <p>
                    Quedan excluidas, salvo pacto expreso, actuaciones judiciales, informes periciales, desplazamientos extraordinarios y la
                    representación continuada fuera de los trámites laborales ordinarios.
                  </p>
                </div>
              </div>
            </motion.section>
          </motion.div>
        </div>
      </div>
    </>
  );
}

