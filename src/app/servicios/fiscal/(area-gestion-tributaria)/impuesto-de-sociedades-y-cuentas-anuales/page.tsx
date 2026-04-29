import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Impuesto de Sociedades y Cuentas Anuales en Alcalá | LN Grupo Veritas',
  description:
    'Especialistas en la liquidación del Impuesto de Sociedades y elaboración de Cuentas Anuales en Alcalá de Henares. 30 años garantizando rigor contable y fiscal.',
  alternates: {
    canonical:
      'https://lngrupoveritas.es/servicios/fiscal/impuesto-de-sociedades-y-cuentas-anuales',
  },
};

export default function Page() {
  const serviceTitle = 'Impuesto de Sociedades y Cuentas Anuales';
  const description =
    'Gestión experta del cierre contable y cumplimiento tributario para sociedades mercantiles en Alcalá de Henares y Madrid. Tres décadas de precisión en la rendición de cuentas.';

  const metodo = [
    'Revisión y Conciliación Contable: Analizamos minuciosamente el libro diario y mayor para asegurar que cada asiento contable cumpla con el Plan General Contable antes de proceder al cierre fiscal.',
    'Ajustes Extracontables y Deducciones: Identificamos y aplicamos con rigor los ajustes necesarios entre el resultado contable y fiscal, maximizando las bonificaciones por inversión, creación de empleo o reserva de capitalización.',
    'Transparencia y Seguridad Mercantil: Elaboramos memorias detalladas y gestionamos el depósito telemático de cuentas, garantizando que la información pública de su empresa sea impecable ante terceros y entidades financieras.',
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
                Especialistas en Cierre Fiscal y Depósito de Cuentas Mercantiles
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas contamos con más de 30 años de trayectoria como{' '}
                  <strong>asesores especialistas en el Impuesto de Sociedades en Alcalá de Henares</strong>.
                  Entendemos que la correcta liquidación de este impuesto es el resultado de una contabilidad
                  técnica y rigurosa, fundamental para proyectar la solvencia de su empresa y cumplir con las
                  obligaciones tributarias con total seguridad.
                </p>
                <p>
                  Gestionamos de forma integral la{' '}
                  <strong>
                    elaboración de los balances de situación, cuentas de pérdidas y ganancias, memoria y el
                    depósito de Cuentas Anuales en el Registro Mercantil
                  </strong>
                  . Nuestro enfoque se centra en la aplicación técnica de la normativa contable y fiscal,
                  asegurando que la base imponible del impuesto refleje la realidad económica de la sociedad y
                  aprovechando todas las deducciones y beneficios fiscales vigentes para optimizar el resultado
                  del ejercicio.
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
              Solicitar presupuesto de gestión
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

