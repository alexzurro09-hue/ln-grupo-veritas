import type { Metadata } from 'next';
import Contacto from '@/src/views/Contacto';

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    'Contacte con LN Grupo Veritas. Solicite una cita en nuestro despacho de Camarma de Esteruelas, Madrid.',
  openGraph: {
    url: 'https://lngrupoveritas.es/contacto',
  },
};

export default function Page() {
  return <Contacto />;
}
