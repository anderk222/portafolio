import { useNavigate } from "react-router-dom";
import { Button, Card } from "semantic-ui-react"
import { Project } from "../model/project";

const ProyectCard = ({ handlerMore, project }: props) => {

    const navigate = useNavigate();

    return (
        <div>
            <Card
                header={project.name}
                // meta='Friend'
                description={project.quickDetail}
                extra={
                    <div className="flex " >
                        <Button onClick={() => handlerMore(project)} size="small" content='Mas info' primary />
                        <a href={project.url || '#'} target="_blank">
                            <Button content='probar' secondary />
                        </a>
                        <Button onClick={() => navigate(`form/${project.id}`)} size="small" content='Editar' color="green" />
                    </div>
                }
            />
        </div>
    )
};

type props = {

    handlerMore(project: Project): void,
    project: Project

}

export default ProyectCard;