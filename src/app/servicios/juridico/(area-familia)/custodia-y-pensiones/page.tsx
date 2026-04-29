import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Abogados de Custodia de Hijos y Pensiones en Alcalá | LN Grupo Veritas',
  description:
    'Expertos en guardia y custodia compartida, régimen de visitas y cálculo de pensiones alimenticias en Alcalá de Henares. Protegemos el bienestar de sus hijos.',
  alternates: {
    canonical: 'https://lngrupoveritas.es/servicios/juridico/custodia-y-pensiones',
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
  const serviceTitle = 'Custodia de hijos y pensiones alimenticias';
  const description =
    'Protección del bienestar del menor y determinación técnica de medidas económicas en Alcalá de Henares y Madrid. 30 años velando por el equilibrio familiar.';

  const metodo = [
    'Plan de Parentalidad y Custodia: Elaboramos planes de parentalidad detallados que regulan la convivencia, el régimen de visitas y las comunicaciones, adaptándonos a la realidad laboral y personal de cada familia para asegurar el mejor desarrollo del menor.',
    'Cálculo Técnico de Prestaciones: Realizamos una auditoría de ingresos y necesidades para determinar pensiones alimenticias equilibradas, garantizando que el soporte económico sea proporcional y suficiente para mantener el nivel de vida de los hijos.',
    'Modificación de Medidas: Asesoramos en la actualización de sentencias cuando cambian las circunstancias económicas o personales (pérdida de empleo, cambios de residencia o variaciones en las necesidades de los hijos), asegurando que el convenio esté siempre alineado con la realidad actual.',
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
                Especialistas en Protección del Menor y Equilibrio Prestacional
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas sabemos que el bienestar de los hijos es la prioridad absoluta en cualquier proceso de ruptura. La
                  determinación de la guardia y custodia, ya sea monoparental o compartida, requiere un análisis profundo de las necesidades de
                  los menores y de las capacidades de los progenitores. Con más de 30 años de experiencia en{' '}
                  <strong>Derecho de Familia en Alcalá de Henares</strong>, trabajamos para alcanzar soluciones que garanticen un entorno
                  estable y afectuoso para los hijos, primando siempre su interés superior sobre cualquier otra consideración.
                </p>
                <p>
                  Abordamos el <strong>cálculo de las pensiones alimenticias y la distribución de gastos extraordinarios</strong> con un rigor
                  técnico excepcional, basándonos en las tablas orientativas del CGPJ y en la realidad económica efectiva de la unidad
                  familiar. Nuestro objetivo es establecer medidas que sean justas, sostenibles en el tiempo y que cubran todas las necesidades
                  de formación, salud y desarrollo de los menores, proporcionando a los padres la tranquilidad de contar con un marco legal
                  claro y equitativo que minimice futuras desavenencias.
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
              Consultar mi caso familiar
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

