import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Abogados Juicios Rápidos y Asistencia al Detenido en Alcalá | LN Grupo Veritas',
  description:
    'Asistencia letrada inmediata en juicios rápidos, diligencias urgentes y asistencia al detenido en Alcalá de Henares. Más de 30 años de defensa penal de urgencia.',
  alternates: {
    canonical:
      'https://ln-grupo-veritas.vercel.app/servicios/juridico/asistencia-letrada-en-diligencias-urgentes',
  },
};

export default function Page() {
  const serviceTitle = 'Asistencia Letrada en Diligencias Urgentes';
  const description =
    'Defensa penal inmediata y representación técnica en juicios rápidos y asistencia al detenido en Alcalá de Henares y Madrid. 30 años de respuesta urgente con el máximo rigor procesal.';

  const metodo = [
    'Asistencia inmediata en dependencias policiales o judiciales, analizando el atestado y las pruebas de cargo para diseñar una respuesta técnica que evite medidas cautelares innecesarias.',
    'Negociación estratégica con el Ministerio Fiscal en procedimientos de juicio rápido, evaluando la viabilidad de acuerdos que garanticen la resolución más ágil y menos gravosa para el cliente.',
    'Presencia y defensa activa en la práctica de pruebas urgentes y declaraciones ante el juez de instrucción, manteniendo un control estricto sobre el cumplimiento de todas las garantías procesales.',
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
                Especialistas en Juicios Rápidos y Defensa Penal de Urgencia
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas entendemos que en el ámbito penal, las primeras horas son decisivas para el
                  futuro de cualquier procedimiento. Como{' '}
                  <strong>abogados especialistas en diligencias urgentes en Alcalá de Henares</strong>,
                  proporcionamos una intervención letrada inmediata y experta ante detenciones o citaciones
                  judiciales imprevistas, asegurando que su estrategia de defensa comience con la máxima solidez
                  desde el minuto uno.
                </p>
                <p>
                  Gestionamos con total diligencia{' '}
                  <strong>
                    juicios rápidos por delitos de seguridad vial, alcoholemias, hurtos y violencia doméstica
                  </strong>
                  , así como la asistencia ante el Juzgado de Guardia. Nuestro enfoque se centra en la protección
                  de sus derechos fundamentales, asesorando sobre la conveniencia de declarar o guardar silencio y
                  buscando, cuando la ley lo permite, conformidades beneficiosas que reduzcan sustancialmente las
                  penas o el archivo directo de las actuaciones en fase de guardia.
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
              Solicitar asistencia urgente
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

