import { Button, Container, Divider, Header, Loader } from "semantic-ui-react";
import { Experience, experienceDefault } from "../../experience/model/experience";
import { Pagination, paginationDefault } from "../../../models";
import { useFetch } from "../../../hooks/useFetch";
import { useEffect } from "react";
import { getExperiencesByToken } from "../../experience/service/experience.api";
import ExperienceForm from "../../experience/components/ExperienceForm";

const ExperienceFormPage = () => {

    const { data, status, setData, error, run } = useFetch<Pagination<Experience>>();

    useEffect(() => {

        run(() => getExperiencesByToken(''));

    }, []);


    return (

        <Container>

            <Header size='medium' textAlign='center' as='h2' >
                Expeiences
            </Header>
             
            {status=='ok' && data?.data.map((value, idx)=>(
                <ExperienceForm key={idx} experience={value} />
            ))}
            {status=='loading' && <Loader active     />}

            <Divider/>
            <Button onClick={addExperience} >Add experience</Button>

        </Container>

    );

    function addExperience() {
        if (!data) {
            setData({...paginationDefault(), data: [experienceDefault()]})
        }else{

            setData({...data, data: [...data.data, experienceDefault()]});
        }

        
    }


}

export default ExperienceFormPage;