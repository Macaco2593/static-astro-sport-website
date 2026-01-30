export interface DisciplinaDocumentoLink {
  slugDocumento: string; // slug en DOCUMENTOS usado en /documentos/[slug]
  etiqueta: string;      // texto del botón ("Marcas mínimas", etc.)
}

export interface DisciplinaBase {
  slug: string;
  titulo: string;
  descripcion: string;
  imagenUrl: string;
  documentos?: DisciplinaDocumentoLink[];
}

export const BASE_DISCIPLINAS: DisciplinaBase[] = [
  {
    slug: "natacion",
    titulo: "Natación",
    descripcion: "La natación es el corazón de los deportes acuáticos. Más allá de ser una práctica recreativa, representa un compromiso de disciplina y técnica que ha llevado el tricolor nacional a los podios más exigentes del ciclo olímpico. Táchira ha sido históricamente una cantera determinante para la selección nacional",
    imagenUrl: '/Imagen1.jpg',
    documentos: [
      {
        slugDocumento: "natacion-marcas-minimas-2026",
        etiqueta: "Marcas mínimas",
      },
      {
        slugDocumento: "natacion-condiciones-tecnicas-2026",
        etiqueta: "Condiciones técnicas",
      },
      {
        slugDocumento: "natacion-ranking-2026",
        etiqueta: "Ranking",
      },
    ],
  },
  {
    slug: "aguas-abiertas",
    titulo: "Aguas Abiertas",
    descripcion: "Pruebas de natación en aguas abiertas (ríos, lagos, mar).",
    imagenUrl: '/Imagen1.jpg',
    documentos: [
      {
        slugDocumento: "aguas-abiertas-marcas-minimas-2026",
        etiqueta: "Marcas mínimas",
      },
      {
        slugDocumento: "aguas-abiertas-condiciones-tecnicas-2026",
        etiqueta: "Condiciones técnicas",
      },
    ],
  },
  {
    slug: "natacion-artistica",
    titulo: "Natación Artística",
    descripcion: "Coreografías acuáticas sincronizadas.",
    imagenUrl: '/Imagen1.jpg',
    documentos: [
      {
        slugDocumento: "natacion-artistica-condiciones-tecnicas-2026",
        etiqueta: "Condiciones técnicas",
      },
    ],
  },
  {
    slug: "polo-acuatico",
    titulo: "Polo Acuático",
    descripcion: "Juego de equipo en el agua.",
    imagenUrl: '/Imagen1.jpg',
    documentos: [
      {
        slugDocumento: "polo-acuatico-condiciones-tecnicas-2026",
        etiqueta: "Condiciones técnicas",
      },
    ],
  },
  {
    slug: "clavado",
    titulo: "Clavado",
    descripcion: "Saltos ornamentales desde trampolín o plataforma.",
    imagenUrl: '/Imagen1.jpg',
    documentos: [
      {
        slugDocumento: "clavado-condiciones-tecnicas-2026",
        etiqueta: "Condiciones técnicas",
      },
    ],
  },
  {
    slug: "master",
    titulo: "Máster",
    descripcion: "Natación para categorías máster.",
    imagenUrl: '/Imagen1.jpg',
    documentos: [
      {
        slugDocumento: "master-marcas-minimas-2026",
        etiqueta: "Marcas mínimas",
      },
    ],
  },
];
