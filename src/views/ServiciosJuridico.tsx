'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Scale, Gavel, Users, Landmark, ChevronRight, HeartHandshake } from 'lucide-react';
import Link from 'next/link';
import { titleToSlug } from '../content/services';

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

const legalAreas = [
  {
    title: 'Derecho mercantil y empresarial',
    subtitle:
      'Asesoría y defensa técnica para empresas: constitución, contratación, gobierno corporativo y conflictos societarios.',
    Icon: Briefcase,
    items: [
      {
        label: 'Constitución de sociedades y pactos de socios',
        href: `/servicios/juridico/${titleToSlug('Constitución de Sociedades y Pactos de Socios')}`,
      },
      {
        label: 'Reestructuración, gobierno corporativo y asesoría recurrente',
        href: `/servicios/juridico/${titleToSlug('Reestructuración, Gobierno Corporativo y Asesoría Recurrente')}`,
      },
      {
        label: 'Contratación mercantil y negociación',
        href: `/servicios/juridico/${titleToSlug('Contratación Mercantil y Negociación')}`,
      },
      {
        label: 'Conflictos societarios y defensa de administradores',
        href: `/servicios/juridico/${titleToSlug('Conflictos Societarios y Defensa de Administradores')}`,
      },
    ],
  },
  {
    title: 'Derecho administrativo y fiscal',
    subtitle: 'Recursos, sanciones, licencias y defensa ante la Administración con enfoque técnico y documental.',
    Icon: Landmark,
    items: [
      {
        label: 'Recursos administrativos y reclamaciones',
        href: `/servicios/juridico/${titleToSlug('Recursos Administrativos y Reclamaciones')}`,
      },
      {
        label: 'Sanciones, licencias y procedimientos ante la Administración',
        href: '/servicios/juridico/sanciones-licencias-y-procedimientos',
      },
      {
        label: 'Defensa contencioso-administrativa',
        href: `/servicios/juridico/${titleToSlug('Defensa Contencioso-Administrativa')}`,
      },
      {
        label: 'Estrategia y acompañamiento documental',
        href: `/servicios/juridico/${titleToSlug('Estrategia y Acompañamiento Documental')}`,
      },
    ],
  },
  {
    title: 'Derecho civil y contratación',
    subtitle: 'Contratos, reclamaciones y propiedad: claridad jurídica para particulares y empresas.',
    Icon: Scale,
    items: [
      {
        label: 'Contratos, reclamaciones y responsabilidad civil',
        href: `/servicios/juridico/${titleToSlug('Contratos y Reclamaciones')}`,
      },
      {
        label: 'Arrendamientos, propiedad horizontal y comunidad de bienes',
        href: `/servicios/juridico/${titleToSlug('Arrendamientos y Propiedad Horizontal')}`,
      },
      {
        label: 'Reclamación de cantidad y procedimientos declarativos',
        href: `/servicios/juridico/${titleToSlug('Reclamación de Cantidad')}`,
      },
    ],
  },
  {
    title: 'Derecho laboral',
    subtitle: 'Contratación, despidos y reclamaciones con prevención de conflicto y defensa técnica.',
    Icon: Users,
    items: [
      {
        label: 'Contratación, despidos y sanciones',
        href: `/servicios/juridico/${titleToSlug('Contratación, Despidos y Sanciones')}`,
      },
      {
        label: 'Reclamaciones de cantidad y salarios',
        href: `/servicios/juridico/${titleToSlug('Reclamaciones de Cantidad y Salarios')}`,
      },
      {
        label: 'Asesoría en RRHH y prevención de conflictos',
        href: `/servicios/juridico/${titleToSlug('Asesoría en RRHH y Prevención de Conflictos')}`,
      },
      {
        label: 'Representación en SMAC y jurisdicción social',
        href: `/servicios/juridico/${titleToSlug('Representación en SMAC y Jurisdicción Social')}`,
      },
    ],
  },
  {
    title: 'Derecho de familia y sucesiones',
    subtitle:
      'Especialistas en la gestión técnica y humana de procesos familiares y sucesorios en Alcalá de Henares y Madrid. 30 años de discreción y rigor.',
    Icon: HeartHandshake,
    items: [
      { label: 'Divorcios y separaciones', href: '/servicios/juridico/divorcios' },
      { label: 'Custodia de hijos y pensiones alimenticias', href: '/servicios/juridico/custodia-y-pensiones' },
      { label: 'Liquidación de gananciales', href: '/servicios/juridico/liquidacion-de-gananciales' },
      { label: 'Herencias y sucesiones', href: '/servicios/juridico/sucesiones-herencias-y-planificacion-patrimonial' },
    ],
  },
  {
    title: 'Representación y Defensa',
    subtitle: 'Intervención procesal, asistencia letrada y estrategia de defensa ante escenarios críticos.',
    Icon: Gavel,
    items: [
      { label: 'Defensa y acusación particular', href: `/servicios/juridico/${titleToSlug('Defensa y Acusación Particular')}` },
      {
        label: 'Asistencia letrada en diligencias urgentes',
        href: `/servicios/juridico/${titleToSlug('Asistencia Letrada en Diligencias Urgentes')}`,
      },
      { label: 'Delitos económicos y patrimoniales', href: `/servicios/juridico/${titleToSlug('Delitos Económicos y Patrimoniales')}` },
      { label: 'Estrategia procesal y negociación', href: `/servicios/juridico/${titleToSlug('Estrategia Procesal y Negociación')}` },
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
      <ChevronRight
        size={12}
        className="shrink-0 ml-3 text-stone-400 transition-colors duration-200 group-hover:text-veritas-red group-hover:translate-x-0.5"
      />
    </Link>
  );
}

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
    <motion.section
      variants={item}
      className={`py-6 md:py-8 px-4 md:px-10 ${isFirst ? '' : 'border-t-2 border-stone-200'}`}
    >
      <div className="flex flex-col gap-5">
        <div className="pb-3 border-b border-stone-300">
          <div className="flex items-center gap-3 text-stone-900">
            <Icon size={18} strokeWidth={1.7} className="text-veritas-green/70" />
            <h2 className="font-serif text-lg md:text-2xl font-bold mb-1">{title}</h2>
          </div>
          <p className="mt-1 text-[13px] md:text-sm text-stone-600 font-sans leading-snug md:leading-relaxed">{subtitle}</p>
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

export default function ServiciosJuridico() {
  return (
    <>
      <div className="bg-[#f5f5f1] border-b border-veritas-green/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
          <div className="max-w-3xl">
            <div className="text-[10px] uppercase tracking-[0.34em] text-veritas-green/70 font-bold">
              Áreas de práctica
            </div>
            <h1 className="mt-3 font-serif font-bold text-[#1b3022] text-3xl md:text-4xl tracking-tight">
              Servicios Jurídicos
            </h1>
            <p className="mt-4 text-[14px] md:text-[15px] leading-relaxed text-[#3b3b3b] font-sans">
              Más de <span className="font-semibold text-[#1b3022]">30 años</span> defendiendo los intereses de
              empresas y particulares con rigor, método y una vocación clara: convertir la complejidad legal en
              decisiones seguras.
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="mt-10 md:mt-12 bg-white rounded-none border border-stone-200 overflow-hidden"
          >
            {legalAreas.map((area, idx) => (
              <ServiceMatrixRow
                key={area.title}
                title={area.title}
                subtitle={area.subtitle}
                Icon={area.Icon}
                items={[...area.items]}
                isFirst={idx === 0}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}

