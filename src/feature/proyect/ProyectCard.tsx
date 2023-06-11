import { useNavigate } from "react-router-dom";
import { Button, Card } from "semantic-ui-react"

const ProyectCard = ({ handlerMore }:props) => {

    const navigate = useNavigate();

    return (
        <div>
            <Card
                header='Elliot Baker'
                meta='Friend'
                description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                extra={
                    <div className="flex " >
                        <Button onClick={()=>handlerMore(1)} size="small" content='Mas info' primary />
                        <Button size="small" content='probar' secondary />
                        <Button onClick={() => navigate('form')} size="small" content='Editar' color="green" />
                    </div>
                }
            />
        </div>
    )
};

type props = {

    handlerMore(id : number):void

}

export default ProyectCard;