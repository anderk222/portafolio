import { Button, Card } from "semantic-ui-react"
import { Tool } from '../tool';
import { AuthCountext } from "../../../context/AuthProvider";

const ToolCard = ({ onClickEdit, tool, onClickDelete,auth }: props) => {

    return (
        <div>
            <Card
                header={tool.name}
                meta='Friend'
                image={tool.img}
                extra={auth?.isAuthenticated() && <>
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
    tool: Tool,
    auth? : AuthCountext

}

export default ToolCard;