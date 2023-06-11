import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const Khowledge = lazy(() => import('./KhowledgePage'));
const FormKhowledge = lazy(() => import('./FormKhowledge'));

const khowledge_routes: RouteObject[] = [

    {
        path: '',
        element: <Khowledge />
    },
    {
        path: 'form',
        element: <FormKhowledge />
    }

];

export default khowledge_routes;