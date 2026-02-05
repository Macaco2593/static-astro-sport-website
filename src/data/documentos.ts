export interface Documento {
  slug: string; // used in /documentos/[slug]
  titulo: string;
  descripcion?: string;
  fechaPublicacion: string; // ISO string, e.g. "2025-01-15"
  archivo: string; // public URL to the PDF
}

// Documentos institucionales. Añade aquí todos los PDFs que quieras exponer.
export const DOCUMENTOS: Documento[] = [
  // ----- Centro de recursos (6 documentos destacados) -----
  {
    slug: "acta-asamblea-general",
    titulo: "Acta de Asamblea General",
    descripcion:
      "Documento oficial con las actas de la Asamblea General y el informe de gestión correspondiente al año 2024.",
    fechaPublicacion: "2024-06-07",
    archivo: "/documentos/acta-asamblea-general-2024.pdf",
  },
  {
    slug: "acta-asamblea-extraordinaria",
    titulo: "Acta de Asamblea Extraordinaria",
    descripcion:
      "Acta de la asamblea extraordinaria de la Asociación de Deportes Acuáticos del Estado Táchira.",
    fechaPublicacion: "2024-09-10",
    archivo: "/documentos/acta-asamblea-extraordinaria-2024.pdf",
  },
  {
    slug: "providencia-administrativa",
    titulo: "Providencia Administrativa",
    descripcion:
      "Providencia administrativa emitida para la temporada 2024.",
    fechaPublicacion: "2024-02-01",
    archivo: "/documentos/providencia-administrativa-2024.pdf",
  },
  {
    slug: "estatutos-adadet",
    titulo: "Estatutos de ADADET",
    descripcion:
      "Documento que recoge la estructura organizativa, normas de funcionamiento y principios de la ADADET.",
    fechaPublicacion: "2023-03-01",
    archivo: "/documentos/estatutos-adadet.pdf",
  },
  {
    slug: "declaracion-seniat-2024",
    titulo: "Declaración SENIAT 2026",
    descripcion: "Declaración fiscal ante SENIAT correspondiente al ejercicio 2024.",
    fechaPublicacion: "2024-04-01",
    archivo: "/documentos/declaracion-seniat-2024.pdf",
  },
  {
    slug: "declaracion-islr-2024",
    titulo: "Declaración ISLR 2024",
    descripcion: "Declaración del Impuesto Sobre la Renta de la asociación para 2024.",
    fechaPublicacion: "2024-04-15",
    archivo: "/documentos/declaracion-islr-2024.pdf",
  },

  // ----- Documentos usados en el menú ADADET del header -----
  {
    slug: "normativa-fichaje-2026",
    titulo: "Normativa de Fichaje 2026",
    descripcion:
      "Documento con la normativa de fichaje de atletas para la temporada 2026.",
    fechaPublicacion: "2025-12-01",
    archivo: "/documentos/normativa-fichaje-2026.pdf",
  },
  // {
  //   slug: "organigrama-asociacion",
  //   titulo: "Organigrama de la Asociación",
  //   descripcion:
  //     "Organigrama oficial de la Asociación de Deportes Acuáticos del Estado Táchira.",
  //   fechaPublicacion: "2024-01-10",
  //   archivo: "/documentos/organigrama-asociacion.pdf",
  // },
  {
    slug: "reconocimiento-idt",
    titulo: "Reconocimiento del IDT",
    descripcion:
      "Documento de reconocimiento emitido por el Instituto del Deporte Tachirense (IDT).",
    fechaPublicacion: "2023-11-20",
    archivo: "/documentos/reconocimiento-idt.pdf",
  },
  {
    slug: "organigrama-de-la-asociacion",
    titulo: "Organigrama de la Asociación",
    descripcion:
      "Documento que desglosa la estructura organizativa de la ADADET.",
    fechaPublicacion: "2026-02-05",
    archivo: "/contenido/documentos/Organigrama-de-la-asociacion.pdf",
  },

  // ----- Documentos asociados a disciplinas (slugs usados en src/data/disciplinas.ts) -----
  {
    slug: "natacion-marcas-minimas-2026",
    titulo: "Natación – Marcas mínimas 2026",
    descripcion: "Tabla de marcas mínimas para la disciplina de natación, temporada 2026.",
    fechaPublicacion: "2025-11-01",
    archivo: "/documentos/natacion-marcas-minimas-2026.pdf",
  },
  {
    slug: "natacion-condiciones-tecnicas-2026",
    titulo: "Natación – Condiciones técnicas 2026",
    descripcion: "Condiciones técnicas oficiales para competencias de natación 2026.",
    fechaPublicacion: "2025-11-05",
    archivo: "/documentos/natacion-condiciones-tecnicas-2026.pdf",
  },
  {
    slug: "natacion-ranking-2026",
    titulo: "Natación – Ranking 2026",
    descripcion: "Ranking oficial de atletas de natación ADADET 2026.",
    fechaPublicacion: "2026-01-01",
    archivo: "/documentos/natacion-ranking-2026.pdf",
  },
  {
    slug: "aguas-abiertas-marcas-minimas-2026",
    titulo: "Aguas Abiertas – Marcas mínimas 2026",
    descripcion: "Marcas mínimas oficiales para la disciplina de aguas abiertas, temporada 2026.",
    fechaPublicacion: "2025-11-10",
    archivo: "/documentos/aguas-abiertas-marcas-minimas-2026.pdf",
  },
  {
    slug: "aguas-abiertas-condiciones-tecnicas-2026",
    titulo: "Aguas Abiertas – Condiciones técnicas 2026",
    descripcion: "Condiciones técnicas de pruebas en aguas abiertas para 2026.",
    fechaPublicacion: "2025-11-12",
    archivo: "/documentos/aguas-abiertas-condiciones-tecnicas-2026.pdf",
  },
  {
    slug: "natacion-artistica-condiciones-tecnicas-2026",
    titulo: "Natación Artística – Condiciones técnicas 2026",
    descripcion: "Lineamientos técnicos para rutinas de natación artística 2026.",
    fechaPublicacion: "2025-11-15",
    archivo: "/documentos/natacion-artistica-condiciones-tecnicas-2026.pdf",
  },
  {
    slug: "polo-acuatico-condiciones-tecnicas-2026",
    titulo: "Polo Acuático – Condiciones técnicas 2026",
    descripcion: "Reglamento técnico para competencias de polo acuático 2026.",
    fechaPublicacion: "2025-11-20",
    archivo: "/documentos/polo-acuatico-condiciones-tecnicas-2026.pdf",
  },
  {
    slug: "clavado-condiciones-tecnicas-2026",
    titulo: "Clavado – Condiciones técnicas 2026",
    descripcion: "Normas y especificaciones técnicas para clavado 2026.",
    fechaPublicacion: "2025-11-25",
    archivo: "/documentos/clavado-condiciones-tecnicas-2026.pdf",
  },
  {
    slug: "master-marcas-minimas-2026",
    titulo: "Máster – Marcas mínimas 2026",
    descripcion: "Marcas mínimas para las categorías máster en natación 2026.",
    fechaPublicacion: "2025-11-30",
    archivo: "/documentos/master-marcas-minimas-2026.pdf",
  },
];
