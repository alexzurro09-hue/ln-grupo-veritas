import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Planificación Fiscal Estratégica en Alcalá de Henares | LN Grupo Veritas',
  description:
    'Optimice su carga tributaria con una planificación fiscal proactiva y legal. Especialistas en consultoría estratégica para empresas en Alcalá de Henares. Más de 30 años de experiencia.',
  alternates: {
    canonical: 'https://ln-grupo-veritas.vercel.app/servicios/fiscal/planificacion-fiscal-estrategica',
  },
};

export default function Page() {
  const serviceTitle = 'Planificación Fiscal Estratégica';
  const description =
    'Consultoría tributaria avanzada orientada al ahorro fiscal y la seguridad jurídica de su empresa en Alcalá de Henares y Madrid. 30 años anticipándonos para proteger su patrimonio.';

  const metodo = [
    'Diagnóstico y Auditoría Inicial: Analizamos el histórico y la situación actual de su empresa para identificar ineficiencias y oportunidades de ahorro fiscal no explotadas.',
    'Diseño de Escenarios: Elaboramos proyecciones tributarias a medida, evaluando el impacto de diferentes decisiones estratégicas antes de su ejecución para elegir la opción fiscalmente más ventajosa.',
    'Seguimiento y Control de Riesgos: Monitorizamos constantemente los cambios normativos y la jurisprudencia para ajustar su planificación en tiempo real, asegurando el cumplimiento y la tranquilidad frente a la AEAT.',
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
                Expertos en Optimización Fiscal y Consultoría Tributaria Proactiva
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas entendemos que la eficiencia fiscal no se logra en el momento de presentar el
                  impuesto, sino mediante un análisis previo y estratégico de la actividad económica. Con más de
                  30 años de experiencia como{' '}
                  <strong>especialistas en planificación fiscal estratégica en Alcalá de Henares</strong>,
                  ayudamos a empresas y particulares a diseñar estructuras tributarias que minimicen la carga
                  impositiva siempre dentro del más estricto marco legal.
                </p>
                <p>
                  Abordamos la{' '}
                  <strong>
                    planificación fiscal integral mediante el análisis de incentivos, deducciones por inversión,
                    optimización de retribuciones y estructuras societarias eficientes
                  </strong>
                  . Nuestro enfoque se aleja de la gestión reactiva; estudiamos su escenario financiero con
                  antelación para implementar medidas que generen un ahorro real y recurrente, garantizando que
                  cada decisión estratégica esté blindada ante posibles interpretaciones de la Administración
                  Tributaria.
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
              Solicitar consultoría estratégica
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

