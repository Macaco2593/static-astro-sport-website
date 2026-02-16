// src/data/albums.ts
import type { ImageMetadata } from 'astro'; // Importamos el tipo de Astro

// IMPORTA TUS IMÁGENES AQUÍ (Desde src/assets/...)
// Asegúrate de que la ruta sea correcta desde este archivo.
// Si estás en src/data, y las fotos en src/assets, subes uno (..) y entras a assets.
import imgEstadal1 from "../assets/albums/1er-estadal-2025/1.jpg";

export interface Foto {
  src: ImageMetadata; // CAMBIO: Ya no es string, es un objeto de imagen importada
  alt?: string;
  ancho?: string; 
}

export interface Album {
  id: string;
  titulo: string;
  fecha: string;
  ubicación: string;
  cover: ImageMetadata; // CAMBIO: La portada también debe ser importada
  descripcion: string;
  etiquetas: string[];
  fotos: Foto[]; 
  linkExterno?: string; 
  cantidadFotos?: number; 
}

export const ALBUMES: Album[] = [
  {
    id: "estadal-masificacion-2026",
    titulo: "I Competencia Estadal 2026",
    fecha: "Marzo 2026",
    ubicación: "San Cristóbal",
    // Usamos la variable importada, NO el texto
    cover: imgEstadal1, 
    descripcion: "Jornada inaugural con la participación de más de 200 atletas infantiles.",
    etiquetas: ["Natación", "Infantil"],
    cantidadFotos: 25,
    fotos: [
      { src: imgEstadal1, alt: "Salida", ancho: "wide" },
    ]
  },
  // ...
];