import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Abogados Contratos y Reclamaciones en Alcalá de Henares | LN Grupo Veritas',
  description:
    'Especialistas en redacción de contratos, reclamaciones de cantidad e incumplimientos contractuales en Alcalá de Henares y Madrid. Más de 30 años de experiencia legal.',
  alternates: {
    canonical: 'https://lngrupoveritas.es/servicios/juridico/contratos-y-reclamaciones',
  },
};

export default function Page() {
  const serviceTitle = 'Contratos y Reclamaciones';
  const description =
    'Especialistas en redacción de contratos, reclamaciones de cantidad e incumplimientos contractuales en Alcalá de Henares y Madrid. Más de 30 años de experiencia legal.';

  const metodo = [
    'Analizamos el contrato (o la relación jurídica) con enfoque preventivo: riesgos, obligaciones, garantías y pruebas disponibles.',
    'Definimos una estrategia clara: negociación, requerimiento fehaciente o vía judicial, siempre optimizando tiempos y costes.',
    'Redactamos documentación con precisión técnica (cláusulas, comunicaciones, burofax, demanda) y preparamos el expediente probatorio.',
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
                Expertos en Redacción de Contratos y Reclamación de Deudas
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas contamos con más de 30 años de experiencia como{' '}
                  <strong>abogados especialistas en contratos y reclamaciones en Alcalá de Henares</strong>. La
                  seguridad jurídica de particulares y empresas depende de una redacción contractual técnica y
                  blindada ante posibles contingencias.
                </p>
                <p>
                  Gestionamos con éxito{' '}
                  <strong>
                    reclamaciones de cantidad, incumplimientos de contrato, resoluciones contractuales y
                    responsabilidad civil
                  </strong>
                  . Nuestro enfoque se centra en la protección de sus intereses, ya sea mediante la negociación
                  extrajudicial o la defensa técnica en procedimientos judiciales, garantizando siempre la máxima
                  solvencia en la defensa de sus derechos.
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

