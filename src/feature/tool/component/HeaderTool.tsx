import { Link } from 'react-router-dom';
import { Button, Container, Header, Icon } from 'semantic-ui-react'
import NewCategory from '../../category/NewCategory';
import FilterAcordion from './FilterAcordion';



const HeaderTool = () => {
  return (
    <Container>
      
      <Header size='large' textAlign='center' as='h2' >
        Tools
      </Header>
      
      <div className='flex gap-2 flex-wrap' >
      <Button color='green' icon>
        <Link to={'form'} >
        <Icon name='plus' />
        </Link>
        
      </Button>
      <NewCategory />
      
      <FilterAcordion />
      </div>
    </Container>
  )
}

export default HeaderTool;