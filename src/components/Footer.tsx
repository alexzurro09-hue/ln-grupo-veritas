import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-100 px-6 md:px-10 py-6 pb-[96px] lg:pb-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-xs text-stone-500">
            <Link href="/aviso-legal" className="hover:text-veritas-green transition-colors rounded-none">
              Aviso Legal
            </Link>
            <Link href="/privacidad" className="hover:text-veritas-green transition-colors rounded-none">
              Política de Privacidad
            </Link>
            <Link href="/cookies" className="hover:text-veritas-green transition-colors rounded-none">
              Política de Cookies
            </Link>
          </div>

          <div className="text-xs text-stone-500 md:text-right pr-24">
            © 2026 LN Grupo Veritas. Todos los derechos reservados.
          </div>
        </div>

        <div className="border-t border-gray-100 pt-6">
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-8 items-start">
            <img
              src="/eu/cofinanciado-ue-horizontal-rgb-pos.png"
              alt="Cofinanciado por la Unión Europea"
              width={220}
              height={53}
              className="h-11 w-auto shrink-0"
            />
            <p className="text-[11px] leading-relaxed text-stone-500 max-w-3xl">
              LN Grupo Veritas Lex y Iure S.L. ha recibido una subvención de la Comunidad de Madrid,
              cofinanciada por la Unión Europea a través del Programa FSE+ 2021-2027 (Programa para el
              fomento de la contratación / línea de contratación estable de personas jóvenes), expediente
              09-GCE1-01648.7/2026. El objetivo es favorecer la inserción laboral estable de personas
              jóvenes mediante la contratación subvencionada.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
