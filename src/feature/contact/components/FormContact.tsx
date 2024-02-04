import { Formik } from 'formik'
import { useContext } from 'react';
import { Button, Form, FormGroup, Icon, Input } from 'semantic-ui-react';
import * as Yup from 'yup';
import { modalContext } from '../../../context/ModalProvider';

const FormContact = () => {

    const ctx = useContext(modalContext);

    const contactSchema = Yup.object().shape({
        name: Yup.string().min(4, 'this field must have as min 4 characteres'),
        email: Yup.string().email('this must a email').required('this field is required'),
        detai: Yup.string().min(5, 'this field must have as min 4 characteres')
    });

    return (
        <Formik
            initialValues={{ name: '', email: '', message: '' }}

            validationSchema={contactSchema}
            onSubmit={(values) => {
                ctx?.setOpen(false)
                alert(JSON.stringify(values))
            }}
        >
            {({ errors, touched, isValidating, handleChange, values }) => (

                <Form onSubmit={(values) => {
                    console.log(values)
                    ctx?.setOpen(false)
                }}
                    className='gap-2 flex flex-col'
                >
                    <FormGroup>
                        <Input
                            iconPosition='left'
                            className='w-full'
                            placeholder='Write your name'>
                            <Icon name='user' />
                            <input name='name' />
                        </Input>
                        <Input
                            iconPosition='left'
                            className='w-full' placeholder='Email'>
                            <Icon name='at' />
                            <input name='email' />
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <textarea name="message" placeholder='write your message'></textarea>
                    </FormGroup>
                    <FormGroup
                    className='justify-end'>
                        <Button primary type='submit'>
                            Save
                        </Button>
                        <Button secondary type='submit'>
                            Cancel
                        </Button>
                    </FormGroup>
                </Form>
            )}

        </Formik>
    )

    function handlerSubmit(values: any) {

        ctx?.setOpen(false)

    }


}

export default FormContact