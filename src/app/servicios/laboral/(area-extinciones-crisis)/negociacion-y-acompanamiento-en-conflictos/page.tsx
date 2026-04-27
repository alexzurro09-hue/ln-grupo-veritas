import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Negociación y Acompañamiento en Conflictos Laborales | LN Grupo Veritas',
  description:
    'Especialistas en mediación laboral, conciliaciones ante el SMAC y resolución de conflictos en Alcalá de Henares. 30 años transformando disputas en soluciones legales.',
  alternates: {
    canonical: 'https://ln-grupo-veritas.vercel.app/servicios/laboral/negociacion-y-acompanamiento-en-conflictos',
  },
};

export default function Page() {
  const serviceTitle = 'Negociación y Acompañamiento en Conflictos';
  const description =
    'Estrategia, mediación y representación técnica para la resolución de controversias laborales en Alcalá de Henares y Madrid. 30 años aportando serenidad y soluciones.';

  const metodo = [
    'Representación Técnica en el SMAC: Asistimos y defendemos la posición de la empresa en los actos de conciliación previa, buscando soluciones transaccionales que eviten el juicio y el devengo de salarios de tramitación o costas innecesarias.',
    'Diseño de Estrategias Transaccionales: Analizamos los riesgos y beneficios de cada escenario de conflicto para proponer fórmulas de acuerdo (indemnizaciones diferidas, pactos de salida, transacciones de deuda) que sean viables para la tesorería del cliente.',
   'Gestión de la Paz Social y Reputación: En conflictos colectivos o con mandos intermedios, priorizamos la resolución discreta y profesional que preserve la imagen de la empresa y el clima laboral del resto de la organización.',
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
                Especialistas en Mediación Laboral y Resolución Estratégica de Disputas
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas entendemos que el conflicto laboral es una situación de alto desgaste que requiere una gestión
                  profesional basada en la estrategia y la templanza. Con más de 30 años de experiencia en la{' '}
                  <strong>negociación laboral en Alcalá de Henares</strong>, actuamos como el interlocutor experto capaz de reconducir
                  posiciones enfrentadas hacia acuerdos equilibrados que protejan los intereses de la empresa y eviten el coste incierto de
                  la vía judicial.
                </p>
                <p>
                  Brindamos un servicio integral de{' '}
                  <strong>
                    acompañamiento y representación ante el Servicio de Mediación, Arbitraje y Conciliación (SMAC), así como en procesos de
                    mediación interna o negociación colectiva
                  </strong>
                  . Nuestro enfoque se centra en la obtención de acuerdos con fuerza de ley que cierren definitivamente la controversia,
                  garantizando que cada pacto sea plenamente ejecutable y proteja la seguridad jurídica del cliente frente a futuras
                  reclamaciones o incumplimientos.
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
              Solicitar mediador experto
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

