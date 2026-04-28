import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Presentación de Impuestos y Soporte Documental | LN Grupo Veritas',
  description:
    'Gestión profesional de la presentación de modelos tributarios con soporte documental exhaustivo en Alcalá de Henares. 30 años de rigor contable.',
  alternates: {
    canonical:
      'https://ln-grupo-veritas.vercel.app/servicios/contable/preparacion-y-presentacion-con-soporte-documental',
  },
};

export default function Page() {
  const serviceTitle = 'Preparación y Presentación con Soporte Documental';
  const description =
    'Excelencia técnica en la liquidación de impuestos y blindaje probatorio para empresas en Alcalá de Henares y Madrid. 30 años de cumplimiento sin fisuras.';

  const metodo = [
    'Revisión Previa de Coherencia: Antes de cada presentación, cruzamos los datos de facturación con los movimientos bancarios y el libro diario, detectando posibles omisiones o errores de registro.',
    'Archivo de Evidencias Digitales: Organizamos y custodiamos el soporte documental de cada modelo presentado, facilitando una respuesta inmediata y sólida ante cualquier requerimiento de información de Hacienda.',
    'Cumplimiento Estricto de Plazos: Monitorizamos su calendario fiscal de forma personalizada para garantizar que todas las declaraciones se presenten en tiempo y forma, evitando recargos por extemporaneidad y aprovechando los beneficios de la domiciliación bancaria.',
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
                Especialistas en Liquidación Tributaria y Rigor Documental
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas sabemos que presentar un impuesto es solo la punta del iceberg. Lo que realmente protege a la empresa es
                  el soporte documental que hay debajo. Con más de 30 años de experiencia en la{' '}
                  <strong>presentación de modelos tributarios en Alcalá de Henares</strong>, nuestro enfoque garantiza que cada cifra declarada
                  ante la AEAT esté respaldada por una trazabilidad contable impecable, eliminando el riesgo de discrepancias en futuras
                  revisiones.
                </p>
                <p>
                  Gestionamos de forma íntegra la{' '}
                  <strong>confección y envío telemático de sus liquidaciones (IVA, IRPF, Sociedades, Operaciones Intracomunitarias)</strong>. No
                  nos limitamos a transcribir datos; realizamos una auditoría previa de los soportes —facturas, extractos y contratos— para
                  asegurar que la información sea coherente y cumpla con los requisitos formales de deducibilidad, actuando como un filtro de
                  seguridad antes de que la información llegue a la administración.
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
              Asegurar mis presentaciones
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

