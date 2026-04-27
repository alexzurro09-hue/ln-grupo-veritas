import type { Metadata } from 'next';
import ServiciosFiscal from '@/src/views/ServiciosFiscal';

export const metadata: Metadata = {
  title: 'Servicios Fiscales en Madrid | LN Grupo Veritas',
  description:
    'Estrategia y gestión fiscal para empresas y autónomos en Madrid. Cumplimiento AEAT, RETA, licencias y representación ante inspección.',
};

export default function Page() {
  return <ServiciosFiscal />;
}
