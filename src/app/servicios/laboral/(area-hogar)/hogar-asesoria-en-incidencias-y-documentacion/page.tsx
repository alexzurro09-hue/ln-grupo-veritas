import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Asesoría en Incidencias y Despidos de Empleados de Hogar | LN Grupo Veritas',
  description:
    'Especialistas en la resolución de incidencias, bajas y despidos (desistimiento) de empleados de hogar en Alcalá de Henares. 30 años protegiendo su hogar.',
  alternates: {
    canonical: 'https://ln-grupo-veritas.vercel.app/servicios/laboral/hogar-asesoria-en-incidencias-y-documentacion',
  },
};

export default function Page() {
  const serviceTitle = 'Asesoría en Incidencias y Documentación';
  const description =
    'Resolución técnica de contingencias y gestión de extinciones de contrato para particulares en Alcalá de Henares y Madrid. 30 años de soporte legal en el ámbito doméstico.';

  const metodo = [
    'Gestión de Bajas y Sustituciones: Le asesoramos sobre los pasos a seguir cuando su empleado de hogar causa baja por enfermedad o accidente, gestionando los plazos de cotización y los trámites para contratar una sustitución legal inmediata.',
    'Desistimiento y Cese de Contrato: Gestionamos la finalización del contrato por desistimiento del empleador, redactando la comunicación oficial y calculando la indemnización legal obligatoria para garantizar un cierre de relación sin conflictos.',
    "Custodia de Documentación Legal: Le ayudamos a mantener un archivo ordenado de contratos, justificantes de pago y comunicaciones oficiales, proporcionándole la tranquilidad de tener 'la casa en orden' ante cualquier inspección o requerimiento.",
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
                Su Soporte Legal ante Bajas, Conflictos y Cierres de Contrato
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas sabemos que las incidencias laborales en el hogar requieren una respuesta rápida y una sensibilidad
                  especial. Con más de 30 años de trayectoria en la{' '}
                  <strong>gestión de conflictos domésticos en Alcalá de Henares</strong>, actuamos como su consultor de cabecera para resolver
                  cualquier imprevisto, desde la gestión de una baja médica hasta el asesoramiento en situaciones de crisis de confianza.
                </p>
                <p>
                  Gestionamos de forma íntegra la{' '}
                  <strong>
                    comunicación de bajas por incapacidad temporal (IT) ante la Seguridad Social, la tramitación de partes de accidente y el
                    asesoramiento en el cese de la relación laboral (desistimiento o despido)
                  </strong>
                  . Elaboramos las cartas de despido y los finiquitos correspondientes, asegurando que el proceso cumpla estrictamente con la
                  normativa específica del servicio doméstico y protegiendo a su familia frente a posibles reclamaciones judiciales o
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
              Solicitar asesoramiento urgente
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

