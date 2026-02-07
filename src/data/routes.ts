export const ROUTES = {
    HOME: "/",
    DOCUMENTOS: "/documentos",
    CONTACTO: "/contacto",
    QUIENES_SOMOS: "/quienes-somos",
    CALENDARIO: "/calendario",
    RANKING: "/ranking",
    GALERIA: "/galeria",
    COLABORADORES: "/colaboradores",
    RESULTADOS: "/resultados",

    RESULTADOS_SLUG: (slug: string) => `/resultados/${slug}`,
    documento: (slug: string) => `/documentos/${slug}`,
    disciplina: (slug: string) => `/disciplinas/${slug}`,
} as const;

export type RouteKey = keyof typeof ROUTES;
export default ROUTES;