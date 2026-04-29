import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Estrategia Procesal Penal y Negociación en Alcalá | LN Grupo Veritas',
  description:
    'Especialistas en diseño de estrategias de defensa y negociación de conformidades en procesos penales en Alcalá de Henares y Madrid. Más de 30 años de éxito procesal.',
  alternates: {
    canonical: 'https://lngrupoveritas.es/servicios/juridico/estrategia-procesal-y-negociacion',
  },
};

export default function Page() {
  const serviceTitle = 'Estrategia Procesal y Negociación';
  const description =
    'Diseño táctico de la defensa y negociación experta para la resolución de procesos penales en Alcalá de Henares y Madrid. 30 años transformando la complejidad en resultados.';

  const metodo = [
    'Diagnóstico situacional: Evaluación técnica de la carga probatoria y diseño de una hoja de ruta procesal que contemple todos los escenarios posibles, desde el archivo de las actuaciones hasta el juicio oral.',
    'Negociación de alto nivel: Intervención directa ante las acusaciones para negociar acuerdos de conformidad que aseguren una reducción drástica de las penas, priorizando siempre la libertad y estabilidad del cliente.',
    'Ejecución táctica: Control absoluto de los plazos, recursos y pruebas, garantizando que cada movimiento procesal sirva a una estrategia global de protección y minimización de riesgos.',
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
                Arquitectura de la Defensa y Resolución de Conflictos Penales
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas entendemos que un proceso penal no solo se gana en la vista oral, sino en la{' '}
                  <strong>estrategia procesal previa</strong>. Con más de 30 años como{' '}
                  <strong>abogados expertos en estrategia y negociación penal en Alcalá de Henares</strong>,
                  analizamos cada caso como una unidad táctica donde la anticipación y el control de los tiempos
                  judiciales son determinantes para el éxito de la defensa.
                </p>
                <p>
                  Nos especializamos en la{' '}
                  <strong>
                    negociación de conformidades beneficiosas, la obtención de suspensiones de condena y la
                    resolución estratégica de la responsabilidad civil derivada del delito
                  </strong>
                  . Nuestro enfoque prioriza el análisis exhaustivo de riesgos, permitiendo al cliente conocer en
                  todo momento el escenario más probable y actuando con firmeza ante el Ministerio Fiscal para
                  alcanzar acuerdos que minimicen el impacto personal y patrimonial, sin renunciar nunca a la
                  defensa más contundente cuando la libre absolución es el objetivo.
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

