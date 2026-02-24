export interface Foto {
  src: string;
  alt?: string;
  ancho?: string; 
}

export interface Album {
  id: string;
  titulo: string;
  fecha: string;
  ubicación: string;
  cover: string;
  descripcion: string;
  etiquetas: string[];
  fotos: Foto[]; 
  linkExterno?: string; 
  cantidadFotos?: number; 
}

function cantidadFotos(fotos: Foto[]): number {
  return fotos.length;
}

export const ALBUMES: Album[] = [
  {
    id: "I-competencia-estadal-2026",
    titulo: "I Competencia Estadal 2026",
    fecha: "Marzo 2026",
    ubicación: "San Cristóbal",
    // Usamos la variable importada, NO el texto
    cover: "https://vkkeubhpapquorwauomt.supabase.co/storage/v1/object/public/galeria-adadet/galeria/2026/03-estadal-sancristobal/1.jpg", 
    descripcion: "Jornada inaugural con la participación de más de 200 atletas infantiles.",
    etiquetas: ["Natación", "Infantil"],
    cantidadFotos: 25,
    fotos: [
      { src: "https://vkkeubhpapquorwauomt.supabase.co/storage/v1/object/public/galeria-adadet/galeria/2026/03-estadal-sancristobal/1.jpg", alt: "Salida", ancho: "wide" },
    ]
  },
  // ...
];