import { Form, Formik, Field, FormikConfig } from "formik";
import { User, UserSave, userDefault } from "../model/user";
import { Form as UIform } from 'semantic-ui-react';
import { useEffect } from "react";
import { useFetch } from "../../../hooks/useFetch";
import { getUser, saveUser } from "../service/user.api";

function UserForm({ userId, onSaved }: props) {

    const user = useFetch<User>();

    useEffect(() => {

        if (userId) user.run(() => getUser(userId));

    }, [userId])

    return (
        <Formik<UserSave>
            initialValues={user.data ? { ...userDefault(), ...user.data } : userDefault()}
            onSubmit={handlerSubmit}
            enableReinitialize

        >
            {({ values, errors, setValues, setFieldValue, isSubmitting }) => (

                <Form className="ui form" >

                    <UIform.Group>
                        <UIform.Field required width={8}>
                            <label>Names</label>
                            <Field name="name" type="text" placeholder='full name' />
                        </UIform.Field>
                        <UIform.Field required width={8}>
                            <label>Email</label>
                            <Field name="mail" type="email" placeholder='Email' />
                        </UIform.Field>
                    </UIform.Group>

                    <UIform.Field required >
                        <label>Phone number</label>
                        <Field name="userDetail.phone" placeholder='Phone number  ' />
                    </UIform.Field>
                    <br />
                    <br />
                    <UIform.Button loading={isSubmitting} type="submit">Guardar</UIform.Button>
                </Form>
            )}

        </Formik>
    );

    async function handlerSubmit(values: UserSave) {

        let userSaved;

        try {

            if (userId) { }
            else userSaved = await saveUser(values)
            
        } catch (err) {

        }

        if (onSaved) onSaved!(userSaved);

    }
};

type props = {

    userId?: number;
    onSaved?: (user?: User) => void

};

export default UserForm;