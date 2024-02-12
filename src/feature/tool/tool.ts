import { number, object, string } from 'yup'
import { category_schema, Category } from '../category/model/category';

export interface Tool {
    id:       number;
    name:     string;
    category: Category;
    img : string
}


export const tool_schema = object({
    id : number(),
    name : string().min(2).max(40).required(),
    category : object({id : number().required().min(1)}),
    img : string().required().min(5)

});