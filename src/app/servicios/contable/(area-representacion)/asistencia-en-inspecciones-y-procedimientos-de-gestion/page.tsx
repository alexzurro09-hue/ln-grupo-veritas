import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Asistencia en Inspecciones de Hacienda en Alcalá | LN Grupo Veritas',
  description:
    'Defensa técnica y acompañamiento profesional en inspecciones de la AEAT y procedimientos de gestión en Alcalá de Henares. Más de 30 años de experiencia.',
  alternates: {
    canonical:
      'https://lngrupoveritas.es/servicios/contable/asistencia-en-inspecciones-y-procedimientos-de-gestion',
  },
};

export default function Page() {
  const serviceTitle = 'Asistencia en Inspecciones y Procedimientos de Gestión';
  const description =
    'Acompañamiento técnico y defensa presencial ante los órganos de inspección y gestión de la AEAT para empresas en Alcalá de Henares. Seguridad jurídica en el momento crítico.';

  const metodo = [
    'Representación y Portavocía Técnica: Asumimos la interlocución directa con el inspector o gestor de la AEAT, evitando comparecencias innecesarias de la gerencia y asegurando que cada declaración sea coherente con la estrategia de defensa.',
    'Auditoría Preventiva del Expediente: Antes de cualquier entrega, realizamos una revisión crítica de la información solicitada bajo la óptica de un inspector, detectando puntos de riesgo y preparando la argumentación técnica para defender la postura de la empresa.',
    'Gestión y Asesoramiento en Actas: Analizamos las propuestas de liquidación y le asesoramos sobre la conveniencia de firmar en conformidad, disconformidad o con reserva, evaluando las implicaciones económicas y jurídicas de cada decisión.',
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
                Especialistas en Defensa Presencial y Estrategia ante la Inspección
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas entendemos que una inspección de Hacienda es uno de los momentos de mayor tensión para cualquier
                  empresario. No se trata solo de tener la contabilidad en orden, sino de saber gestionar el procedimiento y los tiempos de la
                  administración. Con más de 30 años de experiencia en la{' '}
                  <strong>asistencia técnica en inspecciones en Alcalá de Henares</strong>, actuamos como su representante directo ante el
                  actuario, filtrando la comunicación y asegurando que sus derechos como contribuyente sean respetados en todo momento.
                </p>
                <p>
                  Nuestra intervención en <strong>procedimientos de gestión e inspección</strong> abarca desde la primera comparecencia hasta
                  la firma de las actas. Analizamos la estrategia del inspector, preparamos las respuestas técnicas y evitamos que se produzcan
                  indefensiones por una mala interpretación de los hechos contables. Nos encargamos de que la relación con la Agencia
                  Tributaria sea estrictamente profesional y técnica, minimizando el impacto de la revisión en su actividad diaria y buscando
                  siempre el cierre del expediente en las condiciones más favorables para la sociedad.
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
              Solicitar asistencia técnica
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

