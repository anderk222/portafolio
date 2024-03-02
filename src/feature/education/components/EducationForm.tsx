import { Field, Form, Formik } from "formik";
import { Education } from "../model/education";
import { Form as UIForm } from 'semantic-ui-react'
import { saveEducationByToken, updateEducationByToken } from "../service/education.api";
import { useAuthContext } from "../../../context/AuthProvider";

const EducationForm = ({ education }: props) => {

    const { id } = education;

    const auth = useAuthContext();

    return (

        <Formik<Education>
            initialValues={education}

            onSubmit={handlerSubmit}
        >
            {({ values, setFieldValue, isSubmitting }) => (
                <Form className="ui form">

                    <UIForm.Field>
                        <label >Career</label>
                        <Field name='career' placeholder='Position name' />

                    </UIForm.Field>

                    <UIForm.Field>
                        <label >College name</label>
                        <Field name='istName' placeholder='Position name' />

                    </UIForm.Field>

                    <UIForm.Field>
                        <UIForm.TextArea label='Detail' name='detail' placeholder='Details' />
                    </UIForm.Field>
                    <UIForm.Group>
                        <UIForm.Field>
                            <label htmlFor="startDate">Start date</label>
                            <Field type="date" name="startDate" />
                        </UIForm.Field>
                        <UIForm.Field>
                            <label htmlFor="endDate">End date</label>
                            <Field type="date" name="endDate" />
                        </UIForm.Field>
                    </UIForm.Group>
                    <UIForm.Group>
                        <UIForm.Button disabled={isSubmitting} loading={isSubmitting} >
                            Save
                        </UIForm.Button>
                    </UIForm.Group>


                </Form>
            )}

        </Formik>

    );

    async function handlerSubmit(values: Education) {

        let action: (body: Education) => Promise<Education>;

        if (!id) {

            if (auth.isAuthenticated()) action = saveEducationByToken;
            else action = saveEducationByToken

        } else {

            if (auth.isAuthenticated()) action = updateEducationByToken
            else action = updateEducationByToken

        }

        try {

            await action(values);

        } catch (err) {

        };

    }
}

type props = {

    education: Education
}

export default EducationForm;