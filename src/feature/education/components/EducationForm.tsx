import { Field, Form, Formik } from "formik";
import { Education } from "../model/education";
import { Form as UIForm } from 'semantic-ui-react'

const EducationForm = ({ education }: props) => {

    return (

        <Formik<Education>
            initialValues={education}

            onSubmit={() => { }}
        >
            {({ values, setFieldValue }) => (
                <Form className="ui form">

                    <UIForm.Field>
                        <label >Pocition</label>
                        <Field name='position' placeHolder='Position name' />

                    </UIForm.Field>

                    <UIForm.Field>
                        <label >College name</label>
                        <Field name='istName' placeHolder='Position name' />

                    </UIForm.Field>

                    <UIForm.Field>
                        <UIForm.TextArea label='Detail' name='detail' placeHolder='Details' />
                    </UIForm.Field>

                    <UIForm.Group>
                        <UIForm.Button>Save</UIForm.Button>
                    </UIForm.Group>


                </Form>
            )}

        </Formik>

    );
}

type props = {

    education: Education
}

export default EducationForm;