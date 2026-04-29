import React from 'react';
import type { Metadata } from 'next';
import ServiciosJuridico from '@/src/views/ServiciosJuridico';

export const metadata: Metadata = {
  title: 'Servicios Jurídicos en Madrid',
  description:
    'Servicios jurídicos en Madrid. Más de 30 años de trayectoria en asesoría legal para empresas y particulares: civil, mercantil, penal, laboral y contencioso.',
  openGraph: {
    url: 'https://lngrupoveritas.es/servicios/juridico',
  },
};

export default function Page() {
  return <ServiciosJuridico />;
}
