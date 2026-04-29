import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Respuesta a Requerimientos de Hacienda en Alcalá | LN Grupo Veritas',
  description:
    'Gestión profesional de respuesta a requerimientos y coordinación documental ante la AEAT en Alcalá de Henares. Cumplimiento estricto de plazos y defensa técnica.',
  alternates: {
    canonical: 'https://ln-grupo-veritas.vercel.app/servicios/contable/respuesta-a-requerimientos-y-coordinacion-documental',
  },
};

export default function Page() {
  const serviceTitle = 'Respuesta a Requerimientos y Coordinación Documental';
  const description =
    'Gestión experta del flujo informativo y respuesta técnica ante notificaciones de la AEAT para empresas en Alcalá de Henares y Madrid. 30 años de eficacia administrativa.';

  const metodo = [
    'Protocolo de Respuesta Inmediata: Activamos un equipo dedicado en cuanto se recibe la notificación, garantizando el cumplimiento de los plazos perentorios y evitando recargos por extemporaneidad.',
    'Curación y Filtro Documental: Coordinamos la selección de pruebas, asegurando que la documentación entregada sea pertinente, suficiente y que no contenga incoherencias que puedan generar dudas al inspector.',
    'Redacción Técnica de Escritos: Elaboramos las alegaciones y escritos de comparecencia con un lenguaje administrativo preciso, fundamentando jurídicamente las posiciones de la empresa para cerrar el expediente con éxito.',
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
                Especialistas en Gestión de Notificaciones y Defensa Técnica
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas sabemos que un requerimiento de la Agencia Tributaria no admite esperas. El plazo estándar de 10 días
                  hábiles para aportar documentación es un reto de gestión que puede comprometer la operativa de cualquier empresa. Con más de
                  30 años de experiencia en la <strong>contestación de requerimientos en Alcalá de Henares</strong>, tomamos el mando de la
                  situación desde el minuto uno, coordinando la recopilación de evidencias y redactando las alegaciones necesarias para que la
                  respuesta sea técnica, coherente y, sobre todo, protectora de sus intereses.
                </p>
                <p>
                  Nuestro servicio de <strong>Coordinación Documental</strong> va más allá del simple envío de archivos. Analizamos la petición
                  de Hacienda y cruzamos la información solicitada con su realidad contable para evitar que una respuesta precipitada abra
                  nuevas líneas de inspección. Gestionamos la presentación telemática mediante CSV y firma digital, custodiando los
                  justificantes de presentación y asegurando que cada factura, contrato o extracto aportado fortalezca la posición de la
                  empresa ante la administración tributaria.
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
              Gestionar mi requerimiento
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

