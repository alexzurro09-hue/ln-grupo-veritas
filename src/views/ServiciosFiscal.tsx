'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, ChevronRight, FileText, Landmark, ShieldCheck } from 'lucide-react';
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

const fiscalAreas = [
  {
    title: 'Gestión Tributaria y Cumplimiento (AEAT)',
    subtitle:
      'Cumplimiento con criterio y planificación para reducir riesgos, anticipar inspecciones y mejorar la toma de decisiones con datos ordenados.',
    Icon: FileText,
    items: [
      { label: 'Planificación fiscal estratégica', href: '/servicios/fiscal/planificacion-fiscal-estrategica' },
      {
        label: 'Impuesto de Sociedades y Cuentas Anuales',
        href: '/servicios/fiscal/impuesto-de-sociedades-y-cuentas-anuales',
      },
      { label: 'IVA y regímenes especiales', href: '/servicios/fiscal/iva-y-regimenes-especiales' },
      {
        label: 'Declaraciones informativas y censales',
        href: '/servicios/fiscal/declaraciones-informativas-y-censales',
      },
    ],
    pills: ['036 / 037', '303', '130 / 131', '111 / 190', '115 / 180', '200', '202', '349', '390', '347', '184', '123 / 193', '720'],
  },
  {
    title: 'Gestión Integral del Autónomo',
    subtitle:
      'Acompañamiento fiscal y de gestión para empezar bien, mantener orden y tomar decisiones con tranquilidad.',
    Icon: Building2,
    items: [
      {
        label: 'Alta y asesoramiento inicial a emprendedores',
        href: '/servicios/fiscal/alta-y-asesoramiento-inicial-a-emprendedores',
      },
      {
        label: 'Gestión de RETA y variaciones de actividad',
        href: '/servicios/fiscal/gestion-de-reta-y-variaciones-de-actividad',
      },
      { label: 'Subvenciones y bonificaciones', href: '/servicios/fiscal/subvenciones-y-bonificaciones' },
      {
        label: 'Prestaciones y planificación de jubilación',
        href: '/servicios/fiscal/prestaciones-y-planificacion-de-jubilacion',
      },
    ],
  },
  {
    title: 'Procedimientos y Tributos Locales',
    subtitle:
      'Trámites con organismos, ayuntamientos y administración local: defensa técnica y estrategia para asegurar que su operativa no se detenga.',
    Icon: Landmark,
    items: [
      {
        label: 'Licencias, comunicaciones y registros municipales',
        href: '/servicios/fiscal/licencias-comunicaciones-y-registros-municipales',
      },
      { label: 'Gestión de tributos locales (IBI, Plusvalías)', href: '/servicios/fiscal/gestion-de-tributos-locales' },
      {
        label: 'Presentación de escritos y seguimiento de expedientes',
        href: '/servicios/fiscal/presentacion-de-escritos-y-seguimiento-de-expedientes',
      },
      {
        label: 'Gestión de requerimientos y control documental',
        href: '/servicios/fiscal/gestion-de-requerimientos-y-control-documental',
      },
    ],
  },
  {
    title: 'Representación ante Inspección',
    subtitle:
      'Un servicio premium de defensa y acompañamiento: estrategia, respuesta a requerimientos y presencia en actuaciones, protegiendo su posición con rigor técnico y serenidad.',
    Icon: ShieldCheck,
    items: [
      {
        label: 'Análisis de riesgos y trazabilidad documental',
        href: '/servicios/fiscal/analisis-de-risgos-y-trazabilidad-documental',
      },
      {
        label: 'Preparación de alegaciones y recursos',
        href: '/servicios/fiscal/preparacion-de-alegaciones-y-recursos',
      },
      {
        label: 'Interlocución con AEAT y coordinación de respuestas',
        href: '/servicios/fiscal/interlocucion-con-aeat-y-coordinacion-de-respuestas',
      },
      {
        label: 'Plan de regularización y minimización de impacto',
        href: '/servicios/fiscal/plan-de-regularizacion-y-minimizacion-de-impacto',
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
  isFirst,
  pills,
}: {
  title: string;
  subtitle: string;
  Icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
  items: { label: string; href: string }[];
  isFirst: boolean;
  pills?: readonly string[];
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

export default function ServiciosFiscal() {
  return (
    <>
      <div className="bg-[#f9f7f2] border-b border-veritas-green/10 w-full max-w-full overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
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

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="mt-10 md:mt-12 bg-white rounded-none border border-stone-200 overflow-hidden divide-y divide-stone-200 w-full max-w-full"
          >
            {fiscalAreas.map((area, idx) => (
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
              <div className="flex flex-col gap-3">
                <div className="text-[10px] uppercase tracking-[0.28em] text-stone-500 font-bold">
                  Alcance y Condiciones del Servicio
                </div>
                <div className="font-serif font-bold text-stone-900 text-lg md:text-2xl">
                  Small print con clase (sin sorpresas)
                </div>
                <div className="text-[13px] md:text-sm leading-snug text-stone-600 font-sans space-y-3">
                  <p>
                    La prestación del servicio se ajusta al encargo profesional y a la documentación aportada por el cliente. En
                    determinados supuestos pueden existir limitaciones de plazo, disponibilidad de información o requisitos formales.
                  </p>
                  <p>
                    Quedan excluidos, salvo contratación expresa, actuaciones judiciales, informes periciales y cualquier gestión que
                    requiera poderes específicos, desplazamientos extraordinarios o representación continuada ante terceros.
                  </p>
                  <p>Siempre le indicaremos el alcance exacto antes de iniciar cualquier actuación adicional.</p>
                </div>

                <div className="pt-2 grid gap-2 md:max-w-xs">
                  <a
                    href="https://wa.me/34639234228"
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
            </motion.section>
          </motion.div>
        </div>
      </div>
    </>
  );
}

