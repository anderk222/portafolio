import { useNavigate } from "react-router-dom";
import { Button, Card } from "semantic-ui-react"

const ToolCard = ({ handlerEdit }:props) => {

    const navigate = useNavigate();

    return (
        <div>
            <Card
                header='ReactJS'
                meta='Friend'
                extra={<Button onClick={()=>handlerEdit(0)} size="small" content='Editar' primary />}
            />
        </div>
    )
};

type props = {

    handlerEdit(id : number):void

}

export default ToolCard;