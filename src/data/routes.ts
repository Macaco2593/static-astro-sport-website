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

    galeria_album: (id: string) => `/galeria/${id}`,
    RESULTADOS_SLUG: (slug: string) => `/resultados/${slug}`,
    documento: (slug: string) => `/documentos/${slug}`,
    disciplina: (slug: string) => `/disciplinas/${slug}`,
    noticia: (slug: string) => `/noticias/${slug}`,
} as const;

export type RouteKey = keyof typeof ROUTES;
export default ROUTES;