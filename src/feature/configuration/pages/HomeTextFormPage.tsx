import { Field, Formik, Form } from "formik";
import { useFetch } from "../../../hooks/useFetch";
import { useEffect } from "react";
import { Button, Container, Header, Form as UIForm, Message } from "semantic-ui-react";
import { UserDetail, userDetailDefault } from "../../user_detail/model/user-detail";
import { getUserDetailByToken, updateUserDetailByToken } from "../../user_detail/service/user-detail.api";

const HomeTextFormPage = () => {

    const { run, data, status } = useFetch<UserDetail>();

    useEffect(() => {
        run(() => getUserDetailByToken());
    }, []);

    return (
        <Container>
            <Header size='medium' textAlign='center' as='h2'>
                Home Text
            </Header>
            <p className="text-gray-500 text-center mb-4">
                Edit the welcome message that appears on your home page
            </p>

            {status === 'ok' || status === 'initial' ? (
                <Formik
                    initialValues={data || userDetailDefault()}
                    enableReinitialize={true}
                    onSubmit={handleSubmit}
                >
                    {({ setFieldValue, values, isSubmitting }) => (

                        <Form className="ui form">

                            <UIForm.Field>
                                <UIForm.TextArea
                                    label='Home Welcome Text'
                                    placeholder="Write your welcome message here..."
                                    onChange={(event) => setFieldValue('homeText', event.target.value)}
                                    value={values.homeText || ''}
                                    rows={6}
                                />
                            </UIForm.Field>

                            <UIForm.Button
                                primary
                                disabled={isSubmitting}
                                loading={isSubmitting}
                            >
                                Save
                            </UIForm.Button>

                        </Form>

                    )}
                </Formik>
            ) : status === 'loading' ? (
                <Message>Loading...</Message>
            ) : (
                <Message negative>Error loading data</Message>
            )}
        </Container>
    );

    async function handleSubmit(values: UserDetail) {
        try {
            await updateUserDetailByToken(values);
        } catch (err) {
            console.error('Error saving home text:', err);
        }
    }

};

export default HomeTextFormPage;
