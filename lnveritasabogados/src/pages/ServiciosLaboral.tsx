import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  BadgeCheck,
  BriefcaseBusiness,
  FileText,
  ShieldCheck,
  Stethoscope,
  TrendingUp,
  UserRound,
  Users,
  TriangleAlert,
  HeartPulse,
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

function Block({
  title,
  subtitle,
  Icon,
  children,
  className,
  prominent = false,
}: {
  title: string;
  subtitle?: string;
  Icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
  children: React.ReactNode;
  className?: string;
  prominent?: boolean;
}) {
  return (
    <motion.section
      variants={item}
      whileHover={{ y: -4 }}
      className={[
        'group bg-white rounded-none border border-stone-100 shadow-[0_10px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_14px_30px_rgba(0,0,0,0.10)] transition-all',
        'p-6 md:p-7',
        prominent ? 'border-veritas-green/25 bg-white' : '',
        className ?? '',
      ].join(' ')}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-serif font-bold text-[18px] md:text-[20px] text-[#1b3022]">{title}</h3>
          {subtitle ? (
            <p className="mt-2 text-[13px] text-[#333] font-sans leading-relaxed max-w-3xl">{subtitle}</p>
          ) : null}
        </div>
        <div className="text-[#1b3022]/70 transition-colors group-hover:text-veritas-red">
          <Icon size={22} strokeWidth={1.6} />
        </div>
      </div>
      <div className="mt-5">{children}</div>
    </motion.section>
  );
}

export default function ServiciosLaboral() {
  return (
    <>
      <Helmet>
        <title>Servicios Laborales en Madrid | LN Grupo Veritas</title>
        <meta
          name="description"
          content="Gestión laboral para empresas y particulares en Madrid: nóminas, cotizaciones, Sistema RED, DELTA, contratación, bajas, despidos y defensa ante inspección."
        />
      </Helmet>

      <div className="bg-[#f9f7f2]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
          {/* Hero */}
          <div className="max-w-3xl">
            <div className="text-[10px] uppercase tracking-[0.34em] text-veritas-green/70 font-bold">
              Operativa laboral
            </div>
            <h2 className="mt-3 font-serif font-bold text-[#1b3022] text-3xl md:text-4xl tracking-tight">
              Gestión de Personas y Seguridad Laboral
            </h2>
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
            {/* Bloque A: Motor mensual (prominente) */}
            <Block
              title="Gestión Mensual (El Motor)"
              subtitle="Nóminas, cotizaciones y tributación recurrente con calendario, control y trazabilidad para evitar incidencias."
              Icon={Users}
              prominent
              className="md:col-span-6 bg-[#ffffff] border border-[#1b3022]/20 shadow-[0_10px_35px_rgba(27,48,34,0.10)]"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-none border border-stone-100 p-4">
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-bold text-[#1b3022]">
                    <FileText size={16} strokeWidth={1.8} className="text-veritas-red" />
                    Nóminas
                  </div>
                  <div className="mt-3 grid gap-2.5">
                    <Bullet>Confección y revisión de nóminas</Bullet>
                    <Bullet>Pagas extra, atrasos y regularizaciones</Bullet>
                    <Bullet>Variables, complementos y embargos</Bullet>
                  </div>
                </div>

                <div className="rounded-none border border-stone-100 p-4">
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-bold text-[#1b3022]">
                    <BriefcaseBusiness size={16} strokeWidth={1.8} className="text-veritas-red" />
                    Cotizaciones & Tributos
                  </div>
                  <div className="mt-3 grid gap-2.5">
                    <Bullet>Cotizaciones (SILTRA / TC2)</Bullet>
                    <Bullet>Sistema RED: comunicaciones y confirmaciones</Bullet>
                    <Bullet>Modelos 111 / 190 y soporte documental</Bullet>
                  </div>
                </div>
              </div>
            </Block>

            {/* Bloque B */}
            <Block
              title="Altas y Contratación"
              subtitle="Afiliación, contratos y prórrogas con estudios previos de coste para contratar con seguridad."
              Icon={TrendingUp}
              className="md:col-span-3"
            >
              <div className="grid gap-2.5">
                <Bullet>Altas/bajas y variaciones de afiliación</Bullet>
                <Bullet>Contratos, prórrogas y modificaciones</Bullet>
                <Bullet>Estudios de coste previo y bonificaciones</Bullet>
                <Bullet>Comunicación y registro en sistemas oficiales</Bullet>
              </div>
            </Block>

            {/* Bloque C */}
            <Block
              title="Protección y Seguimiento de Bajas"
              subtitle="Gestión de contingencias, salud laboral e incidencias: seguimiento documental y coordinación con organismos."
              Icon={Stethoscope}
              className="md:col-span-3"
            >
              <div className="grid gap-2.5">
                <Bullet>Incapacidad Temporal (Sistema RED / DELTA)</Bullet>
                <Bullet>Maternidad / paternidad y prestaciones</Bullet>
                <Bullet>Accidentes de trabajo y comunicaciones</Bullet>
                <Bullet>Seguimiento de partes, plazos y requerimientos</Bullet>
              </div>
            </Block>

            {/* Bloque D */}
            <Block
              title="Extinciones y Crisis"
              subtitle="Rigor, seriedad y documentación impecable en escenarios críticos."
              Icon={TriangleAlert}
              className="md:col-span-4 border-veritas-red/25"
            >
              <div className="grid gap-2.5">
                <Bullet>Despidos y cartas con estrategia preventiva</Bullet>
                <Bullet>Finiquitos, indemnizaciones y liquidaciones</Bullet>
                <Bullet>ERES / ERTES y coordinación con SEPE</Bullet>
                <Bullet>Negociación y acompañamiento en conflictos</Bullet>
              </div>
            </Block>

            {/* Defensa Inspección */}
            <Block
              title="Defensa ante la Inspección"
              subtitle="Acompañamiento técnico y presencial ante la autoridad laboral: preparación, respuesta y estrategia."
              Icon={ShieldCheck}
              className="md:col-span-2"
            >
              <div className="grid gap-2.5">
                <Bullet>Preparación de documentación y trazabilidad</Bullet>
                <Bullet>Respuesta a requerimientos y actas</Bullet>
                <Bullet>Interlocución y acompañamiento físico</Bullet>
              </div>
            </Block>

            {/* Empleados de Hogar (humano) */}
            <motion.section variants={item} className="md:col-span-6">
              <motion.div
                whileHover={{ y: -4 }}
                className="group rounded-none border border-stone-100 bg-white shadow-[0_10px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_14px_30px_rgba(0,0,0,0.10)] transition-all p-6 md:p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif font-bold text-[18px] md:text-[20px] text-[#1b3022]">
                      Empleados de Hogar
                    </h3>
                    <p className="mt-2 text-[13px] text-[#333] font-sans leading-relaxed max-w-3xl">
                      Un servicio cercano y claro para particulares: altas, nóminas y regularidad con tranquilidad.
                    </p>
                  </div>
                  <div className="text-[#1b3022]/70 transition-colors group-hover:text-veritas-red">
                    <UserRound size={22} strokeWidth={1.6} />
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-3">
                  {[
                    'Alta, modificaciones y bajas',
                    'Nóminas, pagas y control mensual',
                    'Asesoría en incidencias y documentación',
                  ].map((t) => (
                    <div key={t} className="rounded-none border border-stone-100 p-4 flex gap-2.5">
                      <span className="mt-[2px] text-veritas-red">
                        <HeartPulse size={16} strokeWidth={2.2} />
                      </span>
                      <div className="text-[13px] text-[#333] font-sans leading-relaxed">{t}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.section>

            {/* Exclusiones (nota informativa elegante) */}
            <motion.section variants={item} className="md:col-span-6">
              <div className="rounded-none border border-stone-100 bg-white/70 shadow-[0_10px_24px_rgba(0,0,0,0.06)] p-5 md:p-6">
                <div className="text-[10px] uppercase tracking-[0.28em] text-[#666] font-bold">
                  Nota Informativa
                </div>
                <div className="mt-1 font-serif font-bold text-[#1b3022] text-[16px]">
                  Exclusiones y alcance del servicio
                </div>
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

