export enum TipoNotificacao {
    SUCESSO,
    FALHA,
    ATENCAO
}




export interface INotificacoes {
    titulo: string
    texto: string
    tipo: TipoNotificacao
    id: number
}