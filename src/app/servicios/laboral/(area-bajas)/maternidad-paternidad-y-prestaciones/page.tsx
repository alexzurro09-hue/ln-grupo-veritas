import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gestión de Maternidad, Paternidad y Prestaciones en Alcalá | LN Grupo Veritas',
  description:
    'Especialistas en la tramitación de prestaciones por nacimiento, cuidado de menor y riesgos durante el embarazo en Alcalá de Henares. 30 años de rigor y soporte laboral.',
  alternates: {
    canonical: 'https://ln-grupo-veritas.vercel.app/servicios/laboral/maternidad-paternidad-y-prestaciones',
  },
};

export default function Page() {
  const serviceTitle = 'Maternidad / Paternidad y Prestaciones';
  const description =
    'Gestión técnica de periodos de descanso y prestaciones de la Seguridad Social para empresas y trabajadores en Alcalá de Henares y Madrid. 30 años asegurando su bienestar y legalidad.';

  const metodo = [
    'Tramitación Ágil de Certificados: Enviamos los certificados de empresa al INSS de forma inmediata tras el nacimiento, facilitando que el proceso de pago directo al trabajador se inicie sin retrasos administrativos.',
    'Asesoramiento en Calendarios de Descanso: Planificamos junto a la empresa y el empleado los periodos de disfrute de la prestación, ya sea de forma ininterrumpida o fraccionada, asegurando el cumplimiento de las 16 semanas legales y sus particularidades.',
    'Gestión de Riesgos y Lactancia: Asistimos en la solicitud de prestaciones por riesgo durante el embarazo cuando el puesto de trabajo supone un peligro para la salud, coordinando la documentación con la Mutua y el INSS para proteger la maternidad.',
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
                Especialistas en la Gestión de Prestaciones por Nacimiento y Cuidado de Menor
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas entendemos que los periodos de maternidad y paternidad son momentos clave que requieren una gestión
                  administrativa impecable para garantizar la conciliación y la seguridad económica. Con más de 30 años de experiencia como{' '}
                  <strong>especialistas en prestaciones de la Seguridad Social en Alcalá de Henares</strong>, nos encargamos de que la
                  transición hacia el descanso por nacimiento o adopción sea fluida, técnica y libre de incidencias para todas las partes.
                </p>
                <p>
                  Gestionamos de forma integral la{' '}
                  <strong>
                    tramitación de certificados de empresa para el INSS, la suspensión del contrato por nacimiento y cuidado de menor, y las
                    prestaciones por riesgo durante el embarazo o la lactancia natural
                  </strong>
                  . Nuestro enfoque profesional asegura la correcta comunicación telemática de los periodos de descanso (obligatorios y
                  voluntarios), la gestión de las cotizaciones durante la suspensión y el asesoramiento en el ejercicio de los derechos de
                  conciliación, garantizando que el trabajador acceda a su prestación de forma puntual y la empresa cumpla rigurosamente con
                  la normativa vigente.
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
              Consultar trámites de maternidad
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

