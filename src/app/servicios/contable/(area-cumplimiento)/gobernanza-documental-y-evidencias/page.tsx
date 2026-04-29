import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gobernanza Documental y Evidencias Contables | LN Grupo Veritas',
  description:
    'Expertos en gobernanza documental y trazabilidad de evidencias contables en Alcalá de Henares. Proteja la integridad de su información financiera.',
  alternates: {
    canonical: 'https://ln-grupo-veritas.vercel.app/servicios/contable/gobernanza-documental-y-evidencias',
  },
};

export default function Page() {
  const serviceTitle = 'Gobernanza Documental y Evidencias';
  const description =
    'Sistemas de trazabilidad y custodia de soportes para la seguridad jurídica de empresas en Alcalá de Henares y Madrid. 30 años construyendo contabilidades incuestionables.';

  const metodo = [
    'Coherencia Contable-Mercantil: Verificamos que los acuerdos adoptados en actas y juntas tengan su reflejo exacto en la contabilidad, eliminando discrepancias entre la vida jurídica y la financiera de la sociedad.',
    'Orden de Soportes y Evidencias: Implementamos protocolos de clasificación y archivo que permiten localizar cualquier justificante de forma inmediata, garantizando la integridad de los Libros Oficiales durante todo su periodo de custodia legal.',
    "Preparación para Revisiones y Terceros: Actuamos como su auditor interno, revisando periódicamente que el soporte documental sea suficiente y adecuado para superar con éxito auditorías de cuentas, valoraciones de empresa o 'due diligence'.",
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
                Especialistas en Integridad de Datos y Blindaje Documental
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas sabemos que la potencia de una contabilidad reside en su capacidad probatoria. Con más de 30 años de
                  trayectoria en la <strong>gestión documental contable en Alcalá de Henares</strong>, ayudamos a las empresas a implantar un
                  sistema de gobernanza que asegure la trazabilidad total de sus operaciones, garantizando que cada registro contable esté
                  vinculado de forma inequívoca a su evidencia física o digital.
                </p>
                <p>
                  Nuestro servicio de <strong>Gobernanza Documental</strong> se centra en la coherencia y el orden de los soportes: facturas,
                  contratos, escrituras y extractos bancarios. No solo archivamos; validamos que la documentación cumpla con los requisitos de
                  fondo y forma necesarios para servir como prueba ante socios, auditores o administraciones públicas. Proporcionamos una
                  estructura de evidencias sólida que protege la reputación de la gerencia y asegura la continuidad y transparencia del negocio
                  ante cualquier proceso de revisión interna o externa.
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
              Fortalecer mi control documental
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

