import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom'
import { Container, Pagination, PaginationProps } from 'semantic-ui-react'
import { add_query } from '../utils/QueryParams';

const PaginationPortafolio = ({pages} : { pages? : number }) => {

  const [queryParams, setQueryParams] = useSearchParams();


  useEffect(() => {}, [queryParams]);

  // const total_pages = useMemo(()=>pages,[pages]);

  return (
    <Container textAlign='center'>
      <Pagination
        boundaryRange={0}
        defaultActivePage={1}
        ellipsisItem={null}
        firstItem={null}
        lastItem={null}
        siblingRange={1} 
        totalPages={pages || 10}
        onPageChange={onChange}
      />  </Container>

  )

  function onChange(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, p: PaginationProps) {

    let page = 0;

    if(typeof p.activePage === 'string') {

      page = parseInt(p.activePage);

    }else if (typeof p.activePage === 'number') page = p.activePage;

    setQueryParams(add_query(
      queryParams,
      {
        page: (page-1).toString()
      } 
    ));

  }
}
export default PaginationPortafolio