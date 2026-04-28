import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Abogados Contencioso-Administrativo en Alcalá de Henares | LN Grupo Veritas',
  description:
    'Especialistas en recursos contencioso-administrativos ante los tribunales. Defensa técnica frente a la Administración Pública en Alcalá de Henares y Madrid.',
  alternates: {
    canonical: 'https://ln-grupo-veritas.vercel.app/servicios/juridico/defensa-contencioso-administrativa',
  },
};

export default function Page() {
  const serviceTitle = 'Defensa Contencioso-Administrativa';
  const description =
    'Representación letrada y defensa técnica en procedimientos judiciales frente a la Administración Pública en Alcalá de Henares y Madrid. Más de 30 años de éxito en tribunales.';

  const metodo = [
    'Diseño de la demanda judicial: Elaboramos una fundamentación jurídica exhaustiva, analizando el expediente administrativo en busca de vicios de nulidad o anulabilidad y proponiendo una práctica de prueba contundente para desvirtuar la presunción de legalidad de la Administración.',
    'Estrategia cautelar: Instamos la adopción de medidas cautelares desde el inicio del proceso para evitar que la ejecución del acto administrativo cause daños irreparables durante el tiempo que dure el litigio judicial.',
    'Defensa en sala y conclusiones: Realizamos una defensa oral técnica y persuasiva en la vista del juicio, sintetizando los puntos clave del conflicto y rebatiendo con precisión los argumentos de la Abogacía del Estado o de la Administración demandada.',
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
                Especialistas en Litigiosidad Judicial contra la Administración Pública
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas acumulamos más de tres décadas de trayectoria como{' '}
                  <strong>
                    abogados especialistas en recursos contencioso-administrativos en Alcalá de Henares
                  </strong>
                  . Cuando la vía administrativa no ofrece la solución justa, es imperativo acudir a la tutela
                  judicial efectiva para impugnar actos, resoluciones o la inactividad de la Administración ante
                  los Juzgados y Tribunales correspondientes.
                </p>
                <p>
                  Gestionamos con máximo rigor técnico{' '}
                  <strong>
                    recursos contencioso-administrativos por procedimientos ordinarios y abreviados, solicitud de
                    medidas cautelares para la suspensión de actos administrativos y recursos de apelación y
                    casación
                  </strong>
                  . Nuestro enfoque se centra en la defensa contundente de los derechos de ciudadanos y empresas
                  frente a desestimaciones de licencias, sanciones firmes, denegaciones de responsabilidad
                  patrimonial y conflictos urbanísticos, garantizando una representación procesal solvente que
                  busque la nulidad de los actos administrativos lesivos y el restablecimiento de la legalidad.
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

