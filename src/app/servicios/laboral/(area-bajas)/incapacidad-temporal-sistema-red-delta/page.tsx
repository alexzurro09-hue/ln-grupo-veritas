import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gestión de Incapacidad Temporal (IT) en Alcalá | LN Grupo Veritas',
  description:
    'Especialistas en la gestión de bajas médicas e incapacidad temporal (IT) a través de Sistema RED y DELTA en Alcalá de Henares. 30 años de control laboral.',
  alternates: {
    canonical: 'https://lngrupoveritas.es/servicios/laboral/incapacidad-temporal-sistema-red-delta',
  },
};

export default function Page() {
  const serviceTitle = 'Incapacidad Temporal (Sistema RED / DELTA)';
  const description =
    'Gestión técnica y seguimiento de bajas médicas para empresas en Alcalá de Henares y Madrid. 30 años de rigor en la comunicación con la Seguridad Social.';

  const metodo = [
    'Control de Plazos y Comunicaciones: Monitorizamos diariamente las notificaciones del INSS y las mutuas, asegurando que cada hito del proceso de IT sea comunicado en tiempo y forma para evitar sanciones administrativas.',
    'Gestión de la Prestación Económica: Supervisamos el cálculo del subsidio de incapacidad temporal y su reflejo en la nómina (pago delegado), asegurando la correcta aplicación de las mejoras de convenio si las hubiera.',
    'Interlocución con Mutuas y Organismos: Actuamos como puente técnico con la Mutua de Accidentes de Trabajo y el INSS, resolviendo incidencias en la recepción de partes y gestionando requerimientos de información de forma proactiva.',
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
                Especialistas en Gestión de IT y Contingencias Laborales
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas entendemos que la gestión de la Incapacidad Temporal (IT) es uno de los puntos de mayor fricción
                  administrativa para las empresas. Con más de 30 años de experiencia como{' '}
                  <strong>especialistas en bajas laborales en Alcalá de Henares</strong>, proporcionamos una gestión integral que asegura que
                  cada parte médico, ya sea por contingencias comunes o profesionales, sea procesado con absoluta exactitud en los sistemas
                  oficiales de la Seguridad Social.
                </p>
                <p>
                  Gestionamos de forma exhaustiva la{' '}
                  <strong>comunicación de partes de baja, confirmación y alta a través del Sistema RED y la plataforma DELTA</strong>.
                  Nuestro enfoque se centra en la vigilancia de los plazos legales y la correcta codificación de las patologías y procesos,
                  garantizando que la empresa cumpla con sus obligaciones de información y que la cotización de los trabajadores en situación
                  de IT sea siempre la correcta, evitando discrepancias en los borradores de seguros sociales.
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
              Solicitar gestión de bajas
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

