import { useNavigate } from 'react-router-dom';
import { Button, Divider, Header, Icon, Image, Label, Modal } from 'semantic-ui-react'
import { UseBoolean } from '../../../hooks/useBoolean';
import { Project } from '../model/project';
import Caurosel from '../../../shared/Carousel';

const MoreInfoModal = ({ toggle, project }: props) => {

  const { boolean, active, desactive } = toggle;

  const navigate = useNavigate();

  return (
    <Modal
      open={boolean}
      onClose={desactive}
      onOpen={active}
      size='large'

    >
      <Modal.Header>{project.name}</Modal.Header>
      <Modal.Content >
        <Modal.Description>
          <Caurosel images={project.images} />
           
          <Divider >
          </Divider>
          <h2 className='text font-semibold' >Detail</h2>
          <p className='text-zinc-700 whitespace-pre-wrap' >
            {project.detail}
          </p>
          <Header as={'h3'} >
            Tools
          </Header>
          <Label.Group>
            {project.tools.map(tool => <Label key={tool.id}>{tool.name}</Label>)}
          </Label.Group>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <a href={project.url || '#'} target='_blank' >

          <Button primary>
            try it real live
          </Button>
        </a>

        <Button onClick={() => navigate(`form/${project.id}`)} color='green'>
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

  toggle: UseBoolean,
  project: Project


}

export default MoreInfoModal;
