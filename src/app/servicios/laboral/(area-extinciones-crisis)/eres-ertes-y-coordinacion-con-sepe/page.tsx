import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gestión de EREs, ERTEs y Coordinación con SEPE | LN Grupo Veritas',
  description:
    'Especialistas en la tramitación de expedientes de regulación de empleo (ERE y ERTE) y coordinación con el SEPE en Alcalá de Henares. 30 años de solvencia técnica.',
  alternates: {
    canonical: 'https://lngrupoveritas.es/servicios/laboral/eres-ertes-y-coordinacion-con-sepe',
  },
};

export default function Page() {
  const serviceTitle = 'EREs / ERTEs y Coordinación con SEPE';
  const description =
    'Gestión integral de medidas de flexibilidad y expedientes de regulación para empresas en Alcalá de Henares y Madrid. 30 años de experiencia en la gestión de crisis colectivas.';

  const metodo = [
    'Planificación Estratégica y Memoria Técnica: Elaboramos la documentación económica y organizativa que sustenta la causa del expediente, garantizando que el planteamiento inicial sea sólido frente a una posible revisión judicial o administrativa.',
    'Coordinación Directa con el SEPE: Gestionamos la transmisión de datos a través de la plataforma telemática del SEPE (ficheros XML, periodos de actividad), asegurando que el flujo de información sea constante y libre de errores que bloqueen el pago de prestaciones.',
    'Gestión del Periodo de Consultas: Asesoramos a la dirección en la negociación con los representantes de los trabajadores o sindicatos, buscando acuerdos que validen el proceso y reduzcan la litigiosidad posterior ante el Tribunal Superior de Justicia.',
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
                Especialistas en Reestructuraciones Colectivas y Medidas de Flexibilidad Laboral
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas entendemos que los procedimientos colectivos requieren una combinación de rigor jurídico y sensibilidad
                  social. Con más de 30 años de experiencia en la <strong>gestión de EREs y ERTEs en Alcalá de Henares</strong>, proporcionamos
                  a la empresa el soporte necesario para implementar medidas de ajuste —ya sean definitivas o temporales— con la máxima
                  seguridad jurídica y minimizando el impacto en la paz social de la organización.
                </p>
                <p>
                  Gestionamos de forma exhaustiva todo el ciclo del expediente: desde la{' '}
                  <strong>
                    preparación de la memoria justificativa y la apertura del periodo de consultas, hasta la comunicación final a la Autoridad
                    Laboral y la coordinación técnica con el SEPE
                  </strong>
                  . Nos encargamos de la transmisión de los ficheros de actividad y periodos de suspensión, asegurando que los trabajadores
                  accedan a sus prestaciones sin retrasos y que la empresa cumpla con todas las obligaciones de cotización y exoneraciones
                  vinculadas, blindando el proceso ante futuras impugnaciones.
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
              Solicitar estudio de viabilidad
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

