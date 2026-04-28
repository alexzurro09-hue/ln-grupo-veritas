import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Análisis de Márgenes y Evolución de Costes en Alcalá | LN Grupo Veritas',
  description:
    'Análisis experto de márgenes de beneficio y control de evolución de costes para empresas en Alcalá de Henares. Optimice su rentabilidad con datos contables reales.',
  alternates: {
    canonical: 'https://ln-grupo-veritas.vercel.app/servicios/contable/lectura-de-margenes-y-costes',
  },
};

export default function Page() {
  const serviceTitle = 'Lectura de Márgenes y Evolución de Costes';
  const description =
    'Análisis técnico de rentabilidad y estructura de gastos para la optimización del beneficio en empresas de Alcalá de Henares y Madrid. 30 años extrayendo valor de sus números.';

  const metodo = [
    'Desglose Analítico de Costes: Clasificamos sus gastos en fijos y variables para determinar su punto muerto (break-even) y evaluar la eficiencia de su estructura operativa actual.',
    'Análisis de Márgenes por Unidad de Negocio: Identificamos la rentabilidad específica de cada línea de actividad o familia de productos, permitiéndole concentrar sus recursos en las áreas más productivas.',
    'Vigilancia de la Evolución Temporal: Monitorizamos comparativamente sus partidas de gasto mes a mes, detectando incrementos injustificados o tendencias de coste que requieran una intervención inmediata.',
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
                Especialistas en Análisis de Rentabilidad y Control de Eficiencia de Costes
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas sabemos que facturar no es lo mismo que ganar. Una contabilidad mal interpretada puede ocultar fugas de
                  rentabilidad en líneas de negocio aparentemente exitosas. Con más de 30 años de experiencia en el{' '}
                  <strong>análisis de costes en Alcalá de Henares</strong>, ayudamos a los empresarios a diseccionar su cuenta de resultados
                  para identificar el margen real de cada producto o servicio, asegurando que el crecimiento de la empresa sea siempre
                  rentable y sostenible.
                </p>
                <p>
                  Gestionamos de forma analítica la{' '}
                  <strong>
                    evolución de sus costes directos e indirectos, monitorizando las desviaciones respecto a periodos anteriores y analizando
                    el impacto de la inflación en sus márgenes de contribución
                  </strong>
                  . No nos limitamos a registrar facturas; realizamos una lectura crítica de sus estados financieros para proponer medidas de
                  optimización de gastos y ajustes de precios, proporcionando la claridad necesaria para proteger su beneficio neto frente a
                  las oscilaciones del mercado.
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
              Optimizar mis márgenes
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
