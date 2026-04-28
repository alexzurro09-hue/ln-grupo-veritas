import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Presentación de Escritos y Seguimiento de Expedientes en Alcalá | LN Grupo Veritas',
  description:
    'Expertos en redacción de alegaciones, presentación de escritos y seguimiento exhaustivo de expedientes administrativos en Alcalá de Henares. 30 años de rigor técnico.',
  alternates: {
    canonical:
      'https://ln-grupo-veritas.vercel.app/servicios/fiscal/presentacion-de-escritos-y-seguimiento-de-expedientes',
  },
};

export default function Page() {
  const serviceTitle = 'Presentación de Escritos y Seguimiento de Expedientes';
  const description =
    'Defensa técnica y control exhaustivo de sus procedimientos ante la Administración Pública en Alcalá de Henares y Madrid. 30 años asegurando que cada alegación cuente.';

  const metodo = [
    'Redacción Técnica Especializada: Elaboramos escritos fundamentados en la normativa vigente y la jurisprudencia más reciente, asegurando que cada argumento técnico esté diseñado para desvirtuar las pretensiones de la administración.',
    'Control Riguroso de Plazos: En el ámbito administrativo, el tiempo es crítico. Implementamos sistemas de alerta temprana para garantizar que ninguna alegación o recurso se presente fuera de término, protegiendo la viabilidad de su defensa.',
    'Seguimiento Proactivo: Realizamos consultas periódicas sobre el estado de sus expedientes, detectando posibles anomalías o silencios administrativos de forma prematura para actuar con la diligencia necesaria ante cada hito del proceso.',
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
                <Link href="/servicios/fiscal" className="hover:text-veritas-red transition-colors">
                  Fiscal
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
                Especialistas en Defensa Administrativa y Control de Procedimientos
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En la relación con la Administración Pública, la forma es tan importante como el fondo. En LN
                  Grupo Veritas sabemos que &apos;lo que no está en el expediente, no existe&apos;. Con más de 30
                  años de experiencia en la <strong>presentación de escritos en Alcalá de Henares</strong>, nos
                  encargamos de que la voz de nuestros clientes sea escuchada con el máximo rigor jurídico,
                  redactando cada alegación con precisión técnica para proteger sus derechos desde el primer
                  momento.
                </p>
                <p>
                  Brindamos un servicio integral de{' '}
                  <strong>
                    redacción de alegaciones, interposición de recursos administrativos y seguimiento permanente de
                    expedientes en curso
                  </strong>
                  . Nuestro valor diferencial reside en la constancia: no solo presentamos el documento, sino que
                  monitorizamos su trazabilidad, impulsamos el procedimiento y mantenemos una interlocución activa
                  con los organismos correspondientes para evitar parálisis injustificadas, garantizando que su
                  expediente avance con todas las garantías legales hasta su resolución definitiva.
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
              Solicitar revisión de expediente
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

