import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gestión de Tributos Locales e Impuestos Municipales en Alcalá | LN Grupo Veritas',
  description:
    'Especialistas en gestión de IBI, Plusvalía municipal e IAE en Alcalá de Henares. Revisión de valores y reclamación de ingresos indebidos. 30 años de éxito.',
  alternates: {
    canonical: 'https://lngrupoveritas.es/servicios/fiscal/gestion-de-tributos-locales',
  },
};

export default function Page() {
  const serviceTitle = 'Gestión de Tributos Locales (IBI, Plusvalías)';
  const description =
    'Optimización de la carga fiscal municipal y defensa técnica ante liquidaciones de ayuntamientos en Alcalá de Henares y Madrid. 30 años de rigor técnico recuperando su dinero.';

  const metodo = [
    'Auditoría de Valores Catastrales: Analizamos la ponencia de valores de su municipio para detectar discrepancias entre la realidad física de su inmueble y la base imponible del IBI, tramitando las subsanaciones catastrales necesarias.',
    'Estrategia de Reclamación de Plusvalía: Evaluamos la viabilidad de recuperar el impuesto pagado por transmisiones, herencias o donaciones, aplicando la jurisprudencia más reciente para maximizar el éxito del recurso ante el ayuntamiento.',
    'Planificación de Tributos de Actividad: Asesoramos a empresas en la correcta categorización del IAE y otros arbitrios municipales (tasas de vados, basuras), asegurando que los beneficios y exenciones fiscales locales se apliquen de forma automática.',
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
                Expertos en Auditoría y Reclamación de Impuestos Municipales
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas sabemos que la fiscalidad local supone un coste fijo significativo para
                  empresas y particulares en Alcalá de Henares. Con más de 30 años de experiencia como{' '}
                  <strong>especialistas en tributos locales</strong>, no nos limitamos a la mera gestión del pago;
                  auditamos la base imponible y el valor catastral de sus inmuebles para asegurar que no pague ni
                  un euro por encima de lo que legalmente corresponde.
                </p>
                <p>
                  Gestionamos de forma exhaustiva la{' '}
                  <strong>
                    revisión del Impuesto sobre Bienes Inmuebles (IBI), el Impuesto sobre Actividades Económicas
                    (IAE) y, muy especialmente, la reclamación de la Plusvalía Municipal
                  </strong>
                  . Ante los constantes cambios legislativos y jurisprudenciales, nuestro enfoque técnico permite
                  identificar errores en la valoración del suelo o la ausencia de incremento de valor real,
                  interponiendo los recursos necesarios para la devolución de ingresos indebidos y la optimización
                  de sus costes fiscales recurrentes con la administración local.
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
              Solicitar revisión de tributos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

