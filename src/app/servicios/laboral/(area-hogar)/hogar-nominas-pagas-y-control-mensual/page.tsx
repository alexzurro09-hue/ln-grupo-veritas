import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gestión de Nóminas y Pagas de Empleados de Hogar | LN Grupo Veritas',
  description:
    'Gestión mensual de nóminas, pagas extras y recibos de Seguridad Social para empleadores de hogar en Alcalá de Henares. Evite conflictos con un control profesional.',
  alternates: {
    canonical: 'https://ln-grupo-veritas.vercel.app/servicios/laboral/hogar-nominas-pagas-y-control-mensual',
  },
};

export default function Page() {
  const serviceTitle = 'Nóminas, Pagas y Control Mensual';
  const description =
    'Elaboración de recibos de salarios y supervisión de cuotas para familias empleadoras en Alcalá de Henares y Madrid. 30 años aportando claridad a su economía doméstica.';

  const metodo = [
    'Emisión de Recibos Oficiales: Generamos nóminas claras y legales mensuales, desglosando salario, retribuciones en especie (si las hay) y descuentos de Seguridad Social del trabajador.',
    'Cálculo de Pagas y Vacaciones: Gestionamos el devengo de las pagas extraordinarias y el control de los días de descanso, asegurando que la liquidación anual sea exacta y conforme a ley.',
    'Conciliación de Cuotas (TGSS): Revisamos mensualmente que el cargo de la Seguridad Social en su cuenta bancaria sea el correcto según el tramo de cotización, gestionando reclamaciones en caso de errores de la administración.',
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
                Control Profesional de Salarios y Recibos en el Ámbito Familiar
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas sabemos que un recibo de salario bien confeccionado es la mejor garantía de paz en el hogar. Con más de
                  30 años de experiencia en la <strong>gestión mensual de empleados de hogar en Alcalá de Henares</strong>, proporcionamos a
                  las familias los documentos legales necesarios para justificar cada pago, asegurando que tanto el salario base como los
                  complementos o las pagas extraordinarias queden debidamente registrados.
                </p>
                <p>
                  Nos encargamos de la{' '}
                  <strong>
                    confección mensual de las nóminas, el cálculo de las pagas extras y la supervisión de los recibos de liquidación de
                    cotizaciones de la Seguridad Social
                  </strong>
                  . Nuestro servicio elimina la incertidumbre sobre cuánto pagar y bajo qué conceptos, vigilando que el cargo bancario de la
                  Tesorería coincida con lo establecido y proporcionando un histórico de pagos que protege al empleador ante cualquier futura
                  reclamación de cantidad o malentendido sobre haberes percibidos.
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
              Solicitar gestión mensual
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

