import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Consultoría Financiera y Recomendaciones Estratégicas | LN Grupo Veritas',
  description:
    'Consultoría financiera basada en datos reales para empresas en Alcalá de Henares. Traducimos su contabilidad en decisiones estratégicas accionables.',
  alternates: {
    canonical: 'https://lngrupoveritas.es/servicios/contable/recomendaciones-financieras-accionables',
  },
};

export default function Page() {
  const serviceTitle = 'Recomendaciones Accionables (No solo números)';
  const description =
    'Consultoría estratégica y dirección financiera externa para la toma de decisiones en empresas de Alcalá de Henares y Madrid. 30 años guiando el éxito de su negocio.';

  const metodo = [
    'Apoyo en la Toma de Decisiones de Inversión: Evaluamos el retorno esperado (ROI) y el riesgo de sus proyectos de expansión o compra de activos, aportando una visión técnica e imparcial que asegura la viabilidad financiera.',
    'Optimización de la Estructura de Capital: Le asesoramos en la búsqueda del equilibrio óptimo entre recursos propios y ajenos, recomendando medidas de refinanciación o saneamiento para fortalecer su solvencia ante terceros.',
    'Informes Ejecutivos Orientados a la Acción: Elaboramos resúmenes mensuales que destacan los puntos clave de intervención, eliminando el ruido informativo y permitiéndole centrar su energía en lo que realmente importa para su rentabilidad.',
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
                <Link href="/servicios/contable" className="hover:text-veritas-red transition-colors">
                  Contable
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
                Especialistas en Consultoría Estratégica y Dirección Financiera Externa
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas creemos que un balance sin interpretación es una oportunidad perdida. Muchos empresarios reciben informes
                  mensuales que terminan en un cajón por falta de una traducción clara a la realidad operativa. Con más de 30 años de
                  experiencia en la <strong>dirección financiera en Alcalá de Henares</strong>, nuestro valor añadido reside en nuestra
                  capacidad para transformar columnas de números en consejos de negocio claros, directos y, sobre todo, ejecutables.
                </p>
                <p>
                  Actuamos como su <strong>socio estratégico en la toma de decisiones</strong>, proporcionando recomendaciones sobre la
                  viabilidad de inversiones, la gestión de la deuda o el saneamiento patrimonial de su sociedad. No nos limitamos a decirle
                  cuánto ha ganado; le explicamos por qué ha ocurrido y qué pasos debe dar mañana para mejorar su posición competitiva. Nuestro
                  objetivo es que usted se sienta respaldado por un equipo que entiende su negocio y que le proporciona la hoja de ruta
                  necesaria para convertir su contabilidad en una ventaja estratégica real.
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
              Convertir datos en decisiones
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

