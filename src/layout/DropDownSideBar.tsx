import { redirect, useNavigate } from "react-router-dom";
import { Dropdown } from "semantic-ui-react";
import ContactModal from "../feature/contact/ContactModal";

const DropDownSideBar = () => {

  const navigate = useNavigate()

  return (
    <Dropdown text='Main'>
    <Dropdown.Menu>
      <Dropdown.Item onClick={()=>navigate('/')} icon='home' text='Home' />
      <Dropdown.Item onClick={()=>navigate('/knowledge')} icon='book' text='khowledge' />
      <Dropdown.Item onClick={()=>navigate('/proyect')} icon='bar' text='Proyects' />
      <Dropdown.Item onClick={()=>navigate('/tool')} icon='wrench' text='Tools' />
      <Dropdown.Item icon='user' text='About me' />
      <ContactModal />
    </Dropdown.Menu>
  </Dropdown>
 
  )
}

export default DropDownSideBar;