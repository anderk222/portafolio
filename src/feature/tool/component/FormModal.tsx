import { Formik } from 'formik';
import { Button, Form, Icon, Label, Modal } from 'semantic-ui-react'
import { UseBoolean } from '../../../hooks/useBoolean';
import SelectCategory from '../../../shared/SelectCategory';

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

  async function handleSubmit(value : any){
  
    const res = await fetch('http:rickandmortyapi.com/character')
  
    
    
  };
  

  return (
    <Formik
      initialValues={{ aner: '' }}
      enableReinitialize={true}
      onSubmit={handleSubmit}
      validationSchema={{
      }}
    >
      {({ values, errors, isSubmitting }) => (
        <Form>
          <Form.Field>
            <label>Name</label>
            <input placeholder="Tool's name" />
          </Form.Field>
          <SelectCategory />
          <Form.Field>
            <label>Image</label>
            <input placeholder="Proyect's web" />
          </Form.Field>
          <Button.Group className='flex gap-2' >
            <Button loading={isSubmitting} color="green" type='submit'>Save</Button>
            <Button onClick={desactive} color="black" type='submit'>
              Cancel
            </Button>
          </Button.Group>
        </Form>
      )}
    </Formik>
  );
}

type props = {

  toggle: UseBoolean


}

export default FormModal;
