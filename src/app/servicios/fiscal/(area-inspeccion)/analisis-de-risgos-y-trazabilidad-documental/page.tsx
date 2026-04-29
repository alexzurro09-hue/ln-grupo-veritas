import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Análisis de Riesgos y Trazabilidad Documental | LN Grupo Veritas',
  description:
    'Blindaje fiscal preventivo. Análisis de riesgos tributarios y auditoría de trazabilidad documental en Alcalá de Henares. Más de 30 años de rigor técnico.',
  alternates: {
    canonical:
      'https://lngrupoveritas.es/servicios/fiscal/analisis-de-risgos-y-trazabilidad-documental',
  },
};

export default function Page() {
  const serviceTitle = 'Análisis de Riesgos y Trazabilidad Documental';
  const description =
    'Auditoría preventiva y blindaje probatorio ante posibles inspecciones de la AEAT en Alcalá de Henares y Madrid. 30 años anticipándonos para proteger su seguridad jurídica.';

  const metodo = [
    'Auditoría de Riesgos Potenciales: Sometemos su contabilidad a un estrés-test similar al de una inspección real, detectando contingencias en IVA, Sociedades o retenciones antes de que la AEAT las localice.',
    'Implementación de Circuitos de Trazabilidad: Diseñamos protocolos de archivo y gestión documental que aseguran que toda la justificación de una operación esté vinculada y sea accesible de forma inmediata.',
    'Validación de la Sustancia Económica: Analizamos la realidad de sus operaciones para dotarlas de la fundamentación económica necesaria, evitando que Hacienda pueda calificarlas como simuladas o carentes de motivo económico válido.',
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
                Especialistas en Prevención Fiscal y Solidez de la Prueba Documental
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas sabemos que la mejor defensa ante una inspección es aquella que se prepara
                  años antes de que esta ocurra. Con más de 30 años de experiencia como{' '}
                  <strong>especialistas en análisis de riesgos fiscales en Alcalá de Henares</strong>, ayudamos a
                  empresas y grandes patrimonios a identificar vulnerabilidades en su operativa contable y fiscal
                  antes de que se conviertan en un problema administrativo.
                </p>
                <p>
                  Nuestro servicio de <strong>trazabilidad documental</strong> garantiza que cada asiento contable
                  esté respaldado por un hilo probatorio indestructible: contratos, flujos de pago, albaranes y
                  correspondencia mercantil. No solo revisamos impuestos; realizamos una ingeniería de la prueba
                  que asegura que la realidad económica de su negocio sea transparente y coherente ante cualquier
                  requerimiento, minimizando drásticamente la capacidad de la Administración para realizar ajustes
                  o proponer sanciones basadas en falta de justificación formal.
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
              Solicitar auditoría de riesgos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

