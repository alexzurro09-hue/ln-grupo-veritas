import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Abogados Laboralistas: Despidos y Sanciones en Alcalá | LN Grupo Veritas',
  description:
    'Especialistas en desahucios, impugnación de despidos, sanciones y redacción de contratos laborales en Alcalá de Henares. Más de 30 años de experiencia en derecho laboral.',
  alternates: {
    canonical: 'https://lngrupoveritas.es/servicios/juridico/contratacion-despidos-y-sanciones',
  },
};

export default function Page() {
  const serviceTitle = 'Contratación, Despidos y Sanciones';
  const description =
    'Asesoramiento integral en la gestión de relaciones laborales y defensa técnica ante despidos y sanciones en Alcalá de Henares y Madrid. 30 años de solvencia en la protección de sus derechos sociolaborales.';

  const metodo = [
    'Análisis exhaustivo del marco normativo y del convenio colectivo aplicable para determinar la viabilidad de la defensa o la procedencia de la extinción contractual.',
    'Intervención estratégica en la fase de conciliación previa, buscando acuerdos que optimicen tiempos y costes, evitando el desgaste de la vía judicial cuando es posible.',
    'Representación técnica integral en procedimientos judiciales ante los Juzgados de lo Social, con una preparación minuciosa de la prueba y un control estricto de los plazos procesales.',
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
                Especialistas en Derecho del Trabajo y Resolución de Conflictos Laborales
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas contamos con una trayectoria de más de 30 años como{' '}
                  <strong>abogados laboralistas en Alcalá de Henares</strong>. La complejidad de la normativa
                  laboral exige una respuesta técnica precisa, ya sea para blindar a la empresa ante contingencias
                  legales o para garantizar que los derechos del trabajador sean respetados con el máximo rigor.
                </p>
                <p>
                  Gestionamos con eficacia la{' '}
                  <strong>
                    impugnación de despidos disciplinarios y objetivos, reclamaciones de cantidad, expedientes
                    sancionadores y la redacción de cláusulas de alta dirección
                  </strong>
                  . Nuestro enfoque combina la estrategia preventiva en la contratación con una defensa agresiva
                  en el acto de conciliación ante el SMAC y en sede judicial, asegurando la máxima protección de
                  los intereses de nuestros clientes ante cualquier conflicto derivado de la relación laboral.
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

