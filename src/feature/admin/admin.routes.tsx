import { RouteObject } from "react-router-dom";
import TOOL_ROUTES from "../tool/tool.routes";
import { USER_ROUTES } from "../user/user.routes";
import AdminPage from "./pages/AdminPage";
import { SELECTED_PROFILE_ROUTES } from "../selected-profile/selected-profile.routes";

export const ADMIN_ROUTES : RouteObject[] = [

    {
       path: '',
       element: <AdminPage />
    },
    {
        path: 'tool',
        children : TOOL_ROUTES
    },
    {
        path: 'user',
        children : USER_ROUTES
    },
    {
        path: 'selected-profile',
        children: SELECTED_PROFILE_ROUTES
    }

];