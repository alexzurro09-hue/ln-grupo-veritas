import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Declaraciones Informativas y Censales en Alcalá | LN Grupo Veritas',
  description:
    'Expertos en la gestión de modelos informativos (347, 180, 190) y altas/variaciones censales en Alcalá de Henares. Evite errores de cruce de datos con Hacienda.',
  alternates: {
    canonical:
      'https://ln-grupo-veritas.vercel.app/servicios/fiscal/declaraciones-informativas-y-censales',
  },
};

export default function Page() {
  const serviceTitle = 'Declaraciones Informativas y Censales';
  const description =
    'Gestión precisa de las obligaciones administrativas y censales ante la AEAT en Alcalá de Henares y Madrid. 30 años garantizando la coherencia de su información tributaria.';

  const metodo = [
    'Conciliación Previa de Datos: Verificamos la información con proveedores y clientes antes de la presentación del Modelo 347, evitando discrepancias que suelen ser el detonante de comprobaciones tributarias.',
    'Mantenimiento Censal Permanente: Gestionamos cualquier cambio en su estructura empresarial (domicilio, epígrafes del IAE, obligaciones de retención) de forma inmediata para que su expediente administrativo sea siempre el fiel reflejo de su realidad operativa.',
    'Supervisión de Calendario Informativo: Implementamos un control estricto de plazos para todas las declaraciones que, aunque no conlleven pago, son de obligado cumplimiento, previniendo sanciones por presentación fuera de plazo o de forma incompleta.',
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
                Especialistas en Cumplimiento Administrativo y Control de Información Tributaria
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas sabemos que la transparencia informativa es la mejor defensa ante la Agencia
                  Tributaria. Como{' '}
                  <strong>
                    abogados y asesores especialistas en declaraciones informativas en Alcalá de Henares
                  </strong>
                  , nos encargamos de que toda la información que su empresa proyecta hacia la Administración sea
                  coherente, exacta y puntual, eliminando los riesgos derivados de discrepancias en los cruces de
                  datos oficiales.
                </p>
                <p>
                  Gestionamos con rigor técnico los{' '}
                  <strong>
                    modelos 036 y 037 de alta y variación censal, así como las declaraciones anuales informativas
                    (Modelo 347 de operaciones con terceros, 180 y 190 de resúmenes de retenciones, y 184 de
                    entidades en atribución de rentas)
                  </strong>
                  . Nuestro enfoque profesional asegura que cada hito del calendario fiscal sea cubierto con
                  precisión, vigilando especialmente la concordancia entre las declaraciones periódicas y los
                  resúmenes anuales para blindar su posición ante posibles requerimientos de información por parte
                  de la AEAT.
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
              Solicitar revisión de obligaciones
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

