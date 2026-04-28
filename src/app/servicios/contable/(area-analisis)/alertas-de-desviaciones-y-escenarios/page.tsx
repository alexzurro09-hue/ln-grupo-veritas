import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Alertas Financieras y Simulación de Escenarios | LN Grupo Veritas',
  description:
    'Control de desviaciones presupuestarias y modelización de escenarios financieros para empresas en Alcalá de Henares. Anticipación estratégica para su negocio.',
  alternates: {
    canonical: 'https://ln-grupo-veritas.vercel.app/servicios/contable/alertas-de-desviaciones-y-escenarios',
  },
};

export default function Page() {
  const serviceTitle = 'Alertas de Desviaciones y Escenarios';
  const description =
    'Anticipación de riesgos y planificación de contingencias mediante análisis comparativo y modelización para empresas en Alcalá de Henares. 30 años proyectando el futuro de su empresa.';

  const metodo = [
    'Análisis de Variaciones Presupuestarias: Comparamos mensualmente sus cifras reales con sus previsiones anuales, desglosando las causas de las desviaciones para actuar sobre el origen del problema y no solo sobre el síntoma.',
    "Modelización de Escenarios de Estrés: Construimos proyecciones financieras simulando caídas de ingresos o aumentos de costes, asegurando que su empresa disponga siempre de un 'Plan B' financiero y reservas de liquidez adecuadas.",
    'Reporting de Alerta Temprana: Configuramos indicadores críticos que le avisan automáticamente cuando un ratio de solvencia o un nivel de gastos se sale de los márgenes de seguridad establecidos para su sector.',
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
                Especialistas en Control Presupuestario y Planificación de Contingencias
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas sabemos que la contabilidad solo es útil si sirve para tomar decisiones antes de que los problemas ocurran.
                  Con más de 30 años de experiencia en la <strong>consultoría financiera en Alcalá de Henares</strong>, ayudamos a las empresas a
                  implementar un sistema de alertas tempranas que detecta cualquier desviación entre sus objetivos presupuestarios y la realidad
                  contable, permitiendo correcciones de rumbo inmediatas.
                </p>
                <p>
                  Gestionamos la creación de{' '}
                  <strong>
                    escenarios predictivos (escenarios &apos;What-if&apos;) para evaluar el impacto de decisiones críticas
                  </strong>
                  , como la contratación de personal, la solicitud de financiación o la apertura de nuevas líneas de mercado. Nuestro enfoque le
                  permite visualizar cómo se comportará su tesorería y su solvencia ante diferentes contextos económicos, transformando la
                  incertidumbre en una hoja de ruta clara y cuantificada que minimiza el riesgo y maximiza la seguridad en la dirección
                  empresarial.
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
              Planificar mis escenarios
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

