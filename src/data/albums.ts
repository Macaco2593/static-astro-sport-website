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
  fotos?: Foto[];
  linkExterno?: string;
}

export interface FotoInput {
  archivo: string;
  alt?: string;
  ancho?: string;
}

function construirFotos(baseUrl: string, fotosInput: FotoInput[]): Foto[] {
  return fotosInput.map((foto) => {
    // 1. Reemplazamos los saltos de línea por espacios (asumiendo que fue un error de tipeo/copiado)
    // 2. Eliminamos espacios extra al inicio o final (.trim)
    const nombreLimpio = foto.archivo.replace(/\n/g, " ").trim();

    // 3. encodeURIComponent se encarga de convertir espacios en %20 y escapar caracteres problemáticos (ñ, tildes)
    const urlSegura = `${baseUrl.replace(/\/$/, "")}/${encodeURIComponent(nombreLimpio)}`;

    return {
      src: urlSegura,
      alt: foto.alt,
      ancho: foto.ancho,
    };
  });
}

function cantidadFotos(fotos: Foto[]): number {
  return fotos.length;
}

export const ALBUMES: Album[] = [
  // {
  //   id: "I-competencia-estadal-2026",
  //   titulo: "I Competencia Estadal 2026",
  //   fecha: "Marzo 2026",
  //   ubicación: "San Cristóbal",
  //   cover: "https://vkkeubhpapquorwauomt.supabase.co/storage/v1/object/public/galeria-adadet/galeria/2026/03-estadal-sancristobal/1.jpg",
  //   descripcion: "Jornada inaugural con la participación de más de 200 atletas infantiles.",
  //   etiquetas: ["Natación", "Infantil"],
  //   cantidadFotos: 25,
  //   fotos: [
  //     { src: "https://vkkeubhpapquorwauomt.supabase.co/storage/v1/object/public/galeria-adadet/galeria/2026/03-estadal-sancristobal/1.jpg", alt: "Salida", ancho: "wide" },
  //   ]
  // },
  {
    id: "I-estadal-2026",
    titulo: "I Competencia Estadal 2026",
    fecha: "Marzo 2026",
    ubicación: "San Cristóbal",
    cover:
      "https://vkkeubhpapquorwauomt.supabase.co/storage/v1/object/public/galeria-adadet/galeria/2026/03-estadal-sancristobal/VIERNES1erESTADAL-1.jpg",
    descripcion:
      "Jornada inaugural con la participación de más de 200 atletas infantiles.",
    etiquetas: ["Natación", "Infantil", "Competencia", "Federados"],
    linkExterno:
      "https://luiscobariarfotografia77.pixieset.com/1erestadaldenataciontachira2026/",
  },
  {
    id: "II-estadal-2026",
    titulo: "II Competencia Estadal 2026",
    fecha: "Agosto 2026",
    ubicación: "San Cristóbal",
    cover:
      "https://vkkeubhpapquorwauomt.supabase.co/storage/v1/object/public/galeria-adadet/galeria/2026/08-estadal-sancristobal/_DSC0500.jpg",
    descripcion:
      "Jornada inaugural con la participación de más de 200 atletas infantiles.",
    etiquetas: ["Natación", "Competencia", "Federados"],
    fotos: construirFotos(
      "https://vkkeubhpapquorwauomt.supabase.co/storage/v1/object/public/galeria-adadet/galeria/2026/08-estadal-sancristobal/",
      [
        { archivo: "_DSC0275.jpg" },
        { archivo: "_DSC0277 (1).jpg" },
        { archivo: "_DSC0293.jpg" },
        { archivo: "_DSC0325 (1).jpg" },
        { archivo: "_DSC0349.jpg" },
        { archivo: "_DSC0353 (1).jpg" },
        { archivo: "_DSC0373 (1).jpg" },
        { archivo: "_DSC0375 (1).jpg" },
        { archivo: "_DSC0378 (1).jpg" },
        { archivo: "_DSC0379 (1).jpg" },
        { archivo: "_DSC0390.jpg" },
        { archivo: "_DSC0392.jpg" },
        { archivo: "_DSC0406.jpg" },
        { archivo: "_DSC0407 (1).jpg" },
        { archivo: "_DSC0410 (1).jpg" },
        { archivo: "_DSC0414 (1).jpg" },
        { archivo: "_DSC0415.jpg" },
        { archivo: "_DSC0434.jpg" },
        { archivo: "_DSC0454.jpg" },
        { archivo: "_DSC0458.jpg" },
        { archivo: "_DSC0463 (1).jpg" },
        { archivo: "_DSC0470.jpg" },
        { archivo: "_DSC0474 (1).jpg" },
        { archivo: "_DSC0480.jpg" },
        { archivo: "_DSC0485.jpg" },
        { archivo: "_DSC0487.jpg" },
        { archivo: "_DSC0491.jpg" },
        { archivo: "_DSC0492.jpg" },
        { archivo: "_DSC0500.jpg" },
        { archivo: "_DSC0501 (1) (1).jpg" },
        { archivo: "_DSC0509.jpg" },
        { archivo: "_DSC0510.jpg" },
        { archivo: "_DSC0511.jpg" },
        { archivo: "_DSC0512 (1).jpg" },
        { archivo: "_DSC0520.jpg" },
        { archivo: "_DSC0545.jpg" },
        { archivo: "_DSC0546.jpg" },
        { archivo: "_DSC0548 (1).jpg" },
        { archivo: "_DSC0563.jpg" },
        { archivo: "_DSC0566 (1).jpg" },
        { archivo: "_DSC0575.jpg" },
        { archivo: "_DSC0577 (1).jpg" },
        { archivo: "_DSC0581.jpg" },
        { archivo: "_DSC0589 (1).jpg" },
        { archivo: "_DSC0595 (1) (1).jpg" },
        { archivo: "_DSC0598.jpg" },
        { archivo: "_DSC0600.jpg" },
        { archivo: "_DSC0604.jpg" },
        { archivo: "_DSC0605 (1).jpg" },
        { archivo: "_DSC0606.jpg" },
        { archivo: "_DSC0612.jpg" },
        { archivo: "_DSC0613 (1).jpg" },
        { archivo: "_DSC0616 (1).jpg" },
        { archivo: "_DSC0617 (1) (2).jpg" },
        { archivo: "_DSC0618 (1).jpg" },
        { archivo: "_DSC0625 (1).jpg" },
        { archivo: "_DSC0629.jpg" },
        { archivo: "_DSC0632 (2).jpg" },
        { archivo: "_DSC0643 (1).jpg" },
        { archivo: "_DSC0645 (1).jpg" },
        { archivo: "_DSC0645.jpg" },
      ],
    ),
  },
  // ...
];
