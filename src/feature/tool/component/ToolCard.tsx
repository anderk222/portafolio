import { Button, Card } from "semantic-ui-react"
import { Tool } from '../tool';

const ToolCard = ({ handlerEdit, tool }:props) => {

    return (
        <div>
            <Card
                header={tool.name}
                meta='Friend'
                image={tool.img}
                extra={<Button onClick={()=>handlerEdit(tool.id)} size="small" content='Editar' primary />}
            />
        </div>
    )
};

type props = {

    handlerEdit(id : number):void,
    tool : Tool

}

export default ToolCard;