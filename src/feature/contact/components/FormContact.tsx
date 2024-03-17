import { Formik, Form, Field } from 'formik'
import { useContext } from 'react';
import { Button, FormGroup, Icon, Input, TextArea, Form as UIForm } from 'semantic-ui-react';

import { modalContext } from '../../../context/ModalProvider';
import { Message, contactSchema, messageDefault } from '../model/Message';
import { sendMail } from '../service/contact.api';

const FormContact = () => {

    const ctx = useContext(modalContext);



    return (
        <Formik<Message>
            initialValues={messageDefault()}

            validationSchema={contactSchema}
            onSubmit={handlerSubmit}
        >
            {({ errors, isSubmitting, setFieldValue, values }) => (

                <Form
                    className='ui form'
                >
                    <UIForm.Group>

                        <Input
                            iconPosition='left'
                            className='w-full'
                            
                        >
                            <Icon name='user' />
                            <Field placeholder='Write your name' name='fullName' />
                        </Input>
                        <Input
                            iconPosition='left'
                            className='w-full' >
                            <Icon name='at' />
                            <Field placeholder='write your email' name='username' />
                        </Input>
                    </UIForm.Group>
                    <UIForm.Group>
                        <TextArea
                            name="message"
                            placeholder='write your message'
                            onChange={(event) => setFieldValue('message', event.target.value)}
                        />
                    </UIForm.Group>
                    <FormGroup
                        className='justify-end'>
                        <Button loading={isSubmitting} disabled={isSubmitting} primary type='submit'>
                            Save
                        </Button>
                        <Button onClick={() => ctx?.setOpen(false)} secondary type='reset'>
                            Cancel
                        </Button>
                    </FormGroup>
                </Form>
            )}

        </Formik>
    )

    async function handlerSubmit(values: any) {

        try {

            await sendMail(values);

            ctx?.setOpen(false)

        } catch (err) {

        }


    }


}

export default FormContact