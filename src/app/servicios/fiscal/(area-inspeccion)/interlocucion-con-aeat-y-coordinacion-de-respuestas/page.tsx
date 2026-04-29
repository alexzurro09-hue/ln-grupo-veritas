import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Interlocución con Hacienda y Coordinación de Respuestas | LN Grupo Veritas',
  description:
    'Actuamos como su interlocutor técnico ante la AEAT. Gestión de visitas, requerimientos y respuestas durante inspecciones fiscales en Alcalá de Henares.',
  alternates: {
    canonical:
      'https://lngrupoveritas.es/servicios/fiscal/interlocucion-con-aeat-y-coordinacion-de-respuestas',
  },
};

export default function Page() {
  const serviceTitle = 'Interlocución con la AEAT y Coordinación de Respuestas';
  const description =
    'Representación técnica y gestión profesional de la comunicación con la Agencia Tributaria durante procedimientos de inspección en Alcalá de Henares y Madrid. 30 años protegiendo su tranquilidad.';

  const metodo = [
    'Unidad de Interlocución: Centralizamos toda la comunicación con el inspector, evitando que el cliente o sus empleados interactúen directamente con la administración, eliminando así el riesgo de contradicciones o fugas de información estratégica.',
    'Filtro Técnico de Información: Analizamos cada petición de la inspección para determinar su pertinencia legal, preparando respuestas precisas que satisfagan el requerimiento sin exceder la obligación de información del contribuyente.',
    'Presencia en Actuaciones: Acompañamos y representamos al cliente en todas las diligencias y firmas de actas, supervisando que el contenido de los documentos oficiales refleje fielmente la realidad de los hechos y no contenga interpretaciones perjudiciales.',
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
                <Link href="/servicios/fiscal" className="hover:text-veritas-red transition-colors">
                  Fiscal
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
                Su Escudo Técnico en la Relación Directa con la Inspección Tributaria
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas sabemos que el éxito de una inspección fiscal depende críticamente de cómo se
                  gestione la comunicación con el actuario. Con más de 30 años de experiencia en la{' '}
                  <strong>interlocución con la AEAT en Alcalá de Henares</strong>, asumimos la representación total
                  de nuestros clientes, convirtiéndonos en el único punto de contacto con la administración para
                  garantizar que cada respuesta y cada documento entregado sigan una estrategia de defensa
                  coherente.
                </p>
                <p>
                  Nos encargamos de la{' '}
                  <strong>
                    coordinación de respuestas a requerimientos verbales y escritos, la comparecencia en las
                    oficinas de la Agencia Tributaria y la asistencia técnica en las visitas del inspector
                  </strong>
                  . Nuestro enfoque profesional evita que errores en la comunicación o entregas de información no
                  obligatoria generen nuevas líneas de investigación, filtrando técnicamente cada interacción para
                  que el procedimiento se ciña estrictamente a su objeto inicial y se resuelva en las condiciones
                  más favorables para su empresa o patrimonio.
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
              Solicitar representación técnica
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

