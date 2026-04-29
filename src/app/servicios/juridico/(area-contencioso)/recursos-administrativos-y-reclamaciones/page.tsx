import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Abogados Derecho Administrativo en Alcalá de Henares | LN Grupo Veritas',
  description:
    'Especialistas en recursos administrativos, reclamaciones ante la administración y responsabilidad patrimonial en Alcalá de Henares. Más de 30 años de experiencia técnica.',
  alternates: {
    canonical:
      'https://lngrupoveritas.es/servicios/juridico/recursos-administrativos-y-reclamaciones',
  },
};

export default function Page() {
  const serviceTitle = 'Recursos Administrativos y Reclamaciones';
  const description =
    'Defensa técnica y representación frente a la Administración Pública en Alcalá de Henares y Madrid. 30 años de rigor jurídico protegiendo los derechos de ciudadanos y empresas.';

  const metodo = [
    'Control estricto de plazos: En derecho administrativo, el tiempo es el factor más crítico. Realizamos un seguimiento exhaustivo para que ningún derecho se pierda por caducidad o prescripción ante la Administración.',
    'Análisis técnico-legal: Evaluamos la legalidad del acto administrativo impugnado, identificando la falta de motivación o la desviación de poder para construir una fundamentación jurídica sólida.',
    'Agotamiento estratégico de la vía administrativa: Diseñamos los recursos previos buscando la resolución favorable en fase administrativa para ahorrar costes y tiempo, preparando al mismo tiempo el expediente para un futuro recurso contencioso-administrativo.',
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
                Especialistas en Derecho Administrativo y Defensa frente a la Administración
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas contamos con una trayectoria de más de 30 años como{' '}
                  <strong>abogados especialistas en derecho administrativo en Alcalá de Henares</strong>. La
                  relación con la Administración Pública suele ser desigual y compleja; nuestra misión es
                  equilibrar esa balanza, garantizando que el ciudadano o la empresa cuenten con una defensa
                  técnica de alto nivel frente a actos administrativos injustos o arbitrarios.
                </p>
                <p>
                  Gestionamos con absoluta solvencia la interposición de{' '}
                  <strong>
                    recursos de alzada, reposición y extraordinarios de revisión, así como reclamaciones por
                    responsabilidad patrimonial de la Administración y expedientes sancionadores
                  </strong>
                  . Nuestro enfoque se centra en la detección de vicios de forma, la lucha contra el silencio
                  administrativo negativo y la defensa de sus intereses en procedimientos de licencias, urbanismo
                  y multas, asegurando que se agote correctamente la vía administrativa como paso previo y
                  necesario al éxito en la vía judicial.
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
              Solicitar consulta específica
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

