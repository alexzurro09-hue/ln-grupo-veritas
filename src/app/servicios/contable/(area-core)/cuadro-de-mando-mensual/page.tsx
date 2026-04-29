import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cuadro de Mando y KPIs Contables en Alcalá | LN Grupo Veritas',
  description:
    'Implementación de cuadros de mando mensuales para el seguimiento de KPIs financieros en Alcalá de Henares. Tome decisiones basadas en datos reales y visuales.',
  alternates: {
    canonical: 'https://lngrupoveritas.es/servicios/contable/cuadro-de-mando-mensual',
  },
};

export default function Page() {
  const serviceTitle = 'Cuadro de Mando Básico para Seguimiento Mensual';
  const description =
    'Visualización estratégica de indicadores clave (KPIs) para la gestión inteligente de su empresa en Alcalá de Henares y Madrid. 30 años transformando números en decisiones.';

  const metodo = [
    'Selección de KPIs Críticos: Definimos junto a usted los indicadores vitales de su actividad (punto muerto, margen de contribución, ratio de endeudamiento) para asegurar que el seguimiento mensual sea verdaderamente útil para su gestión.',
    'Visualización de Tendencias y Comparativas: Presentamos sus datos mediante gráficos evolutivos que permiten comparar el rendimiento actual con meses anteriores o ejercicios pasados, detectando patrones de estacionalidad o crecimiento.',
    'Alertas de Desviación Presupuestaria: Integramos sus previsiones anuales en el cuadro de mando para identificar de forma temprana cualquier desfase entre la realidad contable y sus objetivos de negocio, permitiendo correcciones inmediatas.',
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
                Especialistas en Reporting Ejecutivo y Visualización de Datos Financieros
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas creemos que el valor de la contabilidad no reside en el registro, sino en la interpretación. Con más de
                  30 años de experiencia en el <strong>asesoramiento financiero en Alcalá de Henares</strong>, proporcionamos a nuestros
                  clientes un cuadro de mando mensual diseñado para simplificar la complejidad. Traducimos sus estados contables a un formato
                  visual e intuitivo que le permite identificar de un vistazo la salud de su tesorería, la evolución de sus márgenes y el
                  cumplimiento de sus objetivos presupuestarios.
                </p>
                <p>
                  Nuestro servicio de <strong>cuadro de mando básico</strong> se centra en los Indicadores Clave de Desempeño (KPIs) que
                  realmente mueven la aguja de su negocio. No le inundamos con informes interminables; le entregamos una herramienta de
                  control ejecutivo que destaca las desviaciones, alerta sobre riesgos de liquidez y facilita la toma de decisiones
                  proactiva. Es la diferencia entre gestionar mirando el retrovisor y gestionar con una visión clara del camino que tiene por
                  delante.
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
              Ver ejemplo de cuadro de mando
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

