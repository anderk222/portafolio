import { env } from '../../../environments/var-environments';
import { khowledge } from '../model/khowledge';
const url = env.url + '/skill';

const headers = {
    'Content-Type': 'application/json'
}

export async function saveKnowledge(body: khowledge) {

    const res = await fetch(url, {
        headers,
        method: 'POST',
        body: JSON.stringify(body)
    })

    const data = await res.json();

    if (res.status != 201) throw new Error(data.message);

    return data;

}

export async function updateKnowledge(body : khowledge) {

     const res = await fetch(`${url}/${body.id}`, {
        headers,
        method: 'PUT',
        body: JSON.stringify(body)
    })

    const data = await res.json();

    if (res.status != 201) throw new Error(data.message);

    return data;

}

export async function deleteSkill(id : number) {

    const res = await fetch(url+`/${id}`, {
        headers,
        method: 'DELETE',
    })


    if (res.status != 200) throw new Error("Error al eliminar usuario");

    return res;

}

export function getKnowledgesByUser(params : string,userId: number) {


    return fetch(url + `/find/${userId}/user?${params}`, { headers });

}

export function searchKnowledgesByUser(params : string, userId: number){

    return fetch(url + `/find/search/${userId}/user?${params}`, { headers });
    
}

export function getSkill(id: number | string) {

    return fetch(`${url}/find/${id}`, { headers });

};

export async function saveKnowledgeByToken(body: khowledge) {

    const res = await fetch(`${url}/guardarPorToken`, {
        headers,
        method: 'POST',
        body: JSON.stringify(body)
    })

    const data = await res.json();

    if (res.status != 201) throw new Error(data.message);

    return data;

}

export async function updateKnowledgeByToken(body: khowledge) {

    const res = await fetch(`${url}/editarPorToken`, {
        headers,
        method: 'PUT',
        body: JSON.stringify(body)
    })

    const data = await res.json();

    if (res.status != 201) throw new Error(data.message);

    return data;

}

export function searchKnowledgesByToken(params : string){

    return fetch(`${url}/buscarPorToken?${params}`, { headers });
    
}

export function getKnowledgesByToken(params : string) {


    return fetch(`${url}/obtenerPorToken?${params}`, { headers });

}

export function getKnowledges(params : string) {


    return fetch(url + `/obtenerDefault?${params}`, { headers });

}

export function searchKnowledges(params : string){

    return fetch(url + `/buscarDefault?${params}`, { headers });
    
}
