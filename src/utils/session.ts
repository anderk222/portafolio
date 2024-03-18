import { redirect } from "react-router-dom";
import { TokenResponse } from "../feature/auth/models/Auth";

export function setToken(token: TokenResponse) {


    localStorage.setItem('token', token.token);

}

export function removeToken() {

    localStorage.removeItem('token');

}
export function getToken() {

    return localStorage.getItem('token')


}

export function isToken() {

    return Boolean(localStorage.getItem('token'))

}

export function getRoles(): string[] {


    return JSON.parse(localStorage.getItem('roles') || '[]');

}

export function removeRoles() {

    localStorage.removeItem('roles');

}

export function setRoles(token: TokenResponse) {

    localStorage.setItem('roles', JSON.stringify(token.roles));

}


export function hasRole(role: string) {

    return getRoles().some(r => r === role);

}

export function hasRoleGuard(role : string){
    
    if(!hasRole(role)) return redirect('/home');
    return null;

}

export function resetSession(){

    removeRoles();

    removeToken();



}