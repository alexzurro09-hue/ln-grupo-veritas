import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Finiquitos, Indemnizaciones y Liquidaciones en Alcalá | LN Grupo Veritas',
  description:
    'Especialistas en el cálculo preciso de finiquitos, indemnizaciones por despido y liquidaciones de haberes en Alcalá de Henares. Evite errores y reclamaciones.',
  alternates: {
    canonical: 'https://ln-grupo-veritas.vercel.app/servicios/laboral/finiquitos-indemnizaciones-y-liquidaciones',
  },
};

export default function Page() {
  const serviceTitle = 'Finiquitos, Indemnizaciones y Liquidaciones';
  const description =
    'Cálculo exacto y transparente de las obligaciones económicas al cierre de la relación laboral para empresas en Alcalá de Henares y Madrid. 30 años de rigor numérico.';

  const metodo = [
    'Exactitud en el Salario Regulador: Determinamos con precisión la base de cálculo de la indemnización, incluyendo todos los conceptos computables y evitando infravaloraciones que den lugar a reclamaciones o sobrecostes innecesarios.',
    'Actualización Normativa Permanente: Aplicamos los topes legales y las fórmulas de cálculo vigentes tras las últimas reformas laborales, asegurando que cada indemnización sea legalmente inatacable.',
    'Documentación de Soporte y Cierre: Elaboramos el recibo de finiquito con las cláusulas de garantía necesarias para asegurar que, tras la firma, la relación laboral quede definitivamente zanjada sin flecos económicos pendientes.',
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
                Especialistas en Liquidación de Haberes y Cálculo de Indemnizaciones
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas sabemos que el cierre económico de una relación laboral no admite márgenes de error. Con más de 30 años
                  de trayectoria en el <strong>cálculo de finiquitos en Alcalá de Henares</strong>, proporcionamos a la empresa la seguridad
                  de que cada concepto liquidado —desde el salario del último mes hasta la parte proporcional de las pagas extraordinarias— se
                  ajusta estrictamente a la legalidad y al Convenio Colectivo aplicable.
                </p>
                <p>
                  Gestionamos de forma íntegra el{' '}
                  <strong>
                    cálculo de indemnizaciones por despido (objetivo, improcedente o por fin de contrato), la liquidación de vacaciones no
                    disfrutadas y el abono de atrasos o variables pendientes
                  </strong>
                  . Nuestro enfoque se basa en la transparencia total: facilitamos desgloses detallados que permiten al trabajador comprender
                  su liquidación, minimizando la litigiosidad y garantizando que el documento de finiquito cumpla con su función liberatoria
                  para la empresa.
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
              Solicitar cálculo de finiquito
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

