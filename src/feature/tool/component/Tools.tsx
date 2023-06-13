import { useCallback, useEffect } from "react";
import { UseBoolean } from '../../../hooks/useBoolean';
import PaginationPortafolio from "../../../shared/PaginationPortafolio";
import FormModal from "./FormModal";
import ToolCard from "./ToolCard";
import { useFetch } from '../../../hooks/useFetch';
import { get_tools } from '../tool.api';
import { useParams, useSearchParams } from "react-router-dom";
import { paginable } from "../../../models";
import { Pagination } from '../../../models/response';
import { Tool } from "../tool";

const Tools = ({ toggle }: { toggle: UseBoolean }) => {


  const { run, status, data, error } = useFetch<Pagination<Tool>>((() => get_tools({ count: 10, page: 0 })))

  const { page, count } = useParams();

  const [params, setParams] = useSearchParams();

  const handlerEdit = useCallback((id: number) => {

    setParams({
      page: page || '0',
      count: count || '10',
      current: id.toString()
    }, { replace: true });

    toggle.active();

  }, []);

  useEffect(() => {

    let paginable: paginable = {
      page: page || 0,
      count: count || 10

    }

    run(() => get_tools(paginable));

  }, [page, count])



  return (
    <div className='flex gap-2 p-2 flex-wrap'>
      {status == 'ok' && data!.data.map((v, k) => (
        <ToolCard key={k} tool={v} handlerEdit={handlerEdit} />
      )
      )}

      <div className="flex w-full justify-center" >
        <PaginationPortafolio />
      </div>
      <FormModal toggle={toggle} />
    </div>
  );


}

export default Tools;