import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Subvenciones y Bonificaciones para Autónomos en Alcalá | LN Grupo Veritas',
  description:
    'Localizamos y gestionamos ayudas, subvenciones y bonificaciones para autónomos y emprendedores en Alcalá de Henares. Más de 30 años maximizando su ahorro y liquidez.',
  alternates: {
    canonical: 'https://ln-grupo-veritas.vercel.app/servicios/fiscal/subvenciones-y-bonificaciones',
  },
};

export default function Page() {
  const serviceTitle = 'Subvenciones y Bonificaciones';
  const description =
    'Identificación estratégica y gestión técnica de ayudas públicas para el impulso de su actividad profesional en Alcalá de Henares y Madrid. 30 años captando recursos para su negocio.';

  const metodo = [
    'Vigilancia de Convocatorias: Monitorizamos constantemente los boletines oficiales (BOCM, BOE) y programas locales para informar a nuestros clientes de las ayudas específicas que encajan con su sector y perfil.',
    'Tramitación de Expedientes: Elaboramos la memoria técnica y preparamos la documentación administrativa necesaria, gestionando la presentación telemática para asegurar que su solicitud entre en tiempo y forma.',
    'Justificación y Acompañamiento: Supervisamos el cumplimiento de las condiciones ligadas a la ayuda para garantizar que la subvención sea definitiva, asistiendo al cliente en cualquier requerimiento o inspección posterior de la administración.',
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
                Especialistas en Captación de Ayudas e Incentivos para el Autónomo
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas entendemos que la liquidez es el oxígeno de cualquier autónomo. Con más de 30
                  años de experiencia como <strong>especialistas en subvenciones en Alcalá de Henares</strong>,
                  actuamos como un radar activo para nuestros clientes, identificando cada oportunidad de
                  financiación no reembolsable y cada bonificación que permita reducir sus costes operativos desde
                  el primer día.
                </p>
                <p>
                  Gestionamos de forma integral la solicitud y justificación de la{' '}
                  <strong>
                    Tarifa Plana de la Seguridad Social, las ayudas para el fomento del autoempleo de la Comunidad
                    de Madrid, subvenciones para la digitalización y programas de apoyo a la contratación
                  </strong>
                  . Nuestro enfoque profesional elimina la barrera burocrática, asegurando que los expedientes
                  cumplan con todos los requisitos técnicos para maximizar las probabilidades de concesión y
                  garantizando un seguimiento estricto para evitar reintegros por errores en la justificación
                  posterior.
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
              Consultar ayudas disponibles
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

