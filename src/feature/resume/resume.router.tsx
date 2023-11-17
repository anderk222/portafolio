import { RouteObject } from "react-router-dom";
import AboutPage from "./ResumePage";

const resume_routes : RouteObject[] = [

    {
        path : '',
        element : <AboutPage />
    }

];

export default resume_routes;