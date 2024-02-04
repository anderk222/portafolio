import { createBrowserRouter } from "react-router-dom";
import HomePage from "./feature/home/pages/HomePage";
import Root from "./layout/Root";
import khowledge_routes from "./feature/knowledge/khowledge.routes";
import PROYECT_ROUTES from "./feature/proyect/proyect.routes";
import TOOL_ROUTES from "./feature/tool/tool.routes";
import RESUME_ROUTES from "./feature/resume/resume.routes";
import { AUTH_ROUTES } from "./feature/auth/auth.routes";

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
        path: 'proyect',
        children: PROYECT_ROUTES
      },
      {
        path: 'tool',
        children: TOOL_ROUTES
      },
      {
        path: '',
        children: RESUME_ROUTES
      }
    ],
    
  },
  {
    path: 'auth',
    children: AUTH_ROUTES
  }
]);

export default router;