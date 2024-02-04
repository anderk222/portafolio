import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import FormProyect from "./pages/FormProyect";

const Proyect = lazy(()=>import('./pages/Proyect'));

const PROYECT_ROUTES : RouteObject[]= [

    {
      path :'',
      element : <Proyect />
    },
    {
      path : 'form',
      element : <FormProyect />
    }
  
  ];
  
export default PROYECT_ROUTES;