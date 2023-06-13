import { Link } from 'react-router-dom';
import { Button, Container, Header, Icon } from 'semantic-ui-react'
import NewCategory from '../../category/NewCategory';
import FilterAcordion from './FilterAcordion';
import { UseBoolean } from '../../../hooks/useBoolean';



const HeaderTool = ({  toggle } : { toggle : UseBoolean }) => {
  return (
    <Container>
      
      <Header size='large' textAlign='center' as='h2' >
        Tools
      </Header>
      
      <div className='flex gap-2 flex-wrap' >
      <Button 
      onClick={toggle.active}
      color='green'  icon>
        <Icon 
        name='plus'  />
      </Button>
      <NewCategory />
      
      <FilterAcordion />
      </div>
    </Container>
  )
}

export default HeaderTool;