import type { Metadata } from 'next';
import ServiciosJuridico from '@/src/views/ServiciosJuridico';

export const metadata: Metadata = {
  title: 'Servicios Jurídicos en Madrid | LN Grupo Veritas',
  description:
    'Servicios jurídicos en Madrid. Más de 30 años de trayectoria en asesoría legal para empresas y particulares: civil, mercantil, penal, laboral y contencioso.',
};

export default function Page() {
  return <ServiciosJuridico />;
}
