import { Auth } from '../feature/auth/models/Auth';
import { authenticate } from '../feature/auth/service/auth.api';
import { childProps } from '../models';
import { isToken, removeToken, setToken } from '../utils/session';
import { createContext, useContext, useEffect, useState } from 'react';

const authContext = createContext<AuthCountext>({} as AuthCountext);

export function AuthProvider({ children }: childProps) {

    const [authenticated, setAuthenticated] = useState(false);

    useEffect(()=>{
    
        setAuthenticated(()=>isToken())

    },[]);
    
    useEffect(()=>{},[authenticated])

    return <authContext.Provider
        value={{
            logIn,
            isAuthenticated,
            logOut,
            authenticated
        }}
    >
        {children}
    </authContext.Provider>

    async function logIn(auth: Auth) {


            let data = await authenticate(auth);

            setToken(data);
            setAuthenticated(()=>true)

    }

    function isAuthenticated(){

        return authenticated;

    }

    function logOut(){

        removeToken();

        setAuthenticated(()=>false)

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
    authenticated: boolean

}