import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import FormProyect from "./FormProyect";

const Proyect = lazy(()=>import('./Proyect'));

const proyect_routes : RouteObject[]= [

    {
      path :'',
      element : <Proyect />
    },
    {
      path : 'form',
      element : <FormProyect />
    }
  
  ];
  
export default proyect_routes;