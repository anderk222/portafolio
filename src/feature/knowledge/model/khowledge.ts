import { object, number, string, array } from 'yup';
import { Tool } from '../../tool/tool';

export type khowledge = {

    id : number
    time : string
    level : number
    tool : Tool

};


export const khowledge_schema = object({

    id : number(),
    time : string().required(),
    level : number().required().test('len', 'Must be less than 100', (v)=> !v || v  < 101),
    tools : array(object({ id : number() }))

})