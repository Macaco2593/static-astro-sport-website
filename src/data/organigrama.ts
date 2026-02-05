export interface OrganigramaCargo {
  rol: string;
  persona?: string;
  descripcion?: string;
}

export interface OrganigramaNivel {
  titulo: string;
  cargos: OrganigramaCargo[];
}

// Nota: Ajusta este organigrama con los cargos/nombres reales.
// Se renderiza en la página /quienes-somos.
export const ORGANIGRAMA_NIVELES: OrganigramaNivel[] = [
  {
    titulo: "Órgano superior",
    cargos: [
      {
        rol: "Asamblea General",
        descripcion: "Instancia máxima de decisión y orientación institucional.",
      },
    ],
  },
  {
    titulo: "Junta Directiva",
    cargos: [
      { rol: "Presidencia", persona: "Por definir" },
      { rol: "Vicepresidencia", persona: "Por definir" },
      { rol: "Secretaría General", persona: "Por definir" },
      { rol: "Tesorería", persona: "Por definir" },
    ],
  },
  {
    titulo: "Direcciones y comisiones",
    cargos: [
      { rol: "Dirección Técnica", persona: "Por definir" },
      { rol: "Dirección de Eventos y Competencias", persona: "Por definir" },
      { rol: "Coordinación de Formación y Desarrollo", persona: "Por definir" },
      { rol: "Comisión de Disciplina", persona: "Por definir" },
      { rol: "Comisión de Arbitraje", persona: "Por definir" },
      { rol: "Comunicación y Relaciones Institucionales", persona: "Por definir" },
    ],
  },
] as const;
