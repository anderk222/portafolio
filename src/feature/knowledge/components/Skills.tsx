import { Container, Item, Segment } from 'semantic-ui-react'
import PaginationPortafolio from '../../../shared/PaginationPortafolio';
import ItemKnowledge from './ItemKnowledge'
import { UseBoolean } from '../../../hooks/useBoolean';
import { useFetch } from '../../../hooks/useFetch';
import { useSearchParams } from 'react-router-dom';
import { useCallback, useEffect } from 'react';
import { add_query } from '../../../utils/QueryParams';
import { Pagination } from '../../../models/response';
import { khowledge } from '../khowledge';
import { get_knowledges, search_knowledges } from '../khowledge.api';
import FullLoading from '../../../shared/FullLoading';

const Skills = ({ toggle }:{ toggle : UseBoolean }) => {

    const { run, status, data, error } = useFetch<Pagination<khowledge>>((() => get_knowledges('')))

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
  
      if (!search.name && !search.category) run(() => get_knowledges(queryParams.toString()))
      else run(() => search_knowledges(queryParams.toString()));
  
    }, [
      queryParams.get('page'),
      queryParams.get('name'),
      queryParams.get('category')
    ]);

    return (
        <Container>
        
        {status == 'ok' &&<Segment>
           
                <Item.Group divided className='w-full'  >
                 {data?.data.map((v,k)=><ItemKnowledge key={k} khowledge={v} />)}
                </Item.Group>

        </Segment>
}
      { status == 'ok' && <PaginationPortafolio /> }
      { status == 'loading' && <FullLoading /> }

        </Container>
    )
}

export default Skills