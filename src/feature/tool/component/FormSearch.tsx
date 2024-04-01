import { Field, Form, Formik } from 'formik';
import { Button, Checkbox, Container, Form as UIForm } from 'semantic-ui-react'
import { SearchArgs } from '../../../models/search';
import { useSearchParams } from 'react-router-dom';
import { add_query } from '../../../utils/QueryParams';
import SelectCategory from '../../../shared/SelectCategory';
import { useEffect } from 'react';

const FormSearch = () => {

  const [ querys, setQuerys ] = useSearchParams();

  useEffect(()=>{}, [querys]);

  return (
    <Formik
    initialValues={{
      name:'',
      category : 0
    }}
    onSubmit={onSubmit}
    >
      {({setFieldValue})=>(
            <Form className='ui form' >
            <UIForm.Field>
              <label>Tool name</label>
              <Field name='name' placeholder='write tool name, example JavaScript' />
            </UIForm.Field>
            <UIForm.Field>
              <label>Category</label>
              <SelectCategory onChange={(_,v)=>setFieldValue('category', v.value)} />
            </UIForm.Field>
   
            <Button type='submit'>Search</Button>
          </Form>

      )}

  </Formik>
  );

  function onSubmit(values : SearchArgs, _ : any){


    setQuerys(add_query(querys, { name : values.name, category : values.category!.toString() }))

  }
};


export default FormSearch;