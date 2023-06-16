import { useCallback, useEffect } from "react";
import { UseBoolean } from '../../../hooks/useBoolean';
import PaginationPortafolio from "../../../shared/PaginationPortafolio";
import FormModal from "./FormModal";
import ToolCard from "./ToolCard";
import { useFetch } from '../../../hooks/useFetch';
import { get_tools, search_tools } from '../tool.api';
import { useSearchParams } from "react-router-dom";
import { Pagination } from '../../../models/response';
import { Tool } from "../tool";
import { add_query } from '../../../utils/QueryParams';
import FullLoading from '../../../shared/FullLoading';

const Tools = ({ toggle }: { toggle: UseBoolean }) => {


  const { run, status, data, error } = useFetch<Pagination<Tool>>((() => get_tools('')))

  const [queryParams, setQueryParams] = useSearchParams();

  const handlerEdit = useCallback((id: number) => {

    setQueryParams(add_query(queryParams, {

      current: id.toString()

    }), { replace: true });

    toggle.active();

  }, []);

  useEffect(() => {

    let search = {
      name: queryParams.get('name'),
      category: queryParams.get('category')
    }

    if (!search.name && !search.category) run(() => get_tools(queryParams.toString()))
    else run(() => search_tools(queryParams.toString()));

  }, [
    queryParams.get('page'),
    queryParams.get('name'),
    queryParams.get('category')
  ]);

  return (
    <div className='flex gap-2 p-2 flex-wrap'>
      {status == 'ok' && data!.data.map((v, k) => (
        <ToolCard key={k} tool={v} handlerEdit={handlerEdit} />
      )
      )}

      {status == 'ok' &&
        <div className="flex w-full justify-center" >
          <PaginationPortafolio />
        </div>
      }
      {status == 'loading' && <FullLoading/> }
      <FormModal toggle={toggle} />
    </div>
  );


}

export default Tools;