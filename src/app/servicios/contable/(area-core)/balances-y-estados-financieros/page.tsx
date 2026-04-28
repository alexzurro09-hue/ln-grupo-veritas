import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Balances y Estados Financieros en Alcalá | LN Grupo Veritas',
  description:
    'Especialistas en la elaboración de Balances de Situación, Sumas y Saldos, y Cuentas de Pérdidas y Ganancias en Alcalá de Henares. Claridad financiera para su negocio.',
  alternates: {
    canonical: 'https://ln-grupo-veritas.vercel.app/servicios/contable/balances-y-estados-financieros',
  },
};

export default function Page() {
  const serviceTitle = 'Balance de Situación, Sumas y Saldos, y Pérdidas y Ganancias';
  const description =
    'Elaboración y análisis técnico de estados financieros para empresas en Alcalá de Henares y Madrid. 30 años transformando datos en información estratégica.';

  const metodo = [
    'Análisis Dinámico de Resultados: Desglosamos su cuenta de Pérdidas y Ganancias para identificar los márgenes de contribución, centros de coste y puntos críticos de rentabilidad, facilitando una gestión basada en datos reales.',
    'Vigilancia de la Solvencia (Balance de Situación): Monitorizamos el equilibrio financiero de su balance, analizando ratios de liquidez, endeudamiento y fondo de maniobra para prevenir tensiones de tesorería.',
    "Control de Integridad (Sumas y Saldos): Realizamos revisiones periódicas de saldos para detectar errores de registro o partidas pendientes de conciliación, garantizando una contabilidad 'limpia' y lista para el cierre de ejercicio.",
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
                Especialistas en Reporting Financiero y Diagnóstico Económico
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas entendemos que los estados financieros son la brújula que guía el crecimiento de cualquier organización.
                  Con más de 30 años de trayectoria en la <strong>elaboración de balances en Alcalá de Henares</strong>, nuestro equipo
                  técnico garantiza que su contabilidad no sea un mero registro histórico, sino una herramienta viva y precisa que refleje
                  fielmente el patrimonio y los resultados de su actividad económica.
                </p>
                <p>
                  Gestionamos de forma exhaustiva la{' '}
                  <strong>
                    confección de balances de sumas y saldos mensuales, balances de situación y cuentas de explotación (pérdidas y ganancias)
                  </strong>
                  . Nuestro enfoque profesional asegura una conciliación total entre la realidad operativa y la contable, vigilando la
                  correcta valoración de activos y pasivos para ofrecer una imagen fiel de la solvencia y rentabilidad de su empresa,
                  fundamental tanto para la gestión interna como para la obtención de financiación o la respuesta ante auditorías externas.
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
              Solicitar diagnóstico financiero
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

