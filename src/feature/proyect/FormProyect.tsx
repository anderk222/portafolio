import { Formik } from "formik";
import { Button, Checkbox, Container, Form, Header, Icon, Label, LabelGroup, Segment } from "semantic-ui-react";


const FormProyect = () => {
  return (
    <Container >
      <Segment color="blue" >
        <Header size='large' textAlign='center' as='h2' >
          Nuevo proyecto
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
              <Form.Field>
                <label>Title</label>
                <input placeholder="Proyect's name" />
              </Form.Field>
              <Form.Field>
                <label>Url</label>
                <input placeholder="Proyect's web" />
              </Form.Field>
              <Form.Dropdown
                placeholder='Search tools'
                label="Tools"
                fluid
                multiple
                search
                selection
                options={[{ text: 'Hola', value: 'wow' }, { text: 'Hola2', value: 'chee' }]}
              />
              <Form.TextArea
                label="Detail"
              >
              </Form.TextArea>

              <Form.Field>
                <label>Imagenes</label>
                <input placeholder="Proyect's web" />
              </Form.Field>
              <div className="flex w-full pb-2" >
                <Label  >
                   Imagen
                    <Icon name="delete" />
                </Label>
              </div>  
              <Button color="green" type='submit'>Submit</Button>
            </Form>
          )}
        </Formik>
      </Segment >
    </Container>
  )
}

export default FormProyect;