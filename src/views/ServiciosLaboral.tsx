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
      className="group flex items-center justify-between py-2 px-2 md:px-0 border-t border-stone-100 first:border-t-0 hover:bg-stone-50 transition-colors cursor-pointer"
    >
      <span className="text-xs md:text-sm leading-snug text-stone-700 font-sans transition-transform duration-200 group-hover:translate-x-1">
        {children}
      </span>
      <ChevronRight size={12} className="shrink-0 ml-3 text-stone-400 transition-colors duration-200 group-hover:text-veritas-red" />
    </Link>
  );
}

const laboralAreas = [
  {
    title: 'Gestión Mensual (El Motor)',
    subtitle: 'Nóminas, cotizaciones y tributación recurrente con calendario, control y trazabilidad para evitar incidencias.',
    Icon: Users,
    items: [
      { label: 'Nóminas', href: '/servicios/laboral/nominas' },
      { label: 'Cotizaciones', href: '/servicios/laboral/cotizaciones' },
      { label: 'Tributos', href: '/servicios/laboral/tributos' },
    ],
  },
  {
    title: 'Altas y Contratación',
    subtitle: 'Afiliación, contratos y prórrogas con estudios previos de coste para contratar con seguridad.',
    Icon: TrendingUp,
    items: [
      {
        label: 'Altas, bajas y variaciones de afiliación',
        href: '/servicios/laboral/altas-bajas-y-variaciones-de-afiliacion',
      },
      {
        label: 'Contratos, prórrogas y modificaciones',
        href: '/servicios/laboral/contratos-prorrogas-y-modificaciones',
      },
      {
        label: 'Estudios de coste previo y bonificaciones',
        href: '/servicios/laboral/estudios-de-coste-previo-y-bonificaciones',
      },
      {
        label: 'Comunicación y registro en sistemas oficiales',
        href: '/servicios/laboral/comunicacion-y-registro-en-sistemas-oficiales',
      },
    ],
  },
  {
    title: 'Protección y Seguimiento de Bajas',
    subtitle: 'Gestión de contingencias, salud laboral e incidencias: seguimiento documental y coordinación con organismos.',
    Icon: Stethoscope,
    items: [
      { label: 'Incapacidad Temporal (Sistema RED / DELTA)', href: '/servicios/laboral/incapacidad-temporal-sistema-red-delta' },
      { label: 'Maternidad / paternidad y prestaciones', href: '/servicios/laboral/maternidad-paternidad-y-prestaciones' },
      { label: 'Accidentes de trabajo y comunicaciones', href: '/servicios/laboral/accidentes-de-trabajo-y-comunicaciones' },
      {
        label: 'Seguimiento de partes, plazos y requerimientos',
        href: '/servicios/laboral/seguimiento-de-partes-plazos-y-requerimientos',
      },
    ],
  },
  {
    title: 'Extinciones y Crisis',
    subtitle: 'Rigor, seriedad y documentación impecable en escenarios críticos.',
    Icon: TriangleAlert,
    items: [
      {
        label: 'Despidos y cartas con estrategia preventiva',
        href: '/servicios/laboral/despidos-y-cartas-con-estrategia-preventiva',
      },
      {
        label: 'Finiquitos, indemnizaciones y liquidaciones',
        href: '/servicios/laboral/finiquitos-indemnizaciones-y-liquidaciones',
      },
      { label: 'EREs / ERTEs y coordinación con SEPE', href: '/servicios/laboral/eres-ertes-y-coordinacion-con-sepe' },
      {
        label: 'Negociación y acompañamiento en conflictos',
        href: '/servicios/laboral/negociacion-y-acompanamiento-en-conflictos',
      },
    ],
  },
  {
    title: 'Defensa ante la Inspección',
    subtitle: 'Acompañamiento técnico y presencial ante la autoridad laboral: preparación, respuesta y estrategia.',
    Icon: ShieldCheck,
    items: [
      {
        label: 'Preparación de documentación y trazabilidad',
        href: '/servicios/laboral/preparacion-de-documentacion-y-trazabilidad',
      },
      { label: 'Respuesta a requerimientos y actas', href: '/servicios/laboral/respuesta-a-requerimientos-y-actas' },
      { label: 'Interlocución y acompañamiento físico', href: '/servicios/laboral/interlocucion-y-acompanamiento-fisico' },
    ],
  },
  {
    title: 'Empleadores de Hogar',
    subtitle: 'Un servicio cercano y claro para particulares: altas, nóminas y regularidad con tranquilidad.',
    Icon: Home,
    items: [
      { label: 'Alta, modificaciones y bajas', href: '/servicios/laboral/hogar-alta-modificaciones-y-bajas' },
      { label: 'Nóminas, pagas y control mensual', href: '/servicios/laboral/hogar-nominas-pagas-y-control-mensual' },
      {
        label: 'Asesoría en incidencias y documentación',
        href: '/servicios/laboral/hogar-asesoria-en-incidencias-y-documentacion',
      },
    ],
  },
] as const;

function ServiceMatrixRow({
  title,
  subtitle,
  Icon,
  items,
  isFirst,
}: {
  title: string;
  subtitle: string;
  Icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
  items: { label: string; href: string }[];
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
      </div>
    </motion.section>
  );
}

export default function ServiciosLaboral() {
  return (
    <>
      <div className="bg-[#f5f5f1] border-b border-veritas-green/10 w-full max-w-full overflow-x-hidden">
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
            className="mt-10 md:mt-12 bg-white rounded-none border border-stone-200 overflow-hidden divide-y divide-stone-200 w-full max-w-full"
          >
            {laboralAreas.map((area, idx) => (
              <ServiceMatrixRow
                key={area.title}
                title={area.title}
                subtitle={area.subtitle}
                Icon={area.Icon}
                items={[...area.items]}
                isFirst={idx === 0}
              />
            ))}
            <motion.section variants={item} className="py-6 md:py-8 px-4 md:px-10 border-t-2 border-stone-200">
              <div className="text-[10px] uppercase tracking-[0.28em] text-stone-500 font-bold">Nota Informativa</div>
              <div className="mt-1 font-serif font-bold text-stone-900 text-lg md:text-2xl">Exclusiones y alcance del servicio</div>
              <div className="mt-4 text-[13px] md:text-sm leading-snug text-stone-600 font-sans space-y-3">
                <p>
                  El alcance se ajusta al encargo profesional y a la documentación aportada. Determinadas actuaciones pueden requerir
                  contratación específica por su complejidad o por la intervención de terceros.
                </p>
                <p>
                  Quedan excluidas, salvo pacto expreso, actuaciones judiciales, informes periciales, desplazamientos extraordinarios y la
                  representación continuada fuera de los trámites laborales ordinarios.
                </p>
              </div>
            </motion.section>
          </motion.div>
        </div>
      </div>
    </>
  );
}

