import { UserSave } from '../../../feature/user/model/user';
import { env } from '../../../environments/var-environments';
import { Auth, TokenResponse } from '../models/Auth';
import { ChangePassword } from '../models/ChangePassword';

const url = env.url + '/auth'

const headers = {
    'Content-Type': 'application/json'
}

export async function authenticate(body: Auth) {

    const res = await fetch(`${url}/login`, {
        headers,
        method: 'POST',
        body: JSON.stringify(body)
    })

    const data = await res.json()

    if (res.status != 200) {throw new Error(data.message)};

    return data as TokenResponse;

}

export async function register(body: UserSave) {

    const res = await fetch(`${url}/register`, {
        headers,
        method: 'POST',
        body: JSON.stringify(body)
    })

    const data = await res.json()

    if (res.status != 201) throw new Error(data.message);

    return data;

}

export async function changePassword(body: ChangePassword) {

    const res = await fetch(`${url}/changePassword`, {
        headers,
        method: 'POST',
        body: JSON.stringify(body)
    })


    if(res.status !=200){
        let data = await res.json();

        throw new Error(data.message);

    }
}