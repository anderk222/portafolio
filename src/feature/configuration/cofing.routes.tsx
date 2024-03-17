import { RouteObject } from "react-router-dom";
import ConfigPage from "./pages/ConfigPage";
import ResumeAdmiPage from "../resume/pages/ResumeAdminPage";
import ExperienceFormPage from "../resume/pages/ExperienceFormPage";
import ProfileFormPage from "../resume/pages/ProfileFormPage";
import EducationFormPage from "../resume/pages/EducationFormPage";
import PasswordPage from "./pages/PasswordPage";

export const CONFIG_ROUTES :RouteObject[] =[

    { 
        path: '',
        element: <ConfigPage/>,
    },
    {
        path: 'password',
        element: <PasswordPage/>
    },
    {
        path : 'resume',
        children:[
            {
                path: '',
                element: <ResumeAdmiPage/>
            },
            {
                path:'experience',
                element : <ExperienceFormPage/>
            },
            {
                path: 'profile',
                element: <ProfileFormPage />
            },
            {
                path:'education',
                element: <EducationFormPage />
            }
        ]
    }

]