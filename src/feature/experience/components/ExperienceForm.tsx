import { Field, Form, Formik } from "formik";
import { Experience } from "../model/experience";
import { Form as UIForm } from 'semantic-ui-react';
import { saveExperienceByToken, updateExperienceByToken } from "../service/experience.api";
import { useAuthContext } from "../../../context/AuthProvider";

const ExperienceForm = ({ experience, onDelete, idx }: props) => {

  const auth = useAuthContext();

  const { id } = experience;

  let isId = id > 0;

  return (

    <Formik

      initialValues={experience}
      onSubmit={handlerSubmit}>
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
          <UIForm.Button disabled={isSubmitting} loading={isSubmitting} color="green" >Save</UIForm.Button>
          <UIForm.Button disabled={isSubmitting} type="reset" color="black" >Reset</UIForm.Button>
          {onDelete != undefined  && <UIForm.Button
          color="red"
          type="button"
            disabled={isSubmitting}
            onClick={() =>onDelete(isId ? id : idx, isId ? 'id' : 'index' )}
          >Delete</UIForm.Button>
          }

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

  onDelete?(id: number, tipoIdentificador : 'index' | 'id'): void,
  experience: Experience,
  idx: number

}

export default ExperienceForm;