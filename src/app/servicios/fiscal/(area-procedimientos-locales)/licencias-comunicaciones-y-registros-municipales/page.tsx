import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Licencias y Registros Municipales en Alcalá | LN Grupo Veritas',
  description:
    'Gestión de licencias de actividad, comunicaciones y registros ante el Ayuntamiento de Alcalá de Henares y otros organismos locales. 30 años de agilidad técnica.',
  alternates: {
    canonical:
      'https://ln-grupo-veritas.vercel.app/servicios/fiscal/licencias-comunicaciones-y-registros-municipales',
  },
};

export default function Page() {
  const serviceTitle = 'Licencias, Comunicaciones y Registros Municipales';
  const description =
    'Gestión técnica y representación ante organismos locales y ayuntamientos en Alcalá de Henares y Madrid. 30 años asegurando que su operativa administrativa no se detenga.';

  const metodo = [
    'Control de Cumplimiento Normativo: Analizamos los requisitos de cada ordenanza municipal antes de la presentación, asegurando que su expediente sea impecable y reduciendo drásticamente los tiempos de respuesta del ayuntamiento.',
    'Gestión de Registros y Archivos: Nos encargamos de la trazabilidad documental de sus comunicaciones y registros oficiales, manteniendo su archivo administrativo actualizado ante cualquier requerimiento de inspección.',
    'Interlocución Técnica Directa: Representamos sus intereses ante los técnicos municipales, resolviendo dudas y subsanando requerimientos de forma proactiva para evitar el silencio administrativo negativo o la denegación de permisos.',
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
                Especialistas en Gestión Administrativa Local y Tramitación Municipal
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas entendemos que la relación con la administración local es el motor diario de
                  cualquier actividad económica. Con más de 30 años de experiencia en{' '}
                  <strong>trámites municipales en Alcalá de Henares</strong>, actuamos como el interlocutor
                  técnico necesario para que sus solicitudes de licencias y registros se resuelvan con la agilidad
                  que su negocio requiere, evitando parálisis administrativas que puedan comprometer su
                  rentabilidad.
                </p>
                <p>
                  Gestionamos de forma integral la obtención de{' '}
                  <strong>
                    licencias de actividad, de funcionamiento y de obra, así como la presentación de comunicaciones
                    previas y la inscripción en registros administrativos locales y autonómicos
                  </strong>
                  . Nuestro enfoque se basa en el conocimiento profundo de las ordenanzas municipales y los
                  procedimientos de la administración local, garantizando que cada documento y registro cumpla con
                  el rigor formal exigido para asegurar una operativa continua y libre de riesgos sancionadores.
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
              Solicitar gestión municipal
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

