import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import CookieSettingsLink from '@/src/components/CookieSettingsLink';

export const metadata: Metadata = {
  title: 'Política de cookies | LN Grupo Veritas',
  description:
    'Información técnica sobre el uso de cookies y cómo configurarlas en el sitio web oficial de LN Grupo Veritas.',
};

function InlineLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const isEmail = href.includes('@') && !href.startsWith('mailto:');
  const finalHref = isEmail ? `mailto:${href}` : href;

  return (
    <a
      href={finalHref}
      className="text-stone-700 underline underline-offset-4 decoration-stone-300 hover:text-veritas-green hover:decoration-stone-400 transition-colors rounded-none"
    >
      {children}
    </a>
  );
}

export default function Page() {
  return (
    <main className="bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        <h1 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-stone-900 capitalize mb-10">
          Política de cookies
        </h1>

        <div className="text-stone-700 leading-relaxed">
          <section aria-labelledby="que-es" className="space-y-4">
            <h2 id="que-es" className="font-bold text-stone-900 mt-0 mb-4 text-[15px] md:text-[16px]">
              ¿Qué es una cookie?
            </h2>
            <p>
              Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies
              permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de
              navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en
              que se utilice su equipo, pueden servir para reconocerlo.
            </p>
            <p>
              No obstante, estos medios sólo obtienen información relacionada con el número de páginas visitas, la ciudad
              a la que está asignada la dirección IP desde la que se accede, el número de nuevos usuarios, la frecuencia
              y reincidencia de las visitas, el tiempo de visita, el navegador o el operador o tipo de terminal desde el
              que se realiza la visita. En ningún caso se obtienen datos sobre el nombre, apellidos, dirección postal u
              otros datos análogos del usuario que se ha conectado.
            </p>
          </section>

          <section aria-labelledby="responsable" className="space-y-4 mt-10">
            <h2 id="responsable" className="font-bold text-stone-900 mt-10 mb-4 text-[15px] md:text-[16px]">
              ¿Quién es el responsable del tratamiento de las cookies en esta página web?
            </h2>
            <p>
              El titular de la web y responsable del tratamiento de las cookies aquí utilizadas, así como sus datos de
              contacto, son accesibles en el Aviso legal de esta página. Asimismo, pueden existir cookies de terceros
              distintos del titular de esta web, como se explica más abajo.
            </p>
            <p>
              Consulta el{' '}
              <Link
                href="/aviso-legal"
                className="text-stone-700 underline underline-offset-4 decoration-stone-300 hover:text-veritas-green hover:decoration-stone-400 transition-colors rounded-none"
              >
                Aviso legal
              </Link>
              .
            </p>
          </section>

          <section aria-labelledby="duracion" className="space-y-4 mt-10">
            <h2 id="duracion" className="font-bold text-stone-900 mt-10 mb-4 text-[15px] md:text-[16px]">
              ¿Durante cuánto tiempo permanecen instaladas las cookies?
            </h2>
            <p>
              Como regla general, la duración de las cookies depende de su propósito, pero en todo caso, éstas se
              conservarán durante un plazo determinado, proporcionado y limitado en relación a su finalidad, Dependiendo
              del tiempo que las cookies permanezcan instaladas en tu navegador, éstas se clasifican en cookies
              persistentes o cookies de sesión.
            </p>
          </section>

          <section aria-labelledby="tipos" className="space-y-4 mt-10">
            <h2 id="tipos" className="font-bold text-stone-900 mt-10 mb-4 text-[15px] md:text-[16px]">
              ¿Qué tipos de cookies existen?
            </h2>
            <p>
              Las cookies se clasifican en diferentes categorías dependiendo de varios factores, que se explican a
              continuación, sin embargo, es posible que una misma cookie pueda encontrarse en varias categorías.
            </p>

            <div className="space-y-6">
              <div className="space-y-2">
                <p className="font-bold text-stone-900">Cookies según duración</p>
                <p>
                  - <span className="font-bold text-stone-900">Cookies de sesión</span>: Son las cookies que caducan
                  cuando abandonas la página web, momento en que las cookies se eliminan de tu navegador. Estas cookies
                  se utilizan para vincular tus acciones en la página web durante la navegación.
                </p>
                <p>
                  - <span className="font-bold text-stone-900">Cookies persistentes</span>: Estas cookies permanecen
                  almacenadas una vez abandonas la página web, durante un periodo de tiempo más o menos prolongado, y
                  según el propósito de cada cookie. Por ejemplo, las cookies persistentes permiten al usuario recordar
                  sus preferencias para mantenerlas la próxima vez que acceda a la página web.
                </p>
              </div>

              <div className="space-y-2">
                <p className="font-bold text-stone-900">Cookies según origen</p>
                <p>
                  - <span className="font-bold text-stone-900">Cookies propias</span>: Aquellas que se envían al
                  dispositivo del Usuario desde el Sitio Web.
                </p>
                <p>
                  - <span className="font-bold text-stone-900">Cookies de terceros</span>: Aquellas que se envían al
                  dispositivo del Usuario desde servicios o proveedores externos al Sitio Web.
                </p>
              </div>

              <div className="space-y-2">
                <p className="font-bold text-stone-900">Cookies según su finalidad</p>
                <p>
                  - <span className="font-bold text-stone-900">Cookies de seguridad</span>: Las cookies de seguridad
                  ayudan a detectar actividades sospechosas o fraudulentas y garantiza y respalda la seguridad y
                  funcionalidad del Sitio Web.
                </p>
                <p>
                  - <span className="font-bold text-stone-900">Cookies de personalización o preferencias</span>: Las
                  cookies de preferencias permiten a la página web recordar información que cambia la forma en que la
                  página se comporta o el aspecto que tiene, como su idioma preferido o la región en la que te se
                  encuentra.
                </p>
                <p>
                  - <span className="font-bold text-stone-900">Cookies de análisis o estadísticas</span>: Las cookies de
                  análisis permiten conocer los hábitos de navegación y comportamiento del Usuario respecto al Sitio
                  Web, para que éste pueda optimizar el servicio de forma eficiente.
                </p>
                <p>
                  - <span className="font-bold text-stone-900">Publicitarias, de publicidad compartimental</span>: Las
                  cookies de marketing se utilizan para rastrear a los visitantes de la página web. La finalidad es
                  mostrar anuncios “personalizados” para el usuario individual y, por lo tanto, más útiles para los
                  editores y terceros anunciantes.
                </p>
              </div>
            </div>
          </section>

          <section aria-labelledby="utilizadas" className="space-y-4 mt-10">
            <h2 id="utilizadas" className="font-bold text-stone-900 mt-10 mb-4 text-[15px] md:text-[16px]">
              Tipos de Cookies que se utilizan en el Sitio Web
            </h2>
            <p>
              De acuerdo con lo señalado, el Sitio Web utiliza cookies para facilitar y optimizar la navegación del
              Usuario, así como para autenticarle o identificarle al acceder a los servicios contratados. En concreto, se
              utilizan las siguientes:
            </p>
            <p>
              - <span className="font-bold text-stone-900">Cookies técnicas o necesarias</span>: Como Usuario del Sitio
              Web, deberás aceptar esta cookie para permitir que el servicio se mantenga en funcionamiento. Son
              estrictamente necesarias para facilitarte la navegación en nuestro Sitio Web, así como para asegurar que
              el contenido se carga eficazmente en tu dispositivo.
            </p>
          </section>

          <section aria-labelledby="tabla" className="space-y-4 mt-10">
            <h2 id="tabla" className="font-bold text-stone-900 mt-10 mb-4 text-[15px] md:text-[16px]">
              Relación de cookies por emisor
            </h2>

            <div className="overflow-x-auto border border-stone-200 rounded-none">
              <table className="min-w-[720px] w-full border-collapse text-xs">
                <thead>
                  <tr className="bg-stone-50">
                    <th className="text-left font-bold text-stone-900 p-3 border-b border-stone-200">Denominación</th>
                    <th className="text-left font-bold text-stone-900 p-3 border-b border-stone-200">Finalidad</th>
                    <th className="text-left font-bold text-stone-900 p-3 border-b border-stone-200">Conservación</th>
                    <th className="text-left font-bold text-stone-900 p-3 border-b border-stone-200">Tipología</th>
                    <th className="text-left font-bold text-stone-900 p-3 border-b border-stone-200">Editor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">_ga</td>
                    <td className="p-3">Analítica</td>
                    <td className="p-3">2 años</td>
                    <td className="p-3">Analítica</td>
                    <td className="p-3">Terceros (Google)</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">_gid</td>
                    <td className="p-3">Analítica</td>
                    <td className="p-3">24 horas</td>
                    <td className="p-3">Analítica</td>
                    <td className="p-3">Terceros (Google)</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">PHPSESSID</td>
                    <td className="p-3">Técnica (sesión)</td>
                    <td className="p-3">6 meses</td>
                    <td className="p-3">Propia</td>
                    <td className="p-3">El titular de la web</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">_efl_cookies_ga_accepted</td>
                    <td className="p-3">Consentimiento</td>
                    <td className="p-3">Persistente</td>
                    <td className="p-3">Propia</td>
                    <td className="p-3">El titular de la web</td>
                  </tr>
                  <tr>
                    <td className="p-3">_efl_cookies_config_accepted</td>
                    <td className="p-3">Preferencias</td>
                    <td className="p-3">Persistente</td>
                    <td className="p-3">Propia</td>
                    <td className="p-3">El titular de la web</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section aria-labelledby="derechos" className="space-y-4 mt-10">
            <h2 id="derechos" className="font-bold text-stone-900 mt-10 mb-4 text-[15px] md:text-[16px]">
              ¿Cuáles son tus derechos en relación con el uso de cookies por esta web?
            </h2>
            <p>
              Según dispone la normativa vigente, cualquier persona tiene derecho a obtener confirmación sobre si se están
              tratando datos personales que le conciernan o no. Asimismo, en las condiciones legalmente previstas, las
              personas interesadas tienen derecho a acceder a sus datos, así como a solicitar la rectificación de los
              datos inexactos o, en su caso, a solicitar su supresión cuando, entre otros motivos, los datos ya no sean
              necesarios para los fines para los que fueron recogidos. En el caso de las cookies estos derechos pueden
              ejercerse con sujeción a las limitaciones derivadas de la naturaleza de estos ficheros.
            </p>
            <p>
              En las condiciones previstas en el Reglamento General de Protección de Datos, los interesados podrán
              solicitar la limitación del tratamiento de sus datos o su portabilidad, en cuyo caso únicamente los
              conservaremos para el ejercicio o la defensa de reclamaciones.
            </p>
            <p>
              En determinadas circunstancias y por motivos relacionados con su situación particular, los interesados
              podrán oponerse al tratamiento de sus datos. Si has otorgado el consentimiento para alguna finalidad
              específica, tienes derecho a retirarlo en cualquier momento, sin que ello afecte a la licitud del
              tratamiento basado en el consentimiento previo a su retirada. En estos supuestos dejaremos de tratar los
              datos o, en su caso, dejaremos de hacerlo para esa finalidad en concreto, salvo por motivos legítimos
              imperiosos o para el ejercicio o la defensa de posibles reclamaciones.
            </p>
            <p>
              Frente a cualquier vulneración de tus derechos, especialmente cuando no hayas obtenido satisfacción en su
              ejercicio, puedes presentar una reclamación ante la Agencia Española de Protección de Datos (datos de
              contacto accesibles en <InlineLink href="https://www.agpd.es">www.agpd.es</InlineLink>) u otra autoridad de
              control competente.
            </p>
            <p>
              También puedes obtener más información sobre los derechos que te asisten dirigiéndote a dichos organismos.
            </p>
          </section>

          <section aria-labelledby="gestionar" className="space-y-4 mt-10">
            <h2 id="gestionar" className="font-bold text-stone-900 mt-10 mb-4 text-[15px] md:text-[16px]">
              ¿Cómo puedo gestionar las cookies?
            </h2>
            <p>
              Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las
              opciones de tu navegador o a través del panel de configuración de cookies. Podrás acceder a este panel
              siempre que accedas a la política de cookies. Puedes encontrar información sobre cómo hacerlo, en relación
              con los navegadores más comunes, en los siguientes enlaces:
            </p>

            <ul className="space-y-2 text-[13px] md:text-[14px]">
              <li>
                - Internet Explorer:{' '}
                <InlineLink href="https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies">
                  https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies
                </InlineLink>
              </li>
              <li>
                - Firefox:{' '}
                <InlineLink href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we">
                  https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we
                </InlineLink>
              </li>
              <li>
                - Chrome:{' '}
                <InlineLink href="http://support.google.com/chrome/bin/answer.py?hl=es&answer=95647">
                  http://support.google.com/chrome/bin/answer.py?hl=es&answer=95647
                </InlineLink>
              </li>
              <li>
                - Safari:{' '}
                <InlineLink href="https://support.apple.com/es-es/guide/safari/sfri11471/mac">
                  https://support.apple.com/es-es/guide/safari/sfri11471/mac
                </InlineLink>
              </li>
            </ul>

            <p>
              Si deseas volver a gestionar las cookies, puedes hacerlo haciendo click aquí:{' '}
              <CookieSettingsLink className="text-stone-700 underline underline-offset-4 decoration-stone-300 hover:text-veritas-green hover:decoration-stone-400 transition-colors rounded-none">
                Configurar cookies
              </CookieSettingsLink>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

