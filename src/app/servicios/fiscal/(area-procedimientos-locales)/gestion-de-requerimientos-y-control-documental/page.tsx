import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gestión de Requerimientos y Control Documental en Alcalá | LN Grupo Veritas',
  description:
    'Expertos en la respuesta a requerimientos de Hacienda y gestión documental fiscal en Alcalá de Henares. Evite sanciones por errores formales. 30 años de rigor.',
  alternates: {
    canonical:
      'https://ln-grupo-veritas.vercel.app/servicios/fiscal/gestion-de-requerimientos-y-control-documental',
  },
};

export default function Page() {
  const serviceTitle = 'Gestión de Requerimientos y Control Documental';
  const description =
    'Respuesta técnica y organización administrativa para sus notificaciones tributarias en Alcalá de Henares y Madrid. 30 años asegurando que sus papeles hablen por usted.';

  const metodo = [
    'Protocolo de Respuesta Inmediata: Analizamos la notificación en cuanto llega para identificar el alcance de lo solicitado y los plazos legales, evitando que el silencio administrativo o el retraso generen sanciones.',
    'Preparación de Carga de Prueba: Organizamos y validamos la documentación soporte necesaria, asegurando que la información entregada sea coherente con sus declaraciones previas y no abra nuevos focos de revisión.',
    'Seguimiento hasta el Cierre: No solo presentamos los papeles; vigilamos el expediente hasta recibir la resolución de conformidad, informándole puntualmente de cada paso y asegurando que el requerimiento se archive satisfactoriamente.',
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
                Especialistas en Respuesta ante la AEAT y Organización Documental Preventiva
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En la era de la digitalización tributaria, una notificación de Hacienda no tiene por qué ser un
                  problema si existe un orden previo. En LN Grupo Veritas, con más de 30 años de experiencia en la{' '}
                  <strong>gestión de requerimientos en Alcalá de Henares</strong>, sabemos que una respuesta
                  técnica, clara y documentada es la clave para cerrar cualquier expediente sin complicaciones
                  adicionales.
                </p>
                <p>
                  Nos encargamos de la{' '}
                  <strong>
                    recepción, análisis y contestación de requerimientos de información, notificaciones de
                    liquidación y comprobaciones censales
                  </strong>
                  . Nuestro servicio de control documental asegura que toda la justificación necesaria (facturas,
                  contratos, justificantes de pago) esté organizada y lista para ser presentada, garantizando que
                  su empresa o actividad profesional responda siempre con el máximo rigor ante cualquier solicitud
                  de la Agencia Tributaria o administraciones locales.
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
              Gestionar mi requerimiento ahora
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

