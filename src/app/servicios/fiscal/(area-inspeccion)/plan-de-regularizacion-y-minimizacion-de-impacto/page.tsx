import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Plan de Regularización Fiscal y Minimización de Impacto | LN Grupo Veritas',
  description:
    'Estrategias para el cierre de inspecciones fiscales y reducción de sanciones en Alcalá de Henares. Logre el acuerdo más favorable con Hacienda. 30 años de experiencia.',
  alternates: {
    canonical:
      'https://ln-grupo-veritas.vercel.app/servicios/fiscal/plan-de-regularizacion-y-minimizacion-de-impacto',
  },
};

export default function Page() {
  const serviceTitle = 'Plan de Regularización y Minimización de Impacto';
  const description =
    'Diseño de estrategias para el cierre óptimo de expedientes tributarios y la reducción legal de costes financieros en Alcalá de Henares y Madrid. 30 años de pragmatismo y rigor técnico.';

  const metodo = [
    'Negociación de Actas con Acuerdo: Exploramos las vías legales para alcanzar acuerdos con la administración que impliquen reducciones significativas en la cuantía de las sanciones a cambio de la conformidad, agilizando el cierre del proceso.',
    'Auditoría de Atenuantes: Identificamos y justificamos técnica y jurídicamente las circunstancias que permiten la minoración de las multas, asegurando que la administración aplique la interpretación más favorable para el cliente.',
    'Planificación de Tesorería y Pagos: Gestionamos la solicitud de aplazamientos y fraccionamientos ante los órganos de recaudación, diseñando un calendario de pagos que se ajuste a su realidad financiera y evite embargos o medidas cautelares.',
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
                Especialistas en Cierre de Inspecciones y Reducción de Contingencias
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas entendemos que, en determinados escenarios de inspección, el éxito no reside
                  en el litigio indefinido, sino en la capacidad de negociar un cierre que minimice el impacto
                  económico y reputacional para el contribuyente. Con más de 30 años de trayectoria en la{' '}
                  <strong>regularización fiscal en Alcalá de Henares</strong>, actuamos con la solvencia técnica
                  necesaria para reconducir situaciones complejas hacia acuerdos que garanticen la continuidad de
                  su actividad económica.
                </p>
                <p>
                  Abordamos la fase final de la inspección mediante la{' '}
                  <strong>
                    gestión de actas con acuerdo, la aplicación de reducciones máximas en las sanciones y el
                    diseño de planes de pago personalizados
                  </strong>
                  . Nuestro enfoque estratégico se centra en la cuantificación exacta de los riesgos y la
                  negociación proactiva con los órganos de recaudación, logrando el reconocimiento de beneficios
                  fiscales y deducciones que compensen la deuda y asegurando condiciones de fraccionamiento que
                  protejan la liquidez de su empresa o patrimonio personal.
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
              Solicitar plan de regularización
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

