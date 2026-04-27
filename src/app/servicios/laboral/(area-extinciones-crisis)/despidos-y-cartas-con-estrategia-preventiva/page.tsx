import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Despidos y Estrategia Preventiva en Alcalá | LN Grupo Veritas',
  description:
    'Especialistas en la redacción de cartas de despido y estrategia legal preventiva en Alcalá de Henares. Evite la improcedencia con 30 años de experiencia.',
  alternates: {
    canonical: 'https://ln-grupo-veritas.vercel.app/servicios/laboral/despidos-y-cartas-con-estrategia-preventiva',
  },
};

export default function Page() {
  const serviceTitle = 'Despidos y Cartas con Estrategia Preventiva';
  const description =
    'Blindaje jurídico y rigor formal en la extinción de contratos para empresas en Alcalá de Henares y Madrid. 30 años protegiendo la viabilidad de su decisión empresarial.';

  const metodo = [
    'Ingeniería Documental de la Causa: Ayudamos a la empresa a recopilar las pruebas (informes, amonestaciones previas, datos económicos) que sustentarán el despido, garantizando que el relato de la carta sea coherente y robusto.',
    'Rigor Formal Absoluto: Controlamos estrictamente los requisitos de forma exigidos por el Estatuto de los Trabajadores y el Convenio Colectivo, evitando que defectos evitables invaliden la extinción del contrato.',
    'Asesoramiento en el Acto de Comunicación: Orientamos a la dirección sobre cómo proceder en el momento de la entrega de la carta, gestionando posibles escenarios de conflicto o negativa de firma con testigos y protocolos legales.',
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
                Especialistas en Extinciones Contractuales y Defensa de la Procedencia
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas sabemos que un despido es la decisión más difícil y arriesgada que toma una empresa. Con más de 30 años
                  de trayectoria como <strong>expertos en despidos en Alcalá de Henares</strong>, nuestro enfoque no empieza con la entrega de
                  la carta, sino mucho antes. Asesoramos en la construcción de la estrategia preventiva necesaria para que la extinción del
                  contrato cuente con el respaldo probatorio suficiente ante una posible impugnación judicial.
                </p>
                <p>
                  Gestionamos de forma integral la{' '}
                  <strong>
                    redacción de cartas de despido disciplinario, objetivo o por causas ETOP (Económicas, Técnicas, Organizativas o de
                    Producción)
                  </strong>
                  . Supervisamos cada detalle formal —desde la entrega de la comunicación hasta el cumplimiento de los plazos de preaviso—
                  asegurando que la causa alegada sea sólida, veraz y legalmente inatacable, minimizando el riesgo de que un error de forma
                  convierta una decisión necesaria en un coste imprevisto por improcedencia o nulidad.
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
              Solicitar asesoramiento estratégico
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

