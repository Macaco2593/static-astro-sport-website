export interface ICompetencia {
  id: number;
  titulo: string;
  /**
   * Tipo de competencia para poder agruparlas en la vista
   * Puede ser: 'estadal' | 'regional' | 'nacional'
   */
  tipo: "estadal" | "regional" | "nacional";
  linkDeLaCompetencia: string;
  fechaDeSubida: string;
  fechaInicio: string;
  fechaFinalizacion: string;
  resultados: Resultado[];
  img: string;
  linksEnVivo?: LinkEnVivo[];
  enVivoPendiente?: boolean;
}
interface Resultado {
  titulo: string;
  nombreArchivo: string;
  pendiente?: boolean;
}

interface LinkEnVivo {
  titulo: string;
  link: string;
  pendiente?: boolean;
}
export const ListaCompetencias: ICompetencia[] = [
  {
    id: 1,
    titulo: "I Competencia Estadal 2026",
    tipo: "estadal",
    linkDeLaCompetencia: "/competencias_pdf/I-competencia-estadal-2026",
    fechaDeSubida: "2026-02-15",
    fechaInicio: "2026-03-05",
    fechaFinalizacion: "2026-03-08",
    img: `${import.meta.env.BUCKET_CLOUDR2}/competencias-folletos/2026/03-estadal-sancristobal-folleto.jpeg`,
    resultados: [
      {
        titulo: "Condiciones Generales",
        nombreArchivo: "condicion_general.pdf",
      },
      {
        titulo: "Resultados Individuales Completos FEDERADOS",
        nombreArchivo: "resultados_individuales_completos_federados.pdf",
      },
      {
        titulo: "Resultados Individuales Completos ESCUELAS",
        nombreArchivo: "resultados_individuales_completos_escuelas.pdf",
      },
      {
        titulo: "Puntuación por Equipos FEDERADOS",
        nombreArchivo: "puntuacion_por_equipos_federados.pdf",
      },
      {
        titulo: "Puntuación por Equipos ESCUELAS",
        nombreArchivo: "puntuacion_por_equipos_escuelas.pdf",
      },
    ],
    linksEnVivo: [
      {
        titulo: "Resultados Escuelas en Tiempo Real",
        link: "https://resultados.adadet.org/1er-estadal-2026/escuelas",
        pendiente: false,
      },
      {
        titulo: "Resultados Federados en Tiempo Real",
        link: "https://resultados.adadet.org/1er-estadal-2026/federados",
        pendiente: false,
      },
    ],
  },

  {
    id: 2,
    titulo: "I Competencia Regional ADAEFALCON 2026",
    tipo: "regional",
    linkDeLaCompetencia:
      "/competencias_pdf/I-competencia-regional-adaefalcon-2026",
    fechaDeSubida: "2026-02-16",
    fechaInicio: "2026-04-14",
    fechaFinalizacion: "2026-04-18",
    img: `${import.meta.env.BUCKET_CLOUDR2}/competencias-folletos/2026/04-regional-adaefalcon-folleto.jpeg`,
    resultados: [
      {
        titulo: "Condiciones Generales",
        nombreArchivo: "condicion_general.pdf",
      },
      {
        titulo: "Resultados Individuales Completos",
        nombreArchivo: "Resultados_Todas_Las_Jornadas.pdf",
      },
      {
        titulo: "Puntuación por Asociaciones",
        nombreArchivo: "Puntuacion_por_Asociaciones.pdf",
      },
      {
        titulo: "Mejores Nadadores Coro 2026",
        nombreArchivo: "Mejores_Nadadores_Coro_2026.pdf",
      },
    ],
  },

  {
    id: 3,
    titulo: "II Competencia Estadal 2026",
    tipo: "estadal",
    linkDeLaCompetencia: "/competencias_pdf/II-competencia-estadal-2026",
    fechaDeSubida: "2026-07-21",
    fechaInicio: "2026-08-20",
    fechaFinalizacion: "2026-08-22",
    img: `${import.meta.env.BUCKET_CLOUDR2}/competencias-folletos/2026/08-estadal-sancristobal-folleto.jpeg`,
    resultados: [
      {
        titulo: "Condiciones Generales",
        nombreArchivo: "condicion_general.pdf",
      },
      {
        titulo: "Resultados Individuales Completos FEDERADOS",
        nombreArchivo: "resultados_individuales_completos_federados.pdf",
      },
      {
        titulo: "Resultados Individuales Completos ESCUELAS",
        nombreArchivo: "resultados_individuales_completos_escuelas.pdf",
      },
      {
        titulo: "Puntuación por Equipos FEDERADOS",
        nombreArchivo: "puntuacion_por_equipos_federados.pdf",
      },
      {
        titulo: "Puntuación por Equipos ESCUELAS",
        nombreArchivo: "puntuacion_por_equipos_escuelas.pdf",
      },
    ],
    linksEnVivo: [
      {
        titulo: "Resultados Escuelas en Tiempo Real",
        link: "https://resultados.adadet.org/2do-estadal-2026/escuelas",
        pendiente: false,
      },
      {
        titulo: "Resultados Federados en Tiempo Real",
        link: "https://resultados.adadet.org/2do-estadal-2026/federados",
        pendiente: false,
      },
    ],
  },
];
