import { Button, Card } from "semantic-ui-react"
import { Tool } from '../tool';

const ToolCard = ({ onClickEdit, tool, onClickDelete }: props) => {

    return (
        <div>
            <Card
                header={tool.name}
                meta='Friend'
                image={tool.img}
                extra={<>
                    <Button onClick={() => onClickEdit(tool.id)} size="small" content='Editar' primary />
                    <Button onClick={() => onClickDelete(tool.id)} size="small" content='Elminar' negative />
                </>}
            />
        </div>
    )
};

type props = {

    onClickEdit(id: number): void,
    onClickDelete(id: number):void 
    tool: Tool

}

export default ToolCard;