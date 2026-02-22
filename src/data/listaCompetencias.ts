import primerEstadal2026 from "../assets/1er-estadal-adadet-2026.jpeg";
import primerRegional2026 from "../assets/1er-regional-adaefalcon-2026.jpeg"

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
    img: ImageMetadata
    linkEnVivo?: string
}
interface Resultado {
    titulo: string,
    nombreArchivo: string
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
        img: primerEstadal2026,
        resultados: [
            {
                titulo: 'Condiciones Generales',
                nombreArchivo: 'condicion_general.pdf'
            },
            {
                titulo: 'Resultados Individuales Completos',
                nombreArchivo: 'resultados_individuales.pdf'
            },
            {
                titulo: 'Resultados por Equipos',
                nombreArchivo: 'resultados_por_equipo.pdf'
            },
            {
                titulo: 'Mejores Atletas por Categorías',
                nombreArchivo: 'mejores_atletas.pdf',
            },
        ],
        linkEnVivo: 'https://resultados.adadet.org',
    },
    
    {
        id: 2,
        titulo: 'I Competencia Regional ADAEFALCON 2026',
        tipo: 'regional',
        linkDeLaCompetencia: '/competencias_pdf/I-competencia-regional-adaefalcon-2026',
        fechaDeSubida: '16-02-2026',
        fechaInicio: '14/04/2026',
        fechaFinalizacion: '18/04/2026',
        img: primerRegional2026,
        resultados: [
            {
                titulo: 'Condiciones Generales',
                nombreArchivo: 'condicion_general.pdf'
            },
            {
                titulo: 'Resultados Individuales Completos',
                nombreArchivo: 'resultados_individuales.pdf'
            },
            {
                titulo: 'Resultados por Equipos',
                nombreArchivo: 'resultados_por_equipo.pdf'
            },
            {
                titulo: 'Mejores Atletas por Categorías',
                nombreArchivo: 'mejores_atletas.pdf'
            }
        ]
    },
]
