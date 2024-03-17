import { env } from '../../../environments/var-environments';
import { Education } from '../model/education';
const url = env.url + '/education';

const headers = {
    'Content-Type': 'application/json'
}

export async function updateEducation(body : Education) {

    const res = await fetch(`${url}/${body.id}`, {
       headers,
       method: 'PUT',
       body: JSON.stringify(body)
   })

   const data = await res.json();

   if (res.status != 200) throw new Error(data.message);

   return data;

}

export async function saveEducation(body : Education) {

    const res = await fetch(`${url}/${body.id}`, {
       headers,
       method: 'POST',
       body: JSON.stringify(body)
   })

   const data = await res.json();

   if (res.status != 201) throw new Error(data.message);

   return data;

}

export async function deleteEducation(id : number) {

   const res = await fetch(url+`/${id}`, {
       headers,
       method: 'DELETE',
   })

   const data = await res.json();

   if (res.status != 200) throw new Error(data.message);

   return data;

}

export function getEducations(params : string,userId: number) {


   return fetch(url + `/find/${userId}/user?${params}`, { headers });

}

export function searchEducations(params : string, userId: number){

   return fetch(url + `/find/search/${userId}/user?${params}`, { headers });
   
}

export function getEducation(id: number | string) {

    return fetch(`${url}/find/${id}`, { headers });

};

export async function saveEducationByToken(body: Education) {

    const res = await fetch(`${url}/guardarPorToken`, {
        headers,
        method: 'POST',
        body: JSON.stringify(body)
    })

    const data = await res.json();

    if (res.status != 201) throw new Error(data.message);

    return data;

}

export async function updateEducationByToken(body: Education) {

    const res = await fetch(`${url}/editarPorToken`, {
        headers,
        method: 'PUT',
        body: JSON.stringify(body)
    })

    const data = await res.json();

    if (res.status != 201) throw new Error(data.message);

    return data;

}

export function searchEducationsByToken(params : string){

    return fetch(`${url}/buscarPorToken/?${params}`, { headers });
    
}

export function getEducationsByToken(params : string) {


    return fetch(`${url}/obtenerPorToken?${params}`, { headers });

}

export function getEducationsDefault(params : string) {


    return fetch(url + `/obtenerDefault?${params}`, { headers });

}

export function searchEducationsDefault(params : string){

    return fetch(url + `/buscarDefault?${params}`, { headers });
    
}