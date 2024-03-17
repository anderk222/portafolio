import { Field, Form, Formik } from "formik";
import { Education } from "../model/education";
import { Form as UIForm } from 'semantic-ui-react'
import { saveEducationByToken, updateEducationByToken } from "../service/education.api";
import { useAuthContext } from "../../../context/AuthProvider";

const EducationForm = ({ education, onDelete, idx }: props) => {

    const auth = useAuthContext();

    const { id } = education;

    let isId = id > 0;


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
                        <UIForm.Button
                            disabled={isSubmitting}
                            loading={isSubmitting}
                            color="green"
                        >
                            Save
                        </UIForm.Button>
                        <UIForm.Button disabled={isSubmitting} type="reset" color="black" >Reset</UIForm.Button>
                        {onDelete != undefined && <UIForm.Button
                            color="red"
                            type="button"
                            disabled={isSubmitting}
                            onClick={() => onDelete(isId ? id : idx, isId ? 'id' : 'index')}
                        >Delete</UIForm.Button>
                        }
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

    education: Education,
    onDelete?(id: number, tipoIdentificador: 'index' | 'id'): void,
    idx: number
}

export default EducationForm;