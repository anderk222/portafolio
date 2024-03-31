import { useContext} from 'react'
import { Dropdown, Header, Icon, Modal } from 'semantic-ui-react'
import { modalContext } from '../../../context/ModalProvider';
import FormContact from './FormContact';

const ContactModal = () => {

    const ctx = useContext(modalContext);

  return (
    <Modal
    open={ctx?.open}
    trigger={<Dropdown.Item icon="mail" text='Contact' description="ctrl + m" />}
    onOpen={()=>ctx?.setOpen(true)}
    onClose={()=>ctx?.setOpen(false)} 
  >
    <Modal.Header>Contact me</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <Header>Send a email</Header>
         <FormContact />
      </Modal.Description>
    </Modal.Content>

  </Modal>
  )
}

export default ContactModal