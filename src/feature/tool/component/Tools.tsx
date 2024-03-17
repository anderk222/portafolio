import { useCallback, useEffect, useState } from "react";
import { UseBoolean, useBoolean } from '../../../hooks/useBoolean';
import PaginationPortafolio from "../../../shared/PaginationPortafolio";
import FormModal from "./FormModal";
import ToolCard from "./ToolCard";
import { useFetch } from '../../../hooks/useFetch';
import { deleteTool, getTools, saveTool, searchTools, updateTool } from '../services/tool.api';
import { useSearchParams } from "react-router-dom";
import { Pagination } from '../../../models/response';
import { Tool } from "../tool";
import { add_query } from '../../../utils/QueryParams';
import FullLoading from '../../../shared/FullLoading';
import { Confirm } from "semantic-ui-react";
import { useAuthContext } from "../../../context/AuthProvider";

const Tools = ({ toggle }: { toggle: UseBoolean }) => {


  const { run, status, data, error, setData } = useFetch<Pagination<Tool>>((() => getTools('')))

  const [queryParams, setQueryParams] = useSearchParams();

  const { toggle: toggleDelete, boolean } = useBoolean();

  const auth = useAuthContext();

  const [idDelete, setIdDelete] = useState(0);

  const handlerOpenEdit = useCallback((id: number) => {

    setQueryParams(add_query(queryParams, {

      current: id.toString()

    }), { replace: true });


    toggle.toggle();

  }, []);


  // Useffect para obtener datos de filtro y paginable
  useEffect(() => {

    let search = {
      name: queryParams.get('name'),
      category: queryParams.get('category')
    }

    if (!search.name && !search.category) run(() => getTools(queryParams.toString()))
    else run(() => searchTools(queryParams.toString()));

  }, [
    queryParams.get('page'),
    queryParams.get('name'),
    queryParams.get('category')
  ]);

  return (
    <div className='flex gap-2 p-2 flex-wrap'>

      {
        // Alerta para confirmar eliminar herramienta 
        (<Confirm open={boolean} 
          onConfirm={() => handlerDelete(idDelete)}
          onCancel={toggleDelete}
        />)
      }

      {status == 'ok' && data!.data.map((v, k) => (
        <ToolCard key={k} tool={v}
          auth={auth}
          onClickDelete={handlerOpenDelete}
          onClickEdit={handlerOpenEdit} />
      )
      )}

      {status == 'ok' &&
        <div className="flex w-full justify-center" >
          <PaginationPortafolio pages={data?.totalPages} />
        </div>
      }
      {status == 'loading' && <FullLoading />}
      <FormModal {...{ handlerEdit, handlerSave, toggle }} />
    </div>
  );

  async function handlerDelete(id: number) {

    await deleteTool(id);

    setData({ ...data!, data: data!.data.filter(v => v.id != id) });

    toggleDelete();

  }

  async function handlerEdit(values: Tool) {

    let tool = await updateTool(values);

    let idx = data!.data.findIndex((v) => v.id === tool.id);

    let newArray = [...data!.data];

    newArray[idx] = tool;

    setData({ ...data!, data: newArray });

    toggle.desactive();

  }

  async function handlerSave(values: Tool) {

    let tool = await saveTool(values);

    setData({ ...data!, data: [...data!.data, tool] });

    toggle.desactive();

  }

  function handlerOpenDelete(id: number) {

    setIdDelete(id);

    toggleDelete();

  }

}

export default Tools;