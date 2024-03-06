import { Button, Confirm, Container, Divider, Header, Loader } from "semantic-ui-react";
import EducationForm from "../../education/components/EducationForm";
import { Education, educationDefault } from "../../education/model/education";
import { useFetch } from "../../../hooks/useFetch";
import { Pagination, paginationDefault } from "../../../models";
import { useEffect, useState } from "react";
import { deleteEducation, getEducationsByToken } from "../../education/service/education.api";
import { useBoolean } from "../../../hooks/useBoolean";

const EducationFormPage = () => {

    const { data, status, setData, error, run } = useFetch<Pagination<Education>>();

    const { toggle: toggleDelete, boolean } = useBoolean();

    const [idDelete, setIdDelete] = useState(0);

    useEffect(() => {

        run(() => getEducationsByToken(''));

    }, []);


    return (

        <Container>

            <Confirm open={boolean}
                onConfirm={() => handlerDelete(idDelete)}
                onCancel={toggleDelete} />

            <Header size='medium' textAlign='center' as='h2' >
                Education
            </Header>
            {status == 'ok' && data?.data.map((value, idx) => (

                <EducationForm 
                key={idx} 
                education={value} 
                onDelete={handlerOpenDelete}
                idx={idx}
                />
            ))}
            {status == 'loading' && <Loader />}

            <Divider />
            <Button onClick={addEducation} >Add education</Button>

        </Container>

    );


    function addEducation() {
        if (!data) {
            setData({ ...paginationDefault(), data: [educationDefault()] })
        } else {

            setData({ ...data, data: [...data.data, educationDefault()] });
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
    async function handlerDelete(id: number) {

        await deleteEducation(id);

        setData({ ...data!, data: data!.data.filter(v => v.id != id) });

        toggleDelete();

    }



}

export default EducationFormPage;