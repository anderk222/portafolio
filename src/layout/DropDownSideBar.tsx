import { useNavigate } from "react-router-dom";
import { Dropdown } from "semantic-ui-react";
import ContactModal from "../feature/contact/components/ContactModal";
import { useAuthContext } from "../context/AuthProvider";
import { useEffect } from "react";

const DropDownSideBar = () => {

  const navigate = useNavigate();

  const auth = useAuthContext();

  let isAuthenticated = auth.isAuthenticated();

  useEffect(()=>{},[auth])

  return (
    <Dropdown text='Main'>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => navigate('/home')} icon='home' text='Home' />
        <Dropdown.Item onClick={() => navigate('/knowledge')} icon='book' text='khowledge' />
        <Dropdown.Item onClick={() => navigate('/proyect')} icon='bar' text='Proyects' />
       {isAuthenticated && <Dropdown.Item onClick={() => navigate('/tool')} icon='wrench' text='Tools' />}
        <Dropdown.Item onClick={() => navigate('/')} icon='user' text='Resume' />
        <ContactModal />
        {isAuthenticated && <Dropdown.Item onClick={() => navigate('/config')} icon='cog' text='Configuration' />}
        
        <Dropdown.Item onClick={() => navigate('/site/about')} icon='exclamation circle' text='About Site' />

        <Dropdown.Item onClick={() => {
          if (isAuthenticated) auth.logOut();
          else navigate('/auth')

        }} icon='key'
          text={isAuthenticated ? 'Log out' : 'Login'} />

      </Dropdown.Menu>
    </Dropdown>

  )
}

export default DropDownSideBar;