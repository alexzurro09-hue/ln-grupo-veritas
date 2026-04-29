import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Interlocución y Acompañamiento Físico ante la Inspección | LN Grupo Veritas',
  description:
    'Asumimos la representación y acompañamiento físico ante la Inspección de Trabajo en Alcalá de Henares. Interlocución técnica para su tranquilidad. 30 años de experiencia.',
  alternates: {
    canonical: 'https://lngrupoveritas.es/servicios/laboral/interlocucion-y-acompanamiento-fisico',
  },
};

export default function Page() {
  const serviceTitle = 'Interlocución y Acompañamiento Físico';
  const description =
    'Representación técnica y asistencia presencial en actuaciones de la Inspección de Trabajo para empresas en Alcalá de Henares y Madrid. 30 años siendo su escudo profesional.';

  const metodo = [
    'Asistencia en Visitas Presenciales: Estamos presentes durante la personación del inspector en sus instalaciones, supervisando el alcance de la actuación y asegurando que se respeten los derechos de la empresa y la normativa de procedimiento.',
    "Unidad de Discurso Técnico: Centralizamos todas las respuestas y aclaraciones, hablando 'el mismo idioma' que el inspector para agilizar el proceso y evitar que la entrega de información fragmentada genere nuevas líneas de investigación.",
    'Firma y Revisión de Diligencias: Supervisamos la redacción de las diligencias y actas de personación en el momento, realizando las manifestaciones necesarias para que la realidad de la empresa quede fielmente reflejada en el expediente oficial.',
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
                Su Único Interlocutor ante la Autoridad Laboral
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas sabemos que una inspección de trabajo no solo es un reto jurídico, sino también un momento de alta
                  tensión emocional para el empresario. Con más de 30 años de experiencia en la{' '}
                  <strong>interlocución directa con la ITSS en Alcalá de Henares</strong>, asumimos la voz de su empresa ante la
                  administración, garantizando que cada interacción sea estrictamente profesional y se ajuste a la estrategia de defensa
                  establecida.
                </p>
                <p>
                  Brindamos un servicio de{' '}
                  <strong>
                    acompañamiento físico en las visitas del inspector al centro de trabajo y representación presencial en las comparecencias
                    oficiales
                  </strong>
                  . Nuestro objetivo es actuar como filtro técnico: evitamos que interpretaciones erróneas o comentarios fuera de contexto se
                  conviertan en indicios de sanción, gestionando el diálogo con el actuario de forma fluida y experta para reconducir el
                  procedimiento hacia un cierre satisfactorio y sin sorpresas.
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
              Solicitar acompañamiento experto
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

