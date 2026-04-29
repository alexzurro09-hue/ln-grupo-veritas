import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Preparación y Revisión de Soportes Contables | LN Grupo Veritas',
  description:
    'Auditoría técnica y revisión de soportes contables y mercantiles ante inspecciones de Hacienda en Alcalá de Henares. Blindaje documental experto.',
  alternates: {
    canonical:
      'https://ln-grupo-veritas.vercel.app/servicios/contable/preparacion-y-revision-de-soportes-contables-y-mercantiles',
  },
};

export default function Page() {
  const serviceTitle = 'Preparación y Revisión de Soportes Contables y Mercantiles';
  const description =
    'Blindaje técnico de la documentación de su empresa para una defensa sólida ante la AEAT en Alcalá de Henares y Madrid. 30 años de rigor probatorio.';

  const metodo = [
    'Auditoría de Calidad Formal: Verificamos que cada factura y soporte cumpla estrictamente con la normativa de facturación (Art. 6 y 7 RD 1619/2012), evitando que errores de forma invaliden la deducción de impuestos.',
    'Correlación de Realidad Económica: Aseguramos que exista una trazabilidad lógica entre el gasto realizado y la generación de ingresos del negocio, preparando los contratos y evidencias necesarias para justificar la necesidad del gasto ante la AEAT.',
    'Digitalización y Organización de Evidencias: Implementamos sistemas de archivo que permiten una localización inmediata de cualquier soporte, facilitando una respuesta rápida y profesional ante requerimientos de información perentorios.',
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
                <Link href="/servicios/contable" className="hover:text-veritas-red transition-colors">
                  Contable
                </Link>
              </li>
              <li className="opacity-60">›</li>
              <li className="text-veritas-green">{serviceTitle}</li>
            </ol>
          </nav>

          <h1 className="mt-2 font-serif text-3xl md:text-4xl font-bold tracking-tight text-veritas-green">{serviceTitle}</h1>
          <p className="mt-3 text-[14px] md:text-[15px] leading-relaxed text-[#3b3b3b] font-sans max-w-3xl">{description}</p>
        </div>
      </div>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-14">
          <div className="max-w-3xl">
            <div className="mb-10">
              <h2 className="font-serif text-[18px] md:text-[20px] font-bold text-veritas-green">
                Especialistas en Gobernanza de Evidencias y Defensa Documental
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas sabemos que, ante una inspección de Hacienda, la contabilidad es secundaria; lo que realmente importa es el
                  soporte que la sustenta. Con más de 30 años de experiencia en la{' '}
                  <strong>defensa de empresas en Alcalá de Henares</strong>, actuamos como un filtro de seguridad crítico, revisando no solo la
                  existencia de la documentación, sino su calidad formal y su capacidad probatoria para resistir cualquier proceso de
                  comprobación masiva o inspección presencial.
                </p>
                <p>
                  Gestionamos la <strong>revisión exhaustiva de facturas, contratos, extractos y albaranes</strong>, asegurando que cumplan con
                  todos los requisitos reglamentarios de facturación y, lo más importante, que acrediten la realidad económica de cada
                  operación. Nuestro enfoque como &apos;Socio Defensor&apos; consiste en preparar su documentación mercantil para que sea un
                  escudo impenetrable, garantizando la deducibilidad de sus gastos y eliminando las discrepancias que suelen ser el origen de
                  sanciones administrativas.
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
              Blindar mi documentación
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

