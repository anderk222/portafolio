import { Link } from 'react-router-dom';
import { Button, Container, Header, Icon } from 'semantic-ui-react'
import FilterAcordion from './FilterAcordion';
import { useAuthContext } from '../../../context/AuthProvider';

const KhowledgeHeader = () => {
  
  const auth = useAuthContext()

  return(

  
  <Container>
    <Header size='large' textAlign='center' as='h2' >
      Knowledge
    </Header>
    <div className='flex gap-2 flex-wrap' >
      {auth?.isAuthenticated()&&<Button color='green' icon>
        <Link to={'form'} >
          <Icon name='plus' />
        </Link>
      </Button>
}
      <FilterAcordion />
    </div>
  </Container>
)

}

export default KhowledgeHeader;