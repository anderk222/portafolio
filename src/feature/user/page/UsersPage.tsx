import { useEffect, useState } from "react";
import { useFetch } from "../../../hooks/useFetch";
import { Pagination } from "../../../models";
import { User } from "../model/user";
import { useSearchParams } from "react-router-dom";
import { useBoolean } from "../../../hooks/useBoolean";
import { useAuthContext } from "../../../context/AuthProvider";
import { deleteUser, getUsers, searchUsers } from "../service/user.api";
import { Confirm, Container, List } from "semantic-ui-react";
import HeaderUser from "../components/HeaderUser";
import ListItemUser from "../components/ListItemUser";
import PaginationPortafolio from "../../../shared/PaginationPortafolio";
import ChangePasswordModal from "../components/ChangePasswordModal";
import { saveSelectedProfile } from "../../selected-profile/service/select-profile.api";
import UserFormModal from "../components/UserFormModal";

function UsersPage() {

  const { run, setData, data, error, status } = useFetch<Pagination<User>>();

  const [queryParams] = useSearchParams();

  const { toggle: toggleDelete, boolean } = useBoolean();

  const toggleUser = useBoolean();

  const togglePassword = useBoolean();

  const toggleDefault = useBoolean();

  const [userId, setUserId] = useState(0);


  const auth = useAuthContext();

  useEffect(() => {

    search();

  }, [
    queryParams.get('page'),
    queryParams.get('name'),
    queryParams.get('category')
  ]);


  useEffect(() => { }, [boolean, togglePassword.boolean]);

  useEffect(() => { }, [toggleDefault.boolean])

  return (
    <Container>

      <HeaderUser toggle={toggleUser} />

      <List divided celled >
        {status == 'ok' && data?.data.map((value) =>
          <ListItemUser
            onClickDelete={handlerOpenDelete}
            key={value.id} user={value}
            onClickPassword={handlerOpenPassword}
            onSetDefault={handlerOpenSetDefault}
          />
        )}
      </List>

      <PaginationPortafolio pages={data?.totalPages} />
      <Confirm open={boolean}
        onConfirm={() => handlerDelete(userId)}
        onCancel={()=>{toggleDelete();setUserId(0)}}
      />
      <ChangePasswordModal
        onSaved={handlerPasswordChanged}
        userId={userId}
        toggle={togglePassword}
        onClose={()=>{togglePassword.toggle();setUserId(0)}}
      />

      <UserFormModal
        userId={userId}
        onClose={()=>{toggleUser.toggle();setUserId(0)}}
        toggle={toggleUser}
        onSaved={handlerSavedUser}
      />

      <Confirm
        open={toggleDefault.boolean}
        onConfirm={() => handlerSetDefault(userId)}
        onCancel={()=>{toggleDefault.toggle();setUserId(0)}}
      />

    </Container>
  );

  function search() {

    let action: (query: string) => Promise<Response>;


    if (!queryParams.get('name')) {

      action = getUsers;

    } else {

      action = searchUsers;

    }

    run(() => action(queryParams.toString()))

  };

  function handlerOpenDelete(id: number) {

    setUserId(id);

    toggleDelete();

  }

  async function handlerDelete(id: number) {

    await deleteUser(id);

    setData({ ...data!, data: data!.data.filter(v => v.id != id) });

    toggleDelete();

    setUserId(0);

  }


  function handlerOpenPassword(id: number) {

    setUserId(id);

    togglePassword.toggle();

  }

  function handlerPasswordChanged() {

    togglePassword.toggle();

    setUserId(0);

  }


  function handlerOpenSetDefault(id: number) {

    setUserId(id);

    toggleDefault.toggle();

  }

  async function handlerSetDefault(id: number) {

    await saveSelectedProfile({ id });

    toggleDefault.toggle();

  }

  function handlerSavedUser(user?: User){

    console.log(user);
    

    if(user && data){
      
      let newList: User[];

      let index = data.data.findIndex(value=> value.id===user.id);

      if(index < 0) newList = [ ...data.data, user ];
      else newList = [...data.data]; newList[index]=user;

      setData({...data, data: newList});

    }

    toggleUser.toggle();

    setUserId(0);

  }

}

export default UsersPage;