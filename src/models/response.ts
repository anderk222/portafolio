export type Pagination<T> ={
    page:  number
    count: number
    totalPages : number
    total: number
    data:  T[]
}

export type paginable = {
    page : number | string
    count : number | string
}

export function paginationDefault<T>():Pagination<T>{

    return {
            count: 20, 
            data: [],
            page: 1,
            total: 1
            , totalPages: 1
    }

}