import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Respuesta a Requerimientos y Actas de Inspección | LN Grupo Veritas',
  description:
    'Especialistas en la respuesta técnica a requerimientos y alegaciones ante actas de infracción de la Inspección de Trabajo en Alcalá de Henares. 30 años de defensa legal.',
  alternates: {
    canonical: 'https://ln-grupo-veritas.vercel.app/servicios/laboral/respuesta-a-requerimientos-y-actas',
  },
};

export default function Page() {
  const serviceTitle = 'Respuesta a Requerimientos y Actas';
  const description =
    'Defensa técnica y redacción estratégica de alegaciones ante la Inspección de Trabajo y Seguridad Social para empresas en Alcalá de Henares y Madrid. 30 años de rigor jurídico.';

  const metodo = [
    'Análisis Técnico del Acta: Desglosamos detalladamente la propuesta de sanción del inspector para detectar fallos en la tipificación de la infracción o falta de pruebas, construyendo una estrategia de defensa personalizada.',
    'Redacción Jurídica Especializada: Elaboramos escritos de alegaciones fundamentados en el Estatuto de los Trabajadores y la LISOS (Ley sobre Infracciones y Sanciones en el Orden Social), asegurando que cada argumento técnico esté diseñado para desvirtuar la acusación.',
    'Gestión de la Subsanación Proactiva: En casos de requerimientos de cumplimiento, asesoramos a la empresa en la implementación inmediata de las medidas solicitadas para demostrar voluntad de cumplimiento y evitar que el proceso derive en una sanción económica.',
  ];

  return (
    <>
      <div className="bg-[#f5f5f1] border-b border-veritas-green/10">
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
                <Link href="/servicios/laboral" className="hover:text-veritas-red transition-colors">
                  Laboral
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
                Especialistas en Defensa frente a Sanciones y Requerimientos de la ITSS
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas entendemos que la recepción de un requerimiento o un acta de infracción es un momento crítico que
                  requiere una respuesta inmediata y altamente especializada. Con más de 30 años de trayectoria en la{' '}
                  <strong>gestión de requerimientos de la Inspección de Trabajo en Alcalá de Henares</strong>, proporcionamos la asistencia
                  técnica necesaria para rebatir propuestas de sanción y justificar la posición de la empresa ante la autoridad laboral con
                  la máxima solvencia jurídica.
                </p>
                <p>
                  Gestionamos de forma íntegra la{' '}
                  <strong>
                    elaboración de alegaciones ante actas de infracción, la respuesta a requerimientos de subsanación y la interposición de
                    recursos en vía administrativa
                  </strong>
                  . Nuestro enfoque se centra en la identificación de errores de hecho o de derecho en la actuación inspectora, utilizando la
                  jurisprudencia más reciente y una fundamentación técnica sólida para evitar la imposición de multas o lograr su reducción
                  significativa, protegiendo tanto la economía como la reputación de su organización.
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
              Solicitar defensa ante acta
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

