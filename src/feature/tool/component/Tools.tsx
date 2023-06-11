import { useCallback, useEffect } from "react";
import { useBoolean } from "../../../hooks/useBoolean";
import { useCurrent } from "../../../hooks/useCurrent";
import PaginationPortafolio from "../../../shared/PaginationPortafolio";
import FormModal from "./FormModal";
import ToolCard from "./ToolCard";

const Tools = () => {

  const toggle = useBoolean();

  const { current, change, reset } = useCurrent<number>(0);

  const handlerEdit = useCallback((id: number) => {

    change(current);
    toggle.active();

  }, []);

  useEffect(() => { }, [toggle]);
  useEffect(() => { }, [current]);

  return (
    <div className='flex gap-2 p-2 flex-wrap'>
      <ToolCard handlerEdit={handlerEdit} />
      <ToolCard handlerEdit={handlerEdit} />
      <ToolCard handlerEdit={handlerEdit} />
      <ToolCard handlerEdit={handlerEdit} />
      <ToolCard handlerEdit={handlerEdit} />
      <ToolCard handlerEdit={handlerEdit} />
      <div className="flex w-full justify-center" >
        <PaginationPortafolio />
      </div>
      <FormModal toggle={toggle} />
    </div>
  )
}

export default Tools;