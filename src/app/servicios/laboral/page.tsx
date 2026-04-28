import React from 'react';
import type { Metadata } from 'next';
import ServiciosLaboral from '@/src/views/ServiciosLaboral';

export const metadata: Metadata = {
  title: 'Servicios Laborales en Madrid | LN Grupo Veritas',
  description:
    'Gestión laboral para empresas y particulares en Madrid: nóminas, cotizaciones, Sistema RED, DELTA, contratación, bajas, despidos y defensa ante inspección.',
};

export default function Page() {
  return <ServiciosLaboral />;
}
