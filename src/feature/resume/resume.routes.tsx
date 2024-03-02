import { RouteObject } from "react-router-dom";
import AboutPage from "./pages/ResumePage";
import ResumeAdmiPage from "./pages/ResumeAdminPage";
import ProfileFormPage from "./pages/ProfileFormPage";
import ExperienceFormPage from "./pages/ExperieceFormPage";
import EducationFormPage from "./pages/EducationFormPage";

const RESUME_ROUTES : RouteObject[] = [

    {
        path : '',
        element : <AboutPage />
    },
    {
        path: 'admin',
        element :<ResumeAdmiPage/>
    },
    {
        path: 'admin/profile',
        element :<ProfileFormPage/>
    },
    {
        path: 'admin/experience',
        element :<ExperienceFormPage/>
    },
    {
        path: 'admin/education',
        element :<EducationFormPage/>
    }

];

export default RESUME_ROUTES;