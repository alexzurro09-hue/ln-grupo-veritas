import React from 'react';
import type { Metadata } from 'next';
import ServiciosFiscal from '@/src/views/ServiciosFiscal';

export const metadata: Metadata = {
  title: 'Asesoría Fiscal en Madrid',
  description:
    'Expertos en gestión de impuestos, planificación fiscal para empresas y defensa ante inspecciones de Hacienda. Más de 30 años de experiencia en Madrid.',
  openGraph: {
    url: 'https://lngrupoveritas.es/servicios/fiscal',
  },
};

export default function Page() {
  return <ServiciosFiscal />;
}
