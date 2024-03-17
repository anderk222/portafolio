import { env } from '../../../environments/var-environments';
import { Category } from '../model/category';
const url = env.url + '/category'

const headers = {
    'Content-Type' : 'application/json'
}

export async function save_category(body : Category){

    const res = await fetch(url, {
      headers,
        method : 'POST',
        body : JSON.stringify(body)
    })

    const data = await res.json()

    if(res.status !=201) throw new Error(data.message);

    return data;

}

export function by_name(name : string) {

    return fetch(`${url}/find/${name}/name`,{ headers });

    
}