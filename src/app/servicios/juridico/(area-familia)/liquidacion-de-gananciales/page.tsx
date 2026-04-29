import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Liquidación de Gananciales en Alcalá de Henares | LN Grupo Veritas',
  description:
    'Especialistas en liquidación de sociedades de gananciales y reparto de patrimonio matrimonial en Alcalá de Henares. Asesoramiento jurídico y fiscal experto.',
  alternates: {
    canonical: 'https://lngrupoveritas.es/servicios/juridico/liquidacion-de-gananciales',
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
  const serviceTitle = 'Liquidación de gananciales';
  const description =
    'Gestión técnica del patrimonio matrimonial para un reparto equitativo, seguro y fiscalmente eficiente en Alcalá de Henares. 30 años de rigor patrimonial.';

  const metodo = [
    'Inventario Detallado de Activos y Pasivos: Identificamos y valoramos de forma técnica todos los bienes (inmuebles, vehículos, inversiones) y deudas (hipotecas, préstamos) acumulados durante el matrimonio, asegurando la transparencia total del caudal ganancial.',
    'Optimización Fiscal del Reparto: Analizamos las implicaciones en el ITP/AJD e IRPF de cada propuesta de división, diseñando estrategias que aprovechen las exenciones legales para evitar costes impositivos superfluos durante la adjudicación de bienes.',
    'Negociación de Cuaderno Particional: Actuamos como mediadores técnicos para alcanzar un acuerdo equilibrado que evite la vía judicial, redactando documentos de liquidación robustos que queden perfectamente elevados a público e inscritos en los registros correspondientes.',
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
                Especialistas en Inventario, Valoración y Reparto de Activos Matrimoniales
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas sabemos que la liquidación de la sociedad de gananciales es uno de los procesos más complejos tras una
                  ruptura, ya que entrelaza los sentimientos con los intereses económicos más críticos. Con más de 30 años de experiencia en la{' '}
                  <strong>gestión patrimonial en Alcalá de Henares</strong>, ayudamos a nuestros clientes a desenredar la titularidad de sus
                  bienes y deudas, garantizando que el inventario sea completo, las valoraciones sean reales y el reparto final respete
                  escrupulosamente la cuota de participación de cada cónyuge.
                </p>
                <p>
                  Abordamos la <strong>formación del inventario de activos y pasivos</strong> con una visión multidisciplinar, integrando el
                  análisis jurídico con nuestra experiencia contable y fiscal. Nuestra labor se centra en la elaboración de cuadernos
                  particionales que no solo resuelvan la titularidad de viviendas, cuentas o empresas familiares, sino que lo hagan minimizando
                  el impacto tributario del reparto. Buscamos soluciones que eviten excesos de adjudicación innecesarios y aseguren que la
                  transición hacia la independencia financiera de nuestros clientes sea sólida y libre de contingencias futuras con la
                  administración.
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
              Optimizar mi reparto patrimonial
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

