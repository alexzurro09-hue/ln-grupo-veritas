import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Defensa y Recursos ante la Inspección de Hacienda | LN Grupo Veritas',
  description:
    'Especialistas en la redacción de alegaciones y recursos contra actas de inspección de Hacienda en Alcalá de Henares. Defendemos sus intereses con rigor legal.',
  alternates: {
    canonical: 'https://ln-grupo-veritas.vercel.app/servicios/fiscal/preparacion-de-alegaciones-y-recursos',
  },
};

export default function Page() {
  const serviceTitle = 'Preparación de Alegaciones y Recursos';
  const description =
    'Defensa técnica y representación legal frente a propuestas de liquidación y actas de inspección en Alcalá de Henares y Madrid. 30 años de éxito en la impugnación de actos tributarios.';

  const metodo = [
    'Análisis Crítico de la Propuesta de Liquidación: Desglosamos los argumentos del inspector para localizar contradicciones, falta de motivación o errores en la valoración de las pruebas presentadas.',
    'Fundamentación Jurídica Avanzada: Elaboramos recursos de alto nivel técnico, apoyándonos en sentencias del Tribunal Supremo y el Tribunal de Justicia de la UE para blindar los intereses de nuestros clientes.',
    'Gestión de la Suspensión del Pago: Tramitamos las garantías necesarias para solicitar la suspensión de la ejecución de la deuda mientras se resuelven los recursos, evitando perjuicios financieros inmediatos para su empresa o economía personal.',
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
                Especialistas en Litigiosidad Tributaria y Defensa frente a la Inspección
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas entendemos que un acta de inspección no es el final del camino, sino el
                  inicio de una defensa técnica rigurosa. Con más de 30 años de experiencia como{' '}
                  <strong>abogados fiscalistas en Alcalá de Henares</strong>, sabemos que la Administración a
                  menudo realiza interpretaciones de la norma que pueden y deben ser combatidas mediante una
                  fundamentación jurídica sólida y una estrategia procesal impecable.
                </p>
                <p>
                  Gestionamos de forma integral la{' '}
                  <strong>
                    redacción de alegaciones en fase de inspección, la interposición de recursos de reposición y
                    reclamaciones económico-administrativas ante los tribunales correspondientes
                  </strong>
                  . Nuestro enfoque se centra en identificar errores de hecho o de derecho en la actuación
                  inspectora, utilizando la jurisprudencia más reciente para desvirtuar las propuestas de
                  liquidación y proteger la integridad de su patrimonio frente a sanciones y ajustes injustificados.
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
              Solicitar defensa técnica
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

