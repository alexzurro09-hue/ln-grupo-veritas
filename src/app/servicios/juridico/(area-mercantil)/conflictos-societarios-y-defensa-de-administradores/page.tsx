import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Abogados Conflictos Societarios y Defensa de Administradores en Alcalá | LN Grupo Veritas',
  description:
    'Especialistas en resolución de pleitos entre socios, impugnación de acuerdos y defensa de administradores en Alcalá de Henares. Más de 30 años protegiendo su patrimonio y empresa.',
  alternates: {
    canonical:
      'https://ln-grupo-veritas.vercel.app/servicios/juridico/conflictos-societarios-y-defensa-de-administradores',
  },
};

export default function Page() {
  const serviceTitle = 'Conflictos Societarios y Defensa de Administradores';
  const description =
    'Resolución técnica de disputas entre socios y protección jurídica integral para órganos de administración en Alcalá de Henares y Madrid. 30 años de firmeza en la defensa de sus intereses corporativos.';

  const metodo = [
    'Realizamos un diagnóstico exhaustivo del conflicto y del riesgo patrimonial, evaluando la validez de los acuerdos sociales y la diligencia en la gestión de los administradores.',
    'Diseñamos una estrategia de defensa o ataque procesal orientada al resultado: desde la mediación para la salida de socios hasta el litigio agresivo para proteger la continuidad de la empresa.',
    'Implementamos medidas cautelares y blindajes preventivos que aseguren la posición de nuestros clientes durante el tiempo que dure el procedimiento judicial o la negociación.',
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
                Especialistas en Litigiosidad Societaria y Responsabilidad de Órganos de Gobierno
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas contamos con una trayectoria de más de tres décadas como{' '}
                  <strong>abogados especialistas en conflictos societarios en Alcalá de Henares</strong>. Las
                  desavenencias entre socios o las acciones contra el órgano de administración pueden paralizar una
                  empresa y poner en riesgo el patrimonio personal de sus gestores; nuestra misión es aportar una
                  solución técnica y estratégica que devuelva la estabilidad a la organización.
                </p>
                <p>
                  Gestionamos con máxima solvencia procedimientos de{' '}
                  <strong>
                    impugnación de acuerdos sociales, ejercicio de la acción social e individual de responsabilidad
                    contra administradores y procesos de disolución judicial de sociedades
                  </strong>
                  . Nuestro enfoque combina el rigor procesal con una capacidad de negociación avanzada, buscando
                  el desbloqueo de situaciones de parálisis y la defensa técnica más sólida frente a reclamaciones
                  de terceros o socios minoritarios, siempre bajo el amparo de la Ley de Sociedades de Capital.
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

