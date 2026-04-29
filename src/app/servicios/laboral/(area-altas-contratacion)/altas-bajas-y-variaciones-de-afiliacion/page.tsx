import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Altas, Bajas y Variaciones de Afiliación en Alcalá | LN Grupo Veritas',
  description:
    'Gestión ágil de altas, bajas y variaciones de trabajadores ante la Seguridad Social en Alcalá de Henares. 30 años de eficacia en afiliación.',
  alternates: {
    canonical:
      'https://lngrupoveritas.es/servicios/laboral/altas-bajas-y-variaciones-de-afiliacion',
  },
};

export default function Page() {
  const serviceTitle = 'Altas, Bajas y Variaciones de Afiliación';
  const description =
    'Gestión operativa inmediata de la relación con la Seguridad Social para empresas en Alcalá de Henares y Madrid. 30 años garantizando la agilidad que su plantilla requiere.';

  const metodo = [
    'Disponibilidad y Agilidad Operativa: Procesamos sus solicitudes de afiliación con la máxima prioridad, entendiendo las urgencias de la contratación y los plazos críticos de la administración.',
    'Verificación de Encuadramiento: Analizamos el perfil de cada trabajador para asegurar su correcto encuadramiento en el régimen y grupo de cotización adecuado, previniendo errores de cotización futuros.',
    'Comunicación de Variaciones en Tiempo Real: Tramitamos cualquier cambio en las condiciones laborales (reducciones de jornada, cambios de contrato, coeficientes de parcialidad) de forma simultánea a su ocurrencia real, manteniendo su historial de afiliación impecable.',
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
                Especialistas en Gestión de Afiliación y Trámites ante la Tesorería
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas entendemos que la gestión de personal no espera. Con más de 30 años de trayectoria en la{' '}
                  <strong>gestión de afiliación en Alcalá de Henares</strong>, proporcionamos un servicio de respuesta inmediata para la
                  tramitación de altas, bajas y variaciones de datos, asegurando que cada movimiento de su plantilla quede reflejado en el
                  Sistema RED con absoluta precisión y dentro de los plazos legales establecidos.
                </p>
                <p>
                  Gestionamos de forma íntegra el{' '}
                  <strong>
                    alta de trabajadores en cualquier régimen de la Seguridad Social, la comunicación de bajas, cambios de jornada,
                    modificaciones de grupo de cotización y variaciones de datos personales o bancarios
                  </strong>
                  . Nuestro enfoque se centra en la seguridad jurídica: vigilamos que cada alta se realice de forma previa al inicio de la
                  actividad y que cada baja se tramite con la causa correcta, evitando sanciones por presentaciones fuera de plazo y
                  garantizando la coherencia de la cuenta de cotización de su empresa.
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
              Gestionar alta urgente
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

