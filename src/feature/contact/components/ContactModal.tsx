import { useContext, useEffect, useCallback } from 'react'
import { Dropdown, Header, Icon, Modal } from 'semantic-ui-react'
import { modalContext } from '../../../context/ModalProvider';
import FormContact from './FormContact';

const ContactModal = () => {

    const ctx = useContext(modalContext);

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.ctrlKey && e.key === 'm') {
            e.preventDefault();
            ctx?.setOpen(true);
        }
    }, [ctx]);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

  return (
    <Modal
    open={ctx?.open}
    trigger={<Dropdown.Item icon="mail" text='Contact' description="ctrl + m" />}
    onOpen={()=>ctx?.setOpen(true)}
    onClose={()=>ctx?.setOpen(false)}
    style={{ overscrollBehavior: 'contain' }}
  >
    <Modal.Header>Contact me</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <Header style={{ textWrap: 'balance' }}>Send an email</Header>
         <FormContact />
      </Modal.Description>
    </Modal.Content>

  </Modal>
  )
}

export default ContactModal