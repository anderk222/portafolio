import { Button, Confirm, Container, Divider, Header, Loader } from "semantic-ui-react";
import { Experience, experienceDefault } from "../../experience/model/experience";
import { Pagination, paginationDefault } from "../../../models";
import { useFetch } from "../../../hooks/useFetch";
import { useEffect, useState } from "react";
import { deleteExperience, getExperiencesByToken } from "../../experience/service/experience.api";
import ExperienceForm from "../../experience/components/ExperienceForm";
import { useBoolean } from "../../../hooks/useBoolean";

const ExperienceFormPage = () => {

    const { data, status, setData, error, run } = useFetch<Pagination<Experience>>();

    const { toggle: toggleDelete, boolean } = useBoolean();

    const [idDelete, setIdDelete] = useState(0);

    useEffect(() => {

        run(() => getExperiencesByToken(''));

    }, []);

    return (

        <Container>

            <Confirm open={boolean}
                onConfirm={() => handlerDelete(idDelete)}
                onCancel={toggleDelete} />

            <Header size='medium' textAlign='center' as='h2' >
                Expeiences
            </Header>

            {status == 'ok' && data?.data.map((value, idx) => (
                <ExperienceForm 
                key={idx} 
                experience={value} 
                onDelete={handlerOpenDelete}
                idx={idx}
                />
            ))}
            {status == 'loading' && <Loader active />}

            <Divider />
            <Button onClick={addExperience} >Add experience</Button>

        </Container>

    );

    function addExperience() {
        if (!data) {
            setData({ ...paginationDefault(), data: [experienceDefault()] })
        } else {

            setData({ ...data, data: [...data.data, experienceDefault()] });
        }

    }

    function handlerOpenDelete(id: number, tipoIdentificador: 'index' | 'id') {

        if (tipoIdentificador == 'index') {

            if (!data) return;

            setData({ ...data, data: data.data.filter((value, idx) => idx !== id) });

        } else {

            setIdDelete(id);

            toggleDelete();

        }


    }
    async function handlerDelete(id : number){

        await deleteExperience(id);
    
        setData({ ...data!, data: data!.data.filter(v => v.id != id) });
    
        toggleDelete();
    
      }

  }


export default ExperienceFormPage;