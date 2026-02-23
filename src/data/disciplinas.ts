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
        slugDocumento: DOCUMENTOS_SLUG.NATACION_CONDICIONES_GENERALES_2026,
        etiqueta: "Condiciones Generales",
      },
      // {
      //   slugDocumento: DOCUMENTOS_SLUG.NATACION_RANKING_2026,
      //   etiqueta: "Ranking",
      // },
    ],
  },
  {
    slug: BASE_DISCIPLINAS_SLUG.aguasAbiertas,
    titulo: "Aguas Abiertas",
    descripcion: "La prueba definitiva de resistencia y estrategia en contacto directo con la naturaleza. Esta disciplina exige una fortaleza mental inquebrantable para desafiar corrientes y largas distancias, forjando nadadores con un carácter de acero que representan la garra andina en cada brazada, fuera de la piscina",
    imagenUrl: aguasAbiertas,
    documentos: [
      {
        slugDocumento: DOCUMENTOS_SLUG.AGUAS_ABIERTAS_CONDICIONES_TECNICAS_2026,
        etiqueta: "Condiciones técnicas",
      },
    ],
  },
  {
    slug: BASE_DISCIPLINAS_SLUG.natacionArtistica,
    titulo: "Natación Artística",
    descripcion: "La fusión perfecta entre la elegancia del arte y la potencia atlética extrema. Donde la fuerza se disfraza de gracia y la precisión es absoluta. Nuestras atletas transforman el agua en un escenario, demostrando que la sincronización y la belleza estética son el resultado de un rigor técnico de clase mundial",
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
    descripcion: "El deporte de conjunto por excelencia, donde la intensidad del contacto físico se une a la inteligencia táctica. El Polo Acuático es sinónimo de hermandad y estrategia colectiva. Una disciplina vibrante que cultiva líderes, resistencia y un espíritu de equipo indomable necesario para dominar el juego",
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
    titulo: "Salto Ornamental",
    descripcion: "El arte de desafiar la gravedad con valentía y precisión milimétrica. En cuestión de segundos, nuestros clavadistas combinan acrobacia aérea y control absoluto, convirtiendo el riesgo en perfección. Una disciplina espectacular que requiere nervios de acero y una técnica depurada desde las alturas.",
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
    descripcion: "La prueba viviente de que la pasión por el agua no tiene fecha de caducidad. La categoría Máster reúne a ex-atletas de alto rendimiento y entusiastas que mantienen viva la llama de la competencia, sirviendo como pilar de experiencia y ejemplo de longevidad deportiva para las nuevas generaciones del estado",
    imagenUrl: master,
    documentos: [
      {
        slugDocumento: DOCUMENTOS_SLUG.MASTER_CONDICIONES_TECNICAS_2026,
        etiqueta: "Condiciones técnicas",
      },
    ],
  },
];
