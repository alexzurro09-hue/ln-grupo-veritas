import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Abogados de Divorcios y Separaciones en Alcalá | LN Grupo Veritas',
  description:
    'Especialistas en divorcios de mutuo acuerdo y contenciosos en Alcalá de Henares. Protegemos sus intereses y los de su familia con 30 años de experiencia jurídica.',
  alternates: {
    canonical: 'https://ln-grupo-veritas.vercel.app/servicios/juridico/divorcios',
  },
};

function ActionRow({ href, children }: { href?: string; children: React.ReactNode }) {
  const className =
    'group flex items-center justify-between gap-4 py-3 px-4 rounded-none hover:bg-stone-100/50 transition-all duration-200';

  const content = (
    <>
      <span className="text-[13px] leading-relaxed text-[#333] font-sans transition-transform duration-200 group-hover:translate-x-1">
        {children}
      </span>
      <ChevronRight size={16} className="shrink-0 text-stone-400 transition-colors duration-200 group-hover:text-veritas-red" />
    </>
  );

  if (!href) return <div className={className}>{content}</div>;

  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}

export default function Page() {
  const serviceTitle = 'Divorcios y separaciones';
  const description =
    'Gestión técnica y humana de procesos de ruptura matrimonial en Alcalá de Henares y Madrid. 30 años de experiencia en la resolución de crisis familiares.';

  const metodo = [
    'Divorcio de Mutuo Acuerdo: Fomentamos la vía del diálogo para alcanzar acuerdos duraderos, redactando convenios reguladores que garanticen la seguridad jurídica de ambos cónyuges y agilicen la resolución judicial.',
    'Defensa en Procedimientos Contenciosos: Cuando el acuerdo no es posible, actuamos con firmeza ante los juzgados de familia, defendiendo sus intereses con una estrategia procesal sólida basada en pruebas contundentes.',
    'Planificación de Medidas Provisionales: Gestionamos la solicitud de medidas urgentes para regular la situación familiar y económica desde el inicio del proceso, evitando situaciones de desamparo o indefensión durante la tramitación.',
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
                <Link href="/servicios/juridico" className="hover:text-veritas-red transition-colors">
                  Jurídico
                </Link>
              </li>
              <li className="opacity-60">›</li>
              <li className="text-veritas-green capitalize">{serviceTitle}</li>
            </ol>
          </nav>

          <h1 className="mt-2 font-serif text-3xl md:text-4xl font-bold tracking-tight text-veritas-green capitalize">
            {serviceTitle}
          </h1>
          <p className="mt-3 text-[14px] md:text-[15px] leading-relaxed text-[#3b3b3b] font-sans max-w-3xl">{description}</p>
        </div>
      </div>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-14">
          <div className="max-w-3xl">
            <div className="mb-10">
              <h2 className="font-serif text-[18px] md:text-[20px] font-bold text-veritas-green capitalize">
                Especialistas en Derecho Matrimonial y Resolución de Crisis Familiares
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas entendemos que un divorcio no es solo un trámite legal, sino un cambio de vida que requiere una gestión
                  equilibrada entre el rigor jurídico y la sensibilidad humana. Con más de 30 años de experiencia como{' '}
                  <strong>abogados de familia en Alcalá de Henares</strong>, asesoramos a nuestros clientes en la toma de decisiones críticas,
                  buscando siempre soluciones que minimicen el conflicto y protejan la estabilidad emocional y económica de todas las partes
                  implicadas.
                </p>
                <p>
                  Abordamos procesos tanto de <strong>mutuo acuerdo como contenciosos</strong>, especializándonos en la redacción de convenios
                  reguladores robustos que eviten problemas futuros. Nuestra labor se centra en garantizar una defensa firme de sus derechos, ya
                  sea en la negociación extrajudicial o ante los tribunales, proporcionando la claridad necesaria para resolver cuestiones de
                  custodia, uso de la vivienda y equilibrio patrimonial con la máxima profesionalidad y discreción.
                </p>
              </div>
            </div>

            <h2 className="font-serif text-[18px] md:text-[20px] font-bold text-veritas-green capitalize">Método y rigor</h2>
            <ul className="mt-6 list-none divide-y divide-stone-100">
              {metodo.map((p) => (
                <li key={p}>
                  <ActionRow>{p}</ActionRow>
                </li>
              ))}
            </ul>

            <Link
              href="/contacto"
              className="mt-10 inline-flex items-center justify-center bg-veritas-green text-white py-4 px-6 text-[11px] uppercase tracking-[0.25em] font-bold hover:bg-veritas-red transition-all duration-300 ease-in-out cursor-pointer rounded-none border border-white/10"
            >
              Asesorarme sobre mi proceso
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

