import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Alta y Contratos de Empleados de Hogar en Alcalá | LN Grupo Veritas',
  description:
    'Gestión integral de altas, contratos y bajas de empleadas de hogar en Alcalá de Henares. Seguridad social para su familia sin complicaciones.',
  alternates: {
    canonical: 'https://ln-grupo-veritas.vercel.app/servicios/laboral/hogar-alta-modificaciones-y-bajas',
  },
};

export default function Page() {
  const serviceTitle = 'Alta, Modificaciones y Bajas (Empleadores de Hogar)';
  const description =
    'Gestión experta del Régimen Especial de Empleados de Hogar para particulares en Alcalá de Henares y Madrid. 30 años facilitando la legalidad en su domicilio.';

  const metodo = [
    'Alta Inmediata y Segura: Gestionamos el alta telemática de su empleado de hogar de forma rápida, asegurando que la cobertura de la Seguridad Social esté activa antes del inicio de la actividad.',
    'Contratos Adaptados a su Hogar: Redactamos el contrato de trabajo oficial incluyendo las particularidades de su caso (interna, externa, horas) y gestionamos las prórrogas o cambios de jornada de forma oficial.',
    'Asesoramiento en Bonificaciones: Le ayudamos a aplicar las reducciones y bonificaciones de cuotas disponibles en la Seguridad Social (como las de familia numerosa), optimizando el coste de su servicio doméstico.',
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
                Especialistas en la Gestión Laboral del Servicio Doméstico
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas entendemos que contratar a alguien para el hogar es una decisión de confianza que no debe verse empañada
                  por la complejidad administrativa. Con más de 30 años de experiencia en la{' '}
                  <strong>gestión de empleados de hogar en Alcalá de Henares</strong>, actuamos como su gestoría de confianza para que la
                  relación laboral en su domicilio sea legal, segura y sencilla desde el primer día.
                </p>
                <p>
                  Nos encargamos de la{' '}
                  <strong>
                    tramitación completa del alta ante la Seguridad Social, la redacción del contrato de trabajo específico de servicio
                    doméstico y la gestión de cualquier variación posterior o baja laboral
                  </strong>
                  . Nuestro enfoque profesional garantiza que su familia cumpla con todas las obligaciones legales, incluyendo el correcto
                  encuadramiento en el Régimen Especial, la aplicación de bonificaciones por familia numerosa y la prevención de riesgos,
                  eliminando cualquier preocupación burocrática de su día a día.
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
              Gestionar alta en el hogar
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

