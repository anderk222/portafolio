import { env } from '../../enviroment/var-enviroment';
import { Category } from './category';
const url = env.url + '/api/category'

const headers = {
    'Content-Type' : 'application/json'
}

export async function save_category(body : Category){

    const res = await fetch(url, {
      headers,
        method : 'POST',
        body : JSON.stringify(body)
    })

    const data = await res.json()

    if(res.status !=200) throw new Error(data.message);

    return data;

}

export function by_name(name : string) {

    return fetch(`${url}/${name}/name`,{ headers });

    
}