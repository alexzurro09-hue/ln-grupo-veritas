import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AnimatePresence, motion } from 'framer-motion';
import {
  BadgeCheck,
  BarChart3,
  Building2,
  ChevronDown,
  FileSpreadsheet,
  Landmark,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';

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

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-2.5 items-start text-[13px] text-[#333] font-sans leading-relaxed">
      <span className="mt-[2px] text-veritas-red">
        <BadgeCheck size={16} strokeWidth={2.2} />
      </span>
      <span>{children}</span>
    </div>
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
      <Helmet>
        <title>Servicios Contables en Madrid | LN Grupo Veritas</title>
        <meta
          name="description"
          content="Contabilidad estratégica y control financiero en Madrid: balances, calendario tributario, cumplimiento mercantil y análisis trimestral para la toma de decisiones."
        />
      </Helmet>

      <div className="bg-[#f9f7f2]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
          {/* Hero */}
          <div className="max-w-3xl">
            <div className="text-[10px] uppercase tracking-[0.34em] text-veritas-green/70 font-bold">
              Integridad financiera
            </div>
            <h2 className="mt-3 font-serif font-bold text-[#1b3022] text-3xl md:text-4xl tracking-tight">
              Contabilidad Estratégica y Control Financiero
            </h2>
            <p className="mt-4 text-[14px] md:text-[15px] leading-relaxed text-[#3b3b3b] font-sans">
              Transformamos sus datos contables en información valiosa para la toma de decisiones y el cumplimiento
              mercantil absoluto.
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-5"
          >
            {/* Module 1 */}
            <motion.section
              variants={item}
              whileHover={{ y: -4 }}
              className="group md:col-span-3 bg-white rounded-none border border-stone-100 shadow-[0_10px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_14px_30px_rgba(0,0,0,0.10)] transition-all p-6 md:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-serif font-bold text-[18px] md:text-[20px] text-[#1b3022]">
                    Gestión Contable Core
                  </h3>
                  <p className="mt-2 text-[13px] text-[#333] font-sans leading-relaxed">
                    Orden matemático y trazabilidad: alta, registro y cierres con visión de cumplimiento.
                  </p>
                </div>
                <div className="text-[#1b3022]/70 transition-colors group-hover:text-veritas-red">
                  <FileSpreadsheet size={22} strokeWidth={1.6} />
                </div>
              </div>

              <div className="mt-5 space-y-2.5">
                <Bullet>Alta y modificaciones censales (Modelo 036 / 037)</Bullet>
                <Bullet>Balance de Situación, Sumas y Saldos, y Pérdidas y Ganancias</Bullet>
                <Bullet>Conciliación y control documental (criterio y consistencia)</Bullet>
                <Bullet>Cuadro de mando básico para seguimiento mensual</Bullet>
              </div>
            </motion.section>

            {/* Module 2 */}
            <motion.section
              variants={item}
              whileHover={{ y: -4 }}
              className="group md:col-span-3 bg-white rounded-none border border-stone-100 shadow-[0_10px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_14px_30px_rgba(0,0,0,0.10)] transition-all p-6 md:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-serif font-bold text-[18px] md:text-[20px] text-[#1b3022]">
                    Calendario Tributario de Sociedades
                  </h3>
                  <p className="mt-2 text-[13px] text-[#333] font-sans leading-relaxed">
                    Un sistema claro de obligaciones para evitar retrasos, recargos y requerimientos.
                  </p>
                </div>
                <div className="text-[#1b3022]/70 transition-colors group-hover:text-veritas-red">
                  <Building2 size={22} strokeWidth={1.6} />
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {models.map((m) => (
                  <React.Fragment key={m}>
                    <Pill>Modelo {m}</Pill>
                  </React.Fragment>
                ))}
              </div>

              <div className="mt-5 space-y-2.5">
                <Bullet>Preparación y presentación con soporte documental</Bullet>
                <Bullet>Revisión de coherencias entre contabilidad y fiscalidad</Bullet>
                <Bullet>Seguimiento de notificaciones y requerimientos</Bullet>
              </div>
            </motion.section>

            {/* Module 3 */}
            <motion.section
              variants={item}
              whileHover={{ y: -4 }}
              className="group md:col-span-4 bg-white rounded-none border border-stone-100 shadow-[0_10px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_14px_30px_rgba(0,0,0,0.10)] transition-all p-6 md:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-serif font-bold text-[18px] md:text-[20px] text-[#1b3022]">
                    Cumplimiento Mercantil (Blindaje Legal)
                  </h3>
                  <p className="mt-2 text-[13px] text-[#333] font-sans leading-relaxed">
                    Cuentas Anuales y Libros Oficiales en orden: seguridad jurídica y reputación mercantil.
                  </p>
                </div>
                <div className="text-[#1b3022]/70 transition-colors group-hover:text-veritas-red">
                  <Landmark size={22} strokeWidth={1.6} />
                </div>
              </div>

              <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="rounded-none border border-stone-100 p-4">
                  <div className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#1b3022]">
                    Registro Mercantil
                  </div>
                  <div className="mt-3 space-y-2.5">
                    <Bullet>Presentación de Cuentas Anuales</Bullet>
                    <Bullet>Legalización de Libros Oficiales</Bullet>
                    <Bullet>Gestión de plazos y subsanaciones</Bullet>
                  </div>
                </div>
                <div className="rounded-none border border-stone-100 p-4">
                  <div className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#1b3022]">
                    Gobernanza documental
                  </div>
                  <div className="mt-3 space-y-2.5">
                    <Bullet>Coherencia contable/mercantil</Bullet>
                    <Bullet>Orden de soportes y evidencias</Bullet>
                    <Bullet>Preparación para revisiones y terceros</Bullet>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Module 4 - highlighted */}
            <motion.section
              variants={item}
              whileHover={{ y: -4 }}
              className="group md:col-span-2 rounded-none border border-stone-100 bg-[#f1eee5] shadow-[0_10px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_14px_30px_rgba(0,0,0,0.10)] transition-all p-6 md:p-7 relative overflow-hidden"
            >
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute top-4 right-4 text-[10px] uppercase tracking-[0.28em] font-bold text-veritas-green/70">
                  Previsión y Estrategia
                </div>
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-serif font-bold text-[18px] md:text-[20px] text-[#1b3022]">
                    Análisis Financiero y Futuro
                  </h3>
                  <p className="mt-2 text-[13px] text-[#333] font-sans leading-relaxed">
                    Informe Trimestral para anticipar riesgos, optimizar tesorería y tomar decisiones con contexto.
                  </p>
                </div>
                <div className="text-[#1b3022]/70 transition-colors group-hover:text-veritas-red">
                  <TrendingUp size={22} strokeWidth={1.6} />
                </div>
              </div>

              <div className="mt-5 space-y-2.5">
                <Bullet>Lectura de márgenes y evolución de costes</Bullet>
                <Bullet>Alertas de desviaciones y escenarios</Bullet>
                <Bullet>Recomendaciones accionables (no solo números)</Bullet>
              </div>

              <div className="mt-5 flex items-center gap-2 text-[#1b3022]/70">
                <BarChart3 size={16} strokeWidth={1.8} />
                <span className="text-[11px] uppercase tracking-[0.18em] font-bold">Informe trimestral</span>
              </div>
            </motion.section>

            {/* Inspecciones y defensa */}
            <motion.section
              variants={item}
              whileHover={{ y: -4 }}
              className="group md:col-span-6 bg-white rounded-none border border-stone-100 shadow-[0_10px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_14px_30px_rgba(0,0,0,0.10)] transition-all p-6 md:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-serif font-bold text-[18px] md:text-[20px] text-[#1b3022]">
                    Representación ante Hacienda (Socio Defensor)
                  </h3>
                  <p className="mt-2 text-[13px] text-[#333] font-sans leading-relaxed max-w-3xl">
                    Defensa técnica y acompañamiento: derechos contables, documentación ordenada y estrategia para responder con solvencia.
                  </p>
                </div>
                <div className="text-[#1b3022]/70 transition-colors group-hover:text-veritas-red">
                  <ShieldCheck size={22} strokeWidth={1.6} />
                </div>
              </div>

              <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  'Preparación y revisión de soportes contables y mercantiles',
                  'Respuesta a requerimientos y coordinación documental',
                  'Acompañamiento en actuaciones y reuniones',
                  'Estrategia de regularización y minimización de impacto',
                ].map((t) => (
                  <div key={t} className="flex gap-2.5 items-start text-[13px] text-[#333] font-sans leading-relaxed">
                    <span className="mt-[2px] text-veritas-red">
                      <BadgeCheck size={16} strokeWidth={2.2} />
                    </span>
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Exclusiones (acordeón) */}
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

