'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Scale, Gavel, Users, Landmark } from 'lucide-react';
import LegalServiceCard from '../components/LegalServiceCard';
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

export default function ServiciosJuridico() {
  return (
    <>
      <div className="bg-[#f9f7f2]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
          <div className="max-w-3xl">
            <div className="text-[10px] uppercase tracking-[0.34em] text-veritas-green/70 font-bold">
              Áreas de práctica
            </div>
            <h2 className="mt-3 font-serif font-bold text-[#1b3022] text-3xl md:text-4xl tracking-tight">
              Servicios Jurídicos
            </h2>
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
            className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-5"
          >
            <motion.div variants={item} className="md:col-span-3">
              <LegalServiceCard
                title="Área Civil"
                Icon={Scale}
                items={[
                  {
                    label: 'Contratos, reclamaciones y responsabilidad civil',
                    href: `/servicios/juridico/${titleToSlug('Contratos y Reclamaciones')}`,
                  },
                  {
                    label: 'Arrendamientos, propiedad horizontal y comunidad de bienes',
                    href: `/servicios/juridico/${titleToSlug('Arrendamientos y Propiedad Horizontal')}`,
                  },
                  {
                    label: 'Sucesiones, herencias y planificación patrimonial',
                    href: `/servicios/juridico/${titleToSlug('Sucesiones, Herencias y Planificación Patrimonial')}`,
                  },
                  { label: 'Reclamación de cantidad y procedimientos declarativos', href: `/servicios/juridico/${titleToSlug('Reclamación de Cantidad')}` },
                ]}
                className="h-full"
              />
            </motion.div>

            <motion.div variants={item} className="md:col-span-3">
              <LegalServiceCard
                title="Área Mercantil"
                Icon={Briefcase}
                items={[
                  {
                    label: 'Constitución de sociedades y pactos de socios',
                    href: `/servicios/juridico/${titleToSlug('Constitución de Sociedades y Pactos de Socios')}`,
                  },
                  {
                    label: 'Reestructuración, gobierno corporativo y asesoría recurrente',
                    href: `/servicios/juridico/${titleToSlug(
                      'Reestructuración, Gobierno Corporativo y Asesoría Recurrente',
                    )}`,
                  },
                  {
                    label: 'Contratación mercantil y negociación',
                    href: `/servicios/juridico/${titleToSlug('Contratación Mercantil y Negociación')}`,
                  },
                  {
                    label: 'Conflictos societarios y defensa de administradores',
                    href: `/servicios/juridico/${titleToSlug(
                      'Conflictos Societarios y Defensa de Administradores',
                    )}`,
                  },
                ]}
                className="h-full"
              />
            </motion.div>

            <motion.div variants={item} className="md:col-span-2">
              <LegalServiceCard
                title="Área Penal"
                Icon={Gavel}
                items={[
                  {
                    label: 'Defensa y acusación particular',
                    href: `/servicios/juridico/${titleToSlug('Defensa y Acusación Particular')}`,
                  },
                  {
                    label: 'Asistencia letrada en diligencias urgentes',
                    href: `/servicios/juridico/${titleToSlug(
                      'Asistencia Letrada en Diligencias Urgentes',
                    )}`,
                  },
                  {
                    label: 'Delitos económicos y patrimoniales',
                    href: `/servicios/juridico/${titleToSlug('Delitos Económicos y Patrimoniales')}`,
                  },
                  {
                    label: 'Estrategia procesal y negociación',
                    href: `/servicios/juridico/${titleToSlug('Estrategia Procesal y Negociación')}`,
                  },
                ]}
                className="h-full"
              />
            </motion.div>

            <motion.div variants={item} className="md:col-span-2">
              <LegalServiceCard
                title="Área Laboral"
                Icon={Users}
                items={[
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
                    href: `/servicios/juridico/${titleToSlug(
                      'Asesoría en RRHH y Prevención de Conflictos',
                    )}`,
                  },
                  {
                    label: 'Representación en SMAC y jurisdicción social',
                    href: `/servicios/juridico/${titleToSlug(
                      'Representación en SMAC y Jurisdicción Social',
                    )}`,
                  },
                ]}
                className="h-full"
              />
            </motion.div>

            <motion.div variants={item} className="md:col-span-2">
              <LegalServiceCard
                title="Área Contencioso"
                Icon={Landmark}
                items={[
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
                    href: `/servicios/juridico/${titleToSlug(
                      'Estrategia y Acompañamiento Documental',
                    )}`,
                  },
                ]}
                className="h-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

