import { Field, Formik, Form } from "formik";
import { ChangePassword, changePasswordDefault, changePaswordSchema, changePaswordSchemaAdmin } from "../models/ChangePassword";
import { Form as UIForm } from "semantic-ui-react";
import { changeOwnPassword, changePassword } from "../service/auth.api";
import { useAuthContext } from "../../../context/AuthProvider";
import { useNavigate } from "react-router-dom";


export default function ChangePasswordForm({ admin, userId, onSaved }: props) {

    const auth = useAuthContext();

    const navigate = useNavigate();

    return (
        <Formik<ChangePassword>
        
            initialValues={changePasswordDefault(admin)}
            onSubmit={handlerSubmit}
            validationSchema={admin ? changePaswordSchemaAdmin : changePaswordSchema}
        >

            {({ isSubmitting, errors, touched }) =>
                <Form className="ui form" >
                    {!admin &&
                        <UIForm.Field required >
                            <label>Password</label>
                            <Field autoComplete='false' name="oldPassword" placeholder='Write the old password' type='password' />
                            {touched.oldPassword && typeof errors.oldPassword == 'string' &&
                                (<p className='text-red-500 text-xs' > {errors.oldPassword}</p>)
                            }
                        </UIForm.Field>
                    }
                    <UIForm.Field required >
                        <label>New Password</label>
                        <Field autoComplete='false' name="newPassword" placeholder='Write your new password' type='password' />
                        {touched.newPassword && typeof errors.newPassword == 'string' &&
                            (<p className='text-red-500 text-xs' > {errors.newPassword}</p>)
                        }
                    </UIForm.Field>
                    {!admin &&
                        <UIForm.Field required >
                            <label>Confirm Password</label>
                            <Field autoComplete='false' name="confirmPassword" placeholder='Write your new password' type='password' />
                            {touched.confirmPassword && typeof errors.confirmPassword == 'string' &&
                                (<p className='text-red-500 text-xs' > {errors.confirmPassword}</p>)
                            }
                        </UIForm.Field>
                    }
                    <UIForm.Group>
                        <UIForm.Button
                            disabled={isSubmitting} loading={isSubmitting} color="green" >
                            Save
                        </UIForm.Button>
                        <UIForm.Button type="reset" color="black" >Reset</UIForm.Button>

                    </UIForm.Group>


                </Form>}

        </Formik>

    );

    async function handlerSubmit(data: ChangePassword) {

        try {

            if (!admin) {

                await changeOwnPassword(data);

                auth.logOut();

                navigate('/auth');

            }
            else {

                await changePassword({ ...data, userId: userId || 0 })

            }
        } catch (err) { }

        if (onSaved) onSaved();

    }

}

type props = {

    admin?: boolean;
    userId?: number;
    onSaved?: () => void

}