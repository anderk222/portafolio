import { useNavigate } from 'react-router-dom';
import { Button, Item, Label, Progress } from 'semantic-ui-react'

const ItemKnowledge = () => {

  const navigate = useNavigate();

  return (
    <Item className=''>
      <Item.Image size='tiny' src='https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' />

      <Item.Content>
        <Item.Header>JavaScript</Item.Header>
        <Item.Meta>

          <p className='price'>1 years use it</p>
          <Label color='blue'>Program Language</Label>

        </Item.Meta>
        <Item.Description>
          <div className='bg-slate-200 ' >
            <Progress active percent={20} autoSuccess inverted color='orange' indicating progress />
          </div>
        </Item.Description>
        <div>
          <Button onClick={()=>navigate('form')} color='green' >
            Update
          </Button>
        </div>
      </Item.Content>
    </Item>
  )
}




export default ItemKnowledge;