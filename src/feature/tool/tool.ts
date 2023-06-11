import { number, object, string } from 'yup'

export interface Tool {
    id:       number;
    name:     string;
    category: Category;
    img : string
}

export interface Category {
    id: number;
    name : string
}

export const category_schema = object({

    id : number(),
    url : string().required().min(5)

})
export const tool_schema = object({
    id : number(),
    name : string().min(2).max(40).required(),
    category : category_schema,
    img : string().required().min(5)

});