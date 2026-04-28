import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de privacidad | LN Grupo Veritas',
  description:
    'Información sobre el tratamiento de datos personales en el sitio web oficial de LN Grupo Veritas Lex and Iure S.L.',
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
          Política de privacidad
        </h1>

        <div className="text-stone-700 leading-relaxed">
          <section aria-labelledby="intro" className="space-y-4">
            <h2 id="intro" className="text-stone-900 font-bold text-[15px] md:text-[16px]">
              1. Introducción
            </h2>
            <p>
              De conformidad con el Reglamento General de Protección de Datos («RGPD») y la Ley 3/2018 de Protección de
              Datos Personales y Garantías de Derechos Digitales («LOPDGDD»), LN GRUPO VERITAS LEX AND IURE S.L ofrece
              esta Política de Privacidad para informarte de forma clara y transparente sobre cómo recopilamos y tratamos
              tus datos personales a través del Sitio Web{' '}
              <InlineLink href="https://www.lngrupoveritas.es/">https://www.lngrupoveritas.es/</InlineLink>
            </p>
          </section>

          <section aria-labelledby="identificacion" className="space-y-4 mt-10">
            <h2 id="identificacion" className="text-stone-900 font-bold text-[15px] md:text-[16px]">
              2. Identificación del Responsable del Tratamiento
            </h2>
            <p>
              A través del presente aviso, se informa que los datos personales que se proporcionen a través de esta web
              serán tratados por LN GRUPO VERITAS LEX AND IURE S.L (en adelante, el Prestador del Servicio).
            </p>
            <ul className="space-y-2 text-[13px] md:text-[14px]">
              <li>
                <strong className="text-stone-800">Responsable:</strong> LN GRUPO VERITAS LEX AND IURE S.L
              </li>
              <li>
                <strong className="text-stone-800">NIF:</strong> B1949047
              </li>
              <li>
                <strong className="text-stone-800">Dirección:</strong> Camino de Alcalá 52, 28816 Camarma de Esteruelas
                (Madrid)
              </li>
              <li>
                <strong className="text-stone-800">Email:</strong>{' '}
                <InlineLink href="info@lngrupoveritas.es">info@lngrupoveritas.es</InlineLink>
              </li>
            </ul>
          </section>

          <section aria-labelledby="finalidad" className="space-y-4 mt-10">
            <h2 id="finalidad" className="text-stone-900 font-bold text-[15px] md:text-[16px]">
              3. Finalidad, legitimación y categorías de datos personales
            </h2>
            <p>
              La finalidad del tratamiento de los datos que nos faciliten los usuarios es exclusivamente la de cursar su
              petición o consulta que realicen a través del presente sitio Web y, en su caso, si los usuarios
              expresamente lo consienten mediante la marcación de la casilla correspondiente a pie del formulario de
              recogida de datos, remitirles información sobre las actividades del Prestador del Servicio que puedan
              resultar de su interés, por cualquier medio, incluidos medios electrónicos. El consentimiento prestado,
              que constituye la base jurídica que legitima el tratamiento de los datos, es revocable en cualquier
              momento sin que ello afecte a la licitud del tratamiento basado en el consentimiento previo a su retirada.
            </p>
            <p>
              Salvo que específicamente se establezca lo contrario, se considerará necesario completar todos los datos
              requeridos en el formulario de datos. En el caso de no suministrar todos los datos estimados como
              necesarios, el Prestador del Servicio podrá, dependiendo del caso, no cursar la concreta solicitud que se
              efectúe. Los usuarios deberán rellenar los formularios con datos verdaderos, exactos, completos y
              actualizados, respondiendo de los daños y perjuicios que pudiera ocasionar a causa de la cumplimentación
              defectuosa de los formularios con datos falsos, inexactos, incompletos o no actualizados.
            </p>
            <p>
              En caso de que el Prestador del Servicio prestara algún tipo de servicio especial en el que determine unas
              previsiones específicas diferentes a éstas, en lo relativo a la protección de datos, tendrá primacía la
              aplicación de las normas particulares indicadas para ese servicio en particular por encima de las
              presentes, en caso de discrepancias.
            </p>
          </section>

          <section aria-labelledby="duracion" className="space-y-4 mt-10">
            <h2 id="duracion" className="text-stone-900 font-bold text-[15px] md:text-[16px]">
              4. Duración del tratamiento y conservación de datos personales
            </h2>
            <p>
              Conservaremos los datos personales que nos hayas proporcionado durante el tiempo estrictamente necesario
              para cumplir con cada una de las finalidades previstas. En concreto:
            </p>
            <div className="space-y-3">
              <p>
                - Datos relativos a tu navegación en el Sitio Web: Conservaremos los datos recogidos a través del uso de
                Cookies en los términos anteriormente mencionados, durante el plazo establecido en la Política de
                Cookies.
              </p>
              <p>
                - Datos relativos a la relación contractual (Ejecución de un contrato): Hasta que se cumpla la
                prestación contractual, incluyendo los plazos de prescripción para la exigencia de responsabilidades
                contractuales o precontractuales.
              </p>
              <p>
                - Datos del formulario de contacto y para el envío de comunicaciones comerciales (Newsletter):
                Conservaremos estos datos mientras no conste la revocación de tu consentimiento para el envío de
                comunicaciones comerciales electrónicas y Newsletter.
              </p>
            </div>
          </section>

          <section aria-labelledby="comunicaciones" className="space-y-4 mt-10">
            <h2 id="comunicaciones" className="text-stone-900 font-bold text-[15px] md:text-[16px]">
              5. Comunicaciones a terceros y transferencias internacionales
            </h2>
            <p>
              No se comunicarán los datos personales tratados a ningún tercero, salvo expresa petición judicial o
              requerimiento procedente de autoridades de las Fuerzas y Cuerpos de Seguridad.
            </p>
            <p>
              No se realizarán transferencias internacionales de datos a terceros países. En caso realizar alguna
              transferencia internacional, nos aseguraremos de que este tercer país cuente con las garantías adecuadas en
              materia de seguridad y protección de datos.
            </p>
          </section>

          <section aria-labelledby="confidencialidad" className="space-y-4 mt-10">
            <h2 id="confidencialidad" className="text-stone-900 font-bold text-[15px] md:text-[16px]">
              6. Confidencialidad del tratamiento de datos personales
            </h2>
            <p>
              El Prestador del Servicio se compromete al cumplimiento de su obligación de secreto de los datos personales
              y de su deber de guardarlos y adoptará todas las medidas necesarias para evitar su alteración, pérdida,
              tratamiento o acceso no autorizado, habida cuenta en todo momento del estado de la tecnología.
            </p>
          </section>

          <section aria-labelledby="derechos" className="space-y-4 mt-10">
            <h2 id="derechos" className="text-stone-900 font-bold text-[15px] md:text-[16px]">
              7. Derechos respecto al tratamiento de datos personales
            </h2>
            <p>
              El titular de los datos tiene derecho a solicitar el acceso a ellos, su rectificación o supresión, así
              como a la limitación de su tratamiento, a oponerse al mismo y a la portabilidad de sus datos, en los casos
              previstos en el Reglamento General de Protección de Datos, dirigiendo una comunicación escrita a, LN GRUPO
              VERITAS LEX AND IURE S.L, en la siguiente dirección postal Camino de Alcalá 52, 28816 Camarma de Esteruelas
              (Madrid), y/o electrónica, <InlineLink href="info@lngrupoveritas.es">info@lngrupoveritas.es</InlineLink> en
              la que se acredite la identidad del usuario.
            </p>
            <p>
              El Prestador del Servicio se reserva el derecho a modificar la presente política, informando previamente a
              los usuarios de los cambios que en ella se introduzcan.
            </p>
            <p>
              Los usuarios tienen derecho a presentar una reclamación ante la Agencia Española de Protección de Datos si
              estiman que sus derechos de protección de datos han sido vulnerados, en la siguiente dirección postal calle
              Jorge Juan, nº6, 28001 Madrid o a través de su página web{' '}
              <InlineLink href="https://www.aepd.es/es">https://www.aepd.es/es</InlineLink>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

