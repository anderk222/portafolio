import { Confirm, Container, Item, Segment } from 'semantic-ui-react'
import PaginationPortafolio from '../../../shared/PaginationPortafolio';
import ItemKnowledge from './ItemKnowledge'
import { UseBoolean, useBoolean } from '../../../hooks/useBoolean';
import { useFetch } from '../../../hooks/useFetch';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Pagination } from '../../../models/response';
import { khowledge } from '../model/khowledge';
import FullLoading from '../../../shared/FullLoading';
import { deleteSkill, getKnowledges, getKnowledgesByToken, searchKnowledges, searchKnowledgesByToken } from '../service/khowledge.api';
import { useAuthContext } from '../../../context/AuthProvider';

const Skills = ({ toggle }: { toggle: UseBoolean }) => {

  const { run, status, data, error, setData } = useFetch<Pagination<khowledge>>();

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

  return (
    <Container>
      <Confirm open={boolean} 
      onConfirm={()=>handlerDelete(idDelete)} 
      onCancel={toggleDelete} />

      {status == 'ok' && <Segment>

        <Item.Group divided className='w-full'>
          {data?.data.map((v, k) =>
            <ItemKnowledge key={k} khowledge={v} onDelete={handlerOpenDelete}
            auth={auth}
            />
          )}
        </Item.Group>

      </Segment>
      }
      {status == 'ok' && <PaginationPortafolio pages={data?.totalPages || 1} />}
      {status == 'loading' && <FullLoading />}

    </Container>
  );


  function search(){

    let action : (query: string)=>Promise<Response>;

    let isAuthenticated = auth.isAuthenticated();


    if (!queryParams.get('name') && !queryParams.get('category')){

      if(isAuthenticated) action = getKnowledgesByToken;
      else action = getKnowledges;

    }else{

      if(isAuthenticated) action =searchKnowledgesByToken;
      else action = searchKnowledges;

    }

    run(() => action(queryParams.toString()))
  
  }

  function handlerOpenDelete(id: number) {

    setIdDelete(id);

    toggleDelete();

  }

  async function handlerDelete(id : number){

    await deleteSkill(id);

    setData({ ...data!, data: data!.data.filter(v => v.id != id) });

    toggleDelete();

  }
}



export default Skills;