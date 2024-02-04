import { env } from '../../../environments/var-environments';
import { Project } from '../model/project';
const url = env.url + '/project';

const headers = {
    'Content-Type': 'application/json'
}

export async function updateProject(body : Project) {

    const res = await fetch(`${url}/${body.id}`, {
       headers,
       method: 'PUT',
       body: JSON.stringify(body)
   })

   const data = await res.json();

   if (res.status != 200) throw new Error(data.message);

   return data;

}

export async function saveProject(body : Project) {

    const res = await fetch(`${url}/${body.id}`, {
       headers,
       method: 'POST',
       body: JSON.stringify(body)
   })

   const data = await res.json();

   if (res.status != 201) throw new Error(data.message);

   return data;

}

export async function deleteProject(id : number) {

   const res = await fetch(url+`/${id}`, {
       headers,
       method: 'DELETE',
   })

   const data = await res.json();

   if (res.status != 200) throw new Error(data.message);

   return data;

}

export function getProjects(params : string,userId: number) {


   return fetch(url + `/${userId}/user?${params}`, { headers });

}

export function searchProjects(params : string, userId: number){

   return fetch(url + `/search/${userId}/user?${params}`, { headers });
   
}

export function getProject(id: number | string) {

    return fetch(`${url}/${id}`, { headers });

};

export async function saveProjectByToken(body: Project) {

    const res = await fetch(`${url}/guardarPorToken`, {
        headers,
        method: 'POST',
        body: JSON.stringify(body)
    })

    const data = await res.json();

    if (res.status != 201) throw new Error(data.message);

    return data;

}

export async function updateProjectByToken(body: Project) {

    const res = await fetch(`${url}/editarPorToken`, {
        headers,
        method: 'PUT',
        body: JSON.stringify(body)
    })

    const data = await res.json();

    if (res.status != 201) throw new Error(data.message);

    return data;

}

export function searchProjectsByToken(params : string){

    return fetch(`${url}/buscarPorToken/?${params}`, { headers });
    
}

export function getProjectsByToken(params : string) {


    return fetch(`${url}/obtenerPorToken?${params}`, { headers });

}

export function getProjectsDefault(params : string) {


    return fetch(url + `/obtenerDefault?${params}`, { headers });

}

export function searchProjectsDefault(params : string){

    return fetch(url + `/buscarDefault?${params}`, { headers });
    
}