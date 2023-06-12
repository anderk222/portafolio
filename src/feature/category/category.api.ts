import { env } from '../../enviroment/var-enviroment';
import { category } from './category';
const url = env.url + '/api/category'

export async function save_category(body : category){

    const res = await fetch(url, {
        method : 'POST',
        body : JSON.stringify(body)
    })

    const data = await res.json()

    if(res.status !=201) throw new Error(data.message);

    return data;

}