import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Expertos en IVA y Regímenes Especiales en Alcalá | LN Grupo Veritas',
  description:
    'Especialistas en gestión de IVA, operaciones intracomunitarias y regímenes especiales para empresas en Alcalá de Henares. Más de 30 años de rigor tributario.',
  alternates: {
    canonical: 'https://lngrupoveritas.es/servicios/fiscal/iva-y-regimenes-especiales',
  },
};

export default function Page() {
  const serviceTitle = 'IVA y Regímenes Especiales';
  const description =
    'Gestión técnica de la tributación indirecta y operativa internacional para empresas y profesionales en Alcalá de Henares y Madrid. 30 años garantizando la máxima seguridad en sus transacciones.';

  const metodo = [
    'Auditoría de Facturación: Revisamos sistemáticamente los requisitos formales de sus facturas emitidas y recibidas para garantizar el derecho a la deducción y prevenir contingencias en futuras comprobaciones.',
    'Control de Operativa Exterior: Asesoramos en la correcta aplicación de las reglas de localización y las exenciones en el comercio internacional, gestionando el alta en el Registro de Operadores Intracomunitarios (ROI).',
    'Gestión de Regímenes Especiales: Analizamos la viabilidad y el impacto de los regímenes especiales para su modelo de negocio, encargándonos de las obligaciones censales y el seguimiento técnico específico que estos requieren.',
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
                Especialistas en Tributación Indirecta y Operativa Nacional e Internacional
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas contamos con una trayectoria de más de 30 años como{' '}
                  <strong>especialistas en la gestión del IVA en Alcalá de Henares</strong>. La fiscalidad
                  indirecta es uno de los ámbitos de mayor complejidad técnica y riesgo administrativo; por ello,
                  nuestro equipo se enfoca en asegurar que cada operación, ya sea local o transfronteriza, cumpla
                  estrictamente con la normativa vigente para evitar sanciones y optimizar la recuperación del
                  impuesto.
                </p>
                <p>
                  Gestionamos con solvencia{' '}
                  <strong>
                    operaciones intracomunitarias (ROI/VIES), exportaciones e importaciones, así como los regímenes
                    especiales de IVA (Criterio de Caja, Agencias de Viajes, Bienes Usados o Grupos de Entidades)
                  </strong>
                  . Nuestro enfoque profesional garantiza una correcta liquidación de los modelos periódicos
                  (303, 390) y de las declaraciones informativas de operaciones con terceros, prestando especial
                  atención a la deducibilidad de las cuotas soportadas y a la gestión estratégica de las
                  devoluciones de IVA ante la AEAT.
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
              Solicitar asesoría técnica
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

