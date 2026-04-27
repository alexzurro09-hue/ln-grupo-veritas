export type SubService = {
  slug: string;
  title: string;
  summary?: string;
  body: string[];
};

export type ServiceCategory = {
  key: string;
  label: string;
  subservices: SubService[];
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    key: 'juridico',
    label: 'Jurídico',
    subservices: [
      {
        slug: 'contratos-y-reclamaciones',
        title: 'Contratos y Reclamaciones',
        summary: 'Redacción, negociación y defensa de sus derechos con rigor probatorio.',
        body: [
          'Analizamos el contrato (o la relación jurídica) con enfoque preventivo: riesgos, obligaciones, garantías y pruebas disponibles.',
          'Definimos una estrategia clara: negociación, requerimiento fehaciente o vía judicial, siempre optimizando tiempos y costes.',
          'Redactamos documentación con precisión técnica (cláusulas, comunicaciones, burofax, demanda) y preparamos el expediente probatorio.',
        ],
      },
      {
        slug: 'arrendamientos-y-propiedad-horizontal',
        title: 'Arrendamientos y Propiedad Horizontal',
        summary: 'Gestión de conflictos entre arrendadores, inquilinos y comunidades.',
        body: [
          'Estudiamos el contrato, la normativa aplicable y la documentación (actas, comunicaciones, recibos) para fijar una posición sólida.',
          'Actuamos con un método escalonado: negociación, requerimientos, y si procede, acciones judiciales (desahucio, reclamación de cantidades).',
          'Priorizamos soluciones que preserven la relación cuando es posible y, cuando no, defendemos su interés con firmeza.',
        ],
      },
      {
        slug: 'sucesiones-herencias-y-planificacion-patrimonial',
        title: 'Herencias y Planificación Patrimonial',
        summary: 'Orden y seguridad jurídica en la transmisión del patrimonio.',
        body: [
          'Revisamos títulos, testamento, legitimidades y cargas para evitar conflictos y contingencias futuras.',
          'Gestionamos aceptación, partición, adjudicación y, si es necesario, procedimientos de división judicial de herencia.',
          'Acompañamos la planificación con visión práctica: protección del patrimonio familiar y reducción de incertidumbre.',
        ],
      },
      {
        slug: 'reclamacion-de-cantidad',
        title: 'Reclamación de Cantidad',
        summary: 'Recuperación de deuda con estrategia procesal y enfoque de ejecución.',
        body: [
          'Evaluamos la viabilidad: título, cuantía, solvencia y documentación acreditativa de la deuda.',
          'Seleccionamos el cauce adecuado (monitorio, verbal, ordinario) y preparamos una reclamación robusta.',
          'Enfocamos el caso en el resultado final: ejecución, embargo y medidas para maximizar el cobro.',
        ],
      },
      {
        slug: 'constitucion-de-sociedades-y-pactos-de-socios',
        title: 'Constitución de Sociedades y Pactos de Socios',
        summary: 'Estructuras claras para crecer con control y previsión de conflictos.',
        body: [
          'Definimos la forma societaria y el reparto de funciones con criterios de gobierno corporativo.',
          'Redactamos pactos de socios y cláusulas clave: arrastre, acompañamiento, salida, no competencia y protección de minorías.',
          'Priorizamos acuerdos que eviten litigios futuros y protejan la continuidad del proyecto empresarial.',
        ],
      },
      {
        slug: 'contratacion-mercantil-y-negociacion',
        title: 'Contratación Mercantil y Negociación',
        summary: 'Contratos operativos que reducen riesgos y mejoran la ejecución.',
        body: [
          'Revisamos y negociamos contratos con foco en responsabilidad, penalizaciones, garantías, plazos y resolución.',
          'Aseguramos coherencia documental: anexos, órdenes de trabajo, facturación y aceptación de entregables.',
          'Proponemos redacciones claras para evitar interpretaciones ambiguas y fricciones operativas.',
        ],
      },
      {
        slug: 'defensa-y-acusacion-particular',
        title: 'Defensa y Acusación Particular',
        summary: 'Estrategia penal con control de riesgos y preparación probatoria.',
        body: [
          'Analizamos el procedimiento y el relato fáctico para construir una teoría del caso sólida.',
          'Preparamos diligencias, escritos y comparecencias con enfoque en prueba, tiempos y escenarios.',
          'Acompañamos en negociación y conformidades cuando aporta certeza y minimiza impacto.',
        ],
      },
      {
        slug: 'contratacion-despidos-y-sanciones',
        title: 'Contratación, Despidos y Sanciones',
        summary: 'Seguridad jurídica en decisiones laborales sensibles.',
        body: [
          'Revisamos la documentación laboral y el encaje normativo para reducir exposición a reclamaciones.',
          'Diseñamos el procedimiento y la carta con precisión, cuidando plazos, hechos y prueba.',
          'Representamos en SMAC y jurisdicción social, buscando acuerdos cuando son eficientes.',
        ],
      },
      {
        slug: 'recursos-y-defensa-contencioso-administrativa',
        title: 'Recursos y Defensa Contencioso-Administrativa',
        summary: 'Rigor documental y estrategia frente a la Administración.',
        body: [
          'Estudiamos el expediente administrativo y la normativa para identificar vicios, plazos y opciones.',
          'Preparamos recursos con estructura probatoria y argumentación jurídica precisa.',
          'Acompañamos en la vía contenciosa con enfoque en medidas cautelares cuando procede.',
        ],
      },
    ],
  },
];

export function getCategory(categoryKey: string) {
  return SERVICE_CATEGORIES.find((c) => c.key === categoryKey);
}

export function getSubService(categoryKey: string, slug: string) {
  const category = getCategory(categoryKey);
  if (!category) return null;
  return category.subservices.find((s) => s.slug === slug) ?? null;
}

export function titleToSlug(input: string) {
  return input
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/&/g, 'y')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

