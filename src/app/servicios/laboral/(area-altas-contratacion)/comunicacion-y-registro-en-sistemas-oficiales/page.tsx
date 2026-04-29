import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Registro de Contratos y Comunicación a Sistemas Oficiales | LN Grupo Veritas',
  description:
    'Gestión técnica en Contrat@, Delt@ y sistemas oficiales en Alcalá de Henares. Aseguramos la validez legal de sus trámites laborales. 30 años de rigor.',
  alternates: {
    canonical: 'https://lngrupoveritas.es/servicios/laboral/comunicacion-y-registro-en-sistemas-oficiales',
  },
};

export default function Page() {
  const serviceTitle = 'Comunicación y Registro en Sistemas Oficiales';
  const description =
    'Tramitación técnica y validación de documentos ante SEPE, Seguridad Social y Mutuas para empresas en Alcalá de Henares y Madrid. 30 años de eficacia administrativa.';

  const metodo = [
    'Dominio de Plataformas Contrat@ y Certific@dos: Registramos sus contratos de trabajo y enviamos los certificados de empresa de forma telemática e inmediata, cumpliendo con los plazos legales para que el trabajador pueda acceder a sus derechos sin retrasos.',
    'Gestión de Accidentes de Trabajo (Delt@): Tramitamos los partes de accidente con y sin baja con la máxima celeridad, coordinando la información con la Mutua y la autoridad laboral para minimizar el impacto administrativo de las contingencias profesionales.',
    'Archivo y Trazabilidad de Comunicaciones: Mantenemos un registro digital de todas las huellas telemáticas y justificantes de registro, proporcionando a la empresa la seguridad de que cada obligación informativa ha sido satisfecha y está debidamente documentada.',
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
                Especialistas en Gestión Telemática y Cumplimiento Administrativo
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas sabemos que la validez de un trámite laboral depende de su correcta comunicación a los organismos
                  competentes. Con más de 30 años de experiencia en la <strong>gestión de sistemas oficiales en Alcalá de Henares</strong>,
                  actuamos como el nexo técnico necesario para que cada contrato, prórroga o incidencia quede registrada con absoluta
                  exactitud en las bases de datos de la administración pública.
                </p>
                <p>
                  Gestionamos de forma íntegra la{' '}
                  <strong>
                    comunicación de contratos y copias básicas a través del sistema Contrat@ (SEPE), la tramitación de partes de accidente de
                    trabajo mediante el sistema Delt@ o CoNTA, y la gestión de certificados de empresa
                  </strong>
                  . Nuestro enfoque profesional elimina el riesgo de sanciones por defectos de forma o presentaciones fuera de plazo,
                  garantizando que la relación documental entre su empresa y el Estado sea fluida, transparente y legalmente inatacable.
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
              Solicitar soporte administrativo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

