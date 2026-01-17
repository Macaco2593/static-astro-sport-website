export interface ICompetencia {
    id: number
    titulo: string
    linkDeLaCompetencia: string
    fechaDeSubida: string
    fechaInicio: string
    fechaFinalizacion: string
    archivosAdjuntos: {
        condicionesGeneral: string
        resultadosIndividuales: string
        resultadosPorEquipo: string
        mejoresAtletas: string
    }
}
export const ListaCompetencias: ICompetencia[] = [
    {
        id: 1,
        titulo: 'Competencia Estadal Número 1',
        linkDeLaCompetencia: '/competencias_pdf/competencia-estadal-numero-1',
        fechaDeSubida: '17-01-2026',
        fechaInicio: '01/01/2026',
        fechaFinalizacion: '10/01/2026',
        archivosAdjuntos: {
            condicionesGeneral: 'condicion_general.pdf',
            resultadosIndividuales: 'resultados_individuales.pdf',
            resultadosPorEquipo: 'resultados_por_equipo.pdf',
            mejoresAtletas: 'mejores_atletas.pdf'
        }
    }
]