import { Button, Container, Header, Icon } from 'semantic-ui-react'
import FilterAcordion from './FilterAcordion';
import { UseBoolean } from '../../../hooks/useBoolean';

const HeaderUser = ({  toggle } : { toggle : UseBoolean }) => {
  return (
    <Container>
      
      <Header size='large' textAlign='center' as='h2' >
        Users
      </Header>
      
      <div className='flex gap-2 flex-wrap' >
      <Button 
      onClick={toggle.active}
      color='green'  icon>
        <Icon 
        name='plus'  />
      </Button>
      <FilterAcordion />
      </div>
    </Container>
  )
}

export default HeaderUser;