import { useCallback, useEffect, useState } from "react";
import { useBoolean } from "../../../hooks/useBoolean";
import { useCurrent } from "../../../hooks/useCurrent";
import PaginationPortafolio from "../../../shared/PaginationPortafolio";
import MoreInfoModal from "./MoreInfoModal";
import ProyectCard from "./ProyectCard"
import { useAuthContext } from "../../../context/AuthProvider";
import { useSearchParams } from "react-router-dom";
import { Project } from "../model/project";
import { Pagination } from "../../../models";
import { useFetch } from "../../../hooks/useFetch";
import { getProjectsByToken, getProjectsDefault, searchProjectsByToken, searchProjectsDefault } from "../service/project.api";

const Proyects = () => {

  const toggle = useBoolean();

  const { current, change } = useCurrent<number>(0);

  const { run, status, data, error, setData } = useFetch<Pagination<Project>>();

  const [queryParams, setQueryParams] = useSearchParams();

  const { toggle: toggleDelete, boolean } = useBoolean();

  const [idDelete, setIdDelete] = useState(0);

  const auth = useAuthContext();

  useEffect(() => {

    search();

  }, [
    queryParams.get('page'),
    queryParams.get('name'),
    queryParams.get('category')
  ]);

  useEffect(() => { idDelete });

  useEffect(()=>{},[boolean]);

  const handlerMore = useCallback((id: number) => {

    change(id);
    toggle.active();

  }, []);

  useEffect(() => { }, [toggle]);
  useEffect(() => { }, [current]);

  return (
    <div className='flex gap-2 p-2 flex-wrap'>

   { status == 'ok'&& data!.data.map((project=> <ProyectCard {...{handlerMore, project}} />)) }
      
      <div className="flex w-full justify-center" >
        <PaginationPortafolio pages={data?.totalPages} />
      </div>
      <MoreInfoModal toggle={toggle} />
    </div>
  );


  function search(){

    let action : (query: string)=>Promise<Response>;

    let isAuthenticated = auth.isAuthenticated();


    if (!queryParams.get('name') && !queryParams.get('category')){

      if(isAuthenticated) action = getProjectsByToken;
      else action = getProjectsDefault;

    }else{

      if(isAuthenticated) action =searchProjectsByToken;
      else action = searchProjectsDefault;

    }

    run(() => action(queryParams.toString()))
  
  }
}

export default Proyects;