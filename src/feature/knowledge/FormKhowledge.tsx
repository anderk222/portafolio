import { Formik } from "formik";
import { Button, Container, Form, Header, Icon, Label, LabelGroup, Segment } from "semantic-ui-react";
import { khowledge } from "./khowledge";
import { useFetch } from "../../hooks/useFetch";
import { useParams, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { get_skill } from "./khowledge.api";


const FormKhowledge = () => {

  const { run,status , data  } = useFetch<khowledge>();

  const { id } = useParams();


  const [ params, setSearchParams ] = useSearchParams();


  useEffect(()=>{


    if(!id) return;

    run(()=>get_skill(id));

  },[id])

  useEffect(()=>{},[data])
  return (
    <Container >
      <Segment color="blue" >

        <Header size='large' textAlign='center' as='h2' >
          New Khowledge
        </Header>

        <Formik
          initialValues={{ aner: '' }}
          enableReinitialize={true}
          onSubmit={() => {

          }}
          validationSchema={{

          }}
        >
          {({ values, errors }) => (
            <Form>
            <Form.Dropdown
                placeholder='Search category'
                label="Tool"
                fluid
                search
                selection
                options={[{ text: 'Hola', value: 'wow' }, { text: 'Hola2', value: 'chee' }]}
              />
              <Form.Input
                label={`Percentage skill:`}
                min={10}
                max={100}
                name='duration'
                
                step={10}
                type='range'
                //value={duration}
              />
              <Form.Field>
                <label>Time</label>
                <input placeholder="Time use it" />
              </Form.Field>
              <Button color="green" type='submit'>Save</Button>
            </Form>
          )}
        </Formik>
      </Segment >
    </Container>
  )
}

export default FormKhowledge;