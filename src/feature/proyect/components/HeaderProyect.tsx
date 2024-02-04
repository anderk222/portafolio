import { Link } from 'react-router-dom';
import { Button, Container, Header, Icon } from 'semantic-ui-react'
import FilterAcordion from './FilterAcordion';



const HeaderProyect = () => {
  return (
    <Container>
      
      <Header size='large' textAlign='center' as='h2' >
        Proyectos
      </Header>
      
      <div className='flex gap-2 flex-wrap' >
      <Button color='green' icon>
        <Link to={'form'} >
        <Icon name='plus' />
        </Link>
      </Button>
      
      <FilterAcordion />
      </div>
    </Container>
  )
}

export default HeaderProyect;