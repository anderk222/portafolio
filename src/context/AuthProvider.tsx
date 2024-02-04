import { Auth } from '../feature/auth/models/Auth';
import { authenticate } from '../feature/auth/service/auth.api';
import { childProps } from '../models';
import { isToken, removeToken, setToken } from '../utils/session';
import { createContext, useContext } from 'react';

const authContext = createContext<AuthCountext>({} as AuthCountext);

export function AuthProvider({ children }: childProps) {


    return <authContext.Provider
        value={{
            logIn,
            isAuthenticated,
            logOut
        }}
    >
        {children}
    </authContext.Provider>

    async function logIn(auth: Auth) {


            let data = await authenticate(auth);

            setToken(data);

    }

    function isAuthenticated(){

        return isToken();

    }

    function logOut(){

        removeToken();

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
    logOut: () => void

}