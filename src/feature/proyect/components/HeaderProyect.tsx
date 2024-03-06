import { Link } from 'react-router-dom';
import { Button, Container, Header, Icon } from 'semantic-ui-react'
import FilterAcordion from './FilterAcordion';
import { useAuthContext } from '../../../context/AuthProvider';

const HeaderProyect = () => {

  const auth = useAuthContext();

  return (
    <Container>

      <Header size='large' textAlign='center' as='h2' >
        Proyectos
      </Header>
      {auth?.isAuthenticated() && <NewButton />}
      <div className='flex gap-2 flex-wrap' >

        <FilterAcordion />
      </div>
    </Container>
  )
};

const NewButton = () => {

  return (
    <Button color='green' icon>
      <Link to={'form'} >
        <Icon name='plus' />
      </Link>
    </Button>
  )

}

export default HeaderProyect;