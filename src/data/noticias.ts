import evaluacionTecnicaNacionalNatacionArtistica from "src/assets/noticias/evaluacion_tecnica_natacion_artistica.jpeg";

export interface Noticia {
  slug: string;       // Para la URL: /noticias/ganadores-estatales-2026
  titulo: string;
  resumen: string;    // Texto corto para la tarjeta
  contenido: string;  // Texto largo (HTML o párrafos)
  fecha: string;      // Formato YYYY-MM-DD
  imagen?: ImageMetadata;    // Ruta de la imagen (ej: /img/noticias/foto1.jpg)
  categoria: "Natación" | "Aguas Abiertas" | "Institucional" | "Torneos" | "Natación Artística" | "Polo Acuático" | "Clavado" | "Máster"; // Para filtrar por categoría
}

export const NOTICIAS: Noticia[] = [
  {
    slug: "evaluacion-tecnica-nacional-natacion-artistica-2026",
    titulo: "Evaluación Técnica Nacional - Natación Artística 2026",
    resumen: "Este año entrante inicia con la Evaluación Técnica Nacional de las categorias infantil, juvenil, junior y senior.",
    contenido: "<p>Saludos, espero se encuentren bien. Con gran entusiasmo, aprovecho para informar sobre el inicio de la temporada 2026 con la Evaluación Técnica Nacional de las categorías infantil, juvenil, junior y senior. Este actividad se llevará a cabo en las instalaciones del Círculo Militar de San Cristóbal del 27 de febrero al 01 de marzo. El objetivo de esta evaluación es la conformación de equipos nacionales en cada categoría, en el marco de nuestro proyecto nacional 'Un sueño Olímpico'. Este refuerzo busca desarorllar y potenciar el talento de nuestros atletas, llevándolos a representar a Venezuela en competencias internacionales Dios mediante.</p><p>Participarán 43 atletas confirmadas de diferentes clubes del país, quienes se unirán en esta jornada de talento y dedicación junto a entrenadoras y jueces nacionales.</p> <p> Trabajemos juntos por un mismo sueño: el de llevar a la Natación Artística a unos Juegos Olímpicos. </p> <p>Con aprecio.</p> <p><strong>José Antonio Satana.</strong></p>",
    fecha: "2026-02-16",
    imagen: evaluacionTecnicaNacionalNatacionArtistica, 
    categoria: "Natación Artística"
  },

];