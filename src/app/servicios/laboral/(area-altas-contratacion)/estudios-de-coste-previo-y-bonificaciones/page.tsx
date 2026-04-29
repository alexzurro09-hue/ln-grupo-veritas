import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Estudio de Costes Laborales y Bonificaciones en Alcalá | LN Grupo Veritas',
  description:
    'Analizamos el coste real de contratación y localizamos todas las bonificaciones disponibles para su empresa en Alcalá de Henares. Seguridad financiera para su crecimiento.',
  alternates: {
    canonical:
      'https://lngrupoveritas.es/servicios/laboral/estudios-de-coste-previo-y-bonificaciones',
  },
};

export default function Page() {
  const serviceTitle = 'Estudios de Coste Previo y Bonificaciones';
  const description =
    'Análisis financiero detallado y optimización de incentivos a la contratación para empresas en Alcalá de Henares y Madrid. 30 años ayudándole a contratar con total certidumbre.';

  const metodo = [
    'Simulación de Escenarios: Elaboramos comparativas entre diferentes modalidades contractuales y jornadas, mostrando el impacto neto en su cuenta de resultados antes de formalizar el alta.',
    'Mapa de Bonificaciones Activas: Identificamos los incentivos estatales y autonómicos (Comunidad de Madrid) aplicables al perfil del candidato, gestionando los requisitos necesarios para garantizar su concesión.',
    'Previsión de Pasivos Laborales: Calculamos no solo el coste mensual, sino también la provisión necesaria para pagas extra, vacaciones e indemnizaciones, evitando sorpresas de tesorería a largo plazo.',
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
                Especialistas en Planificación de Costes y Optimización de Incentivos Laborales
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas sabemos que contratar es la inversión más importante de una empresa, y como tal, requiere un análisis de
                  viabilidad previo. Con más de 30 años de experiencia como{' '}
                  <strong>especialistas en costes laborales en Alcalá de Henares</strong>, proporcionamos a la dirección de la empresa una
                  visión exacta y desglosada de lo que supone cada nueva incorporación, eliminando la incertidumbre y permitiendo una
                  planificación presupuestaria real.
                </p>
                <p>
                  Realizamos{' '}
                  <strong>
                    estudios de costes detallados que incluyen salario bruto, seguridad social patronal, costes de indemnización latente y
                    aplicación de convenios
                  </strong>
                  . Simultáneamente, rastreamos todas las{' '}
                  <strong>
                    bonificaciones y reducciones de cuotas vigentes (por edad, duración de desempleo, discapacidad o contratos de formación)
                  </strong>
                  , asegurando que su empresa no pierda ni una sola oportunidad de ahorro legal. Nuestro objetivo es que cada contrato sea tan
                  rentable para su negocio como seguro para el trabajador.
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
              Solicitar estudio de costes
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

