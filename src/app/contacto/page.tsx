import type { Metadata } from 'next';
import Contacto from '@/src/views/Contacto';

export const metadata: Metadata = {
  title: 'Contacto | LN Grupo Veritas',
  description:
    'Contacte con LN Grupo Veritas. Solicite una cita en nuestro despacho de Camarma de Esteruelas, Madrid.',
};

export default function Page() {
  return <Contacto />;
}
