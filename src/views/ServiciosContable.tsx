'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Building2,
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

const contableAreas = [
  {
    title: 'Gestión Contable Core',
    subtitle: 'Orden matemático y trazabilidad: alta, registro y cierres con visión de cumplimiento.',
    Icon: FileSpreadsheet,
    items: [
      {
        label: 'Alta y modificaciones censales (Modelo 036 / 037)',
        href: '/servicios/contable/alta-y-modificaciones-censales',
      },
      {
        label: 'Balance de Situación, Sumas y Saldos, y Pérdidas y Ganancias',
        href: '/servicios/contable/balances-y-estados-financieros',
      },
      {
        label: 'Conciliación y control documental (criterio y consistencia)',
        href: '/servicios/contable/conciliacion-y-control-documental',
      },
      {
        label: 'Cuadro de mando básico para seguimiento mensual',
        href: '/servicios/contable/cuadro-de-mando-mensual',
      },
    ],
  },
  {
    title: 'Calendario Tributario de Sociedades',
    subtitle: 'Un sistema claro de obligaciones para evitar retrasos, recargos y requerimientos.',
    Icon: Building2,
    items: [
      {
        label: 'Preparación y presentación con soporte documental',
        href: '/servicios/contable/preparacion-y-presentacion-con-soporte-documental',
      },
      {
        label: 'Revisión de coherencias entre contabilidad y fiscalidad',
        href: '/servicios/contable/revision-de-coherencias-entre-contabilidad-y-fiscalidad',
      },
      {
        label: 'Seguimiento de notificaciones y requerimientos',
        href: '/servicios/contable/seguimiento-de-notificaciones-y-requerimientos',
      },
    ],
    pills: ['036 / 037', '200', '202', '303', '111 / 190', '115 / 180', '347', '349', '390'],
  },
  {
    title: 'Cumplimiento Mercantil (Blindaje Legal)',
    subtitle: 'Cuentas Anuales y Libros Oficiales en orden: seguridad jurídica y reputación mercantil.',
    Icon: Landmark,
    items: [
      { label: 'Registro Mercantil', href: '/servicios/contable/registro-mercantil-cuentas-y-libros' },
      { label: 'Gobernanza Documental', href: '/servicios/contable/gobernanza-documental-y-evidencias' },
    ],
  },
  {
    title: 'Análisis Financiero y Futuro',
    subtitle: 'Informe Trimestral para anticipar riesgos, optimizar tesorería y tomar decisiones con contexto.',
    Icon: TrendingUp,
    items: [
      { label: 'Lectura de márgenes y evolución de costes', href: '/servicios/contable/lectura-de-margenes-y-costes' },
      { label: 'Alertas de desviaciones y escenarios', href: '/servicios/contable/alertas-de-desviaciones-y-escenarios' },
      {
        label: 'Recomendaciones accionables (no solo números)',
        href: '/servicios/contable/recomendaciones-financieras-accionables',
      },
    ],
  },
  {
    title: 'Representación ante Hacienda (Socio Defensor)',
    subtitle:
      'Defensa técnica y acompañamiento: derechos contables, documentación ordenada y estrategia para responder con solvencia.',
    Icon: ShieldCheck,
    items: [
      {
        label: 'Preparación y revisión de soportes contables y mercantiles',
        href: '/servicios/contable/preparacion-y-revision-de-soportes-contables-y-mercantiles',
      },
      {
        label: 'Respuesta a requerimientos y coordinación documental',
        href: '/servicios/contable/respuesta-a-requerimientos-y-coordinacion-documental',
      },
      {
        label: 'Asistencia en inspecciones y procedimientos de gestión',
        href: '/servicios/contable/asistencia-en-inspecciones-y-procedimientos-de-gestion',
      },
      {
        label: 'Defensa de derechos y recursos administrativos',
        href: '/servicios/contable/defensa-de-derechos-y-recursos-administrativos',
      },
    ],
  },
] as const;

function ActionRow({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between py-2 px-2 md:px-0 border-t border-stone-100 first:border-t-0 hover:bg-stone-50 transition-colors cursor-pointer"
    >
      <span className="text-xs md:text-sm leading-snug text-stone-700 font-sans transition-transform duration-200 group-hover:translate-x-1">
        {children}
      </span>
      <ChevronRight size={12} className="shrink-0 ml-3 text-stone-400 transition-colors duration-200 group-hover:text-veritas-red" />
    </Link>
  );
}

function ServiceMatrixRow({
  title,
  subtitle,
  Icon,
  items,
  pills,
  isFirst,
}: {
  title: string;
  subtitle: string;
  Icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
  items: { label: string; href: string }[];
  pills?: readonly string[];
  isFirst: boolean;
}) {
  return (
    <motion.section variants={item} className={`py-6 md:py-8 px-4 md:px-10 ${isFirst ? '' : 'border-t-2 border-stone-200'}`}>
      <div className="flex flex-col gap-5">
        <div className="pb-3 border-b border-stone-300">
          <div className="flex items-center gap-3 text-stone-900">
            <Icon size={18} strokeWidth={1.7} className="text-veritas-green/70" />
            <h2 className="font-serif text-lg md:text-2xl font-bold mb-1">{title}</h2>
          </div>
          <p className="mt-1 text-[13px] md:text-sm text-stone-600 font-sans leading-snug">{subtitle}</p>
        </div>

        <div>
          {items.map((it) => (
            <ActionRow key={it.href} href={it.href}>
              {it.label}
            </ActionRow>
          ))}
        </div>

        {pills && (
          <div className="pt-2 flex flex-wrap gap-2">
            {pills.map((m) => (
              <span
                key={m}
                className="inline-flex items-center px-2 py-1 rounded-none bg-gray-100 text-stone-700 text-[10px] font-medium tracking-wide border border-stone-200"
              >
                Modelo {m}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.section>
  );
}

export default function ServiciosContable() {
  return (
    <>
      <div className="bg-[#f5f5f1] border-b border-veritas-green/10 w-full max-w-full overflow-x-hidden">
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
            className="mt-10 md:mt-12 bg-white rounded-none border border-stone-200 overflow-hidden divide-y divide-stone-200 w-full max-w-full"
          >
            {contableAreas.map((area, idx) => (
              <ServiceMatrixRow
                key={area.title}
                title={area.title}
                subtitle={area.subtitle}
                Icon={area.Icon}
                items={[...area.items]}
                pills={'pills' in area ? area.pills : undefined}
                isFirst={idx === 0}
              />
            ))}

            <motion.section variants={item} className="py-6 md:py-8 px-4 md:px-10 border-t-2 border-stone-200">
              <div className="text-[10px] uppercase tracking-[0.28em] text-stone-500 font-bold">Claridad Contractual</div>
              <div className="mt-1 font-serif font-bold text-stone-900 text-lg md:text-2xl">Exclusiones y costes externos</div>
              <div className="mt-4 text-[13px] md:text-sm leading-snug text-stone-600 font-sans space-y-3">
                <p>
                  Quedan excluidas, salvo contratación expresa, auditorías, informes periciales, valoraciones independientes y actuaciones
                  judiciales.
                        </p>
                        <p>
                          Los gastos de registro, tasas y aranceles (p.ej. Registro Mercantil) se consideran costes externos y se informarán
                          previamente cuando aplique.
                        </p>
                <p>En cualquier ampliación de alcance, le indicaremos el coste y el resultado esperado antes de iniciar la actuación.</p>
              </div>
            </motion.section>
          </motion.div>
        </div>
      </div>
    </>
  );
}

