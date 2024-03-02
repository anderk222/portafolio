import { Button, Container, Divider, Header, Loader } from "semantic-ui-react";
import EducationForm from "../../education/components/EducationForm";
import { Education, educationDefault } from "../../education/model/education";
import { useFetch } from "../../../hooks/useFetch";
import { Pagination, paginationDefault } from "../../../models";
import { useEffect } from "react";
import { getEducationsByToken } from "../../education/service/education.api";

const EducationFormPage = () => {
    
    const { data, status, setData, error, run } = useFetch<Pagination<Education>>();

    useEffect(() => {

        run(() => getEducationsByToken(''));

    }, []);


    return (

        <Container>

            <Header size='medium' textAlign='center' as='h2' >
                Education
            </Header>
            {status == 'ok' && data?.data.map((value, idx) => (

                <EducationForm key={idx} education={value} />
            ))}
            {status == 'loading' && <Loader />}

            <Divider />
            <Button onClick={addEducation} >Add education</Button>

        </Container>

    );


    function addEducation() {
        if (!data) {
            setData({...paginationDefault(), data: [educationDefault()]})
        }else{

            setData({...data, data: [...data.data, educationDefault()]});
        }

        
    }


}

export default EducationFormPage;