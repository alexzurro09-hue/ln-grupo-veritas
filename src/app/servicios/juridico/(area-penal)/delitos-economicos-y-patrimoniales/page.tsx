import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Abogados Delitos Económicos en Alcalá de Henares | LN Grupo Veritas',
  description:
    'Especialistas en defensa y acusación en estafas, apropiación indebida y administración desleal en Alcalá de Henares. Más de 30 años de rigor en derecho penal económico.',
  alternates: {
    canonical: 'https://ln-grupo-veritas.vercel.app/servicios/juridico/delitos-economicos-y-patrimoniales',
  },
};

export default function Page() {
  const serviceTitle = 'Delitos Económicos y Patrimoniales';
  const description =
    'Defensa técnica y acusación particular en delitos financieros, estafas y administración desleal en Alcalá de Henares y Madrid. Tres décadas de solvencia jurídica en procesos penales complejos.';

  const metodo = [
    'Realizamos un análisis exhaustivo de la trazabilidad financiera y documental, colaborando con peritos economistas para construir una base probatoria sólida e incontestable.',
    'Diseñamos estrategias procesales preventivas y reactivas, orientadas a minimizar la exposición penal y patrimonial de administradores y empresas implicadas en procesos económicos.',
    'Representación técnica integral en todas las fases del proceso penal, con especial énfasis en la fase de instrucción, donde la interpretación de la prueba pericial es determinante para el éxito del caso.',
  ];

  return (
    <>
      <div className="bg-[#f9f7f2] border-b border-veritas-green/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 md:py-8">
          <nav className="text-[10px] uppercase tracking-[0.32em] text-veritas-green/70 font-bold">
            <ol className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <li>
                <Link href="/" className="hover:text-veritas-red transition-colors">
                  Inicio
                </Link>
              </li>
              <li className="opacity-60">›</li>
              <li className="opacity-80">
                <span>Servicios</span>
              </li>
              <li className="opacity-60">›</li>
              <li>
                <Link href="/servicios/juridico" className="hover:text-veritas-red transition-colors">
                  Jurídico
                </Link>
              </li>
              <li className="opacity-60">›</li>
              <li className="text-veritas-green">{serviceTitle}</li>
            </ol>
          </nav>

          <h1 className="mt-2 font-serif text-3xl md:text-4xl font-bold tracking-tight text-veritas-green">
            {serviceTitle}
          </h1>
          <p className="mt-3 text-[14px] md:text-[15px] leading-relaxed text-[#3b3b3b] font-sans max-w-3xl">
            {description}
          </p>
        </div>
      </div>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-14">
          <div className="max-w-3xl">
            <div className="mb-10">
              <h2 className="font-serif text-[18px] md:text-[20px] font-bold text-veritas-green">
                Especialistas en Derecho Penal Económico y Protección Patrimonial
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas contamos con más de 30 años de experiencia como{' '}
                  <strong>abogados especialistas en delitos económicos en Alcalá de Henares</strong>. La
                  complejidad de estos procedimientos exige un equipo que combine el conocimiento profundo de la
                  ley penal con la capacidad de análisis de estructuras societarias y operativas financieras.
                </p>
                <p>
                  Ejercemos la defensa y acusación en procedimientos por{' '}
                  <strong>
                    estafa, apropiación indebida, administración desleal, insolvencias punibles y delitos contra
                    la Hacienda Pública
                  </strong>
                  . Nuestro enfoque se centra en la desarticulación de pruebas de cargo mediante un rigor pericial
                  extremo, protegiendo tanto la libertad como el patrimonio de nuestros clientes frente a
                  acusaciones de delitos patrimoniales y societarios de alta complejidad técnica.
                </p>
              </div>
            </div>

            <h2 className="font-serif text-[18px] md:text-[20px] font-bold text-veritas-green">Método y rigor</h2>
            <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-veritas-gray font-sans">
              {metodo.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <Link
              href="/contacto"
              className="mt-10 inline-flex items-center justify-center bg-veritas-green text-white py-4 px-6 text-[11px] uppercase tracking-[0.25em] font-bold hover:bg-veritas-red transition-all duration-300 ease-in-out cursor-pointer rounded-none border border-white/10"
            >
              Solicitar consulta específica
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

