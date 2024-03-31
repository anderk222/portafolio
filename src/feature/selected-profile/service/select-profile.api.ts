import { env } from '../../../environments/var-environments';
import { SelectedProfile } from '../model/SelectedUser';
const url = env.url + '/selected-profile';

const headers = {
    'Content-Type': 'application/json'
}

export async function saveSelectedProfile(body: {id : number}) {

    const res = await fetch(url, {
        headers,
        method: 'POST',
        body: JSON.stringify(body)
    })

    const data = await res.json();

    if (res.status != 200) throw new Error(data.message);

    return data as SelectedProfile ;

}
export async function updateSelectedProfile(body : SelectedProfile) {

     const res = await fetch(url, {
        headers,
        method: 'PUT',
        body: JSON.stringify(body)
    })

    const data = await res.json();

    if (res.status != 200) throw new Error(data.message);

    return data as SelectedProfile;

}

export function getActiveProfile(){

    return fetch(`${url}/find/perfilActivo`, { headers });

}

export function getSelectedProfiles(params : string) {


    return fetch(`${url}/find?${params}`, { headers });

}

export function searchSelectedProfiles(params : string){

    return fetch(`${url}/find/search?name=${params}`, { headers });
    
}

export function getSelectedProfile(id: number | string) {

    return fetch(`${url}/find/${id}`, { headers });

}


export async function deleteSelectedProfile(id: number){

    const res = await fetch(url+`/${id}`, {
        headers,
        method: 'DELETE',
    })

    // if (res.status != 200) throw new Error(data.message);

    return res;


}