export type Pagination<T> ={
    page:  number
    count: number
    total: number
    data:  T[]
}

export type paginable = {
    page : number | string
    count : number | string
}