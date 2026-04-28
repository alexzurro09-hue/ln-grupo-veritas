import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Abogados Sucesiones y Herencias en Alcalá de Henares | LN Grupo Veritas',
  description:
    'Especialistas en gestión de herencias, redacción de testamentos y optimización fiscal sucesoria en Alcalá de Henares y Madrid. Más de 30 años de experiencia legal.',
  alternates: {
    canonical:
      'https://ln-grupo-veritas.vercel.app/servicios/juridico/sucesiones-herencias-y-planificacion-patrimonial',
  },
};

export default function Page() {
  const serviceTitle = 'Herencias y sucesiones';
  const description =
    'Gestión técnica y humana del proceso sucesorio y planificación hereditaria en Alcalá de Henares y Madrid. 30 años de rigor y sensibilidad.';

  const metodo = [
    'Analizamos la situación sucesoria y el patrimonio existente con un enfoque preventivo, evaluando las implicaciones fiscales y legales de cada decisión.',
    'Definimos una estrategia sucesoria clara: desde la mediación familiar para acuerdos de reparto hasta la planificación fiscal para optimizar el ahorro de los herederos.',
    'Tramitamos y redactamos toda la documentación técnica (cuadernos particionales, testamentos ante notario, liquidación de impuestos y registros) con absoluta precisión.',
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
                <Link href="/servicios/juridico" className="hover:text-veritas-red transition-colors">
                  Jurídico
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
                Expertos en Derecho de Sucesiones y Protección del Patrimonio Familiar
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas contamos con una trayectoria de más de 30 años como{' '}
                  <strong>abogados especialistas en herencias y sucesiones en Alcalá de Henares</strong>.
                  Entendemos que la gestión del patrimonio familiar requiere no solo de un profundo conocimiento
                  técnico, sino también de una sensibilidad especial para proteger los vínculos familiares durante
                  el proceso sucesorio.
                </p>
                <p>
                  Abordamos de forma integral la{' '}
                  <strong>
                    redacción de testamentos, la partición y adjudicación de herencias, la declaración de herederos
                    abintestato y la optimización del Impuesto de Sucesiones
                  </strong>
                  . Nuestro objetivo es proporcionar una planificación patrimonial inteligente que minimice los
                  costes fiscales y evite futuros conflictos, defendiendo sus derechos tanto en procesos de mutuo
                  acuerdo como en litigios sucesorios complejos.
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
              Solicitar consulta específica
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

