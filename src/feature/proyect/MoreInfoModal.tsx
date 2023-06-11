import { useNavigate } from 'react-router-dom';
import { Button, Divider, Header, Icon, Image, Label, Modal } from 'semantic-ui-react'
import { UseBoolean } from '../../hooks/useBoolean';

const MoreInfoModal = ({ toggle }: props) => {

  const { boolean, active, desactive } = toggle;

  const navigate = useNavigate();

  return (
    <Modal
      open={boolean}
      onClose={desactive}
      onOpen={active}
      size='large'
    
    >
      <Modal.Header>Generador de excel</Modal.Header>
      <Modal.Content >
        <Modal.Description>
          <Image
            size='medium'
            centered
            src='https://react.semantic-ui.com/images/wireframe/image.png'

          />
          <Divider horizontal >
            Detail
          </Divider>
          <p className='text-zinc-700' >
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur reiciendis sed voluptate neque nostrum assumenda porro delectus quis quos exercitationem obcaecati esse, quibusdam suscipit, aliquam veniam eveniet, magnam est? Reprehenderit.
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem nam corporis cupiditate ut nihil ratione consectetur rerum dolore consequuntur vero, exercitationem delectus laudantium. Quod delectus voluptatum aliquid atque esse dignissimos!
          </p>
          <Header as={'h3'} horizontal >
            Tools
          </Header>
          <Label.Group>
            <Label as='a'>
              Fun
              <Icon name='close' />
            </Label>
            <Label as='a'>
              Happy
              <Label.Detail>22</Label.Detail>
            </Label>
            <Label as='a'>Smart</Label>
            <Label as='a'>Insane</Label>
            <Label as='a'>Exciting</Label>
          </Label.Group>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={desactive} primary>
          try it real live
        </Button>

        <Button onClick={()=>navigate('form')} color='green'>
          Update
        </Button>

        <Button onClick={desactive} color='black'>
          Close
        </Button>

      </Modal.Actions>
    </Modal>
  )
};

type props = {

  toggle: UseBoolean


}

export default MoreInfoModal;
