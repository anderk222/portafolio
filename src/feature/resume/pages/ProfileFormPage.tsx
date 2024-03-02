import { Field, Form, Formik } from "formik";
import { Button, ButtonGroup, ButtonOr, Container, Header, Icon, Image, Form as UIForm } from "semantic-ui-react";

const ProfileFormPage = () => {

    return (

        <Container>

            <Header size='medium' textAlign='center' as='h2' >
                Profile
            </Header>

            <Formik
                initialValues={{}}
                onSubmit={() => {

                }}
            >
                {({ }) => (

                    <Form className="ui form">

                        <div className="flex gap-2 flex-col" >
                            <label >Image </label>
                            <Image size="medium" src="https://react.semantic-ui.com/images/wireframe/image.png" />
                            <Button icon labelPosition='left' size="medium">
                                {/* <Icon name='file' /> */}
                                Update Image
                            </Button>
                        </div>
                        <UIForm.Field>
                            <label>Profile image</label>
                            <Field name="description" />
                        </UIForm.Field>

                        <UIForm.Field>
                            <UIForm.TextArea label='Profile Description' name="description" />
                        </UIForm.Field>

                        <UIForm.Button >
                            Guardar
                        </UIForm.Button>

                    </Form>

                )}
            </Formik>

        </Container>
    )


}

export default ProfileFormPage;