// Datos completos que usará el frontend (mezcla de info estática + assets de Strapi)
export interface Disciplina {
  slug: string;
  titulo: string;
  descripcion: string;
  imagenUrl?: string;
  pdfUrl?: string;
}

// Solo lo que viene de Strapi (imagen + pdf), indexado por slug
export interface DisciplinaAssets {
  slug: string;
  imagenUrl?: string;
  pdfUrl?: string;
}
