import { useNavigate } from "react-router-dom";
import { Button, Card } from "semantic-ui-react"
import { Project } from "../model/project";
import { AuthCountext } from "../../../context/AuthProvider";

const ProyectCard = ({ handlerMore, project, onDelete, auth }: props) => {

    const navigate = useNavigate()

    return (
        <div>
            <Card
                header={project.name}
                // meta='Friend'
                description={project.quickDetail}
                extra={<div className="flex " >
                    <Button
                        onClick={() => handlerMore(project)}
                        size="small"
                        content='Mas info'
                        primary />

                    {auth?.isAuthenticated() && <>
                        <Button
                            onClick={() => navigate(`form/${project.id}`)}
                            size="small" content='Editar'
                            color="green" />
                        <Button
                            onClick={() => onDelete(project.id)}
                            size="small"
                            content='Delete'
                            color="red" />

                    </>}

                </div>
                }
            />
        </div>
    );


};

type props = {

    handlerMore(project: Project): void,
    project: Project,
    onDelete(id: number): void,
    auth?: AuthCountext

}

export default ProyectCard;