import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Abogados Penalistas en Alcalá de Henares | Defensa y Acusación | LN Grupo Veritas',
  description:
    'Especialistas en defensa penal y acusación particular en Alcalá de Henares y Madrid. Asistencia al detenido y procesos judiciales con más de 30 años de experiencia.',
  alternates: {
    canonical: 'https://ln-grupo-veritas.vercel.app/servicios/juridico/defensa-y-acusacion-particular',
  },
};

export default function Page() {
  const serviceTitle = 'Defensa y Acusación Particular';
  const description =
    'Protección integral de sus derechos y libertades en procedimientos penales en Alcalá de Henares y Madrid. Más de 30 años de rigor y compromiso en el ejercicio del derecho penal.';

  const metodo = [
    'Analizamos minuciosamente el atestado y las pruebas de cargo, identificando vulneraciones de derechos o debilidades en la acusación para construir una defensa sólida desde el primer minuto.',
    'Diseñamos una estrategia procesal personalizada, ya sea buscando la libre absolución, el archivo de las actuaciones o la máxima reparación del daño en el caso de la acusación particular.',
    'Realizamos un acompañamiento constante en todas las fases del procedimiento: declaraciones, fase de instrucción, vista oral y recursos ante instancias superiores, con absoluta transparencia y rigor.',
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
                Especialistas en Derecho Penal y Asistencia Jurídica Inmediata
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas contamos con una trayectoria de más de 30 años como{' '}
                  <strong>abogados penalistas en Alcalá de Henares</strong>. Entendemos que enfrentarse a un proceso
                  penal es una de las situaciones más complejas para cualquier persona; por ello, ofrecemos una
                  respuesta técnica inmediata, firme y discreta para garantizar la mejor defensa de sus intereses.
                </p>
                <p>
                  Ejercemos con solvencia tanto la{' '}
                  <strong>
                    defensa penal como la acusación particular en todo tipo de delitos: contra las personas, el
                    patrimonio, seguridad vial y delitos económicos
                  </strong>
                  . Nuestro enfoque abarca desde la asistencia al detenido en dependencias policiales hasta la
                  representación técnica en Juicios Ordinarios y ante el Tribunal del Jurado, asegurando en cada
                  etapa la salvaguarda de sus derechos fundamentales y una estrategia procesal orientada a la
                  obtención del resultado más favorable.
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

