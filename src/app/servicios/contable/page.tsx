import React from 'react';
import type { Metadata } from 'next';
import ServiciosContable from '@/src/views/ServiciosContable';

export const metadata: Metadata = {
  title: 'Servicios Contables en Madrid | LN Grupo Veritas',
  description:
    'Contabilidad estratégica y control financiero en Madrid: balances, calendario tributario, cumplimiento mercantil y análisis trimestral para la toma de decisiones.',
};

export default function Page() {
  return <ServiciosContable />;
}
