import { lazy } from "react";
import { RouteObject } from 'react-router-dom';

const Tool = lazy(() => import('./pages/Tool'));

const TOOL_ROUTES: RouteObject[] = [
    {
        path: '',
        element: <Tool />
    }

];

export default TOOL_ROUTES;