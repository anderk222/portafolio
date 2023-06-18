import { env } from '../../enviroment/var-enviroment';
import { khowledge } from './khowledge';
const url = env.url + '/api/skill';

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

export async function delete_skill(id : number) {

    const res = await fetch(url+`/${id}`, {
        headers,
        method: 'DELETE',
    })

    const data = await res.json();

    if (res.status != 200) throw new Error(data.message);

    return data;

}

export function get_knowledges(params : string) {


    return fetch(url + `/1/user?${params}`, { headers });

}

export function search_knowledges(params : string){

    return fetch(url + `/search/1/user?${params}`, { headers });
    
}

export function get_skill(id: number | string) {

    return fetch(`${url}/${id}`, { headers });

};
