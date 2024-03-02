import { Button, Container, Divider, Header } from "semantic-ui-react";
import ExperienceForm from "../../experience/model/components/ExperienceForm";
import { Experience } from "../../experience/model/experience";

const defaultExp: Experience = {
    id: 0,
    company: ":)",
    position: "",
    detail: null,
    startDate: new Date(),
    endDate: new Date()
}

const ExperienceFormPage = () => {

    return (

        <Container>

            <Header size='medium' textAlign='center' as='h2' >
                Expeiences
            </Header>

            <ExperienceForm experience={defaultExp} />
            <Divider />
            <ExperienceForm experience={defaultExp} />
            <Button  >Add experience</Button>

        </Container>

    );


}

export default ExperienceFormPage;