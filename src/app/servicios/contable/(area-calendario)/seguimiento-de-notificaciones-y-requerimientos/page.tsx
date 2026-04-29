import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Seguimiento de Notificaciones y Requerimientos | LN Grupo Veritas',
  description:
    'Vigilancia profesional del buzón tributario y respuesta técnica a requerimientos de Hacienda en Alcalá de Henares. Evite sanciones por plazos vencidos.',
  alternates: {
    canonical: 'https://lngrupoveritas.es/servicios/contable/seguimiento-de-notificaciones-y-requerimientos',
  },
};

export default function Page() {
  const serviceTitle = 'Seguimiento de Notificaciones y Requerimientos';
  const description =
    'Vigilancia electrónica y gestión experta de comunicaciones oficiales para empresas en Alcalá de Henares y Madrid. 30 años garantizando que ningún plazo quede sin respuesta.';

  const metodo = [
    "Vigilancia Diaria y Sistemática: Revisamos de forma proactiva sus suscripciones a procedimientos y avisos electrónicos, eliminando el riesgo de que una notificación 'pase desapercibida' y genere recargos por extemporaneidad.",
    'Asesoría Técnica en la Respuesta: Ante la recepción de un requerimiento, evaluamos la información solicitada y coordinamos con el área contable la recopilación de soportes, redactando los escritos de contestación con rigor jurídico.',
    "Control de Calendario de Cortesía: Gestionamos sus 'días de cortesía' (periodos en los que la administración no puede notificar) para que sus vacaciones o cierres temporales no supongan un riesgo para el cumplimiento de sus obligaciones.",
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
                Especialistas en Vigilancia del Buzón Tributario y Defensa Administrativa
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas sabemos que la Administración ya no espera; notifica electrónicamente y los plazos comienzan a correr de
                  inmediato. Con más de 30 años de experiencia en la{' '}
                  <strong>gestión de requerimientos de Hacienda en Alcalá de Henares</strong>, actuamos como el escudo digital de su empresa,
                  monitorizando diariamente la Dirección Electrónica Habilitada Única (DEHú) y los portales de la AEAT y Seguridad Social para
                  asegurar una respuesta ágil y técnica a cualquier comunicación oficial.
                </p>
                <p>
                  Nuestro servicio no se limita a la recepción; realizamos un{' '}
                  <strong>análisis técnico del requerimiento y preparamos la documentación necesaria para la respuesta</strong>, cumpliendo
                  estrictamente con los plazos de alegaciones. Entendemos que una notificación bien atendida en su fase inicial evita que un
                  proceso de comprobación derive en una sanción o en una paralización de su actividad. Proporcionamos a nuestros clientes la
                  tranquilidad de saber que su buzón tributario está en manos profesionales las 24 horas del día.
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
              Activar vigilancia de buzón
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

