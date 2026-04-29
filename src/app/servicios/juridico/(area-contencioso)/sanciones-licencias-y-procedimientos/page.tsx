import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sanciones, Licencias y Procedimientos Administrativos en Alcalá | LN Grupo Veritas',
  description:
    'Especialistas en recursos contra sanciones, obtención de licencias y gestión de procedimientos ante la Administración en Alcalá de Henares. Más de 30 años de rigor legal.',
  alternates: {
    canonical: 'https://ln-grupo-veritas.vercel.app/servicios/juridico/sanciones-licencias-y-procedimientos',
  },
};

export default function Page() {
  const serviceTitle = 'Sanciones, Licencias y Procedimientos ante la Administración';
  const description =
    'Asesoría técnica y representación legal en la obtención de licencias, defensa ante sanciones y gestión de expedientes administrativos en Alcalá de Henares y Madrid. 30 años de experiencia técnica.';

  const metodo = [
    'Estudio de viabilidad técnica: Analizamos la normativa municipal y autonómica aplicable para garantizar que las solicitudes de licencias y autorizaciones cumplan con todos los requisitos desde el primer momento, minimizando los tiempos de espera.',
    'Estrategia de defensa ante sanciones: Evaluamos cada expediente sancionador en busca de errores en la tramitación o falta de base fáctica, redactando alegaciones y recursos que busquen la anulación o la reducción mínima de la sanción.',
    'Seguimiento proactivo del expediente: Mantenemos un contacto constante con la Administración, impulsando el procedimiento para evitar parálisis injustificadas y asegurando una respuesta ágil a los requerimientos oficiales.',
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
                <Link href="/servicios/juridico" className="hover:text-veritas-red transition-colors">
                  Jurídico
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
                Expertos en Gestión de Licencias y Defensa ante Expedientes Sancionadores
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas contamos con más de tres décadas de trayectoria como{' '}
                  <strong>abogados especialistas en sanciones y licencias administrativas en Alcalá de Henares</strong>.
                  Entendemos que la burocracia no debe ser un freno para la actividad económica, por lo que
                  actuamos con la diligencia necesaria para asegurar que sus proyectos cuenten con el respaldo
                  legal y las autorizaciones administrativas requeridas.
                </p>
                <p>
                  Gestionamos de forma integral la obtención de{' '}
                  <strong>
                    licencias de actividad, licencias de obra y cambios de uso, así como la defensa técnica en
                    expedientes sancionadores por infracciones urbanísticas, de consumo o de medio ambiente
                  </strong>
                  . Nuestro enfoque combina el asesoramiento preventivo para el cumplimiento normativo con una
                  oposición contundente ante sanciones desproporcionadas o arbitrarias, agotando todas las vías de
                  recurso administrativo para proteger la continuidad de su negocio o la integridad de su
                  patrimonio.
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
              Solicitar asesoramiento técnico
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

