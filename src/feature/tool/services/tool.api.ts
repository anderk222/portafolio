import { env } from '../../../environments/var-environments';
import { Tool } from '../tool';
const url = env.url + '/tool';

const headers = {
    'Content-Type': 'application/json'
}

export async function saveTool(body: Tool) {

    const res = await fetch(url, {
        headers,
        method: 'POST',
        body: JSON.stringify(body)
    })

    const data = await res.json();

    if (res.status != 201) throw new Error(data.message);

    return data as Tool ;

}

export async function updateTool(body : Tool) {

     const res = await fetch(url, {
        headers,
        method: 'PUT',
        body: JSON.stringify(body)
    })

    const data = await res.json();

    if (res.status != 200) throw new Error(data.message);

    return data as Tool;

}

export function getTools(params : string) {


    return fetch(`${url}/find?${params}`, { headers });

}

export function searchTools(params : string){

    return fetch(`${url}/find/search?name=${params}`, { headers });
    
}

export function getTool(id: number | string) {

    return fetch(`${url}/find/${id}`, { headers });

}


export async function deleteTool(id: number){

    const res = await fetch(url+`/${id}`, {
        headers,
        method: 'DELETE',
    })

    // if (res.status != 200) throw new Error(data.message);

    return res;


}