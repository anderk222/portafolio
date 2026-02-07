import { env } from '../../../environments/var-environments';
import { UserDetail } from '../model/user-detail';

const url = env.url + '/user-detail';

const headers = {
    'Content-Type': 'application/json'
};

export function getUserDetailDefault() {
    return fetch(`${url}/obtenerDefault`, { headers });
}

export function getUserDetailByToken() {
    return fetch(`${url}/obtenerPorToken`, { headers });
}

export async function updateUserDetailByToken(body: UserDetail) {
    const res = await fetch(`${url}/editarPorToken`, {
        headers,
        method: 'PUT',
        body: JSON.stringify(body)
    });

    const data = await res.json();

    if (res.status !== 200 && res.status !== 201) throw new Error(data.message);

    return data;
}
