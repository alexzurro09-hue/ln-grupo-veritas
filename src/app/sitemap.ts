import type { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://lngrupoveritas.es';

const staticRoutes: { url: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
  { url: '/', priority: 1.0, changeFrequency: 'monthly' },
  { url: '/contacto', priority: 0.9, changeFrequency: 'monthly' },
  { url: '/servicios/juridico', priority: 0.9, changeFrequency: 'monthly' },
  { url: '/servicios/fiscal', priority: 0.9, changeFrequency: 'monthly' },
  { url: '/servicios/laboral', priority: 0.9, changeFrequency: 'monthly' },
  { url: '/servicios/contable', priority: 0.9, changeFrequency: 'monthly' },

  // Jurídico – Civil
  { url: '/servicios/juridico/arrendamientos-y-propiedad-horizontal', priority: 0.7, changeFrequency: 'yearly' },
  { url: '/servicios/juridico/contratos-y-reclamaciones', priority: 0.7, changeFrequency: 'yearly' },
  { url: '/servicios/juridico/reclamacion-de-cantidad', priority: 0.7, changeFrequency: 'yearly' },
  // Jurídico – Contencioso
  { url: '/servicios/juridico/defensa-contencioso-administrativa', priority: 0.7, changeFrequency: 'yearly' },
  { url: '/servicios/juridico/estrategia-y-acompanamiento-documental', priority: 0.7, changeFrequency: 'yearly' },
  { url: '/servicios/juridico/recursos-administrativos-y-reclamaciones', priority: 0.7, changeFrequency: 'yearly' },
  { url: '/servicios/juridico/sanciones-licencias-y-procedimientos', priority: 0.7, changeFrequency: 'yearly' },
  // Jurídico – Familia
  { url: '/servicios/juridico/custodia-y-pensiones', priority: 0.7, changeFrequency: 'yearly' },
  { url: '/servicios/juridico/divorcios', priority: 0.7, changeFrequency: 'yearly' },
  { url: '/servicios/juridico/liquidacion-de-gananciales', priority: 0.7, changeFrequency: 'yearly' },
  { url: '/servicios/juridico/sucesiones-herencias-y-planificacion-patrimonial', priority: 0.7, changeFrequency: 'yearly' },
  // Jurídico – Laboral
  { url: '/servicios/juridico/asesoria-en-rrhh-y-prevencion-de-conflictos', priority: 0.7, changeFrequency: 'yearly' },
  { url: '/servicios/juridico/contratacion-despidos-y-sanciones', priority: 0.7, changeFrequency: 'yearly' },
  { url: '/servicios/juridico/reclamaciones-de-cantidad-y-salarios', priority: 0.7, changeFrequency: 'yearly' },
  { url: '/servicios/juridico/representacion-en-smac-y-jurisdiccion-social', priority: 0.7, changeFrequency: 'yearly' },
  // Jurídico – Mercantil
  { url: '/servicios/juridico/conflictos-societarios-y-defensa-de-administradores', priority: 0.7, changeFrequency: 'yearly' },
  { url: '/servicios/juridico/constitucion-de-sociedades-y-pactos-de-socios', priority: 0.7, changeFrequency: 'yearly' },
  { url: '/servicios/juridico/contratacion-mercantil-y-negociacion', priority: 0.7, changeFrequency: 'yearly' },
  { url: '/servicios/juridico/reestructuracion-gobierno-corporativo-y-asesoria-recurrente', priority: 0.7, changeFrequency: 'yearly' },
  // Jurídico – Penal
  { url: '/servicios/juridico/asistencia-letrada-en-diligencias-urgentes', priority: 0.7, changeFrequency: 'yearly' },
  { url: '/servicios/juridico/defensa-y-acusacion-particular', priority: 0.7, changeFrequency: 'yearly' },
  { url: '/servicios/juridico/delitos-economicos-y-patrimoniales', priority: 0.7, changeFrequency: 'yearly' },
  { url: '/servicios/juridico/estrategia-procesal-y-negociacion', priority: 0.7, changeFrequency: 'yearly' },

  // Fiscal – Gestión tributaria
  { url: '/servicios/fiscal/declaraciones-informativas-y-censales', priority: 0.7, changeFrequency: 'yearly' },
  { url: '/servicios/fiscal/impuesto-de-sociedades-y-cuentas-anuales', priority: 0.7, changeFrequency: 'yearly' },
  { url: '/servicios/fiscal/iva-y-regimenes-especiales', priority: 0.7, changeFrequency: 'yearly' },
  { url: '/servicios/fiscal/planificacion-fiscal-estrategica', priority: 0.7, changeFrequency: 'yearly' },
  // Fiscal – Autónomos
  { url: '/servicios/fiscal/alta-y-asesoramiento-inicial-a-emprendedores', priority: 0.7, changeFrequency: 'yearly' },
  { url: '/servicios/fiscal/gestion-de-reta-y-variaciones-de-actividad', priority: 0.7, changeFrequency: 'yearly' },
  { url: '/servicios/fiscal/prestaciones-y-planificacion-de-jubilacion', priority: 0.7, changeFrequency: 'yearly' },
  { url: '/servicios/fiscal/subvenciones-y-bonificaciones', priority: 0.7, changeFrequency: 'yearly' },
  // Fiscal – Inspección
  { url: '/servicios/fiscal/analisis-de-risgos-y-trazabilidad-documental', priority: 0.7, changeFrequency: 'yearly' },
  { url: '/servicios/fiscal/interlocucion-con-aeat-y-coordinacion-de-respuestas', priority: 0.7, changeFrequency: 'yearly' },
  { url: '/servicios/fiscal/plan-de-regularizacion-y-minimizacion-de-impacto', priority: 0.7, changeFrequency: 'yearly' },
  { url: '/servicios/fiscal/preparacion-de-alegaciones-y-recursos', priority: 0.7, changeFrequency: 'yearly' },
  // Fiscal – Procedimientos locales
  { url: '/servicios/fiscal/gestion-de-requerimientos-y-control-documental', priority: 0.7, changeFrequency: 'yearly' },
  { url: '/servicios/fiscal/gestion-de-tributos-locales', priority: 0.7, changeFrequency: 'yearly' },
  { url: '/servicios/fiscal/licencias-comunicaciones-y-registros-municipales', priority: 0.7, changeFrequency: 'yearly' },
  { url: '/servicios/fiscal/presentacion-de-escritos-y-seguimiento-de-expedientes', priority: 0.7, changeFrequency: 'yearly' },

  // Laboral – Altas y contratación
  { url: '/servicios/laboral/altas-bajas-y-variaciones-de-afiliacion', priority: 0.7, changeFrequency: 'yearly' },
  { url: '/servicios/laboral/comunicacion-y-registro-en-sistemas-oficiales', priority: 0.7, changeFrequency: 'yearly' },
  { url: '/servicios/laboral/contratos-prorrogas-y-modificaciones', priority: 0.7, changeFrequency: 'yearly' },
  { url: '/servicios/laboral/estudios-de-coste-previo-y-bonificaciones', priority: 0.7, changeFrequency: 'yearly' },
  // Laboral – Bajas
  { url: '/servicios/laboral/accidentes-de-trabajo-y-comunicaciones', priority: 0.7, changeFrequency: 'yearly' },
  { url: '/servicios/laboral/incapacidad-temporal-sistema-red-delta', priority: 0.7, changeFrequency: 'yearly' },
  { url: '/servicios/laboral/maternidad-paternidad-y-prestaciones', priority: 0.7, changeFrequency: 'yearly' },
  { url: '/servicios/laboral/seguimiento-de-partes-plazos-y-requerimientos', priority: 0.7, changeFrequency: 'yearly' },
  // Laboral – Extinciones y crisis
  { url: '/servicios/laboral/despidos-y-cartas-con-estrategia-preventiva', priority: 0.7, changeFrequency: 'yearly' },
  { url: '/servicios/laboral/eres-ertes-y-coordinacion-con-sepe', priority: 0.7, changeFrequency: 'yearly' },
  { url: '/servicios/laboral/finiquitos-indemnizaciones-y-liquidaciones', priority: 0.7, changeFrequency: 'yearly' },
  { url: '/servicios/laboral/negociacion-y-acompanamiento-en-conflictos', priority: 0.7, changeFrequency: 'yearly' },
  // Laboral – Gestión mensual
  { url: '/servicios/laboral/cotizaciones', priority: 0.7, changeFrequency: 'yearly' },
  { url: '/servicios/laboral/nominas', priority: 0.7, changeFrequency: 'yearly' },
  { url: '/servicios/laboral/tributos', priority: 0.7, changeFrequency: 'yearly' },
  // Laboral – Hogar
  { url: '/servicios/laboral/hogar-alta-modificaciones-y-bajas', priority: 0.7, changeFrequency: 'yearly' },
  { url: '/servicios/laboral/hogar-asesoria-en-incidencias-y-documentacion', priority: 0.7, changeFrequency: 'yearly' },
  { url: '/servicios/laboral/hogar-nominas-pagas-y-control-mensual', priority: 0.7, changeFrequency: 'yearly' },
  // Laboral – Inspección
  { url: '/servicios/laboral/interlocucion-y-acompanamiento-fisico', priority: 0.7, changeFrequency: 'yearly' },
  { url: '/servicios/laboral/preparacion-de-documentacion-y-trazabilidad', priority: 0.7, changeFrequency: 'yearly' },
  { url: '/servicios/laboral/respuesta-a-requerimientos-y-actas', priority: 0.7, changeFrequency: 'yearly' },

  // Contable – Análisis
  { url: '/servicios/contable/alertas-de-desviaciones-y-escenarios', priority: 0.7, changeFrequency: 'yearly' },
  { url: '/servicios/contable/lectura-de-margenes-y-costes', priority: 0.7, changeFrequency: 'yearly' },
  { url: '/servicios/contable/recomendaciones-financieras-accionables', priority: 0.7, changeFrequency: 'yearly' },
  // Contable – Calendario
  { url: '/servicios/contable/preparacion-y-presentacion-con-soporte-documental', priority: 0.7, changeFrequency: 'yearly' },
  { url: '/servicios/contable/revision-de-coherencias-entre-contabilidad-y-fiscalidad', priority: 0.7, changeFrequency: 'yearly' },
  { url: '/servicios/contable/seguimiento-de-notificaciones-y-requerimientos', priority: 0.7, changeFrequency: 'yearly' },
  // Contable – Core
  { url: '/servicios/contable/alta-y-modificaciones-censales', priority: 0.7, changeFrequency: 'yearly' },
  { url: '/servicios/contable/balances-y-estados-financieros', priority: 0.7, changeFrequency: 'yearly' },
  { url: '/servicios/contable/conciliacion-y-control-documental', priority: 0.7, changeFrequency: 'yearly' },
  { url: '/servicios/contable/cuadro-de-mando-mensual', priority: 0.7, changeFrequency: 'yearly' },
  // Contable – Cumplimiento
  { url: '/servicios/contable/gobernanza-documental-y-evidencias', priority: 0.7, changeFrequency: 'yearly' },
  { url: '/servicios/contable/registro-mercantil-cuentas-y-libros', priority: 0.7, changeFrequency: 'yearly' },
  // Contable – Representación
  { url: '/servicios/contable/asistencia-en-inspecciones-y-procedimientos-de-gestion', priority: 0.7, changeFrequency: 'yearly' },
  { url: '/servicios/contable/preparacion-y-revision-de-soportes-contables-y-mercantiles', priority: 0.7, changeFrequency: 'yearly' },
  { url: '/servicios/contable/respuesta-a-requerimientos-y-coordinacion-documental', priority: 0.7, changeFrequency: 'yearly' },

  // Legal
  { url: '/aviso-legal', priority: 0.3, changeFrequency: 'yearly' },
  { url: '/privacidad', priority: 0.3, changeFrequency: 'yearly' },
  { url: '/cookies', priority: 0.3, changeFrequency: 'yearly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return staticRoutes.map(({ url, priority, changeFrequency }) => ({
    url: `${BASE_URL}${url}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
