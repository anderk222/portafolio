import { Button, Container, Divider, Header } from "semantic-ui-react";
import EducationForm from "../../education/components/EducationForm";
import { Education } from "../../education/model/education";

const defaultExp: Education = {
    id: 0,
    istName: ":)",
    position: "",
    startDate: new Date(),
    endDate: new Date()
}

const EducationFormPage = () => {

    return (

        <Container>

            <Header size='medium' textAlign='center' as='h2' >
                Education
            </Header>
            <EducationForm education={defaultExp} />
            <Divider />
            <Button  >Add education</Button>

        </Container>

    );


}

export default EducationFormPage;