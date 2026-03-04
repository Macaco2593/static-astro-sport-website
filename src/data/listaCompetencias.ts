export interface ICompetencia {
    id: number
    titulo: string
    /**
     * Tipo de competencia para poder agruparlas en la vista
     * Puede ser: 'estadal' | 'regional' | 'nacional'
     */
    tipo: 'estadal' | 'regional' | 'nacional'
    linkDeLaCompetencia: string
    fechaDeSubida: string
    fechaInicio: string
    fechaFinalizacion: string
    resultados: Resultado[]
    img: string
    linksEnVivo?: LinkEnVivo[]
    enVivoPendiente?: boolean

}
interface Resultado {
    titulo: string,
    nombreArchivo: string
    pendiente?: boolean
}

interface LinkEnVivo {
    titulo: string
    link: string
    pendiente?: boolean
}
export const ListaCompetencias: ICompetencia[] = [
    {
        id: 1,
        titulo: 'I Competencia Estadal 2026',
        tipo: 'estadal',
        linkDeLaCompetencia: '/competencias_pdf/I-competencia-estadal-2026',
        fechaDeSubida: '15-02-2026',
        fechaInicio: '05/03/2026',
        fechaFinalizacion: '08/03/2026',
        img: "https://vkkeubhpapquorwauomt.supabase.co/storage/v1/object/public/galeria-adadet/competencias-folletos/2026/03-estadal-sancristobal-folleto.jpeg",
        resultados: [
            {
                titulo: 'Condiciones Generales',
                nombreArchivo: 'condicion_general.pdf'
            },
            {
                titulo: 'Resultados Individuales Completos',
                nombreArchivo: 'resultados_individuales.pdf',
                pendiente: true
            },
            {
                titulo: 'Resultados por Equipos',
                nombreArchivo: 'resultados_por_equipo.pdf',
                pendiente: true
            },
            {
                titulo: 'Mejores Atletas por Categorías',
                nombreArchivo: 'mejores_atletas.pdf',
                pendiente: true
            },
        ],
        linksEnVivo: [
            {
                titulo: 'Resultados Escuelas en Tiempo Real',
                link: 'https://resultados.adadet.org/1er-estadal-2026/escuelas',
                pendiente: true
            },
            {
                titulo: 'Resultados Federados en Tiempo Real',
                link: 'https://resultados.adadet.org/1er-estadal-2026/federados',
                pendiente: true
            }
        ],
    },
    
    {
        id: 2,
        titulo: 'I Competencia Regional ADAEFALCON 2026',
        tipo: 'regional',
        linkDeLaCompetencia: '/competencias_pdf/I-competencia-regional-adaefalcon-2026',
        fechaDeSubida: '16-02-2026',
        fechaInicio: '14/04/2026',
        fechaFinalizacion: '18/04/2026',
        img: "https://vkkeubhpapquorwauomt.supabase.co/storage/v1/object/public/galeria-adadet/competencias-folletos/2026/04-regional-adaefalcon-folleto.jpeg",
        resultados: [
            {
                titulo: 'Condiciones Generales',
                nombreArchivo: 'condicion_general.pdf'
            },
            {
                titulo: 'Resultados Individuales Completos',
                nombreArchivo: 'resultados_individuales.pdf',
                pendiente: true
            },
            {
                titulo: 'Resultados por Equipos',
                nombreArchivo: 'resultados_por_equipo.pdf',
                pendiente: true
            },
            {
                titulo: 'Mejores Atletas por Categorías',
                nombreArchivo: 'mejores_atletas.pdf',
                pendiente: true
            }
        ]
    },
]
