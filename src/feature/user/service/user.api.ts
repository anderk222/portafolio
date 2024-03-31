import { env } from '../../../environments/var-environments';
import { User } from '../model/user';
const url = env.url + '/user';

const headers = {
    'Content-Type': 'application/json'
}

export async function saveUser(body: User) {

    const res = await fetch(url, {
        headers,
        method: 'POST',
        body: JSON.stringify(body)
    })

    const data = await res.json();

    if (res.status != 200) throw new Error(data.message);

    return data as User ;

}

export async function updateUser(body : User) {

     const res = await fetch(url, {
        headers,
        method: 'PUT',
        body: JSON.stringify(body)
    })

    const data = await res.json();

    if (res.status != 200) throw new Error(data.message);

    return data as User;

}

export function getUsers(params : string) {


    return fetch(`${url}/find?${params}`, { headers });

}

export function searchUsers(params : string){

    return fetch(`${url}/find/search?name=${params}`, { headers });
    
}

export function getUser(id: number | string) {

    return fetch(`${url}/find/${id}`, { headers });

}


export async function deleteUser(id: number){

    const res = await fetch(url+`/${id}`, {
        headers,
        method: 'DELETE',
    })

    return res;

}