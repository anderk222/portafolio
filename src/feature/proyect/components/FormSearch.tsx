import { Field, Form, Formik } from 'formik';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

import { Button, Form as UIForm } from 'semantic-ui-react'
import SelectTool from '../../../shared/SelectTool';
import { add_query } from '../../../utils/QueryParams';


const FormSearch = () => {


  const [querys, setQuerys] = useSearchParams();

  useEffect(() => { }, [querys]);

  return (
    <Formik<SearchArgs>
    initialValues={{
      name: '',
      tool: 0
    }}
    onSubmit={onSubmit}
  >
    {({ setFieldValue }) => (
      <Form className='ui form' >
        <UIForm.Field>
          <label>Project name</label>
          <Field name='name' placeholder='write project name, example portafolio' />
        </UIForm.Field>
        <UIForm.Field>
          <label>Tool</label>
          <SelectTool onChange={(_, v) => setFieldValue('tool', v.value)} />
        </UIForm.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    )}
  </Formik>
  );

  function onSubmit(values: SearchArgs, _: any) {

    setQuerys(add_query(querys, { name: values.name, tool: values.tool.toString() }))

  }
}

type SearchArgs ={
  name : string,
  tool: number
}

export default FormSearch;