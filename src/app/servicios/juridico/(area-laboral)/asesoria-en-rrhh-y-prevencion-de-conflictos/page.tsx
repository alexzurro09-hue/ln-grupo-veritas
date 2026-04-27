import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Asesoría en RRHH y Prevención de Conflictos en Alcalá | LN Grupo Veritas',
  description:
    'Consultoría estratégica en RRHH, prevención de conflictos laborales y cumplimiento normativo en Alcalá de Henares. Más de 30 años asesorando al tejido empresarial.',
  alternates: {
    canonical:
      'https://ln-grupo-veritas.vercel.app/servicios/juridico/asesoria-en-rrhh-y-prevencion-de-conflictos',
  },
};

export default function Page() {
  const serviceTitle = 'Asesoría en RRHH y Prevención de Conflictos';
  const description =
    'Consultoría legal estratégica para la gestión de personas y la optimización del clima laboral en Alcalá de Henares y Madrid. 30 años blindando la paz social de su organización.';

  const metodo = [
    'Auditoría y Diagnóstico: Evaluamos el estado actual de sus relaciones laborales y el cumplimiento normativo para identificar vulnerabilidades antes de que se conviertan en problemas legales.',
    'Diseño de Protocolos: Creamos herramientas a medida (planes de igualdad, protocolos de desconexión digital, manuales de conducta) que profesionalizan la gestión de personas y protegen a la empresa.',
    'Mediación y Acompañamiento: Actuamos como soporte constante en la resolución de tensiones internas, proporcionando criterios legales claros para la toma de decisiones estratégicas en materia de personal.',
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
                <Link href="/servicios/juridico" className="hover:text-veritas-red transition-colors">
                  Jurídico
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
                Consultoría Estratégica en Relaciones Laborales y Gestión del Talento
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas entendemos que la mejor defensa laboral es una buena gestión preventiva. Con
                  más de 30 años como <strong>especialistas en asesoría de RRHH en Alcalá de Henares</strong>,
                  ayudamos a las empresas a construir entornos de trabajo seguros y eficientes, minimizando el
                  riesgo de litigiosidad y optimizando la relación entre la dirección y la plantilla.
                </p>
                <p>
                  Abordamos de forma integral la{' '}
                  <strong>
                    redacción de reglamentos internos, protocolos de acoso, políticas de incentivos y auditorías
                    laborales de cumplimiento
                  </strong>
                  . Nuestro enfoque se centra en la prevención de conflictos mediante la mediación y el diseño de
                  estructuras de contratación sólidas, garantizando que su empresa cumpla con toda la normativa
                  vigente (Compliance Laboral) mientras mantiene un clima de confianza que impulsa la
                  productividad y la estabilidad del negocio.
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
              Solicitar consultoría preventiva
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

