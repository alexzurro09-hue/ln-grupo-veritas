import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Abogados Arrendamientos y Propiedad Horizontal en Alcalá de Henares | LN Grupo Veritas',
  description:
    'Especialistas en desahucios, gestión de contratos de alquiler y conflictos en comunidades de vecinos en Alcalá de Henares y Madrid. Más de 30 años de experiencia.',
  alternates: {
    canonical:
      'https://ln-grupo-veritas.vercel.app/servicios/juridico/arrendamientos-y-propiedad-horizontal',
  },
};

export default function Page() {
  const serviceTitle = 'Arrendamientos y Propiedad Horizontal';
  const description =
    'Especialistas en gestión de alquileres, desahucios y conflictos en comunidades de propietarios en Alcalá de Henares y Madrid. Más de 30 años de experiencia legal.';

  const metodo = [
    'Analizamos el escenario legal (contrato de alquiler o estatutos comunitarios) con enfoque preventivo: riesgos, solvencia y viabilidad de la reclamación.',
    'Definimos una estrategia clara: mediación, requerimiento fehaciente o acción judicial inmediata (especialmente en casos de desahucio), optimizando los plazos legales.',
    'Redactamos y tramitamos toda la documentación necesaria (burofaxes, demandas de desahucio, actas y comunicaciones) con estricto rigor procesal.',
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
                Expertos en Derecho Inmobiliario y Gestión de Comunidades
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas acumulamos más de tres décadas de trayectoria como{' '}
                  <strong>
                    abogados especialistas en arrendamientos y propiedad horizontal en Alcalá de Henares
                  </strong>
                  . Brindamos seguridad jurídica tanto a propietarios como a comunidades de vecinos frente a las
                  complejidades de la Ley de Arrendamientos Urbanos y la Ley de Propiedad Horizontal.
                </p>
                <p>
                  Gestionamos con eficacia{' '}
                  <strong>
                    procedimientos de desahucio por falta de pago o precario, reclamación de rentas impagadas,
                    redacción de contratos de alquiler y resolución de conflictos comunitarios
                  </strong>
                  . Nuestra intervención garantiza la defensa técnica necesaria en la impugnación de juntas,
                  reclamación a vecinos morosos y asesoramiento integral en la gestión inmobiliaria, priorizando
                  siempre la vía más rápida y solvente.
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

