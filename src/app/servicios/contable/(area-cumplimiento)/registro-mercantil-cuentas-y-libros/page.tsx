import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gestión de Registro Mercantil en Alcalá | LN Grupo Veritas',
  description:
    'Expertos en presentación de Cuentas Anuales y Legalización de Libros Oficiales en el Registro Mercantil de Madrid. Seguridad jurídica para su empresa.',
  alternates: {
    canonical: 'https://lngrupoveritas.es/servicios/contable/registro-mercantil-cuentas-y-libros',
  },
};

export default function Page() {
  const serviceTitle = 'Registro Mercantil: Cuentas Anuales y Libros Oficiales';
  const description =
    'Gestión técnica del ciclo mercantil obligatorio para sociedades en Alcalá de Henares y Madrid. 30 años garantizando la transparencia y el cumplimiento legal.';

  const metodo = [
    'Presentación de Cuentas Anuales: Elaboramos el Balance, la Cuenta de Pérdidas y Ganancias y la Memoria bajo estándares normativos, gestionando su depósito en tiempo y forma.',
    'Legalización de Libros Oficiales: Tramitamos la presentación telemática obligatoria del Libro Diario y el Libro de Inventario y Cuentas Anuales, blindando la trazabilidad de su gestión.',
    'Gestión de Plazos y Subsanaciones: Monitorizamos los calendarios mercantiles para evitar el cierre de la hoja registral y respondemos de forma técnica a cualquier calificación negativa del Registrador.',
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
                <Link href="/servicios/contable" className="hover:text-veritas-red transition-colors">
                  Contable
                </Link>
              </li>
              <li className="opacity-60">›</li>
              <li className="text-veritas-green">{serviceTitle}</li>
            </ol>
          </nav>

          <h1 className="mt-2 font-serif text-3xl md:text-4xl font-bold tracking-tight text-veritas-green">{serviceTitle}</h1>
          <p className="mt-3 text-[14px] md:text-[15px] leading-relaxed text-[#3b3b3b] font-sans max-w-3xl">{description}</p>
        </div>
      </div>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-14">
          <div className="max-w-3xl">
            <div className="mb-10">
              <h2 className="font-serif text-[18px] md:text-[20px] font-bold text-veritas-green">
                Especialistas en Cumplimiento de Obligaciones Mercantiles
              </h2>
              <div className="mt-6 space-y-4 text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-sans max-w-3xl">
                <p>
                  En LN Grupo Veritas sabemos que el Registro Mercantil es el escaparate público de su solvencia. Con más de 30 años de
                  experiencia en la <strong>presentación de cuentas en el Registro Mercantil de Madrid</strong>, aseguramos que su empresa
                  cumpla escrupulosamente con el depósito de Cuentas Anuales y la Legalización de Libros, evitando cierres de hoja registral y
                  sanciones que podrían comprometer su operativa comercial.
                </p>
                <p>
                  Nos encargamos de todo el proceso: desde la{' '}
                  <strong>elaboración de la memoria y la certificación de actas hasta la presentación telemática de los Libros Diarios y de Inventario</strong>
                  . Nuestro rigor en la gestión de plazos y nuestra capacidad de subsanación inmediata garantizan que su historial mercantil sea
                  impecable, una pieza clave para la confianza de bancos, proveedores y socios estratégicos.
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
              Asegurar mi cumplimiento mercantil
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

