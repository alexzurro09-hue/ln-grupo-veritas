'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';

export default function AppHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname() ?? '';

  const isHome = pathname === '/';
  const isServicios = pathname.startsWith('/servicios');
  const isContacto = pathname === '/contacto';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-[60] border-b border-veritas-green/10 backdrop-blur-[10px] transition-colors ${
        isScrolled ? 'bg-white/90' : 'bg-white/75'
      }`}
      style={{ WebkitBackdropFilter: 'blur(10px)' } as React.CSSProperties}
    >
      <div className="h-[30px] hidden md:block">
        <div className="max-w-7xl mx-auto px-10 h-full flex justify-end items-center space-x-5 text-[11px] font-medium tracking-[0.05em] text-veritas-gray">
          <a href="tel:918866694" className="flex items-center hover:text-veritas-red transition-colors">
            Tel: 918866694
          </a>
          <a href="mailto:info@lngrupoveritas.es" className="flex items-center hover:text-veritas-red transition-colors">
            info@lngrupoveritas.es
          </a>
        </div>
      </div>

      <header className="h-[84px] md:h-[100px] flex items-center justify-center border-b border-gray-50/60">
        <div className="flex flex-col items-center select-none">
          <div className="text-2xl md:text-3xl font-serif font-bold tracking-[0.35em] text-veritas-green uppercase">
            <Link href="/" className="hover:text-veritas-red transition-colors">
              LN Grupo Veritas
            </Link>
          </div>
          <div className="text-[10px] uppercase tracking-[0.5em] text-veritas-green/60 font-medium mt-1">
            Abogados / Asesores
          </div>
        </div>
      </header>

      <nav className="text-white h-[45px] flex items-center justify-center shadow-lg bg-veritas-green">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-10 flex justify-center items-center h-full">
          <div className="flex items-stretch h-full gap-8 md:gap-16 font-medium uppercase text-[12px] tracking-[0.2em]">
            <NavLink href="/" active={isHome}>Inicio</NavLink>

            <div
              className={`group relative h-full flex items-center cursor-pointer transition-all duration-300 ease-in-out tracking-widest w-[140px] justify-center ${
                isServicios ? 'font-bold opacity-100' : 'font-normal opacity-80 hover:opacity-100 hover:font-bold'
              }`}
            >
              <span className="flex items-center gap-1 relative">
                Servicios <ChevronDown size={12} />
                <span
                  className={`absolute left-0 right-0 -bottom-[16px] h-px bg-white transition-opacity duration-300 ${
                    isServicios ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}
                />
              </span>
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white text-veritas-green shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200 z-50 border-t-2 border-veritas-red rounded-none pt-0">
                <div className="flex flex-col py-2">
                  <DropdownLink href="/servicios/juridico">Jurídico</DropdownLink>
                  <DropdownLink href="/servicios/fiscal">Fiscal</DropdownLink>
                  <DropdownLink href="/servicios/laboral">Laboral</DropdownLink>
                  <DropdownLink href="/servicios/contable">Contable</DropdownLink>
                </div>
              </div>
            </div>

            <NavLink href="/contacto" active={isContacto}>Contacto</NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}

function NavLink({
  href,
  children,
  active = false,
}: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`h-full flex items-center justify-center w-[140px] uppercase text-[12px] tracking-widest transition-all duration-300 ease-in-out relative group
        ${active ? 'font-bold opacity-100' : 'font-normal opacity-80 hover:opacity-100 hover:font-bold'}`}
    >
      <span className="relative">
        {children}
        <span
          className={`absolute left-0 right-0 -bottom-[16px] h-px bg-white transition-opacity duration-300 ${
            active ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`}
        />
      </span>
    </Link>
  );
}

function DropdownLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="px-6 py-3 text-[11px] font-medium uppercase tracking-widest hover:bg-gray-50 hover:text-veritas-red transition-all block border-b border-gray-50 last:border-0"
    >
      {children}
    </Link>
  );
}
