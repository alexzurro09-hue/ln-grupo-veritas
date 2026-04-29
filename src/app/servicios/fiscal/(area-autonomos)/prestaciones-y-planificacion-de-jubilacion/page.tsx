import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Jubilación y Prestaciones para Autónomos en Alcalá | LN Grupo Veritas',
  description:
    'Planifique su jubilación y asegure sus prestaciones con expertos. Cálculo de pensiones e incapacidades para autónomos en Alcalá de Henares. 30 años protegiendo su futuro.',
  alternates: {
    canonical:
      'https://ln-grupo-veritas.vercel.app/servicios/fiscal/prestaciones-y-planificacion-de-jubilacion',
  },
};

export default function Page() {
  const serviceTitle = 'Prestaciones y Planificación de Jubilación';
  const description =
    'Consultoría estratégica para la protección social y el diseño del futuro retiro del trabajador autónomo en Alcalá de Henares y Madrid. 30 años garantizando su bienestar mañana.';

  const metodo = [
    'Estudio de Vida Laboral y Proyecciones: Analizamos su trayectoria de cotización y realizamos simulaciones precisas de su futura pensión, identificando el momento óptimo para la solicitud del retiro ordinario, anticipado o demorado.',
    'Optimización de Cotización Final: Diseñamos una estrategia de ajuste de bases de cotización en los años críticos previos a la jubilación, buscando el equilibrio perfecto entre la cuota mensual y la rentabilidad de la pensión futura.',
    'Defensa en Prestaciones de Salud: Le asistimos en la tramitación de expedientes de incapacidad ante el INSS, preparando la documentación médica y administrativa necesaria para garantizar el reconocimiento de sus derechos ante situaciones de enfermedad o accidente.',
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
                Especialistas en Previsión Social y Optimización de la Jubilación del Autónomo
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas entendemos que la jubilación del autónomo requiere una estrategia técnica que
                  debe iniciarse mucho antes del cese de actividad. Con más de 30 años de experiencia como{' '}
                  <strong>especialistas en prestaciones de la Seguridad Social en Alcalá de Henares</strong>,
                  ayudamos a los profesionales a transitar de la vida activa al retiro con las máximas garantías
                  económicas, analizando cada escenario para maximizar su futura pensión pública.
                </p>
                <p>
                  Gestionamos de forma integral el{' '}
                  <strong>
                    cálculo y solicitud de pensiones de jubilación, prestaciones por incapacidad permanente,
                    viudedad y orfandad, así como el seguimiento de bajas por incapacidad temporal
                  </strong>
                  . Nuestro enfoque se centra en la planificación proactiva: evaluamos su historial de cotización
                  y le asesoramos sobre los incrementos de base necesarios en los últimos años de carrera para
                  asegurar una prestación digna, protegiéndole simultáneamente ante cualquier contingencia de
                  salud que pueda comprometer su estabilidad financiera y la de su familia.
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
              Solicitar estudio de jubilación
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

