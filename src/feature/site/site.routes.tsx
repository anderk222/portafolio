import { RouteObject } from "react-router-dom";
import AboutSite from "./pages/AboutSite";

const SITE_ROUTES: RouteObject[] = [

    {
        path: 'about',
        element: <AboutSite/>
        
    }

]

export { SITE_ROUTES };