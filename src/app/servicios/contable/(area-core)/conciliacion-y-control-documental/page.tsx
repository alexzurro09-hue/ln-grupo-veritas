import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Conciliación Bancaria y Control Documental en Alcalá | LN Grupo Veritas',
  description:
    'Especialistas en conciliación bancaria y control documental contable en Alcalá de Henares. Aseguramos el orden, el criterio y la consistencia de su información.',
  alternates: {
    canonical: 'https://lngrupoveritas.es/servicios/contable/conciliacion-y-control-documental',
  },
};

export default function Page() {
  const serviceTitle = 'Conciliación y Control Documental (Criterio y Consistencia)';
  const description =
    'Verificación exhaustiva de soportes y movimientos financieros para empresas en Alcalá de Henares y Madrid. 30 años garantizando el orden absoluto en su contabilidad.';

  const metodo = [
    'Conciliación Bancaria Inteligente: Cruzamos sus movimientos de cuenta con los registros contables de forma sistemática, resolviendo discrepancias y asegurando que el saldo contable coincida exactamente con la realidad bancaria.',
    'Control de Soporte Documental: Vigilamos que cada gasto deducible cuente con la factura o documento equivalente legalmente admitido, evitando que fallos de archivo pongan en riesgo la deducibilidad de sus impuestos.',
    'Unidad de Criterio Contable: Aplicamos las normas del Plan General Contable de forma consistente en el tiempo, permitiendo que sus estados financieros sean comparables y útiles para analizar la evolución real de su negocio.',
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
                Especialistas en Integridad Contable y Gestión de Soportes
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas sabemos que una contabilidad sin control documental es una contabilidad vulnerable. Con más de 30 años de
                  trayectoria en la <strong>conciliación contable en Alcalá de Henares</strong>, nuestro equipo se encarga de que cada céntimo
                  que entra o sale de su caja o bancos esté debidamente justificado por su soporte documental correspondiente, aplicando un
                  criterio técnico uniforme que garantiza la consistencia de sus libros oficiales.
                </p>
                <p>
                  Gestionamos de forma íntegra la{' '}
                  <strong>conciliación bancaria diaria o mensual, el punteo de extractos y la verificación de facturas recibidas y emitidas</strong>.
                  Nuestro enfoque se basa en la &apos;tolerancia cero&apos; al error: identificamos partidas pendientes, detectamos cobros o pagos
                  duplicados y aseguramos que la clasificación contable siga siempre el mismo patrón técnico. Esto no solo facilita la gestión de
                  tesorería, sino que constituye el mejor escudo preventivo ante posibles comprobaciones de la Agencia Tributaria.
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
              Solicitar auditoría de control
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

