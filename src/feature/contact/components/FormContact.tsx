import { Formik, Form, Field } from 'formik'
import { useContext, useState } from 'react';
import { Button, FormGroup, Icon, Input, Message, TextArea, Form as UIForm } from 'semantic-ui-react';

import { modalContext } from '../../../context/ModalProvider';
import { type Message as ContactMessage, contactSchema, messageDefault } from '../model/Message';
import { sendMail } from '../service/contact.api';

const FormContact = () => {

    const ctx = useContext(modalContext);
    const [apiError, setApiError] = useState<string | null>(null);

    return (
        <Formik<ContactMessage>
            initialValues={messageDefault()}
            validationSchema={contactSchema}
            onSubmit={handlerSubmit}
        >
            {({ errors, touched, isSubmitting, setFieldValue, setFieldTouched }) => (

                <Form className='ui form' noValidate>
                    <UIForm.Group>
                        <UIForm.Field className='w-full'>
                            <Input
                                iconPosition='left'
                                className='w-full'
                            >
                                <Icon name='user' aria-hidden="true" />
                                <Field
                                    placeholder='Write your name…'
                                    name='fullName'
                                    aria-label='Full name'
                                    autoComplete='name'
                                />
                            </Input>
                            {touched.fullName && typeof errors.fullName == 'string' &&
                              (<p className='text-red-500 text-xs' > {errors.fullName}</p>)
                            }
                        </UIForm.Field>
                        <UIForm.Field className='w-full'>
                            <Input
                                iconPosition='left'
                                className='w-full'
                            >
                                <Icon name='at' aria-hidden="true" />
                                <Field
                                    placeholder='Write your email…'
                                    name='username'
                                    type='email'
                                    autoComplete='email'
                                    aria-label='Email'
                                />
                            </Input>
                            {touched.username && typeof errors.username == 'string' &&
                              (<p className='text-red-500 text-xs' > {errors.username}</p>)
                            }
                        </UIForm.Field>
                    </UIForm.Group>
                    <UIForm.Group>
                        <UIForm.Field className='w-full'>
                            <TextArea
                                name="message"
                                placeholder='Write your message…'
                                aria-label='Message'
                                onChange={(event) => setFieldValue('message', event.target.value)}
                                onBlur={() => setFieldTouched('message', true)}
                            />
                            {touched.message && typeof errors.message == 'string' &&
                              (<p className='text-red-500 text-xs' > {errors.message}</p>)
                            }
                        </UIForm.Field>
                    </UIForm.Group>
                    {apiError && (
                        <Message negative>
                            <p>{apiError}</p>
                        </Message>
                    )}
                    <FormGroup className='justify-end'>
                        <Button loading={isSubmitting} disabled={isSubmitting} primary type='submit'>
                            Send
                        </Button>
                        <Button onClick={() => ctx?.setOpen(false)} secondary type='reset'>
                            Cancel
                        </Button>
                    </FormGroup>
                </Form>
            )}

        </Formik>
    )

    async function handlerSubmit(values: ContactMessage) {

        try {
            setApiError(null);
            await sendMail(values);
            ctx?.setOpen(false);
        } catch (err) {
            setApiError('Failed to send message. Please try again.');
        }

    }

}

export default FormContact
