import { array, number, object, string } from "yup";
import { Tool } from '../../tool/tool';

export interface Project {
    id:     number;
    name:   string;
    quickDetail : string;
    detail: string;
    url:    string | null;
    tools:  Tool[];
    images: Image[];
}

export interface Image {
    id:  number;
    url: string;
}

export function empty():Project{

    return {
        id:0,
        name: '',
        quickDetail: '',
        detail: '',
        url: '',
        images: [],
        tools: []
    }

}

export const image_schema = object({

    id : number(),
    url : string().required().min(5)

});

export const project_schema = object({

    id : number(),
    name : string().required().min(2).max(30),
    quickDetail : string().required().min(2).max(255),
    detail : string().min(5).required(),
    url : string().min(5),
    tools : array(object({id : number().required().min(1)})),
    images : array(image_schema)

});