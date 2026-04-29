import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gestión de Tributos y Retenciones Laborales en Alcalá | LN Grupo Veritas',
  description:
    'Especialistas en la gestión de tributos laborales: Modelos 111 y 190, retenciones de IRPF y certificados de trabajadores en Alcalá de Henares.',
  alternates: {
    canonical: 'https://ln-grupo-veritas.vercel.app/servicios/laboral/tributos',
  },
};

export default function Page() {
  const serviceTitle = 'Tributos';
  const description =
    'Gestión y liquidación de las obligaciones tributarias derivadas de la actividad laboral para empresas en Alcalá de Henares y Madrid. 30 años de rigor en la conciliación con Hacienda.';

  const metodo = [
    'Cálculo Dinámico de Retenciones: Monitorizamos y ajustamos los tipos de retención de IRPF de su plantilla ante cambios salariales o variaciones en su situación familiar, previniendo regularizaciones bruscas a final de año.',
    'Conciliación Permanente AEAT-TGSS: Verificamos que las bases de cotización y las bases de retención mantengan la coherencia técnica exigida por los sistemas de cruce de datos de la administración.',
    'Emisión de Certificados y Soporte: Facilitamos a la empresa y a sus trabajadores los certificados de haberes y retenciones anuales, resolviendo cualquier consulta técnica sobre el impacto fiscal de sus remuneraciones.',
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
                <Link href="/servicios/laboral" className="hover:text-veritas-red transition-colors">
                  Laboral
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
                Especialistas en Fiscalidad Laboral y Retenciones de IRPF
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas entendemos que la gestión laboral y la fiscal caminan de la mano. Con más de 30 años de trayectoria en
                  la <strong>gestión de tributos laborales en Alcalá de Henares</strong>, nos encargamos de que las retenciones de IRPF
                  aplicadas en las nóminas de sus empleados y en las facturas de profesionales cumplan estrictamente con la normativa de la
                  AEAT, evitando errores que puedan derivar en sanciones o requerimientos.
                </p>
                <p>
                  Gestionamos de forma íntegra la <strong>presentación periódica de los Modelos 111 y el resumen anual Modelo 190</strong>,
                  así como la emisión de los certificados de retenciones necesarios para que sus trabajadores cumplan con sus obligaciones
                  personales. Nuestro enfoque garantiza una conciliación perfecta entre los datos de Seguridad Social y Hacienda, vigilando la
                  correcta aplicación de los tipos de retención según las circunstancias personales de cada empleado y las actualizaciones
                  legislativas anuales.
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
              Solicitar información tributaria
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

