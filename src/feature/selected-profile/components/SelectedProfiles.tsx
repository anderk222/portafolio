import { Table, TableBody, TableCell, TableFooter, TableHeader, TableHeaderCell, TableRow } from "semantic-ui-react";
import PaginationPortafolio from "../../../shared/PaginationPortafolio";
import { useEffect } from "react";
import { getSelectedProfiles } from "../service/select-profile.api";
import { useSearchParams } from "react-router-dom";
import { Pagination } from "../../../models";
import { SelectedProfile } from "../model/SelectedUser";
import { useFetch } from "../../../hooks/useFetch";

function SelectedProfiles() {

  const [queryParams, setQueryParams] = useSearchParams();

  const { run, status, data, error, setData } = useFetch<Pagination<SelectedProfile>>();

  useEffect(()=>{run(()=>getSelectedProfiles(''))},[]);

    useEffect(() => {

      let search = {
        name: queryParams.get('name'),
        category: queryParams.get('category')
      }
  
      run(() => getSelectedProfiles(queryParams.toString()));
  
    }, [
      queryParams.get('page'),
    ]);
  

  return (

    <Table celled padded>
      <TableHeader>
        <TableRow>
          <TableHeaderCell >Name</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
          <TableHeaderCell>createAt</TableHeaderCell>
          <TableHeaderCell>desactiveAt</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
        </TableRow>
      </TableHeader>

      <TableBody>
      {status === 'ok' && data?.data.map((value)=>(
      <TableRow key={value.id}>
          <TableCell>{value.name}</TableCell>
          <TableCell>{value.mail}</TableCell>
          <TableCell>{value.createAt}</TableCell>
          <TableCell>{value.desactiveAt}</TableCell>
          <TableCell>{value.estado}</TableCell>
      </TableRow>
      ))}

    </TableBody>

      <TableFooter>
        <TableRow>
          <TableHeaderCell colSpan='5'>
            <PaginationPortafolio pages={data?.totalPages} />
          </TableHeaderCell>
        </TableRow>
      </TableFooter>
    </Table>

  );

}

export default SelectedProfiles;