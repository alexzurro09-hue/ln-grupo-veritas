import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Reestructuración y Asesoría Mercantil Recurrente en Alcalá | LN Grupo Veritas',
  description:
    'Especialistas en reestructuración societaria, gobierno corporativo y asesoría jurídica recurrente para empresas en Alcalá de Henares. Más de 30 años garantizando la continuidad de su negocio.',
  alternates: {
    canonical:
      'https://ln-grupo-veritas.vercel.app/servicios/juridico/reestructuracion-gobierno-corporativo-y-asesoria-recurrente',
  },
};

export default function Page() {
  const serviceTitle = 'Reestructuración, Gobierno Corporativo y Asesoría Recurrente';
  const description =
    'Protección legal continua y soluciones estratégicas para el crecimiento y la estabilidad de su empresa en Alcalá de Henares y Madrid. Tres décadas de excelencia en el acompañamiento corporativo.';

  const metodo = [
    'Realizamos auditorías legales preventivas para identificar riesgos en la estructura societaria y operativa, proponiendo mejoras que fortalezcan la posición de la empresa.',
    'Definimos protocolos de actuación y reglamentos internos que profesionalizan el proceso de toma de decisiones, garantizando el cumplimiento de la Ley de Sociedades de Capital.',
    'Ejecutamos la implementación documental y registral de todos los acuerdos sociales, proporcionando un soporte jurídico ágil y de alta precisión en el día a día de la corporación.',
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
                Consultoría Estratégica en Derecho Societario y Continuidad Empresarial
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas entendemos que la gestión de una empresa requiere una visión legal de 360
                  grados. Con más de 30 años de trayectoria como{' '}
                  <strong>abogados especialistas en asesoría mercantil recurrente en Alcalá de Henares</strong>,
                  actuamos como el soporte jurídico constante que permite a los administradores y directivos
                  centrarse en la estrategia de negocio con total seguridad.
                </p>
                <p>
                  Abordamos con precisión técnica procesos de{' '}
                  <strong>
                    reestructuración de sociedades, modificaciones estatutarias, fusiones y adquisiciones, así como
                    el diseño de estructuras de Gobierno Corporativo
                  </strong>
                  . Nuestro servicio de asesoría recurrente garantiza el cumplimiento normativo (compliance) y la
                  correcta secretaría de los órganos sociales, protegiendo la responsabilidad de los
                  administradores y asegurando una gobernanza transparente y eficiente frente a terceros y socios.
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

