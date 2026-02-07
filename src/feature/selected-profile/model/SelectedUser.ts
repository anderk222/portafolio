
export type SelectedProfile = {

    id : number,
    estado: 'ACTIVO' | 'DESACTIVADO' | 'ELIMINADO'
    createAt : string,
    desactiveAt? : string
    userId: number
    mail : string
    name: string
    img: string

}