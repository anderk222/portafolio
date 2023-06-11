import { lazy } from "react";
import { RouteObject } from 'react-router-dom';

const Tool = lazy(() => import('./Tool'));

const tool_routes: RouteObject[] = [
    {
        path: '',
        element: <Tool />
    }

];

export default tool_routes;