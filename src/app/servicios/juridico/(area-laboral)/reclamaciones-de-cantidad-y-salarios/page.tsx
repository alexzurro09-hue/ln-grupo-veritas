import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Abogados Reclamación de Salarios y Cantidad en Alcalá | LN Grupo Veritas',
  description:
    'Especialistas en reclamación de nóminas impagadas, finiquitos, horas extraordinarias y diferencias salariales en Alcalá de Henares. Más de 30 años de éxito legal.',
  alternates: {
    canonical:
      'https://lngrupoveritas.es/servicios/juridico/reclamaciones-de-cantidad-y-salarios',
  },
};

export default function Page() {
  const serviceTitle = 'Reclamaciones de Cantidad y Salarios';
  const description =
    'Defensa técnica para la recuperación de nóminas, finiquitos, horas extra y complementos salariales en Alcalá de Henares y Madrid. 30 años garantizando la justa retribución de su trabajo.';

  const metodo = [
    'Cálculo técnico y auditoría de conceptos: Analizamos nóminas, contratos y convenios colectivos para determinar con exactitud la deuda salarial, incluyendo intereses de demora y conceptos variables.',
    'Estrategia de conciliación y presión: Iniciamos la reclamación mediante papeleta de conciliación ante el SMAC, buscando el reconocimiento de deuda y el pago inmediato para evitar la dilación judicial.',
    'Ejecución y garantía de cobro: En caso de impago judicial, instamos la ejecución de sentencia y gestionamos el recobro efectivo, derivando la responsabilidad si es necesario para asegurar el cobro a través del FOGASA.',
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
                Especialistas en Recuperación de Salarios e Impagos Laborales
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas contamos con más de 30 años de experiencia como{' '}
                  <strong>
                    abogados especialistas en reclamaciones de cantidad y salarios en Alcalá de Henares
                  </strong>
                  . El salario tiene carácter alimenticio y su impago requiere una respuesta legal inmediata y
                  contundente para evitar que los derechos del trabajador prescriban.
                </p>
                <p>
                  Gestionamos con éxito la{' '}
                  <strong>
                    reclamación de nóminas impagadas, diferencias salariales por convenio, impago de finiquitos,
                    horas extraordinarias y conceptos no abonados tras la extinción contractual
                  </strong>
                  . Nuestro enfoque se centra en la obtención del principal más el 10% de interés por mora,
                  actuando con solvencia ante el SMAC y los Juzgados de lo Social, así como en la tramitación ante
                  el FOGASA en casos de insolvencia empresarial, garantizando que el cliente perciba las
                  cantidades que legítimamente le corresponden.
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

