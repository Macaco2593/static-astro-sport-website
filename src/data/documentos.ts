export interface Documento {
  slug: string; // used in /documentos/[slug]
  titulo: string;
  descripcion?: string;
  fechaPublicacion: string; // ISO string, e.g. "2025-01-15"
  archivo: string; // public URL to the PDF
}

// Documentos institucionales. Añade aquí todos los PDFs que quieras exponer.
export const DOCUMENTOS_SLUG = {
  ACTA_ASAMBLEA_GENERAL: "acta-asamblea-general",
  // ACTA_ASAMBLEA_EXTRAORDINARIA: "acta-asamblea-extraordinaria",
  PROVIDENCIA_ADMINISTRATIVA: "providencia-administrativa",
  ESTATUTOS_ADADET: "estatutos-adadet",
  // SENIAT: "declaracion-seniat-2024",
  // ISLR: "declaracion-islr-2024",
  NORMATIVA_FICHAJE_2026: "normativa-fichaje-2026",
  RECONOCIMIENTO_IDT: "reconocimiento-idt",
  ORGANIGRAMA_ASOCIACION: "Organigrama-de-la-asociacion",
  NATACION_MARCAS_MINIMAS_2026: "natacion-marcas-minimas-2026",
  NATACION_CONDICIONES_GENERALES_2026: "condiciones_generales_de_natacion_2026",
  NATACION_RANKING_2026: "natacion-ranking-2026",
  AGUAS_ABIERTAS_MARCAS_MINIMAS_2026: "aguas-abiertas-marcas-minimas-2026",
  AGUAS_ABIERTAS_CONDICIONES_TECNICAS_2026: "aguas-abiertas-condiciones-tecnicas-2026",
  NATACION_ARTISTICA_CONDICIONES_TECNICAS_2026: "natacion-artistica-condiciones-tecnicas-2026",
  POLO_ACUATICO_CONDICIONES_TECNICAS_2026: "polo-acuatico-condiciones-tecnicas-2026",
  CLAVADO_CONDICIONES_TECNICAS_2026: "clavado-condiciones-tecnicas-2026",
  MASTER_CONDICIONES_TECNICAS_2026: "master-marcas-minimas-2026",
};

export const DOCUMENTOS: Documento[] = [
  {
    slug: DOCUMENTOS_SLUG.ACTA_ASAMBLEA_GENERAL,
    titulo: "Acta de Asamblea General",
    descripcion:
      "Documento oficial con las actas de la Asamblea General y el informe de gestión correspondiente al año 2024.",
    fechaPublicacion: "2024-06-07",
    archivo: "/documentos/acta-asamblea-general-2024.pdf",
  },
  // {
  //   slug: DOCUMENTOS_SLUG.ACTA_ASAMBLEA_EXTRAORDINARIA,
  //   titulo: "Acta de Asamblea Extraordinaria",
  //   descripcion:
  //     "Acta de la asamblea extraordinaria de la Asociación de Deportes Acuáticos del Estado Táchira.",
  //   fechaPublicacion: "2024-09-10",
  //   archivo: "/documentos/acta-asamblea-extraordinaria-2024.pdf",
  // },
  {
    slug: DOCUMENTOS_SLUG.PROVIDENCIA_ADMINISTRATIVA,
    titulo: "Providencia Administrativa",
    descripcion:
      "Providencia administrativa emitida para la temporada 2024.",
    fechaPublicacion: "2024-02-01",
    archivo: "/documentos/providencia-administrativa-2024.pdf",
  },
  {
    slug: DOCUMENTOS_SLUG.ESTATUTOS_ADADET,
    titulo: "Estatutos de ADADET",
    descripcion:
      "Documento que recoge la estructura organizativa, normas de funcionamiento y principios de la ADADET.",
    fechaPublicacion: "2023-03-01",
    archivo: "/documentos/estatutos-adadet.pdf",
  },
  // {
  //   slug: DOCUMENTOS_SLUG.SENIAT,
  //   titulo: "Declaración SENIAT 2026",
  //   descripcion: "Declaración fiscal ante SENIAT correspondiente al ejercicio 2024.",
  //   fechaPublicacion: "2024-04-01",
  //   archivo: "/documentos/declaracion-seniat-2024.pdf",
  // },
  // {
  //   slug: DOCUMENTOS_SLUG.ISLR,
  //   titulo: "Declaración ISLR 2024",
  //   descripcion: "Declaración del Impuesto Sobre la Renta de la asociación para 2024.",
  //   fechaPublicacion: "2024-04-15",
  //   archivo: "/documentos/declaracion-islr-2024.pdf",
  // },
  {
    slug: DOCUMENTOS_SLUG.NORMATIVA_FICHAJE_2026,
    titulo: "Normativa de Fichaje 2026",
    descripcion:
      "Documento con la normativa de fichaje de atletas para la temporada 2026.",
    fechaPublicacion: "2026-02-16",
    archivo: "/contenido/documentos/normativa_de_fichaje_feveda_2026.pdf",
  },
  {
    slug: DOCUMENTOS_SLUG.RECONOCIMIENTO_IDT,
    titulo: "Reconocimiento del IDT",
    descripcion:
      "Documento de reconocimiento emitido por el Instituto del Deporte Tachirense (IDT).",
    fechaPublicacion: "2023-11-20",
    archivo: "/documentos/reconocimiento-idt.pdf",
  },
  {
    slug: DOCUMENTOS_SLUG.ORGANIGRAMA_ASOCIACION,
    titulo: "Organigrama de la Asociación",
    descripcion:
      "Documento que desglosa la estructura organizativa de la ADADET.",
    fechaPublicacion: "2026-02-05",
    archivo: "/contenido/documentos/Organigrama-de-la-asociacion.pdf",
  },
  {
    slug: DOCUMENTOS_SLUG.NATACION_MARCAS_MINIMAS_2026,
    titulo: "Natación – Marcas mínimas 2026",
    descripcion: "Tabla de marcas mínimas para la disciplina de natación, temporada 2026.",
    fechaPublicacion: "2026-02-16",
    archivo: "/contenido/documentos/marcas-minimas-natacion-2026.pdf",
  },
  {
    slug: DOCUMENTOS_SLUG.NATACION_CONDICIONES_GENERALES_2026,
    titulo: "Natación – Condiciones Generales 2026",
    descripcion: "Condiciones Generales oficiales para competencias de natación 2026.",
    fechaPublicacion: "2026-02-16",
    archivo: "/contenido/documentos/condiciones_generales_de_natacion_2026.pdf",
  },
  {
    slug: DOCUMENTOS_SLUG.NATACION_RANKING_2026,
    titulo: "Natación – Ranking 2026",
    descripcion: "Ranking oficial de atletas de natación ADADET 2026.",
    fechaPublicacion: "2026-01-01",
    archivo: "/documentos/natacion-ranking-2026.pdf",
  },
  {
    slug: DOCUMENTOS_SLUG.AGUAS_ABIERTAS_CONDICIONES_TECNICAS_2026,
    titulo: "Aguas Abiertas – Condiciones técnicas 2026",
    descripcion: "Condiciones técnicas de pruebas en aguas abiertas para 2026.",
    fechaPublicacion: "2025-11-12",
    archivo: "/contenido/documentos/condiciones_tecnicas_generales_de_aguas_abiertas_2026.pdf",
  },
  {
    slug: DOCUMENTOS_SLUG.NATACION_ARTISTICA_CONDICIONES_TECNICAS_2026,
    titulo: "Natación Artística – Condiciones técnicas 2026",
    descripcion: "Lineamientos técnicos para rutinas de natación artística 2026.",
    fechaPublicacion: "2026-02-16",
    archivo: "/contenido/documentos/condiciones_tecnicas_generales_de_natacion_artistica.pdf",
  },
  {
    slug: DOCUMENTOS_SLUG.POLO_ACUATICO_CONDICIONES_TECNICAS_2026,
    titulo: "Polo Acuático – Condiciones técnicas 2026",
    descripcion: "Reglamento técnico para competencias de polo acuático 2026.",
    fechaPublicacion: "2026-02-16",
    archivo: "/contenido/documentos/condiciones_tecnicas_generales_de_polo_acuatico_2026.pdf",
  },
  {
    slug: DOCUMENTOS_SLUG.CLAVADO_CONDICIONES_TECNICAS_2026,
    titulo: "Salto Ornamental – Condiciones técnicas 2026",
    descripcion: "Normas y especificaciones técnicas para clavado 2026.",
    fechaPublicacion: "2026-02-16",
    archivo: "/contenido/documentos/condiciones_tecnicas_generales_de_clavados_2026.pdf",
  },
  {
    slug: DOCUMENTOS_SLUG.MASTER_CONDICIONES_TECNICAS_2026,
    titulo: "Máster – Condiciones Técnicas 2026",
    descripcion: "Condiciones técnicas para las categorías máster en natación 2026.",
    fechaPublicacion: "2026-02-16",
    archivo: "/contenido/documentos/condiciones_tecnicas_generales_de_natacion_master_2026.pdf",
  },
];
