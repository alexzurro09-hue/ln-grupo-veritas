import React from 'react';
import type { Metadata } from 'next';
import ServiciosFiscal from '@/src/views/ServiciosFiscal';

export const metadata: Metadata = {
  title: 'Asesoría Fiscal en Alcalá de Henares | LN Grupo Veritas',
  description:
    'Expertos en gestión de impuestos, planificación fiscal para empresas y defensa ante inspecciones de Hacienda en Alcalá de Henares. Más de 30 años de experiencia.',
};

export default function Page() {
  return <ServiciosFiscal />;
}
