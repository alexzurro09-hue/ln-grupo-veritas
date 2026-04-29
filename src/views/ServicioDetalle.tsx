import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { getCategory, getSubService } from '../content/services';

function titleCaseFromSlug(slug: string) {
  return slug
    .split('-')
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

export default function ServicioDetalle() {
  const { category, service } = useParams();
  const categoryKey = category ?? '';
  const serviceSlug = service ?? '';

  const categoryData = getCategory(categoryKey);
  const sub = getSubService(categoryKey, serviceSlug);

  const serviceTitle = sub?.title ?? titleCaseFromSlug(serviceSlug);
  const categoryLabel = categoryData?.label ?? titleCaseFromSlug(categoryKey);

  const isContratosReclamaciones = categoryKey === 'juridico' && serviceSlug === 'contratos-y-reclamaciones';
  const pageTitle = isContratosReclamaciones
    ? 'Abogados Contratos y Reclamaciones en Alcalá de Henares | LN Grupo Veritas'
    : `Especialistas en ${serviceTitle} | LN Grupo Veritas`;
  const description = isContratosReclamaciones
    ? 'Especialistas en redacción de contratos, reclamaciones de cantidad e incumplimientos contractuales en Alcalá de Henares y Madrid. Más de 30 años de experiencia legal.'
    : sub?.summary ??
      `Asesoramiento especializado en ${serviceTitle}. Rigor técnico, método y acompañamiento profesional en LN Grupo Veritas.`;
  const canonicalHref = isContratosReclamaciones
    ? 'https://lngrupoveritas.es/servicios/juridico/contratos-y-reclamaciones'
    : null;

  if (!categoryKey || !serviceSlug) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        {canonicalHref ? <link rel="canonical" href={canonicalHref} /> : null}
      </Helmet>

      <div className="bg-[#f9f7f2] border-b border-veritas-green/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-12">
          <nav className="text-[10px] uppercase tracking-[0.32em] text-veritas-green/70 font-bold">
            <ol className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <li>
                <Link to="/" className="hover:text-veritas-red transition-colors">
                  Inicio
                </Link>
              </li>
              <li className="opacity-60">›</li>
              <li className="opacity-80">
                <span>Servicios</span>
              </li>
              <li className="opacity-60">›</li>
              <li>
                <Link to={`/servicios/${categoryKey}`} className="hover:text-veritas-red transition-colors">
                  {categoryLabel}
                </Link>
              </li>
              <li className="opacity-60">›</li>
              <li className="text-veritas-green">{serviceTitle}</li>
            </ol>
          </nav>

          <h1 className="mt-4 font-serif text-3xl md:text-4xl font-bold tracking-tight text-veritas-green">
            {serviceTitle}
          </h1>
          <p className="mt-4 text-[14px] md:text-[15px] leading-relaxed text-[#3b3b3b] font-sans max-w-3xl">
            {description}
          </p>
        </div>
      </div>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-14">
          <div className="max-w-3xl">
            {isContratosReclamaciones ? (
              <div className="mb-10">
                <h2 className="font-serif text-[18px] md:text-[20px] font-bold text-veritas-green">
                  Expertos en Redacción de Contratos y Reclamación de Deudas
                </h2>
                <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                  <p>
                    En LN Grupo Veritas contamos con más de 30 años de experiencia como{' '}
                    <strong>abogados especialistas en contratos y reclamaciones en Alcalá de Henares</strong>.
                    La seguridad jurídica de particulares y empresas depende de una redacción contractual técnica y
                    blindada ante posibles contingencias.
                  </p>
                  <p>
                    Gestionamos con éxito{' '}
                    <strong>
                      reclamaciones de cantidad, incumplimientos de contrato, resoluciones contractuales y
                      responsabilidad civil
                    </strong>
                    . Nuestro enfoque se centra en la protección de sus intereses, ya sea mediante la negociación
                    extrajudicial o la defensa técnica en procedimientos judiciales, garantizando siempre la máxima
                    solvencia en la defensa de sus derechos.
                  </p>
                </div>
              </div>
            ) : null}

            <h2 className="font-serif text-[18px] md:text-[20px] font-bold text-veritas-green">Método y rigor</h2>
            <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-veritas-gray font-sans">
              {(sub?.body ?? [
                'Escuchamos el caso, analizamos la documentación y definimos objetivos realistas y medibles.',
                'Estructuramos una estrategia jurídica clara: acciones, plazos, riesgos y alternativas.',
                'Ejecutamos con precisión técnica, cuidando la prueba y la comunicación para asegurar decisiones informadas.',
              ]).map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <Link
              to="/contacto"
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

