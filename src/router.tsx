import { createBrowserRouter } from "react-router-dom";
import HomePage from "./feature/home/pages/HomePage";
import Root from "./layout/Root";
import khowledge_routes from "./feature/knowledge/khowledge.routes";
import PROYECT_ROUTES from "./feature/proyect/proyect.routes";
import RESUME_ROUTES from "./feature/resume/resume.routes";
import { AUTH_ROUTES } from "./feature/auth/auth.routes";
import { CONFIG_ROUTES } from "./feature/configuration/cofing.routes";
import { SITE_ROUTES } from "./feature/site/site.routes";
import { hasRoleGuard } from "./utils/session";
import { ADMIN_ROUTES } from "./feature/admin/admin.routes";

const router = createBrowserRouter([

  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'home',
        element: <HomePage />,
      },
      {
        path: 'knowledge',
        children: khowledge_routes
      },
      {
        path: 'project',
        children: PROYECT_ROUTES
      },
      {
        path: 'admin',
        children: ADMIN_ROUTES,
        loader: ()=>hasRoleGuard('ROLE_ADMIN')
      },
      {
        path: '',
        children: RESUME_ROUTES
      },
      {
        path: ':id',
        children: RESUME_ROUTES
      },
      {
        path: 'config',
        children: CONFIG_ROUTES
      },
      {
        path: 'site',
        children: SITE_ROUTES
      }
    ],
    
  },
  {
    path: 'auth',
    children: AUTH_ROUTES
  }
]);

export default router;