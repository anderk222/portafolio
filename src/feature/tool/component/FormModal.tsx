import { Field, Formik, Form } from 'formik';
import { Button, Form as UIForm, Icon, Label, Modal } from 'semantic-ui-react'
import { UseBoolean } from '../../../hooks/useBoolean';
import SelectCategory from '../../../shared/SelectCategory';
import { tool_schema } from '../tool';
import { getTool } from '../services/tool.api';
import { useSearchParams } from 'react-router-dom';
import { useFetch } from '../../../hooks/useFetch';
import { Tool } from '../tool';
import { useEffect } from 'react';
import { remove_query } from '../../../utils/QueryParams';

const FormModal = ({ toggle, handlerEdit, handlerSave }: props) => {

  const { boolean, active, desactive } = toggle;

  return (
    <Modal
      open={boolean}
      onClose={desactive}
      onOpen={active}
    /* size='' */
    >
      <Modal.Header>New Tool</Modal.Header>
      <Modal.Content >
        <Modal.Description>
          <FormTool
            {...{handlerEdit,handlerSave,toggle}}
          />
        </Modal.Description>
      </Modal.Content>

    </Modal>
  )
};
const FormTool = ({ handlerEdit,handlerSave,toggle }: props) => {

  const { run,status , data  } = useFetch<Tool>();


  const [ params, setSearchParams ] = useSearchParams();

  let current = params.get('current');

  useEffect(()=>{


    if(!current) return;

    run(()=>getTool(current!));

  },[params.get('current')])

  useEffect(()=>{},[data])

  return (
    <Formik
      initialValues={data || {
        id:0,
        name: '',
        category : {
          id : 0
        },
        img : ''
        
      }}
      enableReinitialize={true}
      onSubmit={handleSubmit}
      validationSchema={tool_schema}
    >
      {({ values, errors, touched, isSubmitting, setFieldValue }) => (
        <Form className='ui form' >
          <UIForm.Field>
            <label>Name</label>
            <Field
              name='name'
              placeholder="Tool's name" />

            {touched.img&& touched.name && typeof errors.name == 'string' &&
              (<p className='text-red-500 text-xs' > {errors.name}</p>)
            }
          </UIForm.Field>
          <SelectCategory onChange={(_, value) => { setFieldValue('category', value.value) }} />
          {typeof errors.category?.id == 'string' &&
              (<p className='text-red-500 text-xs' > {errors.category.id}</p>)
            }
          <UIForm.Field>
            <label>Image</label>
            <Field name='img' placeholder="Proyect's web" />
            {touched.img && typeof errors.img == 'string' &&
              (<p className='text-red-500 text-xs' > {errors.img}</p>)
            }

          </UIForm.Field>
          <Button.Group className=' w-fit ' >
            <Button  loading={isSubmitting || status == 'loading'} color="green" type='submit'>Save</Button>
            <Button onClick={cancel} color="black">
              Cancel
            </Button>
          </Button.Group>
        </Form>
      )}
    </Formik>
  );

  async function handleSubmit(value: any) {

    try{

      if(!current) await handlerSave(value);
      else{ 
        await handlerEdit(value);
        // setSearchParams(remove_query(params, 'current')); 
      }

    }catch(err){
      alert((err as Error).message)
    };

  };

  function cancel(){

    setSearchParams(remove_query(params, 'current')); 

    toggle.desactive();
  }


}

type props = {

  toggle: UseBoolean,
  handlerEdit : (values : Tool)=>Promise<void>,
  handlerSave : (value: Tool)=> Promise<void>


}

export default FormModal;
