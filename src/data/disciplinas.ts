export interface DisciplinaBase {
  slug: string;
  titulo: string;
  descripcion: string;
}

export const BASE_DISCIPLINAS: DisciplinaBase[] = [
  {
    slug: "natacio",
    titulo: "Natación",
    descripcion: "La natación es el corazón de los deportes acuáticos. Más allá de ser una práctica recreativa, representa un compromiso de disciplina y técnica que ha llevado el tricolor nacional a los podios más exigentes del ciclo olímpico. Táchira ha sido históricamente una cantera determinante para la selección nacional",
  },
  {
    slug: "aguas-abiertas",
    titulo: "Aguas Abiertas",
    descripcion: "Pruebas de natación en aguas abiertas (ríos, lagos, mar).",
  },
  {
    slug: "natacion-artistica",
    titulo: "Natación Artística",
    descripcion: "Coreografías acuáticas sincronizadas.",
  },
  {
    slug: "polo-acuatico",
    titulo: "Polo Acuático",
    descripcion: "Juego de equipo en el agua.",
  },
  {
    slug: "clavado",
    titulo: "Clavado",
    descripcion: "Saltos ornamentales desde trampolín o plataforma.",
  },
  {
    slug: "master",
    titulo: "Máster",
    descripcion: "Natación para categorías máster.",
  },
];
