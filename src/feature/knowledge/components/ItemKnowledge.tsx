import { useNavigate } from 'react-router-dom';
import { Button, Item, Label, Progress } from 'semantic-ui-react'
import { khowledge } from '../model/khowledge';
import { AuthCountext } from '../../../context/AuthProvider';

const ItemKnowledge = ({ khowledge, onDelete, auth }: props) => {

  const navigate = useNavigate();

  return (
    <Item className=''>
      <Item.Image size='tiny' src={khowledge.tool.img} />

      <Item.Content>
        <Item.Header>{khowledge.tool.name}</Item.Header>
        <Item.Meta>

          <p className='price'>{khowledge.time}</p>
          <Label color='blue'>{khowledge.tool.category.name}</Label>

        </Item.Meta>
        <Item.Description>
          <div className='bg-slate-200 ' >
            <Progress active percent={khowledge.level} autoSuccess inverted indicating progress />
          </div>
        </Item.Description>

        {auth?.isAuthenticated() && <div>
          <Button onClick={() => navigate(`form/${khowledge.id}`)} color='green' >
            Update
          </Button>
          <Button
            content='Delete'
            onClick={() => onDelete(khowledge.id)}
            color='red'
          />
        </div>
        }
      </Item.Content>
    </Item>
  )
}

type props = {

  onDelete(id: number): void,
  khowledge: khowledge
  auth?: AuthCountext

}


export default ItemKnowledge;