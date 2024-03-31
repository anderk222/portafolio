import { Field, Form, Formik } from 'formik';
import { Button,  Form as UIForm } from 'semantic-ui-react'
import { useSearchParams } from 'react-router-dom';
import { add_query } from '../../../utils/QueryParams';
import { useEffect } from 'react';

const FormSearch = () => {

  const [ querys, setQuerys ] = useSearchParams();

  useEffect(()=>{}, [querys]);

  return (
    <Formik
    initialValues={{
      username:'',
      email : ''
    }}
    onSubmit={onSubmit}
    >
      {({setFieldValue})=>(
            <Form className='ui form' >
            <UIForm.Field>
              <label>Username</label>
              <Field name='username' placeholder="write name's user" />
            </UIForm.Field>
            <UIForm.Field>
            <label>Email</label>
              <Field name='mail' placeholder="write mail's user" />
            </UIForm.Field>
            <Button type='submit'>Search</Button>
          </Form>
      )}

  </Formik>
  );

  function onSubmit(values : { username: string, email:string }, _ : any){


    setQuerys(add_query(querys, { name : values.username, email : values.email }))

  }
};


export default FormSearch;