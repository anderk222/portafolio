import { TokenResponse } from "../feature/auth/models/Auth";

export function setToken(token: TokenResponse){


    localStorage.setItem('token', token.token);

}

export function removeToken(){

    localStorage.removeItem('token')

}
export function getToken(){

    return localStorage.getItem('token')
    

}

export function isToken(){

    return Boolean(localStorage.getItem('token'))

}