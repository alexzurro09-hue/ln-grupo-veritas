import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Briefcase, Scale, Gavel, Users, Landmark } from 'lucide-react';
import LegalServiceCard from '../components/LegalServiceCard';

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

export default function ServiciosJuridico() {
  return (
    <>
      <Helmet>
        <title>Servicios Jurídicos en Madrid | LN Grupo Veritas</title>
        <meta
          name="description"
          content="Servicios jurídicos en Madrid. Más de 30 años de trayectoria en asesoría legal para empresas y particulares: civil, mercantil, penal, laboral y contencioso."
        />
      </Helmet>

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
                  'Contratos, reclamaciones y responsabilidad civil',
                  'Arrendamientos, propiedad horizontal y comunidad de bienes',
                  'Sucesiones, herencias y planificación patrimonial',
                  'Reclamación de cantidad y procedimientos declarativos',
                ]}
                className="h-full"
              />
            </motion.div>

            <motion.div variants={item} className="md:col-span-3">
              <LegalServiceCard
                title="Área Mercantil"
                Icon={Briefcase}
                items={[
                  'Constitución de sociedades y pactos de socios',
                  'Reestructuración, gobierno corporativo y asesoría recurrente',
                  'Contratación mercantil y negociación',
                  'Conflictos societarios y defensa de administradores',
                ]}
                className="h-full"
              />
            </motion.div>

            <motion.div variants={item} className="md:col-span-2">
              <LegalServiceCard
                title="Área Penal"
                Icon={Gavel}
                items={[
                  'Defensa y acusación particular',
                  'Asistencia letrada en diligencias urgentes',
                  'Delitos económicos y patrimoniales',
                  'Estrategia procesal y negociación',
                ]}
                className="h-full"
              />
            </motion.div>

            <motion.div variants={item} className="md:col-span-2">
              <LegalServiceCard
                title="Área Laboral"
                Icon={Users}
                items={[
                  'Contratación, despidos y sanciones',
                  'Reclamaciones de cantidad y salarios',
                  'Asesoría en RRHH y prevención de conflictos',
                  'Representación en SMAC y jurisdicción social',
                ]}
                className="h-full"
              />
            </motion.div>

            <motion.div variants={item} className="md:col-span-2">
              <LegalServiceCard
                title="Área Contencioso"
                Icon={Landmark}
                items={[
                  'Recursos administrativos y reclamaciones',
                  'Sanciones, licencias y procedimientos ante la Administración',
                  'Defensa contencioso-administrativa',
                  'Estrategia y acompañamiento documental',
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

