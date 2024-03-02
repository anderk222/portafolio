import { env } from '../../../environments/var-environments';
const url = env.url + '/resume';

const headers = {
    'Content-Type': 'application/json'
}

export function getResumeByUser(userId: number | string ) {

    return fetch(url + `/find/${userId}/user`, { headers });

}

export function getResumeByToken() {

    return fetch(`${url}/obtenerPorToken`, { headers });

}

export function getResume() {


    return fetch(url + `/obtenerDefault`, { headers });

}