import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Preparación de Documentación y Trazabilidad Laboral | LN Grupo Veritas',
  description:
    'Blindaje preventivo ante la Inspección de Trabajo en Alcalá de Henares. Auditoría y trazabilidad documental para su seguridad jurídica. 30 años de rigor.',
  alternates: {
    canonical: 'https://ln-grupo-veritas.vercel.app/servicios/laboral/preparacion-de-documentacion-y-trazabilidad',
  },
};

export default function Page() {
  const serviceTitle = 'Preparación de Documentación y Trazabilidad';
  const description =
    'Auditoría preventiva y organización del historial laboral para empresas en Alcalá de Henares y Madrid. 30 años asegurando que su documentación sea su mejor defensa.';

  const metodo = [
    'Auditoría de Registro de Jornada: Verificamos que sus sistemas de control horario cumplan con la normativa vigente y reflejen la realidad de la plantilla, eliminando el riesgo de multas por irregularidades en horas extraordinarias.',
    'Organización de Archivo de Trazabilidad: Diseñamos protocolos de custodia documental que permiten localizar y presentar de forma inmediata contratos, justificantes de pago y comunicaciones oficiales requeridas por la inspección.',
    'Detección Previa de Contingencias: Identificamos posibles debilidades en el encuadramiento de trabajadores o en la modalidad contractual utilizada, proponiendo medidas correctoras antes de que se conviertan en foco de una fiscalización.',
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
                Especialistas en Blindaje Documental y Auditoría Laboral Preventiva
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas sabemos que una inspección de trabajo exitosa comienza meses antes de la visita del actuario. Con más de
                  30 años de experiencia en la <strong>preparación para inspecciones en Alcalá de Henares</strong>, actuamos como auditores
                  internos de su empresa, asegurando que cada contrato, registro de jornada y nómina esté perfectamente organizado y respaldado
                  por una trazabilidad documental inatacable.
                </p>
                <p>
                  Nuestro servicio se centra en la{' '}
                  <strong>
                    revisión y puesta a punto de los registros obligatorios: desde el control horario y planes de igualdad hasta la
                    documentación de prevención de riesgos y contratos de formación
                  </strong>
                  . Implementamos sistemas de trazabilidad que vinculan la realidad operativa con la administrativa, garantizando que, ante
                  cualquier requerimiento, la empresa pueda presentar una &apos;carga de la prueba&apos; sólida que cierre el paso a
                  interpretaciones perjudiciales o sanciones por falta de justificación formal.
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
              Solicitar auditoría preventiva
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

