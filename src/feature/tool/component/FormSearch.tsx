import { Field, Form, Formik } from 'formik';
import { Button, Checkbox, Container, Form as UIForm } from 'semantic-ui-react'
import { SearchArgs } from '../../../models/search';
import { useSearchParams } from 'react-router-dom';
import { add_query } from '../../../utils/QueryParams';
import SelectCategory from '../../../shared/SelectCategory';
import { useEffect } from 'react';
import { Category } from '../../category/model/category';

const FormSearch = () => {

  const [ querys, setQuerys ] = useSearchParams();

  let initialValues = {
    name: '',
    category: {
      id: 0        
    } as Category
  }

  useEffect(()=>{
    initialValues.name = querys.get('name') || '';
    initialValues.category.id = parseInt(querys.get('category') || '0');
  },[]);

  return (
    <Formik
    initialValues={initialValues}
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


    setQuerys(add_query(querys, { name : values.name, category : values?.category?.id.toString() }))

  }
};


export default FormSearch;