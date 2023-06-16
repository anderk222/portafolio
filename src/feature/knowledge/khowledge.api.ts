import { env } from '../../enviroment/var-enviroment';
import { khowledge } from './khowledge';
import { paginable } from '../../models/response';
const url = env.url + '/api/knowledge';

const headers = {
    'Content-Type': 'application/json'
}

export async function save_knowledge(body: khowledge) {

    const res = await fetch(url, {
        headers,
        method: 'POST',
        body: JSON.stringify(body)
    })

    const data = await res.json();

    if (res.status != 201) throw new Error(data.message);

    return data;

}

export async function update_knowledge(body : khowledge) {

     const res = await fetch(url+`/${body.id}`, {
        headers,
        method: 'PUT',
        body: JSON.stringify(body)
    })

    const data = await res.json();

    if (res.status != 201) throw new Error(data.message);

    return data;

}

export function get_knowledges(params : string) {


    return fetch(url + `?${params}`, { headers });

}

export function search_knowledges(params : string){

    return fetch(url + `/search?${params}`, { headers });
    
}

export function get_knowledge(id: number | string) {

    return fetch(`${url}/${id}`, { headers });

};
