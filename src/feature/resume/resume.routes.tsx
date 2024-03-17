import { RouteObject } from "react-router-dom";
import AboutPage from "./pages/ResumePage";


const RESUME_ROUTES : RouteObject[] = [

    {
        path : '',
        element : <AboutPage />
    }


];

export default RESUME_ROUTES;