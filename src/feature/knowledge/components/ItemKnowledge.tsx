import { useNavigate } from 'react-router-dom';
import { Button, Item, Label, Progress } from 'semantic-ui-react'
import { khowledge } from '../khowledge';
import { useCallback, useState } from 'react';
import { delete_skill } from '../khowledge.api';

const ItemKnowledge = ({ khowledge } : { khowledge : khowledge }) => {

  const navigate = useNavigate();

  const [ state, setState ] = useState<'initial' |'loading' | 'ok'>('initial');

  const deleteSkill = useCallback(async(id : number)=>{

    try{

      setState('loading')
      await delete_skill(id);
      setState('ok')

    }catch(err){
      alert(( err as Error).message)
      setState('ok')
    }

  },[]);

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
            <Progress active percent={khowledge.level} autoSuccess inverted color='orange' indicating progress />
          </div>
        </Item.Description>
        <div>

        <Button 
        content='Delete' 
        onClick={()=>deleteSkill(khowledge.id)} 
        color='red' 
        loading={ state == 'loading' }
        />
          <Button onClick={()=>navigate(khowledge.id)} color='green' >
            Update
          </Button>
        </div>
      </Item.Content>
    </Item>
  )
}




export default ItemKnowledge;