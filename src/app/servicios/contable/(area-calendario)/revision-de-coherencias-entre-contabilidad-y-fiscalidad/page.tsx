import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Revisión de Coherencia Contable y Fiscal | LN Grupo Veritas',
  description:
    'Especialistas en la revisión de coherencias entre contabilidad y fiscalidad en Alcalá de Henares. Evite inspecciones por descuadres entre sus libros e impuestos.',
  alternates: {
    canonical:
      'https://ln-grupo-veritas.vercel.app/servicios/contable/revision-de-coherencias-entre-contabilidad-y-fiscalidad',
  },
};

export default function Page() {
  const serviceTitle = 'Revisión de Coherencias entre Contabilidad y Fiscalidad';
  const description =
    'Auditoría técnica de alineación entre estados financieros y declaraciones tributarias para empresas en Alcalá de Henares y Madrid. 30 años de precisión y blindaje fiscal.';

  const metodo = [
    'Control de Ajustes Extracontables: Identificamos y documentamos las diferencias entre la normativa contable (PGC) y la fiscal (LIS), asegurando que los gastos no deducibles o las amortizaciones aceleradas estén correctamente tratados para evitar sanciones.',
    'Validación de Modelos Anuales (390, 190, 180): Realizamos un cruce sistemático de los modelos informativos anuales con sus registros contables, detectando discrepancias antes de su presentación definitiva ante la Agencia Tributaria.',
    "Detección Previa de Alertas de Hacienda: Aplicamos los mismos filtros de coherencia que utiliza la AEAT en sus procesos de comprobación masiva, permitiendo corregir errores de registro o clasificación de forma proactiva y segura.",
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
                Especialistas en Conciliación Fiscal y Control de Descuadres
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas sabemos que la mayor causa de requerimientos de Hacienda no son los errores graves, sino los descuadres de
                  información. Con más de 30 años de experiencia en la{' '}
                  <strong>auditoría contable-fiscal en Alcalá de Henares</strong>, actuamos como el supervisor crítico de su información
                  financiera, asegurando que lo que reflejan sus libros diarios sea 100% coherente con lo declarado en sus modelos de IVA, IRPF
                  e Impuesto de Sociedades.
                </p>
                <p>
                  Gestionamos de forma exhaustiva la{' '}
                  <strong>
                    conciliación entre el resultado contable y la base imponible fiscal, analizando ajustes permanentes y temporales
                  </strong>
                  . Nuestro enfoque se centra en la verificación cruzada de datos: nos aseguramos de que las cifras de ventas del Modelo 390
                  coincidan con su cifra de negocios y que las retenciones soportadas estén perfectamente cuadradas con sus mayores contables.
                  Este proceso de &apos;doble check&apos; es el que permite a nuestros clientes afrontar el cierre de ejercicio con la seguridad
                  de que su contabilidad es un espejo fiel de sus obligaciones tributarias.
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
              Solicitar revisión técnica
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

