import { env } from '../../enviroment/var-enviroment';
import { Tool } from './tool';
import { paginable, Pagination } from '../../models/response';
const url = env.url + '/api/tool'

const headers = {
    'Content-Type': 'application/json'
}

export async function save_tool(body: Tool) {

    const res = await fetch(url, {
        headers,
        method: 'POST',
        body: JSON.stringify(body)
    })

    const data = await res.json()

    if (res.status != 201) throw new Error(data.message);

    return data;

}

export function get_tools(pagination: paginable) {

    let query_params = `?page=${pagination.page}&count=${pagination.count}`;

    return fetch(url + query_params, { headers });

}


export function get_tool(id: number | string) {

    return fetch(`${url}/id`, { headers });

}