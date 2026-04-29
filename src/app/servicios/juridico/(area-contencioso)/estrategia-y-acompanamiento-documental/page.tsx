import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Estrategia y Acompañamiento Documental en Alcalá | LN Grupo Veritas',
  description:
    'Especialistas en la preparación de expedientes administrativos, informes técnicos y estrategia documental en Alcalá de Henares. Más de 30 años de rigor procedimental.',
  alternates: {
    canonical:
      'https://lngrupoveritas.es/servicios/juridico/estrategia-y-acompanamiento-documental',
  },
};

export default function Page() {
  const serviceTitle = 'Estrategia y Acompañamiento Documental';
  const description =
    'Preparación técnica de expedientes y soporte documental estratégico para sus gestiones ante la Administración Pública en Alcalá de Henares y Madrid. 30 años de precisión en cada trámite.';

  const metodo = [
    'Auditoría documental preventiva: Revisamos minuciosamente toda la documentación antes de su entrega, asegurando que cumpla con los requisitos legales y técnicos de la convocatoria o procedimiento específico.',
    'Elaboración de informes y alegaciones: Redactamos con rigor técnico los fundamentos de hecho y de derecho que deben acompañar a su expediente, utilizando un lenguaje jurídico-administrativo de alta precisión.',
    'Custodia y control de hitos: Realizamos un seguimiento exhaustivo de la trazabilidad del expediente, garantizando que cada documento se incorpore en el momento procesal oportuno y bajo las garantías legales necesarias.',
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
                Especialistas en Ingeniería Documental y Estrategia Administrativa Preventiva
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas entendemos que el éxito frente a la Administración Pública comienza mucho
                  antes de interponer un recurso. Con más de 30 años de experiencia en{' '}
                  <strong>estrategia administrativa en Alcalá de Henares</strong>, sabemos que la construcción de
                  un expediente documental impecable es la única garantía para proteger sus intereses y evitar que
                  errores formales invaliden sus derechos.
                </p>
                <p>
                  Brindamos un{' '}
                  <strong>
                    acompañamiento integral en la elaboración de informes, preparación de alegaciones técnicas y
                    supervisión de la prueba documental
                  </strong>{' '}
                  necesaria en procedimientos administrativos complejos. Nuestro enfoque se centra en la
                  ingeniería documental: analizamos cada requerimiento, preparamos la documentación soporte y
                  diseñamos la estrategia de presentación para que su expediente sea sólido, coherente y
                  resistente ante cualquier revisión de los órganos administrativos, anticipando las posibles
                  causas de denegación y blindando su posición legal desde el origen del procedimiento.
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
              Solicitar soporte documental
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

