import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gestión de Accidentes de Trabajo y Sistema DELTA | LN Grupo Veritas',
  description:
    'Especialistas en la comunicación de accidentes de trabajo (DELTA/CoNTA) y coordinación con Mutuas en Alcalá de Henares. Evite sanciones por retrasos. 30 años de experiencia.',
  alternates: {
    canonical: 'https://lngrupoveritas.es/servicios/laboral/accidentes-de-trabajo-y-comunicaciones',
  },
};

export default function Page() {
  const serviceTitle = 'Accidentes de Trabajo y Comunicaciones';
  const description =
    'Gestión experta de la siniestralidad laboral y cumplimiento telemático de obligaciones para empresas en Alcalá de Henares y Madrid. 30 años de respuesta técnica inmediata.';

  const metodo = [
    'Respuesta en Tiempo Real (DELTA): Tramitamos los partes de accidente con baja dentro del plazo de 5 días hábiles, y las relaciones de accidentes sin baja mensualmente, asegurando la trazabilidad absoluta del envío telemático.',
    'Coordinación con Mutuas y Prevención: Actuamos como interlocutores con la Mutua para el seguimiento del proceso curativo y nos coordinamos con su servicio de Prevención de Riesgos (PRL) para asegurar la coherencia entre el parte y el informe de investigación.',
    'Defensa ante Recargos de Prestaciones: Analizamos la causa del accidente para asesorar a la empresa sobre su nivel de cumplimiento normativo, preparando la defensa técnica en caso de que la administración proponga recargos por falta de medidas de seguridad.',
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
                Especialistas en Comunicación de Siniestralidad y Gestión de DELTA
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas sabemos que un accidente de trabajo es una situación de crisis que requiere una respuesta técnica serena
                  y ultra-rápida. Con más de 30 años de trayectoria en la{' '}
                  <strong>gestión de accidentes laborales en Alcalá de Henares</strong>, actuamos como el soporte crítico de la empresa,
                  garantizando que cada incidencia sea comunicada a la autoridad laboral con el máximo rigor y dentro de los estrictos plazos
                  legales para evitar sanciones graves.
                </p>
                <p>
                  Gestionamos de forma íntegra la{' '}
                  <strong>
                    elaboración y transmisión de partes de accidente de trabajo con y sin baja a través del sistema DELTA (estatal) o CoNTA
                    (Cataluña/otros), así como la relación con la Mutua de Accidentes
                  </strong>
                  . Nuestro enfoque profesional se centra en la correcta calificación de la contingencia y la descripción técnica del suceso,
                  asegurando que la empresa cumpla con su deber de información y blindando su posición ante posibles investigaciones de la
                  Inspección de Trabajo o reclamaciones de responsabilidad empresarial.
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
              Comunicar accidente ahora
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

