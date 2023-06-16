import { Field, Formik, Form } from 'formik';
import { Button, Form as UIForm, Icon, Label, Modal } from 'semantic-ui-react'
import { UseBoolean } from '../../../hooks/useBoolean';
import SelectCategory from '../../../shared/SelectCategory';
import { tool_schema } from '../tool';
import { save_tool, get_tool, update_tool } from '../tool.api';
import { useParams, useSearchParams } from 'react-router-dom';
import { useFetch } from '../../../hooks/useFetch';
import { Tool } from '../tool';
import { useEffect } from 'react';
import { remove_query } from '../../../utils/QueryParams';

const FormModal = ({ toggle }: props) => {

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
            desactive={desactive}
          />
        </Modal.Description>
      </Modal.Content>

    </Modal>
  )
};


const FormTool = ({ desactive }: { desactive(): void }) => {


  const { run,status , data  } = useFetch<Tool>();


  const [ params, setSearchParams ] = useSearchParams();

  let current = params.get('current');

  useEffect(()=>{

    console.log(current);

    if(!current) return;

    run(()=>get_tool(current!));

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

            {touched.name && typeof errors.name == 'string' &&
              (<p className='text-red-500 text-xs' > {errors.name}</p>)
            }
          </UIForm.Field>
          <SelectCategory onChange={(_, value) => { setFieldValue('category.id', value.value) }} />
          { typeof errors.category?.id == 'number' &&
              (<p className='text-red-500 text-xs' > {errors.img}</p>)
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
      if(!current) await save_tool(value);
      else await update_tool(value);
      desactive()

    }catch(err){
      alert((err as Error).message)
    };

  };

  function cancel(){

    setSearchParams(remove_query(params, 'current')); 

    desactive();
  }


}

type props = {

  toggle: UseBoolean


}

export default FormModal;
