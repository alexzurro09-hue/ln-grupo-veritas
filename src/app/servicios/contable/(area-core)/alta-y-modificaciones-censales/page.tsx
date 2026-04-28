import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Alta y Modificaciones Censales (036/037) en Alcalá | LN Grupo Veritas',
  description:
    'Tramitación profesional de altas y modificaciones censales (Modelos 036 y 037) ante la AEAT en Alcalá de Henares. Asegure su cumplimiento desde el inicio.',
  alternates: {
    canonical: 'https://ln-grupo-veritas.vercel.app/servicios/contable/alta-y-modificaciones-censales',
  },
};

export default function Page() {
  const serviceTitle = 'Alta y Modificaciones Censales (Modelo 036 / 037)';
  const description =
    'Gestión experta del censo de empresarios, profesionales y retenedores para negocios en Alcalá de Henares y Madrid. 30 años garantizando un inicio sólido ante la AEAT.';

  const metodo = [
    'Selección Estratégica de Epígrafes (IAE): Analizamos su actividad real para encuadrarla en el epígrafe más beneficioso y preciso, garantizando la coherencia con sus futuras declaraciones de impuestos.',
    'Optimización de Regímenes Fiscales: Le asesoramos en la elección entre estimación directa o módulos, y en las opciones de IVA aplicables, buscando siempre la fórmula que mejor se adapte a su estructura de costes.',
    'Gestión de Notificaciones y ROI: Tramitamos su inclusión en el Registro de Operadores Intracomunitarios (ROI) si realiza operaciones en Europa y configuramos su Dirección Electrónica Habilitada para que nunca pierda una comunicación oficial.',
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
                Especialistas en Registro Censal y Cumplimiento Tributario Inicial
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas sabemos que la declaración censal es mucho más que un trámite administrativo; es el documento que define
                  sus obligaciones fiscales presentes y futuras. Con más de 30 años de experiencia en el{' '}
                  <strong>alta de empresas y autónomos en Alcalá de Henares</strong>, realizamos un análisis previo para asegurar que su
                  registro en los Modelos 036 o 037 sea el reflejo exacto de su actividad y optimice su carga tributaria desde el primer día.
                </p>
                <p>
                  Gestionamos de forma íntegra el{' '}
                  <strong>
                    alta, baja y cualquier modificación de sus datos censales (cambios de domicilio, variaciones en el régimen de IVA o IRPF,
                    alta en el ROI o registro de exportadores)
                  </strong>
                  . Nuestro enfoque se centra en la correcta elección de los epígrafes del IAE y la definición precisa de las actividades,
                  evitando discrepancias con Hacienda y asegurando que su censo sea una herramienta de protección legal ante posibles
                  inspecciones o requerimientos de comprobación censal.
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
              Solicitar alta profesional
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

