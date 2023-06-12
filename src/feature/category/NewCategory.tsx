import { Formik, FormikProps, FormikValues } from 'formik';
import { useRef } from 'react';
import { Button, Form, Modal } from 'semantic-ui-react';
import { useBoolean } from '../../hooks/useBoolean';


const NewCategory = () => {

    const formRef = useRef<FormikProps<FormikValues>>(null);
    const { active, boolean, desactive } = useBoolean(false);


    return (
        <Modal
            size='small'
            open={boolean}
            onClose={desactive}
            onOpen={active}
            trigger={<Button
                color='green'
                icon='plus' label='New Category' />}
        >
            <Modal.Header>
                New Category
            </Modal.Header>

            <Modal.Content>
                <Formik
                    initialValues={{}}
                    onSubmit={() => { desactive() }}
                    innerRef={formRef}

                >
                    {({ errors, values, status }) => (
                        <Form>
                            <Form.Field>
                                <label htmlFor="name">Category name</label>
                                <input
                                    name='name'
                                    id='name'
                                    placeholder="Write the category name"
                                />

                            </Form.Field>

                            <Modal.Actions>
                                <Button
                                    onClick={() => formRef.current?.submitForm()}
                                    content='Save'
                                    color='green'
                                />
                                <Button
                                    content='Cancel'
                                    onClick={desactive}
                                    color='red'
                                />
                            </Modal.Actions>

                        </Form>
                    )}
                </Formik>
            </Modal.Content>


        </Modal>
    )
}

export default NewCategory;