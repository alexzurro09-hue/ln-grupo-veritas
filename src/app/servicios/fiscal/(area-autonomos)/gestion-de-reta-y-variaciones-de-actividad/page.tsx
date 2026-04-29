import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gestión de RETA y Variaciones de Actividad en Alcalá | LN Grupo Veritas',
  description:
    'Expertos en gestión de la Seguridad Social para autónomos (RETA). Cambio de bases de cotización por ingresos reales y variaciones de actividad en Alcalá de Henares.',
  alternates: {
    canonical:
      'https://lngrupoveritas.es/servicios/fiscal/gestion-de-reta-y-variaciones-de-actividad',
  },
};

export default function Page() {
  const serviceTitle = 'Gestión de RETA y Variaciones de Actividad';
  const description =
    'Asesoramiento estratégico y gestión técnica de su relación con la Seguridad Social en Alcalá de Henares y Madrid. 30 años optimizando la protección social del trabajador autónomo.';

  const metodo = [
    'Seguimiento de Ingresos Reales: Realizamos proyecciones trimestrales de su rendimiento neto para ajustar su tramo de cotización en los plazos legales, evitando pagos en exceso o deudas futuras con la Seguridad Social.',
    'Gestión Ágil de Variaciones: Tramitamos en tiempo real cualquier cambio en su actividad (domicilio, sector, pluriempleo o bases), asegurando que la información de Hacienda y Seguridad Social sea siempre coincidente.',
    'Asesoramiento en Coberturas y Prestaciones: Evaluamos su situación personal para recomendarle las coberturas adicionales necesarias y le asistimos en la solicitud de prestaciones por cese de actividad o bajas laborales, defendiendo sus derechos ante la administración.',
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
                <Link href="/servicios/fiscal" className="hover:text-veritas-red transition-colors">
                  Fiscal
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
                Especialistas en la Gestión de Cotización y Protección del Autónomo
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas contamos con una trayectoria de más de 30 años como{' '}
                  <strong>especialistas en la gestión del RETA en Alcalá de Henares</strong>. El nuevo sistema de
                  cotización basado en ingresos reales exige un seguimiento constante y una previsión técnica
                  precisa para evitar regularizaciones imprevistas y garantizar que su base de cotización se
                  ajuste a su capacidad económica real.
                </p>
                <p>
                  Gestionamos de forma integral las{' '}
                  <strong>
                    variaciones de datos ante la Tesorería General de la Seguridad Social (TGSS), cambios en las
                    bases de cotización, altas y bajas en actividades secundarias, y la gestión de la incapacidad
                    temporal o cese de actividad
                  </strong>
                  . Nuestro enfoque profesional asegura que cada cambio en su trayectoria profesional quede
                  correctamente reflejado en su expediente administrativo, maximizando sus coberturas sociales
                  —como jubilación o incapacidad— mientras optimizamos su flujo de caja mensual mediante una
                  planificación correcta de sus cuotas.
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
              Solicitar revisión de mi cuota
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

