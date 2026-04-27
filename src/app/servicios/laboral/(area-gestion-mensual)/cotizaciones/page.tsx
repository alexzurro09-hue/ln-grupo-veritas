import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gestión de Cotizaciones y Seguros Sociales en Alcalá | LN Grupo Veritas',
  description:
    'Especialistas en la gestión de cotizaciones a la Seguridad Social, SILTRA y Sistema RED en Alcalá de Henares. 30 años de rigor en la gestión de seguros sociales.',
  alternates: {
    canonical: 'https://ln-grupo-veritas.vercel.app/servicios/laboral/cotizaciones',
  },
};

export default function Page() {
  const serviceTitle = 'Cotizaciones';
  const description =
    'Gestión técnica y liquidación de cuotas a la Seguridad Social para empresas en Alcalá de Henares y Madrid. 30 años garantizando la exactitud en sus seguros sociales.';

  const metodo = [
    'Dominio Tecnológico (SILTRA/RED): Operamos con los sistemas oficiales de la Seguridad Social de forma diaria, resolviendo de forma ágil las discrepancias en los tramos de cotización y asegurando la estabilidad del flujo de datos.',
    'Optimización de Bonificaciones: Analizamos sistemáticamente cada contrato para aplicar todas las reducciones y beneficios en la cuota patronal vigentes, maximizando el ahorro legal para la empresa.',
    'Conciliación de Liquidaciones: Realizamos una revisión exhaustiva antes de la confirmación de los seguros sociales, cruzando los datos de nómina con los borradores de la TGSS para garantizar un descuadre cero.',
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

          <h1 className="mt-2 font-serif text-3xl md:text-4xl font-bold tracking-tight text-veritas-green">{serviceTitle}</h1>
          <p className="mt-3 text-[14px] md:text-[15px] leading-relaxed text-[#3b3b3b] font-sans max-w-3xl">{description}</p>
        </div>
      </div>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-14">
          <div className="max-w-3xl">
            <div className="mb-10">
              <h2 className="font-serif text-[18px] md:text-[20px] font-bold text-veritas-green">
                Especialistas en Gestión de Seguros Sociales y Sistema RED
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas sabemos que el coste de la Seguridad Social es uno de los mayores compromisos financieros de cualquier
                  empresa. Con más de 30 años de experiencia como <strong>especialistas en cotizaciones en Alcalá de Henares</strong>,
                  actuamos con la máxima precisión técnica en la gestión de los seguros sociales, asegurando que cada liquidación sea el
                  reflejo exacto de la situación de su plantilla y cumpla estrictamente con la normativa de la Tesorería General de la
                  Seguridad Social.
                </p>
                <p>
                  Gestionamos de forma íntegra el <strong>Sistema RED y la recepción de ficheros SILTRA, encargándonos de la confección y envío de los borradores de liquidación (RLC y RNT)</strong>. Nuestro enfoque profesional garantiza no solo el
                  cumplimiento puntual de los plazos, sino también la vigilancia activa de las bonificaciones y reducciones de cuotas a las
                  que su empresa tenga derecho, protegiendo su liquidez y eliminando el riesgo de recargos por errores o presentaciones fuera
                  de término.
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
              Solicitar estudio de costes sociales
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

