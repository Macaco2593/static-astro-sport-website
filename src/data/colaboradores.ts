import IDT from "../assets/idt-logo.png";



export interface colaborador {
  nombre: string; // used in /documentos/[slug]
  rol: string;
  logo: ImageMetadata
  ubicacion: string; // public URL to the PDF;
  descripcion?: string; // ISO string, e.g. "2025-01-15"

}

export const COLABORADORES: colaborador[] = [
  {
    nombre: "Instituto del Deporte Tachirense (IDT)",
    rol: "Aliado institucional",
    logo: IDT, // TODO: reemplazar por el logo real
    ubicacion: "Estado Táchira",
    descripcion:
      "Apoyo institucional para el desarrollo de los programas y competencias deportivas en el estado Táchira.",
  },
  // {
  //   nombre: "Alcaldía de San Cristóbal",
  //   rol: "Aliado gubernamental",
  //   logo: Alcaldia, // TODO: reemplazar por el logo real
  //   ubicacion: "x",
  //   descripcion:
  //     "Respaldo logístico y de infraestructura para eventos acuáticos de carácter regional y nacional.",
  // },
  // {
  //   nombre: "Empresa XYZ Deportes",
  //   rol: "Patrocinante oficial",
  //   logo: EmpresaXYZ, // TODO: reemplazar por el logo real
  //   ubicacion: "x",
  //   descripcion:
  //     "Suministro de implementos deportivos especializados para atletas y clubes afiliados.",
  // },
  // {
  //   nombre: "Fundación Aguas Vivas",
  //   rol: "Aliado social",
  //   logo: AguasVivas, // TODO: reemplazar por el logo real
  //   ubicacion: "x",
  //   descripcion:
  //     "Programas sociales orientados a la formación integral de niños y jóvenes a través de los deportes acuáticos.",
  // },
  // {
  //   nombre: "Universidad del Táchira",
  //   rol: "Aliado académico",
  //   logo: UNEDT, // TODO: reemplazar por el logo real
  //   ubicacion: "x",
  //   descripcion:
  //     "Convenios académicos y apoyo en investigación, medicina deportiva y formación de talento humano.",
  // },
  // {
  //   nombre: "Clínica Deportiva Andina",
  //   rol: "Apoyo médico",
  //   logo: ClinicaAndina, // TODO: reemplazar por el logo real
  //   ubicacion: "x",
  //   descripcion:
  //     "Atención médica especializada y seguimiento de la salud de atletas de alto rendimiento.",
  // },
];