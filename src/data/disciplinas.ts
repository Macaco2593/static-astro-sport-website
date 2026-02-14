import { DOCUMENTOS_SLUG } from "./documentos.ts";
import natacion from 'src/assets/natacion.jpg';
import aguasAbiertas from 'src/assets/aguas-abiertas.jpeg';
import natacionArtistica from 'src/assets/natacion-artistica.jpg';
import poloAcuatico from 'src/assets/polo-acuatico.jpg';
import clavado from 'src/assets/clavado.jpg';
import master from 'src/assets/master.jpg';

export interface DisciplinaDocumentoLink {
  slugDocumento: string; // slug en DOCUMENTOS usado en /documentos/[slug]
  etiqueta: string;      // texto del botón ("Marcas mínimas", etc.)
}

export interface DisciplinaBase {
  slug: string;
  titulo: string;
  descripcion: string;
  imagenUrl: ImageMetadata;
  documentos?: DisciplinaDocumentoLink[];
}

export const BASE_DISCIPLINAS_SLUG = {
  natacion: "natacion",
  aguasAbiertas: "aguas-abiertas",
  natacionArtistica: "natacion-artistica",
  poloAcuatico: "polo-acuatico",
  clavado: "clavado",
  master: "master",
};


export const BASE_DISCIPLINAS: DisciplinaBase[] = [
  {
    slug: BASE_DISCIPLINAS_SLUG.natacion,
    titulo: "Natación",
    descripcion: "La natación es el corazón de los deportes acuáticos. Más allá de ser una práctica recreativa, representa un compromiso de disciplina y técnica que ha llevado el tricolor nacional a los podios más exigentes del ciclo olímpico. Táchira ha sido históricamente una cantera determinante para la selección nacional",
    imagenUrl: natacion,
    documentos: [
      {
        slugDocumento: DOCUMENTOS_SLUG.NATACION_MARCAS_MINIMAS_2026,
        etiqueta: "Marcas mínimas",
      },
      {
        slugDocumento: DOCUMENTOS_SLUG.NATACION_CONDICIONES_TECNICAS_2026,
        etiqueta: "Condiciones técnicas",
      },
      {
        slugDocumento: DOCUMENTOS_SLUG.NATACION_RANKING_2026,
        etiqueta: "Ranking",
      },
    ],
  },
  {
    slug: BASE_DISCIPLINAS_SLUG.aguasAbiertas,
    titulo: "Aguas Abiertas",
    descripcion: "Pruebas de natación en aguas abiertas (ríos, lagos, mar).",
    imagenUrl: aguasAbiertas,
    documentos: [
      {
        slugDocumento: DOCUMENTOS_SLUG.AGUAS_ABIERTAS_MARCAS_MINIMAS_2026,
        etiqueta: "Marcas mínimas",
      },
      {
        slugDocumento: DOCUMENTOS_SLUG.AGUAS_ABIERTAS_CONDICIONES_TECNICAS_2026,
        etiqueta: "Condiciones técnicas",
      },
    ],
  },
  {
    slug: BASE_DISCIPLINAS_SLUG.natacionArtistica,
    titulo: "Natación Artística",
    descripcion: "Coreografías acuáticas sincronizadas.",
    imagenUrl: natacionArtistica,
    documentos: [
      {
        slugDocumento: DOCUMENTOS_SLUG.NATACION_ARTISTICA_CONDICIONES_TECNICAS_2026,
        etiqueta: "Condiciones técnicas",
      },
    ],
  },
  {
    slug: BASE_DISCIPLINAS_SLUG.poloAcuatico,
    titulo: "Polo Acuático",
    descripcion: "Juego de equipo en el agua.",
    imagenUrl: poloAcuatico,
    documentos: [
      {
        slugDocumento: DOCUMENTOS_SLUG.POLO_ACUATICO_CONDICIONES_TECNICAS_2026,
        etiqueta: "Condiciones técnicas",
      },
    ],
  },
  {
    slug: BASE_DISCIPLINAS_SLUG.clavado,
    titulo: "Clavado",
    descripcion: "Saltos ornamentales desde trampolín o plataforma.",
    imagenUrl: clavado,
    documentos: [
      {
        slugDocumento: DOCUMENTOS_SLUG.CLAVADO_CONDICIONES_TECNICAS_2026,
        etiqueta: "Condiciones técnicas",
      },
    ],
  },
  {
    slug: BASE_DISCIPLINAS_SLUG.master,
    titulo: "Máster",
    descripcion: "Natación para categorías máster.",
    imagenUrl: master,
    documentos: [
      {
        slugDocumento: DOCUMENTOS_SLUG.MASTER_MARCAS_MINIMAS_2026,
        etiqueta: "Marcas mínimas",
      },
    ],
  },
];
