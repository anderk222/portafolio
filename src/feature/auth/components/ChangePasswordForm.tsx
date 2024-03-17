import { Field, Formik, Form } from "formik";
import { ChangePassword, changePasswordDefault, changePaswordSchema } from "../models/ChangePassword";
import { Form as UIForm } from "semantic-ui-react";
import { changePassword } from "../service/auth.api";
import { useAuthContext } from "../../../context/AuthProvider";
import { useNavigate } from "react-router-dom";


export default function ChangePasswordForm() {

    const auth = useAuthContext();

    const navigate = useNavigate();

    return (
        <Formik<ChangePassword>

            initialValues={changePasswordDefault()}
            onSubmit={handlerSubmit}
            validationSchema={changePaswordSchema}
        >

            {({ isSubmitting, errors, touched }) =>
                <Form className="ui form" >

                    <UIForm.Field required >
                        <label>Password</label>
                        <Field name="oldPassword" placeholder='Write the old password' />
                        {touched.oldPassword && typeof errors.oldPassword == 'string' &&
                            (<p className='text-red-500 text-xs' > {errors.oldPassword}</p>)
                        }
                    </UIForm.Field>
                    <UIForm.Field required >
                        <label>New Password</label>
                        <Field name="newPassword" placeholder='Write your new password' />
                        {touched.newPassword && typeof errors.newPassword == 'string' &&
                            (<p className='text-red-500 text-xs' > {errors.newPassword}</p>)
                        }
                    </UIForm.Field>

                    <UIForm.Field required >
                        <label>Confirm Password</label>
                        <Field name="confirmPassword" placeholder='Write your new password' />
                        {touched.confirmPassword && typeof errors.confirmPassword == 'string' &&
                            (<p className='text-red-500 text-xs' > {errors.confirmPassword}</p>)
                        }
                    </UIForm.Field>
                    <UIForm.Group>
                        <UIForm.Button disabled={isSubmitting} loading={isSubmitting} color="green" >Save</UIForm.Button>
                        <UIForm.Button type="reset" color="black" >Reset</UIForm.Button>

                    </UIForm.Group>


                </Form>}

        </Formik>

    );

    async function handlerSubmit(data: ChangePassword) {

        try {

            await changePassword(data);

            auth.logOut();

            navigate('/auth');


        } catch (err) { }

    }

}