import { object, number, string } from 'yup';

export interface Category {
    id: number;
    name: string
}

export const category_schema = object().shape({
    id: number(),
    name: string().required().min(5)
})