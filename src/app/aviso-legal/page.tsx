import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aviso Legal | LN Grupo Veritas',
  description:
    'Información legal y condiciones de uso del sitio web oficial de LN Grupo Veritas Lex and Iure S.L.',
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
    <>
      <main className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
          <h1 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-stone-900 capitalize mb-12">
            Aviso legal
          </h1>

          <section className="text-stone-700 leading-relaxed space-y-10">
          <section aria-labelledby="datos-empresa" className="space-y-4">
            <h2 id="datos-empresa" className="text-stone-900 font-bold text-[15px] md:text-[16px]">
              1. Datos de la empresa
            </h2>
            <p>
              <InlineLink href="https://www.lngrupoveritas.es/">https://www.lngrupoveritas.es/</InlineLink> es un producto
              de LN GRUPO VERITAS LEX AND IURE S.L.
            </p>
            <p>
              En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la
              Información y Comercio Electrónico (LSSI), a continuación se exponen los datos identificativos del
              responsable del presente sitio web:
            </p>

            <ul className="space-y-2 text-[13px] md:text-[14px]">
              <li>
                <strong className="text-stone-800">Nombre del sitio web:</strong>{' '}
                <InlineLink href="https://www.lngrupoveritas.es/">https://www.lngrupoveritas.es/</InlineLink>
              </li>
              <li>
                <strong className="text-stone-800">Denominación social:</strong> LN GRUPO VERITAS LEX AND IURE S.L
              </li>
              <li>
                <strong className="text-stone-800">NIF:</strong> B1949047
              </li>
              <li>
                <strong className="text-stone-800">Domicilio:</strong> Camino de Alcalá 52, 28816 Camarma de Esteruelas
                (Madrid)
              </li>
              <li>
                <strong className="text-stone-800">Correo electrónico de contacto:</strong>{' '}
                <InlineLink href="info@lngrupoveritas.es">info@lngrupoveritas.es</InlineLink>
              </li>
              <li>
                <strong className="text-stone-800">Nº de teléfono:</strong> -
              </li>
              <li>
                <strong className="text-stone-800">Datos de Inscripción en el Registro Mercantil:</strong> -
              </li>
              <li>
                <strong className="text-stone-800">Inscripción:</strong> Sociedad inscrita en el Registro Mercantil de
                CAMARMA DE ESTERUELAS en el tomo 0, folio 0, hoja M-833920, inscripción 16/10/2024
              </li>
            </ul>
          </section>

          <section aria-labelledby="objeto" className="space-y-4">
            <h2 id="objeto" className="text-stone-900 font-bold text-[15px] md:text-[16px]">
              2. Objeto
            </h2>
            <p>
              Este aviso legal tiene por objeto establecer las condiciones generales que regulan el acceso y uso general
              del presente sitio web por parte de todos los usuarios, de manera que el acceso y el uso del mismo implica
              necesariamente el sometimiento y aceptación de las condiciones generales incluidas en este Aviso Legal.
            </p>
            <p>
              Por este motivo, LN GRUPO VERITAS LEX AND IURE S.L recomienda que el usuario las lea detenidamente cada vez
              que quiera entrar y hacer uso de la citada página web, ya que éstas pueden sufrir algún cambio. En este
              sentido, LN GRUPO VERITAS LEX AND IURE S.L se reserva la facultad de realizar, en cualquier momento y sin
              necesidad de previo aviso alguno, cualquier modificación o actualización de los contenidos y servicios, de
              las presentes condiciones generales de acceso y uso y, en general, de cuantos elementos integren el diseño
              y configuración del presente sitio web.
            </p>
          </section>

          <section aria-labelledby="uso" className="space-y-4">
            <h2 id="uso" className="text-stone-900 font-bold text-[15px] md:text-[16px]">
              3. Uso
            </h2>
            <p>
              En el caso de que el usuario proceda a su registro para la contratación o adquisición de un servicio
              ofrecido en el presente sitio web, el usuario será responsable de aportar información veraz y lícita. Si
              como consecuencia del registro, se dotara al usuario de una contraseña, éste se compromete a hacer un uso
              diligente y a mantener en secreto la contraseña para acceder a estos servicios. En consecuencia, los
              usuarios son responsables de la adecuada custodia y confidencialidad de cualesquiera identificadores y/o
              contraseñas que, en su caso, le sean suministradas por LN GRUPO VERITAS LEX AND IURE S.L, y se comprometen a
              no ceder su uso a terceros, ya sea temporal o permanente, ni a permitir su acceso a personas ajenas. Será
              responsabilidad del usuario la utilización ilícita de los servicios por cualquier tercero ilegítimo que
              emplee a tal efecto una contraseña a causa de una utilización no diligente o de la pérdida de la misma por
              el usuario. En virtud de lo anterior, es obligación del usuario notificar de forma inmediata a la
              dirección de contacto de LN GRUPO VERITAS LEX AND IURE S.L acerca de cualquier hecho que permita el uso
              indebido de los identificadores y/o contraseñas, tales como el robo, extravío, o el acceso no autorizado a
              los mismos, con el fin de proceder a su inmediata cancelación. Mientras no se comuniquen tales hechos, LN
              GRUPO VERITAS LEX AND IURE S.L quedará eximida de cualquier responsabilidad que pudiera derivarse del uso
              indebido de los identificadores o contraseñas por terceros no autorizados.
            </p>
            <p>
              La utilización del presente sitio web por cualquier persona atribuye la condición de usuario de la misma,
              el cual acepta que el citado uso es bajo su exclusiva responsabilidad, por lo que el usuario se compromete
              a observar diligente y fielmente cualquier instrucción adicional impartida por LN GRUPO VERITAS LEX AND
              IURE S.L o por personal autorizado de LN GRUPO VERITAS LEX AND IURE S.L relativa al uso del presente sitio
              web y de sus contenidos.
            </p>
            <p>
              El usuario se compromete a no utilizar la información, actividades, productos o servicios que LN GRUPO
              VERITAS LEX AND IURE S.L pone a su disposición para desarrollar actividades contrarias a las leyes, a la
              moral o al orden público y, en general, a hacer un uso conforme a las presentes condiciones generales. Por
              tanto, el usuario se obliga a usar los contenidos de forma diligente, correcta y lícita y, en particular,
              se compromete a abstenerse de:
            </p>
            <div className="space-y-3">
              <p>
                i. Utilizar los contenidos con fines o efectos contrarios a la ley, a la moral y a las buenas costumbres
                generalmente aceptadas o al orden público.
              </p>
              <p>
                ii. Reproducir o copiar, distribuir, permitir el acceso del público a través de cualquier modalidad de
                comunicación pública, transformar o modificar los contenidos, a menos que se cuente con la autorización
                del titular de los correspondientes derechos o ello resulte legalmente permitido.
              </p>
              <p>
                iii. Emplear los contenidos y, en particular, la información de cualquier clase obtenida a través de la
                página o de los servicios para remitir publicidad, comunicaciones con fines de venta directa o con
                cualquier otra clase de finalidad comercial, mensajes no solicitados dirigidos a una pluralidad de
                personas con independencia de su finalidad, así como a abstenerse de comercializar o divulgar de cualquier
                modo dicha información.
              </p>
            </div>
            <p>
              En cualquier caso, no se responsabiliza de los daños y perjuicios que puedan sufrir los equipos
              informáticos del usuario porque éste haya accedido al portal o lo haya utilizado de forma indebida o
              negligente.
            </p>
          </section>

          <section aria-labelledby="propiedad-intelectual" className="space-y-4">
            <h2 id="propiedad-intelectual" className="text-stone-900 font-bold text-[15px] md:text-[16px]">
              4. Propiedad Intelectual
            </h2>
            <p>
              Todos los contenidos de la página web, entendiendo por estos a título meramente enunciativo los textos,
              imágenes, gráficos, imágenes, iconos, tecnología, software, enlaces y demás contenidos audiovisuales o
              sonoros, así como su diseño gráfico y códigos fuente (en adelante, “los CONTENIDOS”), son propiedad
              intelectual e industrial de LN GRUPO VERITAS LEX AND IURE S.L o en su caso, de terceros. Del mismo modo, las
              marcas, nombres comerciales o signos distintivos son titularidad exclusiva de LN GRUPO VERITAS LEX AND IURE
              S.L o, en su caso, de terceros.
            </p>
            <p>
              Queda prohibida la reproducción, transformación, distribución, comunicación pública, puesta a disposición
              interactiva, extracción, reutilización, reenvío o la utilización de cualquier naturaleza, por cualquier
              medio o procedimiento, de cualquiera de los CONTENIDOS, salvo en los casos en que esté legalmente permitido
              o sea autorizado expresamente y por escrito por el titular de los correspondientes derechos. LN GRUPO
              VERITAS LEX AND IURE S.L se reserva el uso de acciones judiciales civiles y/o penales contra aquellas
              personas físicas o jurídicas y sus representantes que violen cualquiera de los citados derechos de
              propiedad industrial e intelectual.
            </p>
            <p>
              LN GRUPO VERITAS LEX AND IURE S.L se compromete a cumplir las condiciones mencionadas anteriormente para
              garantizar el uso correcto del contenido del sitio web, ejerciendo cualquier acción civil o penal necesaria
              en el caso de infracción o incumplimiento de estos derechos por parte del usuario.
            </p>
          </section>

          <section aria-labelledby="enlaces-portal" className="space-y-4">
            <h2 id="enlaces-portal" className="text-stone-900 font-bold text-[15px] md:text-[16px]">
              5. Enlaces al presente portal
            </h2>
            <p>
              El usuario que quiera introducir un enlace desde su propia página web al presente portal deberá estar
              previamente autorizado y por escrito por parte de LN GRUPO VERITAS LEX AND IURE S.L.
            </p>
          </section>

          <section aria-labelledby="responsabilidades" className="space-y-4">
            <h2 id="responsabilidades" className="text-stone-900 font-bold text-[15px] md:text-[16px]">
              6. Responsabilidades y garantías
            </h2>
            <p>
              LN GRUPO VERITAS LEX AND IURE S.L no garantiza la licitud, fiabilidad, utilidad, veracidad o exactitud de
              los servicios o de la información que se presten a través del presente sitio web.
            </p>
            <p>En consecuencia, LN GRUPO VERITAS LEX AND IURE S.L no garantiza ni se hace responsable de:</p>
            <div className="space-y-3">
              <p>i. La continuidad de los contenidos del presente sitio web.</p>
              <p>ii. La ausencia de errores en dichos contenidos ni la corrección de cualquier defecto que pudiera ocurrir.</p>
              <p>iii. La ausencia de virus y/o demás componentes dañinos en el presente sitio web o en el servidor que lo alberga.</p>
              <p>iv. La invulnerabilidad del presente sitio web y/o la inexpugnabilidad de las medidas de seguridad que se adopten en el mismo.</p>
              <p>v. La falta de utilidad o rendimiento de los contenidos del presente sitio web.</p>
              <p>
                vi. Los daños o perjuicios que cause, a sí mismo o a un tercero, cualquier persona que infringiera las
                condiciones, normas e instrucciones que LN GRUPO VERITAS LEX AND IURE S.L establece en el presente sitio
                web o a través de la vulneración de los sistemas de seguridad de LN GRUPO VERITAS LEX AND IURE S.L.
              </p>
            </div>
            <p>
              No obstante, LN GRUPO VERITAS LEX AND IURE S.L declara que ha adoptado todas las medidas necesarias, dentro
              de sus posibilidades y del estado de la tecnología, para garantizar el funcionamiento del presente sitio
              web y evitar la existencia y transmisión de virus y demás componentes dañinos a los usuarios. En cualquier
              caso, LN GRUPO VERITAS LEX AND IURE S.L no se responsabiliza de los daños y perjuicios que puedan sufrir los
              equipos informáticos del usuario porque éste haya accedido al portal o la haya utilizado de forma indebida
              o negligente.
            </p>
          </section>

          <section aria-labelledby="jurisdiccion" className="space-y-4">
            <h2 id="jurisdiccion" className="text-stone-900 font-bold text-[15px] md:text-[16px]">
              7. Legislación y jurisdicción aplicable
            </h2>
            <p>
              Las relaciones establecidas entre LN GRUPO VERITAS LEX AND IURE S.L y el usuario se regirán por lo dispuesto
              en la normativa vigente acerca de la legislación aplicable y la jurisdicción competente. La ley española
              será la única aplicable. Para los casos en los que la normativa prevea la posibilidad a las partes de
              someterse expresamente a un fuero, LN GRUPO VERITAS LEX AND IURE S.L y el usuario, con renuncia expresa a
              cualquier otro fuero que pudiera corresponderles, se someten a los juzgados y tribunales de la ciudad de
              Camarma de Esteruelas (Madrid).
            </p>
            <p className="pt-4 border-t border-stone-200 text-[13px] md:text-[14px] text-stone-700">
              Copyright © LN GRUPO VERITAS LEX AND IURE S.L. Todos los derechos reservados. 2020.
            </p>
          </section>
          </section>
        </div>
      </main>
    </>
  );
}

