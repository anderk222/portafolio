import { Auth } from '../feature/auth/models/Auth';
import { authenticate } from '../feature/auth/service/auth.api';
import { childProps } from '../models';
import { getRoles, isToken, removeRoles
    , removeToken, setToken, setRoles as storeRoles
, resetSession } from '../utils/session';
import { createContext, useContext, useEffect, useState } from 'react';

const authContext = createContext<AuthCountext>({} as AuthCountext);

export function AuthProvider({ children }: childProps) {

    const [authenticated, setAuthenticated] = useState(false);

    const [ roles, setRoles ] = useState<string[]>([]);

    useEffect(()=>{
    
        setAuthenticated(()=>isToken());

        setRoles(getRoles());

    },[]);
    
    useEffect(()=>{},[authenticated])

    return <authContext.Provider
        value={{
            logIn,
            isAuthenticated,
            logOut,
            authenticated,
            hasRole
        }}
    >
        {children}
    </authContext.Provider>

    async function logIn(auth: Auth) {

            let data = await authenticate(auth);

            setToken(data);
            storeRoles(data);
            setAuthenticated(()=>true);
            setRoles(()=>data.roles);

    }

    function isAuthenticated(){

        return authenticated;

    }

    function logOut(){

       resetSession();

        setRoles([])
        setAuthenticated(()=>false)

    }

    function hasRole(role : string){

        return roles.some((v)=>v===role);

    }
}

export function useAuthContext() {

    let ctx = useContext(authContext);

    if (!ctx) throw new Error('AuthContext is not initialized');

    return ctx;

}

export type AuthCountext = {

    logIn: (user: Auth) => Promise<void>,
    isAuthenticated: () => boolean,
    // session: { id: number },
    logOut: () => void,
    authenticated: boolean,
    hasRole(role: string): boolean

}