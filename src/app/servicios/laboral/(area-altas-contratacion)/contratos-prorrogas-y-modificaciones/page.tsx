import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contratos, Prórrogas y Modificaciones en Alcalá | LN Grupo Veritas',
  description:
    'Especialistas en redacción de contratos de trabajo, gestión de prórrogas y modificaciones sustanciales de condiciones en Alcalá de Henares. 30 años de rigor legal.',
  alternates: {
    canonical: 'https://ln-grupo-veritas.vercel.app/servicios/laboral/contratos-prorrogas-y-modificaciones',
  },
};

export default function Page() {
  const serviceTitle = 'Contratos, Prórrogas y Modificaciones';
  const description =
    'Arquitectura jurídica de la relación laboral: redacción, seguimiento y adaptación de contratos para empresas en Alcalá de Henares y Madrid. 30 años definiendo reglas claras.';

  const metodo = [
    'Asesoramiento en Modalidades Contractuales: Analizamos las necesidades de su plantilla para recomendar el tipo de contrato que mejor se adapte a la causa de la contratación, optimizando el uso de las figuras legales vigentes.',
    "Cláusulas de Blindaje y Protección: Incorporamos pactos específicos de confidencialidad, no concurrencia, plena dedicación o permanencia, diseñados para proteger el 'know-how' y la estabilidad de su empresa.",
    'Control Proactivo de Vencimientos: Realizamos un seguimiento exhaustivo de las fechas de finalización y periodos de prueba, avisando con antelación suficiente para gestionar prórrogas o extinciones de forma legal y ordenada.',
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
                Especialistas en Derecho del Trabajo y Estrategia de Contratación
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas entendemos que el contrato de trabajo es el documento fundacional que rige la relación entre empresa y
                  empleado. Con más de 30 años de trayectoria como <strong>expertos en contratación laboral en Alcalá de Henares</strong>, no
                  nos limitamos a la tramitación administrativa; asesoramos en la elección de la modalidad contractual más ventajosa y
                  redactamos cláusulas personalizadas que protejan los intereses legítimos de su negocio.
                </p>
                <p>
                  Gestionamos de forma íntegra la{' '}
                  <strong>
                    elaboración de contratos indefinidos, temporales, de formación o relevo, así como la tramitación de prórrogas y la
                    formalización de modificaciones sustanciales de las condiciones de trabajo
                  </strong>
                  . Nuestro enfoque profesional garantiza que cada anexo, pacto de horas complementarias o cambio en la jornada cumpla
                  estrictamente con el Estatuto de los Trabajadores y el Convenio Colectivo, minimizando el riesgo de futuras reclamaciones
                  judiciales por defectos de forma o fraude de ley en la contratación.
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
              Solicitar revisión de contratos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

