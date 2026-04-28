'use client';

import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Building2,
  ChevronDown,
  ChevronRight,
  FileSpreadsheet,
  Landmark,
  ShieldCheck,
  TrendingUp,
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

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-sm bg-gray-100 text-[#2f2f2f] text-[11px] font-medium tracking-wide border border-stone-200">
      {children}
    </span>
  );
}

function ActionRow({ href, children }: { href?: string; children: React.ReactNode }) {
  const className =
    'group flex items-center justify-between gap-4 py-3 px-4 rounded-md hover:bg-stone-100/50 transition-all duration-200';

  const content = (
    <>
      <span className="text-[13px] leading-relaxed text-[#333] font-sans transition-transform duration-200 group-hover:translate-x-1">
        {children}
      </span>
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

export default function ServiciosContable() {
  const [open, setOpen] = useState(false);

  const models = useMemo(
    () => ['036 / 037', '200', '202', '303', '111 / 190', '115 / 180', '347', '349', '390'],
    [],
  );

  return (
    <>
      <div className="bg-[#f5f5f1] border-b border-veritas-green/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
          <div className="max-w-3xl">
            <div className="text-[10px] uppercase tracking-[0.34em] text-veritas-green/70 font-bold">Integridad financiera</div>
            <h1 className="mt-3 font-serif font-bold text-[#1b3022] text-3xl md:text-4xl tracking-tight">
              Contabilidad Estratégica y Control Financiero
            </h1>
            <p className="mt-4 text-[14px] md:text-[15px] leading-relaxed text-[#3b3b3b] font-sans">
              Transformamos sus datos contables en información valiosa para la toma de decisiones y el cumplimiento mercantil absoluto.
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
          >
            {/* Module 1 */}
            <motion.section
              variants={item}
              whileHover={{ y: -4 }}
              className="group flex flex-col bg-white rounded-none border border-stone-100 shadow-[0_10px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_14px_30px_rgba(0,0,0,0.10)] transition-shadow p-6 md:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-serif font-bold text-[18px] md:text-[20px] text-[#1b3022]">
                    Gestión Contable Core
                  </h2>
                  <p className="mt-2 text-[13px] text-[#333] font-sans leading-relaxed">
                    Orden matemático y trazabilidad: alta, registro y cierres con visión de cumplimiento.
                  </p>
                </div>
                <div className="text-stone-400 transition-colors group-hover:text-veritas-red">
                  <FileSpreadsheet size={22} strokeWidth={1.6} />
                </div>
              </div>

              <ul className="mt-5 flex-1 list-none text-[13px] leading-relaxed text-[#333] font-sans divide-y divide-stone-100">
                <li>
                  <ActionRow href="/servicios/contable/alta-y-modificaciones-censales">
                    Alta y modificaciones censales (Modelo 036 / 037)
                  </ActionRow>
                </li>
                <li>
                  <ActionRow href="/servicios/contable/balances-y-estados-financieros">
                    Balance de Situación, Sumas y Saldos, y Pérdidas y Ganancias
                  </ActionRow>
                </li>
                <li>
                  <ActionRow href="/servicios/contable/conciliacion-y-control-documental">
                    Conciliación y control documental (criterio y consistencia)
                  </ActionRow>
                </li>
                <li>
                  <ActionRow href="/servicios/contable/cuadro-de-mando-mensual">
                    Cuadro de mando básico para seguimiento mensual
                  </ActionRow>
                </li>
              </ul>
            </motion.section>

            {/* Module 2 */}
            <motion.section
              variants={item}
              whileHover={{ y: -4 }}
              className="group flex flex-col bg-white rounded-none border border-stone-100 shadow-[0_10px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_14px_30px_rgba(0,0,0,0.10)] transition-shadow p-6 md:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-serif font-bold text-[18px] md:text-[20px] text-[#1b3022]">
                    Calendario Tributario de Sociedades
                  </h2>
                  <p className="mt-2 text-[13px] text-[#333] font-sans leading-relaxed">
                    Un sistema claro de obligaciones para evitar retrasos, recargos y requerimientos.
                  </p>
                </div>
                <div className="text-stone-400 transition-colors group-hover:text-veritas-red">
                  <Building2 size={22} strokeWidth={1.6} />
                </div>
              </div>

              <ul className="mt-5 list-none text-[13px] leading-relaxed text-[#333] font-sans divide-y divide-stone-100">
                <li>
                  <ActionRow href="/servicios/contable/preparacion-y-presentacion-con-soporte-documental">
                    Preparación y presentación con soporte documental
                  </ActionRow>
                </li>
                <li>
                  <ActionRow href="/servicios/contable/revision-de-coherencias-entre-contabilidad-y-fiscalidad">
                    Revisión de coherencias entre contabilidad y fiscalidad
                  </ActionRow>
                </li>
                <li>
                  <ActionRow href="/servicios/contable/seguimiento-de-notificaciones-y-requerimientos">
                    Seguimiento de notificaciones y requerimientos
                  </ActionRow>
                </li>
              </ul>

              <div className="mt-auto pt-6 flex flex-wrap gap-2">
                {models.map((m) => (
                  <React.Fragment key={m}>
                    <Pill>Modelo {m}</Pill>
                  </React.Fragment>
                ))}
              </div>
            </motion.section>

            {/* Module 3 — Cumplimiento Mercantil */}
            <motion.section
              variants={item}
              whileHover={{ y: -4 }}
              className="group flex flex-col bg-white rounded-none border border-stone-100 shadow-[0_10px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_14px_30px_rgba(0,0,0,0.10)] transition-shadow p-6 md:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-serif font-bold text-[18px] md:text-[20px] text-[#1b3022]">
                    Cumplimiento Mercantil (Blindaje Legal)
                  </h2>
                  <p className="mt-2 text-[13px] text-[#333] font-sans leading-relaxed">
                    Cuentas Anuales y Libros Oficiales en orden: seguridad jurídica y reputación mercantil.
                  </p>
                </div>
                <div className="text-stone-400 transition-colors group-hover:text-veritas-red">
                  <Landmark size={22} strokeWidth={1.6} />
                </div>
              </div>

              <ul className="mt-5 flex-1 list-none text-[13px] leading-relaxed text-[#333] font-sans divide-y divide-stone-100">
                <li>
                  <ActionRow href="/servicios/contable/registro-mercantil-cuentas-y-libros">
                    Registro Mercantil
                  </ActionRow>
                </li>
                <li>
                  <ActionRow href="/servicios/contable/gobernanza-documental-y-evidencias">
                    Gobernanza Documental
                  </ActionRow>
                </li>
              </ul>
            </motion.section>

            {/* Module 4 — Análisis Financiero y Futuro */}
            <motion.section
              variants={item}
              whileHover={{ y: -4 }}
              className="group flex flex-col bg-white rounded-none border border-stone-100 shadow-[0_10px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_14px_30px_rgba(0,0,0,0.10)] transition-shadow p-6 md:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-serif font-bold text-[18px] md:text-[20px] text-[#1b3022]">
                    Análisis Financiero y Futuro
                  </h2>
                  <p className="mt-2 text-[13px] text-[#333] font-sans leading-relaxed">
                    Informe Trimestral para anticipar riesgos, optimizar tesorería y tomar decisiones con contexto.
                  </p>
                </div>
                <div className="text-stone-400 transition-colors group-hover:text-veritas-red">
                  <TrendingUp size={22} strokeWidth={1.6} />
                </div>
              </div>

              <ul className="mt-5 flex-1 list-none text-[13px] leading-relaxed text-[#333] font-sans divide-y divide-stone-100">
                <li>
                  <ActionRow href="/servicios/contable/lectura-de-margenes-y-costes">
                    Lectura de márgenes y evolución de costes
                  </ActionRow>
                </li>
                <li>
                  <ActionRow href="/servicios/contable/alertas-de-desviaciones-y-escenarios">
                    Alertas de desviaciones y escenarios
                  </ActionRow>
                </li>
                <li>
                  <ActionRow href="/servicios/contable/recomendaciones-financieras-accionables">
                    Recomendaciones accionables (no solo números)
                  </ActionRow>
                </li>
              </ul>
            </motion.section>

            {/* Inspecciones y defensa */}
            <motion.section
              variants={item}
              whileHover={{ y: -4 }}
              className="group bg-white rounded-xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow p-6 md:p-7 md:col-span-2"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-serif font-bold text-[18px] md:text-[20px] text-[#1b3022]">
                    Representación ante Hacienda (Socio Defensor)
                  </h2>
                  <p className="mt-2 text-[13px] text-[#333] font-sans leading-relaxed max-w-3xl">
                    Defensa técnica y acompañamiento: derechos contables, documentación ordenada y estrategia para responder con solvencia.
                  </p>
                </div>
                <div className="text-stone-400 transition-colors group-hover:text-veritas-red">
                  <ShieldCheck size={22} strokeWidth={1.6} />
                </div>
              </div>

              <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-2">
                <ActionRow href="/servicios/contable/preparacion-y-revision-de-soportes-contables-y-mercantiles">
                  Preparación y revisión de soportes contables y mercantiles
                </ActionRow>
                <ActionRow href="/servicios/contable/respuesta-a-requerimientos-y-coordinacion-documental">
                  Respuesta a requerimientos y coordinación documental
                </ActionRow>
                <ActionRow href="/servicios/contable/asistencia-en-inspecciones-y-procedimientos-de-gestion">
                  Asistencia en inspecciones y procedimientos de gestión
                </ActionRow>
                <ActionRow href="/servicios/contable/defensa-de-derechos-y-recursos-administrativos">
                  Defensa de derechos y recursos administrativos
                </ActionRow>
              </div>
            </motion.section>

            {/* Exclusiones (acordeón) */}
            <motion.section variants={item} className="md:col-span-2">
              <div className="bg-white/70 rounded-none border border-stone-100 shadow-[0_10px_24px_rgba(0,0,0,0.06)] p-5 md:p-6">
                <button
                  type="button"
                  onClick={() => setOpen((v) => !v)}
                  className="w-full flex items-center justify-between gap-3 text-left"
                  aria-expanded={open}
                >
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.28em] text-[#666] font-bold">
                      Claridad Contractual
                    </div>
                    <div className="mt-1 font-serif font-bold text-[#1b3022] text-[16px]">
                      Exclusiones y costes externos
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
                          Quedan excluidas, salvo contratación expresa, auditorías, informes periciales, valoraciones independientes y
                          actuaciones judiciales.
                        </p>
                        <p>
                          Los gastos de registro, tasas y aranceles (p.ej. Registro Mercantil) se consideran costes externos y se informarán
                          previamente cuando aplique.
                        </p>
                        <p>
                          En cualquier ampliación de alcance, le indicaremos el coste y el resultado esperado antes de iniciar la actuación.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.section>
          </motion.div>
        </div>
      </div>
    </>
  );
}

