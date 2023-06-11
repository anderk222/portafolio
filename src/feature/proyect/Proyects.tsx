import { useCallback, useEffect } from "react";
import { useBoolean } from "../../hooks/useBoolean";
import { useCurrent } from "../../hooks/useCurrent";
import PaginationPortafolio from "../../shared/PaginationPortafolio";
import MoreInfoModal from "./MoreInfoModal";
import ProyectCard from "./ProyectCard"

const Proyects = () => {

  const toggle = useBoolean();

  const { current, change, reset } = useCurrent<number>(0);

  const handlerMore = useCallback((id: number) => {

    change(current);
    toggle.active();

  }, []);

  useEffect(() => { }, [toggle]);
  useEffect(() => { }, [current]);

  return (
    <div className='flex gap-2 p-2 flex-wrap'>
      <ProyectCard handlerMore={handlerMore} />
      <ProyectCard handlerMore={handlerMore} />
      <ProyectCard handlerMore={handlerMore} />
      <ProyectCard handlerMore={handlerMore} />
      <ProyectCard handlerMore={handlerMore} />
      <ProyectCard handlerMore={handlerMore} />
      <div className="flex w-full justify-center" >
        <PaginationPortafolio />
      </div>
      <MoreInfoModal toggle={toggle} />
    </div>
  )
}

export default Proyects;