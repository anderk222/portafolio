import { Formik, FormikProps, FormikValues, Form, Field } from 'formik';
import { useRef } from 'react';
import { Button, Modal, FormInput, Form as UIForm, FormGroup } from 'semantic-ui-react';
import { useBoolean } from '../../hooks/useBoolean';
import { Category, category_schema } from './category';
import { save_category } from './category.api';


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
                    initialValues={{
                        id: 0,
                        name: ''
                    }}
                    onSubmit={handleSubmit}
                    innerRef={formRef}
                    validationSchema={category_schema}

                >
                    {({ errors, values, isSubmitting, touched }) => (
                        <Form className='ui form' >

                            <UIForm.Field >
                                <label htmlFor="name">Category name</label>
                                <Field  placehorlder='' name="name" />
                                {typeof errors.name == 'string' && touched.name &&
                                    <p className='text-xs text-red-500' >{errors.name}</p>
                                }
                            </UIForm.Field>

                            <Modal.Actions>
                                <Button
                                    type='submit'
                                    content='Save'
                                    color='green'
                                    loading={isSubmitting}
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

    async function handleSubmit(values: FormikValues) {
        try {

            await save_category(values as Category);
            desactive();

        } catch (err) {

            alert((err as Error).message)

        }

    }
}

export default NewCategory;