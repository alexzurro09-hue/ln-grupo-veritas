import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Representación SMAC y Juicios Laborales en Alcalá | LN Grupo Veritas',
  description:
    'Especialistas en conciliación ante el SMAC y representación técnica en los Juzgados de lo Social en Alcalá de Henares y Madrid. Más de 30 años de experiencia procesal.',
  alternates: {
    canonical:
      'https://lngrupoveritas.es/servicios/juridico/representacion-en-smac-y-jurisdiccion-social',
  },
};

export default function Page() {
  const serviceTitle = 'Representación en SMAC y Jurisdicción Social';
  const description =
    'Defensa letrada y representación técnica en actos de conciliación y procedimientos judiciales laborales en Alcalá de Henares y Madrid. 30 años de solvencia en tribunales.';

  const metodo = [
    'Preparación estratégica del acto de conciliación (SMAC): Analizamos la viabilidad de un acuerdo beneficioso que evite la dilación judicial, blindando los términos del acta para su posterior ejecución en caso de incumplimiento.',
    'Defensa técnica en estrados: Realizamos una preparación minuciosa de la vista oral, desde la proposición de pruebas documentales y testificales hasta el interrogatorio y las conclusiones, con un enfoque altamente profesional y persuasivo.',
    'Seguimiento y fase de recursos: Acompañamos al cliente hasta la resolución definitiva, gestionando recursos de suplicación ante el TSJ y asegurando la ejecución forzosa de la sentencia para el cobro efectivo de las cantidades o el cumplimiento de los pronunciamientos judiciales.',
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
                Especialistas en Defensa Procesal y Litigiosidad Laboral
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas contamos con una trayectoria de más de 30 años como{' '}
                  <strong>
                    abogados expertos en representación ante el SMAC y la jurisdicción social en Alcalá de Henares
                  </strong>
                  . Entendemos que el éxito de un procedimiento laboral depende de una defensa técnica que combine
                  la capacidad de negociación en vía administrativa con un dominio absoluto de la práctica de la
                  prueba en sede judicial.
                </p>
                <p>
                  Gestionamos de forma integral la{' '}
                  <strong>
                    asistencia a actos de conciliación, la redacción de demandas laborales y la defensa técnica en
                    juicios ordinarios, de despido, de seguridad social y de tutela de derechos fundamentales
                  </strong>
                  . Nuestro enfoque se centra en la defensa rigurosa de los intereses de nuestros clientes, ya
                  sean trabajadores o empresas, asegurando una representación solvente ante los Juzgados de lo
                  Social y el Tribunal Superior de Justicia, orientada siempre a la obtención de sentencias
                  favorables y la ejecución efectiva de las mismas.
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

