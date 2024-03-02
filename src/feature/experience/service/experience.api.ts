import { env } from '../../../environments/var-environments';
import { Experience } from '../model/experience';
const url = env.url + '/experience';

const headers = {
    'Content-Type': 'application/json'
}

export async function updateExperience(body : Experience) {

    const res = await fetch(`${url}/${body.id}`, {
       headers,
       method: 'PUT',
       body: JSON.stringify(body)
   })

   const data = await res.json();

   if (res.status != 200) throw new Error(data.message);

   return data;

}

export async function saveExperience(body : Experience) {

    const res = await fetch(`${url}/${body.id}`, {
       headers,
       method: 'POST',
       body: JSON.stringify(body)
   })

   const data = await res.json();

   if (res.status != 201) throw new Error(data.message);

   return data;

}

export async function deleteExperience(id : number) {

   const res = await fetch(url+`/${id}`, {
       headers,
       method: 'DELETE',
   })

   const data = await res.json();

   if (res.status != 200) throw new Error(data.message);

   return data;

}

export function getExperiences(params : string,userId: number) {


   return fetch(url + `/find/${userId}/user?${params}`, { headers });

}

export function searchExperiences(params : string, userId: number){

   return fetch(url + `/find/search/${userId}/user?${params}`, { headers });
   
}

export function getExperience(id: number | string) {

    return fetch(`${url}/find/${id}`, { headers });

};

export async function saveExperienceByToken(body: Experience) {

    const res = await fetch(`${url}/guardarPorToken`, {
        headers,
        method: 'POST',
        body: JSON.stringify(body)
    })

    const data = await res.json();

    if (res.status != 201) throw new Error(data.message);

    return data;

}

export async function updateExperienceByToken(body: Experience) {

    const res = await fetch(`${url}/editarPorToken`, {
        headers,
        method: 'PUT',
        body: JSON.stringify(body)
    })

    const data = await res.json();

    if (res.status != 201) throw new Error(data.message);

    return data;

}

export function searchExperiencesByToken(params : string){

    return fetch(`${url}/buscarPorToken/?${params}`, { headers });
    
}

export function getExperiencesByToken(params : string) {


    return fetch(`${url}/obtenerPorToken?${params}`, { headers });

}

export function getExperiencesDefault(params : string) {


    return fetch(url + `/obtenerDefault?${params}`, { headers });

}

export function searchExperiencesDefault(params : string){

    return fetch(url + `/buscarDefault?${params}`, { headers });
    
}