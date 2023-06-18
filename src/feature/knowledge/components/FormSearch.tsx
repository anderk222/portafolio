import { Formik, Form, Field } from 'formik';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button, Checkbox, Form as UIForm } from 'semantic-ui-react'
import { SearchArgs } from '../../../models';
import { add_query } from '../../../utils/QueryParams';
import SelectCategory from '../../../shared/SelectCategory';

const FormSearch = () => {

  const [querys, setQuerys] = useSearchParams();

  useEffect(() => { }, [querys]);

  return (
    <Formik
      initialValues={{
        name: '',
        category: 0
      }}
      onSubmit={onSubmit}
    >
      {({ setFieldValue }) => (
        <Form className='ui form' >
          <UIForm.Field>
            <label>Skill name</label>
            <Field name='name' placeholder='write skill name, example typescript' />
          </UIForm.Field>
          <UIForm.Field>
            <label>Category</label>
            <SelectCategory onChange={(_, v) => setFieldValue('category', v.value)} />
          </UIForm.Field>
          <Button type='submit'>Submit</Button>
        </Form>
      )}
    </Formik>
  );

  function onSubmit(values: SearchArgs, _: any) {


    setQuerys(add_query(querys, { name: values.name, category: values.category.toString() }))

  }
}

export default FormSearch;