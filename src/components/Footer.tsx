import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-100 px-6 md:px-10 py-6 pb-[96px] lg:pb-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
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
    </footer>
  );
}
