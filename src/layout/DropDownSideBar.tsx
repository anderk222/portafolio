import { useNavigate } from "react-router-dom";
import { Dropdown } from "semantic-ui-react";
import ContactModal from "../feature/contact/components/ContactModal";

const DropDownSideBar = () => {

  const navigate = useNavigate();

  return (
    <Dropdown text='Main'>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => navigate('/home')} icon='home' text='Home' />
        <Dropdown.Item onClick={() => navigate('/knowledge')} icon='book' text='khowledge' />
        <Dropdown.Item onClick={() => navigate('/proyect')} icon='bar' text='Proyects' />
        <Dropdown.Item onClick={() => navigate('/tool')} icon='wrench' text='Tools' />
        <Dropdown.Item onClick={() => navigate('/')} icon='user' text='Resume' />
        <ContactModal />
        <Dropdown.Item onClick={() => navigate('/auth')} icon='key' text='Login' />

      </Dropdown.Menu>
    </Dropdown>

  )
}

export default DropDownSideBar;