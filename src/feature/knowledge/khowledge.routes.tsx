import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const KhowledgePage = lazy(() => import('./pages/KhowledgePage'));
const FormKhowledge = lazy(() => import('./pages/FormKhowledge'));

const KHOWLEDGE_ROUTES: RouteObject[] = [

    {
        path: '',
        element: <KhowledgePage />
    },
    {
        path: 'form',
        element: <FormKhowledge />
    },
    {
        path: 'form/:id',
        element: <FormKhowledge />
    }
   
];

export default KHOWLEDGE_ROUTES;