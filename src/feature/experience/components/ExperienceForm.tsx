import { Field, Form, Formik } from "formik";
import { Experience } from "../model/experience";
import { Form as UIForm } from 'semantic-ui-react';
import { saveExperienceByToken, updateExperienceByToken } from "../service/experience.api";
import { useAuthContext } from "../../../context/AuthProvider";

const ExperienceForm = ({ experience }: props) => {

  const auth = useAuthContext();

  const { id } = experience;

  return (

    <Formik

      initialValues={experience}
      onSubmit={() => { }}
    >
      {({ setFieldValue, isSubmitting, values }) => (<Form className="ui form">

        <UIForm.Field>
          <label >Position</label>
          <Field name='position' placeholder='Position name' />

        </UIForm.Field>

        <UIForm.Field>
          <label >Company</label>
          <Field name='company' placeholder='Position name' />

        </UIForm.Field>

        <UIForm.Field>
          <UIForm.TextArea
            onChange={(event) => setFieldValue('detail', event.target.value)}
            value={values.detail}
            label='Detail' name='detail' placeholder='Details' />
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
          <UIForm.Button disabled={isSubmitting} loading={isSubmitting} >Save</UIForm.Button>
        </UIForm.Group>

      </Form>
      )}
    </Formik>

  );

  async function handlerSubmit(values: Experience) {

    let action: (body: Experience) => Promise<Experience>;

    if (!id) {

        if (auth.isAuthenticated()) action = saveExperienceByToken;
        else action = saveExperienceByToken

    } else {

        if (auth.isAuthenticated()) action = updateExperienceByToken
        else action = updateExperienceByToken

    }

    try {

        await action(values);

    } catch (err) {

    };

}
};

type props = {

  experience: Experience

}

export default ExperienceForm;