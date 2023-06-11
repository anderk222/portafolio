import { createBrowserRouter } from "react-router-dom";
import HomePage from "./feature/home/HomePage";
import Root from "./layout/Root";
import proyect_routes from "./feature/proyect/proyect.router";
import khowledge_routes from "./feature/knowledge/khowledge.routes";
import tool_routes from "./feature/tool/tool.routes";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path : 'knowledge',
        children : khowledge_routes
      },
      {
        path : 'proyect',
        children : proyect_routes
      },
      {
        path : 'tool',
        children : tool_routes
      }
    ],
  },
]);

export default router;