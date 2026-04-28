import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Abogados Mercantiles: Constitución de Sociedades en Alcalá de Henares | LN Grupo Veritas',
  description:
    'Especialistas en creación de empresas, redacción de pactos de socios y asesoramiento mercantil en Alcalá de Henares y Madrid. Proteja su inversión con más de 30 años de experiencia.',
  alternates: {
    canonical:
      'https://ln-grupo-veritas.vercel.app/servicios/juridico/constitucion-de-sociedades-y-pactos-de-socios',
  },
};

export default function Page() {
  const serviceTitle = 'Constitución de Sociedades y Pactos de Socios';
  const description =
    'Asesoramiento integral para la creación de empresas y blindaje de relaciones entre socios en Alcalá de Henares y Madrid. Más de 30 años impulsando proyectos empresariales con rigor legal.';

  const metodo = [
    'Analizamos el modelo de negocio y los objetivos de los fundadores para determinar la forma jurídica más eficiente y diseñar unos estatutos a medida, huyendo de modelos genéricos.',
    'Definimos un Pacto de Socios robusto que regule la gobernanza, las mayorías bloqueantes y las situaciones de conflicto, proporcionando una hoja de ruta clara para el futuro de la sociedad.',
    'Tramitamos íntegramente el proceso: desde la obtención del nombre en el Registro Mercantil Central hasta el otorgamiento de escritura ante notario y la obtención del CIF definitivo.',
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
                Especialistas en Derecho Societario y Emprendimiento
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas contamos con una trayectoria de más de 30 años como{' '}
                  <strong>
                    abogados mercantiles especialistas en la constitución de sociedades en Alcalá de Henares
                  </strong>
                  . Entendemos que el nacimiento de una empresa es un hito crítico que requiere una estructura
                  legal sólida para garantizar su viabilidad y crecimiento a largo plazo.
                </p>
                <p>
                  Gestionamos de forma ágil la{' '}
                  <strong>
                    constitución de Sociedades Limitadas (SL), Sociedades Anónimas (SA) y la redacción de Pactos de
                    Socios personalizados
                  </strong>
                  . Nuestro enfoque se centra en prevenir conflictos futuros mediante cláusulas de salida,
                  mayorías de control y regímenes de transmisión de participaciones, asegurando que los intereses
                  de los fundadores y del negocio estén protegidos desde el primer día frente a cualquier
                  contingencia mercantil.
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
