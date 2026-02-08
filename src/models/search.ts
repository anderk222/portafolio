import { Category } from "../feature/category/model/category"

export type SearchArgs = {
    name :  string,
    category? : Category
    email?: string
}

