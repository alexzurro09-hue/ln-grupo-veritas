import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Seguimiento de Bajas, Plazos y Requerimientos | LN Grupo Veritas',
  description:
    'Control exhaustivo de partes de baja, plazos de Seguridad Social y respuesta a requerimientos en Alcalá de Henares. Evite sanciones por descuidos. 30 años de rigor.',
  alternates: {
    canonical: 'https://ln-grupo-veritas.vercel.app/servicios/laboral/seguimiento-de-partes-plazos-y-requerimientos',
  },
};

export default function Page() {
  const serviceTitle = 'Seguimiento de Partes, Plazos y Requerimientos';
  const description =
    'Vigilancia proactiva y gestión técnica de la documentación laboral para empresas en Alcalá de Henares y Madrid. 30 años garantizando que ningún plazo quede al azar.';

  const metodo = [
    'Sistema de Alerta Temprana: Implementamos un control de plazos riguroso para la recepción de partes médicos, avisando a la empresa y al trabajador de forma anticipada para garantizar la entrega en tiempo y forma legal.',
    'Defensa ante Requerimientos del INSS: Elaboramos las contestaciones técnicas necesarias ante solicitudes de datos o revisiones de procesos de incapacidad, fundamentando la posición de la empresa con rigor documental.',
    'Conciliación de Datos y Ficheros FIE/FRI: Cruzamos diariamente la información de los ficheros oficiales de la Seguridad Social con la realidad de su plantilla, detectando altas o bajas médicas comunicadas de oficio para ajustar la nómina de inmediato.',
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
                Especialistas en Control Administrativo y Gestión de Requerimientos Laborales
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas sabemos que la burocracia laboral no admite descuidos. Con más de 30 años de trayectoria en el{' '}
                  <strong>seguimiento de procesos de IT en Alcalá de Henares</strong>, actuamos como el departamento de control de su empresa,
                  monitorizando cada hito documental de la relación laboral para asegurar el cumplimiento estricto de las obligaciones de
                  información ante la Seguridad Social y el INSS.
                </p>
                <p>
                  Gestionamos de forma íntegra el{' '}
                  <strong>
                    control de partes de confirmación de baja, la vigilancia de los plazos de agotamiento de la IT y la respuesta técnica a
                    requerimientos de información de la inspección médica o la mutua
                  </strong>
                  . Nuestro enfoque preventivo identifica de forma prematura posibles descuadres o faltas de documentación, actuando
                  proactivamente para subsanarlos antes de que generen una incidencia administrativa o la paralización de prestaciones para
                  sus trabajadores.
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
              Solicitar auditoría de plazos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

