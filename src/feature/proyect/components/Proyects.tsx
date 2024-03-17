import { useCallback, useEffect, useState } from "react";
import { useBoolean } from "../../../hooks/useBoolean";
import { useCurrent } from "../../../hooks/useCurrent";
import PaginationPortafolio from "../../../shared/PaginationPortafolio";
import MoreInfoModal from "./MoreInfoModal";
import ProyectCard from "./ProyectCard"
import { useAuthContext } from "../../../context/AuthProvider";
import { useSearchParams } from "react-router-dom";
import { Project, empty } from "../model/project";
import { Pagination } from "../../../models";
import { useFetch } from "../../../hooks/useFetch";
import { deleteProject, getProjectsByToken, getProjectsDefault, searchProjectsByToken, searchProjectsDefault } from "../service/project.api";
import { Confirm } from "semantic-ui-react";

const Proyects = () => {

  const toggle = useBoolean();

  const { current, change } = useCurrent<Project>(empty());

  const { run, status, data, error, setData } = useFetch<Pagination<Project>>();

  const [queryParams] = useSearchParams();

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

  useEffect(() => { }, [boolean]);

  const handlerMore = useCallback((project: Project) => {

    change(project);
    toggle.active();

  }, []);

  useEffect(() => { }, [toggle]);
  useEffect(() => { }, [current]);

  return (
    <div className='flex gap-2 p-2 flex-wrap'>

      <Confirm open={boolean}
        onConfirm={() => handlerDelete(idDelete)}
        onCancel={toggleDelete} />

      {status == 'ok' && data!.data.map((project => <ProyectCard 
      key={project.id} {...{ handlerMore, project,onDelete: handlerOpenDelete,auth }} />))}

      <div className="flex w-full justify-center" >
        <PaginationPortafolio pages={data?.totalPages || 1} />
      </div>
      <MoreInfoModal project={current} toggle={toggle} />
    </div>
  );


  function search() {

    let action: (query: string) => Promise<Response>;

    let isAuthenticated = auth.isAuthenticated();


    if (!queryParams.get('name') && !queryParams.get('category')) {

      if (isAuthenticated) action = getProjectsByToken;
      else action = getProjectsDefault;

    } else {

      if (isAuthenticated) action = searchProjectsByToken;
      else action = searchProjectsDefault;

    }

    run(() => action(queryParams.toString()))

  }

  function handlerOpenDelete(id: number) {

    setIdDelete(id);

    toggleDelete();

  }

  async function handlerDelete(id : number){

    await deleteProject(id);

    setData({ ...data!, data: data!.data.filter(v => v.id != id) });

    toggleDelete();

  }
}

export default Proyects;