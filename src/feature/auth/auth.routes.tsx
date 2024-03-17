import { RouteObject } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import RegisterPage from "./pages/RegisterPage";

// const AuthPage = lazy(()=>import('./pages/AuthPage'));
// const RegisterPage = lazy(()=>import('./pages/RegisterPage'));

export const AUTH_ROUTES : RouteObject[] = [

    {
        path: '',
        element: <AuthPage /> 
    },
    {
        path: 'register',
        element: <RegisterPage />
    }

];