import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Abogados Reclamación de Cantidad en Alcalá de Henares | LN Grupo Veritas',
  description:
    'Especialistas en reclamación de deudas, impagados y procedimientos declarativos en Alcalá de Henares y Madrid. Más de 30 años recuperando su solvencia.',
  alternates: {
    canonical: 'https://ln-grupo-veritas.vercel.app/servicios/juridico/reclamacion-de-cantidad',
  },
};

export default function Page() {
  const serviceTitle = 'Reclamación de Cantidad y Procedimientos Declarativos';
  const description =
    'Expertos en recuperación de deudas, cobro de impagados y defensa en litigios civiles en Alcalá de Henares y Madrid. Más de 30 años de rigor jurídico al servicio de su liquidez.';

  const metodo = [
    'Evaluamos la viabilidad del recobro y la solvencia del deudor antes de iniciar acciones, evitando costes innecesarios y definiendo la vía procesal más efectiva.',
    'Diseñamos una estrategia de reclamación escalonada: desde el requerimiento fehaciente (burofax) que interrumpa la prescripción hasta la demanda judicial inmediata.',
    'Ejecutamos la fase judicial y, lo más importante, la fase de ejecución de sentencia para asegurar el embargo de bienes y el cobro efectivo de las cantidades adeudadas.',
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
                Especialistas en Recuperación de Deudas y Litigiosidad Civil
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas acumulamos más de 30 años de experiencia como{' '}
                  <strong>abogados especialistas en reclamación de cantidad en Alcalá de Henares</strong>. Sabemos
                  que un impago es una carga para su economía o empresa, por ello actuamos con la diligencia y
                  firmeza necesarias para recuperar sus activos en el menor tiempo posible.
                </p>
                <p>
                  Gestionamos con solvencia técnica{' '}
                  <strong>
                    juicios monitorios, juicios verbales y juicios ordinarios para la reclamación de deudas,
                    facturas impagadas, préstamos y daños y perjuicios
                  </strong>
                  . Nuestro enfoque combina la negociación extrajudicial estratégica con una defensa técnica
                  implacable en los tribunales, asegurando que cada procedimiento declarativo se ejecute con la
                  máxima precisión probatoria para garantizar el éxito de su pretensión.
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

