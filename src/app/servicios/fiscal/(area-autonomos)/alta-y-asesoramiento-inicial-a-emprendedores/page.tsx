import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Alta de Autónomos y Asesoría a Emprendedores en Alcalá | LN Grupo Veritas',
  description:
    '¿Vas a emprender? Gestionamos tu alta de autónomo, capitalización del paro y bonificaciones en Alcalá de Henares. Empieza con seguridad legal y fiscal.',
  alternates: {
    canonical:
      'https://lngrupoveritas.es/servicios/fiscal/alta-y-asesoramiento-inicial-a-emprendedores',
  },
};

export default function Page() {
  const serviceTitle = 'Alta y Asesoramiento Inicial a Emprendedores';
  const description =
    'Soporte técnico integral para el lanzamiento de su proyecto profesional en Alcalá de Henares y Madrid. 30 años convirtiendo ideas en negocios sólidos y legalmente protegidos.';

  const metodo = [
    'Planificación de Trámites: Coordinamos las altas en Hacienda y Seguridad Social de forma sincronizada, asegurando el cumplimiento de los plazos para no perder ninguna bonificación o subvención estatal o autonómica.',
    'Consultoría de Ayudas y Subvenciones: Analizamos su perfil para solicitar el Pago Único del paro o las ayudas vigentes para nuevos autónomos en la Comunidad de Madrid, maximizando su liquidez inicial.',
    'Formación Básica Tributaria: Le instruimos en la operativa de facturación, gastos deducibles y calendario fiscal para que entienda sus obligaciones y evite errores comunes que derivan en sanciones futuras.',
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
                Especialistas en el Inicio de Actividad y Consolidación de Negocios
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas sabemos que los primeros pasos de un emprendedor definen el futuro de su
                  proyecto. Con más de 30 años de experiencia como{' '}
                  <strong>asesores para emprendedores en Alcalá de Henares</strong>, no nos limitamos a realizar un
                  trámite administrativo; diseñamos la estructura fiscal y operativa que mejor se adapta a su
                  modelo de negocio desde el primer día.
                </p>
                <p>
                  Gestionamos de forma ágil el{' '}
                  <strong>
                    alta en el Censo de Empresarios (AEAT) y en el Régimen Especial de Trabajadores Autónomos
                    (RETA)
                  </strong>
                  . Nuestro asesoramiento incluye el estudio de viabilidad para la capitalización del desempleo
                  (pago único), la aplicación de la Tarifa Plana y otras bonificaciones de la Seguridad Social,
                  así como la elección de los epígrafes del IAE correctos para optimizar su tributación. Le
                  acompañamos en la puesta en marcha para que usted se centre en lo que realmente importa: hacer
                  crecer su negocio.
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
              Solicitar asesoría para emprender
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

