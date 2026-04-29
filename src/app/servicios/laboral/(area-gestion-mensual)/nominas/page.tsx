import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gestión y Confección de Nóminas en Alcalá | LN Grupo Veritas',
  description:
    'Especialistas en la confección de nóminas, pagas extra y liquidaciones en Alcalá de Henares. 30 años garantizando precisión y puntualidad para su empresa.',
  alternates: {
    canonical: 'https://lngrupoveritas.es/servicios/laboral/nominas',
  },
};

export default function Page() {
  const serviceTitle = 'Nóminas';
  const description =
    'Confección, revisión y control integral del ciclo de salarios para empresas en Alcalá de Henares y Madrid. 30 años de exactitud en la gestión de su capital humano.';

  const metodo = [
    'Personalización por Convenio: Parametrizamos cada estructura salarial según el Convenio Colectivo aplicable, garantizando que cada concepto devengado cumpla estrictamente con las tablas salariales actualizadas.',
    'Control de Incidencias Mensuales: Implementamos un sistema de reporte ágil para capturar variables, absentismos, horas extra y bajas, integrándolos de forma automática para evitar reprocesos y retrasos.',
    'Auditoría de Costes Salariales: Proporcionamos informes detallados de costes por empleado o departamento, permitiendo a la dirección financiera una toma de decisiones informada basada en datos reales y consolidados.',
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
                Especialistas en Gestión Salarial y Cumplimiento Normativo
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas sabemos que la nómina es mucho más que un documento contable; es el reflejo de la relación de
                  confianza entre la empresa y su equipo. Con más de 30 años de experiencia como{' '}
                  <strong>especialistas en gestión de nóminas en Alcalá de Henares</strong>, aportamos el rigor técnico necesario para que
                  cada recibo de salarios sea el fiel reflejo de la normativa vigente y los acuerdos convencionales aplicables.
                </p>
                <p>
                  Gestionamos de forma exhaustiva la{' '}
                  <strong>confección de nóminas mensuales, pagas extraordinarias, liquidaciones de atrasos y procesos de finiquito</strong>.
                  Nuestro servicio incluye el control de variables, complementos, embargos y la correcta aplicación de retenciones de IRPF,
                  asegurando una trazabilidad total que elimina errores administrativos y garantiza que cada empleado reciba su remuneración
                  de forma precisa y puntual.
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
              Solicitar presupuesto de gestión laboral
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

