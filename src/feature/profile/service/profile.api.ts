
import { env } from '../../../environments/var-environments';
import { Profile } from '../model/profile';
const url = env.url + '/profile';

const headers = {
    'Content-Type': 'application/json'
}

export async function saveProfile(body: Profile) {

    const res = await fetch(url, {
        headers,
        method: 'POST',
        body: JSON.stringify(body)
    })

    const data = await res.json();

    if (res.status != 201) throw new Error(data.message);

    return data;

}

export async function updateProfile(body : Profile) {

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

export function getProfilesByUser(params : string,userId: number) {


    return fetch(url + `/find/${userId}/user?${params}`, { headers });

}

export function searchProfilesByUser(params : string, userId: number){

    return fetch(url + `/find/search/${userId}/user?${params}`, { headers });
    
}

export function getSkill(id: number | string) {

    return fetch(`${url}/find/${id}`, { headers });

};

export async function saveProfileByToken(body: Profile) {

    const res = await fetch(`${url}/guardarPorToken`, {
        headers,
        method: 'POST',
        body: JSON.stringify(body)
    })

    const data = await res.json();

    if (res.status != 201) throw new Error(data.message);

    return data;

}

export async function updateProfileByToken(body: Profile) {

    const res = await fetch(`${url}/editarPorToken`, {
        headers,
        method: 'PUT',
        body: JSON.stringify(body)
    })

    const data = await res.json();

    if (res.status != 201) throw new Error(data.message);

    return data;

}

export function searchProfilesByToken(params : string){

    return fetch(`${url}/buscarPorToken?${params}`, { headers });
    
}

export function getProfilesByToken() {


    return fetch(`${url}/obtenerPorToken`, { headers });

}

export function getProfiles(params : string) {


    return fetch(url + `/obtenerDefault?${params}`, { headers });

}

export function searchProfiles(params : string){

    return fetch(url + `/buscarDefault?${params}`, { headers });
    
}
